import{B as c}from"./BasicTable-6b963068.js";import"./BasicForm.vue_vue_type_style_index_0_lang-5530a29b.js";import"./TableImg.vue_vue_type_style_index_0_lang-751beea8.js";import{u}from"./useTable-65fd89bc.js";import{getBasicColumns as d}from"./tableData-c537adf1.js";import{P as f}from"./index-905f9d8d.js";import{d as _}from"./table-9286518d.js";import{d as g,a6 as r,Z as C,a7 as B,a8 as o,l as a,E as s}from"./vue-b9806415.js";import{_ as b}from"./index.js";import"./BasicForm-283acb19.js";import"./antd-b9afe41d.js";import"./index-66132375.js";import"./useWindowSizeFn-da6b5cad.js";import"./useForm-4dc53c5d.js";import"./uuid-31b8b5a4.js";import"./onMountedOrActivated-b65981ee.js";import"./index-e6e43971.js";import"./download-9ecd0762.js";import"./base64Conver-39fc0d26.js";import"./index-183a9872.js";import"./sortable.esm-4ae27e0b.js";import"./select-93eac05e.js";import"./useContentViewHeight-bbdf3bf4.js";const h=g({components:{BasicTable:c,PageWrapper:f},setup(){const[e,{reload:t}]=u({title:"远程加载示例",api:_,columns:d(),pagination:{pageSize:10}});function n(){t()}function i(){t({page:1})}return{registerTable:e,handleReloadCurrent:n,handleReload:i}}});function T(e,t,n,i,k,R){const p=r("a-button"),m=r("BasicTable"),l=r("PageWrapper");return C(),B(l,{contentBackground:"",contentClass:"flex",dense:"",contentFullHeight:"",fixedHeight:""},{default:o(()=>[a(m,{onRegister:e.registerTable},{toolbar:o(()=>[a(p,{type:"primary",onClick:e.handleReloadCurrent},{default:o(()=>[s(" 刷新当前页 ")]),_:1},8,["onClick"]),a(p,{type:"primary",onClick:e.handleReload},{default:o(()=>[s(" 刷新并返回第一页 ")]),_:1},8,["onClick"])]),_:1},8,["onRegister"])]),_:1})}const K=b(h,[["render",T]]);export{K as default};