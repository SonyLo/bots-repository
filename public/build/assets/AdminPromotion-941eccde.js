import{o as t,c as s,h as o,a}from"./app-e6f6598d.js";const r={key:0,class:"container pt-3 pb-3"},c=o('<div class="row mb-2"><div class="col-12"><div class="card"><div class="card-header"><h5>Управление рассылкой и рекламой</h5></div><div class="card-body"></div></div></div></div>',1),d=[c],i={key:1,class:"container"},n=a("div",{class:"row"},[a("div",{class:"alert alert-warning",role:"alert"}," Вы не являетесь администратором ")],-1),l=[n],_={data(){return{loading:!1}},computed:{tg(){return window.Telegram.WebApp},tgUser(){const e=new URLSearchParams(this.tg.initData);return JSON.parse(e.get("user"))}},methods:{}},v=Object.assign(_,{__name:"AdminPromotion",props:{bot:{type:Object},botUser:{type:Object}},setup(e){return(h,m)=>e.botUser.is_admin?(t(),s("div",r,d)):(t(),s("div",i,l))}});export{v as default};
