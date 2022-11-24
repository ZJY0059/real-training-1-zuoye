const fs=require('fs')
// function getlist(){
//     return new Promise((resolve, reject) => {
//         fs.readFile('./poetry/黄鹤楼.md',(err,data)=>{
//             if(err) reject(err)
//             resolve(data)
//         })
//     })
// }
// function getlist1(){
//     return new Promise((resolve, reject) => {
//         fs.readFile('./poetry/望庐山瀑布.md',(err,data)=>{
//             if(err) reject(err)
//             resolve(data)
//         })
//     })
// }
// function getlist2(){
//     return new Promise((resolve, reject) => {
//         fs.readFile('./poetry/咏柳.md',(err,data)=>{
//             if(err) reject(err)
//             resolve(data)
//         })
//     })
// }

// getlist().then(res=>{
//     // console.log(res.toString());
//     return res.toString()
// }).then(data=>{
//     let arr=getlist1().then(res=>res.toString())
//     return arr+data
// }).then(data2 => {
//     getlist2().then(res => {
//         console.log('42', data2);
//         // console.log(res.toString());
//     })
// })



console.log('---------------------------------------------');


// function getlist(){
//     return new Promise((resolve, reject) => {
//         fs.readFile('./poetry/黄鹤楼.md',(err,data)=>{
//             if(err) reject(err)
//             resolve(data)
//         })
//     })
// }
// function getlist1(){
//     return new Promise((resolve, reject) => {
//         fs.readFile('./poetry/望庐山瀑布.md',(err,data)=>{
//             if(err) reject(err)
//             resolve(data)
//         })
//     })
// }
// function getlist2(){
//     return new Promise((resolve, reject) => {
//         fs.readFile('./poetry/咏柳.md',(err,data)=>{
//             if(err) reject(err)
//             resolve(data)
//         })
//     })
// }

// getlist().then(res=>{
//     // console.log(res.toString());
//     return res.toString()
// }).then(data=>{
//     let arr=getlist1().then(res=>res.toString())
//     return arr+data
// }).then(data2 => {
//     getlist2().then(res => {
//         console.log('42', data2);
//         // console.log(res.toString());
//     })
// })



console.log('-------------------------------------------');



function getlist(){
    return new Promise((resolve, reject) => {
        fs.readFile('./poetry/黄鹤楼.md',(err,data)=>{
            if(err) reject(err)
            resolve(data)
        })
    })
}
function getlist1(){
    return new Promise((resolve, reject) => {
        fs.readFile('./poetry/望庐山瀑布.md',(err,data)=>{
            if(err) reject(err)
            resolve(data)
        })
    })
}
function getlist2(){
    return new Promise((resolve, reject) => {
        fs.readFile('./poetry/咏柳.md',(err,data)=>{
            if(err) reject(err)
            resolve(data)
        })
    })
}

getlist().then(res=>{
    // console.log(res.toString());
    return res.toString()
}).then(data=>{
    let arr=getlist1().then(res=>res.toString())
    return arr+data
}).then(data2 => {
    getlist2().then(res => {
        console.log('42', data2);
        // console.log(res.toString());
    })
})