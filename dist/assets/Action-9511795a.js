import{S as f,_ as E}from"./index.js";import{P as A}from"./index-962a8b9c.js";import{d as C,f as v,u as F,a6 as c,Z as m,a7 as D,a8 as s,$ as a,l as r,E as u,_ as $,F as k,a9 as B,a0 as g}from"./vue-b9806415.js";import"./antd-0fea3d6a.js";import"./useContentViewHeight-bbdf3bf4.js";import"./useWindowSizeFn-da6b5cad.js";import"./onMountedOrActivated-b65981ee.js";const y=C({components:{ScrollContainer:f,PageWrapper:A},setup(){const e=v(null),o=()=>{const l=F(e);if(!l)throw new Error("scroll is Null");return l};function p(l){o().scrollTo(l)}function i(){o().scrollBottom()}return{scrollTo:p,scrollRef:e,scrollBottom:i}}});const S={class:"my-4"},T={class:"scroll-wrap"},b={class:"p-3"};function w(e,o,p,i,l,x){const n=c("a-button"),_=c("ScrollContainer"),d=c("PageWrapper");return m(),D(d,{title:"滚动组件函数示例",content:"基于el-scrollbar"},{default:s(()=>[a("div",S,[r(n,{onClick:o[0]||(o[0]=t=>e.scrollTo(100)),class:"mr-2"},{default:s(()=>[u(" 滚动到100px位置 ")]),_:1}),r(n,{onClick:o[1]||(o[1]=t=>e.scrollTo(800)),class:"mr-2"},{default:s(()=>[u(" 滚动到800px位置 ")]),_:1}),r(n,{onClick:o[2]||(o[2]=t=>e.scrollTo(0)),class:"mr-2"},{default:s(()=>[u(" 滚动到顶部 ")]),_:1}),r(n,{onClick:o[3]||(o[3]=t=>e.scrollBottom()),class:"mr-2"},{default:s(()=>[u(" 滚动到底部 ")]),_:1})]),a("div",T,[r(_,{class:"mt-4",ref:"scrollRef"},{default:s(()=>[a("ul",b,[(m(),$(k,null,B(100,t=>a("li",{key:t,class:"p-2",style:{border:"1px solid #eee"}},g(t),1)),64))])]),_:1},512)])]),_:1})}const Z=E(y,[["render",w],["__scopeId","data-v-63ee5099"]]);export{Z as default};
