<template>
    <button class="ls-button" 
    :class="['ls-button--'+type,'ls-button--'+size,
    {'ls-button--disabled':disabled,'ls-button--loading':loading}]"
 @click="handleClick" 
:disabled="disabled||loading"
:type="nativeType">
<!--加载中的按钮-->
<span class="ls-button__loading" v-if="loading">
    <svg class="ls-button__loading-icon" fill="none" viewBox="0 0 24 24">  //SVG圆形加载动画
        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-dasharray="50" stroke-width="4"></circle>//stroke="currentColor"：定义圆的 边框颜色 为 currentColor（特殊值，继承父元素的 color 属性值），方便通过 CSS 统一控制颜色。
    </svg>
    </span>
    <!--按钮图标-->
    <span class="ls-button__icon" v-if="$slots.icon&&!loading">
        <slot name="icon"></slot>
    </span>
    <span class="ls-button__text" ><slot></slot></span>
</button>
    </template>

<script setup lang="ts">
// 方式1：通过 defineEmits 声明事件（推荐，更规范）
//const emit = defineEmits(['submit', 'change']) // 声明允许触发的事件名

// 方式2：直接导入 emit（简单场景可用）
// import { emit } from 'vue'

import './button.scss';
const props=defineProps({
    type:{
        type:String,
        default:'default',
        validator: (value: string) => {  //验证合法性：通过 validator 函数限制，只能传入这几个值中的一个
            return ['default', 'primary','success','danger','warning','info','dark','light'].includes(value);  //.includes() 方法用于判断数组是否包含指定的值,返回 true 或 false。
        }
    },
    size:{
        type:String,
        default:'medium',
        validator: (value: string) => {
            return ['small', 'medium', 'large'].includes(value);
        }
    },
    disabled:{
        type:Boolean,
        default:false
    },
    loading:{
        type:Boolean,
        default:false
    },
    nativeType:{
        type: String as () => 'button' | 'submit' | 'reset',
        default: 'button',
        validator: (value: 'button' | 'submit' | 'reset') => {
            return ['button', 'submit', 'reset'].includes(value);
        }
    }
})
const emits=defineEmits(['click']); //用于声明组件可触发的事件声明后，父组件可以通过 @click 监听该事件（如 <Button @click="handleClick" />）
const handleClick=(event: MouseEvent) => {
    if (!props.disabled && !props.loading) {
        emits('click', event); //触发 click 事件，并传递原生事件对象
    }
};
</script>