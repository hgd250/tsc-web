import{u as i}from"./useECharts-18648c3e.js";import{K as o}from"./antd-0fea3d6a.js";import{d as r,f as l,w as s,Z as d,a7 as m,a8 as f,$ as u,ae as c,u as h}from"./vue-b9806415.js";const w=r({__name:"VisitSource",props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"300px"}},setup(e){const a=e,t=l(null),{setOptions:n}=i(t);return s(()=>a.loading,()=>{a.loading||n({tooltip:{trigger:"item"},legend:{bottom:"1%",left:"center"},series:[{color:["#5ab1ef","#b6a2de","#67e0e3","#2ec7c9"],name:"EARLY RESULTS",type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:"12",fontWeight:"bold"}},labelLine:{show:!1},data:[{value:11,name:"permanently housed"},{value:17,name:"Medical Provide"},{value:56,name:"begun treatment "},{value:36,name:"made progress"}],animationType:"scale",animationEasing:"exponentialInOut",animationDelay:function(){return Math.random()*100}}]})},{immediate:!0}),(p,g)=>(d(),m(h(o),{title:"EARLY RESULTS",loading:e.loading},{default:f(()=>[u("div",{ref_key:"chartRef",ref:t,style:c({width:e.width,height:e.height})},null,4)]),_:1},8,["loading"]))}});export{w as _};
