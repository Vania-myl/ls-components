import { App } from '@vue/runtime-core';
// 导入自定义的组件
import lsCard from './Card/Card.vue';
import lsButton from './Button/Button.vue';
import lsSwitch from './Switch/Switch.vue';
import lsMessage from './Message/Message.vue';
import lsImage from './Image/Image.vue';
import lsCarousel from './Carousel/Carousel.vue';
const components = [lsCard, lsButton,lsSwitch,lsMessage,lsImage,lsCarousel];
// 导出一个 install 函数，接收 Vue 应用实例作为参数（并指定类型为 App）
//install 函数是 Vue 组件库的标准集成方式，允许用户通过 app.use(xxx) 一次性注册所有组件。
export function install(app:App):void {
     // 全局注册 Card 组件，注册后可在整个应用中直接使用 <Card /> 标签
  app.component('lsCard', lsCard)
  app.component('lsButton', lsButton)
  app.component('lsSwitch',lsSwitch)
  app.component('lsMessage', lsMessage)
  app.component('lsImage',lsImage)
  app.component('lsCarousel', lsCarousel)

}

export {lsCard ,lsButton,lsSwitch,lsMessage,lsImage,lsCarousel};  //按需导出
export default install;
