var D=Object.defineProperty;var h=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var g=(t,a,e)=>a in t?D(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,w=(t,a)=>{for(var e in a||(a={}))R.call(a,e)&&g(t,e,a[e]);if(h)for(var e of h(a))B.call(a,e)&&g(t,e,a[e]);return t};var p=(t,a,e)=>new Promise((o,u)=>{var c=s=>{try{i(e.next(s))}catch(l){u(l)}},m=s=>{try{i(e.throw(s))}catch(l){u(l)}},i=s=>s.done?o(s.value):Promise.resolve(s.value).then(c,m);i((e=e.apply(t,a)).next())});import{B as C}from"./BasicForm-152e2559.js";import"./BasicForm.vue_vue_type_style_index_0_lang-8c66020c.js";import{u as F}from"./useForm-4dc53c5d.js";import{s as N,c as P}from"./system-ff6b78c1.js";import{u as y}from"./index.js";import{m as V,d as L,f as b,u as n,c as U,Z as M,a7 as T,a8 as v,l as _,ab as q}from"./vue-b9806415.js";import{at as A}from"./antd-57936705.js";import{a as G,B as $}from"./index-11efed09.js";import{_ as O}from"./index-903e78de.js";const te=[{title:"角色名称",dataIndex:"roleName",width:200},{title:"角色值",dataIndex:"roleValue",width:180},{title:"排序",dataIndex:"orderNo",width:50},{title:"状态",dataIndex:"status",width:120,customRender:({record:t})=>(Reflect.has(t,"pendingStatus")||(t.pendingStatus=!1),V(A,{checked:t.status==="1",checkedChildren:"停用",unCheckedChildren:"启用",loading:t.pendingStatus,onChange(a){t.pendingStatus=!0;const e=a?"1":"0",{createMessage:o}=y();N(t.id,e).then(()=>{t.status=e,o.success("已成功修改角色状态")}).catch(()=>{o.error("修改角色状态失败")}).finally(()=>{t.pendingStatus=!1})}}))},{title:"创建时间",dataIndex:"createTime",width:180},{title:"备注",dataIndex:"remark"}],ae=[{field:"roleNme",label:"角色名称",component:"Input",colProps:{span:8}},{field:"status",label:"状态",component:"Select",componentProps:{options:[{label:"启用",value:"1"},{label:"停用",value:"0"}]},colProps:{span:8}}],W=[{field:"roleName",label:"角色名称",required:!0,component:"Input"},{field:"roleValue",label:"角色值",required:!0,component:"Input"},{field:"status",label:"状态",component:"RadioButtonGroup",defaultValue:"0",componentProps:{options:[{label:"启用",value:"1"},{label:"停用",value:"0"}]}},{label:"备注",field:"remark",component:"InputTextArea"},{label:" ",field:"menu",slot:"menu",component:"Input"}],se=L({__name:"RoleDrawer",emits:["success","register"],setup(t,{emit:a}){const e=b(!0),o=b([]),[u,{resetFields:c,setFieldsValue:m,validate:i}]=F({labelWidth:90,baseColProps:{span:24},schemas:W,showActionButtonGroup:!1}),[s,{setDrawerProps:l,closeDrawer:I}]=G(r=>p(this,null,function*(){c(),l({confirmLoading:!1}),n(o).length===0&&(o.value=yield P()),e.value=!!(r!=null&&r.isUpdate),n(e)&&m(w({},r.record))})),S=U(()=>n(e)?"编辑角色":"新增角色");function k(){return p(this,null,function*(){try{const r=yield i();l({confirmLoading:!0}),I(),a("success")}finally{l({confirmLoading:!1})}})}return(r,Z)=>(M(),T(n($),q(r.$attrs,{onRegister:n(s),showFooter:"",title:S.value,width:"500px",onOk:k}),{default:v(()=>[_(n(C),{onRegister:n(u)},{menu:v(({model:d,field:f})=>[_(n(O),{value:d[f],"onUpdate:value":x=>d[f]=x,treeData:o.value,fieldNames:{title:"menuName",key:"id"},checkable:"",toolbar:"",title:"菜单分配"},null,8,["value","onUpdate:value","treeData"])]),_:1},8,["onRegister"])]),_:1},16,["onRegister","title"]))}});export{se as _,te as c,ae as s};
