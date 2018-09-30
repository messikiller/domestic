const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  baseUrl: '/',
  outputDir: 'dist',
  devServer: {
    host: '0.0.0.0',
    port: 9999
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('#', resolve('src/components'))
      .set('~', resolve('src/views'))
      .set('*', resolve('src/assets'))
  }
}
