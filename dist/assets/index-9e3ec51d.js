import{B as c}from"./BasicForm.vue_vue_type_style_index_0_lang-8c66020c.js";import{u as l,_ as d}from"./index.js";import{B as f}from"./BasicForm-152e2559.js";import{u as g}from"./useForm-4dc53c5d.js";import{P as _}from"./index-c8f3d3c2.js";import{u as p}from"./upload-35218076.js";import{d as B,a6 as o,Z as C,a7 as h,a8 as A,l as a}from"./vue-b9806415.js";import{a7 as n}from"./antd-57936705.js";import"./index-456abdd7.js";import"./index-7caba1aa.js";import"./useWindowSizeFn-da6b5cad.js";import"./uuid-31b8b5a4.js";import"./download-9ecd0762.js";import"./base64Conver-39fc0d26.js";import"./index-acb772bd.js";import"./useContentViewHeight-bbdf3bf4.js";import"./onMountedOrActivated-b65981ee.js";const F=[{field:"field1",component:"Upload",label:"字段1",colProps:{span:8},rules:[{required:!0,message:"请选择上传文件"}],componentProps:{api:p}}],P=B({components:{BasicUpload:c,BasicForm:f,PageWrapper:_,[n.name]:n},setup(){const{createMessage:e}=l(),[s]=g({labelWidth:120,schemas:F,actionColOptions:{span:16}});return{handleChange:r=>{e.info(`已上传文件${JSON.stringify(r)}`)},uploadApi:p,register:s}}});function $(e,s,r,x,U,W){const t=o("a-alert"),i=o("BasicUpload"),m=o("BasicForm"),u=o("PageWrapper");return C(),h(u,{title:"上传组件示例"},{default:A(()=>[a(t,{message:"基础示例"}),a(i,{maxSize:20,maxNumber:10,onChange:e.handleChange,api:e.uploadApi,class:"my-5",accept:["image/*"]},null,8,["onChange","api"]),a(t,{message:"嵌入表单,加入表单校验"}),a(m,{onRegister:e.register,class:"my-5"},null,8,["onRegister"])]),_:1})}const j=d(P,[["render",$]]);export{j as default};
