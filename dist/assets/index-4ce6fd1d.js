import{D as c}from"./index-de88b24c.js";import{P as m}from"./index-905f9d8d.js";import{u as n}from"./useDescription-16817c27.js";import{d as p,a6 as l,Z as u,a7 as d,a8 as f,l as s}from"./vue-b9806415.js";import{_ as g}from"./index.js";import"./antd-b9afe41d.js";import"./useContentViewHeight-bbdf3bf4.js";import"./useWindowSizeFn-da6b5cad.js";import"./onMountedOrActivated-b65981ee.js";const o={username:"test",nickName:"VB",age:"123",phone:"15695909xxx",email:"190848757@qq.com",addr:"厦门市思明区",sex:"男",certy:"3504256199xxxxxxxxx",tag:"orange"},r=[{field:"username",label:"用户名"},{field:"nickName",label:"昵称",render:(e,a)=>`${a.username}-${e}`},{field:"phone",label:"联系电话"},{field:"email",label:"邮箱"},{field:"addr",label:"地址"}],h=p({components:{Description:c,PageWrapper:m},setup(){const[e]=n({title:"useDescription",data:o,schema:r}),[a]=n({title:"无边框",bordered:!1,data:o,schema:r});return{mockData:o,schema:r,register:e,register1:a}}});function x(e,a,D,_,k,B){const t=l("Description"),i=l("PageWrapper");return u(),d(i,{title:"详情组件示例"},{default:f(()=>[s(t,{title:"基础示例",collapseOptions:{canExpand:!0,helpMessage:"help me"},column:3,data:e.mockData,schema:e.schema},null,8,["data","schema"]),s(t,{class:"mt-4",title:"垂直示例",layout:"vertical",collapseOptions:{canExpand:!0,helpMessage:"help me"},column:2,data:e.mockData,schema:e.schema},null,8,["data","schema"]),s(t,{onRegister:e.register,class:"mt-4"},null,8,["onRegister"]),s(t,{onRegister:e.register1,class:"mt-4"},null,8,["onRegister"])]),_:1})}const W=g(h,[["render",x]]);export{W as default};
