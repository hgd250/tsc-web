var w=Object.defineProperty,A=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var B=(e,t,a)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,y=(e,t)=>{for(var a in t||(t={}))E.call(t,a)&&B(e,a,t[a]);if(D)for(var a of D(t))I.call(t,a)&&B(e,a,t[a]);return e},F=(e,t)=>A(e,C(t));import{P as V}from"./index-905f9d8d.js";import{bl as L,a_ as O,_ as S}from"./index.js";import{w as f,a6 as x}from"./antd-b9afe41d.js";import{d as N,r as P,h as W,c as g,G as $,a6 as r,Z as h,a7 as M,a8 as u,$ as s,l,E as d,a0 as c,_ as k,F as R,a9 as U}from"./vue-b9806415.js";import"./useContentViewHeight-bbdf3bf4.js";import"./useWindowSizeFn-da6b5cad.js";import"./onMountedOrActivated-b65981ee.js";const G=N({components:{PageWrapper:V,[f.name]:f,InputTextArea:f.TextArea,Tag:x},setup(){const e=P({server:"ws://localhost:3300/test",sendValue:"",recordList:[]}),{status:t,data:a,send:v,close:T,open:b}=L(e.server,{autoReconnect:!1,heartbeat:!0});W(()=>{if(a.value)try{const o=JSON.parse(a.value);e.recordList.push(o)}catch(o){e.recordList.push({res:a.value,id:Math.ceil(Math.random()*1e3),time:new Date().getTime()})}});const n=g(()=>t.value==="OPEN"),p=g(()=>n.value?"success":"red"),i=g(()=>[...e.recordList].reverse());function m(){v(e.sendValue),e.sendValue=""}function _(){n.value?T():b()}return F(y({status:t,formatToDateTime:O},$(e)),{handlerSend:m,getList:i,toggle:_,getIsOpen:n,getTagColor:p})}}),J={class:"flex"},Z={class:"w-1/3 bg-white p-4"},j={class:"flex items-center"},q=s("span",{class:"text-lg font-medium mr-4"}," 连接状态: ",-1),z=s("hr",{class:"my-4"},null,-1),H={class:"flex"},K=s("p",{class:"text-lg font-medium mt-4"},"设置",-1),Q=s("hr",{class:"my-4"},null,-1),X={class:"w-2/3 bg-white ml-4 p-4"},Y=s("span",{class:"text-lg font-medium mr-4"}," 消息记录: ",-1),ee=s("hr",{class:"my-4"},null,-1),te={class:"max-h-80 overflow-auto"},se={class:"flex items-center"},ae=s("span",{class:"mr-2 text-primary font-medium"},"收到消息:",-1);function oe(e,t,a,v,T,b){const n=r("Tag"),p=r("a-input"),i=r("a-button"),m=r("InputTextArea"),_=r("PageWrapper");return h(),M(_,{title:"WebSocket 示例"},{default:u(()=>[s("div",J,[s("div",Z,[s("div",j,[q,l(n,{color:e.getTagColor},{default:u(()=>[d(c(e.status),1)]),_:1},8,["color"])]),z,s("div",H,[l(p,{value:e.server,"onUpdate:value":t[0]||(t[0]=o=>e.server=o),disabled:""},{addonBefore:u(()=>[d(" 服务地址 ")]),_:1},8,["value"]),l(i,{type:e.getIsOpen?"danger":"primary",onClick:e.toggle},{default:u(()=>[d(c(e.getIsOpen?"关闭连接":"开启连接"),1)]),_:1},8,["type","onClick"])]),K,Q,l(m,{placeholder:"需要发送到服务器的内容",disabled:!e.getIsOpen,value:e.sendValue,"onUpdate:value":t[1]||(t[1]=o=>e.sendValue=o),allowClear:""},null,8,["disabled","value"]),l(i,{type:"primary",block:"",class:"mt-4",disabled:!e.getIsOpen,onClick:e.handlerSend},{default:u(()=>[d(" 发送 ")]),_:1},8,["disabled","onClick"])]),s("div",X,[Y,ee,s("div",te,[s("ul",null,[(h(!0),k(R,null,U(e.getList,o=>(h(),k("li",{class:"mt-2",key:o.time},[s("div",se,[ae,s("span",null,c(e.formatToDateTime(o.time)),1)]),s("div",null,c(o.res),1)]))),128))])])])])]),_:1})}const me=S(G,[["render",oe]]);export{me as default};
