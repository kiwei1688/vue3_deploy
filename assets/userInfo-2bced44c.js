import"./base-a89e4049.js";import{a as r,E as u}from"./el-col-ca3b3be2.js";import{_ as d,a as p}from"./avatar02-afa338f2.js";import{d as f,_ as m,o,B as t,s as a,w as n,H as s,a as i,Z as c}from"./index-a0ee5d16.js";import"./typescript-defaf979.js";const h={class:"info-container"},v={class:"infoUser"},y={key:0,src:d},w={key:1,src:p},g={class:"userinfo"},x={class:"user-infoWrap"},k={class:"user-item"},B=s("i",{class:"fa fa-user"},null,-1),E=s("span",null,"姓 名 :",-1),C=s("div",{class:"user-item"},[s("i",{class:"fa fa-envelope"}),s("span",null,"信 箱 :"),s("span",null,"roy6874ya@yahoo.com.tw")],-1),V=s("div",{class:"user-item"},[s("i",{class:"fa fa-phone"}),s("span",null,"手 機 :"),s("span",null,"0977098***")],-1),N={class:"user-item"},S=s("i",{class:"fa fa-cog"},null,-1),b=s("span",null,"身 份 :",-1),j=s("div",{class:"user-item"},[s("i",{class:"fa fa-file-text"}),s("span",null,"描 述 :"),s("span",null,"welcome come to my Vue3 website!!!")],-1),q=f({__name:"userInfo",setup(A){const e=m();return(D,H)=>{const l=u,_=r;return o(),t("div",h,[a(_,{class:"info-content",type:"flex",justify:"center"},{default:n(()=>[a(l,{span:6},{default:n(()=>[s("div",v,[i(e).user.avatar?(o(),t("img",y)):(o(),t("img",w))])]),_:1}),a(l,{span:18},{default:n(()=>[s("div",g,[s("div",x,[s("div",k,[B,E,s("span",null,c(i(e).user.name),1)]),C,V,s("div",N,[S,b,s("span",null,c(i(e).user.identity==="manager"?"管理者":"員 工"),1)]),j])])]),_:1})]),_:1})])}}});export{q as default};