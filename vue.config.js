const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    disableHostCheck: true,
    allowedHosts: 'all',
  },
  transpileDependencies: [
    'vuetify'
  ]
})
