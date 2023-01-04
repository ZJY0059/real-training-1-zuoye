# 1. 说⼀下 es6 新增的特性有那些?

- 变量声明⽅式  let 和 const
- 基本数据类型 Symbol
- 模板字符串
- 解构赋值
- Set 和 Map 数据结构
- 箭头函数
- 扩展运算符
- 数组方法: array.from()、includes、map()、some()、every()、find()
- es6新增了模块化
- promise
- async await
- class 以及 继承
- 对象字面量简写  (简写的对象方法不能用作构造函数，否则会报错)
- 函数参数允许设置默认值
- 数组实例新增了 entries() keys() 和 values() 等方法
- 提供Proxy构造函数，用来生成Proxy实例
- ES6新增了生成器（Generator）和遍历器（Iterator）

# 2. promise

prominse函数是解决异步编程问题产生,所谓promise,简单说就是一个容器,里面保存着某个未来才会结束的事件从语法上说,promise是一个对象,从它可以获取异步操作的消息，prominse提供统一的API,各种异步操作都可以用同样的方法通过进行处理

**特点：**

1.对象的状态不受外界影响 有三种状态：pedding(等待中) fulfilled(已成功) rejected(已失败)

一旦状态改变,就不会再变,任何时间都可以得到这个结果 如果改变已经发生了，你再对promise对象添加回调函数，也会立即得到这个结果,这与事件(event loop)完全不同,事件的特点是，如果你错过了它，再去监听,是得不到结果的

**概念:promise是一个容器,里面存放着异步事件**

**语法：promise是一个对象,可以获取异步操作的消息**

**promise的返回值无论是不是promise函数,最终都会被封装promise函数进行返回,需要我们用then方法**

2.状态的变化：

​      2.1 从等待中到已成功(pedding -> fulfilled)

​      2.2 从等待中到已失败(pedding -> rejected)

3.一旦状态确定,便不在更改,状态凝固--->resolved   (无论什么时候都监听我 我就是这个样子)

4.和事件循环的区别

事件循环一旦错过,不会再被监听到

promise状态凝固,永远都可以被监听到

.promise的回调参数

.resolve->成功的回调

.reject-> 失败的回调

5.promise的方法

​       **1.then**

​       **2.catch**

​                 2.1 在链式调用中,catch只能捕捉第一个then返回的错误信息

​                 2.2 在链式调用中,想要单独的捕捉每个then的错误信息,需要每个then后面去跟随catch来进行捕获

​      **3.all方法**

​                3.1 语法：promise.all([p1,p2,p3]).then(res=>console.log(res))

​                3.2 特点

​                       1.接受的参数为数组[]

​                       2.返回值为一个数组,进行获取最终的结果

​                       3.必须等待全部参数函数返回成功后,才会执行,不能单独获取任何一个函数的值

​                3.3 缺点

​                        1.任何一个函数崩掉(挂掉)都不能执行

​    **4.race方法**

​                 3.1 语法：promise.race([p1,p2,p3]).then(res=>console.log(res))

​                 3.2 特点

​                          1.接受的参数为数组[]

​                          2.返回值为一个数组,进行获取最终的结果

​                          3.谁先执行完,返回谁,状态就是谁

​      **5.finally**

​                          无论成功或者失败总会执行

      ```js
 // 实例化promise对象
    let a = new Promise((resolve, reject) => {
        setTimeout(() => {
            // let data='我要休息了'
            // resolve(data)
                //resolve打印成功的消息
            let data1 = '错误信息'
            reject(data1)
            //reject打印失败的消息
        })
    })
    a.then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    })
   //实例化的a就可以使用.then.catch
      ```

