import{h as r,b as d,_ as l}from"./index.js";import{b as c}from"./index-a00bc324.js";import{d as p,c as m,a6 as h,Z as f,_ as u,$ as _,a0 as C,l as g,ab as b,a1 as y}from"./vue-b9806415.js";import{ay as v}from"./antd-b9afe41d.js";import"./index-b3e3dd3b.js";import"./index-41c8fe6a.js";import"./index-7a270b83.js";import"./useContentViewHeight-bbdf3bf4.js";import"./useWindowSizeFn-da6b5cad.js";import"./lock-d483b846.js";const S=p({name:"SwitchItem",components:{Switch:v},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:Boolean}},setup(e){const{prefixCls:t}=r("setting-switch-item"),{t:n}=d(),a=m(()=>e.def?{checked:e.def}:{});function o(s){e.event&&c(e.event,s)}return{prefixCls:t,t:n,handleChange:o,getBindValue:a}}});function k(e,t,n,a,o,s){const i=h("Switch");return f(),u("div",{class:y(e.prefixCls)},[_("span",null,C(e.title),1),g(i,b(e.getBindValue,{onChange:e.handleChange,disabled:e.disabled,checkedChildren:e.t("layout.setting.on"),unCheckedChildren:e.t("layout.setting.off")}),null,16,["onChange","disabled","checkedChildren","unCheckedChildren"])],2)}const P=l(S,[["render",k],["__scopeId","data-v-0f0bf616"]]);export{P as default};
