var G=Object.defineProperty,J=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var z=(n,t,o)=>t in n?G(n,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[t]=o,k=(n,t)=>{for(var o in t||(t={}))Q.call(t,o)&&z(n,o,t[o]);if(P)for(var o of P(t))Z.call(t,o)&&z(n,o,t[o]);return n},B=(n,t)=>J(n,K(t));var b=(n,t,o)=>new Promise((p,i)=>{var h=u=>{try{m(o.next(u))}catch(_){i(_)}},d=u=>{try{m(o.throw(u))}catch(_){i(_)}},m=u=>u.done?p(u.value):Promise.resolve(u.value).then(h,d);m((o=o.apply(n,t)).next())});import{p as L,t as q,aE as w,a6 as H,af as X,u as Y}from"./index.js";import{B as ee}from"./BasicForm-283acb19.js";import"./BasicForm.vue_vue_type_style_index_0_lang-5530a29b.js";import{u as te}from"./useForm-4dc53c5d.js";import{f as g,d as $,c as E,o as ae,Z as D,_ as se,$ as C,l as a,u as e,a8 as s,N as oe,ab as ne,k as re,E as S,a1 as ie,a0 as le,a7 as ce}from"./vue-b9806415.js";import{R as I,K as O,aR as pe,T as R,az as ue,aS as de,a4 as me,at as fe,aT as ge,aU as he,ai as _e}from"./antd-b9afe41d.js";import{P as ve}from"./index-905f9d8d.js";import{d as ye}from"./table-9286518d.js";import"./index-66132375.js";import"./useWindowSizeFn-da6b5cad.js";import"./index-e6e43971.js";import"./uuid-31b8b5a4.js";import"./download-9ecd0762.js";import"./base64Conver-39fc0d26.js";import"./index-183a9872.js";import"./useContentViewHeight-bbdf3bf4.js";import"./onMountedOrActivated-b65981ee.js";const y=g(12),Ce=(n=6,t=12)=>({min:n,max:t,marks:(()=>{const p={};for(let i=n;i<t+1;i++)p[i]={style:{color:"#fff"},label:i};return p})(),step:1}),be={class:"p-2"},we={class:"p-4 mb-2 bg-white"},Se={class:"p-2 bg-white"},Me={class:"flex justify-end space-x-2"},ke=C("div",{class:"w-50"},"每行显示数量",-1),xe=$({__name:"CardList",props:{params:L.object.def({}),api:L.func},emits:["getMethod","delete"],setup(n,{emit:t}){const o=n,p=I.Item,i=O.Meta,h=pe.Paragraph,d=E(()=>Ce(4)),m=g([]),u=E(()=>`h-${120-y.value*6}`),[_,{validate:F}]=te({schemas:[{field:"type",component:"Input",label:"类型"}],labelWidth:80,baseColProps:{span:6},actionColOptions:{span:24},autoSubmitOnEnter:!0,submitFunc:N});function N(){return b(this,null,function*(){const r=yield F();yield f(r)})}function V(r){v.value=r*4,f()}ae(()=>{f(),t("getMethod",f)});function f(){return b(this,arguments,function*(r={}){const{api:l,params:c}=o;if(l&&q(l)){const T=yield l(k(B(k({},c),{page:M.value,pageSize:v.value}),r));m.value=T.items,x.value=T.total}})}const M=g(1),v=g(36),x=g(0),j=g({showSizeChanger:!1,showQuickJumper:!0,pageSize:v,current:M,total:x,showTotal:r=>`总 ${r} 条`,onChange:A,onShowSizeChange:U});function A(r,l){M.value=r,v.value=l,f()}function U(r,l){v.value=l,f()}function W(r){return b(this,null,function*(){t("delete",r)})}return(r,l)=>(D(),se("div",be,[C("div",we,[a(e(ee),{onRegister:e(_)},null,8,["onRegister"])]),C("div",Se,[a(e(I),{grid:{gutter:5,xs:1,sm:2,md:4,lg:4,xl:6,xxl:e(y)},"data-source":m.value,pagination:j.value},{header:s(()=>[C("div",Me,[oe(r.$slots,"header"),a(e(R),null,{title:s(()=>[ke,a(e(ue),ne({id:"slider"},d.value,{value:e(y),"onUpdate:value":l[0]||(l[0]=c=>re(y)?y.value=c:null),onChange:V}),null,16,["value"])]),default:s(()=>[a(e(w),null,{default:s(()=>[a(e(de))]),_:1})]),_:1}),a(e(R),{onClick:f},{title:s(()=>[S("刷新")]),default:s(()=>[a(e(w),null,{default:s(()=>[a(e(me))]),_:1})]),_:1})])]),renderItem:s(({item:c})=>[a(e(p),null,{default:s(()=>[a(e(O),null,{title:s(()=>[]),cover:s(()=>[C("div",{class:ie(u.value)},[a(e(fe),{src:c.imgs[0]},null,8,["src"])],2)]),actions:s(()=>[a(e(ge),{key:"edit"}),a(e(H),{trigger:["hover"],dropMenuList:[{text:"删除",event:"1",popConfirm:{title:"是否确认删除",confirm:W.bind(null,c.id)}}],popconfirm:""},{default:s(()=>[a(e(he),{key:"ellipsis"})]),_:2},1032,["dropMenuList"])]),default:s(()=>[a(e(i),null,{title:s(()=>[a(e(h),{content:c.name,ellipsis:{tooltip:c.address}},null,8,["content","ellipsis"])]),avatar:s(()=>[a(e(_e),{src:c.avatar},null,8,["src"])]),description:s(()=>[S(le(c.time),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:3},8,["grid","data-source","pagination"])])]))}}),Te=X(xe),Je=$({__name:"index",setup(n){const{notification:t}=Y(),o={};let p=()=>{};function i(d){p=d}function h(d){t.success({message:`成功删除${d}`}),p()}return(d,m)=>(D(),ce(e(ve),{title:"卡片列表示例",content:"基础封装"},{default:s(()=>[a(e(Te),{params:o,api:e(ye),onGetMethod:i,onDelete:h},{header:s(()=>[a(e(w),{type:"primary",color:"error"},{default:s(()=>[S(" 按钮1 ")]),_:1}),a(e(w),{type:"primary",color:"success"},{default:s(()=>[S(" 按钮2 ")]),_:1})]),_:1},8,["api"])]),_:1}))}});export{Je as default};