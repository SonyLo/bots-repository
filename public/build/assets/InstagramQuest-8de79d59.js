import{c as o,a as t,d as l,o as c}from"./app-86ea7a9c.js";const i={class:"row"},r={class:"col-12 mb-2"},d={class:"card"},u={class:"card-body"},_=["innerHTML"],p=t("div",{class:"col-12 d-flex justify-content-center align-items-center",style:{"padding-top":"100px"}},null,-1),m=t("div",{class:"col-12 p-5 mt-2"},[t("button",{type:"submit",class:"btn btn-outline-info p-2"}," Завершить квест ")],-1),b={class:"col-12 p-5 mt-2"},g={name:"App",data(){return{}},computed:{tg(){return window.Telegram.WebApp},tgUser(){const e=new URLSearchParams(this.tg.initData);return JSON.parse(e.get("user"))}},mounted(){},methods:{closeQuest(){this.tg.close()}}},v=Object.assign(g,{props:{rules:String},setup(e){return(s,n)=>(c(),o("div",i,[t("div",r,[t("div",d,[t("div",u,[e.rules?(c(),o("p",{key:0,innerHTML:e.rules},null,8,_)):l("",!0)])])]),p,m,t("div",b,[t("button",{onClick:n[0]||(n[0]=(...a)=>s.closeQuest&&s.closeQuest(...a)),type:"button",class:"btn btn-outline-info p-2"}," Вернуться в бота ")])]))}});export{v as default};
