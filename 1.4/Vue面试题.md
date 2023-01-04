# 1. 生命周期函数

## 1.1 什么是声明周期函数

每一个vue实例从创建到销毁的过程，就是这个vue实例的生命周期,是到了某一个特定的时间节点会自动触发的钩子函数

在这个过程中,他经历了从开始创建、初始化数据、编译模板、挂载Dom、渲染→更新→渲染、卸载等一系列过程

## 1.2  生命周期有哪些过程

1. beforeCreate 实例创建前

   实例还未创建 会开始进行数据初始化,这个过程,会定义data数据,方法以及事件,并且完成数据劫持observe以及给组件实例配置watcher观察者实例，

2. created 实例创建后

   当这个函数执行的时候,我们已经可以拿到data下的数据以及methods下的方法了,所以在这里我们可以开始调用方法进行数据请求了

3. baforeMount 挂载前

   会先生产一个虚拟dom进行对比,还没有渲染到页面

4. mounted 挂载后

   可以操作dom的,因为这个时候dom已经渲染完成了。

5. beforeUpdate 更新前

   只有当我们状态数据发生变化时,我们在触发beforeUpdate 数据变了视图未更新

6. updated 更新后

   updated里面也可以操作dom，并拿到最新更新后的dom 数据变了视图更新

7. beforeDestory 销毁之前

   这个函数内，你还是可以操作实例的

8. destoryed 销毁之后

   可以执行一些优化操作,清空定时器，解除绑定事件

除了这八个还有三个

keep-aliva 两个生命周期函数

actived 激活缓存组件
deactived 停用缓存组件
errorCaptured(咦而康死错的) 子组件出错的时候触发

## 1.3 生命周期都会执行几次

beforeCreate

created

baforeMount

mounted

以上四个是创建阶段的钩子函数 这些钩子函数只会执行1次

beforeUpdate

updated

更新阶段的钩子函数会执行0次或者无数次

beforeDestory

destoryed

销毁阶段的钩子函数 执行1次

## 1.4 这些钩子函数如可触发？

⻚⾯⼀开始加载的时候就会触发创建前后和挂载前后的钩⼦函数, ⽽更新的钩⼦函数需要当我们改变data的时候才能触发,⽐如点击按钮,执⾏⼀个⽅法,在这个⽅式⾥⾯给data⾥⾯属性重新复制操作,这个时候就会执行更新的钩⼦函数, 销毁的钩⼦函数是组件进⾏切换的时候就会进⾏销毁.

## 1.5 在项目开发过程中哪些钩子函数用的比较多

用的比较多的钩子函数有created和mounted

created和mounted的区别就是created比 mounted执行的时间更早

所以会更多的在created中请求

在created中我经常调用axios请求数据或者获取本地存储里的数据

在mounted中我们经常获取dom节点

有时候也存在获取不到dom元素的情况,这个时候我们⼀般⽤$nextTick⽅法来解决

## 1.6 ⻚⾯第⼀次加载时⽗⼦组件⽣命周期执⾏的顺序是什么?

页面一.beforeCreate

页面一.created

页面一.beforeMount

组件一.beforeCreate

组件一.created

组件一.beforeMount

组件一.mounted

页面一.mounted

# 2. vue数据双向绑定原理

vue双向数据绑定是 通过 数据劫持 并结合 发布-订阅模式 的方法来实现的,也就是说数据和视图同步,数据发生变化,视图跟着变化,视图变化，数据也随之发生改变。
其中 数据劫持 是通过 Object.defineProperty() 方法实现的。vue 在内部会把定义在 data 中的属性通过这个方法全部转为 getter/setter
在数据变动时发布消息给订阅者，触发相应的监听回调。
这个时候就可以实现数据的双向绑定
Object.defineProperty 是对象的一个方法，当添加或者修改属性的时候会触发，
第一个参数是目标对象，第二个参数是要修改的属性，第三个参数是配置项，可以是 value 和 writeable 等选项，也可以是 get 和 set 函数
get 是获取值的时候触发 需要 return 一个值就是这个属性的值
set 是修改值的时候触发 有一个默认参数就是修改后的值
Object.defineProperty 的缺点 是 对于新添加的属性检测不到解决的方法 this.$set

# 3. vuex

## 3.1 什么是vuex

vuex 是 vue 的状态管理工具 管理项目中的公共数据 能够在所有的组件中使用

```js
imort store from '../store/index.js' 
// 如果不在组件里面用vuex的话，想要使用就要先引入state
```

## 3.2 五大核心以及怎么调用

