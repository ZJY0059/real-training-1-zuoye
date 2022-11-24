// const fs=require('fs')
// function fn(url){
//     return new Promise((resolve, reject) => {
//         fs.readFile(url,(err,data)=>{
//             if(err) reject(err)
//             resolve(data)
//         })
//     })
// }
// // 封装一个函数,吧地址作为参数传进入
// fn('./poetry/黄鹤楼.md').then(res=>{
//     return res.toString()
// }).then(data=>{
//     console.log(data);
//     fn('./poetry/望庐山瀑布.md').then(res=>{
//         console.log(res.toString());
//     })
// }).then(()=>{
//     fn('./poetry/咏柳.md').then(res=>{
//         console.log(res.toString());
//     })
// })

console.log('--------------------------');


// const fs=require('fs')
// function fn(url){
//     return new Promise((resolve, reject) => {
//         fs.readFile(url,(err,data)=>{
//             if(err) reject(err)
//             resolve(data)
//         })
//     })
// }
// // 封装一个函数,吧地址作为参数传进入
// fn('./poetry/黄鹤楼.md').then(res=>{
//     return res.toString()
// }).then(data=>{
//     console.log(data);
//     fn('./poetry/望庐山瀑布.md').then(res=>{
//         console.log(res.toString());
//     })
// }).then(()=>{
//     fn('./poetry/咏柳.md').then(res=>{
//         console.log(res.toString());
//     })
// })



console.log('---------------------------------');


const fs=require('fs')
function fn(url){
    return new Promise((resolve, reject) => {
        fs.readFile(url,(err,data)=>{
            if(err) reject(err)
            resolve(data)
        })
    })
}
// 封装一个函数,吧地址作为参数传进入
fn('./poetry/黄鹤楼.md').then(res=>{
    return res.toString()
}).then(data=>{
    console.log(data);
    fn('./poetry/望庐山瀑布.md').then(res=>{
        console.log(res.toString());
    })
}).then(()=>{
    fn('./poetry/咏柳.md').then(res=>{
        console.log(res.toString());
    })
})