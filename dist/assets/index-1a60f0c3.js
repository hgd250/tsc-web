import{I as $,_ as b}from"./index.js";import{cardList as k}from"./data-966df949.js";import{P as w}from"./index-905f9d8d.js";import{d as y,a6 as a,Z as i,a7 as u,a8 as o,$ as s,a1 as c,l,_ as d,F as A,a9 as P,aa as m,a0 as r,E as f,a2 as S,a3 as V}from"./vue-b9806415.js";import{Q as L,R as _,U as h,V as v}from"./antd-b9afe41d.js";import"./useContentViewHeight-bbdf3bf4.js";import"./useWindowSizeFn-da6b5cad.js";import"./onMountedOrActivated-b65981ee.js";const N=y({components:{Icon:$,Progress:L,PageWrapper:w,[_.name]:_,[_.Item.name]:_.Item,AListItemMeta:_.Item.Meta,[h.name]:h,[v.name]:v},setup(){return{prefixCls:"list-basic",list:k,pagination:{show:!0,pageSize:3}}}});const n=t=>(S("data-v-012bbcd9"),t=t(),V(),t),W=n(()=>s("div",null,"我的待办",-1)),M=n(()=>s("p",null,"8个任务",-1)),z=n(()=>s("div",null,"本周任务平均处理时间",-1)),R=n(()=>s("p",null,"32分钟",-1)),D=n(()=>s("div",null,"本周完成任务数",-1)),O=n(()=>s("p",null,"24个任务",-1)),Q={key:0,class:"extra"},T={class:"description"},U={class:"info"},Z=n(()=>s("span",null,"Owner",-1)),j=n(()=>s("span",null,"开始时间",-1)),q={class:"progress"};function G(t,H,J,K,X,Y){const p=a("a-col"),C=a("a-row"),g=a("Icon"),F=a("Progress"),I=a("a-list-item-meta"),x=a("a-list-item"),B=a("a-list"),E=a("PageWrapper");return i(),u(E,{class:c(t.prefixCls),title:"My Work"},{default:o(()=>[s("div",{class:c(`${t.prefixCls}__top`)},[l(C,{gutter:12},{default:o(()=>[l(p,{span:8,class:c(`${t.prefixCls}__top-col`)},{default:o(()=>[W,M]),_:1},8,["class"]),l(p,{span:8,class:c(`${t.prefixCls}__top-col`)},{default:o(()=>[z,R]),_:1},8,["class"]),l(p,{span:8,class:c(`${t.prefixCls}__top-col`)},{default:o(()=>[D,O]),_:1},8,["class"])]),_:1})],2),s("div",{class:c(`${t.prefixCls}__content`)},[l(B,{pagination:t.pagination},{default:o(()=>[(i(!0),d(A,null,P(t.list,e=>(i(),u(x,{key:e.id,class:"list"},{default:o(()=>[l(I,null,{avatar:o(()=>[e.icon?(i(),u(g,{key:0,class:"icon",icon:e.icon,color:e.color},null,8,["icon","color"])):m("",!0)]),title:o(()=>[s("span",null,r(e.title),1),e.extra?(i(),d("div",Q,r(e.extra),1)):m("",!0)]),description:o(()=>[s("div",T,r(e.description),1),s("div",U,[s("div",null,[Z,f(r(e.author),1)]),s("div",null,[j,f(r(e.datetime),1)])]),s("div",q,[l(F,{percent:e.percent,status:"active"},null,8,["percent"])])]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["pagination"])],2)]),_:1},8,["class"])}const is=b(N,[["render",G],["__scopeId","data-v-012bbcd9"]]);export{is as default};
