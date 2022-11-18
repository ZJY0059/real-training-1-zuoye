// const fs=require('fs')
// const a=new Promise((resolve, reject) => {
//     fs.readFile('./古诗.md',(err,data)=>{
//         if(err) reject(err)
//         resolve(data)
//     })
// })
// a.then(function(value){
//     console.log(value.toString());
// }),function(reason){
//     console.log('读取失败');
// }





// const fs=require('fs')
// const a=new Promise((resolve, reject) => {
//     fs.readFile('./古诗.md',(err,data)=>{
//         if(err) reject(err)
//         resolve(data)
//     })
// })
// a.then(function(value){
//     console.log(value.toString());
// }),function(reason){
//     console.log('读取失败');
// }





const fs=require('fs')
const a=new Promise((resolve, reject) => {
    fs.readFile('./古诗.md',(err,data)=>{
        if(err) reject(err)
        resolve(data)
    })
})
a.then(function(value){
    console.log(value.toString());
}),function(reason){
    console.log('读取失败');
}