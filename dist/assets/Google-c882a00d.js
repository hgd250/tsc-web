var l=(t,r,e)=>new Promise((a,n)=>{var s=o=>{try{p(e.next(o))}catch(c){n(c)}},i=o=>{try{p(e.throw(o))}catch(c){n(c)}},p=o=>o.done?a(o.value):Promise.resolve(o.value).then(s,i);p((e=e.apply(t,r)).next())});import{u as f}from"./useScript-ac87c53b.js";import{d as m,f as g,o as u,n as d,u as w,Z as h,_,ae as y}from"./vue-b9806415.js";import{_ as M}from"./index.js";import"./antd-57936705.js";const k="https://maps.googleapis.com/maps/api/js?key=AIzaSyBQWrGwj4gAzKndcbwD5favT9K0wgty_0&signed_in=true",S=m({name:"GoogleMap",props:{width:{type:String,default:"100%"},height:{type:String,default:"calc(100vh - 78px)"}},setup(){const t=g(null),{toPromise:r}=f({src:k});function e(){return l(this,null,function*(){yield r(),yield d();const a=w(t);if(!a)return;const n=window.google,s={lat:116.404,lng:39.915},i=new n.maps.Map(a,{zoom:4,center:s});new n.maps.Marker({position:s,map:i,title:"Hello World!"})})}return u(()=>{e()}),{wrapRef:t}}});function z(t,r,e,a,n,s){return h(),_("div",{ref:"wrapRef",style:y({height:t.height,width:t.width})},null,4)}const G=M(S,[["render",z]]);export{G as default};
