import{U as d}from"./UserInfo-79bbb145.js";import{c as a,a as e,b as l,d as r,o as i}from"./app-2413e500.js";const c={key:0,class:"container pt-3 pb-3"},b={class:"row mb-2"},h={class:"col-12"},m={class:"row"},_={class:"col-12"},g=["disabled"],u={key:0},w={key:1},f={class:"col-12"},k=["disabled"],p={key:1,class:"container"},U=e("div",{class:"row"},[e("div",{class:"alert alert-warning",role:"alert"}," Вы не являетесь администратором ")],-1),v=[U],y={data(){return{loading:!1}},computed:{tg(){return window.Telegram.WebApp},tgUser(){const t=new URLSearchParams(this.tg.initData);return JSON.parse(t.get("user"))}},methods:{selfRemove(){this.loading=!0,this.$store.dispatch("selfRemove",{dataObject:{bot_id:this.botUser.bot_id,tg:this.tgUser}}).then(t=>{this.loading=!1,window.location.reload()}).catch(()=>{this.loading=!1})},workStateChange(){this.loading=!0,this.$store.dispatch("workStateChange",{dataObject:{bot_id:this.botUser.bot_id,tg:this.tgUser}}).then(t=>{this.loading=!1,window.location.reload()}).catch(()=>{this.loading=!1})}}},O=Object.assign(y,{__name:"AdminWorkStatus",props:{user:{type:Object},botUser:{type:Object}},setup(t){return(s,o)=>t.botUser.is_admin?(i(),a("div",c,[e("div",b,[e("div",h,[l(d,{"bot-user":t.botUser},null,8,["bot-user"])])]),e("div",m,[e("div",_,[e("button",{onClick:o[0]||(o[0]=(...n)=>s.workStateChange&&s.workStateChange(...n)),disabled:s.loading,class:"btn btn-outline-primary w-100 mb-2"},[t.botUser.is_work?(i(),a("span",u,"Завершить рабочую смену")):r("",!0),t.botUser.is_work?r("",!0):(i(),a("span",w,"Начать рабочую смены"))],8,g)]),e("div",f,[e("button",{onClick:o[1]||(o[1]=(...n)=>s.selfRemove&&s.selfRemove(...n)),disabled:s.loading||!t.botUser.is_admin,class:"btn btn-outline-primary w-100 mb-2"}," Разжаловать себя из администраторов ",8,k)])])])):(i(),a("div",p,v))}});export{O as default};
