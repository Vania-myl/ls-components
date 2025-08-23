import { createApp } from 'vue'
import App from './App.vue'
import {install} from './components/index.ts'//导入install函数

const app=createApp(App);
app.use(install) //使用install函数全局注册组件
app.mount('#app')
