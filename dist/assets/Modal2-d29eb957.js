import{B as i,b as c}from"./index-66132375.js";import{d as p,a6 as r,Z as d,a7 as m,a8 as e,l as n,E as l}from"./vue-b9806415.js";import{_}from"./index.js";import"./antd-b9afe41d.js";import"./useWindowSizeFn-da6b5cad.js";const M=p({components:{BasicModal:i},setup(){const[o,{closeModal:t,setModalProps:a}]=c();return{register:o,closeModal:t,setModalProps:()=>{a({title:"Modal New Title"})}}}});function f(o,t,a,E,C,k){const s=r("a-button"),u=r("BasicModal");return d(),m(u,{onRegister:o.register,title:"Modal Title",helpMessage:["提示1","提示2"],okButtonProps:{disabled:!0}},{default:e(()=>[n(s,{type:"primary",onClick:o.closeModal,class:"mr-2"},{default:e(()=>[l(" 从内部关闭弹窗 ")]),_:1},8,["onClick"]),n(s,{type:"primary",onClick:o.setModalProps},{default:e(()=>[l(" 从内部修改title ")]),_:1},8,["onClick"])]),_:1},8,["onRegister"])}const $=_(M,[["render",f]]);export{$ as default};
