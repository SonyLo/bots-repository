import{_ as d}from"./MainAdminLayout-635ec8b4.js";import{_ as u}from"./BotSection-8340bf7a.js";import"./CompanyList-6b051f66.js";import{_ as m,a as b}from"./BotList-2465cc42.js";import{G as c,q as o,K as r,O as _,v as s,x as i,t as l,A as n}from"./index.es-77235f88.js";import"./Mail-6a73ba54.js";import"./TelegramChannelHelper-c9c5b03c.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./v4-a960c1f4.js";import"./Pagination-df5e6be2.js";import"./GlobalSlugList-9c03361c.js";/* empty css                                                               */const h={class:"container"},k={class:"row mb-2"},C={class:"col-12"},v={class:"btn-group",role:"group","aria-label":"Basic outlined example"},y=["disabled"],f={key:0,class:"row"},g={class:"col-12"},B={key:1,class:"row"},$={key:2},S={data(){return{load:!1,step:0,bot:null}},computed:{...c(["getCurrentBot"])},mounted(){this.loadCurrentBot(),this.setStep(localStorage.getItem("cashman_set_botpage_step_index")||0),window.addEventListener("store_current_bot-change-event",e=>{this.bot=this.getCurrentBot,this.step=this.bot?2:1})},methods:{setStep(e){this.step=parseInt(e),localStorage.setItem("cashman_set_botpage_step_index",e)},loadCurrentBot(e=null){this.$store.dispatch("updateCurrentBot",{bot:e}).then(()=>{this.bot=this.getCurrentBot})},botListCallback(e){this.load=!0,this.setStep(2),this.loadCurrentBot(e),this.$nextTick(()=>{this.load=!1})}}},K=Object.assign(S,{__name:"BotPage",setup(e){return(t,a)=>(o(),r(d,{active:1,"need-menu":!0},{default:_(()=>[s("div",h,[s("div",k,[s("div",C,[s("div",v,[s("button",{type:"button",onClick:a[0]||(a[0]=p=>t.setStep(0)),class:i([{"btn-primary":t.step===0,"btn-outline-primary":t.step!==0},"btn"])},"Создание бота ",2),s("button",{type:"button",onClick:a[1]||(a[1]=p=>t.setStep(1)),class:i([{"btn-primary":t.step===1,"btn-outline-primary":t.step!==1},"btn"])},"Поиск бота ",2),s("button",{type:"button",disabled:!t.bot,onClick:a[2]||(a[2]=p=>t.setStep(2)),class:i([{"btn-primary":t.step===2,"btn-outline-primary":t.step!==2},"btn"])},"Редактирование бота ",10,y)])])]),t.step===0?(o(),l("div",f,[s("div",g,[t.load?n("",!0):(o(),r(m,{key:0}))])])):n("",!0),t.step===1?(o(),l("div",B,[t.load?n("",!0):(o(),r(b,{key:0,editor:!0,onCallback:t.botListCallback},null,8,["onCallback"]))])):n("",!0),t.step===2?(o(),l("div",$,[t.bot&&!t.load?(o(),r(u,{key:0,bot:t.bot},null,8,["bot"])):n("",!0)])):n("",!0)])]),_:1}))}});export{K as default};
