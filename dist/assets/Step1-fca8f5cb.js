var v=(t,r,e)=>new Promise((l,n)=>{var E=u=>{try{c(e.next(u))}catch(p){n(p)}},m=u=>{try{c(e.throw(u))}catch(p){n(p)}},c=u=>u.done?l(u.value):Promise.resolve(u.value).then(E,m);c((e=e.apply(t,r)).next())});import{B as b}from"./BasicForm-73e193f4.js";import"./BasicForm.vue_vue_type_style_index_0_lang-9cb27bc3.js";import{u as x}from"./useForm-4dc53c5d.js";import{step1Schemas as g}from"./data-d7308054.js";import{a7 as B,w as F,a8 as h}from"./antd-0fea3d6a.js";import{d as A,a6 as a,Z as w,_ as I,$ as s,l as o,a8 as i,E as D,a2 as $,a3 as O}from"./vue-b9806415.js";import{_ as U}from"./index.js";import"./index-d3aaf0b8.js";import"./useWindowSizeFn-da6b5cad.js";import"./index-85a43704.js";import"./uuid-31b8b5a4.js";import"./download-9ecd0762.js";import"./base64Conver-39fc0d26.js";import"./index-01cbc176.js";const N=A({components:{BasicForm:b,[B.name]:B,ASelectOption:B.Option,[F.name]:F,[F.Group.name]:F.Group,[h.name]:h},emits:["next"],setup(t,{emit:r}){const[e,{validate:l}]=x({labelWidth:100,schemas:g,actionColOptions:{span:14},showResetButton:!1,submitButtonOptions:{text:"下一步"},submitFunc:n});function n(){return v(this,null,function*(){try{const E=yield l();r("next",E)}catch(E){}})}return{register:e}}});const _=t=>($("data-v-fba0dca7"),t=t(),O(),t),R={class:"step1"},V={class:"step1-form"},k=_(()=>s("h3",null,"说明",-1)),G=_(()=>s("h4",null,"转账到支付宝账户",-1)),z=_(()=>s("p",null," 如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。 ",-1)),T=_(()=>s("h4",null,"转账到银行卡",-1)),W=_(()=>s("p",null," 如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。 ",-1));function Z(t,r,e,l,n,E){const m=a("a-select-option"),c=a("a-select"),u=a("a-input"),p=a("a-input-group"),y=a("BasicForm"),S=a("a-divider");return w(),I("div",R,[s("div",V,[o(y,{onRegister:t.register},{fac:i(({model:C,field:f})=>[o(p,{compact:""},{default:i(()=>[o(c,{value:C.pay,"onUpdate:value":d=>C.pay=d,class:"pay-select"},{default:i(()=>[o(m,{value:"zfb"},{default:i(()=>[D(" 支付宝 ")]),_:1}),o(m,{value:"yl"},{default:i(()=>[D(" 银联 ")]),_:1})]),_:2},1032,["value","onUpdate:value"]),o(u,{class:"pay-input",value:C[f],"onUpdate:value":d=>C[f]=d},null,8,["value","onUpdate:value"])]),_:2},1024)]),_:1},8,["onRegister"])]),o(S),k,G,z,T,W])}const au=U(N,[["render",Z],["__scopeId","data-v-fba0dca7"]]);export{au as default};
