import{D as f}from"./index-de88b24c.js";import{B as _}from"./BasicTable-6b963068.js";import"./BasicForm.vue_vue_type_style_index_0_lang-5530a29b.js";import"./TableImg.vue_vue_type_style_index_0_lang-751beea8.js";import{u}from"./useTable-65fd89bc.js";import{P as T}from"./index-905f9d8d.js";import{refundTableData as h,refundTableSchema as g,refundTimeTableSchema as b,refundTimeTableData as D,refundSchema as B,refundData as S,personSchema as v,personData as y}from"./data-3fcc68b4.js";import{d as C,a6 as o,Z as R,a7 as F,a8 as w,l as a}from"./vue-b9806415.js";import{a8 as c}from"./antd-b9afe41d.js";import{_ as E}from"./index.js";import"./BasicForm-283acb19.js";import"./index-66132375.js";import"./useWindowSizeFn-da6b5cad.js";import"./useForm-4dc53c5d.js";import"./uuid-31b8b5a4.js";import"./onMountedOrActivated-b65981ee.js";import"./index-e6e43971.js";import"./download-9ecd0762.js";import"./base64Conver-39fc0d26.js";import"./index-183a9872.js";import"./sortable.esm-4ae27e0b.js";import"./useContentViewHeight-bbdf3bf4.js";const P=C({components:{Description:f,BasicTable:_,PageWrapper:T,[c.name]:c},setup(){const[e]=u({title:"退货商品",dataSource:h,columns:g,pagination:!1,showIndexColumn:!1,scroll:{y:300},showSummary:!0,summaryFunc:m}),[i]=u({title:"退货进度",columns:b,pagination:!1,dataSource:D,showIndexColumn:!1,scroll:{y:300}});function m(l){let r=0,n=0;return l.forEach(t=>{r+=t.t5,n+=t.t6}),[{t1:"总计",t5:r,t6:n}]}return{registerRefundTable:e,registerTimeTable:i,refundSchema:B,refundData:S,personSchema:v,personData:y}}});function $(e,i,m,l,r,n){const t=o("Description"),s=o("a-divider"),p=o("BasicTable"),d=o("PageWrapper");return R(),F(d,{title:"基础详情页",contentBackground:""},{default:w(()=>[a(t,{size:"middle",title:"退款申请",bordered:!1,column:3,data:e.refundData,schema:e.refundSchema},null,8,["data","schema"]),a(s),a(t,{size:"middle",title:"用户信息",bordered:!1,column:3,data:e.personData,schema:e.personSchema},null,8,["data","schema"]),a(s),a(p,{onRegister:e.registerRefundTable},null,8,["onRegister"]),a(s),a(p,{onRegister:e.registerTimeTable},null,8,["onRegister"])]),_:1})}const ee=E(P,[["render",$],["__scopeId","data-v-75f0a99f"]]);export{ee as default};