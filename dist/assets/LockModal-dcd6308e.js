var f=(e,p,s)=>new Promise((m,r)=>{var d=o=>{try{a(s.next(o))}catch(n){r(n)}},t=o=>{try{a(s.throw(o))}catch(n){r(n)}},a=o=>o.done?m(o.value):Promise.resolve(o.value).then(d,t);a((s=s.apply(e,p)).next())});import{h as $,aa as w,b as y,_ as F}from"./index.js";import{B as L,b as M}from"./index-d3aaf0b8.js";import{B as S}from"./BasicForm-73e193f4.js";import"./BasicForm.vue_vue_type_style_index_0_lang-9cb27bc3.js";import{u as b}from"./useForm-4dc53c5d.js";import{u as I}from"./lock-d483b846.js";import{h as N}from"./header-55b09394.js";import{d as R,c as _,a6 as u,Z as P,a7 as U,a8 as g,$ as i,a1 as c,a0 as k,l as h,E as V,ab as D}from"./vue-b9806415.js";import"./antd-0fea3d6a.js";import"./useWindowSizeFn-da6b5cad.js";import"./index-85a43704.js";import"./uuid-31b8b5a4.js";import"./download-9ecd0762.js";import"./base64Conver-39fc0d26.js";import"./index-01cbc176.js";const q=R({name:"LockModal",components:{BasicModal:L,BasicForm:S},setup(){const{t:e}=y(),{prefixCls:p}=$("header-lock-modal"),s=w(),m=I(),r=_(()=>{var l;return(l=s.getUserInfo)==null?void 0:l.realName}),[d,{closeModal:t}]=M(),[a,{validateFields:o,resetFields:n}]=b({showActionButtonGroup:!1,schemas:[{field:"password",label:e("layout.header.lockScreenPassword"),colProps:{span:24},component:"InputPassword",required:!0}]});function v(){return f(this,null,function*(){const C=(yield o()).password;t(),m.setLockInfo({isLock:!0,pwd:C}),yield n()})}const B=_(()=>{const{avatar:l}=s.getUserInfo;return l||N});return{t:e,prefixCls:p,getRealName:r,register:d,registerForm:a,handleLock:v,avatar:B}}});const z=["src"];function A(e,p,s,m,r,d){const t=u("BasicForm"),a=u("a-button"),o=u("BasicModal");return P(),U(o,D({footer:null,title:e.t("layout.header.lockScreen")},e.$attrs,{class:e.prefixCls,onRegister:e.register}),{default:g(()=>[i("div",{class:c(`${e.prefixCls}__entry`)},[i("div",{class:c(`${e.prefixCls}__header`)},[i("img",{src:e.avatar,class:c(`${e.prefixCls}__header-img`)},null,10,z),i("p",{class:c(`${e.prefixCls}__header-name`)},k(e.getRealName),3)],2),h(t,{onRegister:e.registerForm},null,8,["onRegister"]),i("div",{class:c(`${e.prefixCls}__footer`)},[h(a,{type:"primary",block:"",class:"mt-2",onClick:e.handleLock},{default:g(()=>[V(k(e.t("layout.header.lockScreenBtn")),1)]),_:1},8,["onClick"])],2)],2)]),_:1},16,["title","class","onRegister"])}const se=F(q,[["render",A]]);export{se as default};
