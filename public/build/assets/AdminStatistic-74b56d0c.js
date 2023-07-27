import{o as n,c as i,a as t,e as a,t as l}from"./app-1391603c.js";const c={key:0,class:"container pt-3 pb-3"},e={class:"row mb-2"},d={class:"col-12"},o={class:"card"},u=t("div",{class:"card-header"},[t("h5",null,"Статистика бота")],-1),r={class:"card-body"},_={key:1,class:"container"},b=t("div",{class:"row"},[t("div",{class:"alert alert-warning",role:"alert"}," Вы не являетесь администратором ")],-1),g=[b],h={data(){return{loading:!1}},computed:{tg(){return window.Telegram.WebApp},tgUser(){const s=new URLSearchParams(this.tg.initData);return JSON.parse(s.get("user"))}},methods:{}},k=Object.assign(h,{__name:"AdminStatistic",props:{bot:{type:Object},botUser:{type:Object},statistic:{type:Object}},setup(s){return(m,y)=>s.botUser.is_admin?(n(),i("div",c,[t("div",e,[t("div",d,[t("div",o,[u,t("div",r,[t("p",null,[a(" Всего пользователей в БД: "),t("strong",null,l(s.statistic.users_in_bd||0),1)]),t("p",null,[a(" Всего VIP: "),t("strong",null,l(s.statistic.vip_in_bd||0),1)]),t("p",null,[a(" Администраторы в БД: "),t("strong",null,l(s.statistic.admin_in_bd||0),1)]),t("p",null,[a(" Администраторы за работой: "),t("strong",null,l(s.statistic.work_admin_in_bd||0),1)]),t("p",null,[a(" Пользователей за день: "),t("strong",null,l(s.statistic.users_in_bd_today||0),1)]),t("p",null,[a(" VIP за день: "),t("strong",null,l(s.statistic.vip_in_bd_today||0),1)]),t("p",null,[a(" Выдано кэшбэка за день: "),t("strong",null,l(s.statistic.cashback_day_up||0)+" руб.",1)]),t("p",null,[a(" Списано кэшбэка за день: "),t("strong",null,l(s.statistic.cashback_day_down||0)+" руб.",1)]),t("p",null,[a(" Всего кэшбэка на счету у пользователей: "),t("strong",null,l(s.statistic.summary_cashback||0)+" руб.",1)]),t("p",null,[a(" Всего кэшбэка начислено пользователям: "),t("strong",null,l(s.statistic.cashback_summary_up||0)+" руб.",1)]),t("p",null,[a(" Всего кэшбэка списано у пользователей: "),t("strong",null,l(s.statistic.cashback_summary_down||0)+" руб.",1)]),t("p",null,[a(" Всего за день начислено кэшбэка первого уровня: "),t("strong",null,l(s.statistic.cashback_day_up_level_1||0)+" руб.",1)]),t("p",null,[a(" Всего за день начислено кэшбэка второго уровня: "),t("strong",null,l(s.statistic.cashback_day_up_level_2||0)+" руб.",1)]),t("p",null,[a(" Всего за день начислено кэшбэка третьего уровня: "),t("strong",null,l(s.statistic.cashback_day_up_level_3||0)+" руб.",1)])])])])])])):(n(),i("div",_,g))}});export{k as default};
