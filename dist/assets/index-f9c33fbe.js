import{P as A}from"./index-905f9d8d.js";import{ab as h,aa as I,_ as E}from"./index.js";import{C as y,a as B}from"./index-76d8a12b.js";import{u as D}from"./upload-35218076.js";import{h as k}from"./header-55b09394.js";import{d as w,f as n,a6 as p,Z as s,a7 as $,a8 as u,l as o,$ as c,_ as i,aa as l,a0 as F}from"./vue-b9806415.js";import"./useContentViewHeight-bbdf3bf4.js";import"./useWindowSizeFn-da6b5cad.js";import"./onMountedOrActivated-b65981ee.js";import"./antd-b9afe41d.js";import"./index-66132375.js";import"./base64Conver-39fc0d26.js";const P=w({components:{PageWrapper:A,CropperImage:y,CollapseContainer:h,CropperAvatar:B},setup(){var a;const e=n(""),d=n(""),m=n(""),C=n(""),g=I(),v=n(((a=g.getUserInfo)==null?void 0:a.avatar)||"");function _({imgBase64:t,imgInfo:f}){e.value=f,d.value=t}function r({imgBase64:t,imgInfo:f}){m.value=f,C.value=t}return{img:k,info:e,circleInfo:m,cropperImg:d,circleImg:C,handleCropend:_,handleCircleCropend:r,avatar:v,uploadApi:D}}});const N={class:"container p-4"},S={class:"cropper-container mr-10"},V=["src"],W={key:0},U={class:"container p-4"},b={class:"cropper-container mr-10"},Z=["src"],j={key:0};function q(e,d,m,C,g,v){const _=p("CropperAvatar"),r=p("CollapseContainer"),a=p("CropperImage"),t=p("PageWrapper");return s(),$(t,{title:"图片裁剪示例",content:"需要开启测试接口服务才能进行上传测试！"},{default:u(()=>[o(r,{title:"头像裁剪"},{default:u(()=>[o(_,{uploadApi:e.uploadApi,value:e.avatar},null,8,["uploadApi","value"])]),_:1}),o(r,{title:"矩形裁剪",class:"my-4"},{default:u(()=>[c("div",N,[c("div",S,[o(a,{ref:"refCropper",src:e.img,onCropend:e.handleCropend,style:{width:"40vw"}},null,8,["src","onCropend"])]),e.cropperImg?(s(),i("img",{key:0,src:e.cropperImg,class:"croppered",alt:""},null,8,V)):l("",!0)]),e.cropperImg?(s(),i("p",W,"裁剪后图片信息："+F(e.info),1)):l("",!0)]),_:1}),o(r,{title:"圆形裁剪"},{default:u(()=>[c("div",U,[c("div",b,[o(a,{ref:"refCropper",src:e.img,onCropend:e.handleCircleCropend,style:{width:"40vw"},circled:""},null,8,["src","onCropend"])]),e.circleImg?(s(),i("img",{key:0,src:e.circleImg,class:"croppered"},null,8,Z)):l("",!0)]),e.circleImg?(s(),i("p",j,"裁剪后图片信息："+F(e.circleInfo),1)):l("",!0)]),_:1})]),_:1})}const Y=E(P,[["render",q],["__scopeId","data-v-20a70d07"]]);export{Y as default};
