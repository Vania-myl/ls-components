<template>
    <div class="ls-message" 
    :class="['ls-message--'+type,{'ls-message--close':showClose,'ls-message--check':showCheck}]"
    @mouseenter="pauseTimer" 
      @mouseleave="resumeTimer"
    @click="handleClick"
    >
<!--图标-->
<span class="ls-message__icon" >
    <svg v-if="type === 'info'" class="ls-message__icon-svg" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm0-4h-2V7h2v8z" fill="currentColor"/></svg>
    <svg v-if="type === 'success'" class="ls-message__icon-svg" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z" fill="currentColor"/></svg>
    <svg v-if="type === 'warning'" class="ls-message__icon-svg" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" fill="currentColor"/></svg>
    <svg v-if="type === 'error'" class="ls-message__icon-svg" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" fill="currentColor"/></svg>
</span>
<!--内容-->
<span class="ls-message__content">{{ message }}</span>
<!--按钮-->
<span class="ls-message__close" v-if="showClose"
@click="close" >
<lsButton size="small" type="text">x</lsButton>
</span>
</div>
</template>

<script setup lang="ts">
import './message.scss';
import { ref ,onUnmounted,onMounted} from 'vue';
import  lsButton  from '../Button/Button.vue';
const show= ref(false); // 控制消息显示的变量，初始值为 true
const handleClick = () => {
  show.value = true; // 点击后显示
};
const props = defineProps({
    type: {
        type: String,
        default: 'info',
        validator: (value: string) => {
            return ['info', 'success', 'warning', 'error'].includes(value);
        }
    },
    message: {
        type: String,
        default: ''
    },
    showClose: {
        type: Boolean,
        default:false
    },
    showCheck: {
        type: Boolean,
        default: false
    },
     duration: { 
        type: Number,
         default: 2000 
        }, // 自动关闭时长（ms），0 = 不自动关闭
    
})
const visible = ref(false)
const emit = defineEmits(['close']);
const close = () => {
     visible.value = false
      if (timer) clearTimeout(timer) // 清除定时器，避免残留
    emit('close'); // 触发 close 事件
};

let timer: NodeJS.Timeout | null = null // 存储定时器，用于暂停/清除
// 启动定时器（自动关闭）
const startTimer = () => {
  if (props.duration <= 0) return // 时长为0，不自动关闭
  // 清除已有定时器，避免重复创建
  if (timer) clearTimeout(timer)
  // 新建定时器，到时间执行关闭
  timer = setTimeout(close, props.duration)
}
// 暂停定时器（鼠标悬浮时）
const pauseTimer = () => {
  if (timer) clearTimeout(timer) // 清除定时器，暂停计时
}

// 继续定时器（鼠标离开时）
const resumeTimer = () => {
  startTimer() // 重新启动定时器，继续倒计时
}
// 组件挂载后：显示消息 + 启动自动关闭定时器
onMounted(() => {
  visible.value = true
  startTimer()
})

// 组件卸载前：清除定时器（防止内存泄漏）
onUnmounted(() => {
  if (timer) clearTimeout(timer)
})

</script>