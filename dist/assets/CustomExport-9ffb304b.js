import{B as d}from"./BasicTable-6b963068.js";import"./BasicForm.vue_vue_type_style_index_0_lang-5530a29b.js";import"./TableImg.vue_vue_type_style_index_0_lang-751beea8.js";import{E as f}from"./index-76d8082a.js";import{c as _,d as u,j as E}from"./data-3af26c17.js";import{u as C}from"./index-66132375.js";import{P as F}from"./index-905f9d8d.js";import{d as B,a6 as e,Z as x,a7 as g,a8 as t,l as a,E as b}from"./vue-b9806415.js";import{_ as M}from"./index.js";import"./BasicForm-283acb19.js";import"./antd-b9afe41d.js";import"./useForm-4dc53c5d.js";import"./uuid-31b8b5a4.js";import"./useWindowSizeFn-da6b5cad.js";import"./onMountedOrActivated-b65981ee.js";import"./index-e6e43971.js";import"./download-9ecd0762.js";import"./base64Conver-39fc0d26.js";import"./index-183a9872.js";import"./sortable.esm-4ae27e0b.js";import"./useContentViewHeight-bbdf3bf4.js";const A=B({components:{BasicTable:d,ExpExcelModal:f,PageWrapper:F},setup(){function o({filename:n,bookType:p}){E({data:u,filename:n,write2excelOpts:{bookType:p}})}const[r,{openModal:s}]=C();return{defaultHeader:o,columns:_,data:u,register:r,openModal:s}}});function S(o,r,s,n,p,T){const c=e("a-button"),m=e("BasicTable"),i=e("ExpExcelModal"),l=e("PageWrapper");return x(),g(l,{title:"导出示例",content:"可以选择导出格式"},{default:t(()=>[a(m,{title:"基础表格",columns:o.columns,dataSource:o.data},{toolbar:t(()=>[a(c,{onClick:o.openModal},{default:t(()=>[b(" 导出 ")]),_:1},8,["onClick"])]),_:1},8,["columns","dataSource"]),a(i,{onRegister:o.register,onSuccess:o.defaultHeader},null,8,["onRegister","onSuccess"])]),_:1})}const J=M(A,[["render",S]]);export{J as default};
