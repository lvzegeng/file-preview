var merge = require("webpack-merge");
const common = require("./webpack.config.base");

const pkg = require("../package.json");

module.exports = merge(common, {
  output: {
    filename: pkg.unpkg,

    library: "viewFile", // 表示以什么名字输出，这里会输出为 exports['fileReader']。对外暴露的变量名或模块名，具体作用与 output.libraryTarget 选项的值有关
    libraryTarget: "umd", // 表示打包的方式。配置如何暴露库，可配置以 commonJS 模块、AMD 模块，甚至全局变量形式暴露库。UMD（Universal Module Definition，通用模块规范）可以同时支持 CommonJS 和 AMD 规范，以及非模块化引用。
    umdNamedDefine: true, // 对 UMD 的构建过程中的 AMD 模块进行命名，否则会使用匿名的 define，匿名的 AMD 模块
    globalObject: "this", // 指定挂载这个库的全局对象，默认值是 window。非浏览器环境没有 window 对象，Node.js 中报错 window is not defined，当构建 UMD 包需要兼容浏览器和 Node.js 环境时，值应该设为 this 。
    // 使用export default语法导出，需要设置libraryExport，否则引入的库需要使用.default才能引用到导出的对象
    libraryExport: "default"
  }
});
