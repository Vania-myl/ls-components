<template>
<div class="ls-image" :class="[{'is-loading':loading},{'is-error':error}]"
:style="containerStyle">
   
<!--加载状态-->
<div v-if="loading" class="loading">
    <svg viewBox="0 0 24 24" width="24" height="24" fill="#ccc">
        <path d="M12 4V2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
      </svg>
</div>
<!--错误状态-->
<div v-if="error" class="error" @click="reload">
     <svg viewBox="0 0 24 24" width="24" height="24" fill="#f56c6c">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
      </svg>
      <span>加载失败，点击重试</span>
</div>
 <!--正常状态-->
<img class="img"
 v-show="!error" ref="imageRef" 
:src="src"
:alt="alt"
@load="loading=false"
@error="handleError($event)">
</div>

</template>
<script setup lang="ts">
import './image.scss'
import {ref} from 'vue'
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
    }
})
//状态管理
//ref() 是 Vue 3 提供的创建响应式数据的函数
const loading = ref(true);
const error=ref(false);
const imageRef=ref<HTMLImageElement|null>(null)
// <HTMLImageElement | null> 是 TypeScript 类型注解，指定这个 ref 可以存储：
// HTMLImageElement 类型：即图片元素的 DOM 对象
// null：表示初始时可能还没有获取到 DOM 元素
//处理加载错误
const handleError=(e:Event)=>{
    loading.value=false;
    error.value=true;
    console.log('图片加载错误原因',error);
    console.log(props.src);
    }
//重新加载图片
const reload=()=>{
    if(!imageRef.value) return;//当 imageRef 没有获取到有效的图片 DOM 元素时，直接退出当前函数
    loading.value=true;
    error.value=false;
    //重新加载
    imageRef.value.src='';
    imageRef.value.src=props.src;
};
const containerStyle = {
  width: typeof props.width === 'number' ? `${props.width}px` : props.width,
  height: typeof props.height === 'number' ? `${props.height}px` : props.height,
  borderRadius: typeof props.radius === 'number' ? `${props.radius}px` : props.radius
};
</script>
