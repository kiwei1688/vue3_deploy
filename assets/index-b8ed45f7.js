import{b as g,d as p,u as _,B as n,p as O,a as h,k as w,w as $,e as v,n as j,f as c,V as N,l as x,_ as C,s as E,g as u,a8 as r,h as R,b5 as b,a9 as S}from"./index-9b92ae7c.js";const k=Symbol("rowContextKey"),K=["start","center","end","space-around","space-between","space-evenly"],B=["top","middle","bottom"],P=g({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:K,default:"start"},align:{type:String,values:B,default:"top"}}),L=p({name:"ElRow"}),A=p({...L,props:P,setup(f){const t=f,l=_("row"),a=n(()=>t.gutter);O(k,{gutter:a});const i=n(()=>{const e={};return t.gutter&&(e.marginRight=e.marginLeft=`-${t.gutter/2}px`),e}),m=n(()=>[l.b(),l.is(`justify-${t.justify}`,t.justify!=="start"),l.is(`align-${t.align}`,t.align!=="top")]);return(e,d)=>(h(),w(x(e.tag),{class:j(c(m)),style:N(c(i))},{default:$(()=>[v(e.$slots,"default")]),_:3},8,["class","style"]))}});var D=C(A,[["__file","/home/runner/work/element-plus/element-plus/packages/components/row/src/row.vue"]]);const G=E(D),I=g({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:u([Number,Object]),default:()=>r({})},sm:{type:u([Number,Object]),default:()=>r({})},md:{type:u([Number,Object]),default:()=>r({})},lg:{type:u([Number,Object]),default:()=>r({})},xl:{type:u([Number,Object]),default:()=>r({})}}),J=p({name:"ElCol"}),T=p({...J,props:I,setup(f){const t=f,{gutter:l}=R(k,{gutter:n(()=>0)}),a=_("col"),i=n(()=>{const e={};return l.value&&(e.paddingLeft=e.paddingRight=`${l.value/2}px`),e}),m=n(()=>{const e=[];return["span","offset","pull","push"].forEach(s=>{const o=t[s];b(o)&&(s==="span"?e.push(a.b(`${t[s]}`)):o>0&&e.push(a.b(`${s}-${t[s]}`)))}),["xs","sm","md","lg","xl"].forEach(s=>{b(t[s])?e.push(a.b(`${s}-${t[s]}`)):S(t[s])&&Object.entries(t[s]).forEach(([o,y])=>{e.push(o!=="span"?a.b(`${s}-${o}-${y}`):a.b(`${s}-${y}`))})}),l.value&&e.push(a.is("guttered")),[a.b(),e]});return(e,d)=>(h(),w(x(e.tag),{class:j(c(m)),style:N(c(i))},{default:$(()=>[v(e.$slots,"default")]),_:3},8,["class","style"]))}});var V=C(T,[["__file","/home/runner/work/element-plus/element-plus/packages/components/col/src/col.vue"]]);const H=E(V);export{H as E,G as a};
