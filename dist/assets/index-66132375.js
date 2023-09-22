var me=Object.defineProperty,he=Object.defineProperties;var ye=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var Ce=Object.prototype.hasOwnProperty,Me=Object.prototype.propertyIsEnumerable;var ee=(e,o,l)=>o in e?me(e,o,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[o]=l,b=(e,o)=>{for(var l in o||(o={}))Ce.call(o,l)&&ee(e,l,o[l]);if(x)for(var l of x(o))Me.call(o,l)&&ee(e,l,o[l]);return e},_=(e,o)=>he(e,ye(o));var A=(e,o,l)=>new Promise((i,a)=>{var c=d=>{try{n(l.next(d))}catch(u){a(u)}},t=d=>{try{n(l.throw(d))}catch(u){a(u)}},n=d=>d.done?i(d.value):Promise.resolve(d.value).then(c,t);n((l=l.apply(e,o)).next())});import{b as se,o as be,al as He,aH as Se,w as ke,v as Fe,S as ve,aI as $e,_ as j,h as re,ak as Be,t as ie,am as Oe,an as Pe,ao as ce,ae as Te,af as we}from"./index.js";import{h as z,u as s,d as N,G as Ne,l as H,i as De,f as m,c as S,w as ue,o as Re,b as de,n as B,a6 as y,t as We,Z as C,a7 as P,a8 as g,q as _e,_ as V,ae as Ee,N as O,F as je,aa as Y,a1 as Le,E as U,a0 as G,ab as E,g as J,y as Ie,ac as te,a9 as ne,ah as oe,ai as ae,r as pe,H as q}from"./vue-b9806415.js";import{M as Ae,T as qe,a0 as Ve,a1 as ze,aD as Xe,o as X,a as Ye}from"./antd-b9afe41d.js";import{u as Ue}from"./useWindowSizeFn-da6b5cad.js";const{t:le}=se(),Ge={open:{type:Boolean},scrollTop:{type:Boolean,default:!0},height:{type:Number},minHeight:{type:Number},draggable:{type:Boolean,default:!0},centered:{type:Boolean},cancelText:{type:String,default:le("common.cancelText")},okText:{type:String,default:le("common.okText")},closeFunc:Function},K=Object.assign({},Ge,{defaultFullscreen:{type:Boolean},canFullscreen:{type:Boolean,default:!0},wrapperFooterOffset:{type:Number,default:0},helpMessage:[String,Array],useWrapper:{type:Boolean,default:!0},loading:{type:Boolean},loadingTip:{type:String},showCancelBtn:{type:Boolean,default:!0},showOkBtn:{type:Boolean,default:!0},wrapperProps:Object,afterClose:Function,bodyStyle:Object,closable:{type:Boolean,default:!0},closeIcon:Object,confirmLoading:{type:Boolean},destroyOnClose:{type:Boolean},footer:Object,getContainer:Function,mask:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},maskStyle:Object,okType:{type:String,default:"primary"},okButtonProps:Object,cancelButtonProps:Object,title:{type:String},open:{type:Boolean},width:[String,Number],wrapClassName:{type:String},zIndex:{type:Number}});function Ze(e){const o=(a,c)=>getComputedStyle(a)[c],l=a=>{if(!a)return;a.setAttribute("data-drag",s(e.draggable));const c=a.querySelector(".ant-modal-header"),t=a.querySelector(".ant-modal");!c||!t||!s(e.draggable)||(c.style.cursor="move",c.onmousedown=n=>{if(!n)return;const d=n.clientX,u=n.clientY,p=document.body.clientWidth,f=document.documentElement.clientHeight,h=t.offsetWidth,M=t.offsetHeight,k=t.offsetLeft,F=p-t.offsetLeft-h,$=t.offsetTop,L=f-t.offsetTop-M,T=o(t,"left"),D=o(t,"top");let R=+T,W=+D;T.includes("%")?(R=+document.body.clientWidth*(+T.replace(/%/g,"")/100),W=+document.body.clientHeight*(+D.replace(/%/g,"")/100)):(R=+T.replace(/px/g,""),W=+D.replace(/px/g,"")),document.onmousemove=function(I){let r=I.clientX-d,v=I.clientY-u;-r>k?r=-k:r>F&&(r=F),-v>$?v=-$:v>L&&(v=L),t.style.cssText+=`;left:${r+R}px;top:${v+W}px;`},document.onmouseup=()=>{document.onmousemove=null,document.onmouseup=null}})},i=()=>{const a=document.querySelectorAll(".ant-modal-wrap");for(const c of Array.from(a)){if(!c)continue;const t=o(c,"display"),n=c.getAttribute("data-drag");t!=="none"&&(n===null||s(e.destroyOnClose))&&l(c)}};z(()=>{!s(e.open)||!s(e.draggable)||be(()=>{i()},30)})}function Je(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!De(e)}const Ke=N({name:"Modal",inheritAttrs:!1,props:K,emits:["cancel"],setup(e,{slots:o,emit:l}){const{open:i,draggable:a,destroyOnClose:c}=Ne(e),t=He();Ze({open:i,destroyOnClose:c,draggable:a});const n=d=>{l("cancel",d)};return()=>{let d;const u=_(b(b({},s(t)),e),{onCancel:n});return H(Ae,u,Je(d=Se(o))?d:{default:()=>[d]})}}}),fe=Symbol();function Qe(e){return Fe(e,fe)}function St(){return ke(fe)}const xe={loading:{type:Boolean},useWrapper:{type:Boolean,default:!0},modalHeaderHeight:{type:Number,default:57},modalFooterHeight:{type:Number,default:74},minHeight:{type:Number,default:200},height:{type:Number},footerOffset:{type:Number,default:0},open:{type:Boolean},fullScreen:{type:Boolean},loadingTip:{type:String}},et=N({name:"ModalWrapper",components:{ScrollContainer:ve},inheritAttrs:!1,props:xe,emits:["height-change","ext-height"],setup(e,{emit:o}){const l=m(null),i=m(null),a=m(0),c=m(0);let t=0;Ue(u.bind(null,!1)),$e(i,()=>{u()},{attributes:!0,subtree:!0}),Qe({redoModalHeight:u});const n=S(()=>({minHeight:`${e.minHeight}px`,[e.fullScreen?"height":"maxHeight"]:`${s(a)}px`}));z(()=>{e.useWrapper&&u()}),ue(()=>e.fullScreen,p=>{u(),p?c.value=a.value:a.value=c.value}),Re(()=>{const{modalHeaderHeight:p,modalFooterHeight:f}=e;o("ext-height",p+f)}),de(()=>{});function d(){return A(this,null,function*(){B(()=>{var f;const p=s(l);p&&((f=p==null?void 0:p.scrollTo)==null||f.call(p,0))})})}function u(){return A(this,null,function*(){if(!e.open)return;const p=s(l);if(!p)return;const f=p.$el.parentElement;if(f){f.style.padding="0",yield B();try{const h=f.parentElement&&f.parentElement.parentElement;if(!h)return;const M=getComputedStyle(h).top,k=Number.parseInt(M);let F=window.innerHeight-k*2+(e.footerOffset||0)-e.modalFooterHeight-e.modalHeaderHeight;k<40&&(F-=26),yield B();const $=s(i);if(!$)return;yield B(),t=$.scrollHeight,e.fullScreen?a.value=window.innerHeight-e.modalFooterHeight-e.modalHeaderHeight-28:a.value=e.height?e.height:t>F?F:t,o("height-change",s(a))}catch(h){}}})}return{wrapperRef:l,spinRef:i,spinStyle:n,scrollTop:d,setModalHeight:u}}}),tt=["loading-tip"];function nt(e,o,l,i,a,c){const t=y("ScrollContainer"),n=We("loading");return C(),P(t,{ref:"wrapperRef"},{default:g(()=>[_e((C(),V("div",{ref:"spinRef",style:Ee(e.spinStyle),"loading-tip":e.loadingTip},[O(e.$slots,"default")],12,tt)),[[n,e.loading]])]),_:3},512)}const ot=j(et,[["render",nt]]),at=N({name:"ModalClose",components:{Tooltip:qe,FullscreenExitOutlined:Ve,FullscreenOutlined:ze,CloseOutlined:Xe},props:{canFullscreen:{type:Boolean,default:!0},fullScreen:{type:Boolean}},emits:["cancel","fullscreen"],setup(e,{emit:o}){const{prefixCls:l}=re("basic-modal-close"),{t:i}=se(),a=S(()=>[l,`${l}--custom`,{[`${l}--can-full`]:e.canFullscreen}]);function c(n){o("cancel",n)}function t(n){n==null||n.stopPropagation(),n==null||n.preventDefault(),o("fullscreen")}return{t:i,getClass:a,prefixCls:l,handleCancel:c,handleFullScreen:t}}});function lt(e,o,l,i,a,c){const t=y("FullscreenExitOutlined"),n=y("Tooltip"),d=y("FullscreenOutlined"),u=y("CloseOutlined");return C(),V("div",{class:Le(e.getClass)},[e.canFullscreen?(C(),V(je,{key:0},[e.fullScreen?(C(),P(n,{key:0,title:e.t("component.modal.restore"),placement:"bottom"},{default:g(()=>[H(t,{role:"full",onClick:e.handleFullScreen},null,8,["onClick"])]),_:1},8,["title"])):(C(),P(n,{key:1,title:e.t("component.modal.maximize"),placement:"bottom"},{default:g(()=>[H(d,{role:"close",onClick:e.handleFullScreen},null,8,["onClick"])]),_:1},8,["title"]))],64)):Y("",!0),H(n,{title:e.t("component.modal.close"),placement:"bottom"},{default:g(()=>[H(u,{onClick:e.handleCancel},null,8,["onClick"])]),_:1},8,["title"])],2)}const st=j(at,[["render",lt]]),rt=N({name:"BasicModalFooter",props:K,emits:["ok","cancel"],setup(e,{emit:o}){function l(a){o("ok",a)}function i(a){o("cancel",a)}return{handleOk:l,handleCancel:i}}});function it(e,o,l,i,a,c){const t=y("a-button");return C(),V("div",null,[O(e.$slots,"insertFooter"),e.showCancelBtn?(C(),P(t,E({key:0},e.cancelButtonProps,{onClick:e.handleCancel}),{default:g(()=>[U(G(e.cancelText),1)]),_:1},16,["onClick"])):Y("",!0),O(e.$slots,"centerFooter"),e.showOkBtn?(C(),P(t,E({key:1,type:e.okType,onClick:e.handleOk,loading:e.confirmLoading},e.okButtonProps),{default:g(()=>[U(G(e.okText),1)]),_:1},16,["type","onClick","loading"])):Y("",!0),O(e.$slots,"appendFooter")])}const ct=j(rt,[["render",it]]),ut=N({name:"BasicModalHeader",components:{BasicTitle:Be},props:{helpMessage:{type:[String,Array]},title:{type:String}}});function dt(e,o,l,i,a,c){const t=y("BasicTitle");return C(),P(t,{helpMessage:e.helpMessage},{default:g(()=>[U(G(e.title),1)]),_:1},8,["helpMessage"])}const pt=j(ut,[["render",dt]]);function ft(e){const o=m(!1),l=S(()=>{const a=s(e.wrapClassName)||"";return s(o)?`fullscreen-modal ${a} `:s(a)});function i(a){a&&a.stopPropagation(),o.value=!s(o)}return{getWrapClassName:l,handleFullScreen:i,fullScreenRef:o}}const gt=N({name:"BasicModal",components:{Modal:Ke,ModalWrapper:ot,ModalClose:st,ModalFooter:ct,ModalHeader:pt},inheritAttrs:!1,props:K,emits:["open-change","height-change","cancel","ok","register","update:open"],setup(e,{emit:o,attrs:l}){const i=m(!1),a=m(null),c=m(null),{prefixCls:t}=re("basic-modal"),n=m(0),d={setModalProps:T,emitOpen:void 0,redoModalHeight:()=>{B(()=>{s(c)&&s(c).setModalHeight()})}},u=J();u&&o("register",d,u.uid);const p=S(()=>b(b({},e),s(a))),{handleFullScreen:f,getWrapClassName:h,fullScreenRef:M}=ft({modalWrapperRef:c,extHeightRef:n,wrapClassName:Ie(p.value,"wrapClassName")}),k=S(()=>{const r=_(b({},s(p)),{open:s(i),okButtonProps:void 0,cancelButtonProps:void 0,title:void 0});return _(b({},r),{wrapClassName:s(h)})}),F=S(()=>{const r=_(b(b({},l),s(p)),{open:s(i)});return r.wrapClassName=`${(r==null?void 0:r.wrapClassName)||""} ${s(h)}vben-basic-modal-wrap`,s(M)?X(r,["height","title"]):X(r,"title")}),$=S(()=>{if(!s(M))return s(k).height});z(()=>{i.value=!!e.open,M.value=!!e.defaultFullscreen}),ue(()=>s(i),r=>{o("open-change",r),o("update:open",r),B(()=>{e.scrollTop&&r&&s(c)&&s(c).scrollTop()})},{immediate:!1});function L(r){return A(this,null,function*(){var v,Q;if(r==null||r.stopPropagation(),!((Q=(v=r.target)==null?void 0:v.classList)!=null&&Q.contains(t+"-close--custom"))){if(e.closeFunc&&ie(e.closeFunc)){const ge=yield e.closeFunc();i.value=!ge;return}i.value=!1,o("cancel",r)}})}function T(r){a.value=Oe(s(a)||{},r),Reflect.has(r,"open")&&(i.value=!!r.open),Reflect.has(r,"defaultFullscreen")&&(M.value=!!r.defaultFullscreen)}function D(r){o("ok",r)}function R(r){o("height-change",r)}function W(r){n.value=r}function I(r){e.canFullscreen&&(r.stopPropagation(),f(r))}return{handleCancel:L,getBindValue:F,getProps:k,handleFullScreen:f,fullScreenRef:M,getMergeProps:p,handleOk:D,openRef:i,omit:X,modalWrapperRef:c,handleExtHeight:W,handleHeightChange:R,handleTitleDbClick:I,getWrapperHeight:$}}});function mt(e,o,l,i,a,c){const t=y("ModalClose"),n=y("ModalHeader"),d=y("ModalFooter"),u=y("ModalWrapper"),p=y("Modal");return C(),P(p,E(e.getBindValue,{onCancel:e.handleCancel}),te({default:g(()=>[H(u,E({useWrapper:e.getProps.useWrapper,footerOffset:e.wrapperFooterOffset,fullScreen:e.fullScreenRef,ref:"modalWrapperRef",loading:e.getProps.loading,"loading-tip":e.getProps.loadingTip,minHeight:e.getProps.minHeight,height:e.getWrapperHeight,open:e.openRef,modalFooterHeight:e.footer!==void 0&&!e.footer?0:void 0},e.omit(e.getProps.wrapperProps,"open","height","modalFooterHeight"),{onExtHeight:e.handleExtHeight,onHeightChange:e.handleHeightChange}),{default:g(()=>[O(e.$slots,"default")]),_:3},16,["useWrapper","footerOffset","fullScreen","loading","loading-tip","minHeight","height","open","modalFooterHeight","onExtHeight","onHeightChange"])]),_:2},[e.$slots.closeIcon?void 0:{name:"closeIcon",fn:g(()=>[H(t,{canFullscreen:e.getProps.canFullscreen,fullScreen:e.fullScreenRef,onCancel:e.handleCancel,onFullscreen:e.handleFullScreen},null,8,["canFullscreen","fullScreen","onCancel","onFullscreen"])]),key:"0"},e.$slots.title?void 0:{name:"title",fn:g(()=>[H(n,{helpMessage:e.getProps.helpMessage,title:e.getMergeProps.title,onDblclick:e.handleTitleDbClick},null,8,["helpMessage","title","onDblclick"])]),key:"1"},e.$slots.footer?void 0:{name:"footer",fn:g(()=>[H(d,E(e.getBindValue,{onOk:e.handleOk,onCancel:e.handleCancel}),te({_:2},[ne(Object.keys(e.$slots),f=>({name:f,fn:g(h=>[O(e.$slots,f,oe(ae(h||{})))])}))]),1040,["onOk","onCancel"])]),key:"2"},ne(Object.keys(e.omit(e.$slots,"default")),f=>({name:f,fn:g(h=>[O(e.$slots,f,oe(ae(h||{})))])}))]),1040,["onCancel"])}const ht=j(gt,[["render",mt]]),w=pe({}),Z=pe({});function kt(){const e=m(null),o=m(!1),l=m("");function i(t,n){if(!J())throw new Error("useModal() can only be used inside setup() or functional components!");l.value=n,de(()=>{e.value=null,o.value=!1,w[s(l)]=null}),!(s(o)&&Pe()&&t===s(e))&&(e.value=t,o.value=!0,t.emitOpen=(d,u)=>{Z[u]=d})}const a=()=>{const t=s(e);return t||ce("useModal instance is undefined!"),t},c={setModalProps:t=>{var n;(n=a())==null||n.setModalProps(t)},getOpen:S(()=>Z[~~s(l)]),redoModalHeight:()=>{var t,n;(n=(t=a())==null?void 0:t.redoModalHeight)==null||n.call(t)},openModal:(t=!0,n,d=!0)=>{var f;if((f=a())==null||f.setModalProps({open:t}),!n)return;const u=s(l);if(d){w[u]=null,w[u]=q(n);return}Ye(q(w[u]),q(n))||(w[u]=q(n))},closeModal:()=>{var t;(t=a())==null||t.setModalProps({open:!1})}};return[i,c]}const Ft=e=>{const o=m(null),l=J(),i=m(""),a=()=>{const t=s(o);return t||ce("useModalInner instance is undefined!"),t},c=(t,n)=>{Te(()=>{o.value=null}),i.value=n,o.value=t,l==null||l.emit("register",t,n)};return z(()=>{const t=w[s(i)];t&&(!e||!ie(e)||B(()=>{e(t)}))}),[c,{changeLoading:(t=!0)=>{var n;(n=a())==null||n.setModalProps({loading:t})},getOpen:S(()=>Z[~~s(i)]),changeOkLoading:(t=!0)=>{var n;(n=a())==null||n.setModalProps({confirmLoading:t})},closeModal:()=>{var t;(t=a())==null||t.setModalProps({open:!1})},setModalProps:t=>{var n;(n=a())==null||n.setModalProps(t)},redoModalHeight:()=>{var n;const t=(n=a())==null?void 0:n.redoModalHeight;t&&t()}}]},vt=we(ht);export{vt as B,St as a,Ft as b,kt as u};
