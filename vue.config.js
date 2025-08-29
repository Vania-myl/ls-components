const { defineConfig } = require('@vue/cli-service')
//const path = require('path')

// module.exports = defineConfig({
//   transpileDependencies: true,
//   // 只保留路径别名配置，TypeScript 规则由 Vue CLI 自动处理
//   chainWebpack: config => {
//     config.resolve.alias.set('@', path.resolve(__dirname, 'src'))
//   }
// })
const path=require('path')
module.exports = defineConfig({
  transpileDependencies: true,
   chainWebpack: config => {
    // 配置TypeScript规则
     config.resolve.alias.set('@', path.resolve(__dirname, 'src'))
    config.module
      .rule('ts')
      .test(/\.ts$/)
      
      .use('ts-loader')
      .loader('ts-loader')
      .options({
        appendTsSuffixTo: [/\.vue$/], // 处理Vue文件中的TypeScript
        
      })
    },
   
  })


