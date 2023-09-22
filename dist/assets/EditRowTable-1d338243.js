var m=(i,a,n)=>new Promise((l,d)=>{var p=e=>{try{o(n.next(e))}catch(t){d(t)}},s=e=>{try{o(n.throw(e))}catch(t){d(t)}},o=e=>e.done?l(e.value):Promise.resolve(e.value).then(p,s);o((n=n.apply(i,a)).next())});import{B as b}from"./BasicTable-cd05a680.js";import{T as h}from"./BasicForm.vue_vue_type_style_index_0_lang-8c66020c.js";import"./TableImg.vue_vue_type_style_index_0_lang-0c7200ee.js";import{u as R}from"./useTable-65fd89bc.js";import{o as c}from"./select-93eac05e.js";import{d as v}from"./table-9286518d.js";import{t as g}from"./tree-164e6087.js";import{u as x,_ as I}from"./index.js";import{d as k}from"./antd-57936705.js";import{d as T,f as _,a6 as f,Z as w,_ as y,l as A,a8 as E,a7 as P,aa as F}from"./vue-b9806415.js";import"./BasicForm-152e2559.js";import"./index-7caba1aa.js";import"./useWindowSizeFn-da6b5cad.js";import"./useForm-4dc53c5d.js";import"./uuid-31b8b5a4.js";import"./onMountedOrActivated-b65981ee.js";import"./index-456abdd7.js";import"./download-9ecd0762.js";import"./base64Conver-39fc0d26.js";import"./index-acb772bd.js";import"./sortable.esm-4ae27e0b.js";const M=[{title:"输入框",dataIndex:"name-group",editRow:!0,children:[{title:"输入框",dataIndex:"name",editRow:!0,editComponentProps:{prefix:"$"},width:150},{title:"默认输入状态",dataIndex:"name7",editRow:!0,width:150},{title:"输入框校验",dataIndex:"name1",editRow:!0,align:"left",editRule:!0,width:150},{title:"输入框函数校验",dataIndex:"name2",editRow:!0,align:"right",editRule:i=>m(void 0,null,function*(){return i==="2"?"不能输入该值":""})},{title:"数字输入框",dataIndex:"id",editRow:!0,editRule:!0,editComponent:"InputNumber",width:150}]},{title:"下拉框",dataIndex:"name3",editRow:!0,editComponent:"Select",editComponentProps:{options:[{label:"Option1",value:"1"},{label:"Option2",value:"2"},{label:"Option3",value:"3"}]},width:200},{title:"远程下拉",dataIndex:"name4",editRow:!0,editComponent:"ApiSelect",editComponentProps:{api:c,resultField:"list",labelField:"name",valueField:"id"},width:200},{title:"远程下拉树",dataIndex:"name8",editRow:!0,editComponent:"ApiTreeSelect",editRule:!1,editComponentProps:{api:g,resultField:"list"},width:200},{title:"日期选择",dataIndex:"date",editRow:!0,editComponent:"DatePicker",editComponentProps:{valueFormat:"YYYY-MM-DD",format:"YYYY-MM-DD"},width:150},{title:"时间选择",dataIndex:"time",editRow:!0,editComponent:"TimePicker",editComponentProps:{valueFormat:"HH:mm",format:"HH:mm"},width:100},{title:"勾选框",dataIndex:"name5",editRow:!0,editComponent:"Checkbox",editValueMap:i=>i?"是":"否",width:100},{title:"开关",dataIndex:"name6",editRow:!0,editComponent:"Switch",editValueMap:i=>i?"开":"关",width:100},{title:"单选框",dataIndex:"radio1",editRow:!0,editComponent:"RadioGroup",editComponentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},width:200},{title:"单选按钮框",dataIndex:"radio2",editRow:!0,editComponent:"RadioButtonGroup",editComponentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},width:200},{title:"远程单选框",dataIndex:"radio3",editRow:!0,editComponent:"ApiRadioGroup",editComponentProps:{api:c,resultField:"list",labelField:"name",valueField:"id"},width:200}],B=T({components:{BasicTable:b,TableAction:h},setup(){const{createMessage:i}=x(),a=_(""),[n]=R({title:"可编辑行示例",titleHelpMessage:["本例中修改[数字输入框]这一列时，同一行的[远程下拉]列的当前编辑数据也会同步发生改变"],api:v,columns:M,showIndexColumn:!1,showTableSetting:!0,tableSetting:{fullScreen:!0},actionColumn:{width:160,title:"Action",dataIndex:"action"}});function l(e){var t;a.value=e.key,(t=e.onEdit)==null||t.call(e,!0)}function d(e){var t;a.value="",(t=e.onEdit)==null||t.call(e,!1,!1)}function p(e){return m(this,null,function*(){var r,u;if(i.loading({content:"正在保存...",duration:0,key:"saving"}),yield(r=e.onValid)==null?void 0:r.call(e))try{const C=k(e.editValueRefs);(yield(u=e.onEdit)==null?void 0:u.call(e,!1,!0))&&(a.value=""),i.success({content:"数据已保存",key:"saving"})}catch(C){i.error({content:"保存失败",key:"saving"})}else i.error({content:"请填写正确的数据",key:"saving"})})}function s(e,t){return e.editable?[{label:"保存",onClick:p.bind(null,e,t)},{label:"取消",popConfirm:{title:"是否取消编辑",confirm:d.bind(null,e,t)}}]:[{label:"编辑",disabled:a.value?a.value!==e.key:!1,onClick:l.bind(null,e)}]}function o({column:e,value:t,record:r}){e.dataIndex==="id"&&(r.editValueRefs.name4.value=`${t}`)}return{registerTable:n,handleEdit:l,createActions:s,onEditChange:o}}}),S={class:"p-4"};function Y(i,a,n,l,d,p){const s=f("TableAction"),o=f("BasicTable");return w(),y("div",S,[A(o,{onRegister:i.registerTable,onEditChange:i.onEditChange},{bodyCell:E(({column:e,record:t})=>[e.key==="action"?(w(),P(s,{key:0,actions:i.createActions(t,e)},null,8,["actions"])):F("",!0)]),_:1},8,["onRegister","onEditChange"])])}const oe=I(B,[["render",Y]]);export{oe as default};
