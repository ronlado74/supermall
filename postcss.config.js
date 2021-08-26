module.exports = {
  plugins: {
    autoprefixer: {},

    "postcss-px-to-viewport": {
      viewportWidth: 375,
      viewportHeight: 667, //视窗的高度
      unitPrecision: 5, //指定px转化为视窗单位制的小数位数
      viewportUnit: 'vw', //指定需要转成的视窗单位
      selectorBlackList: ['ignore', 'tab-bar', 'tab-bar-item'], //指定不需要转化的类
      minPixelValue: 1, //小于或者等于1px不转化为视窗单位
      mediaQuery: false //允许在媒体查询中转换px
    }
  }
}
