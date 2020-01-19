var merge = require("webpack-merge");
const Analyzer = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const common = require("./webpack.config.base");
const pkg = require("../package.json");

const dependencies = Object.keys({
  ...pkg.dependencies,
  ...pkg.devDependencies
});

const externals = dependencies.reduce(
  (previousValue, currentValue, currentIndex, array) => {
    previousValue[currentValue] = currentValue;
    return previousValue;
  },
  {}
);

module.exports = merge(common, {
  output: {
    filename: pkg.main,

    libraryTarget: "commonjs2"
  },
  // 只需打包组件的逻辑就好了，那些依赖，可以等实际生产项目的时候再进行解析或在运行时从外部获取。但 webpack 默认会将依赖也打包进行，为了避免这点，需要将这些依赖一一配置成为 external，这就告诉了 webpack 它们是外部引用的，可以不用打包进来。
  externals: {
    ...externals,
    // 挂到全局对象上的 vue 属性名称是首字母大写的 Vue，而其 NPM 包名却是小写的 vue ，也就是说不同环境下 Vue 名称不尽一致
    // externals 中属性的值除了字符串，还支持传一个对象，可针对各种场景单独设置模块名（或属性名），这样一来，我们就可以为非模块化环境配置 'Vue'，为模块化环境配置 'vue'。
    vue: {
      root: "Vue",
      commonjs: "vue",
      commonjs2: "vue",
      amd: "vue"
    }
  },
  optimization: {
    minimizer: []
  },
  plugins: [new Analyzer()]
});
