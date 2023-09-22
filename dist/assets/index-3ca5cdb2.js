var O=Object.defineProperty,I=Object.defineProperties;var W=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var b=(u,e,o)=>e in u?O(u,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):u[e]=o,A=(u,e)=>{for(var o in e||(e={}))N.call(e,o)&&b(u,o,e[o]);if(_)for(var o of _(e))V.call(e,o)&&b(u,o,e[o]);return u},P=(u,e)=>I(u,W(e));var h=(u,e,o)=>new Promise((s,p)=>{var F=r=>{try{t(o.next(r))}catch(d){p(d)}},n=r=>{try{t(o.throw(r))}catch(d){p(d)}},t=r=>r.done?s(r.value):Promise.resolve(r.value).then(F,n);t((o=o.apply(u,e)).next())});import{u as g}from"./index-7caba1aa.js";import T from"./Modal1-c906b054.js";import R from"./Modal2-143af3dd.js";import $ from"./Modal3-978935b9.js";import S from"./Modal4-02cc2c24.js";import{P as q}from"./index-c8f3d3c2.js";import{d as v,f as B,Z as D,a7 as w,a8 as l,$ as K,l as a,u as k,r as z,I as L,m as U,s as G,n as H,a6 as m,E as i,ag as Z}from"./vue-b9806415.js";import{B as j}from"./BasicForm-152e2559.js";import"./BasicForm.vue_vue_type_style_index_0_lang-8c66020c.js";import{u as J}from"./useForm-4dc53c5d.js";import{M as Q,a7 as X,aq as Y,e as x}from"./antd-57936705.js";import{_ as ee}from"./index.js";import"./useWindowSizeFn-da6b5cad.js";import"./index-456abdd7.js";import"./uuid-31b8b5a4.js";import"./download-9ecd0762.js";import"./base64Conver-39fc0d26.js";import"./index-acb772bd.js";import"./useContentViewHeight-bbdf3bf4.js";import"./onMountedOrActivated-b65981ee.js";const ue={InputTextArea:{colProps:{span:23},componentProps:{placeholder:"请输入内容",autoSize:{minRows:2,maxRows:6},maxlength:255,showCount:!0}},InputNumber:{colProps:{span:20,offset:2},componentProps:{placeholder:"请输入数字",min:0}},Input:{colProps:{span:20,offset:2},componentProps:{placeholder:"请输入内容",min:0}}};function oe({label:u="备注信息",required:e=!0,inputType:o="InputTextArea",defaultValue:s=""}){return[A({field:"txt",component:o,label:u,defaultValue:s,required:!!e},ue[o])]}const ae={class:"pt-5 pr-3px"},te=v({__name:"dialog",props:{title:{},addFormSchemas:{},onOK:{},width:{},labelWidth:{},layout:{}},setup(u){const e=u,o=B(!0),[s,{validate:p}]=J({schemas:e.addFormSchemas,showActionButtonGroup:!1,labelWidth:e.labelWidth||80,layout:e.layout||"horizontal"});function F(){return h(this,null,function*(){const n=yield p();e.onOK&&(yield e.onOK(n.txt)),o.value=!1})}return(n,t)=>(D(),w(k(Q),{open:o.value,"onUpdate:open":t[0]||(t[0]=r=>o.value=r),title:n.title,onOk:F,destroyOnClose:!0,width:n.width||"500px",okText:"确定",cancelText:"取消"},{default:l(()=>[K("div",ae,[a(k(j),{onRegister:k(s)},null,8,["onRegister"])])]),_:1},8,["open","title","width"]))}});function ne(u){let e=null;const o=z(P(A({},u),{addFormSchemas:oe({label:u.label,required:u.required,inputType:u.inputType,defaultValue:u.defaultValue})})),s=v({render(){return U(te,A({},o))}});e=a(s),L(e,document.createElement("div"));function p(){e!=null&&e.el&&e.el.parentNode&&e.el.parentNode.removeChild(e.el)}return{vm:e,close:p,get $el(){return e==null?void 0:e.el}}}const re=v({components:{Alert:X,Modal1:T,Modal2:R,Modal3:$,Modal4:S,PageWrapper:q,ASpace:Y},setup(){const u=G(null),[e,{openModal:o}]=g(),[s,{openModal:p}]=g(),[F,{openModal:n}]=g(),[t,{openModal:r}]=g(),d=B(!1),f=B(null);function C(){r(!0,{data:"content",info:"Info"})}function E(){o(!0)}function M(y){switch(y){case 1:u.value=T;break;case 2:u.value=R;break;case 3:u.value=$;break;default:u.value=S;break}H(()=>{f.value={data:Math.random(),info:"Info222"},d.value=!0})}function c(){ne({title:"请输入邮箱",required:!0,label:"邮箱",defaultValue:"默认邮箱",onOK:y=>h(this,null,function*(){x.success("填写的邮箱地址为"+y)}),inputType:"Input"})}return{register1:e,openModal1:o,register2:s,openModal2:p,register3:F,openModal3:n,register4:t,openModal4:r,modalOpen:d,userData:f,openTargetModal:M,send:C,currentModal:u,openModalLoading:E,handleCreatePrompt:c}}});function le(u,e,o,s,p,F){const n=m("Alert"),t=m("a-button"),r=m("a-space"),d=m("Modal1"),f=m("Modal2"),C=m("Modal3"),E=m("Modal4"),M=m("PageWrapper");return D(),w(M,{title:"modal组件使用示例"},{default:l(()=>[a(n,{message:`使用 useModal 进行弹窗操作，默认可以拖动，可以通过 draggable
    参数进行控制是否可以拖动/全屏，并演示了在Modal内动态加载内容并自动调整高度`,"show-icon":""}),a(t,{type:"primary",class:"my-4",onClick:u.openModalLoading},{default:l(()=>[i(" 打开弹窗,加载动态数据并自动调整高度(默认可以拖动/全屏) ")]),_:1},8,["onClick"]),a(n,{message:"内外同时同时显示隐藏","show-icon":""}),a(t,{type:"primary",class:"my-4",onClick:u.openModal2},{default:l(()=>[i(" 打开弹窗 ")]),_:1},8,["onClick"]),a(n,{message:"自适应高度","show-icon":""}),a(t,{type:"primary",class:"my-4",onClick:u.openModal3},{default:l(()=>[i(" 打开弹窗 ")]),_:1},8,["onClick"]),a(n,{message:"内外数据交互","show-icon":""}),a(t,{type:"primary",class:"my-4",onClick:u.send},{default:l(()=>[i(" 打开弹窗并传递数据 ")]),_:1},8,["onClick"]),a(n,{message:"使用动态组件的方式在页面内使用多个弹窗","show-icon":""}),a(r,null,{default:l(()=>[a(t,{type:"primary",class:"my-4",onClick:e[0]||(e[0]=c=>u.openTargetModal(1))},{default:l(()=>[i(" 打开弹窗1 ")]),_:1}),a(t,{type:"primary",class:"my-4",onClick:e[1]||(e[1]=c=>u.openTargetModal(2))},{default:l(()=>[i(" 打开弹窗2 ")]),_:1}),a(t,{type:"primary",class:"my-4",onClick:e[2]||(e[2]=c=>u.openTargetModal(3))},{default:l(()=>[i(" 打开弹窗3 ")]),_:1}),a(t,{type:"primary",class:"my-4",onClick:e[3]||(e[3]=c=>u.openTargetModal(4))},{default:l(()=>[i(" 打开弹窗4 ")]),_:1})]),_:1}),a(n,{message:"使用函数方式创建Prompt，适合较为简单的表单内容，如果需要弹出较为复杂的内容，请使用 Modal.","show-icon":""}),a(t,{type:"primary",class:"my-4",onClick:u.handleCreatePrompt},{default:l(()=>[i(" Prompt ")]),_:1},8,["onClick"]),(D(),w(Z(u.currentModal),{open:u.modalOpen,"onUpdate:open":e[4]||(e[4]=c=>u.modalOpen=c),userData:u.userData},null,40,["open","userData"])),a(d,{onRegister:u.register1,minHeight:100},null,8,["onRegister"]),a(f,{onRegister:u.register2},null,8,["onRegister"]),a(C,{onRegister:u.register3},null,8,["onRegister"]),a(E,{onRegister:u.register4},null,8,["onRegister"])]),_:1})}const be=ee(re,[["render",le]]);export{be as default};
