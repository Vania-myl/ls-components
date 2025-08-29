/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; },
  install: function() { return /* reexport */ install; },
  lsButton: function() { return /* reexport */ Button; },
  lsCard: function() { return /* reexport */ Card; },
  lsCarousel: function() { return /* reexport */ Carousel; },
  lsImage: function() { return /* reexport */ Image; },
  lsMessage: function() { return /* reexport */ Message; },
  lsSwitch: function() { return /* reexport */ Switch; }
});

;// ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) // removed by dead control flow
{ var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject = require("vue");
;// ./node_modules/ts-loader/index.js??clonedRuleSet-41.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Card/Card.vue?vue&type=script&setup=true&lang=ts


const _hoisted_1 = {
    key: 0,
    class: "ls-card__header"
};
const _hoisted_2 = {
    key: 0,
    class: "ls-card__header-title"
};
const _hoisted_3 = {
    key: 1,
    class: "ls-card__header-content"
};
const _hoisted_4 = { class: "ls-card__body" };
const _hoisted_5 = { class: "ls-card__body-image" };
const _hoisted_6 = {
    key: 0,
    class: "ls-card__footer"
};

/* harmony default export */ var Cardvue_type_script_setup_true_lang_ts = (/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.defineComponent)({
    __name: 'Card',
    props: {
        title: {
            type: String,
            default: ''
        },
        subtitle: {
            type: String,
            default: ''
        },
        border: {
            type: Boolean,
            default: true
        },
        shadow: {
            type: Boolean,
            default: true
        },
        radius: {
            type: Number,
            default: 8
        },
        size: {
            type: String,
            default: 'small',
            validator: (value) => {
                return ['small', 'medium', 'large'].includes(value);
            }
        }
    },
    setup(__props) {
        const props = __props;
        return (_ctx, _cache) => {
            return ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", {
                class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)(["ls-card", [{ 'ls-card--no-border': !__props.border }, { 'ls-card--no-shadow': !__props.shadow }, 'ls-card--radius--${radius}', 'ls-card--' + __props.size]])
            }, [
                (__props.title || __props.subtitle)
                    ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", _hoisted_1, [
                        (__props.title)
                            ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", _hoisted_2, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.toDisplayString)(__props.title), 1))
                            : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true),
                        (__props.subtitle)
                            ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", _hoisted_3, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.toDisplayString)(__props.subtitle) + " ", 1))
                            : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true)
                    ]))
                    : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true),
                (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", _hoisted_4, [
                    (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", _hoisted_5, [
                        (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderSlot)(_ctx.$slots, "default")
                    ]),
                    (_ctx.$slots.footer)
                        ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", _hoisted_6, [
                            (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderSlot)(_ctx.$slots, "footer")
                        ]))
                        : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true)
                ])
            ], 2));
        };
    }
}));

;// ./src/components/Card/Card.vue?vue&type=script&setup=true&lang=ts
 
;// ./src/components/Card/Card.vue



const __exports__ = Cardvue_type_script_setup_true_lang_ts;

/* harmony default export */ var Card = (__exports__);
;// ./node_modules/ts-loader/index.js??clonedRuleSet-41.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Button/Button.vue?vue&type=script&setup=true&lang=ts


