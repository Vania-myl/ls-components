const { defineConfig } = require('@vue/cli-service')
const path=require('path')
module.exports = defineConfig({
  transpileDependencies: true,
   chainWebpack: config => {
    // 配置TypeScript规则
    config.module
      .rule('ts')
      .test(/\.ts$/)
      .use('ts-loader')
      .loader('ts-loader')
      .options({
        appendTsSuffixTo: [/\.vue$/], // 处理Vue文件中的TypeScript
      })
    },
   
  configureWebpack: {
    resolve: {
      // 配置路径别名，确保 @ 正确指向 src 目录（解决相对路径层级问题）
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
    }
  })