```js
 // 1.实例化promise函数
    // 通过 new xmlhttoprequest 实例化连接对象
    // 3.确定请求方式,以及请求的接口路径
    // 4.发送请求
    // 5.绑定事件,处理响应结果
    // 6.prominse函数的调用

 
        // 用Promise封装原生ajax请求
        const p = new Promise((resolve, reject) => {
            // 实例化Promise构造函数
            var xhr = new XMLHttpRequest()
            console.dir(xhr);
            // 创建原生ajax对象
            xhr.open("GET", "https://elm.cangdu.org/v1/users/count");
            // 确定请求方式和路径open("请求方式","请求资源的地址");
            xhr.send()
            // 发送请求
            xhr.onreadystatechange = function () {
                // onreadystatechange 事件 当请求被发送到服务器时，我们需要执行一些基于响应的任务。 
                // 每当 readyState 改变时，就会触发 onreadystatechange 事件。
                // AJAX请求发送后，readyState状态就会改变，readyState状态一改变就执行onreadystatechange函数。其中readyState状态为4的话，就是请求发送完成
                if (xhr.readyState == 4) {//readyState是请求状态
                    if(xhr.status==200||xhr.status==304){//status可以查看到请求资源的状态，200与304就代表成功获取资源，例如404这些就是请求失败
                        resolve(xhr.response)//请求消息(request)和响应消息(response) 
                    }
                    else{
                        reject(xhr.response)
                    }
                }
            }
        })

        p.then(res=>{
            console.log(res);
        },err=>{
            console.log(err);
        })
        //readyState的请求状态
        // 0	AJAX开始初始化
        // 1	开始发送AJAX请求
        // 2	AJAX请求发送完成
        // 3	开始解析响应的资源
        // 4	AJAX请求的步骤全部完成
```

```js
const fs=require('fs')
const p=new Promise((resolve, reject) => {
    fs.readFile('./为学.md',(err,data)=>{
        if(err) reject(err)
       resolve(data)
    })
})
p.then(function(value){
    console.log(value.toString());
}),function(reason){
    console.log('读取失败');
}
```

```js
//链式调用代码抽离
const fs = require('fs')
// 引入fs
function fn(url) {
    return new Promise((resolve, reject) => {
        fs.readFile(url, (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
}
// 封装一个函数,吧地址作为参数传进入

fn('./poetry/黄鹤楼.md').then(res => {
    return res.toString()
}).then(data => {
    console.log(data);
    fn('./poetry/望庐山瀑布.md').then(res => {
        // return res.toString()
        console.log(res.toString());
    })
}).then(() => {
    fn('./poetry/咏柳.md').then(res => {
        console.log(res.toString());
    })
})
```

```js
//all方法
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

</body>

</html>
<script>
    const getlist = `
    故人西辞黄鹤楼，烟花三月下扬州。
孤帆远影碧空尽，唯见长江天际流。
                 `;
    const getlist1 = `
    故人西辞黄鹤楼，烟花三月下扬州。
孤帆远影碧空尽，唯见长江天际流。
                 `;
    const getlist2 = `
    故人西辞黄鹤楼，烟花三月下扬州。
孤帆远影碧空尽，唯见长江天际流。
                 `;

    let setlist = new Promise((resolve, reject) => {
        // resolve(getlist)
        setTimeout(() => {
            reject('我是错误')
        }, 1000)
    })
    let setlist1 = new Promise((resolve, reject) => {
        // resolve(getlist1)
        setTimeout(() => {
            reject('我是错误123')
        }, 500)

    })
    let setlist2 = new Promise((resolve, reject) => {
        // resolve(getlist2)
        // reject('我是错误444')

    })
    Promise.all([setlist, setlist1, setlist2]).then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    })
</script>
```

```js
//race方法
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

</body>

</html>
<script>
    const p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(11111)
        }, 300)
    })


    const p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(22222)
        }, 500)
    })


    const p3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(33333)
        }, 2000)
    })

    // race：竞技/竞赛
    // 只要有一个promise变成fulfilled状态,那么就结束
    Promise.race([p1, p2, p3]).then(res => {
        console.log('res', res);
    }).catch(err => {
        console.log('err', err);
    })
</script>
```

## 1. Promise出现的原因

- 为了解决异步回调地狱问题
- 为了解决信任问题(第三方回调函数是不是只执行一次,性能,和执行多次)
- 为了解决回调执行顺序问题
- 为了解决捕捉错误能力(400 500)



