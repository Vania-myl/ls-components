<template><div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="my-components">
      <!--基础用法-->
      <lsCard size="medium">默认卡片
        <lsSwitch v-model:checked="checked" ></lsSwitch> </lsCard>
      <!--通过属性-->
    <lsCard title="卡片标题" subtitle="小标题">这是带标题卡片内容
       <template #footer >
         <lsButton size="small">取消</lsButton>
        <lsButton size="small">确认</lsButton>
      </template>
    </lsCard>
    <lsCard title="图片卡片" subtitle="8.20">
      <img src="@/assets/img/图片1.jpg" alt="小乔大王" style="width: 100%;"/>
      <template #footer>小乔大王</template>
    </lsCard>
   <lsButton type="danger" size="large" >警告</lsButton>
   <lsButton type="primary" size="large" :loading="true">加载中</lsButton>
   <br><br>
   
   <lsSwitch v-model:checked="unchecked" size="large" showText activeText="关闭" inactiveText="开启"></lsSwitch>
  <div class="message-demo">
  <lsButton @click="showMessage=true">简略版消息组件</lsButton>
  <lsMessage v-if="showMessage" type="success" message="YES！"
  showClose @close="showMessage=false" ></lsMessage>
<br>
  <lsButton @click="showMessage2=true">精美的消息组件</lsButton>
  <lsMessage v-if="showMessage2" type="error" message="NO！"
  showClose  @close="showMessage2=false" ></lsMessage>
  </div>
  <lsImage src="@/assets/img/图片1.jpg"  alt="小乔大王" width="300px" height="300px" radius="10px"></lsImage>
  </div>
  
  </div></template>

<script>
import { ref } from 'vue';

// 控制消息显示的变量

export default{name:'App',
  setup(){
    const checked = ref(true); // 定义一个响应式变量 checked，初始值为 false
    const unchecked = ref(false); // 定义一个响应式变量 unchecked，初始值为 false
  const showMessage = ref(false);
  const showMessage2 = ref(false);


    
    return {checked,unchecked,showMessage,showMessage2}; // 返回 checked 以供模板使用
  }
}
 
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.message-demo {
  height: 200px;
  margin: 50px;
   
}
</style>
