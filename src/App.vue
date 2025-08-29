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
  <lsButton @click="showMessage=true" :disable="messageVisible">简略版消息组件</lsButton>
  <lsMessage v-if="showMessage" type="success" message="YES！"
  showClose @close="showMessage=false" :disable="messageVisible" duration="1000"></lsMessage>
<br>
  <lsButton @click="showMessage2=true">精美的消息组件</lsButton>
  <lsMessage v-if="showMessage2" type="error" message="NO！"
  showClose  @close="showMessage2=false" ></lsMessage>
  </div>
  <div><lsImage src="https://ts1.tc.mm.bing.net/th/id/R-C.987f582c510be58755c4933cda68d525?rik=C0D21hJDYvXosw&riu=http%3a%2f%2fimg.pconline.com.cn%2fimages%2fupload%2fupc%2ftx%2fwallpaper%2f1305%2f16%2fc4%2f20990657_1368686545122.jpg&ehk=netN2qzcCVS4ALUQfDOwxAwFcy41oxC%2b0xTFvOYy5ds%3d&risl=&pid=ImgRaw&r=0"  alt="图片" width="300px" height="300px" radius="10px"></lsImage></div>
  <lsImage src=""  alt="" width="200px" height="200px" radius="10px"></lsImage>

  
  <lsCarousel :images="carouselImages" width="500px" height=400px>?</lsCarousel>
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
const carouselImages=[
  {src:'https://ts1.tc.mm.bing.net/th/id/R-C.3593fa72f2c3e6df38dc8f976414e3a0?rik=SKbhcTK%2bD6sKkg&riu=http%3a%2f%2fseopic.699pic.com%2fphoto%2f50085%2f9344.jpg_wh1200.jpg&ehk=o5quB7egSjhqcV7NVYN2ROD3NFeFStvuuJQHw9UbmYk%3d&risl=&pid=ImgRaw&r=0'},
  {src:'https://ts3.tc.mm.bing.net/th/id/OIP-C.IuNuzsR9jKSqu2-VTCmNOAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3'},
  {src:'https://img.shetu66.com/2023/06/28/1687937373741115.png'}
]
    return {checked,unchecked,showMessage,showMessage2,carouselImages}; // 返回 checked 以供模板使用
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
