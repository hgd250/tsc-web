var d=(o,i,r)=>new Promise((c,l)=>{var m=e=>{try{t(r.next(e))}catch(u){l(u)}},s=e=>{try{t(r.throw(e))}catch(u){l(u)}},t=e=>e.done?c(e.value):Promise.resolve(e.value).then(m,s);t((r=r.apply(o,i)).next())});import{B as A}from"./BasicForm-283acb19.js";import"./BasicForm.vue_vue_type_style_index_0_lang-5530a29b.js";import{u as _}from"./useForm-4dc53c5d.js";import v from"./PersonTable-3d550c56.js";import{P as h}from"./index-905f9d8d.js";import{K as b}from"./antd-b9afe41d.js";import{d as B,f as E,a6 as p,Z as q,a7 as k,a8 as a,l as n,E as C}from"./vue-b9806415.js";import{_ as F}from"./index.js";import"./index-66132375.js";import"./useWindowSizeFn-da6b5cad.js";import"./index-e6e43971.js";import"./uuid-31b8b5a4.js";import"./download-9ecd0762.js";import"./base64Conver-39fc0d26.js";import"./index-183a9872.js";import"./BasicTable-6b963068.js";import"./TableImg.vue_vue_type_style_index_0_lang-751beea8.js";import"./sortable.esm-4ae27e0b.js";import"./onMountedOrActivated-b65981ee.js";import"./useTable-65fd89bc.js";import"./useContentViewHeight-bbdf3bf4.js";const f=[{label:"付晓晓",value:"1"},{label:"周毛毛",value:"2"}],P=[{label:"私密",value:"1"},{label:"公开",value:"2"}],y=[{field:"f1",component:"Input",label:"仓库名",required:!0},{field:"f2",component:"Input",label:"仓库域名",required:!0,componentProps:{addonBefore:"http://",addonAfter:"com"},colProps:{offset:2}},{field:"f3",component:"Select",label:"仓库管理员",componentProps:{options:f},required:!0,colProps:{offset:2}},{field:"f4",component:"Select",label:"审批人",componentProps:{options:f},required:!0},{field:"f5",component:"RangePicker",label:"生效日期",required:!0,colProps:{offset:2}},{field:"f6",component:"Select",label:"仓库类型",componentProps:{options:P},required:!0,colProps:{offset:2}}],T=[{field:"t1",component:"Input",label:"任务名",required:!0},{field:"t2",component:"Input",label:"任务描述",required:!0,colProps:{offset:2}},{field:"t3",component:"Select",label:"执行人",componentProps:{options:f},required:!0,colProps:{offset:2}},{field:"t4",component:"Select",label:"责任人",componentProps:{options:f},required:!0},{field:"t5",component:"TimePicker",label:"生效日期",required:!0,componentProps:{style:{width:"100%"}},colProps:{offset:2}},{field:"t6",component:"Select",label:"任务类型",componentProps:{options:P},required:!0,colProps:{offset:2}}],R=B({name:"FormHightPage",components:{BasicForm:A,PersonTable:v,PageWrapper:h,[b.name]:b},setup(){const o=E(null),[i,{validate:r}]=_({layout:"vertical",baseColProps:{span:6},schemas:y,showActionButtonGroup:!1}),[c,{validate:l}]=_({layout:"vertical",baseColProps:{span:6},schemas:T,showActionButtonGroup:!1});function m(){return d(this,null,function*(){try{o.value;const[s,t]=yield Promise.all([r(),l()])}catch(s){}})}return{register:i,registerTask:c,submitAll:m,tableRef:o}}});function S(o,i,r,c,l,m){const s=p("BasicForm"),t=p("a-card"),e=p("PersonTable"),u=p("a-button"),g=p("PageWrapper");return q(),k(g,{class:"high-form",title:"高级表单",content:" 高级表单常见于一次性输入和提交大批量数据的场景。"},{rightFooter:a(()=>[n(u,{type:"primary",onClick:o.submitAll},{default:a(()=>[C(" 提交 ")]),_:1},8,["onClick"])]),default:a(()=>[n(t,{title:"仓库管理",bordered:!1},{default:a(()=>[n(s,{onRegister:o.register},null,8,["onRegister"])]),_:1}),n(t,{title:"任务管理",bordered:!1,class:"!mt-5"},{default:a(()=>[n(s,{onRegister:o.registerTask},null,8,["onRegister"])]),_:1}),n(t,{title:"成员管理",bordered:!1,class:"!mt-5"},{default:a(()=>[n(e,{ref:"tableRef"},null,512)]),_:1})]),_:1})}const ee=F(R,[["render",S],["__scopeId","data-v-17dbda48"]]);export{ee as default};