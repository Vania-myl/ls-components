// src/shims-vue.d.ts
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
//告诉 TypeScript：所有 .vue 文件都是 Vue 组件，其类型符合 DefineComponent。
