var f=(e,r,l)=>new Promise((c,a)=>{var d=o=>{try{s(l.next(o))}catch(n){a(n)}},t=o=>{try{s(l.throw(o))}catch(n){a(n)}},s=o=>o.done?c(o.value):Promise.resolve(o.value).then(d,t);s((l=l.apply(e,r)).next())});import{B as P}from"./BasicForm-283acb19.js";import"./BasicForm.vue_vue_type_style_index_0_lang-5530a29b.js";import{u as F}from"./useForm-4dc53c5d.js";import{ab as _,u as k,_ as v}from"./index.js";import{P as h}from"./index-905f9d8d.js";import{i as V}from"./system-ff6b78c1.js";import{d as B,a6 as C,Z as q,a7 as y,a8 as i,$ as A,l as u,E as m}from"./vue-b9806415.js";import"./antd-b9afe41d.js";import"./index-66132375.js";import"./useWindowSizeFn-da6b5cad.js";import"./index-e6e43971.js";import"./uuid-31b8b5a4.js";import"./download-9ecd0762.js";import"./base64Conver-39fc0d26.js";import"./index-183a9872.js";import"./useContentViewHeight-bbdf3bf4.js";import"./onMountedOrActivated-b65981ee.js";const b=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},required:!0},{field:"field2",component:"Input",label:"字段2",colProps:{span:8},required:!0},{field:"id",label:"id",required:!0,defaultValue:0,component:"InputNumber",show:!1},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8},required:!0},{field:"field33",component:"DatePicker",label:"字段33",colProps:{span:8},componentProps:{valueFormat:"YYYY-MM-DD"},rules:[{required:!0,type:"string"}]},{field:"field44",component:"InputCountDown",label:"验证码",colProps:{span:8},required:!0},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{mode:"multiple",options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}],onChange:e=>{}},rules:[{required:!0,message:"请输入aa",type:"array"}]},{field:"field441",component:"Input",label:"自定义校验",colProps:{span:8},rules:[{required:!0,validator:(e,r)=>f(void 0,null,function*(){return r?r==="1"?Promise.reject("值不能为1"):Promise.resolve():Promise.reject("值不能为空")}),trigger:"change"}]},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},rules:[{required:!0}]},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},rules:[{required:!0,message:"覆盖默认生成的校验信息"}]},{field:"field8",component:"Input",label:"后端异步验证",colProps:{span:8},helpMessage:["本字段演示异步验证","本地规则：必须填写","后端规则：不能包含admin"],rules:[{required:!0,message:"请输入数据"},{validator(e,r){return new Promise((l,c)=>{V(r).then(()=>l()).catch(a=>{c(a.message||"验证失败")})})}}]}],D=B({components:{BasicForm:P,CollapseContainer:_,PageWrapper:h},setup(){const{createMessage:e}=k(),[r,{validateFields:l,clearValidate:c,getFieldsValue:a,resetFields:d,setFieldsValue:t}]=F({labelWidth:120,schemas:b,actionColOptions:{span:24}});function s(){return f(this,null,function*(){try{const p=yield l()}catch(p){}})}function o(){return f(this,null,function*(){c()})}function n(){const p=a();e.success("values:"+JSON.stringify(p))}function g(){t({field1:1111,field4:["1"],field5:["1"],field7:"1",field33:"2020-12-12",field3:"2020-12-12"})}return{register:r,schemas:b,handleSubmit:p=>{e.success("click search,values:"+JSON.stringify(p))},getFormValues:n,setFormValues:g,validateForm:s,resetValidate:o,resetFields:d}}}),E={class:"mb-4"};function S(e,r,l,c,a,d){const t=C("a-button"),s=C("BasicForm"),o=C("CollapseContainer"),n=C("PageWrapper");return q(),y(n,{title:"表单校验示例"},{default:i(()=>[A("div",E,[u(t,{onClick:e.validateForm,class:"mr-2"},{default:i(()=>[m(" 手动校验表单 ")]),_:1},8,["onClick"]),u(t,{onClick:e.resetValidate,class:"mr-2"},{default:i(()=>[m(" 清空校验信息 ")]),_:1},8,["onClick"]),u(t,{onClick:e.getFormValues,class:"mr-2"},{default:i(()=>[m(" 获取表单值 ")]),_:1},8,["onClick"]),u(t,{onClick:e.setFormValues,class:"mr-2"},{default:i(()=>[m(" 设置表单值 ")]),_:1},8,["onClick"]),u(t,{onClick:e.resetFields,class:"mr-2"},{default:i(()=>[m(" 重置 ")]),_:1},8,["onClick"])]),u(o,{title:"表单校验"},{default:i(()=>[u(s,{onRegister:e.register,onSubmit:e.handleSubmit},null,8,["onRegister","onSubmit"])]),_:1})]),_:1})}const L=v(D,[["render",S]]);export{L as default};
