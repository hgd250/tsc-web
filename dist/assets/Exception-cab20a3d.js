import{E as e,e as N,f as O,b as R,h as S,P as _}from"./index.js";import{d as A,f as G,aj as P,c as d,u as s,l as r}from"./vue-b9806415.js";import{B as k,R as h}from"./antd-57936705.js";const C="/assets/no-data-f7e550cc.svg",D="/assets/net-error-61b7e6df.svg",L=A({name:"ErrorPage",props:{status:{type:Number,default:e.PAGE_NOT_FOUND},title:{type:String,default:""},subTitle:{type:String,default:""},full:{type:Boolean,default:!1}},setup(n){const a=G(new Map),{query:m}=P(),o=N(),c=O(),{t}=R(),{prefixCls:p}=S("app-exception-page"),E=d(()=>{const{status:l}=m,{status:i}=n;return Number(l)||i}),x=d(()=>s(a).get(s(E))),T=t("sys.exception.backLogin"),u=t("sys.exception.backHome");return s(a).set(e.PAGE_NOT_ACCESS,{title:"403",status:`${e.PAGE_NOT_ACCESS}`,subTitle:t("sys.exception.subTitle403"),btnText:n.full?T:u,handler:()=>n.full?o(_.BASE_LOGIN):o()}),s(a).set(e.PAGE_NOT_FOUND,{title:"404",status:`${e.PAGE_NOT_FOUND}`,subTitle:t("sys.exception.subTitle404"),btnText:n.full?T:u,handler:()=>n.full?o(_.BASE_LOGIN):o()}),s(a).set(e.ERROR,{title:"500",status:`${e.ERROR}`,subTitle:t("sys.exception.subTitle500"),btnText:u,handler:()=>o()}),s(a).set(e.PAGE_NOT_DATA,{title:t("sys.exception.noDataTitle"),subTitle:"",btnText:t("common.redo"),handler:()=>c(),icon:C}),s(a).set(e.NET_WORK_ERROR,{title:t("sys.exception.networkErrorTitle"),subTitle:t("sys.exception.networkErrorSubTitle"),btnText:t("common.redo"),handler:()=>c(),icon:D}),()=>{const{title:l,subTitle:i,btnText:b,icon:f,handler:g,status:y}=s(x)||{};return r(h,{class:p,status:y,title:n.title||l,"sub-title":n.subTitle||i},{extra:()=>b&&r(k,{type:"primary",onClick:g},{default:()=>b}),icon:()=>f?r("img",{src:f},null):null})}}});export{L as default};