const Buttonvue_type_script_setup_true_lang_ts_hoisted_1 = ["disabled", "type"];
const Buttonvue_type_script_setup_true_lang_ts_hoisted_2 = {
    key: 0,
    class: "ls-button__loading"
};
const Buttonvue_type_script_setup_true_lang_ts_hoisted_3 = /*#__PURE__*/ (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("svg", {
    class: "ls-button__loading-icon",
    fill: "none",
    viewBox: "0 0 24 24"
}, [
    /*#__PURE__*/ (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createTextVNode)(" //SVG圆形加载动画 "),
    /*#__PURE__*/ (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("circle", {
        cx: "12",
        cy: "12",
        r: "10",
        stroke: "currentColor",
        "stroke-dasharray": "50",
        "stroke-width": "4"
    }),
    /*#__PURE__*/ (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createTextVNode)("//stroke=\"currentColor\"：定义圆的 边框颜色 为 currentColor（特殊值，继承父元素的 color 属性值），方便通过 CSS 统一控制颜色。 ")
], -1);
const Buttonvue_type_script_setup_true_lang_ts_hoisted_4 = [
    Buttonvue_type_script_setup_true_lang_ts_hoisted_3
];
const Buttonvue_type_script_setup_true_lang_ts_hoisted_5 = {
    key: 1,
    class: "ls-button__icon"
};
const Buttonvue_type_script_setup_true_lang_ts_hoisted_6 = { class: "ls-button__text" };

/* harmony default export */ var Buttonvue_type_script_setup_true_lang_ts = (/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.defineComponent)({
    __name: 'Button',
    props: {
        type: {
            type: String,
            default: 'default',
            validator: (value) => {
                return ['default', 'primary', 'success', 'danger', 'warning', 'info', 'dark', 'light'].includes(value); //.includes() 方法用于判断数组是否包含指定的值,返回 true 或 false。
            }
        },
        size: {
            type: String,
            default: 'medium',
            validator: (value) => {
                return ['small', 'medium', 'large'].includes(value);
            }
        },
        disabled: {
            type: Boolean,
            default: false
        },
        loading: {
            type: Boolean,
            default: false
        },
        nativeType: {
            type: String,
            default: 'button',
            validator: (value) => {
                return ['button', 'submit', 'reset'].includes(value);
            }
        }
    },
    emits: ['click'],
    setup(__props, { emit: emits }) {
        const props = __props;
        // 方式1：通过 defineEmits 声明事件（推荐，更规范）
        //const emit = defineEmits(['submit', 'change']) // 声明允许触发的事件名
        // 方式2：直接导入 emit（简单场景可用）
        // import { emit } from 'vue'
        //用于声明组件可触发的事件声明后，父组件可以通过 @click 监听该事件（如 <Button @click="handleClick" />）
        const handleClick = (event) => {
            if (!props.disabled && !props.loading) {
                emits('click', event); //触发 click 事件，并传递原生事件对象
            }
        };
        return (_ctx, _cache) => {
            return ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("button", {
                class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)(["ls-button", ['ls-button--' + __props.type, 'ls-button--' + __props.size,
                        { 'ls-button--disabled': __props.disabled, 'ls-button--loading': __props.loading }]]),
                onClick: handleClick,
                disabled: __props.disabled || __props.loading,
                type: __props.nativeType
            }, [
                (__props.loading)
                    ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("span", Buttonvue_type_script_setup_true_lang_ts_hoisted_2, Buttonvue_type_script_setup_true_lang_ts_hoisted_4))
                    : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true),
                (_ctx.$slots.icon && !__props.loading)
                    ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("span", Buttonvue_type_script_setup_true_lang_ts_hoisted_5, [
                        (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderSlot)(_ctx.$slots, "icon")
                    ]))
                    : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true),
                (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("span", Buttonvue_type_script_setup_true_lang_ts_hoisted_6, [
                    (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderSlot)(_ctx.$slots, "default")
                ])
            ], 10, Buttonvue_type_script_setup_true_lang_ts_hoisted_1));
        };
    }
}));

;// ./src/components/Button/Button.vue?vue&type=script&setup=true&lang=ts
 
;// ./src/components/Button/Button.vue



const Button_exports_ = Buttonvue_type_script_setup_true_lang_ts;

/* harmony default export */ var Button = (Button_exports_);
;// ./node_modules/ts-loader/index.js??clonedRuleSet-41.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Switch/Switch.vue?vue&type=script&setup=true&lang=ts


