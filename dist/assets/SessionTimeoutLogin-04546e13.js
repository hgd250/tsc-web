import{d as n,f as m,o as u,j as p,Z as c,a7 as _,a8 as d,$ as l,l as f,a1 as g,u as S,v}from"./vue-b9806415.js";import{_ as B}from"./Login.vue_vue_type_style_index_0_lang-2b86ff00.js";import{h as x,aa as C,H as I,j as T,bm as M,_ as L}from"./index.js";import"./LoginForm.vue_vue_type_script_setup_true_lang-4e4184ad.js";import"./LoginFormTitle.vue_vue_type_script_setup_true_lang-2ad6cda0.js";import"./antd-b9afe41d.js";import"./ForgetPasswordForm.vue_vue_type_script_setup_true_lang-a8e14fba.js";import"./index-e6e43971.js";import"./RegisterForm.vue_vue_type_script_setup_true_lang-28d96049.js";import"./index-183a9872.js";import"./MobileForm.vue_vue_type_script_setup_true_lang-860362f1.js";import"./QrCodeForm.vue_vue_type_script_setup_true_lang-a4195bb9.js";import"./index-feea521e.js";import"./download-9ecd0762.js";import"./base64Conver-39fc0d26.js";const U=n({__name:"SessionTimeoutLogin",setup(h){const{prefixCls:t}=x("st-login"),s=C(),r=I(),a=T(),e=m(0),i=()=>a.getProjectConfig.permissionMode===M.BACK;return u(()=>{var o;e.value=(o=s.getUserInfo)==null?void 0:o.userId}),p(()=>{(e.value&&e.value!==s.getUserInfo.userId||i()&&r.getLastBuildMenuTime===0)&&document.location.reload()}),(o,j)=>(c(),_(v,null,{default:d(()=>[l("div",{class:g(S(t))},[f(B,{sessionTimeout:""})],2)]),_:1}))}});const q=L(U,[["__scopeId","data-v-0355ca02"]]);export{q as default};