import{_ as m}from"./MainAdminLayout-635ec8b4.js";import{_ as d}from"./BotSection-e507480b.js";import{_ as u}from"./CompanyList-fc255b8d.js";import{_ as c,a as b}from"./BotList-e6c9c37b.js";import{G as h,q as o,K as r,O as y,v as s,x as l,t as i,A as a}from"./index.es-77235f88.js";import"./Mail-6a73ba54.js";import"./TelegramChannelHelper-c9c5b03c.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./v4-a960c1f4.js";import"./Pagination-df5e6be2.js";import"./GlobalSlugList-9c03361c.js";/* empty css                                                               */const C={class:"container"},_={class:"row mb-2"},k={class:"col-12"},v={class:"btn-group",role:"group","aria-label":"Basic outlined example"},f=["disabled"],g={key:0,class:"row"},B={key:0,class:"col-12"},$={class:"col-12"},w={key:1,class:"row"},S={key:2},L={data(){return{load:!1,step:0,bot:null,company:null}},computed:{...h(["getCurrentBot","getCurrentCompany"])},mounted(){this.loadCurrentCompany(),this.loadCurrentBot(),this.setStep(localStorage.getItem("cashman_set_botpage_step_index")||0),window.addEventListener("store_current_bot-change-event",e=>{this.bot=this.getCurrentBot,this.step=this.bot?2:1}),window.addEventListener("store_current_company-change-event",e=>{this.company=this.getCurrentCompany})},methods:{setStep(e){this.step=parseInt(e),localStorage.setItem("cashman_set_botpage_step_index",e)},loadCurrentBot(e=null){this.$store.dispatch("updateCurrentBot",{bot:e}).then(()=>{this.bot=this.getCurrentBot})},loadCurrentCompany(e=null){this.$store.dispatch("updateCurrentCompany",{company:e}).then(()=>{this.company=this.getCurrentCompany})},companyListCallback(e){this.load=!0,this.loadCurrentCompany(e),this.$nextTick(()=>{this.load=!1})},botListCallback(e){this.load=!0,this.setStep(2),this.loadCurrentBot(e),this.$nextTick(()=>{this.load=!1})}}},P=Object.assign(L,{__name:"BotPage",setup(e){return(t,n)=>(o(),r(m,{active:1,"need-menu":!0},{default:y(()=>[s("div",C,[s("div",_,[s("div",k,[s("div",v,[s("button",{type:"button",onClick:n[0]||(n[0]=p=>t.setStep(0)),class:l([{"btn-primary":t.step===0,"btn-outline-primary":t.step!==0},"btn"])},"Создание бота ",2),s("button",{type:"button",onClick:n[1]||(n[1]=p=>t.setStep(1)),class:l([{"btn-primary":t.step===1,"btn-outline-primary":t.step!==1},"btn"])},"Поиск бота ",2),s("button",{type:"button",disabled:!t.bot,onClick:n[2]||(n[2]=p=>t.setStep(2)),class:l([{"btn-primary":t.step===2,"btn-outline-primary":t.step!==2},"btn"])},"Редактирование бота ",10,f)])])]),t.step===0?(o(),i("div",g,[t.company?a("",!0):(o(),i("div",B,[t.load?a("",!0):(o(),r(u,{key:0,onCallback:t.companyListCallback},null,8,["onCallback"]))])),s("div",$,[t.company&&!t.load?(o(),r(c,{key:0,company:t.company},null,8,["company"])):a("",!0)])])):a("",!0),t.step===1?(o(),i("div",w,[t.load?a("",!0):(o(),r(b,{key:0,editor:!0,onCallback:t.botListCallback},null,8,["onCallback"]))])):a("",!0),t.step===2?(o(),i("div",S,[t.bot&&!t.load?(o(),r(d,{key:0,bot:t.bot},null,8,["bot"])):a("",!0)])):a("",!0)])]),_:1}))}});export{P as default};