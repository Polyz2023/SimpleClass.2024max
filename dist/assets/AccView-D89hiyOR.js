import{a as p}from"./axios-CCb-kr4I.js";import{j as b}from"./index-VWaDGczM.js";import{_ as k,c as e,e as g,a as s,F as f,r as m,d as v,o as d,t as n,b as r}from"./index-DbMda05o.js";const y={data(){return{usdata:null}},async mounted(){const l=localStorage.getItem("SC-token");if(l)try{const t=b(l),u=await p.post("http://localhost:7000/register/sign/acc",{uid:t.user_id});this.usdata=u.data.data,console.log("Decodet data at mounted: ",this.usdata)}catch(t){console.error("Error decoded data at mounted: ",t)}}},x={id:"dh2"},C={id:"form",ref:"form",class:"slide-in"},V={key:0},N={id:"f-dh1"},S={for:""},T={for:""},_={for:""},j={key:1,style:{"margin-left":"100px"},id:"dd"},w={id:"f-dh1"},B={for:""},D={for:""},E={for:""},F={for:""};function I(l,t,u,O,i,q){return d(),e("main",{onClick:t[0]||(t[0]=(...o)=>l.handleClickOutside&&l.handleClickOutside(...o))},[t[15]||(t[15]=g('<div id="dh1" data-v-0770ec87><div id="dhc1" data-v-0770ec87><a href="/test/create" data-v-0770ec87>Створити тест</a></div><div id="dhc1" style="margin-left:10px;" data-v-0770ec87><a href="/test/jointest" data-v-0770ec87>Приєднатися до тесту</a></div></div>',1)),s("div",x,[s("div",C,[i.usdata?(d(),e("div",V,[(d(!0),e(f,null,m(i.usdata.Messages,(o,a)=>(d(),e("li",{key:a},[s("div",N,[s("label",S,n(o.e1),1),t[1]||(t[1]=r()),t[2]||(t[2]=s("br",null,null,-1)),s("label",T,n(o.e2),1),t[3]||(t[3]=r()),t[4]||(t[4]=s("br",null,null,-1)),s("label",_,n(o.e3),1),t[5]||(t[5]=r()),t[6]||(t[6]=s("br",null,null,-1))])]))),128))])):v("",!0),i.usdata?(d(),e("div",j,[(d(!0),e(f,null,m(i.usdata.Tests,(o,a)=>(d(),e("li",{key:a},[s("div",w,[s("label",B,"Ім'я тесту: "+n(o.name),1),t[7]||(t[7]=r()),t[8]||(t[8]=s("br",null,null,-1)),s("label",D,"Всі питання: "+n(o.questions.length),1),t[9]||(t[9]=r()),t[10]||(t[10]=s("br",null,null,-1)),s("label",E,"Ідентифікатор: "+n(o.stid),1),t[11]||(t[11]=r()),t[12]||(t[12]=s("br",null,null,-1)),s("label",F,"Загальна кількість балів: "+n(o.TP),1),t[13]||(t[13]=r()),t[14]||(t[14]=s("br",null,null,-1))])]))),128))])):v("",!0)],512)])])}const P=k(y,[["render",I],["__scopeId","data-v-0770ec87"]]);export{P as default};