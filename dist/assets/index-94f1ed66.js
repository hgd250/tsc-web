var i=(e,p,o)=>new Promise((n,s)=>{var u=t=>{try{a(o.next(t))}catch(c){s(c)}},l=t=>{try{a(o.throw(t))}catch(c){s(c)}},a=t=>t.done?n(t.value):Promise.resolve(t.value).then(u,l);a((o=o.apply(e,p)).next())});import{B as d}from"./BasicForm-283acb19.js";import"./BasicForm.vue_vue_type_style_index_0_lang-5530a29b.js";import{u as b}from"./useForm-4dc53c5d.js";import{u as f,_}from"./index.js";import{P}from"./index-905f9d8d.js";import{d as g,a6 as m,Z as F,a7 as h,a8 as C,l as B}from"./vue-b9806415.js";import"./antd-b9afe41d.js";import"./index-66132375.js";import"./useWindowSizeFn-da6b5cad.js";import"./index-e6e43971.js";import"./uuid-31b8b5a4.js";import"./download-9ecd0762.js";import"./base64Conver-39fc0d26.js";import"./index-183a9872.js";import"./useContentViewHeight-bbdf3bf4.js";import"./onMountedOrActivated-b65981ee.js";const r={span:8},v=[{field:"title",component:"Input",label:"标题",colProps:r,componentProps:{placeholder:"给目标起个名字"},required:!0},{field:"time",component:"RangePicker",label:"起止日期",colProps:r,required:!0},{field:"client",component:"Input",colProps:r,label:"客户",helpMessage:"目标的服务对象",subLabel:"( 选填 )",componentProps:{placeholder:"请描述你服务的客户，内部客户直接 @姓名／工号"}},{field:"weights",component:"InputNumber",label:"权重",colProps:r,subLabel:"( 选填 )",componentProps:{formatter:e=>e?`${e}%`:"",parser:e=>e.replace("%",""),placeholder:"请输入"}},{field:"target",component:"InputTextArea",label:"目标描述",colProps:r,componentProps:{placeholder:"请输入你的阶段性工作目标",rows:4},required:!0},{field:"metrics",component:"InputTextArea",label:"衡量标准",colProps:r,componentProps:{placeholder:"请输入衡量标准",rows:4},required:!0},{field:"inviteer",component:"Input",label:"邀评人",colProps:{span:8},subLabel:"( 选填 )",componentProps:{placeholder:"请直接 @姓名／工号，最多可邀请 5 人"}},{field:"disclosure",component:"RadioGroup",label:"目标公开",colProps:{span:16},itemProps:{extra:"客户、邀评人默认被分享"},componentProps:{options:[{label:"公开",value:"1"},{label:"部分公开",value:"2"},{label:"不公开",value:"3"}]}},{field:"disclosure",component:"Select",label:" ",colProps:{span:8},show:({model:e})=>e.disclosure==="2",componentProps:{placeholder:"公开给",mode:"multiple",options:[{label:"同事1",value:"1"},{label:"同事2",value:"2"},{label:"同事3",value:"3"}]}}],x=g({name:"FormBasicPage",components:{BasicForm:d,PageWrapper:P},setup(){const{createMessage:e}=f(),[p,{validate:o,setProps:n}]=b({labelCol:{span:8},wrapperCol:{span:15},schemas:v,actionColOptions:{offset:8,span:23},submitButtonOptions:{text:"提交"},submitFunc:s});function s(){return i(this,null,function*(){try{yield o(),n({submitButtonOptions:{loading:!0}}),setTimeout(()=>{n({submitButtonOptions:{loading:!1}}),e.success("提交成功！")},2e3)}catch(u){}})}return{register:p}}});function w(e,p,o,n,s,u){const l=m("BasicForm"),a=m("PageWrapper");return F(),h(a,{title:"基础表单",contentBackground:"",content:" 表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。",contentClass:"p-4"},{default:C(()=>[B(l,{onRegister:e.register},null,8,["onRegister"])]),_:1})}const Z=_(x,[["render",w],["__scopeId","data-v-391920c8"]]);export{Z as default};
