import{A as d,l as k,by as y,h as B,W as S,_ as L}from"./index.js";import{c as f,u as D}from"./index-1d586cc4.js";import P from"./SessionTimeoutLogin-25116cf7.js";import{b9 as w}from"./antd-57936705.js";import{d as C,c as T,u as o,a6 as n,Z as r,_ as E,l as F,a7 as m,aa as p,a1 as I,F as h}from"./vue-b9806415.js";import"./index-56534f0a.js";import"./useContentViewHeight-bbdf3bf4.js";import"./useWindowSizeFn-da6b5cad.js";import"./lock-d483b846.js";import"./Login.vue_vue_type_style_index_0_lang-ff05c0f0.js";import"./LoginForm.vue_vue_type_script_setup_true_lang-f4a11a3b.js";import"./LoginFormTitle.vue_vue_type_script_setup_true_lang-2ad6cda0.js";import"./ForgetPasswordForm.vue_vue_type_script_setup_true_lang-0f98f7a1.js";import"./index-456abdd7.js";import"./RegisterForm.vue_vue_type_script_setup_true_lang-2525d94b.js";import"./index-acb772bd.js";import"./MobileForm.vue_vue_type_script_setup_true_lang-06c52f00.js";import"./QrCodeForm.vue_vue_type_script_setup_true_lang-c0b2186d.js";import"./index-5e9bade4.js";import"./download-9ecd0762.js";import"./base64Conver-39fc0d26.js";const v=C({name:"LayoutFeatures",components:{BackTop:w,LayoutLockPage:f(()=>d(()=>import("./index-474a9762.js"),["assets/index-474a9762.js","assets/vue-b9806415.js","assets/LockPage-2eb3a4e7.js","assets/index.js","assets/antd-57936705.js","assets/index-bbdfb746.css","assets/lock-d483b846.js","assets/header-55b09394.js","assets/LockPage-b0b08e00.css"])),SettingDrawer:f(()=>d(()=>import("./index-3dd4523b.js").then(t=>t.i),["assets/index-3dd4523b.js","assets/index-11efed09.js","assets/index.js","assets/vue-b9806415.js","assets/antd-57936705.js","assets/index-bbdfb746.css","assets/index-6c94692d.css","assets/index-1d586cc4.js","assets/index-56534f0a.js","assets/useContentViewHeight-bbdf3bf4.js","assets/useWindowSizeFn-da6b5cad.js","assets/index-054645fa.css","assets/lock-d483b846.js","assets/index-9e2c9aca.css"])),SessionTimeoutLogin:P},setup(){const{getUseOpenBackTop:t,getShowSettingButton:u,getSettingButtonPosition:c,getFullContent:g}=k(),_=y(),{prefixCls:l}=B("setting-drawer-feature"),{getShowHeader:s}=D(),i=T(()=>_.getSessionTimeout),a=T(()=>{if(!o(u))return!1;const e=o(c);return e===S.AUTO?!o(s)||o(g):e===S.FIXED});return{getTarget:()=>document.body,getUseOpenBackTop:t,getIsFixedSettingDrawer:a,prefixCls:l,getIsSessionTimeout:i}}});function O(t,u,c,g,_,l){const s=n("LayoutLockPage"),i=n("BackTop"),a=n("SettingDrawer"),e=n("SessionTimeoutLogin");return r(),E(h,null,[F(s),t.getUseOpenBackTop?(r(),m(i,{key:0,target:t.getTarget},null,8,["target"])):p("",!0),t.getIsFixedSettingDrawer?(r(),m(a,{key:1,class:I(t.prefixCls)},null,8,["class"])):p("",!0),t.getIsSessionTimeout?(r(),m(e,{key:2})):p("",!0)],64)}const tt=L(v,[["render",O]]);export{tt as default};
