module.exports = {
  configureWebpack: {
    resolve: {
      extensions: [],
      alias: {
        'assets': 'src/assets',
        'common': 'src/common',
        'components': 'src/components',
        'network': 'src/network',
      }
    }
  }
}
