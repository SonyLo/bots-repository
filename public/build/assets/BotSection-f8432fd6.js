import{_ as m,a as p}from"./Mail-64f7d125.js";import{_ as u,A as f,Y as b,e as c,f as k,B as h,d as y,g,h as _,c as v}from"./BotList-b2f97a76.js";import{o as t,q as a,t as s,C as n,x as w,z as o,H as r,A as $,F as C}from"./index.es-ce2063b4.js";const S={class:"dropdown custom-dropdown"},B=s("button",{style:{"min-width":"50px","min-height":"50px"},type:"button",class:"btn btn-outline-primary dropdown-toggle mb-3",href:"#",role:"button",id:"dropdownMenuLink","data-bs-toggle":"dropdown","aria-expanded":"false"},[s("i",{class:"fa-solid fa-screwdriver-wrench mr-2"}),n(" Инструменты бота ")],-1),P={class:"dropdown-menu","aria-labelledby":"dropdownMenuLink"},F=s("i",{class:"fa-solid fa-info mr-2"},null,-1),L=s("i",{class:"fa-solid fa-file mr-2"},null,-1),A=s("i",{class:"fa-solid fa-code mr-2"},null,-1),M=s("i",{class:"fa-solid fa-keyboard mr-2"},null,-1),N=s("i",{class:"fa-solid fa-scroll mr-2"},null,-1),V=s("i",{class:"fa-solid fa-comment-dots mr-2"},null,-1),I=s("i",{class:"fa-solid fa-users mr-2"},null,-1),T=s("i",{class:"fa-regular fa-newspaper mr-2"},null,-1),Y=s("i",{class:"fa-solid fa-list-check mr-2"},null,-1),O=s("i",{class:"fa-solid fa-list-check mr-2"},null,-1),j=s("i",{class:"fa-brands fa-shopify mr-2"},null,-1),q=s("i",{class:"fa-brands fa-shopify mr-2"},null,-1),z={key:0,class:"row"},D={class:"col-12"},E={key:1,class:"pb-5 mb-5"},H={key:2,class:"pb-5 mb-5"},R={key:3,class:"pb-5 mb-5"},G={key:4,class:"pb-5 mb-5"},J={key:5,class:"pb-5 mb-5"},K={key:6,class:"pb-5 mb-5"},Q={key:7,class:"pb-5 mb-5"},U={key:8,class:"pb-5 mb-5"},W={key:9,class:"pb-5 mb-5"},X={key:10,class:"pb-5 mb-5"},Z={key:11,class:"row pb-5 mb-5"},x={key:0,class:"col-12 col-md-12"},ss={key:12,class:"pb-5 mb-5"},es={props:["company","bot"],data(){return{page:null,step:0,load:!1,loadPage:!1}},mounted(){this.setStep(localStorage.getItem("cashman_set_botform_step_index")||0)},methods:{setStep(i){this.step=parseInt(i),localStorage.setItem("cashman_set_botform_step_index",i)},pageListCallback(i){this.loadPage=!0,this.page=i,this.$nextTick(()=>{this.loadPage=!1})},pageCallback(i){this.loadPageList=!0,this.$nextTick(()=>{this.loadPageList=!1})}}},as=Object.assign(es,{__name:"BotSection",setup(i){return(e,l)=>(t(),a(C,null,[s("div",S,[B,s("ul",P,[s("li",null,[s("a",{class:"dropdown-item",href:"#bot-info",onClick:l[0]||(l[0]=d=>e.setStep(0))},[F,n("Информация о боте")])]),s("li",null,[s("a",{class:"dropdown-item",href:"#bot-pages",onClick:l[1]||(l[1]=d=>e.setStep(4))},[L,n("Страницы")])]),s("li",null,[s("a",{class:"dropdown-item",href:"#bot-custom-fields",onClick:l[2]||(l[2]=d=>e.setStep(10))},[A,n("Настраиваемые поля")])]),s("li",null,[s("a",{class:"dropdown-item",href:"#bot-menu-template",onClick:l[3]||(l[3]=d=>e.setStep(1))},[M,n("Все клавиатуры в боте")])]),s("li",null,[s("a",{class:"dropdown-item",href:"#bot-slugs",onClick:l[4]||(l[4]=d=>e.setStep(2))},[N,n("Все скрипты в боте")])]),s("li",null,[s("a",{class:"dropdown-item",href:"#bot-dialogs",onClick:l[5]||(l[5]=d=>e.setStep(6))},[V,n("Все диалоги в боте")])]),s("li",null,[s("a",{class:"dropdown-item",href:"#bot-users",onClick:l[6]||(l[6]=d=>e.setStep(3))},[I,n("Все пользователи в боте")])]),s("li",null,[s("a",{class:"dropdown-item",href:"#bot-news",onClick:l[7]||(l[7]=d=>e.setStep(9))},[T,n(" Новостной канал")])]),s("li",null,[s("a",{class:"dropdown-item",href:"#bot-amo",onClick:l[8]||(l[8]=d=>e.setStep(7))},[Y,n(" AMO CRM")])]),s("li",null,[s("a",{class:"dropdown-item",href:"#bot-y-clients",onClick:l[9]||(l[9]=d=>e.setStep(12))},[O,n(" YClients")])]),s("li",null,[s("a",{class:"dropdown-item",href:"#bot-shop",onClick:l[10]||(l[10]=d=>e.setStep(8))},[j,n(" Магазин")])]),s("li",null,[s("a",{class:"dropdown-item",href:"#bot-media",onClick:l[11]||(l[11]=d=>e.setStep(11))},[q,n(" Медиа файлы бота")])])])]),i.company?(t(),a("div",z,[s("div",D,[s("h6",null,"Создаем бот к компании "+w(i.company.title||"Не установлен"),1)])])):o("",!0),e.step===0?(t(),a("div",E,[e.load?o("",!0):(t(),r(u,{key:0,bot:i.bot},null,8,["bot"]))])):o("",!0),e.step===7?(t(),a("div",H,[e.load?o("",!0):(t(),r(f,{key:0,data:i.bot.amo},null,8,["data"]))])):o("",!0),e.step===12?(t(),a("div",R,[e.load?o("",!0):(t(),r(b,{key:0,data:i.bot.y_clients},null,8,["data"]))])):o("",!0),e.step===11?(t(),a("div",G,[e.load?o("",!0):(t(),r(c,{key:0}))])):o("",!0),e.step===8?(t(),a("div",J,[e.load?o("",!0):(t(),r(k,{key:0}))])):o("",!0),e.step===10?(t(),a("div",K,[e.load?o("",!0):(t(),r(h,{key:0}))])):o("",!0),e.step===1?(t(),a("div",Q,[e.load?o("",!0):(t(),r(m,{key:0,"select-mode":!1}))])):o("",!0),e.step===6?(t(),a("div",U,[e.load?o("",!0):(t(),r(y,{key:0}))])):o("",!0),e.step===2?(t(),a("div",W,[e.load?o("",!0):(t(),r(g,{key:0}))])):o("",!0),e.step===3?(t(),a("div",X,[e.load?o("",!0):(t(),r(_,{key:0}))])):o("",!0),e.step===4?(t(),a("div",Z,[e.load?o("",!0):(t(),a("div",x,[e.loadPage?o("",!0):(t(),r(v,{key:0,page:e.page,onCallback:e.pageCallback},null,8,["page","onCallback"]))]))])):o("",!0),e.step===9?(t(),a("div",ss,[$(p)])):o("",!0)],64))}});export{as as _};
