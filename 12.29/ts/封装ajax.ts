// 实例化ajax核心方法
let ajax = new XMLHttpRequest()
//    建立连接 open('请求方式','请求连接')
ajax.open('get', 'https://baidu.com')
//发送请求
ajax.send()
//ajax状态判断
ajax.onreadystatechange = function () {
    if (ajax.status == 200 && ajax.readyState == 4) {
        console.log(ajax.response);

    }
}


/**封装成一个函数 */
// function ajaxGet(methods, url) {
//     let ajax = new XMLHttpRequest()
//     ajax.open(methods, url)
//     ajax.send()
//     ajax.onreadystatechange = function () {
//         if (ajax.status == 200 && ajax.readyState == 4) {
//             console.log(ajax.response);
//         }
//     }
// }


/**封装一个函数 ts形式 */

interface Params {
    methods: string,
    url: string
}
enum CODE {
    SUCCESS = 200,
    READY = 4
}

function ajaxGet(methods: Params['methods'], url: Params['url']) {
    let ajax = new XMLHttpRequest()
    ajax.open(methods, url)
    ajax.send()
    ajax.onreadystatechange = function () {
        if (ajax.status == CODE.SUCCESS && ajax.readyState == CODE.READY) {
            console.log(ajax.response);
        }
    }
}