import{h as r,_ as o}from"./index.js";import{b as p}from"./index-dff86768.js";import{d as m,a6 as i,Z as u,_ as l,$ as c,a0 as _,l as d,ab as f,a1 as b}from"./vue-b9806415.js";import{ar as g}from"./antd-0fea3d6a.js";import"./index-849af946.js";import"./index-e6d16849.js";import"./index-559e9b4e.js";import"./useContentViewHeight-bbdf3bf4.js";import"./useWindowSizeFn-da6b5cad.js";import"./lock-d483b846.js";const C=m({name:"InputNumberItem",components:{InputNumber:g},props:{event:{type:Number},title:{type:String}},setup(e){const{prefixCls:t}=r("setting-input-number-item");function n(s){e.event&&p(e.event,s)}return{prefixCls:t,handleChange:n}}});function I(e,t,n,s,N,h){const a=i("InputNumber");return u(),l("div",{class:b(e.prefixCls)},[c("span",null,_(e.title),1),d(a,f(e.$attrs,{size:"small",class:`${e.prefixCls}-input-number`,onChange:e.handleChange}),null,16,["class","onChange"])],2)}const E=o(C,[["render",I],["__scopeId","data-v-7ccf252c"]]);export{E as default};