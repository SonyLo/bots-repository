import{G as u,q as t,t as o,v as s,H as y,J as v,a7 as f,A as l,F as _,C as p,y as d,K as m,B as $,u as b,D as h,x as C}from"./index.es-f98e90e3.js";import{P as g}from"./Pagination-8d87cf85.js";import{K as k}from"./main-f646787a.js";const w={class:"row mt-2"},S={class:"input-group mb-3"},j={key:0,class:"row"},A={class:"col-12 col-md-12 mb-3"},B={class:"table"},U=s("th",{scope:"col"},"#",-1),O=s("th",{scope:"col"},"Ф.И.О. из телеграмма",-1),P=s("th",{scope:"col"},"Имя пользователя",-1),V=s("th",{scope:"col"},"Домен",-1),I=s("th",{scope:"col"},"Телефон",-1),D=s("th",{scope:"col"},"TG id",-1),K={key:0,scope:"col"},T={key:1,scope:"col"},N={key:2,scope:"col"},z={key:3,scope:"col"},G={key:4,scope:"col"},L=["onClick"],F={scope:"row"},H=["href"],q={key:1},E={key:0},J=["onClick"],M=s("i",{class:"fa-solid fa-check text-success"},null,-1),Q=[M],R=["onClick"],W=s("i",{class:"fa-solid fa-xmark text-danger"},null,-1),X=[W],Y={key:1},Z=["onClick"],x=s("i",{class:"fa-solid fa-check text-success"},null,-1),ss=[x],es=["onClick"],ts=s("i",{class:"fa-solid fa-xmark text-danger"},null,-1),os=[ts],ns={key:2},is=["onClick"],as=s("i",{class:"fa-solid fa-check text-success"},null,-1),ls=[as],ds=["onClick"],cs=s("i",{class:"fa-solid fa-xmark text-danger"},null,-1),rs=[cs],hs={key:3},_s=["onClick"],us=s("i",{class:"fa-solid fa-check text-success"},null,-1),ps=[us],ms=["onClick"],gs=s("i",{class:"fa-solid fa-xmark text-danger"},null,-1),ks=[gs],ys={key:4},vs=["onClick"],fs=s("i",{class:"fa-solid fa-check text-success"},null,-1),$s=[fs],bs=["onClick"],Cs=s("i",{class:"fa-solid fa-xmark text-danger"},null,-1),ws=[Cs],Ss={class:"col-12"},js={key:1,class:"row"},As=s("div",{class:"col-12"},[s("div",{class:"alert alert-warning",role:"alert"}," У выбранного бота нет пользователей ")],-1),Bs=[As],Us={props:["simple"],data(){return{bot:null,loading:!0,bot_users:[],search:null,bot_users_paginate_object:null}},computed:{...u(["getBotUsers","getBotUsersPaginateObject","getCurrentBot"])},mounted(){this.loadCurrentBot().then(()=>{this.loadUsers()})},methods:{selectUser(i){this.$emit("select",i)},loadCurrentBot(i=null){return this.$store.dispatch("updateCurrentBot",{bot:i}).then(()=>{this.bot=this.getCurrentBot})},changeUserStatus(i,e,a="is_admin"){this.bot_users[i][a]=e===1,this.$store.dispatch("changeUserStatus",{dataObject:{bot_user_id:this.bot_users[i].id,status:e,type:a}}).then(()=>{this.$notify({title:"Конструктор ботов",text:"Статус пользователя успешно изменен! Пользователь оповещен об изменении статуса!",type:"success"})}).catch(()=>{this.$notify({title:"Конструктор ботов",text:"Ошибка изменения статуса",type:"error"})})},nextUsers(i){this.loadUsers(i)},loadUsers(i=0){this.loading=!0,this.$store.dispatch("loadBotUsers",{dataObject:{botId:this.bot.id||null,search:this.search},size:100,page:i}).then(e=>{this.loading=!1,this.bot_users=this.getBotUsers,this.bot_users_paginate_object=this.getBotUsersPaginateObject}).catch(()=>{this.loading=!1})}}},le=Object.assign(Us,{__name:"BotUserList",setup(i){return(e,a)=>(t(),o(_,null,[s("div",w,[s("div",S,[y(s("input",{type:"search",class:"form-control",placeholder:"Поиск пользователя","aria-label":"Поиск пользователя",onKeydown:a[0]||(a[0]=f(n=>e.loadUsers(0),["enter"])),"onUpdate:modelValue":a[1]||(a[1]=n=>e.search=n)},null,544),[[v,e.search]]),s("button",{class:"btn btn-outline-secondary",onClick:a[2]||(a[2]=n=>e.loadUsers(0)),type:"button",id:"button-addon2"},"Найти ")])]),e.bot_users.length>0?(t(),o("div",j,[s("div",A,[s("table",B,[s("thead",null,[s("tr",null,[U,O,P,V,I,D,i.simple?l("",!0):(t(),o("th",K,"Админ")),i.simple?l("",!0):(t(),o("th",T,"VIP")),i.simple?l("",!0):(t(),o("th",N,"Доставщик")),i.simple?l("",!0):(t(),o("th",z,"Менеджер")),i.simple?l("",!0):(t(),o("th",G,"За работой"))])]),s("tbody",null,[(t(!0),o(_,null,p(e.bot_users,(n,c)=>(t(),o("tr",{onClick:r=>e.selectUser(n)},[s("th",F,d(n.id),1),s("td",null,d(n.fio_from_telegram||"Не указано"),1),s("td",null,d(n.name||"Не указано"),1),s("td",null,[n.username?(t(),o("a",{key:0,href:"https://t.me/"+n.username,target:"_blank"},"@"+d(n.username),9,H)):(t(),o("span",q,"Не указано"))]),s("td",null,d(n.phone||"Не указано"),1),s("td",null,d(n.telegram_chat_id||"Не указано"),1),i.simple?l("",!0):(t(),o("td",E,[n.is_admin?(t(),o("span",{key:0,onClick:r=>e.changeUserStatus(c,0,"is_admin")},Q,8,J)):(t(),o("span",{key:1,onClick:r=>e.changeUserStatus(c,1,"is_admin")},X,8,R))])),i.simple?l("",!0):(t(),o("td",Y,[n.is_vip?(t(),o("span",{key:0,onClick:r=>e.changeUserStatus(c,0,"is_vip")},ss,8,Z)):(t(),o("span",{key:1,onClick:r=>e.changeUserStatus(c,1,"is_vip")},os,8,es))])),i.simple?l("",!0):(t(),o("td",ns,[n.is_deliveryman?(t(),o("span",{key:0,onClick:r=>e.changeUserStatus(c,0,"is_deliveryman")},ls,8,is)):(t(),o("span",{key:1,onClick:r=>e.changeUserStatus(c,1,"is_deliveryman")},rs,8,ds))])),i.simple?l("",!0):(t(),o("td",hs,[n.is_manager?(t(),o("span",{key:0,onClick:r=>e.changeUserStatus(c,0,"is_manager")},ps,8,_s)):(t(),o("span",{key:1,onClick:r=>e.changeUserStatus(c,1,"is_manager")},ks,8,ms))])),i.simple?l("",!0):(t(),o("td",ys,[n.is_work?(t(),o("span",{key:0,onClick:r=>e.changeUserStatus(c,0,"is_work")},$s,8,vs)):(t(),o("span",{key:1,onClick:r=>e.changeUserStatus(c,1,"is_work")},ws,8,bs))]))],8,L))),256))])])]),s("div",Ss,[e.bot_users_paginate_object?(t(),m(g,{key:0,onPagination_page:e.nextUsers,pagination:e.bot_users_paginate_object},null,8,["onPagination_page","pagination"])):l("",!0)])])):(t(),o("div",js,Bs))],64))}}),Os={class:"row"},Ps={class:"col-md-4"},Vs={class:"col-12"},Is={key:0,class:"fa-solid fa-arrow-down-short-wide"},Ds={key:1,class:"fa-solid fa-arrow-up-wide-short"},Ks={key:0,class:"fa-solid fa-arrow-down-short-wide"},Ts={key:1,class:"fa-solid fa-arrow-up-wide-short"},Ns={key:0,class:"fa-solid fa-arrow-down-short-wide"},zs={key:1,class:"fa-solid fa-arrow-up-wide-short"},Gs={class:"col-md-4 mb-2"},Ls=["onClick"],Fs={class:"card-body text-center"},Hs={class:"row"},qs={class:"col-md-6"},Es={class:"mb-0"},Js=s("p",{class:"mb-0"},"Начало сеанса",-1),Ms={class:"mb-0"},Qs=s("p",{class:"mb-0"},"Окончание сеанса",-1),Rs={class:"mb-0"},Ws={class:"col-md-6"},Xs={class:"mb-0"},Ys={class:"mb-0"},Zs={class:"mb-0"},xs=s("p",{class:"mb-0"},[s("strong",null,"Период")],-1),se={class:"mb-0"},ee={class:"row"},te={class:"col-12"},oe={props:["bot","eventId"],components:{VueDatePicker:k},data(){return{date:null,loading:!0,schedule:[],order:null,direction:null,months:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","октябрь","Ноябрь","Декабрь"],days:["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье"],paginate_object:null}},watch:{date:{handler:function(i){this.loadAppointmentSchedules()},deep:!0}},computed:{...u(["getAppointmentSchedules","getAppointmentSchedulesPaginateObject"])},mounted(){this.date=new Date,this.loadAppointmentSchedules()},methods:{selectTime(i){this.$emit("select",i)},loadAndOrder(i){this.order=i,this.direction=this.direction==="desc"?"asc":"desc",this.loadAppointmentSchedules(0)},nextAppointmentSchedule(i){this.loadAppointmentSchedules(i)},loadAppointmentSchedules(i=0){this.loading=!0,this.$store.dispatch("loadAppointmentSchedules",{dataObject:{date:this.date||null,event_id:this.eventId,bot_id:this.bot.id||null,order:this.order,direction:this.direction},page:i,size:20}).then(e=>{this.loading=!1,this.schedule=this.getAppointmentSchedules,this.paginate_object=this.getAppointmentSchedulesPaginateObject}).catch(()=>{this.loading=!1})}}},de=Object.assign(oe,{__name:"AppointmentScheduleList",setup(i){return(e,a)=>(t(),o(_,null,[s("div",Os,[s("div",Ps,[$(b(k),{modelValue:e.date,"onUpdate:modelValue":a[0]||(a[0]=n=>e.date=n)},null,8,["modelValue"])]),s("div",Vs,[s("p",null,[h(" Тип сортировки: "),s("a",{class:"mx-2",onClick:a[1]||(a[1]=n=>e.loadAndOrder("day")),href:"javascript:void(0)"},[h("По дню недели "),e.order==="day"&&e.direction==="asc"?(t(),o("i",Is)):l("",!0),e.order==="day"&&e.direction==="desc"?(t(),o("i",Ds)):l("",!0)]),s("a",{class:"mx-2",onClick:a[2]||(a[2]=n=>e.loadAndOrder("start_time")),href:"javascript:void(0)"},[h("По времени начала "),e.order==="start_time"&&e.direction==="asc"?(t(),o("i",Ks)):l("",!0),e.order==="start_time"&&e.direction==="desc"?(t(),o("i",Ts)):l("",!0)]),s("a",{class:"mx-2",onClick:a[3]||(a[3]=n=>e.loadAndOrder("end_time")),href:"javascript:void(0)"},[h("По времени окончания "),e.order==="end_time"&&e.direction==="asc"?(t(),o("i",Ns)):l("",!0),e.order==="end_time"&&e.direction==="desc"?(t(),o("i",zs)):l("",!0)])])]),(t(!0),o(_,null,p(e.schedule,n=>(t(),o("div",Gs,[s("div",{class:C(["card btn",{"btn-outline-secondary bg-secondary":n.appointment!=null,"btn-outline-success":n.appointment==null}]),onClick:c=>e.selectTime(n)},[s("div",Fs,[s("div",Hs,[s("div",qs,[s("p",Es,[s("strong",null,d(e.days[n.day-1]),1)]),Js,s("p",Ms,[s("strong",null,d(n.start_time||"-"),1)]),Qs,s("p",Rs,[s("strong",null,d(n.end_time||"-"),1)])]),s("div",Ws,[s("p",Xs,[s("strong",null,d(n.year||"-"),1)]),s("p",Ys,[s("strong",null,d(e.months[n.month||0]),1)]),s("p",Zs,[s("strong",null,d(n.day_number),1)]),xs,s("p",se,[s("strong",null,"c "+d(n.week_start||"-"),1),h(" по "),s("strong",null,d(n.week_end||"-"),1)])])])])],10,Ls)]))),256))]),s("div",ee,[s("div",te,[e.paginate_object?(t(),m(g,{key:0,onPagination_page:e.nextAppointmentSchedule,pagination:e.paginate_object},null,8,["onPagination_page","pagination"])):l("",!0)])])],64))}});export{le as _,de as a};
