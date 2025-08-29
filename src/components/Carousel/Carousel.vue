<template>
<div class="ls-carousel" 
@mouseenter="stopAutoPlay"
@mouseleave="startAutoPlay"
:style="{width,height,borderRadius}">
    <div class="carousel-container"
     :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div class="carousel-item" v-for="(item, index) in images" :key="index">
            <lsImage 
            :src="item.src" 
            :alt="item.alt || `轮播图${index+1}`"
            width="100%" height="100%"></lsImage>
            <div class="img-desc" v-if="item.desc">{{ item.desc }}</div>
        </div>
    </div>
    <button class="prev-btn" @click="handlePrev" v-if="images.length>1" > &lt; </button>
    <button class="next-btn" @click="handleNext" v-if="images.length>1"> &gt;</button>
    <div class="carousel-indicator" v-if="images.length>1">
        <span class="indicator-item" 
        v-for="(_,idx) in images" :key="idx"
        @click="handleIndicatorClick(idx)"
        :class="{ active: currentIndex === idx }"></span>
    </div>
</div>
</template>

<script setup lang="ts">
import {ref, defineProps, onMounted, onUnmounted} from 'vue'
import lsImage from'../Image/Image.vue'
import './carousel.scss'
interface CarouselItem {
  src: string;
  alt?: string;
  desc?:string;
}
const props=defineProps({
    images:{type:Array as () => CarouselItem[],required:true},
    width: { type: [String, Number], default: '800px' },
    height: { type: [String, Number], default: '400px' },
    borderRadius: { type: [String, Number], default: '8px' },
    autoPlay: { type: Boolean, default: true }, // 是否自动轮播
    interval: { type: Number, default: 3000 }, // 自动轮播间隔（ms）
})
const currentIndex=ref(0)
let autoPlayTimer: NodeJS.Timeout | null = null // 自动轮播计时器
//上一张
const handlePrev=()=>{
     currentIndex.value = currentIndex.value === 0 
    ? props.images.length - 1 
    : currentIndex.value - 1
}
//下一张
const handleNext=()=>{
   currentIndex.value = currentIndex.value === props.images.length - 1 
    ? 0 
    : currentIndex.value + 1
}
const startAutoPlay=()=>{
    if(props.autoPlay&&props.images.length>1){
        if(autoPlayTimer) clearInterval(autoPlayTimer);
        autoPlayTimer=setInterval(handleNext,props.interval)
    }
}
const stopAutoPlay=()=>{
    if (autoPlayTimer) {
    clearInterval(autoPlayTimer);
    autoPlayTimer = null;
  }
}
const handleIndicatorClick=(idx:number)=>{
    currentIndex.value=idx;
    stopAutoPlay();
    startAutoPlay();
}
onMounted(() => {
  startAutoPlay();
});

// 组件卸载时清除定时器（防止内存泄漏）
onUnmounted(() => {
  stopAutoPlay();
});
</script>