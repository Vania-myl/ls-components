module.exports = {
    rules: {
    // 关闭组件命名规则检查
     // 关闭组件名必须多单词的检查
    "vue/multi-word-component-names": "off",
    // 关闭未使用变量的严格检查（可选，临时解决）
    "@typescript-eslint/no-unused-vars": "warn",
     "vue/valid-define-props": "off" // 临时关闭props验证
  },
  parser: 'vue-eslint-parser', // Vue 单文件解析器
  parserOptions: {
    parser: '@typescript-eslint/parser', // TypeScript 解析器
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'], // 启用 TypeScript 插件
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended' // 引入 TypeScript 推荐规则
  ]
};