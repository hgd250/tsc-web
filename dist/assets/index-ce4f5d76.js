import{B as T}from"./BasicTable-37d1e4a1.js";import"./BasicForm.vue_vue_type_style_index_0_lang-9cb27bc3.js";import"./TableImg.vue_vue_type_style_index_0_lang-d527ac40.js";import{u as h}from"./useTable-65fd89bc.js";import{P as g}from"./index-962a8b9c.js";import{refundTimeTableSchema as y,refundTimeTableData as k}from"./data-6a8c2004.js";import{a8 as c,K as f,E as v,O as _,N as i,a5 as r}from"./antd-0fea3d6a.js";import{d as x,a6 as l,Z as P,a7 as X,a8 as e,l as u,E as t,$ as n}from"./vue-b9806415.js";import{_ as N}from"./index.js";import"./BasicForm-73e193f4.js";import"./index-d3aaf0b8.js";import"./useWindowSizeFn-da6b5cad.js";import"./useForm-4dc53c5d.js";import"./uuid-31b8b5a4.js";import"./onMountedOrActivated-b65981ee.js";import"./index-85a43704.js";import"./download-9ecd0762.js";import"./base64Conver-39fc0d26.js";import"./index-01cbc176.js";import"./sortable.esm-4ae27e0b.js";import"./useContentViewHeight-bbdf3bf4.js";const S=x({components:{BasicTable:T,PageWrapper:g,[c.name]:c,[f.name]:f,Empty:v,[_.name]:_,[_.Item.name]:_.Item,[i.name]:i,[i.Step.name]:i.Step,[r.name]:r,[r.TabPane.name]:r.TabPane},setup(){const[d]=h({title:"退货进度",columns:y,pagination:!1,dataSource:k,showIndexColumn:!1,scroll:{y:300}});return{registerTimeTable:d}}}),$={class:"pt-4 m-4 desc-wrap"},V=n("a",null,"12421",-1),w=n("div",null,"Vben",-1),I=n("p",null,"2016-12-12 12:32",-1),W=n("p",null,"Chad",-1),z=n("h4",null,"信息组",-1);function R(d,Y,K,M,O,Z){const E=l("a-button"),m=l("a-tab-pane"),D=l("a-tabs"),a=l("a-descriptions-item"),o=l("a-descriptions"),s=l("a-step"),C=l("a-steps"),F=l("a-card"),p=l("a-divider"),b=l("Empty"),B=l("BasicTable"),A=l("PageWrapper");return P(),X(A,{title:"单号：234231029431",contentBackground:""},{extra:e(()=>[u(E,null,{default:e(()=>[t(" 操作一 ")]),_:1}),u(E,null,{default:e(()=>[t(" 操作二 ")]),_:1}),u(E,{type:"primary"},{default:e(()=>[t(" 主操作 ")]),_:1})]),footer:e(()=>[u(D,{"default-active-key":"1"},{default:e(()=>[u(m,{key:"1",tab:"详情"}),u(m,{key:"2",tab:"规则"})]),_:1})]),default:e(()=>[n("div",$,[u(o,{size:"small",column:2},{default:e(()=>[u(a,{label:"创建人"},{default:e(()=>[t(" 曲丽丽 ")]),_:1}),u(a,{label:"订购产品"},{default:e(()=>[t(" XX 服务 ")]),_:1}),u(a,{label:"创建时间"},{default:e(()=>[t(" 2017-01-10 ")]),_:1}),u(a,{label:"关联单据"},{default:e(()=>[V]),_:1}),u(a,{label:"生效日期"},{default:e(()=>[t(" 2017-07-07 ~ 2017-08-08 ")]),_:1}),u(a,{label:"备注"},{default:e(()=>[t(" 请于两个工作日内确认 ")]),_:1})]),_:1}),u(F,{title:"流程进度",bordered:!1},{default:e(()=>[u(C,{current:1,"progress-dot":"",size:"small"},{default:e(()=>[u(s,{title:"创建项目"},{description:e(()=>[w,I]),_:1}),u(s,{title:"部门初审"},{description:e(()=>[W]),_:1}),u(s,{title:"财务复核"}),u(s,{title:"完成"})]),_:1})]),_:1}),u(F,{title:"用户信息",bordered:!1,class:"mt-5"},{default:e(()=>[u(o,{column:3},{default:e(()=>[u(a,{label:"用户姓名"},{default:e(()=>[t(" 付小小 ")]),_:1}),u(a,{label:"会员卡号"},{default:e(()=>[t(" XX 32943898021309809423 ")]),_:1}),u(a,{label:"身份证"},{default:e(()=>[t(" 3321944288191034921 ")]),_:1}),u(a,{label:"联系方式"},{default:e(()=>[t(" 18112345678 ")]),_:1}),u(a,{label:"联系地址",span:2},{default:e(()=>[t(" 曲丽丽 18100000000 浙江省杭州市西湖区黄姑山路工专路交叉路口 ")]),_:1})]),_:1}),u(o,{title:"信息组",column:3},{default:e(()=>[u(a,{label:"某某数据"},{default:e(()=>[t(" 111 ")]),_:1}),u(a,{label:"该数据更新时间"},{default:e(()=>[t(" 2017-08-08 ")]),_:1}),u(a,{label:"某某数据"},{default:e(()=>[t(" 725 ")]),_:1}),u(a,{label:"该数据更新时间"},{default:e(()=>[t(" 2017-08-08 ")]),_:1})]),_:1}),z,u(F,{title:"多层级信息组"},{default:e(()=>[u(o,{title:"组名称",column:3},{default:e(()=>[u(a,{label:"负责人"},{default:e(()=>[t(" 林东东 ")]),_:1}),u(a,{label:"角色码"},{default:e(()=>[t(" 1234567 ")]),_:1}),u(a,{label:"所属部门"},{default:e(()=>[t(" XX公司 - YY部 ")]),_:1}),u(a,{label:"过期时间"},{default:e(()=>[t(" 2017-08-08 ")]),_:1}),u(a,{label:"描述",span:2},{default:e(()=>[t(" 这段描述很长很长很长很长很长很长很长很长很长很长很长很长很长很长... ")]),_:1})]),_:1}),u(p),u(o,{title:"组名称",column:1},{default:e(()=>[u(a,{label:"学名"},{default:e(()=>[t(" Citrullus lanatus (Thunb.) Matsum. et Nakai一年生蔓生藤本；茎、枝粗壮，具明显的棱。卷须较粗.. ")]),_:1})]),_:1}),u(p),u(o,{title:"组名称",column:1},{default:e(()=>[u(a,{label:"负责人"},{default:e(()=>[t(" 付小小 ")]),_:1}),u(a,{label:"角色码"},{default:e(()=>[t(" 1234568 ")]),_:1})]),_:1})]),_:1})]),_:1}),u(F,{title:"用户近半年来电记录",class:"my-5"},{default:e(()=>[u(b)]),_:1}),u(B,{onRegister:d.registerTimeTable},null,8,["onRegister"])])]),_:1})}const Eu=N(S,[["render",R]]);export{Eu as default};
