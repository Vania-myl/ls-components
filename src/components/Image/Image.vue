<template>
<div class="ls-image" 
:class="[{'is-loading':loading},
{'is-error':error}]"
:style="containerStyle"
>
   
<!--加载状态-->
<div v-if="loading" class="loading">
    <!-- <svg viewBox="0 0 24 24" width="24" height="24" fill="#ccc">
        <path d="M12 4V2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
      </svg> -->
      加载中...
</div>
<!--错误状态-->
<div v-if="error" class="error" @click="reload">
     <!-- <svg viewBox="0 0 24 24" width="24" height="24" fill="#f56c6c">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
      </svg> -->
      加载失败，点击重试
</div>
 <!--正常状态-->
 <div class="img-container" v-if="!error" :style="containerStyle">
<img class="img"
 v-show="!error&&!loading" 
 ref="imageRef" 
:src="src"
:alt="alt"
@load="loading=false"
@error="handleError($event)"
@wheel.prevent="handleZoom"
@mousemove="showAlt"
@mouseleave="removeAlt"
:style="{transform:`rotate(${ratateDeg}deg) scale(${zoomRate})`,
    transition: 'transform 0.5s' }"
>
  <div class="zoom-control"  v-show="!error&&!loading" >
    <button @click="lspreview">预览</button>
        <button @click="ratate">旋转</button>
        <button @click="resetZoom">重置</button>
        <span>{{ Math.round(zoomRate*100) }}%</span>
    </div>
</div>
<Teleport to="body">
<div class="preview" v-if="previewVisible" >
    <div class="prview-container" v-if="previewVisible">
         <!-- 关闭按钮 -->
        <button class="preview-close-bnt" @click="closePreview">×</button>
        <img 
          class="preview-img"
          :src="src"
          :alt="alt"
          :style="{ transform: `rotate(${ratateDeg}deg)` }"
        >
    </div>
</div>
</Teleport>
</div>
 
</template>
<script setup lang="ts">
import './image.scss'
import {ref,defineProps,onUnmounted} from 'vue'
const props = defineProps({
    src: {
        type: String,
        required: true
    },
    alt: {
        type: String,
        default: '图片'
    },
    width: {
        type: [String, Number],
        default: 'auto'
    },
    height: {
        type: [String, Number],
        default: 'auto'
    },
    radius: {
        type: [String, Number],
        default: 0
    },
    maxZoom:{
        type:Number,
        default:2
    },
    minZoom:{
        type:Number,
        default:0.5
    },
    ratateStep:{
        type:Number,
        default:90
    }
})
//状态管理
//ref() 是 Vue 3 提供的创建响应式数据的函数
const loading = ref(true);
const error=ref(false);
const zoomRate=ref(1);
const ratateDeg=ref(0);
const previewVisible=ref(false);
const imageRef=ref<HTMLImageElement|null>(null)
let altTooltip: HTMLDivElement | null = null;  // 存储alt提示框DOM
const handleError=(e:Event)=>{
    loading.value=false;
    error.value=true;
    console.log('图片加载错误原因',error);
    console.log(props.src);
    }
//重新加载图片
const reload=()=>{
    
    loading.value=true;
    error.value=false;
    if(!imageRef.value) return;//当 imageRef 没有获取到有效的图片 DOM 元素时，直接退出当前函数
    //重新加载
    imageRef.value.src='';
    imageRef.value.src=props.src;
};
const lspreview=()=>{
    previewVisible.value=true;
    document.body.style.overflow='hidden'
}
const closePreview = () => {
  previewVisible.value = false;
  // 恢复页面滚动
  document.body.style.overflow = '';
};
const handleZoom = (e: WheelEvent) => {
  // 滚轮向上=放大，向下=缩小（每步0.1倍）
  const step = e.deltaY > 0 ? -0.1 : 0.1
  // 限制放缩范围
  const newRate = Math.max(props.minZoom, Math.min(zoomRate.value + step, props.maxZoom))
  zoomRate.value = newRate
}

const ratate=()=>{
    const ratateStep=props.ratateStep
    ratateDeg.value=(ratateDeg.value+ratateStep);
}
const resetZoom = () => {
  zoomRate.value = 1
  ratateDeg.value=ratateDeg.value+(360-ratateDeg.value%360)
}
const containerStyle = {
 width: typeof props.width === 'number' ? `${props.width}px` : props.width, 
  height: typeof props.height === 'number' ? `${props.height}px` : props.height, 
  borderRadius: props.radius
};
const showAlt=(e:MouseEvent)=>{
  if(loading.value||error.value) return;
  if (!altTooltip) {
    console.log("3");
    altTooltip = document.createElement('div');
    altTooltip.className = 'alt-tooltip';  // 自定义样式类
    altTooltip.textContent = props.alt;  // 显示alt文本
     altTooltip.style.cssText = `
      position: fixed;
      padding: 4px 8px;
       background: rgba(0, 0, 0, 0.8);  /* 黑色半透明背景 */
     color: #fff;  
      font-size: 14px;
      z-index: 99999;
    `;
    document.body.appendChild(altTooltip);  // 添加到页面
   console.log("4");
  }
  const { clientX, clientY } = e;
  altTooltip.style.left = `${clientX + 10}px`;
  altTooltip.style.top = `${clientY + 10}px`;
  console.log("5");
};
// 处理鼠标离开：移除alt提示
const removeAlt = () => {
  if (altTooltip) {
    document.body.removeChild(altTooltip);  // 从页面移除
    altTooltip = null;  // 清空引用
  }
};
onUnmounted(() => {
  if (altTooltip) {
    document.body.removeChild(altTooltip);
    altTooltip = null;
  }
});
</script>
