var P=Object.defineProperty;var m=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var u=(t,o,e)=>o in t?P(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,f=(t,o)=>{for(var e in o||(o={}))v.call(o,e)&&u(t,e,o[e]);if(m)for(var e of m(o))I.call(o,e)&&u(t,e,o[e]);return t};var d=(t,o,e)=>new Promise((l,s)=>{var p=a=>{try{r(e.next(a))}catch(n){s(n)}},i=a=>{try{r(e.throw(a))}catch(n){s(n)}},r=a=>a.done?l(a.value):Promise.resolve(a.value).then(p,i);r((e=e.apply(t,o)).next())});import{B as F,b as N}from"./index-7caba1aa.js";import{B as S}from"./BasicForm-152e2559.js";import"./BasicForm.vue_vue_type_style_index_0_lang-8c66020c.js";import{u as w}from"./useForm-4dc53c5d.js";import{m as y,d as D,f as k,u as b,c as T,a6 as g,Z as x,a7 as R,a8 as $,l as C,ab as q}from"./vue-b9806415.js";import{a2 as L}from"./antd-57936705.js";import{a as O}from"./system-ff6b78c1.js";import{_ as V}from"./index.js";const Y=[{title:"部门名称",dataIndex:"deptName",width:160,align:"left"},{title:"排序",dataIndex:"orderNo",width:50},{title:"状态",dataIndex:"status",width:80,customRender:({record:t})=>{const e=~~t.status===0,l=e?"green":"red",s=e?"启用":"停用";return y(L,{color:l},()=>s)}},{title:"创建时间",dataIndex:"createTime",width:180},{title:"备注",dataIndex:"remark"}],ee=[{field:"deptName",label:"部门名称",component:"Input",colProps:{span:8}},{field:"status",label:"状态",component:"Select",componentProps:{options:[{label:"启用",value:"0"},{label:"停用",value:"1"}]},colProps:{span:8}}],j=[{field:"deptName",label:"部门名称",component:"Input",required:!0},{field:"parentDept",label:"上级部门",component:"TreeSelect",componentProps:{fieldNames:{label:"deptName",key:"id",value:"id"},getPopupContainer:()=>document.body},required:!0},{field:"orderNo",label:"排序",component:"InputNumber",required:!0},{field:"status",label:"状态",component:"RadioButtonGroup",defaultValue:"0",componentProps:{options:[{label:"启用",value:"0"},{label:"停用",value:"1"}]},required:!0},{label:"备注",field:"remark",component:"InputTextArea"}],A=D({name:"DeptModal",components:{BasicModal:F,BasicForm:S},emits:["success","register"],setup(t,{emit:o}){const e=k(!0),[l,{resetFields:s,setFieldsValue:p,updateSchema:i,validate:r}]=w({labelWidth:100,baseColProps:{span:24},schemas:j,showActionButtonGroup:!1}),[a,{setModalProps:n,closeModal:h}]=N(c=>d(this,null,function*(){s(),n({confirmLoading:!1}),e.value=!!(c!=null&&c.isUpdate),b(e)&&p(f({},c.record));const M=yield O();i({field:"parentDept",componentProps:{treeData:M}})})),_=T(()=>b(e)?"编辑部门":"新增部门");function B(){return d(this,null,function*(){try{const c=yield r();n({confirmLoading:!0}),h(),o("success")}finally{n({confirmLoading:!1})}})}return{registerModal:a,registerForm:l,getTitle:_,handleSubmit:B}}});function G(t,o,e,l,s,p){const i=g("BasicForm"),r=g("BasicModal");return x(),R(r,q(t.$attrs,{onRegister:t.registerModal,title:t.getTitle,onOk:t.handleSubmit}),{default:$(()=>[C(i,{onRegister:t.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}const U=V(A,[["render",G]]),te=Object.freeze(Object.defineProperty({__proto__:null,default:U},Symbol.toStringTag,{value:"Module"}));export{U as D,te as a,Y as c,ee as s};
