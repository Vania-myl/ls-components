import lsMessage from './Message.vue';
import { createVNode, render } from 'vue';
export const Message = (message: string) => {
  // 创建虚拟节点
  const vnode = createVNode(lsMessage, { message });
  // 创建容器并添加到页面
  const container = document.createElement('div');
  document.body.appendChild(container);
  // 渲染组件
  render(vnode, container);
};

export { lsMessage };
export default lsMessage;