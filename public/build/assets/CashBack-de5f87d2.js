import{_ as n}from"./app-be2e8804.js";import{G as h,q as a,t as c,v as t,y as i,F as r,A as o,C as d,K as u,D as _}from"./index.es-bac3219e.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./BotMediaList-166fc8f2.js";import"./Pagination-fa992967.js";import"./InlineInjectionsHelper.vue_vue_type_style_index_0_lang-cc00f49a.js";import"./main-f2e340c9.js";import"./TelegramChannelHelper-73aab52f.js";import"./v4-4a60fe23.js";import"./carousel.es-e7f9ade3.js";import"./GlobalSlugList-c3ba807f.js";import"./vue3-perfect-scrollbar-1b07c902.js";import"./index-f321b178.js";const p={key:0,class:"container"},m={class:"row"},k={class:"col-12"},f=t("h6",{class:"opacity-75 my-3"},"Ваш текущий баланс",-1),g={class:"list-group"},B={class:"list-group-item d-flex justify-content-between p-3","aria-current":"true"},b=t("span",null,"Получено CashBack",-1),y={class:"text-primary fw-bold"},C={class:"col-12"},w={key:0,class:"opacity-75 my-3"},j={key:1,class:"list-group"},v={class:"list-group-item d-flex justify-content-between p-3","aria-current":"true"},S={class:"text-primary fw-bold"},O={class:"row"},V=t("div",{class:"col-12"},[t("h5",{class:"my-3"},[t("i",{class:"fa-solid fa-list-check mr-1 text-primary"}),_(" История операция")])],-1),A={class:"col-12"},N={data(){return{cashback:[],cashback_paginate_object:null}},watch:{self:{handler:function(e){this.loadCashBack()},deep:!0}},computed:{...h(["getSelf","getCashBack","getCashBackPaginateObject"]),self(){return this.getSelf},tg(){return window.Telegram.WebApp}},mounted(){this.self&&this.loadCashBack(),this.tg.BackButton.show(),this.tg.BackButton.onClick(()=>{document.querySelectorAll('[data-bs-dismiss="modal"]').forEach(e=>e.click()),this.$router.back()})},methods:{nextCashBackPage(e){this.loadCashBack(e)},loadCashBack(e=0){this.$store.dispatch("loadCashBack",{dataObject:{user_telegram_chat_id:this.self.telegram_chat_id},page:e}).then(s=>{this.cashback=this.getCashBack,this.cashback_paginate_object=this.getCashBackPaginateObject}).catch(()=>{this.loading=!1})}}},I=Object.assign(N,{__name:"CashBack",setup(e){return(s,P)=>s.self?(a(),c("div",p,[t("div",m,[t("div",k,[f,t("ul",g,[t("li",B,[b,t("span",y,i(s.self.cashBack.amount||0)+" ₽",1)])])]),t("div",C,[s.self.cashBack?(a(),c(r,{key:0},[(s.self.cashBack.subs||[]).length>0?(a(),c("h6",w,"Специальные начисления")):o("",!0),(s.self.cashBack.subs||[]).length>0?(a(),c("ul",j,[(a(!0),c(r,null,d(s.self.cashBack.subs,l=>(a(),c("li",v,[t("span",null,i(l.title||"-"),1),t("span",S,i(l.amount||0)+" ₽",1)]))),256))])):o("",!0)],64)):o("",!0)])]),t("div",O,[V,t("div",A,[s.getSelf?(a(),u(n,{key:0,"bot-user":s.getSelf},null,8,["bot-user"])):o("",!0)])])])):o("",!0)}});export{I as default};