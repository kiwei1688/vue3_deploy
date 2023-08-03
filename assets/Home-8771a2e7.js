import{_ as te}from"./base-a89e4049.js";import{E as Le,a as Ae}from"./el-col-0835952d.js";import{E as M,u as hn,c as le,a as _n,b as Ue,d as bn,e as De,O as yn,w as We,F as wn,t as Ee,f as In,i as Ye,g as Cn,h as En}from"./el-scrollbar-4f04b271.js";import{u as Ze,i as ge,E as Qe,a as fe,b as Mn,c as $n,d as ye,r as Se,h as Tn,T as kn,e as Sn,f as Ve}from"./el-button-a05ee2b1.js";import{_ as On,a as Nn}from"./avatar02-afa338f2.js";import{d as z,u as oe,o as $,c as Z,w as d,r as D,m as ue,t as Pn,a as j,T as Xe,b as k,p as se,i as A,e as he,f as Me,g as de,h as ne,j as v,k as Bn,l as ie,n as pe,q as L,s as _,v as Fn,x as Rn,y as en,z as nn,A as Ln,B as Q,C as An,D as ce,E as Pe,F as _e,G as Dn,H as V,I as Be,J as Fe,K as re,L as zn,M as on,N as be,O as Kn,P as $e,Q as Y,R as me,S as Gn,U as Hn,V as Un,W as Wn,X as Yn,Y as ae,Z as ee,_ as Vn,$ as Re,a0 as jn,a1 as je,a2 as Je,a3 as Jn,a4 as xn}from"./index-5599dcdb.js";/* empty css                   */import{c as tn,t as Ie,f as qn}from"./el-tooltip-091b13d5.js";import{m as Zn}from"./typescript-defaf979.js";const Qn=z({name:"ElCollapseTransition"}),Xn=z({...Qn,setup(e){const n=oe("collapse-transition"),t={beforeEnter(o){o.dataset||(o.dataset={}),o.dataset.oldPaddingTop=o.style.paddingTop,o.dataset.oldPaddingBottom=o.style.paddingBottom,o.style.maxHeight=0,o.style.paddingTop=0,o.style.paddingBottom=0},enter(o){o.dataset.oldOverflow=o.style.overflow,o.scrollHeight!==0?(o.style.maxHeight=`${o.scrollHeight}px`,o.style.paddingTop=o.dataset.oldPaddingTop,o.style.paddingBottom=o.dataset.oldPaddingBottom):(o.style.maxHeight=0,o.style.paddingTop=o.dataset.oldPaddingTop,o.style.paddingBottom=o.dataset.oldPaddingBottom),o.style.overflow="hidden"},afterEnter(o){o.style.maxHeight="",o.style.overflow=o.dataset.oldOverflow},beforeLeave(o){o.dataset||(o.dataset={}),o.dataset.oldPaddingTop=o.style.paddingTop,o.dataset.oldPaddingBottom=o.style.paddingBottom,o.dataset.oldOverflow=o.style.overflow,o.style.maxHeight=`${o.scrollHeight}px`,o.style.overflow="hidden"},leave(o){o.scrollHeight!==0&&(o.style.maxHeight=0,o.style.paddingTop=0,o.style.paddingBottom=0)},afterLeave(o){o.style.maxHeight="",o.style.overflow=o.dataset.oldOverflow,o.style.paddingTop=o.dataset.oldPaddingTop,o.style.paddingBottom=o.dataset.oldPaddingBottom}};return(o,l)=>($(),Z(Xe,ue({name:j(n).b()},Pn(t)),{default:d(()=>[D(o.$slots,"default")]),_:3},16,["name"]))}});var Ce=te(Xn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/collapse-transition/src/collapse-transition.vue"]]);Ce.install=e=>{e.component(Ce.name,Ce)};const eo=Ce,no=z({inheritAttrs:!1});function oo(e,n,t,o,l,m){return D(e.$slots,"default")}var to=te(no,[["render",oo],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection.vue"]]);const lo=z({name:"ElCollectionItem",inheritAttrs:!1});function so(e,n,t,o,l,m){return D(e.$slots,"default")}var ao=te(lo,[["render",so],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection-item.vue"]]);const ln="data-el-collection-item",sn=e=>{const n=`El${e}Collection`,t=`${n}Item`,o=Symbol(n),l=Symbol(t),m={...to,name:n,setup(){const i=k(null),s=new Map;se(o,{itemMap:s,getItems:()=>{const h=j(i);if(!h)return[];const f=Array.from(h.querySelectorAll(`[${ln}]`));return[...s.values()].sort((a,y)=>f.indexOf(a.ref)-f.indexOf(y.ref))},collectionRef:i})}},r={...ao,name:t,setup(i,{attrs:s}){const u=k(null),h=A(o,void 0);se(l,{collectionItemRef:u}),he(()=>{const f=j(u);f&&h.itemMap.set(f,{ref:f,...s})}),Me(()=>{const f=j(u);h.itemMap.delete(f)})}};return{COLLECTION_INJECTION_KEY:o,COLLECTION_ITEM_INJECTION_KEY:l,ElCollection:m,ElCollectionItem:r}},ro=de({style:{type:ne([String,Array,Object])},currentTabId:{type:ne(String)},defaultCurrentTabId:String,loop:Boolean,dir:{type:String,values:["ltr","rtl"],default:"ltr"},orientation:{type:ne(String)},onBlur:Function,onFocus:Function,onMousedown:Function}),{ElCollection:io,ElCollectionItem:uo,COLLECTION_INJECTION_KEY:ze,COLLECTION_ITEM_INJECTION_KEY:co}=sn("RovingFocusGroup"),Ke=Symbol("elRovingFocusGroup"),an=Symbol("elRovingFocusGroupItem"),po={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"},mo=(e,n)=>{if(n!=="rtl")return e;switch(e){case M.right:return M.left;case M.left:return M.right;default:return e}},fo=(e,n,t)=>{const o=mo(e.key,t);if(!(n==="vertical"&&[M.left,M.right].includes(o))&&!(n==="horizontal"&&[M.up,M.down].includes(o)))return po[o]},vo=(e,n)=>e.map((t,o)=>e[(o+n)%e.length]),Ge=e=>{const{activeElement:n}=document;for(const t of e)if(t===n||(t.focus(),n!==document.activeElement))return},xe="currentTabIdChange",qe="rovingFocusGroup.entryFocus",go={bubbles:!1,cancelable:!0},ho=z({name:"ElRovingFocusGroupImpl",inheritAttrs:!1,props:ro,emits:[xe,"entryFocus"],setup(e,{emit:n}){var t;const o=k((t=e.currentTabId||e.defaultCurrentTabId)!=null?t:null),l=k(!1),m=k(!1),r=k(null),{getItems:i}=A(ze,void 0),s=v(()=>[{outline:"none"},e.style]),u=b=>{n(xe,b)},h=()=>{l.value=!0},f=le(b=>{var C;(C=e.onMousedown)==null||C.call(e,b)},()=>{m.value=!0}),w=le(b=>{var C;(C=e.onFocus)==null||C.call(e,b)},b=>{const C=!j(m),{target:B,currentTarget:O}=b;if(B===O&&C&&!j(l)){const J=new Event(qe,go);if(O==null||O.dispatchEvent(J),!J.defaultPrevented){const N=i().filter(F=>F.focusable),G=N.find(F=>F.active),T=N.find(F=>F.id===j(o)),q=[G,T,...N].filter(Boolean).map(F=>F.ref);Ge(q)}}m.value=!1}),a=le(b=>{var C;(C=e.onBlur)==null||C.call(e,b)},()=>{l.value=!1}),y=(...b)=>{n("entryFocus",...b)};se(Ke,{currentTabbedId:Bn(o),loop:ie(e,"loop"),tabIndex:v(()=>j(l)?-1:0),rovingFocusGroupRef:r,rovingFocusGroupRootStyle:s,orientation:ie(e,"orientation"),dir:ie(e,"dir"),onItemFocus:u,onItemShiftTab:h,onBlur:a,onFocus:w,onMousedown:f}),pe(()=>e.currentTabId,b=>{o.value=b??null}),hn(r,qe,y)}});function _o(e,n,t,o,l,m){return D(e.$slots,"default")}var bo=te(ho,[["render",_o],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group-impl.vue"]]);const yo=z({name:"ElRovingFocusGroup",components:{ElFocusGroupCollection:io,ElRovingFocusGroupImpl:bo}});function wo(e,n,t,o,l,m){const r=L("el-roving-focus-group-impl"),i=L("el-focus-group-collection");return $(),Z(i,null,{default:d(()=>[_(r,Fn(Rn(e.$attrs)),{default:d(()=>[D(e.$slots,"default")]),_:3},16)]),_:3})}var Io=te(yo,[["render",wo],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group.vue"]]);const Co=z({components:{ElRovingFocusCollectionItem:uo},props:{focusable:{type:Boolean,default:!0},active:{type:Boolean,default:!1}},emits:["mousedown","focus","keydown"],setup(e,{emit:n}){const{currentTabbedId:t,loop:o,onItemFocus:l,onItemShiftTab:m}=A(Ke,void 0),{getItems:r}=A(ze,void 0),i=Ze(),s=k(null),u=le(a=>{n("mousedown",a)},a=>{e.focusable?l(j(i)):a.preventDefault()}),h=le(a=>{n("focus",a)},()=>{l(j(i))}),f=le(a=>{n("keydown",a)},a=>{const{key:y,shiftKey:b,target:C,currentTarget:B}=a;if(y===M.tab&&b){m();return}if(C!==B)return;const O=fo(a);if(O){a.preventDefault();let N=r().filter(G=>G.focusable).map(G=>G.ref);switch(O){case"last":{N.reverse();break}case"prev":case"next":{O==="prev"&&N.reverse();const G=N.indexOf(B);N=o.value?vo(N,G+1):N.slice(G+1);break}}en(()=>{Ge(N)})}}),w=v(()=>t.value===j(i));return se(an,{rovingFocusGroupItemRef:s,tabIndex:v(()=>j(w)?0:-1),handleMousedown:u,handleFocus:h,handleKeydown:f}),{id:i,handleKeydown:f,handleFocus:h,handleMousedown:u}}});function Eo(e,n,t,o,l,m){const r=L("el-roving-focus-collection-item");return $(),Z(r,{id:e.id,focusable:e.focusable,active:e.active},{default:d(()=>[D(e.$slots,"default")]),_:3},8,["id","focusable","active"])}var Mo=te(Co,[["render",Eo],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-item.vue"]]);const $o=de({trigger:_n.trigger,effect:{...Ue.effect,default:"light"},type:{type:ne(String)},placement:{type:ne(String),default:"bottom"},popperOptions:{type:ne(Object),default:()=>({})},id:String,size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:ne([Number,String]),default:0},maxHeight:{type:ne([Number,String]),default:""},popperClass:{type:String,default:""},disabled:{type:Boolean,default:!1},role:{type:String,default:"menu"},buttonProps:{type:ne(Object)},teleported:Ue.teleported}),rn=de({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:ge}}),To=de({onKeydown:{type:ne(Function)}}),ko=[M.down,M.pageDown,M.home],un=[M.up,M.pageUp,M.end],So=[...ko,...un],{ElCollection:Oo,ElCollectionItem:No,COLLECTION_INJECTION_KEY:Po,COLLECTION_ITEM_INJECTION_KEY:Bo}=sn("Dropdown"),Te=Symbol("elDropdown"),{ButtonGroup:Fo}=Qe,Ro=z({name:"ElDropdown",components:{ElButton:Qe,ElButtonGroup:Fo,ElScrollbar:bn,ElDropdownCollection:Oo,ElTooltip:De,ElRovingFocusGroup:Io,ElOnlyChild:yn,ElIcon:fe,ArrowDown:nn},props:$o,emits:["visible-change","click","command"],setup(e,{emit:n}){const t=_e(),o=oe("dropdown"),{t:l}=Ln(),m=k(),r=k(),i=k(null),s=k(null),u=k(null),h=k(null),f=k(!1),w=[M.enter,M.space,M.down],a=v(()=>({maxHeight:Mn(e.maxHeight)})),y=v(()=>[o.m(N.value)]),b=Ze().value,C=v(()=>e.id||b);pe([m,ie(e,"trigger")],([g,P],[x])=>{var X,E,S;const W=Dn(P)?P:[P];(X=x==null?void 0:x.$el)!=null&&X.removeEventListener&&x.$el.removeEventListener("pointerenter",T),(E=g==null?void 0:g.$el)!=null&&E.removeEventListener&&g.$el.removeEventListener("pointerenter",T),(S=g==null?void 0:g.$el)!=null&&S.addEventListener&&W.includes("hover")&&g.$el.addEventListener("pointerenter",T)},{immediate:!0}),Me(()=>{var g,P;(P=(g=m.value)==null?void 0:g.$el)!=null&&P.removeEventListener&&m.value.$el.removeEventListener("pointerenter",T)});function B(){O()}function O(){var g;(g=i.value)==null||g.onClose()}function J(){var g;(g=i.value)==null||g.onOpen()}const N=$n();function G(...g){n("command",...g)}function T(){var g,P;(P=(g=m.value)==null?void 0:g.$el)==null||P.focus()}function H(){}function q(){const g=j(s);g==null||g.focus(),h.value=null}function F(g){h.value=g}function R(g){f.value||(g.preventDefault(),g.stopImmediatePropagation())}function c(){n("visible-change",!0)}function p(g){(g==null?void 0:g.type)==="keydown"&&s.value.focus()}function I(){n("visible-change",!1)}return se(Te,{contentRef:s,role:v(()=>e.role),triggerId:C,isUsingKeyboard:f,onItemEnter:H,onItemLeave:q}),se("elDropdown",{instance:t,dropdownSize:N,handleClick:B,commandHandler:G,trigger:ie(e,"trigger"),hideOnClick:ie(e,"hideOnClick")}),{t:l,ns:o,scrollbar:u,wrapStyle:a,dropdownTriggerKls:y,dropdownSize:N,triggerId:C,triggerKeys:w,currentTabId:h,handleCurrentTabIdChange:F,handlerMainButtonClick:g=>{n("click",g)},handleEntryFocus:R,handleClose:O,handleOpen:J,handleBeforeShowTooltip:c,handleShowTooltip:p,handleBeforeHideTooltip:I,onFocusAfterTrapped:g=>{var P,x;g.preventDefault(),(x=(P=s.value)==null?void 0:P.focus)==null||x.call(P,{preventScroll:!0})},popperRef:i,contentRef:s,triggeringElementRef:m,referenceElementRef:r}}});function Lo(e,n,t,o,l,m){var r;const i=L("el-dropdown-collection"),s=L("el-roving-focus-group"),u=L("el-scrollbar"),h=L("el-only-child"),f=L("el-tooltip"),w=L("el-button"),a=L("arrow-down"),y=L("el-icon"),b=L("el-button-group");return $(),Q("div",{class:ce([e.ns.b(),e.ns.is("disabled",e.disabled)])},[_(f,{ref:"popperRef",role:e.role,effect:e.effect,"fallback-placements":["bottom","top"],"popper-options":e.popperOptions,"gpu-acceleration":!1,"hide-after":e.trigger==="hover"?e.hideTimeout:0,"manual-mode":!0,placement:e.placement,"popper-class":[e.ns.e("popper"),e.popperClass],"reference-element":(r=e.referenceElementRef)==null?void 0:r.$el,trigger:e.trigger,"trigger-keys":e.triggerKeys,"trigger-target-el":e.contentRef,"show-after":e.trigger==="hover"?e.showTimeout:0,"stop-popper-mouse-event":!1,"virtual-ref":e.triggeringElementRef,"virtual-triggering":e.splitButton,disabled:e.disabled,transition:`${e.ns.namespace.value}-zoom-in-top`,teleported:e.teleported,pure:"",persistent:"",onBeforeShow:e.handleBeforeShowTooltip,onShow:e.handleShowTooltip,onBeforeHide:e.handleBeforeHideTooltip},An({content:d(()=>[_(u,{ref:"scrollbar","wrap-style":e.wrapStyle,tag:"div","view-class":e.ns.e("list")},{default:d(()=>[_(s,{loop:e.loop,"current-tab-id":e.currentTabId,orientation:"horizontal",onCurrentTabIdChange:e.handleCurrentTabIdChange,onEntryFocus:e.handleEntryFocus},{default:d(()=>[_(i,null,{default:d(()=>[D(e.$slots,"dropdown")]),_:3})]),_:3},8,["loop","current-tab-id","onCurrentTabIdChange","onEntryFocus"])]),_:3},8,["wrap-style","view-class"])]),_:2},[e.splitButton?void 0:{name:"default",fn:d(()=>[_(h,{id:e.triggerId,ref:"triggeringElementRef",role:"button",tabindex:e.tabindex},{default:d(()=>[D(e.$slots,"default")]),_:3},8,["id","tabindex"])])}]),1032,["role","effect","popper-options","hide-after","placement","popper-class","reference-element","trigger","trigger-keys","trigger-target-el","show-after","virtual-ref","virtual-triggering","disabled","transition","teleported","onBeforeShow","onShow","onBeforeHide"]),e.splitButton?($(),Z(b,{key:0},{default:d(()=>[_(w,ue({ref:"referenceElementRef"},e.buttonProps,{size:e.dropdownSize,type:e.type,disabled:e.disabled,tabindex:e.tabindex,onClick:e.handlerMainButtonClick}),{default:d(()=>[D(e.$slots,"default")]),_:3},16,["size","type","disabled","tabindex","onClick"]),_(w,ue({id:e.triggerId,ref:"triggeringElementRef"},e.buttonProps,{role:"button",size:e.dropdownSize,type:e.type,class:e.ns.e("caret-button"),disabled:e.disabled,tabindex:e.tabindex,"aria-label":e.t("el.dropdown.toggleDropdown")}),{default:d(()=>[_(y,{class:ce(e.ns.e("icon"))},{default:d(()=>[_(a)]),_:1},8,["class"])]),_:1},16,["id","size","type","class","disabled","tabindex","aria-label"])]),_:3})):Pe("v-if",!0)],2)}var Ao=te(Ro,[["render",Lo],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown.vue"]]);const Do=z({name:"DropdownItemImpl",components:{ElIcon:fe},props:rn,emits:["pointermove","pointerleave","click","clickimpl"],setup(e,{emit:n}){const t=oe("dropdown"),{role:o}=A(Te,void 0),{collectionItemRef:l}=A(Bo,void 0),{collectionItemRef:m}=A(co,void 0),{rovingFocusGroupItemRef:r,tabIndex:i,handleFocus:s,handleKeydown:u,handleMousedown:h}=A(an,void 0),f=tn(l,m,r),w=v(()=>o.value==="menu"?"menuitem":o.value==="navigation"?"link":"button"),a=le(y=>{const{code:b}=y;if(b===M.enter||b===M.space)return y.preventDefault(),y.stopImmediatePropagation(),n("clickimpl",y),!0},u);return{ns:t,itemRef:f,dataset:{[ln]:""},role:w,tabIndex:i,handleFocus:s,handleKeydown:a,handleMousedown:h}}}),zo=["aria-disabled","tabindex","role"];function Ko(e,n,t,o,l,m){const r=L("el-icon");return $(),Q(re,null,[e.divided?($(),Q("li",ue({key:0,role:"separator",class:e.ns.bem("menu","item","divided")},e.$attrs),null,16)):Pe("v-if",!0),V("li",ue({ref:e.itemRef},{...e.dataset,...e.$attrs},{"aria-disabled":e.disabled,class:[e.ns.be("menu","item"),e.ns.is("disabled",e.disabled)],tabindex:e.tabIndex,role:e.role,onClick:n[0]||(n[0]=i=>e.$emit("clickimpl",i)),onFocus:n[1]||(n[1]=(...i)=>e.handleFocus&&e.handleFocus(...i)),onKeydown:n[2]||(n[2]=Fe((...i)=>e.handleKeydown&&e.handleKeydown(...i),["self"])),onMousedown:n[3]||(n[3]=(...i)=>e.handleMousedown&&e.handleMousedown(...i)),onPointermove:n[4]||(n[4]=i=>e.$emit("pointermove",i)),onPointerleave:n[5]||(n[5]=i=>e.$emit("pointerleave",i))}),[e.icon?($(),Z(r,{key:0},{default:d(()=>[($(),Z(Be(e.icon)))]),_:1})):Pe("v-if",!0),D(e.$slots,"default")],16,zo)],64)}var Go=te(Do,[["render",Ko],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item-impl.vue"]]);const cn=()=>{const e=A("elDropdown",{}),n=v(()=>e==null?void 0:e.dropdownSize);return{elDropdown:e,_elDropdownSize:n}},Ho=z({name:"ElDropdownItem",components:{ElDropdownCollectionItem:No,ElRovingFocusItem:Mo,ElDropdownItemImpl:Go},inheritAttrs:!1,props:rn,emits:["pointermove","pointerleave","click"],setup(e,{emit:n,attrs:t}){const{elDropdown:o}=cn(),l=_e(),m=k(null),r=v(()=>{var a,y;return(y=(a=j(m))==null?void 0:a.textContent)!=null?y:""}),{onItemEnter:i,onItemLeave:s}=A(Te,void 0),u=le(a=>(n("pointermove",a),a.defaultPrevented),We(a=>{if(e.disabled){s(a);return}const y=a.currentTarget;y===document.activeElement||y.contains(document.activeElement)||(i(a),a.defaultPrevented||y==null||y.focus())})),h=le(a=>(n("pointerleave",a),a.defaultPrevented),We(a=>{s(a)})),f=le(a=>{if(!e.disabled)return n("click",a),a.type!=="keydown"&&a.defaultPrevented},a=>{var y,b,C;if(e.disabled){a.stopImmediatePropagation();return}(y=o==null?void 0:o.hideOnClick)!=null&&y.value&&((b=o.handleClick)==null||b.call(o)),(C=o.commandHandler)==null||C.call(o,e.command,l,a)}),w=v(()=>({...e,...t}));return{handleClick:f,handlePointerMove:u,handlePointerLeave:h,textContent:r,propsAndAttrs:w}}});function Uo(e,n,t,o,l,m){var r;const i=L("el-dropdown-item-impl"),s=L("el-roving-focus-item"),u=L("el-dropdown-collection-item");return $(),Z(u,{disabled:e.disabled,"text-value":(r=e.textValue)!=null?r:e.textContent},{default:d(()=>[_(s,{focusable:!e.disabled},{default:d(()=>[_(i,ue(e.propsAndAttrs,{onPointerleave:e.handlePointerLeave,onPointermove:e.handlePointerMove,onClickimpl:e.handleClick}),{default:d(()=>[D(e.$slots,"default")]),_:3},16,["onPointerleave","onPointermove","onClickimpl"])]),_:3},8,["focusable"])]),_:3},8,["disabled","text-value"])}var dn=te(Ho,[["render",Uo],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item.vue"]]);const Wo=z({name:"ElDropdownMenu",props:To,setup(e){const n=oe("dropdown"),{_elDropdownSize:t}=cn(),o=t.value,{focusTrapRef:l,onKeydown:m}=A(wn,void 0),{contentRef:r,role:i,triggerId:s}=A(Te,void 0),{collectionRef:u,getItems:h}=A(Po,void 0),{rovingFocusGroupRef:f,rovingFocusGroupRootStyle:w,tabIndex:a,onBlur:y,onFocus:b,onMousedown:C}=A(Ke,void 0),{collectionRef:B}=A(ze,void 0),O=v(()=>[n.b("menu"),n.bm("menu",o==null?void 0:o.value)]),J=tn(r,u,l,f,B),N=le(T=>{var H;(H=e.onKeydown)==null||H.call(e,T)},T=>{const{currentTarget:H,code:q,target:F}=T;if(H.contains(F),M.tab===q&&T.stopImmediatePropagation(),T.preventDefault(),F!==j(r)||!So.includes(q))return;const c=h().filter(p=>!p.disabled).map(p=>p.ref);un.includes(q)&&c.reverse(),Ge(c)});return{size:o,rovingFocusGroupRootStyle:w,tabIndex:a,dropdownKls:O,role:i,triggerId:s,dropdownListWrapperRef:J,handleKeydown:T=>{N(T),m(T)},onBlur:y,onFocus:b,onMousedown:C}}}),Yo=["role","aria-labelledby"];function Vo(e,n,t,o,l,m){return $(),Q("ul",{ref:e.dropdownListWrapperRef,class:ce(e.dropdownKls),style:zn(e.rovingFocusGroupRootStyle),tabindex:-1,role:e.role,"aria-labelledby":e.triggerId,onBlur:n[0]||(n[0]=(...r)=>e.onBlur&&e.onBlur(...r)),onFocus:n[1]||(n[1]=(...r)=>e.onFocus&&e.onFocus(...r)),onKeydown:n[2]||(n[2]=Fe((...r)=>e.handleKeydown&&e.handleKeydown(...r),["self"])),onMousedown:n[3]||(n[3]=Fe((...r)=>e.onMousedown&&e.onMousedown(...r),["self"]))},[D(e.$slots,"default")],46,Yo)}var pn=te(Wo,[["render",Vo],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-menu.vue"]]);const jo=on(Ao,{DropdownItem:dn,DropdownMenu:pn}),Jo=be(dn),xo=be(pn);let qo=class{constructor(n,t){this.parent=n,this.domNode=t,this.subIndex=0,this.subIndex=0,this.init()}init(){this.subMenuItems=this.domNode.querySelectorAll("li"),this.addListeners()}gotoSubIndex(n){n===this.subMenuItems.length?n=0:n<0&&(n=this.subMenuItems.length-1),this.subMenuItems[n].focus(),this.subIndex=n}addListeners(){const n=this.parent.domNode;Array.prototype.forEach.call(this.subMenuItems,t=>{t.addEventListener("keydown",o=>{let l=!1;switch(o.code){case M.down:{this.gotoSubIndex(this.subIndex+1),l=!0;break}case M.up:{this.gotoSubIndex(this.subIndex-1),l=!0;break}case M.tab:{Ie(n,"mouseleave");break}case M.enter:case M.space:{l=!0,o.currentTarget.click();break}}return l&&(o.preventDefault(),o.stopPropagation()),!1})})}},Zo=class{constructor(n,t){this.domNode=n,this.submenu=null,this.submenu=null,this.init(t)}init(n){this.domNode.setAttribute("tabindex","0");const t=this.domNode.querySelector(`.${n}-menu`);t&&(this.submenu=new qo(this,t)),this.addListeners()}addListeners(){this.domNode.addEventListener("keydown",n=>{let t=!1;switch(n.code){case M.down:{Ie(n.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(0),t=!0;break}case M.up:{Ie(n.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(this.submenu.subMenuItems.length-1),t=!0;break}case M.tab:{Ie(n.currentTarget,"mouseleave");break}case M.enter:case M.space:{t=!0,n.currentTarget.click();break}}t&&n.preventDefault()})}},Qo=class{constructor(n,t){this.domNode=n,this.init(t)}init(n){const t=this.domNode.childNodes;Array.from(t).forEach(o=>{o.nodeType===1&&new Zo(o,n)})}};const Xo=z({name:"ElMenuCollapseTransition",setup(){const e=oe("menu");return{listeners:{onBeforeEnter:t=>t.style.opacity="0.2",onEnter(t,o){ye(t,`${e.namespace.value}-opacity-transition`),t.style.opacity="1",o()},onAfterEnter(t){Se(t,`${e.namespace.value}-opacity-transition`),t.style.opacity=""},onBeforeLeave(t){t.dataset||(t.dataset={}),Tn(t,e.m("collapse"))?(Se(t,e.m("collapse")),t.dataset.oldOverflow=t.style.overflow,t.dataset.scrollWidth=t.clientWidth.toString(),ye(t,e.m("collapse"))):(ye(t,e.m("collapse")),t.dataset.oldOverflow=t.style.overflow,t.dataset.scrollWidth=t.clientWidth.toString(),Se(t,e.m("collapse"))),t.style.width=`${t.scrollWidth}px`,t.style.overflow="hidden"},onLeave(t){ye(t,"horizontal-collapse-transition"),t.style.width=`${t.dataset.scrollWidth}px`}}}}});function et(e,n,t,o,l,m){return $(),Z(Xe,ue({mode:"out-in"},e.listeners),{default:d(()=>[D(e.$slots,"default")]),_:3},16)}var nt=te(Xo,[["render",et],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-collapse-transition.vue"]]);function mn(e,n){const t=v(()=>{let l=e.parent;const m=[n.value];for(;l.type.name!=="ElMenu";)l.props.index&&m.unshift(l.props.index),l=l.parent;return m});return{parentMenu:v(()=>{let l=e.parent;for(;l&&!["ElMenu","ElSubMenu"].includes(l.type.name);)l=l.parent;return l}),indexPath:t}}function ot(e){return v(()=>{const t=e.backgroundColor;return t?new kn(t).shade(20).toString():""})}const fn=(e,n)=>{const t=oe("menu");return v(()=>t.cssVarBlock({"text-color":e.textColor||"","hover-text-color":e.textColor||"","bg-color":e.backgroundColor||"","hover-bg-color":ot(e).value||"","active-color":e.activeTextColor||"",level:`${n}`}))},tt=de({index:{type:String,required:!0},showTimeout:{type:Number,default:300},hideTimeout:{type:Number,default:300},popperClass:String,disabled:Boolean,popperAppendToBody:{type:Boolean,default:void 0},teleported:{type:Boolean,default:void 0},popperOffset:{type:Number,default:6},expandCloseIcon:{type:ge},expandOpenIcon:{type:ge},collapseCloseIcon:{type:ge},collapseOpenIcon:{type:ge}}),we="ElSubMenu";var He=z({name:we,props:tt,setup(e,{slots:n,expose:t}){Sn({from:"popper-append-to-body",replacement:"teleported",scope:we,version:"2.3.0",ref:"https://element-plus.org/en-US/component/menu.html#submenu-attributes"},v(()=>e.popperAppendToBody!==void 0));const o=_e(),{indexPath:l,parentMenu:m}=mn(o,v(()=>e.index)),r=oe("menu"),i=oe("sub-menu"),s=A("rootMenu");s||Ee(we,"can not inject root menu");const u=A(`subMenu:${m.value.uid}`);u||Ee(we,"can not inject sub menu");const h=k({}),f=k({});let w;const a=k(!1),y=k(),b=k(null),C=v(()=>c.value==="horizontal"&&O.value?"bottom-start":"right-start"),B=v(()=>c.value==="horizontal"&&O.value||c.value==="vertical"&&!s.props.collapse?e.expandCloseIcon&&e.expandOpenIcon?T.value?e.expandOpenIcon:e.expandCloseIcon:nn:e.collapseCloseIcon&&e.collapseOpenIcon?T.value?e.collapseOpenIcon:e.collapseCloseIcon:Kn),O=v(()=>u.level===0),J=v(()=>{var E;const S=(E=e.teleported)!=null?E:e.popperAppendToBody;return S===void 0?O.value:S}),N=v(()=>s.props.collapse?`${r.namespace.value}-zoom-in-left`:`${r.namespace.value}-zoom-in-top`),G=v(()=>c.value==="horizontal"&&O.value?["bottom-start","bottom-end","top-start","top-end","right-start","left-start"]:["right-start","left-start","bottom-start","bottom-end","top-start","top-end"]),T=v(()=>s.openedMenus.includes(e.index)),H=v(()=>{let E=!1;return Object.values(h.value).forEach(S=>{S.active&&(E=!0)}),Object.values(f.value).forEach(S=>{S.active&&(E=!0)}),E}),q=v(()=>s.props.backgroundColor||""),F=v(()=>s.props.activeTextColor||""),R=v(()=>s.props.textColor||""),c=v(()=>s.props.mode),p=$e({index:e.index,indexPath:l,active:H}),I=fn(s.props,u.level+1),U=v(()=>c.value!=="horizontal"?{color:R.value}:{borderBottomColor:H.value?s.props.activeTextColor?F.value:"":"transparent",color:H.value?F.value:R.value}),K=()=>{var E,S,W;return(W=(S=(E=b.value)==null?void 0:E.popperRef)==null?void 0:S.popperInstanceRef)==null?void 0:W.destroy()},g=E=>{E||K()},P=()=>{s.props.menuTrigger==="hover"&&s.props.mode==="horizontal"||s.props.collapse&&s.props.mode==="vertical"||e.disabled||s.handleSubMenuClick({index:e.index,indexPath:l.value,active:H.value})},x=(E,S=e.showTimeout)=>{var W;E.type!=="focus"&&(s.props.menuTrigger==="click"&&s.props.mode==="horizontal"||!s.props.collapse&&s.props.mode==="vertical"||e.disabled||(u.mouseInChild.value=!0,w==null||w(),{stop:w}=Ve(()=>{s.openMenu(e.index,l.value)},S),J.value&&((W=m.value.vnode.el)==null||W.dispatchEvent(new MouseEvent("mouseenter")))))},X=(E=!1)=>{var S,W;s.props.menuTrigger==="click"&&s.props.mode==="horizontal"||!s.props.collapse&&s.props.mode==="vertical"||(w==null||w(),u.mouseInChild.value=!1,{stop:w}=Ve(()=>!a.value&&s.closeMenu(e.index,l.value),e.hideTimeout),J.value&&E&&((S=o.parent)==null?void 0:S.type.name)==="ElSubMenu"&&((W=u.handleMouseleave)==null||W.call(u,!0)))};pe(()=>s.props.collapse,E=>g(!!E));{const E=W=>{f.value[W.index]=W},S=W=>{delete f.value[W.index]};se(`subMenu:${o.uid}`,{addSubMenu:E,removeSubMenu:S,handleMouseleave:X,mouseInChild:a,level:u.level+1})}return t({opened:T}),he(()=>{s.addSubMenu(p),u.addSubMenu(p)}),Me(()=>{u.removeSubMenu(p),s.removeSubMenu(p)}),()=>{var E;const S=[(E=n.title)==null?void 0:E.call(n),Y(fe,{class:i.e("icon-arrow"),style:{transform:T.value?e.expandCloseIcon&&e.expandOpenIcon||e.collapseCloseIcon&&e.collapseOpenIcon&&s.props.collapse?"none":"rotateZ(180deg)":"none"}},{default:()=>me(B.value)?Y(o.appContext.components[B.value]):Y(B.value)})],W=s.isMenuPopup?Y(De,{ref:b,visible:T.value,effect:"light",pure:!0,offset:e.popperOffset,showArrow:!1,persistent:!0,popperClass:e.popperClass,placement:C.value,teleported:J.value,fallbackPlacements:G.value,transition:N.value,gpuAcceleration:!1},{content:()=>{var ve;return Y("div",{class:[r.m(c.value),r.m("popup-container"),e.popperClass],onMouseenter:ke=>x(ke,100),onMouseleave:()=>X(!0),onFocus:ke=>x(ke,100)},[Y("ul",{class:[r.b(),r.m("popup"),r.m(`popup-${C.value}`)],style:I.value},[(ve=n.default)==null?void 0:ve.call(n)])])},default:()=>Y("div",{class:i.e("title"),style:[U.value,{backgroundColor:q.value}],onClick:P},S)}):Y(re,{},[Y("div",{class:i.e("title"),style:[U.value,{backgroundColor:q.value}],ref:y,onClick:P},S),Y(eo,{},{default:()=>{var ve;return Gn(Y("ul",{role:"menu",class:[r.b(),r.m("inline")],style:I.value},[(ve=n.default)==null?void 0:ve.call(n)]),[[Hn,T.value]])}})]);return Y("li",{class:[i.b(),i.is("active",H.value),i.is("opened",T.value),i.is("disabled",e.disabled)],role:"menuitem",ariaHaspopup:!0,ariaExpanded:T.value,onMouseenter:x,onMouseleave:()=>X(!0),onFocus:x},[W])}}});const lt=de({mode:{type:String,values:["horizontal","vertical"],default:"vertical"},defaultActive:{type:String,default:""},defaultOpeneds:{type:ne(Array),default:()=>Zn([])},uniqueOpened:Boolean,router:Boolean,menuTrigger:{type:String,values:["hover","click"],default:"hover"},collapse:Boolean,backgroundColor:String,textColor:String,activeTextColor:String,collapseTransition:{type:Boolean,default:!0},ellipsis:{type:Boolean,default:!0},popperEffect:{type:String,values:["dark","light"],default:"dark"}}),Oe=e=>Array.isArray(e)&&e.every(n=>me(n)),st={close:(e,n)=>me(e)&&Oe(n),open:(e,n)=>me(e)&&Oe(n),select:(e,n,t,o)=>me(e)&&Oe(n)&&Yn(t)&&(o===void 0||o instanceof Promise)};var at=z({name:"ElMenu",props:lt,emits:st,setup(e,{emit:n,slots:t,expose:o}){const l=_e(),m=l.appContext.config.globalProperties.$router,r=k(),i=oe("menu"),s=oe("sub-menu"),u=k(-1),h=k(e.defaultOpeneds&&!e.collapse?e.defaultOpeneds.slice(0):[]),f=k(e.defaultActive),w=k({}),a=k({}),y=v(()=>e.mode==="horizontal"||e.mode==="vertical"&&e.collapse),b=()=>{const c=f.value&&w.value[f.value];if(!c||e.mode==="horizontal"||e.collapse)return;c.indexPath.forEach(I=>{const U=a.value[I];U&&C(I,U.indexPath)})},C=(c,p)=>{h.value.includes(c)||(e.uniqueOpened&&(h.value=h.value.filter(I=>p.includes(I))),h.value.push(c),n("open",c,p))},B=c=>{const p=h.value.indexOf(c);p!==-1&&h.value.splice(p,1)},O=(c,p)=>{B(c),n("close",c,p)},J=({index:c,indexPath:p})=>{h.value.includes(c)?O(c,p):C(c,p)},N=c=>{(e.mode==="horizontal"||e.collapse)&&(h.value=[]);const{index:p,indexPath:I}=c;if(!(Ye(p)||Ye(I)))if(e.router&&m){const U=c.route||p,K=m.push(U).then(g=>(g||(f.value=p),g));n("select",p,I,{index:p,indexPath:I,route:U},K)}else f.value=p,n("select",p,I,{index:p,indexPath:I})},G=c=>{const p=w.value,I=p[c]||f.value&&p[f.value]||p[e.defaultActive];I?f.value=I.index:f.value=c},T=()=>{var c,p;if(!r.value)return-1;const I=Array.from((p=(c=r.value)==null?void 0:c.childNodes)!=null?p:[]).filter(E=>E.nodeName!=="#comment"&&(E.nodeName!=="#text"||E.nodeValue)),U=64,K=Number.parseInt(getComputedStyle(r.value).paddingLeft,10),g=Number.parseInt(getComputedStyle(r.value).paddingRight,10),P=r.value.clientWidth-K-g;let x=0,X=0;return I.forEach((E,S)=>{x+=E.offsetWidth||0,x<=P-U&&(X=S+1)}),X===I.length?-1:X},H=(c,p=33.34)=>{let I;return()=>{I&&clearTimeout(I),I=setTimeout(()=>{c()},p)}};let q=!0;const F=()=>{const c=()=>{u.value=-1,en(()=>{u.value=T()})};q?c():H(c)(),q=!1};pe(()=>e.defaultActive,c=>{w.value[c]||(f.value=""),G(c)}),pe(()=>e.collapse,c=>{c&&(h.value=[])}),pe(w.value,b);let R;Un(()=>{e.mode==="horizontal"&&e.ellipsis?R=In(r,F).stop:R==null||R()});{const c=K=>{a.value[K.index]=K},p=K=>{delete a.value[K.index]};se("rootMenu",$e({props:e,openedMenus:h,items:w,subMenus:a,activeIndex:f,isMenuPopup:y,addMenuItem:K=>{w.value[K.index]=K},removeMenuItem:K=>{delete w.value[K.index]},addSubMenu:c,removeSubMenu:p,openMenu:C,closeMenu:O,handleMenuItemClick:N,handleSubMenuClick:J})),se(`subMenu:${l.uid}`,{addSubMenu:c,removeSubMenu:p,mouseInChild:k(!1),level:0})}return he(()=>{e.mode==="horizontal"&&new Qo(l.vnode.el,i.namespace.value)}),o({open:p=>{const{indexPath:I}=a.value[p];I.forEach(U=>C(U,I))},close:B,handleResize:F}),()=>{var c,p;let I=(p=(c=t.default)==null?void 0:c.call(t))!=null?p:[];const U=[];if(e.mode==="horizontal"&&r.value){const P=qn(I),x=u.value===-1?P:P.slice(0,u.value),X=u.value===-1?[]:P.slice(u.value);X!=null&&X.length&&e.ellipsis&&(I=x,U.push(Y(He,{index:"sub-menu-more",class:s.e("hide-arrow")},{title:()=>Y(fe,{class:s.e("icon-more")},{default:()=>Y(Wn)}),default:()=>X})))}const K=fn(e,0),g=Y("ul",{key:String(e.collapse),role:"menubar",ref:r,style:K.value,class:{[i.b()]:!0,[i.m(e.mode)]:!0,[i.m("collapse")]:e.collapse}},[...I,...U]);return e.collapseTransition&&e.mode==="vertical"?Y(nt,()=>g):g}}});const rt=de({index:{type:ne([String,null]),default:null},route:{type:ne([String,Object])},disabled:Boolean}),it={click:e=>me(e.index)&&Array.isArray(e.indexPath)},Ne="ElMenuItem",ut=z({name:Ne,components:{ElTooltip:De},props:rt,emits:it,setup(e,{emit:n}){const t=_e(),o=A("rootMenu"),l=oe("menu"),m=oe("menu-item");o||Ee(Ne,"can not inject root menu");const{parentMenu:r,indexPath:i}=mn(t,ie(e,"index")),s=A(`subMenu:${r.value.uid}`);s||Ee(Ne,"can not inject sub menu");const u=v(()=>e.index===o.activeIndex),h=$e({index:e.index,indexPath:i,active:u}),f=()=>{e.disabled||(o.handleMenuItemClick({index:e.index,indexPath:i.value,route:e.route}),n("click",h))};return he(()=>{s.addSubMenu(h),o.addMenuItem(h)}),Me(()=>{s.removeSubMenu(h),o.removeMenuItem(h)}),{parentMenu:r,rootMenu:o,active:u,nsMenu:l,nsMenuItem:m,handleClick:f}}});function ct(e,n,t,o,l,m){const r=L("el-tooltip");return $(),Q("li",{class:ce([e.nsMenuItem.b(),e.nsMenuItem.is("active",e.active),e.nsMenuItem.is("disabled",e.disabled)]),role:"menuitem",tabindex:"-1",onClick:n[0]||(n[0]=(...i)=>e.handleClick&&e.handleClick(...i))},[e.parentMenu.type.name==="ElMenu"&&e.rootMenu.props.collapse&&e.$slots.title?($(),Z(r,{key:0,effect:e.rootMenu.props.popperEffect,placement:"right","fallback-placements":["left"],persistent:""},{content:d(()=>[D(e.$slots,"title")]),default:d(()=>[V("div",{class:ce(e.nsMenu.be("tooltip","trigger"))},[D(e.$slots,"default")],2)]),_:3},8,["effect"])):($(),Q(re,{key:1},[D(e.$slots,"default"),D(e.$slots,"title")],64))],2)}var vn=te(ut,[["render",ct],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item.vue"]]);const dt={title:String},pt="ElMenuItemGroup",mt=z({name:pt,props:dt,setup(){return{ns:oe("menu-item-group")}}});function ft(e,n,t,o,l,m){return $(),Q("li",{class:ce(e.ns.b())},[V("div",{class:ce(e.ns.e("title"))},[e.$slots.title?D(e.$slots,"title",{key:1}):($(),Q(re,{key:0},[ae(ee(e.title),1)],64))],2),V("ul",null,[D(e.$slots,"default")])],2)}var gn=te(mt,[["render",ft],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item-group.vue"]]);const vt=on(at,{MenuItem:vn,MenuItemGroup:gn,SubMenu:He}),gt=be(vn),ht=be(gn),_t=be(He);const bt="/assets/logo-7c4fe6ee.png",yt={class:"nav"},wt=V("img",{class:"logo",src:bt},null,-1),It={class:"tilte"},Ct={class:"userinfo"},Et={key:0,class:"avatar",src:On},Mt={key:1,class:"avatar",src:Nn},$t={class:"welcome-content"},Tt={class:"content welcome"},kt={class:"content username"},St={class:"dropdown"},Ot={class:"el-dropdown-link"},Nt={class:"dropdown"},Pt={class:"el-dropdown-link"},Bt=z({__name:"navBar",setup(e){A("reload");const n=Vn(),{locale:t,t:o}=Re(),l=k(localStorage.getItem("lang")),m=u=>{localStorage.setItem("lang",u),t.value=u,l.value=localStorage.getItem("lang"),console.log("#######",l.value)},r=u=>{switch(u){case"info":i();break;case"set":console.log("設定 ~~");break;case"logout":s();break}},i=()=>{je.push({path:"/userInfo"})},s=()=>{localStorage.removeItem("memberInfo"),n.setAuth(!1),n.setUser(null),je.push({path:"/login"}),setTimeout(()=>{Cn({message:o("isLogout"),type:"error"})},200)};return jn(()=>{console.log("!!!!!",l.value)}),(u,h)=>{const f=Le,w=fe,a=Jo,y=xo,b=jo,C=L("arrow-down"),B=Ae;return $(),Q("nav",yt,[_(B,null,{default:d(()=>[_(f,{class:"logo-container",span:12},{default:d(()=>[wt,V("span",It,ee(u.$t("sysName")),1)]),_:1}),_(f,{class:"user",span:12},{default:d(()=>[V("div",Ct,[j(n).user.avatar?($(),Q("img",Et)):($(),Q("img",Mt)),V("div",$t,[V("p",Tt,ee(u.$t("welcome")),1),V("p",kt,ee(j(n).user.name),1)]),V("span",St,[_(b,{trigger:"click",onCommand:m},{dropdown:d(()=>[_(y,null,{default:d(()=>[_(a,{command:"zh-TW"},{default:d(()=>[ae(ee(u.$t("language.zh-TW")),1)]),_:1}),_(a,{command:"zh-CN"},{default:d(()=>[ae(ee(u.$t("language.zh-CN")),1)]),_:1}),_(a,{command:"zh-EN"},{default:d(()=>[ae(ee(u.$t("language.zh-EN")),1)]),_:1})]),_:1})]),default:d(()=>[V("span",Ot,[_(w,null,{default:d(()=>[ae(ee(u.$t(`language.${l.value}`)),1)]),_:1})])]),_:1})]),V("span",Nt,[_(b,{trigger:"click",onCommand:r},{dropdown:d(()=>[_(y,null,{default:d(()=>[_(a,{command:"info"},{default:d(()=>[ae(ee(u.$t("userInfo")),1)]),_:1}),_(a,{command:"set"},{default:d(()=>[ae(ee(u.$t("setting")),1)]),_:1}),_(a,{command:"logout"},{default:d(()=>[ae(ee(u.$t("logOut")),1)]),_:1})]),_:1})]),default:d(()=>[V("span",Pt,[_(w,null,{default:d(()=>[_(C)]),_:1})])]),_:1})])])]),_:1})]),_:1})])}}});const Ft=z({__name:"sideBar",setup(e){Re();const n=Re(),t=v(()=>n.t("index")),o=v(()=>n.t("moneyList.mangerList")),l=v(()=>n.t("moneyList.managements")),m=v(()=>n.t("moneyList.menoyShow")),r=v(()=>n.t("moneyList.FormIpt")),i=v(()=>n.t("user.Info")),s=v(()=>n.t("user.personal")),u=v(()=>n.t("member.management")),h=v(()=>n.t("member.memList")),f=v(()=>n.t("member.memInfo")),w=v(()=>n.t("menuSetting")),a=$e([{icon:"Money",name:t,path:"/"},{icon:"Money",name:o,path:"fund",children:[{icon:"DocumentCopy",path:"fundList",name:l},{icon:"Coin",path:"fundList2",name:m},{icon:"Money",path:"fundList3",name:r}]},{icon:"InfoFilled",name:i,path:"info",children:[{icon:"Monitor",path:"infoshow",name:i},{icon:"CreditCard",path:"infoshow2",name:s}]},{icon:"UserFilled",name:u,path:"members",children:[{icon:"User",path:"members1",name:h},{icon:"Memo",path:"members2",name:f}]},{icon:"Tools",path:"setting",name:w}]),y=v({get(){return a},set(b){console.log("!!!!",b)}});return(b,C)=>{const B=fe,O=gt,J=L("router-link"),N=ht,G=_t,T=Jn,H=vt,q=Le,F=Ae;return $(),Z(F,{class:"menu-container"},{default:d(()=>[_(q,{span:24},{default:d(()=>[_(H,{class:"el-menu-vertical-demo","active-text-color":"#ffd04b","background-color":"#9D9D9D","default-active":"1","text-color":"#fff"},{default:d(()=>[($(!0),Q(re,null,Je(y.value,R=>($(),Q(re,{key:R.path},[R.children&&R.children.length>0?($(),Z(G,{key:0,index:R.path},{title:d(()=>[_(B,null,{default:d(()=>[($(),Z(Be(R.icon)))]),_:2},1024),V("span",null,ee(R.name),1)]),default:d(()=>[_(N,null,{default:d(()=>[($(!0),Q(re,null,Je(R.children,(c,p)=>($(),Z(J,{key:p,index:c.path,to:c.path},{default:d(()=>[_(O,null,{default:d(()=>[_(B,null,{default:d(()=>[($(),Z(Be(c.icon)))]),_:2},1024),V("span",null,ee(c.name),1)]),_:2},1024)]),_:2},1032,["index","to"]))),128))]),_:2},1024)]),_:2},1032,["index"])):($(),Z(J,{key:1,to:R.path},{default:d(()=>[_(O,{index:R.path},{default:d(()=>[_(T,{class:"icons"}),V("span",null,ee(R.name),1)]),_:2},1032,["index"])]),_:2},1032,["to"]))],64))),128))]),_:1})]),_:1})]),_:1})}}});const Rt=xn(Ft,[["__scopeId","data-v-8d85e7c8"]]),Jt=z({__name:"Home",setup(e){return he(async()=>{const n="/api/users/current";try{const t=await En.get(n)}catch(t){console.error(t)}}),(n,t)=>{const o=Le,l=Ae,m=L("router-view");return $(),Q(re,null,[_(l,null,{default:d(()=>[_(o,{span:24},{default:d(()=>[_(Bt)]),_:1})]),_:1}),_(l,null,{default:d(()=>[_(o,{span:3},{default:d(()=>[_(Rt)]),_:1}),_(o,{span:21},{default:d(()=>[_(m)]),_:1})]),_:1})],64)}}});export{Jt as default};
