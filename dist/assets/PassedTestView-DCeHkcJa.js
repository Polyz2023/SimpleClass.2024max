import{a as _}from"./axios-CCb-kr4I.js";import{j as f}from"./index-VWaDGczM.js";import{_ as g,c as a,b as e,F as l,g as c,e as k,o as s,t as i}from"./index-Df8Cqa_7.js";const v={props:["ptindex"],data(){return{usdata:null}},async mounted(){const n=localStorage.getItem("SC-token");if(n)try{const t=f(n),o=await _.post("/register/sign/acc",{uid:t.user_id});this.usdata=o.data.data,console.log("Decodet data at mounted: ",this.usdata)}catch(t){console.error("Error decoded data at mounted: ",t)}}},x={key:0,class:"main-alert-info"},y={class:"qnname-alert"};function h(n,t,o,w,r,B){return s(),a("main",null,[t[0]||(t[0]=e("div",{class:"alert-panel"},[e("a",{href:"/reg/account"},"Назад")],-1)),r.usdata?(s(),a("div",x,[(s(!0),a(l,null,c(r.usdata.Messages[o.ptindex].passedtest,(d,u)=>(s(),a("div",{class:"info-element",key:u},[e("div",null,[e("div",y,[e("strong",null,i(d.qnname),1)]),e("ul",null,[(s(!0),a(l,null,c(d.answers,(m,p)=>(s(),a("li",{key:p},[e("p",null,i(m),1)]))),128))])])]))),128))])):k("",!0)])}const b=g(v,[["render",h],["__scopeId","data-v-6571f2bd"]]);export{b as default};