import{_ as m,a as u}from"./Mail-ad7833f3.js";import{e as b,_ as f,A as c,Y as k,f as h,g as y,B as g,d as v,h as C,i as _,c as w}from"./BotList-edd6442d.js";import{q as t,t as n,v as e,x as p,D as i,A as o,K as r,B as $,F as S}from"./index.es-4f31449e.js";const B={class:"d-flex custom-dropdown justify-content-between align-items-center"},L={class:"btn-group"},P=e("i",{class:"fa-solid fa-info mr-2"},null,-1),F=e("i",{class:"fa-solid fa-file mr-2"},null,-1),A={key:0,class:"dropdown"},M=e("button",{type:"button",class:"btn btn-primary dropdown-toggle text-primary p-2",href:"#",role:"button",id:"dropdownMenuLink","data-bs-toggle":"dropdown","aria-expanded":"false"},[e("i",{class:"fa-solid fa-screwdriver-wrench mr-2"})],-1),N={class:"dropdown-menu","aria-labelledby":"dropdownMenuLink"},R=e("i",{class:"fa-regular fa-calendar-days mr-2"},null,-1),T=e("i",{class:"fa-solid fa-code mr-2"},null,-1),V=e("i",{class:"fa-solid fa-keyboard mr-2"},null,-1),I=e("i",{class:"fa-solid fa-scroll mr-2"},null,-1),Y=e("i",{class:"fa-solid fa-comment-dots mr-2"},null,-1),j=e("i",{class:"fa-solid fa-users mr-2"},null,-1),O=e("i",{class:"fa-regular fa-newspaper mr-2"},null,-1),q=e("i",{class:"fa-solid fa-list-check mr-2"},null,-1),z=e("i",{class:"fa-solid fa-list-check mr-2"},null,-1),D=e("i",{class:"fa-brands fa-shopify mr-2"},null,-1),E=e("i",{class:"fa-brands fa-shopify mr-2"},null,-1),K={key:0,class:"pb-5 mb-5"},G={key:1,class:"pb-5 mb-5"},H={key:2,class:"pb-5 mb-5"},J={key:3,class:"pb-5 mb-5"},Q={key:4,class:"pb-5 mb-5"},U={key:5,class:"pb-5 mb-5"},W={key:6,class:"pb-5 mb-5"},X={key:7,class:"pb-5 mb-5"},Z={key:8,class:"pb-5 mb-5"},x={key:9,class:"pb-5 mb-5"},ss={key:10,class:"pb-5 mb-5"},es={key:11,class:"row pb-5 mb-5"},ts={key:0,class:"col-12 col-md-12"},os={key:12,class:"pb-5 mb-5"},as={props:["bot"],data(){return{page:null,step:0,load:!1,loadPage:!1}},mounted(){this.setStep(localStorage.getItem("cashman_set_botform_step_index")||0)},methods:{hasRole(l){return window.hasRole(l)||!1},setStep(l){this.step=parseInt(l),localStorage.setItem("cashman_set_botform_step_index",l)},pageListCallback(l){this.loadPage=!0,this.page=l,this.$nextTick(()=>{this.loadPage=!1})},pageCallback(l){this.page=l,this.loadPageList=!0,this.$nextTick(()=>{this.loadPageList=!1})},loadCurrentCompany(l=null){this.$store.dispatch("updateCurrentCompany",{company:l}).then(()=>{this.company=this.getCurrentCompany})},companyListCallback(l){this.load=!0,this.loadCurrentCompany(l),this.$nextTick(()=>{this.load=!1})}}},ds=Object.assign(as,{__name:"BotSection",setup(l){return(s,a)=>(t(),n(S,null,[e("div",B,[e("div",L,[e("button",{type:"button",class:p(["btn btn-primary text-primary",{"bg-primary text-white":s.step==0}]),onClick:a[0]||(a[0]=d=>s.setStep(0))},[P,i("Информация о боте")],2),e("button",{type:"button",class:p(["btn btn-primary text-primary",{"bg-primary text-white":s.step==4}]),onClick:a[1]||(a[1]=d=>s.setStep(4))},[F,i("Страницы")],2)]),s.hasRole("admin")?(t(),n("div",A,[M,e("ul",N,[e("li",null,[e("a",{class:"dropdown-item",href:"#bot-appointments",onClick:a[2]||(a[2]=d=>s.setStep(13))},[R,i("Запись на событие (прием)")])]),e("li",null,[e("a",{class:"dropdown-item",href:"#bot-custom-fields",onClick:a[3]||(a[3]=d=>s.setStep(10))},[T,i("Настраиваемые поля")])]),e("li",null,[e("a",{class:"dropdown-item",href:"#bot-menu-template",onClick:a[4]||(a[4]=d=>s.setStep(1))},[V,i("Все клавиатуры в боте")])]),e("li",null,[e("a",{class:"dropdown-item",href:"#bot-slugs",onClick:a[5]||(a[5]=d=>s.setStep(2))},[I,i("Все скрипты в боте")])]),e("li",null,[e("a",{class:"dropdown-item",href:"#bot-dialogs",onClick:a[6]||(a[6]=d=>s.setStep(6))},[Y,i("Все диалоги в боте")])]),e("li",null,[e("a",{class:"dropdown-item",href:"#bot-users",onClick:a[7]||(a[7]=d=>s.setStep(3))},[j,i("Все пользователи в боте")])]),e("li",null,[e("a",{class:"dropdown-item",href:"#bot-news",onClick:a[8]||(a[8]=d=>s.setStep(9))},[O,i(" Новостной канал")])]),e("li",null,[e("a",{class:"dropdown-item",href:"#bot-amo",onClick:a[9]||(a[9]=d=>s.setStep(7))},[q,i(" AMO CRM")])]),e("li",null,[e("a",{class:"dropdown-item",href:"#bot-y-clients",onClick:a[10]||(a[10]=d=>s.setStep(12))},[z,i(" YClients")])]),e("li",null,[e("a",{class:"dropdown-item",href:"#bot-shop",onClick:a[11]||(a[11]=d=>s.setStep(8))},[D,i(" Магазин")])]),e("li",null,[e("a",{class:"dropdown-item",href:"#bot-media",onClick:a[12]||(a[12]=d=>s.setStep(11))},[E,i(" Медиа файлы бота")])])])])):o("",!0)]),s.step===13?(t(),n("div",K,[s.load?o("",!0):(t(),r(b,{key:0,bot:l.bot},null,8,["bot"]))])):o("",!0),s.step===0?(t(),n("div",G,[s.load?o("",!0):(t(),r(f,{key:0,bot:l.bot},null,8,["bot"]))])):o("",!0),s.step===7?(t(),n("div",H,[s.load?o("",!0):(t(),r(c,{key:0,data:l.bot.amo},null,8,["data"]))])):o("",!0),s.step===12?(t(),n("div",J,[s.load?o("",!0):(t(),r(k,{key:0,data:l.bot.y_clients},null,8,["data"]))])):o("",!0),s.step===11?(t(),n("div",Q,[s.load?o("",!0):(t(),r(h,{key:0}))])):o("",!0),s.step===8?(t(),n("div",U,[s.load?o("",!0):(t(),r(y,{key:0}))])):o("",!0),s.step===10?(t(),n("div",W,[s.load?o("",!0):(t(),r(g,{key:0}))])):o("",!0),s.step===1?(t(),n("div",X,[s.load?o("",!0):(t(),r(m,{key:0,"select-mode":!1}))])):o("",!0),s.step===6?(t(),n("div",Z,[s.load?o("",!0):(t(),r(v,{key:0}))])):o("",!0),s.step===2?(t(),n("div",x,[s.load?o("",!0):(t(),r(C,{key:0}))])):o("",!0),s.step===3?(t(),n("div",ss,[s.load?o("",!0):(t(),r(_,{key:0}))])):o("",!0),s.step===4?(t(),n("div",es,[s.load?o("",!0):(t(),n("div",ts,[s.loadPage?o("",!0):(t(),r(w,{key:0,page:s.page,onCallback:s.pageCallback},null,8,["page","onCallback"]))]))])):o("",!0),s.step===9?(t(),n("div",os,[$(u)])):o("",!0)],64))}});export{ds as _};