const Switchvue_type_script_setup_true_lang_ts_hoisted_1 = /*#__PURE__*/ (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("span", { class: "ls-switch__core" }, [
    /*#__PURE__*/ (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("span", { class: "ls-switch__button" })
], -1);
const Switchvue_type_script_setup_true_lang_ts_hoisted_2 = ["innerHTML"];


/* harmony default export */ var Switchvue_type_script_setup_true_lang_ts = (/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.defineComponent)({
    __name: 'Switch',
    props: {
        checked: {
            type: Boolean,
            default: true
        },
        disabled: {
            type: Boolean,
            default: false
        },
        showText: {
            type: Boolean,
            default: true
        },
        activeText: {
            type: String,
            default: '启用'
        },
        inactiveText: {
            type: String,
            default: '禁用'
        },
        activeColor: {
            type: String,
            default: 'green'
        },
        inactiveColor: {
            type: String,
            default: '#ccc'
        },
        size: {
            type: String,
            default: 'medium',
            validator: (value) => {
                return ['small', 'medium', 'large'].includes(value);
            }
        }
    },
    emits: ['update:checked'],
    setup(__props, { emit }) {
        const props = __props;
        //update:checked 事件：用于实现 v-model 双向绑定。根据 Vue 规范，当事件名为 update:xxx 时，父组件可通过 v-model:xxx 简化绑定。
        const switchColor = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.computed)(() => {
            return {
                backgroundColor: props.checked ? props.activeColor : props.inactiveColor
            };
        });
        const toggle = () => {
            if (props.disabled)
                return; //禁用状态不响应
            const newChecked = !props.checked;
            emit('update:checked', newChecked);
        };
        return (_ctx, _cache) => {
            return ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", {
                class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)(["ls-switch", [{ 'is-checked': __props.checked }, { 'is-disabled': __props.disabled }, 'ls-switch--' + __props.size, { 'is-text': __props.showText }]]),
                onClick: toggle,
                style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeStyle)(switchColor.value)
            }, [
                Switchvue_type_script_setup_true_lang_ts_hoisted_1,
                (__props.showText)
                    ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("span", {
                        key: 0,
                        class: "ls-switch__text",
                        innerHTML: __props.checked ? __props.activeText : __props.inactiveText
                    }, null, 8, Switchvue_type_script_setup_true_lang_ts_hoisted_2))
                    : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true)
            ], 6));
        };
    }
}));

;// ./src/components/Switch/Switch.vue?vue&type=script&setup=true&lang=ts
 
;// ./src/components/Switch/Switch.vue



const Switch_exports_ = Switchvue_type_script_setup_true_lang_ts;

/* harmony default export */ var Switch = (Switch_exports_);
;// ./node_modules/ts-loader/index.js??clonedRuleSet-41.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Message/Message.vue?vue&type=script&setup=true&lang=ts


const Messagevue_type_script_setup_true_lang_ts_hoisted_1 = { class: "ls-message__icon" };
const Messagevue_type_script_setup_true_lang_ts_hoisted_2 = {
    key: 0,
    class: "ls-message__icon-svg",
    viewBox: "0 0 24 24"
};
const Messagevue_type_script_setup_true_lang_ts_hoisted_3 = /*#__PURE__*/ (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm0-4h-2V7h2v8z",
    fill: "currentColor"
}, null, -1);
const Messagevue_type_script_setup_true_lang_ts_hoisted_4 = [
    Messagevue_type_script_setup_true_lang_ts_hoisted_3
];
const Messagevue_type_script_setup_true_lang_ts_hoisted_5 = {
    key: 1,
    class: "ls-message__icon-svg",
    viewBox: "0 0 24 24"
};
const Messagevue_type_script_setup_true_lang_ts_hoisted_6 = /*#__PURE__*/ (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z",
    fill: "currentColor"
}, null, -1);
const _hoisted_7 = [
    Messagevue_type_script_setup_true_lang_ts_hoisted_6
];
const _hoisted_8 = {
    key: 2,
    class: "ls-message__icon-svg",
    viewBox: "0 0 24 24"
};
const _hoisted_9 = /*#__PURE__*/ (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z",
    fill: "currentColor"
}, null, -1);
const _hoisted_10 = [
    _hoisted_9
];
const _hoisted_11 = {
    key: 3,
    class: "ls-message__icon-svg",
    viewBox: "0 0 24 24"
};
const _hoisted_12 = /*#__PURE__*/ (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z",
    fill: "currentColor"
}, null, -1);
const _hoisted_13 = [
    _hoisted_12
];
const _hoisted_14 = { class: "ls-message__content" };



