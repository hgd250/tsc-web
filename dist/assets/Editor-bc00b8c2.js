import{B as p}from"./BasicForm-73e193f4.js";import"./BasicForm.vue_vue_type_style_index_0_lang-9cb27bc3.js";import{ab as m,u as l,_ as c}from"./index.js";import{T as d}from"./index-3e05df57.js";import{P as f}from"./index-962a8b9c.js";import{d as C,m as _,a6 as o,Z as h,a7 as b,a8 as r,l as s}from"./vue-b9806415.js";import"./antd-0fea3d6a.js";import"./index-d3aaf0b8.js";import"./useWindowSizeFn-da6b5cad.js";import"./index-85a43704.js";import"./uuid-31b8b5a4.js";import"./download-9ecd0762.js";import"./base64Conver-39fc0d26.js";import"./index-01cbc176.js";import"./onMountedOrActivated-b65981ee.js";import"./useContentViewHeight-bbdf3bf4.js";const B=[{field:"title",component:"Input",label:"title",defaultValue:"defaultValue",rules:[{required:!0}]},{field:"tinymce",component:"Input",label:"tinymce",defaultValue:"defaultValue",rules:[{required:!0}],render:({model:e,field:t})=>_(d,{value:e[t],onChange:a=>{e[t]=a}})}],g=C({components:{BasicForm:p,CollapseContainer:m,PageWrapper:f},setup(){const{createMessage:e}=l();return{schemas:B,handleSubmit:t=>{e.success("click search,values:"+JSON.stringify(t))}}}});function P(e,t,a,S,V,y){const n=o("BasicForm"),u=o("CollapseContainer"),i=o("PageWrapper");return h(),b(i,{title:"富文本嵌入表单示例"},{default:r(()=>[s(u,{title:"富文本表单"},{default:r(()=>[s(n,{labelWidth:100,schemas:e.schemas,actionColOptions:{span:24},baseColProps:{span:24},onSubmit:e.handleSubmit},null,8,["schemas","onSubmit"])]),_:1})]),_:1})}const J=c(g,[["render",P]]);export{J as default};