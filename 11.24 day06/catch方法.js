// const fs = require('fs')
// // 黄鹤楼
// function getlist() {
//     return new Promise((resolve, reject) => {
//         fs.readFile('./poetry/黄鹤楼.md', (err, data) => {
//             // if(err) reject(err)
//             // resolve(data)
//             reject('我是黄鹤楼错误')
//         })
//     })
// }
// // 望庐山瀑布
// function getlist1() {
//     return new Promise((resolve, reject) => {
//         fs.readFile('./poetry/望庐山瀑布.md', (err, data) => {
//             // if(err) reject(err)
//             // resolve(data)
//             reject('我是望庐山瀑布错误')


//         })
//     })
// }

// // 咏柳
// function getlist2() {
//     return new Promise((resolve, reject) => {
//         fs.readFile('./poetry/咏柳.md', (err, data) => {
//             // if(err) reject(err)
//             // resolve(data)
//             reject('我是咏柳错误')

//         })
//     })
// }
// getlist().then(res => {
//     console.log(res.toString());
// }).catch(err => {
//     console.log(err);
// }).then(res => {
//     getlist1().then(res => {
//         console.log(res.toString());
//     })
// }).catch(err => {
//     console.log(err);
// }).then(res => {
//     getlist2().then(res => {
//         console.log(res.toString());
//     })
// }).catch(err => {
//     console.log(err);
// })



console.log('--------------------------------');


// const fs = require('fs')
// // 黄鹤楼
// function getlist() {
//     return new Promise((resolve, reject) => {
//         fs.readFile('./poetry/黄鹤楼.md', (err, data) => {
//             // if(err) reject(err)
//             // resolve(data)
//             reject('我是黄鹤楼错误')
//         })
//     })
// }
// // 望庐山瀑布
// function getlist1() {
//     return new Promise((resolve, reject) => {
//         fs.readFile('./poetry/望庐山瀑布.md', (err, data) => {
//             // if(err) reject(err)
//             // resolve(data)
//             reject('我是望庐山瀑布错误')


//         })
//     })
// }

// // 咏柳
// function getlist2() {
//     return new Promise((resolve, reject) => {
//         fs.readFile('./poetry/咏柳.md', (err, data) => {
//             // if(err) reject(err)
//             // resolve(data)
//             reject('我是咏柳错误')

//         })
//     })
// }
// getlist().then(res => {
//     console.log(res.toString());
// }).catch(err => {
//     console.log(err);
// }).then(res => {
//     getlist1().then(res => {
//         console.log(res.toString());
//     })
// }).catch(err => {
//     console.log(err);
// }).then(res => {
//     getlist2().then(res => {
//         console.log(res.toString());
//     })
// }).catch(err => {
//     console.log(err);
// })





console.log('---------------------------');



const fs = require('fs')
// 黄鹤楼
function getlist() {
    return new Promise((resolve, reject) => {
        fs.readFile('./poetry/黄鹤楼.md', (err, data) => {
            // if(err) reject(err)
            // resolve(data)
            reject('我是黄鹤楼错误')
        })
    })
}
// 望庐山瀑布
function getlist1() {
    return new Promise((resolve, reject) => {
        fs.readFile('./poetry/望庐山瀑布.md', (err, data) => {
            // if(err) reject(err)
            // resolve(data)
            reject('我是望庐山瀑布错误')


        })
    })
}

// 咏柳
function getlist2() {
    return new Promise((resolve, reject) => {
        fs.readFile('./poetry/咏柳.md', (err, data) => {
            // if(err) reject(err)
            // resolve(data)
            reject('我是咏柳错误')

        })
    })
}
getlist().then(res => {
    console.log(res.toString());
}).catch(err => {
    console.log(err);
}).then(res => {
    getlist1().then(res => {
        console.log(res.toString());
    })
}).catch(err => {
    console.log(err);
}).then(res => {
    getlist2().then(res => {
        console.log(res.toString());
    })
}).catch(err => {
    console.log(err);
})

sole.log(err);