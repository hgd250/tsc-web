import{B as c,_ as d}from"./BasicTable-6b963068.js";import"./BasicForm.vue_vue_type_style_index_0_lang-5530a29b.js";import"./TableImg.vue_vue_type_style_index_0_lang-751beea8.js";import{u as _}from"./useTable-65fd89bc.js";import{getCustomHeaderColumns as u}from"./tableData-c537adf1.js";import{d as f}from"./table-9286518d.js";import{ar as B,_ as H}from"./index.js";import{d as C,a6 as e,Z as o,_ as r,l as a,a8 as g,E as i,F as k,a7 as F}from"./vue-b9806415.js";import{aH as h}from"./antd-b9afe41d.js";import"./BasicForm-283acb19.js";import"./index-66132375.js";import"./useWindowSizeFn-da6b5cad.js";import"./useForm-4dc53c5d.js";import"./uuid-31b8b5a4.js";import"./onMountedOrActivated-b65981ee.js";import"./index-e6e43971.js";import"./download-9ecd0762.js";import"./base64Conver-39fc0d26.js";import"./index-183a9872.js";import"./sortable.esm-4ae27e0b.js";import"./select-93eac05e.js";const T=C({components:{BasicTable:c,FormOutlined:h,BasicHelp:B,HeaderCell:d},setup(){const[t]=_({title:"定高/头部自定义",api:f,columns:u(),canResize:!1,scroll:{y:100}});return{registerTable:t}}}),b={class:"p-4"},x={key:0};function y(t,$,O,R,v,D){const m=e("BasicHelp"),n=e("FormOutlined"),p=e("HeaderCell"),l=e("BasicTable");return o(),r("div",b,[a(l,{onRegister:t.registerTable},{headerCell:g(({column:s})=>[s.key==="name"?(o(),r("span",x,[i(" 姓名 "),a(m,{class:"ml-2",text:"headerHelpMessage方式2"})])):s.key==="address"?(o(),r(k,{key:1},[i(" 地址 "),a(n,{class:"ml-2"})],64)):(o(),F(p,{key:2,column:s},null,8,["column"]))]),_:1},8,["onRegister"])])}const Y=H(T,[["render",y]]);export{Y as default};