state 存放数据的地方 通过this.$store.state调用

mutations 修改state的地方 通过this.$store.commit调用

getters 计算state的地方 通过this.$store.getters调用

actions(爱可神死) 发送异步请求的地方 通过this.$store.dispatch调用

modules 模块化 把数据分模块管理

## 3.3 vuex的辅助函数

vuex的辅助函数其实就是一个语法糖

mapState
mapMutations

mapActions
mapGetters

都是先引入 然后展开使用

mapState和mapGetters在计算属性下展开

mapActions和mapMutations在methods下展示

展开的时候用扩展运算符...展开

## 3.4 vuex的执行机制

在项目中如果要改变state的状态,我们一般是在组件里面调用this.$store.dispatch方法来触发actions里面的方法,
在actions里面通过commit来调用mutations里面定义的方法来改变state,同时这也是vuex的执行机制

## 3.5 vuex的弊端

vuex也有一些弊端,比如浏览器刷新的时候,vuex的数据会丢失,我们一般结合本地存储来解决,当我们在mutations里面改变state的时候,通过localStorage或者sessionStorage存储到本地,然后在state的状态的属性值那块写一个三元表达式,如果本地存在数据的话则读取本地存储的数据,否则就赋值为null
实现如下：

```js
在state中
list: localStorage.getItem("list")? JSON.parse(localStorage.getItem("list")): [];
```

## 3.6 vuex持久化插件

持久化原理：做到数据状态持久化，使页面刷新后数据不会初始化为默认状态。
安装插件 npm i vuex-persistedstate
结着引用 注册

```js
import states from 'vuex-persistedstate';
Vue.use(Vuex);
export default new Vuex.store({
    plugins:[states] // 注意引入名字是随便起的名字
```

## 3.7 怎么开启严格模式

strict(死最可特): true, 跟 state 同级的地方设置这个属性
开启完严格模式后 如果不是通过 mutation 修改的 state 就会报错
strict 严格模式只适合开启在开发环境下

## 3.8 modules模块化

当在vuex中存储的数据很多的时候,需要用modules来分模块管理

每个模块里又有四个核心

 state mutations getters actions

然后引入仓库 

并且在modules下注册模块

在定义的modules里开启一个命名

namespaced:true

# 4. vue路由模式与区别以及原理

**vue的路由模式一共有两种,分别是hash(哈希)和history**

## 4.1 hash模式

就是指 url 后面的 # 号以及后面的字符,每次刷新页面时是直接更改 # 后的东西

