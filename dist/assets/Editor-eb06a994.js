import{B as m}from"./BasicForm-283acb19.js";import"./BasicForm.vue_vue_type_style_index_0_lang-5530a29b.js";import{ab as u,u as l,_ as c}from"./index.js";import{M as d}from"./index-8e63eb98.js";import{P as f}from"./index-905f9d8d.js";import{d as _,m as C,a6 as t,Z as h,a7 as b,a8 as r,l as s}from"./vue-b9806415.js";import"./antd-b9afe41d.js";import"./index-66132375.js";import"./useWindowSizeFn-da6b5cad.js";import"./index-e6e43971.js";import"./uuid-31b8b5a4.js";import"./download-9ecd0762.js";import"./base64Conver-39fc0d26.js";import"./index-183a9872.js";import"./onMountedOrActivated-b65981ee.js";import"./useContentViewHeight-bbdf3bf4.js";const g=[{field:"title",component:"Input",label:"title",defaultValue:"标题",rules:[{required:!0}]},{field:"markdown",component:"Input",label:"markdown",defaultValue:"defaultValue",rules:[{required:!0,trigger:"blur"}],render:({model:e,field:o})=>C(d,{value:e[o],onChange:a=>{e[o]=a}})}],k=_({components:{BasicForm:m,CollapseContainer:u,PageWrapper:f},setup(){const{createMessage:e}=l();return{schemas:g,handleSubmit:o=>{e.success("click search,values:"+JSON.stringify(o))}}}});function B(e,o,a,w,F,M){const n=t("BasicForm"),p=t("CollapseContainer"),i=t("PageWrapper");return h(),b(i,{title:"MarkDown组件嵌入Form示例"},{default:r(()=>[s(p,{title:"MarkDown表单"},{default:r(()=>[s(n,{labelWidth:100,schemas:e.schemas,actionColOptions:{span:24},baseColProps:{span:24},onSubmit:e.handleSubmit},null,8,["schemas","onSubmit"])]),_:1})]),_:1})}const Z=c(k,[["render",B]]);export{Z as default};
