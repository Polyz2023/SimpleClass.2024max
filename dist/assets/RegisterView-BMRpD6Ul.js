import{a as g}from"./axios-CCb-kr4I.js";import{_ as f,c as p,a as l,w as r,v as d,b as n,d as y,o as u}from"./index-5lSxJeUB.js";const k={data(){return{isReg:!1,selectedFile:null,profilePicture:null,username:"",email:null,password:null,tname:null,token:null}},methods:{handleDivClick(){this.$refs.fileInput.click()},handleFileChange(i){const e=i.target.files[0];if(e){const a=new FileReader;a.onload=m=>{this.profilePicture=m.target.result},a.readAsDataURL(e),this.selectedFile=e}},async SignUp(){try{const i=await g.post("http://localhost:7000/register/sign/up",{username:this.username,password:this.password,email:this.email,IMG:this.profilePicture,tname:this.tname});localStorage.setItem("SC-token",i.data.token),console.log("Token saved:",i.data.token),this.$router.push("/")}catch(i){console.error("Error async SignUp(): ",i)}},async SignIn(){try{const i=await g.post("http://localhost:7000/register/sign/in",{password:this.password,email:this.email});localStorage.setItem("SC-token",i.data.token),console.log("Token saved:",i.data.token),this.$router.push("/")}catch(i){console.error("Error async SignIn(): ",i)}}}},v={id:"dh2"},w={key:0,id:"form",class:"slide-in"},x={style:{"text-align":"center","margin-top":"20px",color:"white"}},h={key:1,id:"form",class:"slide-in"},C={style:{display:"flex","justify-content":"center","margin-top":"10px"}},S=["src"],b={key:1},R={style:{"text-align":"center","margin-top":"20px",color:"white"}};function U(i,e,a,m,s,o){return u(),p("main",null,[e[26]||(e[26]=l("div",{id:"dh1"},[l("div",null,[l("h1",null,"SimpleClass"),l("p",{style:{"text-align":"center"}},"Тестовий час для вчителів")])],-1)),l("div",v,[s.isReg?y("",!0):(u(),p("div",w,[l("div",null,[e[12]||(e[12]=l("h1",{style:{"text-align":"center",color:"white"}},"Ввійти в аккаунт",-1)),r(l("input",{type:"email",class:"i-email",placeholder:"Пошта","onUpdate:modelValue":e[0]||(e[0]=t=>s.email=t)},null,512),[[d,s.email]]),e[13]||(e[13]=n()),e[14]||(e[14]=l("br",null,null,-1)),r(l("input",{type:"password",class:"i-pass",placeholder:"Пароль","onUpdate:modelValue":e[1]||(e[1]=t=>s.password=t)},null,512),[[d,s.password]]),e[15]||(e[15]=n()),e[16]||(e[16]=l("br",null,null,-1)),l("button",{onClick:e[2]||(e[2]=t=>o.SignIn())},"Вхід")]),l("div",x,[e[17]||(e[17]=n(" Не маєте аккаунту? ")),l("a",{href:"#",style:{color:"#36629c"},onClick:e[3]||(e[3]=t=>this.isReg=!this.isReg)},"Зареєструватися"),e[18]||(e[18]=n(" або ")),e[19]||(e[19]=l("a",{href:"/test/jointest",style:{color:"#36629c"}},"Приєднатися до тесту",-1))])])),s.isReg?(u(),p("div",h,[l("div",null,[e[20]||(e[20]=l("h1",{style:{"text-align":"center",color:"white"}},"Реєстрація для вчителя",-1)),r(l("input",{type:"email",class:"i-email",placeholder:"Пошта","onUpdate:modelValue":e[4]||(e[4]=t=>s.email=t)},null,512),[[d,s.email]]),e[21]||(e[21]=n()),e[22]||(e[22]=l("br",null,null,-1)),r(l("input",{type:"password",class:"i-pass",placeholder:"Пароль","onUpdate:modelValue":e[5]||(e[5]=t=>s.password=t)},null,512),[[d,s.password]]),e[23]||(e[23]=n()),e[24]||(e[24]=l("br",null,null,-1)),r(l("input",{type:"text",placeholder:"Системне ім'я (на англійскій без пробілів)","onUpdate:modelValue":e[6]||(e[6]=t=>s.username=t),maxlength:"50"},null,512),[[d,s.username]]),r(l("input",{type:"text",placeholder:"Ім'я вчителя","onUpdate:modelValue":e[7]||(e[7]=t=>s.tname=t),maxlength:"50"},null,512),[[d,s.tname]]),l("div",C,[l("div",{class:"icon-div",onClick:e[8]||(e[8]=(...t)=>o.handleDivClick&&o.handleDivClick(...t)),style:{width:"100px",height:"100px","border-radius":"50%","background-color":"#ccc",cursor:"pointer",display:"flex","align-items":"center","justify-content":"center"}},[s.profilePicture?(u(),p("img",{key:0,src:s.profilePicture,alt:"icon",style:{width:"100%",height:"100%","border-radius":"50%"}},null,8,S)):(u(),p("span",b,"Завантажити картинку"))]),l("input",{type:"file",ref:"fileInput",style:{display:"none"},onChange:e[9]||(e[9]=(...t)=>o.handleFileChange&&o.handleFileChange(...t))},null,544)]),l("button",{onClick:e[10]||(e[10]=t=>o.SignUp())},"Зареєструватися")]),l("div",R,[e[25]||(e[25]=n(" Маєте аккаунт? ")),l("a",{href:"#",style:{color:"#36629c"},onClick:e[11]||(e[11]=t=>this.isReg=!this.isReg)},"Вхід")])])):y("",!0)])])}const F=f(k,[["render",U],["__scopeId","data-v-6cfac311"]]);export{F as default};