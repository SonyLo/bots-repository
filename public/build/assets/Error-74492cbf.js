import{_ as a}from"./_plugin-vue_export-helper-c27b6911.js";import{o as c,q as n,t,H as i,J as l}from"./index.es-065e5c55.js";const d={data(){return{}},computed:{tg(){return window.Telegram.WebApp},tgUser(){const s=new URLSearchParams(this.tg.initData);return JSON.parse(s.get("user"))}},mounted(){},methods:{}},_={class:"container py-5 px-3"},p=t("div",{class:"row mb-3"},[t("div",{class:"col-12"},[t("div",{class:"alert alert-info",role:"alert"}," В данный момент этот раздел находится на техническом обслуживании! В ближайшее время всё заработает:) Спасибо за ожидание! ")])],-1),m={class:"row"},u={class:"col-12"},v={class:"w-100",style:{"object-fit":"cover"},alt:""},h={class:"row"},f={class:"col-12"};function g(s,e,w,b,y,o){const r=l("lazy");return c(),n("div",_,[p,t("div",m,[t("div",u,[i(t("img",v,null,512),[[r,"/images/cashman.jpg"]])])]),t("div",h,[t("div",f,[t("button",{type:"button",onClick:e[0]||(e[0]=x=>o.tg.close()),class:"btn btn-outline-success w-100 p-3"},"Вернуться в бота ")])])])}const B=a(d,[["render",g]]);export{B as default};
