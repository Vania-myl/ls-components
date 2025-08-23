//import{ExtractPropTypes} from 'vue';
import lsCard from './Card.vue';

// export const cardProps={
//     title:{
//         type:String,
//         default:''
//     },
//     bordered:{
//         type:Boolean,
//         default:true
//     },
//     shadow:{
//         type:Boolean,
//         default:true
//     },
    // radius:{
    //      type: String as () => 'small' | 'medium' | 'large' | 'none', //类型断言
    //     default:'medium'
    // }
//}as const
//export type CardProps=ExtractPropTypes<typeof cardProps>
//利用 Vue 的 ExtractPropTypes 工具，从 cardProps 中自动提取出 props 的类型，生成一个 TypeScript 接口。

export {lsCard};
export default lsCard;