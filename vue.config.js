const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
    ? +'/' + process.env.BASE_URL + '/'
    : './',
  transpileDependencies: true,
  outputDir: 'docs',
})
