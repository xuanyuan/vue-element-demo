module.exports = {
  baseUrl: process.env.NODE_ENV === "production" ? "./" : "./",
  outputDir: "dist",
  assetsDir: "static",
  indexPath: "index.html",
  filenameHashing: true,
  runtimeCompiler: false,
  transpileDependencies: [],
  productionSourceMap: true,
  parallel: true,
  integrity: false,
  css: {},
  lintOnSave: true,
  devServer: {
    open: true, // the value is true will open browser
    host: "0.0.0.0",
    port: 8000,
    https: false,
    hotOnly: true,
    proxy: {
      "/v1": {
        target: "http://192.168.37.58:8088",
        changeOrigin: true,
        pathRewrite: {
          "^/v1": "/v1" //这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://40.00.100.100:3002/user/add'，直接写‘/api/user/add’即可
        }
      }
    }
  }
};
