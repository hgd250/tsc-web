import{u as s}from"./index-b3e3dd3b.js";import _ from"./Drawer1-2aa54d1c.js";import y from"./Drawer2-61158dba.js";import E from"./Drawer3-01538607.js";import A from"./Drawer4-449c5187.js";import R from"./Drawer5-253fa08f.js";import{P as k}from"./index-905f9d8d.js";import{d as B,a6 as t,Z as $,a7 as P,a8 as u,l as r,E as i}from"./vue-b9806415.js";import{a9 as v}from"./antd-b9afe41d.js";import{_ as W}from"./index.js";import"./BasicForm-283acb19.js";import"./BasicForm.vue_vue_type_style_index_0_lang-5530a29b.js";import"./index-e6e43971.js";import"./index-66132375.js";import"./useWindowSizeFn-da6b5cad.js";import"./uuid-31b8b5a4.js";import"./download-9ecd0762.js";import"./base64Conver-39fc0d26.js";import"./index-183a9872.js";import"./useForm-4dc53c5d.js";import"./useContentViewHeight-bbdf3bf4.js";import"./onMountedOrActivated-b65981ee.js";const b=B({components:{Alert:v,PageWrapper:k,Drawer1:_,Drawer2:y,Drawer3:E,Drawer4:A,Drawer5:R},setup(){const[e,{openDrawer:o,setDrawerProps:p}]=s(),[g,{openDrawer:f}]=s(),[d,{openDrawer:n}]=s(),[a,{openDrawer:m}]=s(),[w,{openDrawer:D}]=s();function l(){m(!0,{data:"content",info:"Info"})}function c(){o(),p({loading:!0}),setTimeout(()=>{p({loading:!1})},2e3)}return{register1:e,openDrawer1:o,register2:g,openDrawer2:f,register3:d,openDrawer3:n,register4:a,register5:w,openDrawer5:D,send:l,openDrawerLoading:c}}});function L(e,o,p,g,f,d){const n=t("Alert"),a=t("a-button"),m=t("Drawer1"),w=t("Drawer2"),D=t("Drawer3"),l=t("Drawer4"),c=t("Drawer5"),F=t("PageWrapper");return $(),P(F,{title:"抽屉组件使用示例"},{default:u(()=>[r(n,{message:"使用 useDrawer 进行抽屉操作","show-icon":""}),r(a,{type:"primary",class:"my-4",onClick:e.openDrawerLoading},{default:u(()=>[i(" 打开Drawer ")]),_:1},8,["onClick"]),r(n,{message:"内外同时控制显示隐藏","show-icon":""}),r(a,{type:"primary",class:"my-4",onClick:o[0]||(o[0]=C=>e.openDrawer2(!0))},{default:u(()=>[i(" 打开Drawer ")]),_:1}),r(n,{message:"自适应高度/显示footer","show-icon":""}),r(a,{type:"primary",class:"my-4",onClick:o[1]||(o[1]=C=>e.openDrawer3(!0))},{default:u(()=>[i(" 打开Drawer ")]),_:1}),r(n,{message:"内外数据交互","show-icon":""}),r(a,{type:"primary",class:"my-4",onClick:e.send},{default:u(()=>[i(" 打开Drawer并传递数据 ")]),_:1},8,["onClick"]),r(n,{message:"详情页模式","show-icon":""}),r(a,{type:"primary",class:"my-4",onClick:o[2]||(o[2]=C=>e.openDrawer5(!0))},{default:u(()=>[i(" 打开详情Drawer ")]),_:1}),r(m,{onRegister:e.register1},null,8,["onRegister"]),r(w,{onRegister:e.register2},null,8,["onRegister"]),r(D,{onRegister:e.register3},null,8,["onRegister"]),r(l,{onRegister:e.register4},null,8,["onRegister"]),r(c,{onRegister:e.register5},null,8,["onRegister"])]),_:1})}const er=W(b,[["render",L]]);export{er as default};