import{a as g}from"./axios-CCb-kr4I.js";import"./index-VWaDGczM.js";import{M as y}from"./MessageBox-CCPB9eG_.js";import{_ as x,c as i,a as A,n as m,e as r,t as l,b as a,F as p,g as _,d as N,r as w,o as n}from"./index-DR2zu-W2.js";const k={components:{MessageBoxVue:y},props:["stid","yname"],data(){return{tdata:null,currindex:0,userp:0,ise:!1,d:null,msg:{type:"info",message:"Test",msg_:"z_Minus"},datamsg:[],datamsgpassed:{},Asis:[]}},mounted(){g.post("http://localhost:9000/user/get/test",{stid:this.stid}).then(e=>{e.data&&e.data.ft?(this.tdata=e.data.ft,console.log("Test data got: ",this.tdata)):console.error("No data found in response")}).catch(e=>{this.MSGAnim("Тест не знайдено","error"),console.error("Error at got some test data: ",e)})},methods:{SetA(e){this.Asis.includes(e)?this.Asis.splice(this.Asis.indexOf(e),1):this.Asis.push(e)},Next(){setTimeout(()=>{console.log(`Current question index: ${this.currindex}`),console.log(`Selected answer index: ${o}`);const e=this.tdata.questions[this.currindex],t=Number(e.Points);if(this.currindex<this.tdata.questions.length-1){if(console.log(`Current question points: ${t}`),e.NUMS==1)e.answers[this.Asis[0]].TF&&(isNaN(t)||(this.userp+=t,this.datamsgpassed={qnname:e.name,answers:[e.answers[this.Asis[0]].name]},console.log(`Correct answer! Points added: ${t}. Total points: ${this.userp}`)));else{let u=e.Points/e.NUMS,s=[];for(var o=0;o<this.Asis.length;o++)e.answers[this.Asis[o]].TF&&(this.userp+=u,s.push(e.answers[this.Asis[o]].name),console.log(`CorrecFFFFFt answer! Points added: ${t}. Total points: ${this.userp} All: `+u));this.datamsgpassed={qnname:e.name,answers:s}}this.currindex++,this.Asis=[],this.datamsg.push(this.datamsgpassed),this.datamsgpassed={}}else{if(console.log(`Final question points: ${t}`),e.NUMS==1)e.answers[this.Asis[0]].TF&&(isNaN(t)||(this.userp+=t,this.datamsgpassed={qnname:e.name,answers:[e.answers[this.Asis[0]].name]},console.log(`Correct answer! Points added: ${t}. Total points: ${this.userp}`)));else{let u=[],s=e.Points/e.NUMS;for(var o=0;o<this.Asis.length;o++)e.answers[this.Asis[o]].TF&&(this.userp+=s,u.push(e.answers[this.Asis[o]].name),console.log(`CorrecFFFFFt answer! Points added: ${t}. Total points: ${this.userp} All: `+s));this.datamsgpassed={qnname:e.name,answers:u}}this.ise=!0,this.datamsg.push(this.datamsgpassed),this.datamsgpassed={},this.EndTest()}},1e3)},async EndTest(){if(this.ise){const e={testname:this.tdata.name,yName:this.yname,points:this.userp,uid:this.tdata.uid};try{const t=await g.post("http://localhost:9000/user/send/test",{message:{e1:`Ім'я тесту: ${e.testname}`,e2:`Хто пройшов: ${e.yName}`,e3:`Набрані бали: ${e.points}`,passedtest:this.datamsg},uid:e.uid});console.log("Succefuly test send: ",t)}catch(t){this.MSGAnim("Тест не відправлено","error"),console.error("Error to send test: ",t)}}},MSGAnim(e,t){this.msg.message=e,this.msg.type=t,this.msg.msg_="",this.$nextTick(()=>{this.msg.msg_="z_Plus",setTimeout(()=>{this.msg.msg_="z_Minus"},3e3)})},hdcl(e){this.SetA(e),this.Next()}},watch:{}},S={key:0,class:"test-type"},M={key:0},T={key:1},v={id:"dh1"},F={key:0,id:"dhc1"},C=["src"],U={id:"dhc1"},b={key:0},P={key:1},V={id:"dh2"},B={key:0},E={key:0,id:"form",class:"slide-in"},z=["onClick"],G={key:1,id:"form",class:"slide-in"},D=["onClick"],I={key:1,id:"modal"},L={class:"modal-content"},O={for:""};function Q(e,t,o,u,s,c){const f=w("MessageBoxVue");return n(),i("main",null,[A(f,{class:m([s.msg.msg_,"msg"]),message:s.msg.message,messageType:s.msg.type},null,8,["class","message","messageType"]),s.tdata&&s.tdata.questions&&s.tdata.questions.length>0?(n(),i("div",S,[s.tdata.questions[s.currindex].NUMS==1?(n(),i("p",M,"Одна правильна відповідь")):r("",!0),s.tdata.questions[s.currindex].NUMS>1?(n(),i("p",T,l(s.tdata.questions[s.currindex].NUMS)+" правильних відповідей",1)):r("",!0)])):r("",!0),a("div",v,[s.tdata&&s.tdata.questions&&s.tdata.questions.length>0&&s.tdata.questions[s.currindex].img!=null?(n(),i("div",F,[s.tdata&&s.tdata.questions&&s.tdata.questions.length>0?(n(),i("img",{key:0,src:s.tdata.questions[s.currindex].img},null,8,C)):r("",!0)])):r("",!0),a("div",U,[s.tdata&&s.tdata.questions&&s.tdata.questions.length>0?(n(),i("h2",b,l(s.tdata.questions[s.currindex].name),1)):(n(),i("h2",P,"Завантаження..."))])]),a("div",V,[s.tdata&&s.tdata.questions&&s.tdata.questions.length>0?(n(),i("div",B,[s.tdata.questions[s.currindex].NUMS>1?(n(),i("div",E,[(n(!0),i(p,null,_(s.tdata.questions[s.currindex].answers||[],(h,d)=>(n(),i("li",{onClick:q=>c.SetA(d),id:"f-dh1",class:m({selecteds:s.Asis.includes(d)}),key:d},[a("label",null,l(h.name),1)],10,z))),128))])):r("",!0),s.tdata.questions[s.currindex].NUMS==1?(n(),i("div",G,[(n(!0),i(p,null,_(s.tdata.questions[s.currindex].answers||[],(h,d)=>(n(),i("li",{onClick:q=>c.hdcl(d),id:"f-dh1",class:m({selecteds:s.Asis.includes(d)}),key:d},[a("label",null,l(h.name),1)],10,D))),128))])):r("",!0),s.tdata.questions[s.currindex].NUMS>1?(n(),i("button",{key:2,onClick:t[0]||(t[0]=h=>c.Next())},"Наступне питання")):r("",!0)])):r("",!0)]),s.ise?(n(),i("div",I,[a("div",L,[a("h1",null,l(s.tdata.name),1),a("h2",null,"Тест створив "+l(s.tdata.tname),1),t[1]||(t[1]=N()),t[2]||(t[2]=a("br",null,null,-1)),a("h3",O,"Ваші бали: "+l(s.userp),1)])])):r("",!0)])}const R=x(k,[["render",Q],["__scopeId","data-v-deb1daab"]]);export{R as default};
