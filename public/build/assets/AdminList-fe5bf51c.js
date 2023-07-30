import{m as g,o as a,c as o,a as t,e as d,d as l,w as r,i as m,v as h,F as _,r as b,t as p,f as y,j as f}from"./app-df2ebee8.js";import{P as v}from"./Pagination-a4595215.js";const k={class:"container pt-3 pb-3"},A={class:"row"},j={class:"col-12 mb-3"},w={class:"card border-success"},P={class:"card-body"},B={key:0},O=t("strong",null,"CashBack",-1),V={key:1},U=t("b",null,"номер телефона",-1),C={class:"col-12"},D={key:0},N={class:"btn-group mb-3",role:"group","aria-label":"Basic radio toggle button group"},R=t("label",{class:"btn btn-outline-primary",for:"btnradio1"},"Начислить CashBack",-1),$=t("label",{class:"btn btn-outline-primary",for:"btnradio2"},"Забронировать столик",-1),q={key:0,class:"input-group mb-3"},F=t("span",{class:"input-group-text",id:"booking-phone"},"Телефон",-1),L={key:1,class:"list-group"},S=["onClick"],T={class:"d-flex w-100 justify-content-between"},M={class:"mb-1"},E={class:"text-muted"},G={class:"mb-1"},J=t("small",{class:"text-muted"},[t("span",{class:"badge text-bg-primary"},"Администратор")],-1),W={key:2,class:"alert alert-warning",role:"alert"},z={key:0,class:"col-12"},H={data(){return{loading:!1,admins:[],admins_paginate_object:null,message:null,type:0,phone:null}},computed:{...g(["getAdmins","getAdminsPaginateObject"]),tg(){return window.Telegram.WebApp},tgUser(){const n=new URLSearchParams(this.tg.initData);return JSON.parse(n.get("user"))}},mounted(){this.loadAdmins()},methods:{nextAdminPage(n){this.loadAdmins(n)},sendRequest(n,e){this.loading=!0,this.$store.dispatch("requestAdmin",{dataObject:{bot_id:n.bot_id,admin_telegram_chat_id:n.telegram_chat_id,user_telegram_chat_id:this.tgUser.id,message:this.message,type:this.type,phone:this.phone}}).then(i=>{this.loading=!1,this.tg.close()}).catch(()=>{this.loading=!1})},loadAdmins(n=0){this.loading=!0,this.$store.dispatch("loadAdmins",{dataObject:{bot_domain:this.bot.bot_domain},page:n}).then(e=>{this.loading=!1,this.admins=this.getAdmins,this.admins_paginate_object=this.getAdminsPaginateObject}).catch(()=>{this.loading=!1})}}},X=Object.assign(H,{__name:"AdminList",props:{bot:{type:Object}},setup(n){return(e,i)=>{const u=f("mask");return a(),o("div",k,[t("div",A,[t("div",j,[t("div",w,[t("div",P,[t("p",null,[d(" Вы можете выбрать администратора из списка активных администраторов и прислать ему запрос "),e.type==0?(a(),o("span",B,[d("на начисление "),O,d(".")])):l("",!0),e.type==1?(a(),o("span",V,[d("на бронирование столика. Обязательно укажите свой "),U,d(" для обратной связи.")])):l("",!0),d(" К запросу вы можете прикрепить текстовое сообщение, которое также получит выбранный администратор. ")])])])]),t("div",C,[e.admins.length>0?(a(),o("div",D,[t("div",N,[r(t("input",{type:"radio","onUpdate:modelValue":i[0]||(i[0]=s=>e.type=s),class:"btn-check",value:"0",name:"btnradio",id:"btnradio1",autocomplete:"off",checked:""},null,512),[[m,e.type]]),R,r(t("input",{type:"radio",class:"btn-check","onUpdate:modelValue":i[1]||(i[1]=s=>e.type=s),value:"1",name:"btnradio",id:"btnradio2",autocomplete:"off"},null,512),[[m,e.type]]),$]),e.type==1?(a(),o("div",q,[F,r(t("input",{type:"text",class:"form-control","onUpdate:modelValue":i[2]||(i[2]=s=>e.phone=s),placeholder:"+7(000)000-00-00","aria-label":"vipForm-phone","aria-describedby":"booking-phone"},null,512),[[u,"+7(###)###-##-##"],[h,e.phone]])])):l("",!0),r(t("textarea",{type:"text","onUpdate:modelValue":i[3]||(i[3]=s=>e.message=s),placeholder:"Сообщение администратору",class:"form-control w-100 mb-3"},null,512),[[h,e.message]])])):l("",!0),e.admins.length>0?(a(),o("div",L,[(a(!0),o(_,null,b(e.admins,(s,c)=>(a(),o("a",{href:"#",onClick:I=>e.sendRequest(s,c),key:"admin"+c,class:"list-group-item list-group-item-action"},[t("div",T,[t("h5",M,p(s.user.fio_from_telegram||s.user.name||"Не указано"),1),t("small",E,p(e.$filters.timeAgo(s.updated_at)),1)]),t("p",G,"+"+p(s.user.phone||"Номер телефона не указан"),1),J],8,S))),128))])):(a(),o("div",W," К сожалению активных администраторов на данный момент нет, как только они будут в сети вы сможете запросить у них начисление бонусных баллов! "))]),e.admins.length>0?(a(),o("div",z,[e.admins_paginate_object?(a(),y(v,{key:0,class:"mt-2",onPagination_page:e.nextAdminPage,pagination:e.admins_paginate_object},null,8,["onPagination_page","pagination"])):l("",!0)])):l("",!0)])])}}});export{X as default};