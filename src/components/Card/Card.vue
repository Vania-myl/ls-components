<template>
    <div class="ls-card" 
    :class="[{'ls-card--no-border': !border},{'ls-card--no-shadow':!shadow},'ls-card--radius--${radius}','ls-card--'+size]" >
<!--card头部-->
<div class="ls-card__header" v-if="title||subtitle">
    <div class="ls-card__header-title" v-if="title">{{title}}</div>
    <div class="ls-card__header-content" v-if="subtitle">{{subtitle}}
        <!-- <slot name="header"></slot> -->
    </div>
</div>
<!--card主体-->
<div class="ls-card__body">
    <div class="ls-card__body-image">
        <!--默认插槽-->
    <slot></slot>
    </div>
<!--card底部-->
<div class="ls-card__footer" v-if="$slots.footer">
    <slot name="footer"></slot> 
    </div>
</div>
</div>
</template>
<script setup lang="ts">
import './card.scss';
const props = defineProps({
     title:{
        type:String,
        default:''
    },
    subtitle:{
        type:String,
        default:''
    },
    border:{
    type: Boolean,
    default: true
  },
  shadow: {
    type: Boolean,
    default: true
  },
  radius:{
    type:Number,
    default:8
  },
  size:{
    type:String,
    default:'small',
    validator:(value:string)=>{
        return ['small','medium','large'].includes(value);
    }
  }
})
</script>