由于 hash 值变化不会导致浏览器向服务器发出请求，而且 hash 改变会触发 hashchange事件 (hashchange只能改变 # 后面的 url片段)虽然 hash路径出现在URL中，但是不会出现在 HTTP请求中，对后端完全没有影响，因此改变 hash值不会重新加载页面，基本都是使用 hash 来实现前端路由的。

## 4.2 history模式

包含 back、forward、go方法；

history 模式 URL就要和后端进行一致，所以要改为 history也需要后端的配合，否则会报错；

history 每次刷新会重新向后端请求整个网址，也就是重新请求服务器。如果后端没有及时响应，就会报错404！。

## 4.3 原理

hash 原理：灵活运用了 html的瞄点功能，改变 # 后的路径本质上是更换了当前页面的瞄点，所以不会刷新页面。通过监听浏览器的 onhashchange()事件变化，查找对应的路由规则。

history 原理： 利用 H5的 history中新增的两个API ：pushState()和 replaceState()和一个事件onpopstate监听URL变化。

## 4.4 优缺点

**hash模式**
优点：

兼容性强，达到 IE8
除发送 ajax和资源请求外不会发送其他多余请求
改变 # 后的路径不会自动刷新页面
无需服务器进行配合
缺点：

访问路径上包含 # ，不美观
对于需要锚点功能的需求会与当前路由机制发生冲突
重定向操作时，后段无法获取 url完整路径
**history模式**
优点：

符合 url 地址规范，没有 # ，使用起来比较美观
后端可以获取到完整的路由信息
可以使用 history.state获取完整的路由信息
可以进行修改历史记录，并且不会立刻向后端发起请求
缺点：

兼容性只到IE10
改变 url路径后会重新请求资源
若访问的路由地址不存在时会报404，需服务端配合支持重定向返回统一的404页面
如果对于项目没有硬性标准要求，可以直接使用 hash模式开发

# 5. vue路由守卫

vue路由守卫就是当我们进行页面跳转的时候会触发的钩子函数,

vue一共有三种路由守卫

第一种是全局路由守卫

beforeEach路由进入之前

beforeResolve 路由解析之前

afterEach 路由离开之前

第二种是组件集守卫

beforeRouteEnter路由进入之前

beforeRouteUpdate路由更新之前

beforeRouteLeave路由离开之前

第三种独享守卫

beforeEnter路由进入之前

这几个钩子函数里面都有一个回调函数,分别是to,from,next to代表到哪儿去 from代表从哪儿来 next代表执行下一步

## 5.1 导航守卫的使用场景

再写代码的过程中我一般用导航守卫进行页面的鉴权处理,再用户登录成功的时候,我们会吧token和用户信息存到vuex或者本地存储中,
代表了用户的登录状态,在访问某个页面的时候判断是否存有token,就能正常访问这个页面,如果没有token,那么就用next跳转到登录页面

## 5.2 导航守卫的执行顺序

全局前置

单个路由规则的

组件前置守卫

全局解析守卫

后置守卫

## 5.3 beforeEach和beforeResolve的区别

这两个都是全局守卫 都是在路由跳转之前就会执行的守卫
beforeEach比beforeResolve执行的时间要更早



# 6. v-if与v-show的区别

他们的区别就是首先v-if和v-show都是控制元素的显示与隐藏

不过v-if控制元素的显示和隐藏的时候会删除对应的dom元素,当每一个显示的时候,都会重新创建dom和渲染

而v-show则通过css的display:none和display:block来控制元素的显示与隐藏
v-if比较耗费性能,所以我们涉及到频繁的显示隐藏操作我们建议使用v-show

如果不是频繁操作的话,我们可以v-if
在项目中我会经常使用v-if和v-show,比如我们在搜索功能的时候,他有一个历史记录,这个时候我们根据是否有搜索的结果来判断历史记录的显示与隐藏,这块我就可以使用v-if,当然用v-show也可以,以上就是我对v-if和v-show的理解

# 7. v-for与v-if优先级

v-for的优先级高,因为v-for的时候我们才开始渲染dom元素,这个v-if还无法进行判断
v-for和v-if不能同时使用,我们可以通过标签,比如div或者template标签来进行包裹,把v-if写在包裹的标签上面(写在v-for外面)还有就是用计算属性算出来想要的数据再去循环在

在vue2中，v-for的优先级高于v-if

在vue3中，v-if的优先级高于v-for

# 8. methods、computed、watch的区别

methods 是方法 各种事件放在这里 没有缓存功能

computed 是计算属性 需要return计算的结果 并且有缓存功能 只有跟他有关的值发生变化才会重新计算 否则就从缓存里拿 通常用来计算总数和总价 比如购物车功能就会用到计算属性

watch 监听属性 有三个参数 handler(韩哥乐)(执行函数) deep(深度监听) immediate(音没低特)(立即监听)

如果不需要depp和immediate的时候就会简写成一个函数

watch可以监听data数据还有监听路由的变化

watch里可以执行异步操作 但是计算属性不行

watch的使用场景 存本地存储的时候 只要数据变了就要重新存一次 那么就可以用watch实现

# 9. vue组件通信

1.⽗传⼦

在⼦组件的标签上定义属性 ⼦组件通过props来进⾏接收,可以通过数组或者对象的⽅式接收,如果⽗组件没有传递属性,⼦组件可以default来设置默认值

父传子的使用场景 封装列表的时候 把数据传到子组件渲染

2.⼦传⽗ 

⼦组件通过this.$emit("⾃定义的事件的名字",要传给⽗组件的数据), ⽗组件通过⼦组件的标签监听⾃定义的时间,最后在父组件接收使用就可以了

子传父的使用场景：在子组件中有删除等方法的时候要在子组件把下标传到父组件操作数据

3.兄弟组件

通信
通过中央事件总线,我们也称之为eventBus,

在main.js定义一个空的vue实例并且挂载在原型上,通过$emit传数据,在要接收的子组件的created钩子函数下通过$on接收

4.vuex把公共数据存在vuex里这样就能实现组件通信

5.本地存储
把要传递的数据存在本地存储里,再要接收的组件接收,也能实现组件通信

6.v-model
v-model是一个语法糖 是:value和@input的合写 所以说能实现组件通信

7.$attr和$listener

主要是祖孙之间传值 父组件下面有子组件a 子组件a下面又有 子组件b 在父组件里还是用自定义属性和自定义事件传 在子组件a下面绑定v-bind="$attrs" v-on="$listeners" 在子组件b下面通过$attrs 拿数据 通过 $emit 调用方法

8.provide 和 inject
不管嵌套了几层都能拿到数据 把数据定义在 provide 里 在子组件通过 inject 拿到数据 缺点是不响应
9.children 和 parent
在子组件里通过$parent 拿到父组件的数据和方法
在父组件里通过$children 拿到子组件的数据和方法

# 10. vue中data返回值为什么是函数

- 如果data是一个函数的话，这样每复用一次组件，就会返回一份新的data(类似于给每个组件实例创建一个私有的数据空间，让各个组件实例维护各自的数据)
- Object是引用数据类型，里面保存的是内存地址，单纯的写成对象形式，就使得所有组件实例共用了一份data，就会造成一个变了全都会变的结果。

- 组件是可复用的vue实例,一个组件被创建好之后,就可以被用在各个地方
- 组件不管被复用了多少次,组件中的data数据都应该是相互隔离,互不影响的
- 组件每复用一次,data数据就应该被复制一次,之后,当某一次复用的地方组件内data数据被改变时,其他复用地方组件的data数据不受影响

## 10.1 .data为什么必须是一个函数？

因为组件是可以复用的, JS里对象是引用关系, 如果组件data是一个对象, 那么在子组件中的data属性值会互相污染, 产生副作用。

所以一个组件的data选项必须是一个函数， 因此每个实例可以维护一份被返回对象的独立拷贝。new Vue的实例是不会被复用的，因此不存在以上问题。

## 10.2 .为什么实例data是一个对象？

Vue开发的应用一般为单页面应用，**一般情况下只有一个Vue实例**，所以实例中的数据可以在当前项目中共享，所以Vue实例中的data是一个对象

## 10.3 为什么组件data是一个对象？

**Vue组件的出现是为了组件中的视图和数据可以复用**（可以简单理解为js中的函数封装），被复用的组件在不同的复用位置可能在操作不同的数据，所以每个组件的data数据必须相互独立，所以组件中的data是一个函数，函数内部返回一个只能让当前组件使用的对象数据

# 11. vue中data发生变化,视图不更新如何解决

在 vue2 中 vue 实例的 data 数据是响应式 的 就是数据变了 视图也会跟着变，如果给某一个 data 新添加了一个字段 这个新添加的字段因为 js 的限制不响应，需要使用 this.$set 方法代替原本的普通添加方法 就能实现响应，这个方法的三个参数 是给谁添加 添加的字段 初始值 如果不是在组件中 用这个方法 那么就用 Vue.set

在 vue3 中数据响应的原理从 definedproperty 变成了 proxy 所以不会存在数据变了视图不变的问题

# 12. vue跨域如何解决

跨域本质是浏览器基于同源策略的一种安全手段

同源策略（Sameoriginpolicy），是一种约定，它是浏览器最核心也最基本的安全功能

所谓同源（即指在同一个域）具有以下三个相同点

- 协议相同（protocol）

- 主机相同（host）

- 端口相同（port）


反之非同源请求，也就是协议、端口、主机其中一项不相同的时候，这时候就会产生跨域

解决跨域的方法有很多，下面列举了三种：

- JSONP
- CORS
- Proxy

# 13. keep-alive的理解

keep-alive 是 vue 内置的⼀个组件，

作⽤就是能够缓存不活动的组件，⼀般情况下，组件进⾏切换的时候，会进⾏销毁，如果让某个组件不进行销毁,⽽是保存之前的状态，⽐如说刚刚填好的表单数据。

那么就可以利⽤ keep-alive 来实现 被缓存的组件 切换的时候不会触发创建和销毁的钩子函数

而是会触发跟 keep-alive 相关的 activated（激活） deactivated（停用）

这两个钩子函数 keep-alive 黑白名单 有 include 属性和 exclude 属性

include 属性 定义了要缓存谁

exclude 属性 定义了不缓存谁

还有两个生命周期函数

actived 激活缓存组件

deactived 停用缓存组件

**作用：** 在组件切换过程中将状态保留在[内存](https://so.csdn.net/so/search?q=内存&spm=1001.2101.3001.7020)中，防止重复渲染DOM，减少加载时间及性能消耗，提高用户体验性。

**注意：** 只有组件被 keep-alive 包裹时，这两个生命周期才会被调用，如果作为正常组件使用，是不会被调用

# 14. 函数混入

mixin 混入 把公共的选项（生命周期函数，计算属性，watch 等）提到一个 js 文件里，哪个组件用就在哪个组件引入
混入有全局混入和局部混入 局部混入是只在这个组件里能用 全局混入是这个项目的任何组件都能使用
如果混入和组件都有这个选项的时候混入里的先触发

