let express = require("express") //引入express
let Mock = require("mockjs") //引入mock
const loginData = require("./common/login.json")
const menusData = require("./common/menus.json")
let app = express() //实例化express

// 登陆接口
app.use("/login", function (req, res) {
  console.log(req, "req")
  res.json(
    Mock.mock({
      ...loginData
    })
  )
})

app.use("/menus", function (req, res) {
  console.log(req, "req")
  res.json(
    Mock.mock({
      ...menusData
    })
  )
})
app.listen("3090", () => {
  console.log("监听端口 8888")
})
