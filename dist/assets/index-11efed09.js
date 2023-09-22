var de=Object.defineProperty,fe=Object.defineProperties;var ge=Object.getOwnPropertyDescriptors;var U=Object.getOwnPropertySymbols;var we=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable;var Z=(e,s,o)=>s in e?de(e,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[s]=o,C=(e,s)=>{for(var o in s||(s={}))we.call(s,o)&&Z(e,o,s[o]);if(U)for(var o of U(s))he.call(s,o)&&Z(e,o,s[o]);return e},L=(e,s)=>fe(e,ge(s));var G=(e,s,o)=>new Promise((i,l)=>{var u=c=>{try{n(o.next(c))}catch(p){l(p)}},t=c=>{try{n(o.throw(c))}catch(p){l(p)}},n=c=>c.done?i(c.value):Promise.resolve(c.value).then(u,t);n((o=o.apply(e,s)).next())});import{b as Y,h as V,_ as j,ak as me,p as N,S as ye,al as Ce,am as J,ai as De,t as x,ae as ee,an as ke,ao as te,af as $e}from"./index.js";import{d as A,c as w,a6 as D,Z as d,_ as b,F as Be,N as f,a7 as O,a8 as h,E as R,a0 as S,ab as T,aa as P,a1 as $,ae as oe,$ as K,l as E,f as k,g as _,u as a,H as v,w as Q,n as se,t as ve,ac as W,q as be,a9 as Pe,ah as Oe,ai as Se,r as ne,h as Te}from"./vue-b9806415.js";import{af as _e,$ as Fe,a as He}from"./antd-57936705.js";const{t:X}=Y(),re={confirmLoading:{type:Boolean},showCancelBtn:{type:Boolean,default:!0},cancelButtonProps:Object,cancelText:{type:String,default:X("common.cancelText")},showOkBtn:{type:Boolean,default:!0},okButtonProps:Object,okText:{type:String,default:X("common.okText")},okType:{type:String,default:"primary"},showFooter:{type:Boolean},footerHeight:{type:[String,Number],default:60}},Le=C({isDetail:{type:Boolean},title:{type:String,default:""},loadingText:{type:String},showDetailBack:{type:Boolean,default:!0},open:{type:Boolean},loading:{type:Boolean},maskClosable:{type:Boolean,default:!0},getContainer:{type:[Object,String]},closeFunc:{type:[Function,Object],default:null},destroyOnClose:{type:Boolean}},re),Ne=A({name:"BasicDrawerFooter",props:L(C({},re),{height:{type:String,default:"60px"}}),emits:["ok","close"],setup(e,{emit:s}){const{prefixCls:o}=V("basic-drawer-footer"),i=w(()=>{const t=`${e.height}`;return{height:t,lineHeight:`calc(${t} - 1px)`}});function l(){s("ok")}function u(){s("close")}return{handleOk:l,prefixCls:o,handleClose:u,getStyle:i}}});function Re(e,s,o,i,l,u){const t=D("a-button");return e.showFooter||e.$slots.footer?(d(),b("div",{key:0,class:$(e.prefixCls),style:oe(e.getStyle)},[e.$slots.footer?f(e.$slots,"footer",{key:1}):(d(),b(Be,{key:0},[f(e.$slots,"insertFooter"),e.showCancelBtn?(d(),O(t,T({key:0},e.cancelButtonProps,{onClick:e.handleClose,class:"mr-2"}),{default:h(()=>[R(S(e.cancelText),1)]),_:1},16,["onClick"])):P("",!0),f(e.$slots,"centerFooter"),e.showOkBtn?(d(),O(t,T({key:1,type:e.okType,onClick:e.handleOk},e.okButtonProps,{class:"mr-2",loading:e.confirmLoading}),{default:h(()=>[R(S(e.okText),1)]),_:1},16,["type","onClick","loading"])):P("",!0),f(e.$slots,"appendFooter")],64))],6)):P("",!0)}const Ee=j(Ne,[["render",Re]]),Ie=A({name:"BasicDrawerHeader",components:{BasicTitle:me,ArrowLeftOutlined:_e},props:{isDetail:N.bool,showDetailBack:N.bool,title:N.string},emits:["close"],setup(e,{emit:s}){const{prefixCls:o}=V("basic-drawer-header");function i(){s("close")}return{prefixCls:o,handleClose:i}}});const Ve={key:1};function je(e,s,o,i,l,u){const t=D("BasicTitle"),n=D("ArrowLeftOutlined");return e.isDetail?(d(),b("div",{key:1,class:$([e.prefixCls,`${e.prefixCls}--detail`])},[K("span",{class:$(`${e.prefixCls}__twrap`)},[e.showDetailBack?(d(),b("span",{key:0,onClick:s[0]||(s[0]=(...c)=>e.handleClose&&e.handleClose(...c))},[E(n,{class:$(`${e.prefixCls}__back`)},null,8,["class"])])):P("",!0),e.title?(d(),b("span",Ve,S(e.title),1)):P("",!0)],2),K("span",{class:$(`${e.prefixCls}__toolbar`)},[f(e.$slots,"titleToolbar")],2)],2)):(d(),O(t,{key:0,class:$(e.prefixCls)},{default:h(()=>[f(e.$slots,"title"),R(" "+S(e.$slots.title?"":e.title),1)]),_:3},8,["class"]))}const Ae=j(Ie,[["render",je]]),qe=A({components:{Drawer:Fe,ScrollContainer:ye,DrawerFooter:Ee,DrawerHeader:Ae},inheritAttrs:!1,props:Le,emits:["open-change","ok","close","register"],setup(e,{emit:s}){const o=k(!1),i=Ce(),l=k(null),{t:u}=Y(),{prefixVar:t,prefixCls:n}=V("basic-drawer"),c={setDrawerProps:ce,emitOpen:void 0},p=_();p&&s("register",c,p.uid);const y=w(()=>J(v(e),a(l))),m=w(()=>{const r=L(C(C({placement:"right"},a(i)),a(y)),{open:a(o)});r.title=void 0;const{isDetail:g,width:H,wrapClassName:M,getContainer:pe}=r;if(g){H||(r.width="100%");const z=`${n}__detail`;r.rootClassName=M?`${M} ${z}`:z,pe||(r.getContainer=`.${t}-layout-content`)}return r}),F=w(()=>C(C({},i),a(m))),q=w(()=>{const{footerHeight:r,showFooter:g}=a(m);return g&&r?De(r)?`${r}px`:`${r.replace("px","")}px`:"0px"}),ae=w(()=>({position:"relative",height:`calc(100% - ${a(q)})`})),le=w(()=>{var r;return!!((r=a(m))!=null&&r.loading)});Q(()=>e.open,(r,g)=>{r!==g&&(o.value=r)},{deep:!0}),Q(()=>o.value,r=>{se(()=>{s("open-change",r)})});function ie(r){return G(this,null,function*(){const{closeFunc:g}=a(m);if(s("close",r),g&&x(g)){const H=yield g();o.value=!H;return}o.value=!1})}function ce(r){l.value=J(a(l)||{},r),Reflect.has(r,"open")&&(o.value=!!r.open)}function ue(){s("ok")}return{onClose:ie,t:u,prefixCls:n,getMergeProps:y,getScrollContentStyle:ae,getProps:m,getLoading:le,getBindValues:F,getFooterHeight:q,handleOk:ue}}});function Me(e,s,o,i,l,u){const t=D("DrawerHeader"),n=D("ScrollContainer"),c=D("DrawerFooter"),p=D("Drawer"),y=ve("loading");return d(),O(p,T({rootClassName:e.prefixCls,onClose:e.onClose},e.getBindValues),W({default:h(()=>[be((d(),O(n,{style:oe(e.getScrollContentStyle),"loading-tip":e.loadingText||e.t("common.loadingText")},{default:h(()=>[f(e.$slots,"default")]),_:3},8,["style","loading-tip"])),[[y,e.getLoading]]),E(c,T(e.getProps,{onClose:e.onClose,onOk:e.handleOk,height:e.getFooterHeight}),W({_:2},[Pe(Object.keys(e.$slots),m=>({name:m,fn:h(F=>[f(e.$slots,m,Oe(Se(F||{})))])}))]),1040,["onClose","onOk","height"])]),_:2},[e.$slots.title?{name:"title",fn:h(()=>[f(e.$slots,"title")]),key:"1"}:{name:"title",fn:h(()=>[E(t,{title:e.getMergeProps.title,isDetail:e.isDetail,showDetailBack:e.showDetailBack,onClose:e.onClose},{titleToolbar:h(()=>[f(e.$slots,"titleToolbar")]),_:3},8,["title","isDetail","showDetailBack","onClose"])]),key:"0"}]),1040,["rootClassName","onClose"])}const ze=j(qe,[["render",Me]]),B=ne({}),I=ne({});function Ke(){if(!_())throw new Error("useDrawer() can only be used inside setup() or functional components!");const e=k(null),s=k(!1),o=k("");function i(t,n){ee(()=>{e.value=null,s.value=null,B[a(o)]=null}),!(a(s)&&ke()&&t===a(e))&&(o.value=n,e.value=t,s.value=!0,t.emitOpen=(c,p)=>{I[p]=c})}const l=()=>{const t=a(e);return t||te("useDrawer instance is undefined!"),t},u={setDrawerProps:t=>{var n;(n=l())==null||n.setDrawerProps(t)},getOpen:w(()=>I[~~a(o)]),openDrawer:(t=!0,n,c=!0)=>{var y;if((y=l())==null||y.setDrawerProps({open:t}),!n)return;if(c){B[a(o)]=null,B[a(o)]=v(n);return}He(v(B[a(o)]),v(n))||(B[a(o)]=v(n))},closeDrawer:()=>{var t;(t=l())==null||t.setDrawerProps({open:!1})}};return[i,u]}const Qe=e=>{const s=k(null),o=_(),i=k("");if(!_())throw new Error("useDrawerInner() can only be used inside setup() or functional components!");const l=()=>{const t=a(s);if(!t){te("useDrawerInner instance is undefined!");return}return t},u=(t,n)=>{ee(()=>{s.value=null}),i.value=n,s.value=t,o==null||o.emit("register",t,n)};return Te(()=>{const t=B[a(i)];t&&(!e||!x(e)||se(()=>{e(t)}))}),[u,{changeLoading:(t=!0)=>{var n;(n=l())==null||n.setDrawerProps({loading:t})},changeOkLoading:(t=!0)=>{var n;(n=l())==null||n.setDrawerProps({confirmLoading:t})},getOpen:w(()=>I[~~a(i)]),closeDrawer:()=>{var t;(t=l())==null||t.setDrawerProps({open:!1})},setDrawerProps:t=>{var n;(n=l())==null||n.setDrawerProps(t)}}]},We=$e(ze);export{We as B,Qe as a,Ke as u};