/* harmony default export */ var Messagevue_type_script_setup_true_lang_ts = (/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.defineComponent)({
    __name: 'Message',
    props: {
        type: {
            type: String,
            default: 'info',
            validator: (value) => {
                return ['info', 'success', 'warning', 'error'].includes(value);
            }
        },
        message: {
            type: String,
            default: ''
        },
        showClose: {
            type: Boolean,
            default: false
        },
        showCheck: {
            type: Boolean,
            default: false
        },
        duration: {
            type: Number,
            default: 2000
        }, // 自动关闭时长（ms），0 = 不自动关闭
    },
    emits: ['close'],
    setup(__props, { emit }) {
        const props = __props;
        const show = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)(false); // 控制消息显示的变量，初始值为 true
        const handleClick = () => {
            show.value = true; // 点击后显示
        };
        const visible = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)(false);
        const close = () => {
            visible.value = false;
            if (timer)
                clearTimeout(timer); // 清除定时器，避免残留
            emit('close'); // 触发 close 事件
        };
        let timer = null; // 存储定时器，用于暂停/清除
        // 启动定时器（自动关闭）
        const startTimer = () => {
            if (props.duration <= 0)
                return; // 时长为0，不自动关闭
            // 清除已有定时器，避免重复创建
            if (timer)
                clearTimeout(timer);
            // 新建定时器，到时间执行关闭
            timer = setTimeout(close, props.duration);
        };
        // 暂停定时器（鼠标悬浮时）
        const pauseTimer = () => {
            if (timer)
                clearTimeout(timer); // 清除定时器，暂停计时
        };
        // 继续定时器（鼠标离开时）
        const resumeTimer = () => {
            startTimer(); // 重新启动定时器，继续倒计时
        };
        // 组件挂载后：显示消息 + 启动自动关闭定时器
        (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.onMounted)(() => {
            visible.value = true;
            startTimer();
        });
        // 组件卸载前：清除定时器（防止内存泄漏）
        (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.onUnmounted)(() => {
            if (timer)
                clearTimeout(timer);
        });
        return (_ctx, _cache) => {
            return ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", {
                class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)(["ls-message", ['ls-message--' + __props.type, { 'ls-message--close': __props.showClose, 'ls-message--check': __props.showCheck }]]),
                onMouseenter: pauseTimer,
                onMouseleave: resumeTimer,
                onClick: handleClick
            }, [
                (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("span", Messagevue_type_script_setup_true_lang_ts_hoisted_1, [
                    (__props.type === 'info')
                        ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("svg", Messagevue_type_script_setup_true_lang_ts_hoisted_2, Messagevue_type_script_setup_true_lang_ts_hoisted_4))
                        : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true),
                    (__props.type === 'success')
                        ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("svg", Messagevue_type_script_setup_true_lang_ts_hoisted_5, _hoisted_7))
                        : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true),
                    (__props.type === 'warning')
                        ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("svg", _hoisted_8, _hoisted_10))
                        : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true),
                    (__props.type === 'error')
                        ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("svg", _hoisted_11, _hoisted_13))
                        : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true)
                ]),
                (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("span", _hoisted_14, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.toDisplayString)(__props.message), 1),
                (__props.showClose)
                    ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("span", {
                        key: 0,
                        class: "ls-message__close",
                        onClick: close
                    }, [
                        (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(Button, {
                            size: "small",
                            type: "text"
                        }, {
                            default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withCtx)(() => [
                                (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createTextVNode)("x")
                            ]),
                            _: 1
                        })
                    ]))
                    : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true)
            ], 34));
        };
    }
}));

;// ./src/components/Message/Message.vue?vue&type=script&setup=true&lang=ts
 
;// ./src/components/Message/Message.vue



const Message_exports_ = Messagevue_type_script_setup_true_lang_ts;

/* harmony default export */ var Message = (Message_exports_);
;// ./node_modules/ts-loader/index.js??clonedRuleSet-41.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Image/Image.vue?vue&type=script&setup=true&lang=ts


