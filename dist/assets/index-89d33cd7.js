var E=(h,l,o)=>new Promise((t,c)=>{var f=r=>{try{a(o.next(r))}catch(i){c(i)}},d=r=>{try{a(o.throw(r))}catch(i){c(i)}},a=r=>r.done?t(r.value):Promise.resolve(r.value).then(f,d);a((o=o.apply(h,l)).next())});import{d as x,f as k,w as T,n as D,a6 as A,Z as p,_,F as R,a9 as B,q as V,z as I,l as s,u as e,a8 as n,E as y,a0 as b,a7 as S,aa as M}from"./vue-b9806415.js";import{_ as N}from"./DetailModal.vue_vue_type_script_setup_true_lang-38aff2df.js";import{B as j}from"./BasicTable-cd05a680.js";import{T as F}from"./BasicForm.vue_vue_type_style_index_0_lang-8c66020c.js";import"./TableImg.vue_vue_type_style_index_0_lang-0c7200ee.js";import{u as $}from"./useTable-65fd89bc.js";import{u as q}from"./index-7caba1aa.js";import{d as z,b as H,c as Z}from"./index.js";import{getColumns as G}from"./data-2cf768d0.js";import{d as J}from"./antd-57936705.js";import"./index-1d751678.js";import"./useDescription-16817c27.js";import"./BasicForm-152e2559.js";import"./useForm-4dc53c5d.js";import"./uuid-31b8b5a4.js";import"./useWindowSizeFn-da6b5cad.js";import"./onMountedOrActivated-b65981ee.js";import"./index-456abdd7.js";import"./download-9ecd0762.js";import"./base64Conver-39fc0d26.js";import"./index-acb772bd.js";import"./sortable.esm-4ae27e0b.js";const K=()=>z.get({url:"/error"}),O={class:"p-4"},P=["src"],hr=x({__name:"index",setup(h){const l=k(),o=k([]),{t}=H(),c=Z(),[f,{setTableData:d}]=$({title:t("sys.errorLog.tableTitle"),columns:G(),actionColumn:{width:80,title:"Action",dataIndex:"action"}}),[a,{openModal:r}]=q();T(()=>c.getErrorLogInfoList,m=>{D(()=>{d(J(m))})},{immediate:!0});function i(m){l.value=m,r(!0)}function w(){throw new Error("fire vue error!")}function C(){o.value.push(`${new Date().getTime()}.png`)}function L(){return E(this,null,function*(){yield K()})}return(m,Q)=>{const g=A("a-button");return p(),_("div",O,[(p(!0),_(R,null,B(o.value,u=>V((p(),_("img",{key:u,src:u,alt:""},null,8,P)),[[I,!1]])),128)),s(N,{info:l.value,onRegister:e(a)},null,8,["info","onRegister"]),s(e(j),{onRegister:e(f),class:"error-handle-table"},{toolbar:n(()=>[s(g,{onClick:w,type:"primary"},{default:n(()=>[y(b(e(t)("sys.errorLog.fireVueError")),1)]),_:1}),s(g,{onClick:C,type:"primary"},{default:n(()=>[y(b(e(t)("sys.errorLog.fireResourceError")),1)]),_:1}),s(g,{onClick:L,type:"primary"},{default:n(()=>[y(b(e(t)("sys.errorLog.fireAjaxError")),1)]),_:1})]),bodyCell:n(({column:u,record:v})=>[u.key==="action"?(p(),S(e(F),{key:0,actions:[{label:e(t)("sys.errorLog.tableActionDesc"),onClick:i.bind(null,v)}]},null,8,["actions"])):M("",!0)]),_:1},8,["onRegister"])])}}});export{hr as default};