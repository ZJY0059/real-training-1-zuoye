const { defineConfig } = require("@vue/cli-service")
// console.log(process.env.process.env.VUE_APP_BASE_API)
module.exports = defineConfig({
  // transpileDependencies: true,
  // lintOnSave: false,
  publicPath: "./",
  // 根目录,
  productionSourceMap: false,
  // 默认关闭生产环境的资源
  outputDir: "dist",
  // 打包时候的文件夹名称
  assetsDir: "assets",
  // 放置打包时静态资源文件生成的存放位置 js css img/
  devServer: {
    port: "999",
    // 端口号
    host: "0.0.0.0",
    //开发运行时域名，设置成'0.0.0.0',在同一个局域网下,如果你的项目在运行,同时可以通过你的http://ip:port/...访问你的项目
    open: true,
    // 默认是否打开浏览器,
    https: false,
    // 是都启用https
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        changeOrigin: true,
        // 默认开启代理模式
        secure: false,
        // 如果是http接口,需要配置该参数
        target: [process.env.VUE_APP_CONSOLE_URL],
        // 代理的地址
        pathRewrite: {
          "^/api": ""
        }
        // 路径的重命名
      }
    }
  }
  // 本地的环境代理配置
})