const Imagevue_type_script_setup_true_lang_ts_hoisted_1 = {
    key: 0,
    class: "loading"
};
const Imagevue_type_script_setup_true_lang_ts_hoisted_2 = ["src", "alt", "onWheel"];
const Imagevue_type_script_setup_true_lang_ts_hoisted_3 = { class: "zoom-control" };
const Imagevue_type_script_setup_true_lang_ts_hoisted_4 = {
    key: 0,
    class: "preview"
};
const Imagevue_type_script_setup_true_lang_ts_hoisted_5 = {
    key: 0,
    class: "prview-container"
};
const Imagevue_type_script_setup_true_lang_ts_hoisted_6 = ["src", "alt"];


/* harmony default export */ var Imagevue_type_script_setup_true_lang_ts = (/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.defineComponent)({
    __name: 'Image',
    props: {
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
        maxZoom: {
            type: Number,
            default: 2
        },
        minZoom: {
            type: Number,
            default: 0.5
        },
        ratateStep: {
            type: Number,
            default: 90
        }
    },
    setup(__props) {
        const props = __props;
        //状态管理
        //ref() 是 Vue 3 提供的创建响应式数据的函数
        const loading = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)(true);
        const error = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)(false);
        const zoomRate = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)(1);
        const ratateDeg = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)(0);
        const previewVisible = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)(false);
        const imageRef = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)(null);
        let altTooltip = null; // 存储alt提示框DOM
        const handleError = (e) => {
            loading.value = false;
            error.value = true;
            console.log('图片加载错误原因', error);
            console.log(props.src);
        };
        //重新加载图片
        const reload = () => {
            loading.value = true;
            error.value = false;
            if (!imageRef.value)
                return; //当 imageRef 没有获取到有效的图片 DOM 元素时，直接退出当前函数
            //重新加载
            imageRef.value.src = '';
            imageRef.value.src = props.src;
        };
        const lspreview = () => {
            previewVisible.value = true;
            document.body.style.overflow = 'hidden';
        };
        const closePreview = () => {
            previewVisible.value = false;
            // 恢复页面滚动
            document.body.style.overflow = '';
        };
        const handleZoom = (e) => {
            // 滚轮向上=放大，向下=缩小（每步0.1倍）
            const step = e.deltaY > 0 ? -0.1 : 0.1;
            // 限制放缩范围
            const newRate = Math.max(props.minZoom, Math.min(zoomRate.value + step, props.maxZoom));
            zoomRate.value = newRate;
        };
        const ratate = () => {
            const ratateStep = props.ratateStep;
            ratateDeg.value = (ratateDeg.value + ratateStep);
        };
        const resetZoom = () => {
            zoomRate.value = 1;
            ratateDeg.value = ratateDeg.value + (360 - ratateDeg.value % 360);
        };
        const containerStyle = {
            width: typeof props.width === 'number' ? `${props.width}px` : props.width,
            height: typeof props.height === 'number' ? `${props.height}px` : props.height,
            borderRadius: props.radius
        };
        const showAlt = (e) => {
            if (loading.value || error.value)
                return;
            if (!altTooltip) {
                console.log("3");
                altTooltip = document.createElement('div');
                altTooltip.className = 'alt-tooltip'; // 自定义样式类
                altTooltip.textContent = props.alt; // 显示alt文本
                altTooltip.style.cssText = `
      position: fixed;
      padding: 4px 8px;
       background: rgba(0, 0, 0, 0.8);  /* 黑色半透明背景 */
     color: #fff;  
      font-size: 14px;
      z-index: 99999;
    `;
                document.body.appendChild(altTooltip); // 添加到页面
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
                document.body.removeChild(altTooltip); // 从页面移除
                altTooltip = null; // 清空引用
            }
        };
        (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.onUnmounted)(() => {
            if (altTooltip) {
                document.body.removeChild(altTooltip);
                altTooltip = null;
            }
        });
        return (_ctx, _cache) => {
            return ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", {
                class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)(["ls-image", [{ 'is-loading': loading.value },
                        { 'is-error': error.value }]]),
                style: containerStyle
            }, [
                (loading.value)
                    ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", Imagevue_type_script_setup_true_lang_ts_hoisted_1, " 加载中... "))
                    : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true),
                (error.value)
                    ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", {
                        key: 1,
                        class: "error",
                        onClick: reload
                    }, " 加载失败，点击重试 "))
                    : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true),
                (!error.value)
                    ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", {
                        key: 2,
                        class: "img-container",
                        style: containerStyle
                    }, [
                        (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withDirectives)((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("img", {
                            class: "img",
                            ref_key: "imageRef",
                            ref: imageRef,
                            src: __props.src,
                            alt: __props.alt,
                            onLoad: _cache[0] || (_cache[0] = ($event) => (loading.value = false)),
                            onError: _cache[1] || (_cache[1] = ($event) => (handleError($event))),
                            onWheel: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withModifiers)(handleZoom, ["prevent"]),
                            onMousemove: showAlt,
                            onMouseleave: removeAlt,
                            style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeStyle)({ transform: `rotate(${ratateDeg.value}deg) scale(${zoomRate.value})`,
                                transition: 'transform 0.5s' })
                        }, null, 44, Imagevue_type_script_setup_true_lang_ts_hoisted_2), [
                            [external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.vShow, !error.value && !loading.value]
                        ]),
                        (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withDirectives)((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", Imagevue_type_script_setup_true_lang_ts_hoisted_3, [
                            (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("button", { onClick: lspreview }, "预览"),
                            (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("button", { onClick: ratate }, "旋转"),
                            (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("button", { onClick: resetZoom }, "重置"),
                            (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("span", null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.toDisplayString)(Math.round(zoomRate.value * 100)) + "%", 1)
                        ], 512), [
                            [external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.vShow, !error.value && !loading.value]
                        ])
                    ]))
                    : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true),
                ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.Teleport, { to: "body" }, [
                    (previewVisible.value)
                        ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", Imagevue_type_script_setup_true_lang_ts_hoisted_4, [
                            (previewVisible.value)
                                ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", Imagevue_type_script_setup_true_lang_ts_hoisted_5, [
                                    (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("button", {
                                        class: "preview-close-bnt",
                                        onClick: closePreview
                                    }, "×"),
                                    (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("img", {
                                        class: "preview-img",
                                        src: __props.src,
                                        alt: __props.alt,
                                        style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeStyle)({ transform: `rotate(${ratateDeg.value}deg)` })
                                    }, null, 12, Imagevue_type_script_setup_true_lang_ts_hoisted_6)
                                ]))
                                : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true)
                        ]))
                        : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true)
                ]))
            ], 2));
        };
    }
}));

