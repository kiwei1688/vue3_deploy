import{b,d as p,u as _,z as l,p as k,a as w,j as h,w as $,e as v,n as j,f as c,P as N,k as C,q as x,g as r,i as O,aQ as g,Z as S}from"./index-f07c035b.js";import{_ as E}from"./plugin-vue_export-helper-1cff8a04.js";import{m as u}from"./typescript-defaf979.js";const R=Symbol("rowContextKey"),K=["start","center","end","space-around","space-between","space-evenly"],P=["top","middle","bottom"],B=b({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:K,default:"start"},align:{type:String,values:P,default:"top"}}),L=p({name:"ElRow"}),q=p({...L,props:B,setup(f){const t=f,o=_("row"),a=l(()=>t.gutter);k(R,{gutter:a});const i=l(()=>{const e={};return t.gutter&&(e.marginRight=e.marginLeft=`-${t.gutter/2}px`),e}),m=l(()=>[o.b(),o.is(`justify-${t.justify}`,t.justify!=="start"),o.is(`align-${t.align}`,t.align!=="top")]);return(e,d)=>(w(),h(C(e.tag),{class:j(c(m)),style:N(c(i))},{default:$(()=>[v(e.$slots,"default")]),_:3},8,["class","style"]))}});var A=E(q,[["__file","/home/runner/work/element-plus/element-plus/packages/components/row/src/row.vue"]]);const H=x(A),D=b({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:r([Number,Object]),default:()=>u({})},sm:{type:r([Number,Object]),default:()=>u({})},md:{type:r([Number,Object]),default:()=>u({})},lg:{type:r([Number,Object]),default:()=>u({})},xl:{type:r([Number,Object]),default:()=>u({})}}),I=p({name:"ElCol"}),J=p({...I,props:D,setup(f){const t=f,{gutter:o}=O(R,{gutter:l(()=>0)}),a=_("col"),i=l(()=>{const e={};return o.value&&(e.paddingLeft=e.paddingRight=`${o.value/2}px`),e}),m=l(()=>{const e=[];return["span","offset","pull","push"].forEach(s=>{const n=t[s];g(n)&&(s==="span"?e.push(a.b(`${t[s]}`)):n>0&&e.push(a.b(`${s}-${t[s]}`)))}),["xs","sm","md","lg","xl"].forEach(s=>{g(t[s])?e.push(a.b(`${s}-${t[s]}`)):S(t[s])&&Object.entries(t[s]).forEach(([n,y])=>{e.push(n!=="span"?a.b(`${s}-${n}-${y}`):a.b(`${s}-${y}`))})}),o.value&&e.push(a.is("guttered")),[a.b(),e]});return(e,d)=>(w(),h(C(e.tag),{class:j(c(m)),style:N(c(i))},{default:$(()=>[v(e.$slots,"default")]),_:3},8,["class","style"]))}});var Q=E(J,[["__file","/home/runner/work/element-plus/element-plus/packages/components/col/src/col.vue"]]);const M=x(Q);export{M as E,H as a};