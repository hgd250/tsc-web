import{B as c}from"./BasicTable-37d1e4a1.js";import"./BasicForm.vue_vue_type_style_index_0_lang-9cb27bc3.js";import"./TableImg.vue_vue_type_style_index_0_lang-d527ac40.js";import"./index-8c724c36.js";import{c as l,d,a as f,b as h,e as o,f as t}from"./data-e6be4175.js";import{P as _}from"./index-962a8b9c.js";import{d as C,a6 as r,Z as F,a7 as x,a8 as a,l as u,E as p}from"./vue-b9806415.js";import{_ as B}from"./index.js";import"./BasicForm-73e193f4.js";import"./antd-0fea3d6a.js";import"./index-d3aaf0b8.js";import"./useWindowSizeFn-da6b5cad.js";import"./useForm-4dc53c5d.js";import"./uuid-31b8b5a4.js";import"./onMountedOrActivated-b65981ee.js";import"./index-85a43704.js";import"./download-9ecd0762.js";import"./base64Conver-39fc0d26.js";import"./index-01cbc176.js";import"./sortable.esm-4ae27e0b.js";import"./useContentViewHeight-bbdf3bf4.js";const S=C({components:{BasicTable:c,PageWrapper:_},setup(){function e(){f({data:o,header:t,filename:"二维数组方式导出excel.xlsx"})}function n(){h({sheetList:[{data:o,header:t,sheetName:"Sheet1"},{data:o,header:t,sheetName:"Sheet2"}],filename:"二维数组方式导出excel-多Sheet示例.xlsx"})}return{aoaToExcel:e,aoaToMultipleSheet:n,columns:l,data:d}}});function T(e,n,A,b,E,k){const s=r("a-button"),i=r("BasicTable"),m=r("PageWrapper");return F(),x(m,{title:"导出示例",content:"根据数组格式的数据进行导出"},{default:a(()=>[u(i,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:a(()=>[u(s,{onClick:e.aoaToExcel},{default:a(()=>[p(" 导出 ")]),_:1},8,["onClick"]),u(s,{onClick:e.aoaToMultipleSheet,danger:""},{default:a(()=>[p(" 导出多Sheet ")]),_:1},8,["onClick"])]),_:1},8,["columns","dataSource"])]),_:1})}const K=B(S,[["render",T]]);export{K as default};
