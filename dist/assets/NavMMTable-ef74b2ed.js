var c=(t,n,a)=>new Promise((l,s)=>{var m=e=>{try{i(a.next(e))}catch(o){s(o)}},r=e=>{try{i(a.throw(e))}catch(o){s(o)}},i=e=>e.done?l(e.value):Promise.resolve(e.value).then(m,r);i((a=a.apply(t,n)).next())});import{B as h}from"./BasicTable-37d1e4a1.js";import"./BasicForm.vue_vue_type_style_index_0_lang-9cb27bc3.js";import"./TableImg.vue_vue_type_style_index_0_lang-d527ac40.js";import{u as E}from"./useTable-65fd89bc.js";import{a as g,u as v,_ as C}from"./index.js";import{d as k,a6 as p,Z as T,_ as w,l as f,a8 as _,E as x}from"./vue-b9806415.js";import"./BasicForm-73e193f4.js";import"./antd-0fea3d6a.js";import"./index-d3aaf0b8.js";import"./useWindowSizeFn-da6b5cad.js";import"./useForm-4dc53c5d.js";import"./uuid-31b8b5a4.js";import"./onMountedOrActivated-b65981ee.js";import"./index-85a43704.js";import"./download-9ecd0762.js";import"./base64Conver-39fc0d26.js";import"./index-01cbc176.js";import"./sortable.esm-4ae27e0b.js";const b=[{title:"Navigator Name",dataIndex:"name",edit:!0,editComponentProps:{prefix:""},width:200},{title:"Address",dataIndex:"address",edit:!0,width:200},{title:"Phone",dataIndex:"phone",edit:!0,editRule:!0,width:200},{title:"Gender",dataIndex:"gender",edit:!0,editComponent:"Select",editComponentProps:{options:[{label:"Male",value:"male"},{label:"Female",value:"female"}]},width:200}],y=k({components:{BasicTable:h},setup(){const[t,n]=E({title:"Navigator Management",columns:b,showIndexColumn:!1,bordered:!0}),{createMessage:a}=v();function l({record:e,index:o,key:u,value:d}){return!1}function s({value:e,key:o,id:u}){return a.loading({content:`saving ${o}`,key:"_save_fake_data",duration:0}),new Promise(d=>{setTimeout(()=>{e===""?(a.error({content:"save fail：cannot save empty!",key:"_save_fake_data",duration:2}),d(!1)):(a.success({content:`${u} ${o} save success!`,key:"_save_fake_data",duration:2}),d(!0))},2e3)})}function m(W){return c(this,arguments,function*({record:e,index:o,key:u,value:d}){return yield s({id:e.id,key:u,value:d})})}function r(){}function i(){return c(this,null,function*(){yield g.get("http://54.215.68.253:8080/listAllHomeless").then(e=>{n.setLoading(!0),n.setColumns(b),n.setTableData(e.data),setTimeout(()=>{n.setLoading(!1)},200)})})}return{registerTable:t,handleEditEnd:l,handleEditCancel:r,beforeEditSubmit:m,handleButton:i}}}),B={class:"p-4"};function $(t,n,a,l,s,m){const r=p("a-button"),i=p("BasicTable");return T(),w("div",B,[f(i,{onRegister:t.registerTable,onEditEnd:t.handleEditEnd,onEditCancel:t.handleEditCancel,beforeEditSubmit:t.beforeEditSubmit},{toolbar:_(()=>[f(r,{type:"primary",onClick:t.handleButton},{default:_(()=>[x(" Query ")]),_:1},8,["onClick"])]),_:1},8,["onRegister","onEditEnd","onEditCancel","beforeEditSubmit"])])}const K=C(y,[["render",$]]);export{K as default};
