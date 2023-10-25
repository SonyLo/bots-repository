import{Y as q,a as L,A as B,S as P,b as T}from"./MapModal.vue_vue_type_style_index_0_lang-36991610.js";import{_ as m}from"./_plugin-vue_export-helper-c27b6911.js";import{o as r,q as c,t as e,x as d,F as g,z as u,J as x,D as _,N as w,A as h,C as p,B as k,G as b,K as S,S as v,M as y,H as C}from"./index.es-0d0be4b9.js";import{_ as j}from"./ShopLayout-dfbcb1e8.js";import{m as E}from"./index-d069a1eb.js";import"./app-36202aeb.js";import"./vue3-json-editor.esm.prod-743a86dd.js";import"./v4-a960c1f4.js";import"./TelegramChannelHelper-1f5aa349.js";/* empty css                                                               */import"./vue3-perfect-scrollbar-60b7a0fc.js";const F={data(){return{title:null,text:null}},mounted(){window.addEventListener("notification",s=>{this.title=s.detail.title||null,this.text=s.detail.text||null,$("#notification-1").toast("show")}),window.addEventListener("success",s=>{this.title=s.detail.title||null,this.text=s.detail.text||null,$("#menu-success-1").showMenu()}),window.addEventListener("warning",s=>{this.title=s.detail.title||null,this.text=s.detail.text||null,$("#menu-warning-1").showMenu()})}},R={id:"notification-1","data-dismiss":"notification-1","data-delay":"3000","data-autohide":"true",class:"notification notification-ios bg-dark1-dark"},N=e("span",{class:"notification-icon"},[e("i",{class:"fa fa-bell"}),e("em",null,"Оповещение"),e("i",{"data-dismiss":"notification-1",class:"fa fa-times-circle"})],-1),O={class:"font-15 color-white mb-n3"},U={class:"pt-2"},V={id:"menu-success-1",class:"menu menu-box-bottom menu-box-detached rounded-m","data-menu-height":"305","data-menu-effect":"menu-over",style:{display:"block",height:"305px"}},A=e("h1",{class:"text-center mt-4"},[e("i",{class:"fa fa-3x fa-check-circle color-green1-dark"})],-1),z={class:"text-center mt-3 text-uppercase font-700"},I=["innerHTML"],Y=e("a",{"data-dismiss":"menu-success-1",class:"close-menu btn btn-m btn-center-m button-s shadow-l rounded-s text-uppercase font-900 bg-green1-light"},"Хорошо",-1),D={id:"menu-warning-1",class:"menu menu-box-bottom menu-box-detached rounded-m","data-menu-height":"305","data-menu-effect":"menu-over",style:{display:"block",height:"305px"}},H=e("h1",{class:"text-center mt-4"},[e("i",{class:"fa fa-3x fa-times color-red2-dark"})],-1),G={class:"text-center mt-3 text-uppercase font-700"},K=["innerHTML"],W=e("a",{"data-dismiss":"menu-warning-1",class:"close-menu btn btn-m btn-center-m button-s shadow-l rounded-s text-uppercase font-900 bg-red1-light"},"Хорошо",-1);function Q(s,o,l,a,t,i){return r(),c(g,null,[e("div",R,[N,e("h1",O,d(t.title||"Системное"),1),e("p",U,d(t.text||"Ошибка отображения текста"),1)]),e("div",V,[A,e("h1",z,d(t.title||"Системное"),1),e("p",{class:"boxed-text-l",innerHTML:t.text},null,8,I),Y]),e("div",D,[H,e("h1",G,d(t.title||"Системное"),1),e("p",{class:"boxed-text-l",innerHTML:t.text},null,8,K),W])],64)}const J=m(F,[["render",Q]]),X={data(){return{item:null}},mounted(){window.addEventListener("show-chashback-info",s=>{this.item=s.detail.item||null,this.$nextTick(()=>{$("#cashback-item-info").showMenu()})})},methods:{}},Z={id:"cashback-item-info",class:"menu menu-box-bottom menu-box-detached rounded-m d-block",style:{height:"50vh",display:"block"},"data-menu-effect":"menu-over"},ee={key:0,class:"w-100"},te={class:"table table-borderless rounded-sm shadow-l m-0",style:{overflow:"hidden"}},oe=e("thead",null,[e("tr",{class:"bg-gray1-dark"},[e("th",{scope:"col",class:"color-theme"},"Параметр"),e("th",{scope:"col",class:"color-theme"},"Значение")])],-1),se=e("th",{scope:"row"},"Тип операции",-1),ne={class:"font-weight-bold"},le=e("th",{scope:"row"},"Сумма CashBack, руб",-1),ie={class:"font-weight-bold"},re={key:0},ce=e("th",{scope:"row"},"Уровень начисления",-1),ae={class:"font-weight-bold"},de={key:1},he=e("th",{scope:"row"},"Сумма в чеке, руб",-1),ue={class:"font-weight-bold"},me=e("th",{scope:"row"},"Дата операции",-1),pe={class:"font-weight-bold"},_e=e("th",{scope:"row"},"Описание операции",-1),fe={class:"font-weight-bold"},be=e("th",{scope:"row"},"TG id сотрудника",-1),ge={class:"font-weight-bold"},we=e("th",{scope:"row"},"Имя сотрудника",-1),ke={class:"font-weight-bold"},ve=e("th",{scope:"row"},"Телефон сотрудника",-1),ye={class:"font-weight-bold"};function xe(s,o,l,a,t,i){return r(),c("div",Z,[t.item?(r(),c("div",ee,[e("table",te,[oe,e("tbody",null,[e("tr",null,[se,e("td",ne,d(t.item.operation_type?"Начисление":"Списание"),1)]),e("tr",null,[le,e("td",ie,d(t.item.amount||0),1)]),t.item.operation_type?(r(),c("tr",re,[ce,e("td",ae,d(t.item.level||0),1)])):u("",!0),t.item.operation_type?(r(),c("tr",de,[he,e("td",ue,d(t.item.money_in_check||0),1)])):u("",!0),e("tr",null,[me,e("td",pe,d(s.$filters.current(t.item.created_at)),1)]),e("tr",null,[_e,e("td",fe,d(t.item.description||"Нет описания"),1)]),e("tr",null,[be,e("td",ge,d(t.item.employee.telegram_chat_id||"Не указано"),1)]),e("tr",null,[we,e("td",ke,d(t.item.employee.fio_from_telegram||"Не указано"),1)]),e("tr",null,[ve,e("td",ye,d(t.item.employee.phone||"Не указано"),1)])])])])):u("",!0)])}const $e=m(X,[["render",xe]]),Ce={props:{code:{type:String,default:"001"}},computed:{self(){return window.self},script(){return window.currentScript},currentBot(){return window.currentBot},qr(){return"https://api.qrserver.com/v1/create-qr-code/?size=450x450&qzone=2&data="+this.link},link(){switch(this.code){default:case"001":return"https://t.me/"+this.currentBot.bot_domain+"?start="+btoa((this.code||"001")+this.self.telegram_chat_id);case"002":return"https://t.me/"+this.currentBot.bot_domain+"?start="+btoa("002"+this.self.telegram_chat_id+"S"+this.script)}}},methods:{copy(){var s=$("<input>");$("body").append(s),s.val(this.link).select(),document.execCommand("copy"),s.remove()}}},Me={class:"w-100 p-3 object-fit-cover my-0",alt:""};function qe(s,o,l,a,t,i){const n=x("lazy");return r(),c(g,null,[_(e("img",Me,null,512),[[n,i.qr]]),e("a",{href:"javascript:void(0)",onClick:o[0]||(o[0]=w((...f)=>i.copy&&i.copy(...f),["prevent"])),class:"btn btn-link w-100 text-center"},"Скопировать ссылку")],64)}const M=m(Ce,[["render",qe]]),Le={id:"qr-code",class:"menu menu-box-bottom menu-box-detached rounded-m d-block",style:{height:"70vh",display:"block"},"data-menu-effect":"menu-over"},Be={key:0,class:"w-100 p-3"},Pe=e("p",{class:"mb-0 text-center"},"Дайте отсканировать этот QR-код для начисления или обмена бонусов:)",-1),Te={data(){return{code:null}},mounted(){window.addEventListener("show-qr-code",s=>{this.code=s.detail.code||null,this.$nextTick(()=>{$("#qr-code").showMenu()})})},methods:{}},Se=Object.assign(Te,{__name:"QrCodeModal",setup(s){return(o,l)=>(r(),c("div",Le,[o.code?(r(),c("div",Be,[Pe,h(M,{code:o.code},null,8,["code"])])):u("",!0)]))}}),je={data(){return{params:{win:"Номер выигрыша",name:"Ф.И.О.",phone:"Телефон",answered_by:"Кто проверил",answered_at:"Дата ответа"},item:null,eventCallbackForm:{info:null},loading:!1}},mounted(){window.addEventListener("show-event-info",s=>{this.item=s.detail.item||null,this.$nextTick(()=>{$("#event-item-info").showMenu()})})},methods:{sendApproveToUser(){this.loading=!0,this.$store.dispatch("sendApproveToUser",{dataObject:{user_telegram_chat_id:this.item.bot_user.telegram_chat_id,action_id:this.item.id,...this.eventCallbackForm}}).then(s=>{this.loading=!1,this.eventCallbackForm.info=null,$("#event-item-info").hideMenu(),this.$botNotification.success("Отлично!","Оповещение успешно отправлено")}).catch(()=>{this.loading=!1,$("#event-item-info").hideMenu(),this.$botNotification.warning("Упс!","Что-то пошло не так")})}}},Ee={id:"event-item-info",class:"menu menu-box-bottom menu-box-detached rounded-m d-block",style:{height:"50vh",display:"block"},"data-menu-effect":"menu-over"},Fe={key:0,class:"w-100 p-3"},Re=e("h4",null,"Информирование пользователя",-1),Ne={key:0},Oe={key:1},Ue={class:"mb-0"},Ve={class:"mb-3"},Ae=e("label",{for:"bill-info",class:"form-label"},"Сообщение для пользователя",-1),ze={class:"mb-3"},Ie=["disabled"];function Ye(s,o,l,a,t,i){return r(),c("div",Ee,[t.item?(r(),c("div",Fe,[Re,e("ul",null,[e("li",null," № события: "+d(t.item.slug.id),1),e("li",null," Название события: "+d(t.item.slug.command),1),e("li",null," Использовано попыток: "+d(t.item.current_attempts),1),e("li",null,[p(" Дата прохождения: "),t.item.completed_at?(r(),c("span",Ne,d(s.$filters.current(t.item.completed_at)),1)):(r(),c("span",Oe,"Не установлена"))]),(r(!0),c(g,null,k(t.item.data,n=>(r(),c("li",null,[(r(!0),c(g,null,k(Object.keys(n),f=>(r(),c("p",Ue,d(t.params[f])+":"+d(n[f]||"Не установлено"),1))),256))]))),256))]),e("form",{onSubmit:o[1]||(o[1]=w((...n)=>i.sendApproveToUser&&i.sendApproveToUser(...n),["prevent"]))},[e("div",Ve,[Ae,_(e("textarea",{class:"form-control",placeholder:"Информация","onUpdate:modelValue":o[0]||(o[0]=n=>t.eventCallbackForm.info=n),id:"bill-info",rows:"3",required:""},null,512),[[b,t.eventCallbackForm.info]])]),e("div",ze,[e("button",{disabled:t.loading,type:"submit",class:"btn btn-m btn-full mb-3 rounded-xs text-uppercase font-900 shadow-s bg-red1-light w-100"}," Отправить ",8,Ie)])],32)])):u("",!0)])}const De=m(je,[["render",Ye]]),He={id:"menu-share",class:"menu menu-box-bottom menu-box-detached rounded-m d-block",style:{height:"420px"}},Ge=e("h1",{class:"text-center font-700 font-26 mt-3 pt-2"},"Поделиться контактами",-1),Ke=e("p",{class:"boxed-text-xl under-heading m-0 p-0"}," Делитесь ссылкой с друзьями ",-1),We=e("div",{class:"divider divider-margins"},null,-1),Qe={class:"row text-center mr-4 ml-4 mb-0"},Je={class:"col-3 mb-n2"},Xe=e("i",{class:"fab fa-facebook-f font-22"},null,-1),Ze=e("br",null,null,-1),et=[Xe,Ze],tt=e("p",{class:"font-11 opacity-70"},"Facebook",-1),ot={class:"col-3 mb-n2"},st=e("i",{class:"fab fa-twitter font-22"},null,-1),nt=e("br",null,null,-1),lt=[st,nt],it=e("p",{class:"font-11 opacity-70"},"Twitter",-1),rt={class:"col-3 mb-n2"},ct=e("i",{class:"fa-brands fa-vk font-22"},null,-1),at=e("br",null,null,-1),dt=[ct,at],ht=e("p",{class:"font-11 opacity-70"},"VK",-1),ut={class:"col-3 mb-n2"},mt=e("i",{class:"fa fa-envelope font-22"},null,-1),pt=e("br",null,null,-1),_t=[mt,pt],ft=e("p",{class:"font-11 opacity-70"},"Email",-1),bt={class:"col-3 mb-n2"},gt=e("i",{class:"fab fa-whatsapp font-22"},null,-1),wt=e("br",null,null,-1),kt=[gt,wt],vt=e("p",{class:"font-11 opacity-70"},"WhatsApp",-1),yt={class:"col-3 mb-n2"},xt=e("i",{class:"fa fa-link font-22"},null,-1),$t=e("br",null,null,-1),Ct=[xt,$t],Mt=e("p",{class:"font-11 opacity-70"},"Копировать",-1),qt={class:"col-3 mb-n2"},Lt=e("i",{class:"fab fa-pinterest-p font-22"},null,-1),Bt=e("br",null,null,-1),Pt=[Lt,Bt],Tt=e("p",{class:"font-11 opacity-70"},"Pinterest",-1),St=e("div",{class:"col-3 mb-n2"},[e("a",{href:"#",class:"close-menu icon icon-l bg-red2-dark rounded-s shadow-l text-white"},[e("i",{class:"fa fa-times font-22"}),e("br")]),e("p",{class:"font-11 opacity-70"},"Закрыть")],-1),jt=e("div",{class:"divider divider-margins mt-n1 mb-3"},null,-1),Et=e("div",{class:"divider divider-margins mt-n1 mb-3"},null,-1),Ft=e("p",{class:"footer-copyright font-10 text-center pb-3 mb-1"},[p("© CashMan "),e("span",{id:"copyright-year"},"2023"),p(". Все Права защищены.")],-1),Rt={computed:{self(){return window.self},tg(){return window.Telegram.WebApp},currentBot(){return window.currentBot},qr(){return"https://api.qrserver.com/v1/create-qr-code/?size=450x450&qzone=2&data="+this.link},link(){return"https://t.me/"+this.currentBot.bot_domain+"?start="+btoa("001"+this.self.telegram_chat_id)}},methods:{open(s){this.tg.openLink(s)},copy(){var s=$("<input>");$("body").append(s),s.val(this.link).select(),document.execCommand("copy"),s.remove()}}},Nt=Object.assign(Rt,{__name:"ShareMenuBar",setup(s){return(o,l)=>(r(),c("div",He,[Ge,Ke,We,e("div",Qe,[e("div",Je,[e("a",{href:"#",onClick:l[0]||(l[0]=a=>o.open("https://www.facebook.com/sharer/sharer.php?u="+o.link)),class:"icon icon-l bg-facebook rounded-s shadow-l text-white"},et),tt]),e("div",ot,[e("a",{href:"#",onClick:l[1]||(l[1]=a=>o.open("https://twitter.com/home?status="+o.link)),class:"icon icon-l bg-twitter rounded-s shadow-l text-white"},lt),it]),e("div",rt,[e("a",{href:"#",onClick:l[2]||(l[2]=a=>o.open("https://vk.com/share.php?url="+o.link)),class:"icon icon-l bg-linkedin rounded-s shadow-l text-white"},dt),ht]),e("div",ut,[e("a",{href:"#",onClick:l[3]||(l[3]=a=>o.open("mailto:?body="+o.link)),class:"icon icon-l bg-mail rounded-s shadow-l text-white"},_t),ft]),e("div",bt,[e("a",{href:"#",onClick:l[4]||(l[4]=a=>o.open("whatsapp://send?text="+o.link)),class:"icon icon-l bg-whatsapp rounded-s shadow-l text-white"},kt),vt]),e("div",yt,[e("a",{href:"#",onClick:l[5]||(l[5]=(...a)=>o.copy&&o.copy(...a)),class:"shareToCopyLink icon icon-l bg-blue2-dark rounded-s shadow-l text-white"},Ct),Mt]),e("div",qt,[e("a",{href:"#",onClick:l[6]||(l[6]=a=>o.open("https://pinterest.com/pin/create/button/?url="+o.link)),class:"icon icon-l bg-pinterest rounded-s shadow-l text-white"},Pt),Tt]),St]),jt,h(M,{code:"001"}),Et,Ft]))}}),Ot={},Ut={id:"menu-highlights",class:"menu menu-box-bottom menu-box-detached rounded-m",style:{display:"block",height:"510px"}},Vt=S('<div class="card header-card shape-rounded h-40"><div class="card-overlay bg-highlight opacity-95"></div><div class="card-bg preload-img" data-src="images/pictures/20s.jpg"></div></div><h1 class="text-center mt-4 font-35 font-800">CashMan</h1><p class="text-center font-12 mt-n1 pb-2 mb-3">Добавь красок в свою жизнь</p><div class="card card-style"><div class="highlight-changer pt-3 pb-2"><p class="text-center px-3"> Доступные цветовые схемы для использования в приложении. Нажми на кружочек и цветовая схема автоматически будет применена. </p><a href="#" data-change-highlight="blue2"><i class="fa fa-circle color-blue2-dark"></i><span class="color-blue2-light">Default</span></a><a href="#" data-change-highlight="red2"><i class="fa fa-circle color-red1-dark"></i><span class="color-red2-light">Red</span></a><a href="#" data-change-highlight="orange"><i class="fa fa-circle color-orange-dark"></i><span class="color-orange-light">Orange</span></a><a href="#" data-change-highlight="pink2"><i class="fa fa-circle color-pink2-dark"></i><span class="color-pink2-light">Pink</span></a><a href="#" data-change-highlight="magenta2"><i class="fa fa-circle color-magenta2-dark"></i><span class="color-magenta2-light">Purple</span></a><a href="#" data-change-highlight="aqua"><i class="fa fa-circle color-aqua-dark"></i><span class="color-aqua-light">Aqua</span></a><a href="#" data-change-highlight="teal"><i class="fa fa-circle color-teal-dark"></i><span class="color-teal-light">Teal</span></a><a href="#" data-change-highlight="mint"><i class="fa fa-circle color-mint-dark"></i><span class="color-mint-light">Mint</span></a><a href="#" data-change-highlight="green2"><i class="fa fa-circle color-green2-dark"></i><span class="color-green2-light">Green</span></a><a href="#" data-change-highlight="green1"><i class="fa fa-circle color-green1-dark"></i><span class="color-green1-light">Grass</span></a><a href="#" data-change-highlight="yellow2"><i class="fa fa-circle color-yellow2-dark"></i><span class="color-yellow2-light">Sunny</span></a><a href="#" data-change-highlight="yellow1"><i class="fa fa-circle color-yellow1-dark"></i><span class="color-yellow1-light">Goldish</span></a><a href="#" data-change-highlight="brown1"><i class="fa fa-circle color-brown1-dark"></i><span class="color-brown1-light">Wood</span></a><a href="#" data-change-highlight="dark1"><i class="fa fa-circle color-dark1-dark"></i><span class="color-dark1-light">Night</span></a><a href="#" data-change-highlight="dark2"><i class="fa fa-circle color-dark2-dark"></i><span class="color-dark2-light">Dark</span></a><div class="clearfix"></div></div></div><a href="#" class="close-menu btn btn-full btn-margins rounded-sm shadow-l bg-highlight btn-m font-900 text-uppercase mb-0">Закрыть смену цвета</a>',5),At=[Vt];function zt(s,o,l,a,t,i){return r(),c("div",Ut,At)}const It=m(Ot,[["render",zt]]),Yt={data(){return{load:!1}},mounted(){window.addEventListener("preloader-toggle",s=>{this.load=!this.load}),window.addEventListener("preloader-hide",s=>{this.load=!1}),window.addEventListener("preloader-show",s=>{this.load=!0,setTimeout(()=>{this.load=!1},1e3)})}},Dt={key:0,id:"preloader"},Ht=e("div",{class:"spinner-border color-highlight",role:"status"},null,-1),Gt=[Ht];function Kt(s,o,l,a,t,i){return t.load?(r(),c("div",Dt,Gt)):u("",!0)}const Wt=m(Yt,[["render",Kt]]),Qt={data(){return{id:null}},mounted(){window.addEventListener("open-page-menu-modal",s=>{this.id=s.detail.id||null,$("#menu-page-editor").showMenu()})},methods:{duplicatePage(){this.loading=!0,this.$store.dispatch("duplicatePage",{dataObject:{pageId:this.id}}).then(s=>{this.loading=!1,$("#menu-page-editor").hideMenu(),this.$botPages.reloadPageList()}).catch(()=>{this.loading=!1})},removePage(){this.loading=!0,this.$store.dispatch("removePage",{dataObject:{pageId:this.id}}).then(s=>{this.loading=!1,$("#menu-page-editor").hideMenu(),this.$botPages.reloadPageList()}).catch(()=>{this.loading=!1})}}},Jt={id:"menu-page-editor",class:"menu menu-box-bottom menu-box-detached rounded-m","data-menu-height":"305","data-menu-effect":"menu-over",style:{height:"275px",display:"block"}},Xt=e("h1",{class:"text-center mt-4"},[e("i",{class:"fa fa-3x fa-check-circle color-green1-dark"})],-1),Zt=e("h1",{class:"text-center mt-3 text-uppercase font-700"},"Меню страницы",-1),eo=e("i",{class:"fa-solid fa-copy mr-1"},null,-1),to=e("i",{class:"fa-solid fa-trash mr-1"},null,-1);function oo(s,o,l,a,t,i){return r(),c("div",Jt,[Xt,Zt,e("a",{href:"javascript:void(0)",onClick:o[0]||(o[0]=(...n)=>i.duplicatePage&&i.duplicatePage(...n)),"data-dismiss":"menu-page-editor",class:"bg-highlight btn btn-m font-900 text-uppercase btn-center-xl mb-2"},[eo,p(" Дублировать страницу ")]),e("a",{href:"javascript:void(0)",onClick:o[1]||(o[1]=(...n)=>i.removePage&&i.removePage(...n)),"data-dismiss":"menu-page-editor",class:"bg-red2-dark btn btn-m font-900 text-uppercase btn-center-xl mb-2"},[to,p(" Удалить страницу ")])])}const so=m(Qt,[["render",oo]]),no={data(){return{rules:[{id:1,title:"Является администратором",rules_block:"bot_user",rule:{is_admin:!0}},{id:2,title:"Является VIP-пользователем",rules_block:"bot_user",rule:{is_vip:!0}},{id:3,title:"Находится в заведении",rules_block:"bot_user",rule:{user_in_location:!0}},{id:4,title:"За работой",rules_block:"bot_user",rule:{is_work:!0}},{id:5,title:"Возраст от ...",rules_block:"bot_user",rule:{age:18}},{id:6,title:"Находится в городе ...",rules_block:"bot_user",rule:{city:"Краснодар"}},{id:7,title:"Пол",rules_block:"bot_user",rule:{sex:!0}},{id:8,title:"Состоит в канале",rules_block:"channels",rule:{channel:1}},{id:9,title:"Является Менеджером",rules_block:"bot_user",rule:{is_manager:!0}}]}},mounted(){window.addEventListener("open-rules-modal",s=>{$("#rules-selector").showMenu()})},methods:{duplicatePage(){this.loading=!0,this.$store.dispatch("duplicatePage",{dataObject:{pageId:this.id}}).then(s=>{this.loading=!1,$("#menu-page-editor").hideMenu(),this.$botPages.reloadPageList()}).catch(()=>{this.loading=!1})},removePage(){this.loading=!0,this.$store.dispatch("removePage",{dataObject:{pageId:this.id}}).then(s=>{this.loading=!1,$("#menu-page-editor").hideMenu(),this.$botPages.reloadPageList()}).catch(()=>{this.loading=!1})},addRules(s){this.$botPages.selectRule(s),$("#rules-selector").hideMenu()}}},lo={id:"rules-selector",class:"menu menu-box-bottom menu-box-detached rounded-m","data-menu-height":"400","data-menu-effect":"menu-over",style:{height:"400px",display:"block"}},io=e("h1",{class:"text-center mt-3 text-uppercase font-700"},"Выбор правила",-1),ro={class:"list-group list-custom-small px-2"},co=["onClick"],ao=e("i",{class:"fa font-13 fa-check color-green1-dark"},null,-1);function ho(s,o,l,a,t,i){return r(),c("div",lo,[io,e("div",ro,[(r(!0),c(g,null,k(t.rules,n=>(r(),c("a",{onClick:f=>i.addRules(n),href:"javascript:void(0)"},[ao,e("span",null,d(n.title||"Не указан"),1)],8,co))),256))])])}const uo=m(no,[["render",ho]]),mo={data(){return{load:!1,keyboard:null,select:{uuid:null,row:0,col:0,type:null}}},mounted(){window.addEventListener("open-keyboard-editor",s=>{const o=s.detail.select,l=s.detail.keyboard||null;this.select=o,this.keyboard=l,$("#keyboard-editor").showMenu()})},methods:{needRemoveField(s,o,l){Object.keys(this.keyboard[o][l]).forEach(a=>{a!=="text"&&a!==s&&delete this.keyboard[o][l][a]})}}},po={id:"keyboard-editor",class:"menu menu-box-bottom menu-box-detached rounded-m","data-menu-height":"405","data-menu-effect":"menu-over",style:{height:"405px",display:"block"}},_o={class:"mb-3"},fo=["for"],bo=["id"],go=e("div",{class:"divider divider-small my-3 bg-highlight"},null,-1),wo=e("div",{class:"alert alert-danger",role:"alert"}," Возможно выбрать только 1 тип действия ",-1),ko={class:"mb-3"},vo=["for"],yo=["id"],xo={class:"mb-3"},$o=["for"],Co=["id"],Mo={class:"mb-3"},qo=["for"],Lo=["id"],Bo={class:"mb-3"},Po=["for"],To=["id"],So={class:"form-check"},jo=["id"],Eo=["for"],Fo={key:0,class:"form-check"},Ro=["id"],No=["for"],Oo={class:"form-check"},Uo=["id"],Vo=["for"],Ao={class:"form-check"},zo=["id"],Io=["for"];function Yo(s,o,l,a,t,i){return r(),c("div",po,[t.keyboard?(r(),c("form",{key:0,class:"px-3 py-3",onSubmit:o[16]||(o[16]=w((...n)=>s.submitKeyboard&&s.submitKeyboard(...n),["prevent"]))},[e("div",_o,[e("label",{for:"title-row-"+t.select.row+"-col-"+t.select.col,class:"form-label"},"Название поля",8,fo),_(e("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=n=>t.keyboard[t.select.row][t.select.col].text=n),class:"form-control",id:"title-row-"+t.select.row+"-col-"+t.select.col,placeholder:"Название"},null,8,bo),[[b,t.keyboard[t.select.row][t.select.col].text]])]),go,wo,e("div",ko,[e("label",{for:"command-row-"+t.select.row+"-col-"+t.select.col,class:"form-label"},"Команда (для меню в сообщении)",8,vo),_(e("input",{type:"text",onChange:o[1]||(o[1]=n=>i.needRemoveField("callback_data",t.select.row,t.select.col)),"onUpdate:modelValue":o[2]||(o[2]=n=>t.keyboard[t.select.row][t.select.col].callback_data=n),class:"form-control",id:"command-row-"+t.select.row+"-col-"+t.select.col,placeholder:"/start"},null,40,yo),[[b,t.keyboard[t.select.row][t.select.col].callback_data]])]),e("div",xo,[e("label",{for:"switch-inline-query-row-"+t.select.row+"-col-"+t.select.col,class:"form-label"},"Ссылка на аккаунт в ТЕЛЕГРАММ",8,$o),_(e("input",{type:"text",class:"form-control",onChange:o[3]||(o[3]=n=>i.needRemoveField("switch_inline_query",t.select.row,t.select.col)),"onUpdate:modelValue":o[4]||(o[4]=n=>t.keyboard[t.select.row][t.select.col].switch_inline_query=n),id:"switch-inline-query-row-"+t.select.row+"-col-"+t.select.col,placeholder:"@YourAccountLink"},null,40,Co),[[b,t.keyboard[t.select.row][t.select.col].switch_inline_query]])]),e("div",Mo,[e("label",{for:"url-row-"+t.select.row+"-col-"+t.select.col,class:"form-label"},"Внешняя URL-ссылка",8,qo),_(e("input",{type:"text",class:"form-control",onChange:o[5]||(o[5]=n=>i.needRemoveField("url",t.select.row,t.select.col)),"onUpdate:modelValue":o[6]||(o[6]=n=>t.keyboard[t.select.row][t.select.col].url=n),id:"url-row-"+t.select.row+"-col-"+t.select.col,placeholder:"https://t.me/example"},null,40,Lo),[[b,t.keyboard[t.select.row][t.select.col].url]])]),e("div",Bo,[e("label",{for:"switch-inline-query-current-chat-row-"+t.select.row+"-col-"+t.select.col,class:"form-label"},"Команда всплывающего меню бота",8,Po),_(e("input",{type:"text",class:"form-control",onChange:o[7]||(o[7]=n=>i.needRemoveField("switch_inline_query_current_chat",t.select.row,t.select.col)),"onUpdate:modelValue":o[8]||(o[8]=n=>t.keyboard[t.select.row][t.select.col].switch_inline_query_current_chat=n),id:"witch-inline-query-current-chat-row-"+t.select.row+"-col-"+t.select.col,placeholder:"команда"},null,40,To),[[b,t.keyboard[t.select.row][t.select.col].switch_inline_query_current_chat]])]),e("div",So,[e("input",{type:"radio",onChange:o[9]||(o[9]=n=>i.needRemoveField(null,t.select.row,t.select.col)),name:"request-radio",class:"form-check-input",id:"no-action-row-"+t.select.row+"-col-"+t.select.col},null,40,jo),e("label",{class:"form-check-label",for:"no-action-row-"+t.select.row+"-col-"+t.select.col}," Без действий ",8,Eo)]),t.select.row===0?(r(),c("div",Fo,[e("input",{type:"radio",onChange:o[10]||(o[10]=n=>i.needRemoveField("pay",t.select.row,t.select.col)),onClick:o[11]||(o[11]=n=>t.keyboard[t.select.row][t.select.col].pay=!0),name:"request-radio",class:"form-check-input",id:"pay-action-row-"+t.select.row+"-col-"+t.select.col},null,40,Ro),e("label",{class:"form-check-label",for:"pay-action-row-"+t.select.row+"-col-"+t.select.col}," Кнопка оплаты ",8,No)])):u("",!0),e("div",Oo,[e("input",{type:"radio",onChange:o[12]||(o[12]=n=>i.needRemoveField("request_contact",t.select.row,t.select.col)),onClick:o[13]||(o[13]=n=>t.keyboard[t.select.row][t.select.col].request_contact=!0),name:"request-radio",class:"form-check-input",id:"phone-row-"+t.select.row+"-col-"+t.select.col},null,40,Uo),e("label",{class:"form-check-label",for:"phone-row-"+t.select.row+"-col-"+t.select.col}," Запросить телефон (для нижнего меню) ",8,Vo)]),e("div",Ao,[e("input",{type:"radio",name:"request-radio",onChange:o[14]||(o[14]=n=>i.needRemoveField("request_location",t.select.row,t.select.col)),onClick:o[15]||(o[15]=n=>t.keyboard[t.select.row][t.select.col].request_location=!0),class:"form-check-input",id:"location-row-"+t.select.row+"-col-"+t.select.col},null,40,zo),e("label",{class:"form-check-label",for:"location-row-"+t.select.row+"-col-"+t.select.col}," Запросить локацию (для нижнего меню) ",8,Io)])],32)):u("",!0)])}const Do=m(mo,[["render",Yo]]),Ho={data(){return{param:null,channelLink:null}},mounted(){window.addEventListener("open-tg-helper-modal",s=>{this.param=s.detail.param,$("#tg-helper-modal").showMenu()})},methods:{checkLink(){this.channelLink.indexOf("https://t.me/")!==-1&&(this.channelLink="@"+(this.channelLink.split("https://t.me/")[1]||this.channelLink))},requestTelegramChannelId(){this.$store.dispatch("requestTelegramChannelId",{dataObject:{channel:this.channelLink}}).then(s=>{s.ok&&this.$botPages.telegramChannelCallback(this.param,s.result.chat.id),$("#tg-helper-modal").hideMenu(),s.ok&&this.$botNotification.success("Отлично","Канал успешно найден!"),s.ok||(this.$botNotification.warning("Ошибочка!","Неверно указанный канал"),this.$botPages.telegramChannelCallback(this.param,null))}).catch(()=>{})}}},Go={id:"tg-helper-modal",class:"menu menu-box-bottom menu-box-detached rounded-m","data-menu-height":"210","data-menu-effect":"menu-over",style:{height:"210px",display:"block"}},Ko=e("p",{class:"mb-1 p-2"},"Укажите в полне ниже ссылку на ПУБЛИЧНЫЙ канал, в котором уже состоит БОТ в качестве администратора канала",-1),Wo=e("button",{class:"btn btn-m btn-full rounded-xs text-uppercase font-900 shadow-s bg-red1-light w-100"},"Узнать id канала ",-1);function Qo(s,o,l,a,t,i){return r(),c("div",Go,[Ko,e("form",{onSubmit:o[2]||(o[2]=w((...n)=>i.requestTelegramChannelId&&i.requestTelegramChannelId(...n),["prevent"])),class:"p-2"},[_(e("input",{type:"text",class:"form-control mb-2",id:"search-description-text","onUpdate:modelValue":o[0]||(o[0]=n=>t.channelLink=n),onChange:o[1]||(o[1]=(...n)=>i.checkLink&&i.checkLink(...n)),placeholder:"@telegram_channel",required:""},null,544),[[b,t.channelLink]]),Wo],32)])}const Jo=m(Ho,[["render",Qo]]),Xo={components:{YandexMap:q,YandexMarker:L},setup(){return{center:[45.03547,38.975313]}},data(){return{load:!0,coords:{lat:45.03547,lon:38.975313}}},mounted(){window.addEventListener("open-map-modal",s=>{$("#map-selector").showMenu()})},methods:{onClick(s){let o=s.get("coords");this.load=!1,this.coords.lat=o[0],this.coords.lon=o[1],this.$nextTick(()=>{this.load=!0}),this.$botNotification.notification("Координаты","Вы выбрали координаты"),this.$botPages.mapCallback(this.coords)}}},Zo={id:"map-selector",class:"menu menu-box-bottom menu-box-detached rounded-m","data-menu-height":"500","data-menu-effect":"menu-over",style:{height:"500px",display:"block"}},es=e("h1",{class:"text-center mt-3 text-uppercase font-700"},"Выбор координаты",-1);function ts(s,o,l,a,t,i){const n=v("YandexMarker"),f=v("YandexMap");return r(),c("div",Zo,[es,h(f,{coordinates:[t.coords.lat,t.coords.lon],onClick:i.onClick},{default:y(()=>[t.load?(r(),C(n,{key:0,coordinates:[t.coords.lat,t.coords.lon],"marker-id":123},null,8,["coordinates"])):u("",!0)]),_:1},8,["coordinates","onClick"])])}const os=m(Xo,[["render",ts]]);const ss={key:0,class:"page-content",style:{"min-height":"667px"}},ns={class:"page-title page-title-small"},ls=e("i",{class:"fa fa-arrow-left"},null,-1),is={href:"#/home",class:"bg-fade-gray1-dark shadow-xl d-flex justify-content-center align-items-center font-18 bot-avatar"},rs={style:{width:"50px","object-fit":"cover","border-radius":"50%"},alt:""},cs=e("div",{class:"card header-card shape-rounded",style:{height:"115px"}},[e("div",{class:"card-overlay bg-highlight opacity-95"}),e("div",{class:"card-overlay dark-mode-tint"}),e("div",{class:"card-bg preload-img","data-src":"/shop/images/pictures/20s.jpg"})],-1),as={class:"footer"},ds={class:"card card-style mb-0"},hs={href:"#",class:"footer-title p-4"},us=e("p",{class:"text-center font-12 mt-n1 mb-3 opacity-70"},[p(" Добавь "),e("span",{class:"color-highlight"},"красок"),p(" в свою жизнь ")],-1),ms={class:"boxed-text-l"},ps={class:"text-center mb-3"},_s=e("i",{class:"fa-solid fa-at"},null,-1),fs=[_s],bs=e("i",{class:"fa-brands fa-vk"},null,-1),gs=[bs],ws=e("i",{class:"fa fa-phone"},null,-1),ks=[ws],vs=e("a",{href:"#","data-menu":"menu-share",class:"icon icon-xs rounded-sm mr-1 shadow-l bg-red2-dark text-white"},[e("i",{class:"fa fa-share-alt"})],-1),ys=e("a",{href:"#",class:"back-to-top icon icon-xs rounded-sm shadow-l bg-highlight text-white"},[e("i",{class:"fa fa-arrow-up"})],-1),xs=e("p",{class:"footer-copyright pb-3 mb-1"},[p("© CashMan "),e("span",{id:"copyright-year"},"2023"),p(". Все Права защищены.")],-1),$s=e("div",{class:"footer-card card shape-rounded","data-card-height":"230",style:{height:"230px"}},[e("div",{class:"card-overlay bg-highlight opacity-95"}),e("div",{class:"card-bg preload-img","data-src":"/shop/images/pictures/20s.jpg"})],-1),Cs={computed:{...E(["getSelf"]),logo(){return`/images-by-bot-id/${this.currentBot.id}/${this.currentBot.image}`},self(){return window.self||null},tg(){return window.Telegram.WebApp},tgUser(){const s=new URLSearchParams(this.tg.initData);return JSON.parse(s.get("user"))},currentBot(){return window.currentBot},qr(){return"https://api.qrserver.com/v1/create-qr-code/?size=450x450&qzone=2&data="+this.link},link(){return"https://t.me/"+this.currentBot.bot_domain+"?start="+btoa("001"+this.self.telegram_chat_id)}},created(){window.currentBot=this.bot.data,window.currentScript=this.slug_id||null,this.$store.dispatch("loadSelf").then(()=>{window.self=this.getSelf}),this.$botNotification.success("Главная","Успешно!")},methods:{open(s){this.tg.openLink(s)}}},Ns=Object.assign(Cs,{__name:"Main",props:{bot:{type:Object},slug_id:{type:String}},setup(s){return(o,l)=>{const a=v("router-view"),t=x("lazy");return r(),C(j,null,{default:y(()=>[o.self?(r(),c("div",ss,[e("div",ns,[e("h2",null,[e("a",{onClick:l[0]||(l[0]=i=>o.$router.back())},[ls,p(" "+d(o.$route.meta.title||"Меню"),1)])]),e("a",is,[_(e("img",rs,null,512),[[t,o.logo]])])]),cs,h(a,{bot:s.bot},null,8,["bot"]),e("div",as,[e("div",ds,[e("a",hs,d(o.currentBot.company.title||"CashMan:Shopify"),1),us,e("p",ms,d(o.currentBot.company.description||"Описание вашего магазина"),1),e("div",ps,[o.currentBot.company.email?(r(),c("a",{key:0,href:"#",onClick:l[1]||(l[1]=i=>o.open("mailTo:"+o.currentBot.company.email)),class:"icon icon-xs rounded-sm shadow-l mr-1 bg-facebook text-white"},fs)):u("",!0),o.currentBot.company.links?(r(),c("a",{key:1,href:"#",onClick:l[2]||(l[2]=i=>o.open(o.currentBot.company.links[0])),class:"icon icon-xs rounded-sm shadow-l mr-1 bg-vk text-white"},gs)):u("",!0),o.currentBot.company.phones?(r(),c("a",{key:2,href:"#",onClick:l[3]||(l[3]=i=>o.open("tel:"+o.currentBot.company.phones[0])),class:"icon icon-xs rounded-sm shadow-l mr-1 bg-phone text-white"},ks)):u("",!0),vs,ys]),xs]),$s])])):u("",!0)]),modals:y(()=>[h(Wt),h(B),h($e),h(Se),h(De),h(J),h(Nt),h(It),h(P),h(T),h(so),h(Do),h(uo),h(Jo),h(os)]),_:1})}}});export{Ns as default};