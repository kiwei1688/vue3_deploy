/* empty css             */import{E as S}from"./el-button-849a7448.js";import{a as h,c as m,e as r,$,d as O,E as n,w as o,_ as s,N as k,r as y,R as I,z as L,h as t,l as _,a8 as N,aa as T,ab as V}from"./index-f07c035b.js";import"./index-36588ac4.js";import"./plugin-vue_export-helper-1cff8a04.js";function E(e,l){return h(),m("div",null,[r(e.$slots,"default",{},void 0,!0),r(e.$slots,"sign",{},void 0,!0),r(e.$slots,"smallTurnip",{},void 0,!0),r(e.$slots,"bigTurn",{class:"reBor",message:"我是夢北"},void 0,!0)])}const H={},d=$(H,[["render",E],["__scopeId","data-v-67f52612"]]),M=O({__name:"propsCom",props:{foo:{type:String,require:!0},isOpen:Boolean},emits:["handleClose","handleOpen"],setup(e,{emit:l}){const a=e,c=()=>{l("handleClose",!1),console.log("close ====",a.foo)},p=()=>{l("handleOpen",!0),console.log("open ====",a.isOpen)};return(v,C)=>{const u=S;return h(),m("div",null,[n(u,{onClick:k(c,["prevent"])},{default:o(()=>[s("取消")]),_:1},8,["onClick"]),n(u,{onClick:k(p,["prevent"])},{default:o(()=>[s("確認")]),_:1},8,["onClick"])])}}}),g=e=>(T("data-v-da5819b1"),e=e(),V(),e),j={class:"content-wrap"},q={class:"content-inner"},z={class:"content-title"},D={class:"content-box"},J=g(()=>t("hr",null,null,-1)),R=g(()=>t("hr",null,null,-1)),A=g(()=>t("hr",null,null,-1)),F=O({__name:"fundList2",setup(e){const l=y("smallTurnip"),a=y("哈哈哈哈~~~ 展示出來"),c=I({list:["1111","2222"],listLength:L(()=>{c.list.length})}),p=()=>{v()},v=()=>{a.value="哈哈哈 ~~~ 被更改了喔"},C=i=>{console.log("~~~~~ 處理close",i)},u=i=>{console.log("~~~~~ 處理open",i)},w=()=>{c.list.push("123456"),console.log(c.list)};return(i,G)=>{const B=N,b=S;return h(),m("div",j,[t("div",q,[t("div",z,[n(B,{class:"icons"}),t("span",null,_(i.$t("moneyList.menoyShow")),1),t("div",D,[n(d,null,{default:o(()=>[s("Hello Juejin")]),_:1}),n(d,null,{sign:o(()=>[s(_(a.value),1)]),_:1}),n(d,null,{[l.value]:o(()=>[s("動態插槽練習")]),_:2},1024),n(b,{onClick:p},{default:o(()=>[s("更改數據")]),_:1}),J,n(d,null,{default:o(({personName:f,age:x})=>[s("我名字 "+_(f)+" + "+_(x),1)]),_:1}),n(d,null,{bigTurn:o(f=>[s(_(f.message),1)]),_:1}),R,n(M,{onHandleClose:C,onHandleOpen:u,foo:1234,isOpen:!0}),A,n(b,{type:"danger",onClick:w},{default:o(()=>[s("輸入")]),_:1})])])])])}}});const X=$(F,[["__scopeId","data-v-da5819b1"]]);export{X as default};
