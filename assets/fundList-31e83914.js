/* empty css             */import{E as K,a as Q}from"./el-col-df12dc3c.js";import{D as W,E as Z,a as x,b as ee,c as te}from"./DialogModal-9e684380.js";import{E as ae,a as le,b as oe}from"./el-form-item-42addf79.js";import"./el-scrollbar-cbd3ff34.js";import"./el-tooltip-9524216f.js";import{E as ne}from"./el-button-849a7448.js";import{d as se,a2 as re,r as s,a1 as ie,X as ue,a as f,c as b,h as m,E as t,l as r,w as l,_ as d,j as U,L as M,O as ce,a9 as de}from"./index-f07c035b.js";import{c as N,b as pe}from"./https-1223c700.js";import"./plugin-vue_export-helper-1cff8a04.js";import"./typescript-defaf979.js";import"./index-36588ac4.js";const me={class:"content-wrap"},fe={class:"content-inner"},_e={class:"content-title"},ve={key:0,class:"tab_wrap flowDialog"},ge={style:{color:"#FF8000"}},he={style:{color:"#0080FF"}},ye={key:0,style:{color:"#00d053"}},be={key:1,style:{color:"#ff0000"}},$e=m("span",{style:{color:"#ff0000"}},null,-1),we={class:"pagination_wrap"},Ce={key:1,class:"tab_wrap"},je=se({__name:"fundList",setup(ke){const{t:g}=re(),u=s([]),_=s([]),E=s([]),h=s([]),j=ie(),A=s(),v=s(""),$=s(!1),D=s(),w=s(1),p=s(5),T=s(0),L=[5,10,15,20],Y="total, sizes, prev, pager, next, jumper";s(),s(),s(!0);const C=async()=>{const e="https://vue3-course-api.hexschool.io/api/royroy-api/admin/products/all";try{const{data:{success:a,products:i}}=await N.get(e);if(console.log("api取得數據 ~~~~~",i),a&&i){h.value=[];for(const[y,n]of Object.entries(i))h.value.push(n);u.value=h.value,_.value=h.value,E.value=h.value,B()}}catch(a){console.error("errrr",a)}};ue(()=>{A.value=j.getUser,C()});const z=()=>{$.value=!0,D.value={}},H=e=>{$.value=!0,D.value=e},I=async e=>{Z.confirm(g("comfirmDel"),g("tip"),{confirmButtonText:g("comfirm"),cancelButtonText:g("cancel"),type:"warning"}).then(async()=>{const a=`https://vue3-course-api.hexschool.io/api/royroy-api/admin/product/${e.id}`;try{await N.delete(a),C()}catch(i){console.error(i)}pe({type:"success",message:g("delSuccess")})}).catch(()=>{})},S=()=>{setTimeout(()=>{const e=E.value.filter(a=>a.title.includes(v.value));u.value=e,_.value=e,E.value=e,B()},500)},V=()=>{v.value="",C()},O=e=>{w.value=1,p.value=e,u.value=_.value.filter((a,i)=>i<p.value)},R=e=>{const a=p.value*(e-1),i=_.value.filter((y,n)=>n>=a);u.value=i.filter((y,n)=>n<p.value)},B=()=>{T.value=_.value.length,w.value=1,p.value=5,u.value=_.value.filter((e,a)=>a<p.value)};return(e,a)=>{const i=de,y=ae,n=ne,k=le,P=oe,c=x,F=ee,X=te,q=K,G=Q;return f(),b(ce,null,[m("div",me,[m("div",fe,[m("div",_e,[t(i,{class:"icons"}),m("span",null,r(e.$t("moneyList.managements")),1)]),u.value.length>0?(f(),b("div",ve,[t(P,{inline:!0},{default:l(()=>[t(k,{label:e.$t("filterTitle")},{default:l(()=>[t(y,{modelValue:v.value,"onUpdate:modelValue":a[0]||(a[0]=o=>v.value=o)},null,8,["modelValue"]),t(n,{type:"success",onClick:S},{default:l(()=>[d(r(e.$t("search")),1)]),_:1}),t(n,{type:"danger",onClick:V},{default:l(()=>[d(r(e.$t("reset")),1)]),_:1})]),_:1},8,["label"]),t(k,{class:"btn-right"},{default:l(()=>[t(n,{type:"primary",onClick:z},{default:l(()=>[d(r(e.$t("add")),1)]),_:1})]),_:1})]),_:1}),u.value.length>0?(f(),U(F,{key:0,border:"",data:u.value},{default:l(()=>[t(c,{flexd:"",type:"index",label:e.$t("serialNUm"),align:"center",width:"50"},null,8,["label"]),t(c,{prop:"category",label:e.$t("prdType"),align:"center",width:"90"},null,8,["label"]),t(c,{prop:"title",label:e.$t("prdTitle"),align:"center",width:"180"},null,8,["label"]),t(c,{prop:"origin_price",label:e.$t("oPrice"),align:"center",width:"100"},{default:l(({row:o})=>[m("span",ge,r(o.origin_price),1)]),_:1},8,["label"]),t(c,{prop:"price",label:e.$t("sPrice"),align:"center",width:"100"},{default:l(({row:o})=>[m("span",he,r(o.price),1)]),_:1},8,["label"]),t(c,{prop:"description",label:e.$t("description"),align:"center",width:"auto"},null,8,["label"]),t(c,{prop:"is_enabled",label:e.$t("enables"),align:"center",width:"90"},{default:l(({row:o})=>[o.is_enabled?(f(),b("span",ye,r(e.$t("isStock")),1)):(f(),b("span",be,r(e.$t("noStock")),1))]),_:1},8,["label"]),t(c,{prop:"date",label:e.$t("time"),align:"center",width:"150"},{default:l(({row:o})=>[$e,d(r(e.$day(new Date().getTime()).format("YYYY-MM-DD HH:mm:ss")),1)]),_:1},8,["label"]),t(c,{flexd:"right",prop:"operation",label:e.$t("operate"),align:"center",width:"150"},{default:l(o=>[t(n,{size:"small",type:"success",onClick:J=>H(o.row)},{default:l(()=>[d(r(e.$t("edit")),1)]),_:2},1032,["onClick"]),t(n,{size:"small",type:"danger",onClick:J=>I(o.row)},{default:l(()=>[d(r(e.$t("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])):M("",!0),u.value.length>0?(f(),U(G,{key:1},{default:l(()=>[t(q,{span:24},{default:l(()=>[m("div",we,[t(X,{"current-page":w.value,"onUpdate:currentPage":a[1]||(a[1]=o=>w.value=o),"page-size":p.value,"onUpdate:pageSize":a[2]||(a[2]=o=>p.value=o),"page-sizes":L,small:"small",layout:Y,total:T.value,onSizeChange:O,onCurrentChange:R},null,8,["current-page","page-size","total"])])]),_:1})]),_:1})):M("",!0)])):(f(),b("div",Ce,[t(P,{inline:!0},{default:l(()=>[t(k,{label:e.$t("filterTitle")},{default:l(()=>[t(y,{modelValue:v.value,"onUpdate:modelValue":a[3]||(a[3]=o=>v.value=o)},null,8,["modelValue"]),t(n,{type:"success",onClick:S},{default:l(()=>[d(r(e.$t("search")),1)]),_:1}),t(n,{type:"danger",onClick:V},{default:l(()=>[d(r(e.$t("reset")),1)]),_:1})]),_:1},8,["label"]),t(k,{class:"btn-right"},{default:l(()=>[t(n,{type:"primary",onClick:z},{default:l(()=>[d(r(e.$t("add")),1)]),_:1})]),_:1})]),_:1}),t(F)]))])]),t(W,{show:$.value,onCloseModal:a[4]||(a[4]=o=>$.value=!1),onHandleUpdateProfiles:C,getEditData:D.value,type:"flowDialog"},null,8,["show","getEditData"])],64)}}});export{je as default};