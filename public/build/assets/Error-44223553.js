import{_ as c,o as r,c as n,a as s,w as i,j as l}from"./app-e6f6598d.js";const d={data(){return{}},computed:{tg(){return window.Telegram.WebApp},tgUser(){const t=new URLSearchParams(this.tg.initData);return JSON.parse(t.get("user"))}},mounted(){},methods:{}},_={class:"container py-5 px-3"},p=s("div",{class:"row mb-3"},[s("div",{class:"col-12"},[s("div",{class:"alert alert-info",role:"alert"}," В данный момент этот раздел находится на техническом обслуживании! В ближайшее время всё заработает:) Спасибо за ожидание! ")])],-1),u={class:"row"},m={class:"col-12"},v={class:"w-100",style:{"object-fit":"cover"},alt:""},h={class:"row"},w={class:"col-12"};function g(t,e,f,b,y,o){const a=l("lazy");return r(),n("div",_,[p,s("div",u,[s("div",m,[i(s("img",v,null,512),[[a,"/images/cashman.jpg"]])])]),s("div",h,[s("div",w,[s("button",{type:"button",onClick:e[0]||(e[0]=x=>o.tg.close()),class:"btn btn-outline-success w-100 p-3"},"Вернуться в бота ")])])])}const j=c(d,[["render",g]]);export{j as default};
