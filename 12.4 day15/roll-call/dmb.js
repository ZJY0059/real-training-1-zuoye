var arr = [
    {
        "id": 1,
        "name": "张建雨",
        "sex": 0,
        "checked": false
    },
    {
        "id": 2,
        "name": "孙铭",
        "sex": 0,
        "checked": false
    },
    {
        "id": 3,
        "name": "孙旭摇",
        "sex": 0,
        "checked": false
    },
    {
        "id": 4,
        "name": "巴钦",
        "sex": 1,
        "checked": false
    },
    {
        "id": 5,
        "name": "章奥博",
        "sex": 0,
        "checked": false
    },
    {
        "id": 6,
        "name": "王伟宸",
        "sex": 1,
        "checked": false
    },
    {
        "id": 7,
        "name": "张世权",
        "sex": 0,
        "checked": false
    },
    {
        "id": 8,
        "name": "宋海宇",
        "sex": 0,
        "checked": false
    },
    {
        "id": 9,
        "name": "宋增杰",
        "sex": 0,
        "checked": false
    },
    {
        "id": 10,
        "name": "王龙翔",
        "sex": 0,
        "checked": false
    },
    {
        "id": 11,
        "name": "侯建荞",
        "sex": 0,
        "checked": false
    },
    {
        "id": 12,
        "name": "郝嫚嫚",
        "sex": 0,
        "checked": false
    },
    {
        "id": 13,
        "name": "付高聪",
        "sex": 1,
        "checked": false
    },
    {
        "id": 14,
        "name": "张立",
        "sex": 0,
        "checked": false
    },
    {
        "id": 15,
        "name": "吴倩",
        "sex": 0,
        "checked": false
    },
    {
        "id": 16,
        "name": "徐婉颖",
        "sex": 0,
        "checked": false
    },
    {
        "id": 17,
        "name": "刘艺",
        "sex": 0,
        "checked": false
    }, {
        "id": 18,
        "name": "薛翔元",
        "sex": 1,
        "checked": false
    }, {
        "id": 19,
        "name": "程怀博",
        "sex": 0,
        "checked": false
    }, {
        "id": 20,
        "name": "高鹏亚",
        "sex": 1,
        "checked": false
    }, {
        "id": 21,
        "name": "韩雨泽",
        "sex": 0,
        "checked": false
    }, {
        "id": 22,
        "name": "李宏恩",
        "sex": 1,
        "checked": false
    }, {
        "id": 23,
        "name": "江萌洋",
        "sex": 0,
        "checked": false
    }, {
        "id": 24,
        "name": "杨志豪",
        "sex": 1,
        "checked": false
    }, {
        "id": 25,
        "name": "张宗耀",
        "sex": 0,
        "checked": false
    }, {
        "id": 26,
        "name": "周璇",
        "sex": 1,
        "checked": false
    },
    {
        "id": 27,
        "name": "代伊涵",
        "sex": 1,
        "checked": false
    },
    {
        "id": 28,
        "name": "李妍",
        "sex": 0,
        "checked": false
    },
    {
        "id": 29,
        "name": "邓林柯",
        "sex": 0,
        "checked": false
    },
    {
        "id": 30,
        "name": "章涵语",
        "sex": 0,
        "checked": false
    },
    {
        "id": 31,
        "name": "郑锋",
        "sex": 0,
        "checked": false
    },
];
// 定义学生数据

var ul = document.getElementById('ul')
// 获取ul的节点
// console.log(ul);

function addstudent() {
    ul.innerHTML = '',
        // 先把ul内容清空
        arr.forEach(function (item) {
            //  循环这个数据
            //  console.log(item);
            var li = document.createElement('li')
            //  创建一个li节点
            li.style.backgroundImage = randomColor();
            li.innerHTML = "<span>".concat(item.name, "</span>")
            //   给li添加每一个学生的姓名
            ul.appendChild(li)
            //  appendChild节点的子节点列表的末尾添加新的子节点
        })
}
// 讲数据里的学生展示在页面中
addstudent()


function datetime() {
    var times = new Date()
    // 生成一个中国标准时间
    var n = times.getFullYear() + '-'
    // 获取到年后面拼接-
    var y = (times.getMonth() + 1 + '').padStart(2, '0') + '-'
    // 获取到月后面拼接-
    var r = (times.getDate() + '').padStart(2, '0') + ' '
    // 获取到日后面拼接空格
    var s = (times.getHours() + '').padStart(2, '0') + ':'
    // 获取到时后面拼接：
    var f = (times.getMinutes() + '').padStart(2, '0') + ':'
    // 获取到分后面拼接:
    var m = (times.getSeconds() + '').padStart(2, '0')
    // 获取到秒
    return n + y + r + s + f + m
}


function getCurrentTime() {
    var times = datetime()
    // 把当前日期赋值给times
    var time = document.querySelector('.time')
    // 获取到time的节点
    // console.log(time);
    // li.className = "liColor";
    // li.style.backgroundImage = randomColor();

    time.innerHTML = `<p>时间：${times}</p>`
    //  向time添加内容
}
getCurrentTime()

setInterval(function () {
    getCurrentTime()
}, 1000)
// 间隔性定时器 每隔一秒就调用getCurrentTime

function randomParams() {
    return Math.floor(Math.random() * 256)
    // Math.floor向下取整
    // Math.random获取随机数
}


function randomColor() {
    var start = randomParams()
    var end = randomParams()
    var color = "linear-gradient(to right, rgb(".concat(start, ",").concat(randomParams(), ",").concat(randomParams(), "), rgb(").concat(end, ",").concat(randomParams(), ",").concat(randomParams(), "))");
    return color
}