;// ./src/components/Image/Image.vue?vue&type=script&setup=true&lang=ts
 
;// ./src/components/Image/Image.vue



const Image_exports_ = Imagevue_type_script_setup_true_lang_ts;

/* harmony default export */ var Image = (Image_exports_);
;// ./node_modules/ts-loader/index.js??clonedRuleSet-41.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Carousel/Carousel.vue?vue&type=script&setup=true&lang=ts


const Carouselvue_type_script_setup_true_lang_ts_hoisted_1 = {
    key: 0,
    class: "img-desc"
};
const Carouselvue_type_script_setup_true_lang_ts_hoisted_2 = {
    key: 2,
    class: "carousel-indicator"
};
const Carouselvue_type_script_setup_true_lang_ts_hoisted_3 = ["onClick"];



/* harmony default export */ var Carouselvue_type_script_setup_true_lang_ts = (/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.defineComponent)({
    __name: 'Carousel',
    props: {
        images: { type: Array, required: true },
        width: { type: [String, Number], default: '800px' },
        height: { type: [String, Number], default: '400px' },
        borderRadius: { type: [String, Number], default: '8px' },
        autoPlay: { type: Boolean, default: true }, // 是否自动轮播
        interval: { type: Number, default: 3000 }, // 自动轮播间隔（ms）
    },
    setup(__props) {
        const props = __props;
        const currentIndex = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)(0);
        let autoPlayTimer = null; // 自动轮播计时器
        //上一张
        const handlePrev = () => {
            currentIndex.value = currentIndex.value === 0
                ? props.images.length - 1
                : currentIndex.value - 1;
        };
        //下一张
        const handleNext = () => {
            currentIndex.value = currentIndex.value === props.images.length - 1
                ? 0
                : currentIndex.value + 1;
        };
        const startAutoPlay = () => {
            if (props.autoPlay && props.images.length > 1) {
                if (autoPlayTimer)
                    clearInterval(autoPlayTimer);
                autoPlayTimer = setInterval(handleNext, props.interval);
            }
        };
        const stopAutoPlay = () => {
            if (autoPlayTimer) {
                clearInterval(autoPlayTimer);
                autoPlayTimer = null;
            }
        };
        const handleIndicatorClick = (idx) => {
            currentIndex.value = idx;
            stopAutoPlay();
            startAutoPlay();
        };
        (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.onMounted)(() => {
            startAutoPlay();
        });
        // 组件卸载时清除定时器（防止内存泄漏）
        (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.onUnmounted)(() => {
            stopAutoPlay();
        });
        return (_ctx, _cache) => {
            return ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", {
                class: "ls-carousel",
                onMouseenter: stopAutoPlay,
                onMouseleave: startAutoPlay,
                style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeStyle)({ width: __props.width, height: __props.height, borderRadius: __props.borderRadius })
            }, [
                (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", {
                    class: "carousel-container",
                    style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeStyle)({ transform: `translateX(-${currentIndex.value * 100}%)` })
                }, [
                    ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderList)(__props.images, (item, index) => {
                        return ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", {
                            class: "carousel-item",
                            key: index
                        }, [
                            (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(Image, {
                                src: item.src,
                                alt: item.alt || `轮播图${index + 1}`,
                                width: "100%",
                                height: "100%"
                            }, null, 8, ["src", "alt"]),
                            (item.desc)
                                ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", Carouselvue_type_script_setup_true_lang_ts_hoisted_1, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.toDisplayString)(item.desc), 1))
                                : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true)
                        ]));
                    }), 128))
                ], 4),
                (__props.images.length > 1)
                    ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("button", {
                        key: 0,
                        class: "prev-btn",
                        onClick: handlePrev
                    }, " < "))
                    : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true),
                (__props.images.length > 1)
                    ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("button", {
                        key: 1,
                        class: "next-btn",
                        onClick: handleNext
                    }, " >"))
                    : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true),
                (__props.images.length > 1)
                    ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", Carouselvue_type_script_setup_true_lang_ts_hoisted_2, [
                        ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderList)(__props.images, (_, idx) => {
                            return ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("span", {
                                class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)(["indicator-item", { active: currentIndex.value === idx }]),
                                key: idx,
                                onClick: ($event) => (handleIndicatorClick(idx))
                            }, null, 10, Carouselvue_type_script_setup_true_lang_ts_hoisted_3));
                        }), 128))
                    ]))
                    : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true)
            ], 36));
        };
    }
}));

;// ./src/components/Carousel/Carousel.vue?vue&type=script&setup=true&lang=ts
 
;// ./src/components/Carousel/Carousel.vue



const Carousel_exports_ = Carouselvue_type_script_setup_true_lang_ts;

/* harmony default export */ var Carousel = (Carousel_exports_);
;// ./src/components/index.ts
// 导入自定义的组件






const components = [Card, Button, Switch, Message, Image, Carousel];
// 导出一个 install 函数，接收 Vue 应用实例作为参数（并指定类型为 App）
//install 函数是 Vue 组件库的标准集成方式，允许用户通过 app.use(xxx) 一次性注册所有组件。
function install(app) {
    // 全局注册 Card 组件，注册后可在整个应用中直接使用 <Card /> 标签
    app.component('lsCard', Card);
    app.component('lsButton', Button);
    app.component('lsSwitch', Switch);
    app.component('lsMessage', Message);
    app.component('lsImage', Image);
    app.component('lsCarousel', Carousel);
}
 //按需导出
/* harmony default export */ var src_components = (install);

;// ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (src_components);


module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=ls-ui.common.js.map