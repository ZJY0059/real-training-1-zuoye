# 1. 本地存储

## 1. 相同点：

- Cookie、SessionStorage、 LocalStorage都是浏览器的本地存储。
- Cookie、SessionStorage、 LocalStorage数据共享都遵循同源原则

## 2. 不同点：

### 1. cookie

- cookie自身有一个过期属性，并且在每次的通信过程中会传送向服务端
- cookie的生命周期是由服务器端在写入的时候就设置好的
- Cookie 设计初衷是用来和服务器通讯，而不是本地存储，他只是被‘借用’到本地存储
- cookie的存储空间比较小大概4KB,同时因为每次http请求都会携带cookie,所有cookie只适合保存很小的数据.如会话标识
- cookie数据始终携带在同源的http请求中，即cookie在浏览器和服务器间来回传递，而sessionStorage和Localstorage不会自动把数据发送给服务器，只在本地保存。cookie数据还有路径（path）的概念，可以限制cookie只属于某个路径下
- cookie只在设置的cookie过期时间之前有效，即使窗口关闭或浏览器关闭
- cookie也是在所有同源窗口中共享的
- 在前端给后端发送请求的时候会自动携带Cookie中的数据，SessionStorage、 LocalStorage不会

### 2. localStorage

- localStorage：永久储存，窗口或者浏览器关闭也一直保存，除非手动删除
- LocalStorage存储空间大概有5M
- locastorage在所有的同源窗口中都是共享的

### 3. SessionStorage

- sessionStorage：只存在一个页面周期内，页面关闭就清除了。
- 
  sessionStorage：仅在当前浏览器窗口关闭之前有效
- SessionStorage存储空间大概有5M

- sessionStorage不能在不同的浏览器中共享，即使是同一个页面

## 3. 应用场景
Cookie一般用于存储登录验证信息SessionID或者token。
LocalStorage常用于存储不易变动的数据，减轻服务器的压力。
SessionStorage可以用来检测用户是否是刷新进入页面，如音乐播放器恢复播放进度条的功能

# 2. aixo封装

1.先创建 utils 文件夹

2.创建 request.js

3.引入 axios

4.配置 基本路径和超时时间

5.配置请求拦截和响应拦截

6.在请求拦截里可以放 loading 和 token

7.在响应拦截中 可以 清除 loading 还有处理错误编码字典

8.最后把我们封装的 axios 实例 导出

9.再创建一个 api.js 统一管理我们的接口





