import{I as l,c as m,b as d,P as _,_ as f}from"./index.js";import{d as g,S as E,c as L,a6 as e,Z as C,a7 as h,a8 as a,l as c}from"./vue-b9806415.js";import{T,aL as B}from"./antd-0fea3d6a.js";const I=g({name:"ErrorAction",components:{Icon:l,Tooltip:T,Badge:B},setup(){const{t:o}=d(),{push:n}=E(),t=m(),r=L(()=>t.getErrorLogListCount);function s(){n(_.ERROR_LOG_PAGE).then(()=>{t.setErrorLogListCount(0)})}return{t:o,getCount:r,handleToErrorList:s}}});function k(o,n,t,r,s,R){const u=e("Icon"),i=e("Badge"),p=e("Tooltip");return C(),h(p,{title:o.t("layout.header.tooltipErrorLog"),placement:"bottom",mouseEnterDelay:.5,onClick:o.handleToErrorList},{default:a(()=>[c(i,{count:o.getCount,offset:[0,10],overflowCount:99},{default:a(()=>[c(u,{icon:"ion:bug-outline"})]),_:1},8,["count"])]),_:1},8,["title","onClick"])}const P=f(I,[["render",k]]);export{P as default};
