import{B as m}from"./BasicTable-37d1e4a1.js";import"./BasicForm.vue_vue_type_style_index_0_lang-9cb27bc3.js";import"./TableImg.vue_vue_type_style_index_0_lang-d527ac40.js";import{u as a}from"./useTable-65fd89bc.js";import{getBasicColumns as p}from"./tableData-87f7b0c0.js";import{d as c}from"./table-9286518d.js";import{d as l,a6 as u,Z as _,_ as d,l as f}from"./vue-b9806415.js";import{_ as b}from"./index.js";import"./BasicForm-73e193f4.js";import"./antd-0fea3d6a.js";import"./index-d3aaf0b8.js";import"./useWindowSizeFn-da6b5cad.js";import"./useForm-4dc53c5d.js";import"./uuid-31b8b5a4.js";import"./onMountedOrActivated-b65981ee.js";import"./index-85a43704.js";import"./download-9ecd0762.js";import"./base64Conver-39fc0d26.js";import"./index-01cbc176.js";import"./sortable.esm-4ae27e0b.js";import"./select-93eac05e.js";const B=l({components:{BasicTable:m},setup(){function o(s){const e=s.reduce((t,i)=>(t+=i.no,t),0);return[{_row:"合计",_index:"平均值",no:e},{_row:"合计",_index:"平均值",no:e}]}const[r]=a({title:"表尾行合计示例",api:c,rowSelection:{type:"checkbox"},columns:p(),showSummary:!0,summaryFunc:o,scroll:{x:2e3},canResize:!1});return{registerTable:r}}}),T={class:"p-4"};function x(o,r,s,e,t,i){const n=u("BasicTable");return _(),d("div",T,[f(n,{onRegister:o.registerTable},null,8,["onRegister"])])}const G=b(B,[["render",x]]);export{G as default};
