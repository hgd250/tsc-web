import{projectList as L}from"./data-199c263c.js";import{R as l,K as $,U as _,V as i}from"./antd-b9afe41d.js";import{d as v,a6 as t,Z as n,a7 as p,a8 as s,l as r,_ as I,F as h,a9 as j,a1 as a,$ as c,a0 as m}from"./vue-b9806415.js";import{_ as k}from"./index.js";const w="/assets/demo-f132a062.png",x=v({components:{List:l,ListItem:l.Item,Card:$,[_.name]:_,[i.name]:i},setup(){return{prefixCls:"account-center-project",list:L,demoImg:w}}});const y=["src"];function B(e,V,F,N,P,R){const d=t("Card"),f=t("ListItem"),u=t("a-col"),C=t("a-row"),g=t("List");return n(),p(g,{class:a(e.prefixCls)},{default:s(()=>[r(C,{gutter:16},{default:s(()=>[(n(!0),I(h,null,j(e.list,o=>(n(),p(u,{key:o.title,span:6},{default:s(()=>[r(f,null,{default:s(()=>[r(d,{hoverable:!0,class:a(`${e.prefixCls}__card`)},{default:s(()=>[c("img",{src:e.demoImg},null,8,y),c("div",{class:a(`${e.prefixCls}__card-title`)},m(o.title),3),c("div",{class:a(`${e.prefixCls}__card-content`)},m(o.content),3)]),_:2},1032,["class"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,["class"])}const K=k(x,[["render",B]]);export{K as default};