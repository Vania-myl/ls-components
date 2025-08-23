
<template>
    <div class="ls-switch"
    :class="[{'is-checked':checked} ,{'is-disabled':disabled},'ls-switch--'+size,{'is-text':showText}]"
    @click="toggle"
    :style="switchColor"
    >
    <!--开关轨道-->
        <span class="ls-switch__core">
            <!--滑块按钮-->
            <span class="ls-switch__button"> </span>
        </span>
        <span v-if="showText" class="ls-switch__text" 
                v-html="checked?activeText:inactiveText"></span>
            <!--v-html：Vue 的内置指令，用于将绑定的值作为 HTML 插入到元素中（区别于 v-text，后者会将值作为纯文本插入）。-->
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import './switch.scss';
const props=defineProps({
    checked:{
        type:Boolean,
        default:true
    },
    disabled:{
        type:Boolean,
        default:false
    },
    showText:{
        type:Boolean,
        default:true
    },
    activeText:{
        type:String,
        default:'启用'
    },
    inactiveText:{
        type:String,
        default:'禁用'
    },
    activeColor:{
        type:String,
        default:'green'
    },
    inactiveColor:{
        type:String,
        default:'#ccc'
    },
   size:{
    type:String ,
    default:'medium',
    validator:(value:string)=>{
        return ['small','medium','large'].includes(value);
    }
   }
})
const emit=defineEmits(['update:checked']);
//update:checked 事件：用于实现 v-model 双向绑定。根据 Vue 规范，当事件名为 update:xxx 时，父组件可通过 v-model:xxx 简化绑定。
const switchColor=computed(() => {
  return {
    backgroundColor: props.checked ? props.activeColor : props.inactiveColor
  }
})
const toggle=()=>{
    if(props.disabled) return;   //禁用状态不响应
    const newChecked=!props.checked;
    emit('update:checked',newChecked);
   
}

</script>