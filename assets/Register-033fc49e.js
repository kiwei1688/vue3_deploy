/* empty css             */import{E as y,a as E,u as h,v as x,b as U}from"./el-form-item-42addf79.js";import{E as q}from"./el-button-849a7448.js";import"./el-scrollbar-cbd3ff34.js";import{c as F,b as R}from"./https-1223c700.js";import{d as k,r as p,a6 as B,R as C,D as N,a as P,c as S,h as u,E as l,w as t,_ as i,l as c}from"./index-f07c035b.js";/* empty css                   */import"./plugin-vue_export-helper-1cff8a04.js";import"./index-36588ac4.js";import"./typescript-defaf979.js";const $={class:"register"},D={class:"form-container"},I={class:"manage-tip"},A=u("span",{class:"title"},"後台管理系統",-1),M={class:"tiparea"},Y=k({__name:"Register",setup(O){const m=p(),_=B(),a=p({username:"米斯特吴",email:"27732357@qq.com",password:"321321",password2:"321321",identity:"管理员"}),g=C({username:[{required:!0,message:"用戶名不能為空",trigger:"change"},{min:2,max:30,message:"長度在2到30個字符之間",trigger:"blur"}],email:[{type:"email",required:!0,message:"信箱格式錯誤",trigger:"blur"}],password:[{required:!0,message:"密碼不能為空",trigger:"blur"},{min:6,max:30,message:"長度在6到30個字符之間",trigger:"blur"}],password2:[{min:6,max:30,message:"長度在6到30個字符之間",trigger:"blur"},{validator:(n,e,s)=>{e===""?s(new Error("請重新輸入密碼")):e!==a.value.password?s(new Error("兩次密碼輸入不一致")):s()},trigger:"blur"}]}),f=n=>{n&&n.validate(async e=>{if(e){const s="/api/users/register";try{const{data:r}=await F.post(s,a.value);R({message:"用戶註冊成功!.",type:"success"}),_.push({path:"/"})}catch(r){console.error("errrr",r)}}else return console.log("err submit"),!1})};return(n,e)=>{const s=y,r=E,d=h,v=x,b=q,w=N("router-link"),V=U;return P(),S("div",$,[u("section",D,[u("div",I,[A,l(V,{rules:g,ref_key:"ruleFormRef",ref:m,model:a.value,class:"registerForm","label-width":"80px"},{default:t(()=>[l(r,{label:"用戶名",prop:"username"},{default:t(()=>[l(s,{modelValue:a.value.username,"onUpdate:modelValue":e[0]||(e[0]=o=>a.value.username=o),placeholder:"請輸入用戶名"},null,8,["modelValue"])]),_:1}),l(r,{label:"信箱",prop:"email"},{default:t(()=>[l(s,{modelValue:a.value.email,"onUpdate:modelValue":e[1]||(e[1]=o=>a.value.email=o),placeholder:"請輸入信箱"},null,8,["modelValue"])]),_:1}),l(r,{label:"密碼",prop:"password"},{default:t(()=>[l(s,{modelValue:a.value.password,"onUpdate:modelValue":e[2]||(e[2]=o=>a.value.password=o),placeholder:"請輸入密碼",type:"password"},null,8,["modelValue"])]),_:1}),l(r,{label:"確認密碼",prop:"password2"},{default:t(()=>[l(s,{modelValue:a.value.password2,"onUpdate:modelValue":e[3]||(e[3]=o=>a.value.password2=o),placeholder:"請確認密碼",type:"password"},null,8,["modelValue"])]),_:1}),l(r,{label:"選擇身分"},{default:t(()=>[l(v,{modelValue:a.value.identity,"onUpdate:modelValue":e[4]||(e[4]=o=>a.value.identity=o),placeholder:"選擇身分"},{default:t(()=>[l(d,{label:"管理員",value:"manager"}),l(d,{label:"員工",value:"employee"})]),_:1},8,["modelValue"])]),_:1}),l(r,null,{default:t(()=>[l(b,{onClick:e[5]||(e[5]=o=>f(m.value)),class:"submit-btn"},{default:t(()=>[i("註冊")]),_:1})]),_:1}),u("div",M,[u("p",null,[i(c(n.$t("hasAcc")),1),l(w,{to:"/login"},{default:t(()=>[i(c(n.$t("login")),1)]),_:1})])])]),_:1},8,["rules","model"])])])])}}});export{Y as default};
