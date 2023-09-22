var v=Object.defineProperty,B=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var b=(t,o,e)=>o in t?v(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,u=(t,o)=>{for(var e in o||(o={}))S.call(o,e)&&b(t,e,o[e]);if(g)for(var e of g(o))A.call(o,e)&&b(t,e,o[e]);return t},h=(t,o)=>B(t,k(o));var f=(t,o,e)=>new Promise((n,s)=>{var d=a=>{try{r(e.next(a))}catch(c){s(c)}},i=a=>{try{r(e.throw(a))}catch(c){s(c)}},r=a=>a.done?n(a.value):Promise.resolve(a.value).then(d,i);r((e=e.apply(t,o)).next())});import{B as y,b as x}from"./index-7caba1aa.js";import{B as q}from"./BasicForm-152e2559.js";import"./BasicForm.vue_vue_type_style_index_0_lang-8c66020c.js";import{u as C}from"./useForm-4dc53c5d.js";import{i as T,g as $,a as L}from"./system-ff6b78c1.js";import{d as O,f as w,u as p,c as R,a6 as I,Z as N,a7 as U,a8 as V,l as j,ab as D}from"./vue-b9806415.js";import{_ as z}from"./index.js";const oe=[{title:"用户名",dataIndex:"account",width:120},{title:"昵称",dataIndex:"nickname",width:120},{title:"邮箱",dataIndex:"email",width:120},{title:"创建时间",dataIndex:"createTime",width:180},{title:"角色",dataIndex:"role",width:200},{title:"备注",dataIndex:"remark"}],ae=[{field:"account",label:"用户名",component:"Input",colProps:{span:8}},{field:"nickname",label:"昵称",component:"Input",colProps:{span:8}}],E=[{field:"account",label:"用户名",component:"Input",helpMessage:["本字段演示异步验证","不能输入带有admin的用户名"],rules:[{required:!0,message:"请输入用户名"},{validator(t,o){return new Promise((e,n)=>{T(o).then(()=>e()).catch(s=>{n(s.message||"验证失败")})})}}]},{field:"pwd",label:"密码",component:"InputPassword",required:!0,ifShow:!1},{label:"角色",field:"role",component:"ApiSelect",componentProps:{api:$,labelField:"roleName",valueField:"roleValue"},required:!0},{field:"dept",label:"所属部门",component:"TreeSelect",componentProps:{fieldNames:{label:"deptName",key:"id",value:"id"},getPopupContainer:()=>document.body},required:!0},{field:"nickname",label:"昵称",component:"Input",required:!0},{label:"邮箱",field:"email",component:"Input",required:!0},{label:"备注",field:"remark",component:"InputTextArea"}],G=O({name:"AccountModal",components:{BasicModal:y,BasicForm:q},emits:["success","register"],setup(t,{emit:o}){const e=w(!0),n=w(""),[s,{setFieldsValue:d,updateSchema:i,resetFields:r,validate:a}]=C({labelWidth:100,baseColProps:{span:24},schemas:E,showActionButtonGroup:!1,actionColOptions:{span:23}}),[c,{setModalProps:m,closeModal:_}]=x(l=>f(this,null,function*(){r(),m({confirmLoading:!1}),e.value=!!(l!=null&&l.isUpdate),p(e)&&(n.value=l.record.id,d(u({},l.record)));const P=yield L();i([{field:"pwd",show:!p(e)},{field:"dept",componentProps:{treeData:P}}])})),M=R(()=>p(e)?"编辑账号":"新增账号");function F(){return f(this,null,function*(){try{const l=yield a();m({confirmLoading:!0}),_(),o("success",{isUpdate:p(e),values:h(u({},l),{id:n.value})})}finally{m({confirmLoading:!1})}})}return{registerModal:c,registerForm:s,getTitle:M,handleSubmit:F}}});function W(t,o,e,n,s,d){const i=I("BasicForm"),r=I("BasicModal");return N(),U(r,D(t.$attrs,{onRegister:t.registerModal,title:t.getTitle,onOk:t.handleSubmit}),{default:V(()=>[j(i,{onRegister:t.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}const Z=z(G,[["render",W]]),ne=Object.freeze(Object.defineProperty({__proto__:null,default:Z},Symbol.toStringTag,{value:"Module"}));export{Z as A,ne as a,oe as c,ae as s};
