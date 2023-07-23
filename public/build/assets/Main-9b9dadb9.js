import{_ as m,o as a,c as n,a as t,t as h,F as y,m as g,e as f,d,j as v,w,h as b,B as k,b as c,l as u,R as x,u as C,X as B,y as T,f as S}from"./app-437213a1.js";const P={data(){return{title:null,text:null}},mounted(){window.addEventListener("notification",s=>{this.title=s.detail.title||null,this.text=s.detail.text||null,$("#notification-1").toast("show")}),window.addEventListener("success",s=>{this.title=s.detail.title||null,this.text=s.detail.text||null,$("#menu-success-1").showMenu()}),window.addEventListener("warning",s=>{this.title=s.detail.title||null,this.text=s.detail.text||null,$("#menu-warning-1").showMenu()})}},M={id:"notification-1","data-dismiss":"notification-1","data-delay":"3000","data-autohide":"true",class:"notification notification-ios bg-dark1-dark"},L=t("span",{class:"notification-icon"},[t("i",{class:"fa fa-bell"}),t("em",null,"Оповещение"),t("i",{"data-dismiss":"notification-1",class:"fa fa-times-circle"})],-1),F={class:"font-15 color-white mb-n3"},q={class:"pt-2"},N={id:"menu-success-1",class:"menu menu-box-bottom menu-box-detached rounded-m","data-menu-height":"305","data-menu-effect":"menu-over",style:{display:"block",height:"305px"}},j=t("h1",{class:"text-center mt-4"},[t("i",{class:"fa fa-3x fa-check-circle color-green1-dark"})],-1),z={class:"text-center mt-3 text-uppercase font-700"},E=["innerHTML"],A=t("a",{"data-dismiss":"menu-success-1",class:"close-menu btn btn-m btn-center-m button-s shadow-l rounded-s text-uppercase font-900 bg-green1-light"},"Хорошо",-1),D={id:"menu-warning-1",class:"menu menu-box-bottom menu-box-detached rounded-m","data-menu-height":"305","data-menu-effect":"menu-over",style:{display:"block",height:"305px"}},O=t("h1",{class:"text-center mt-4"},[t("i",{class:"fa fa-3x fa-times color-red2-dark"})],-1),V={class:"text-center mt-3 text-uppercase font-700"},I=["innerHTML"],U=t("a",{"data-dismiss":"menu-warning-1",class:"close-menu btn btn-m btn-center-m button-s shadow-l rounded-s text-uppercase font-900 bg-red1-light"},"Хорошо",-1);function H(s,e,r,_,l,o){return a(),n(y,null,[t("div",M,[L,t("h1",F,h(l.title||"Системное"),1),t("p",q,h(l.text||"Ошибка отображения текста"),1)]),t("div",N,[j,t("h1",z,h(l.title||"Системное"),1),t("p",{class:"boxed-text-l",innerHTML:l.text},null,8,E),A]),t("div",D,[O,t("h1",V,h(l.title||"Системное"),1),t("p",{class:"boxed-text-l",innerHTML:l.text},null,8,I),U])],64)}const R=m(P,[["render",H]]),W={data(){return{product:null}},computed:{...g(["inCart","cartTotalCount","inFav"]),currentBot(){return window.currentBot},self(){return window.self},currentPrice(){return this.product.current_price},checkInCart(){return this.inCart(this.product.id)}},mounted(){window.addEventListener("add-to-cart",s=>{this.product=s.detail.product||null,this.product.in_favorite=this.inFav(this.product.id),this.$nextTick(()=>{$("#menu-product-info").showMenu()})})},methods:{removeFromFavorites(){this.product.in_favorite=!1,this.$store.dispatch("removeFromFavorites",this.product.id).then(()=>{this.$botNotification.notification("Избранное","Успешно удалено из избранного!")})},addToFavorite(){this.product.in_favorite=!0,this.$store.dispatch("addToFavorites",this.product).then(()=>{this.$botNotification.notification("Избранное","Успешно добавлено в избранное!")})},goToProduct(){this.$router.push({name:"product",params:{productId:this.product.id}}),$("#menu-product-info").hideMenu()},incProductCart(){this.checkInCart===0?this.$store.dispatch("addProductToCart",this.product):this.$store.dispatch("incQuantity",this.product.id),this.$botNotification.notification("Добавление товара","Успешно добавлено в корзину!")},decProductCart(){this.checkInCart<=1?this.$store.dispatch("removeProduct",this.product.id):this.$store.dispatch("decQuantity",this.product.id),this.$botNotification.notification("Добавление товара","Товар удален!")}}},G={id:"menu-product-info",class:"menu menu-box-bottom menu-box-detached rounded-m d-block",style:{height:"220px",display:"block"},"data-menu-effect":"menu-over"},J={key:0,class:"w-100"},Q={class:"text-center font-700 mt-3 pt-1 px-4"},K={key:0,class:"row text-center mr-2 ml-2 mb-3"},X={class:"col-4 mb-n2"},Y=t("i",{class:"fa-solid fa-plus font-22"},null,-1),Z=[Y],tt={class:"col-4 mb-n2 d-flex justify-content-center align-items-center"},et={class:"font-22"},st={class:"col-4 mb-n2"},ot=t("i",{class:"fa-solid fa-minus font-22"},null,-1),at=[ot],nt={key:1,class:"row text-center mr-2 ml-2 mb-3"},it={class:"col-12 mb-n2"},ct=t("i",{class:"fa-solid fa-cart-plus font-12"},null,-1),lt={class:"row text-center mr-2 ml-2 mb-3"},rt={class:"col-12 mb-n2"},dt=t("i",{class:"fa-regular fa-heart font-12"},null,-1),ht=t("i",{class:"fa-solid fa-heart font-12"},null,-1);function ut(s,e,r,_,l,o){return a(),n("div",G,[l.product?(a(),n("div",J,[t("h4",Q,h(l.product.title||"Нет заголовка"),1),o.checkInCart>0?(a(),n("div",K,[t("div",X,[t("button",{type:"button",onClick:e[0]||(e[0]=(...i)=>o.incProductCart&&o.incProductCart(...i)),class:"btn p-3 w-100 bg-highlight rounded-s shadow-l"},Z)]),t("div",tt,[t("strong",et,h(o.checkInCart),1)]),t("div",st,[t("button",{onClick:e[1]||(e[1]=(...i)=>o.decProductCart&&o.decProductCart(...i)),type:"button",class:"btn p-3 w-100 bg-red1-dark rounded-s shadow-l"},at)])])):(a(),n("div",nt,[t("div",it,[t("button",{type:"button",onClick:e[2]||(e[2]=(...i)=>o.incProductCart&&o.incProductCart(...i)),class:"btn p-3 bg-highlight rounded-s shadow-l w-100"},[ct,f(" В корзину "),t("strong",null,h(o.currentPrice)+"₽",1)])])])),t("div",lt,[t("div",rt,[l.product.in_favorite?(a(),n("button",{key:1,type:"button",onClick:e[4]||(e[4]=(...i)=>o.removeFromFavorites&&o.removeFromFavorites(...i)),class:"btn p-3 bg-highlight rounded-s shadow-l w-100"},[ht,f(" Убрать из избранного ")])):(a(),n("button",{key:0,type:"button",onClick:e[3]||(e[3]=(...i)=>o.addToFavorite&&o.addToFavorite(...i)),class:"btn p-3 bg-red2-dark rounded-s shadow-l w-100"},[dt,f(" В избранное ")]))])])])):d("",!0)])}const _t=m(W,[["render",ut]]),ft={computed:{self(){return window.self},tg(){return window.Telegram.WebApp},currentBot(){return window.currentBot},qr(){return"https://api.qrserver.com/v1/create-qr-code/?size=450x450&qzone=2&data="+this.link},link(){return"https://t.me/"+this.currentBot.bot_domain+"?start="+btoa("001"+this.self.telegram_chat_id)}},methods:{open(s){this.tg.openLink(s)},copy(){var s=$("<input>");$("body").append(s),s.val(this.link).select(),document.execCommand("copy"),s.remove()}}},pt={id:"menu-share",class:"menu menu-box-bottom menu-box-detached rounded-m d-block",style:{height:"420px"}},mt=t("h1",{class:"text-center font-700 font-26 mt-3 pt-2"},"Поделиться контактами",-1),gt=t("p",{class:"boxed-text-xl under-heading m-0 p-0"}," Делитесь ссылкой с друзьями ",-1),bt=t("div",{class:"divider divider-margins"},null,-1),vt={class:"row text-center mr-4 ml-4 mb-0"},$t={class:"col-3 mb-n2"},wt=t("i",{class:"fab fa-facebook-f font-22"},null,-1),kt=t("br",null,null,-1),yt=[wt,kt],xt=t("p",{class:"font-11 opacity-70"},"Facebook",-1),Ct={class:"col-3 mb-n2"},Bt=t("i",{class:"fab fa-twitter font-22"},null,-1),Tt=t("br",null,null,-1),St=[Bt,Tt],Pt=t("p",{class:"font-11 opacity-70"},"Twitter",-1),Mt={class:"col-3 mb-n2"},Lt=t("i",{class:"fa-brands fa-vk font-22"},null,-1),Ft=t("br",null,null,-1),qt=[Lt,Ft],Nt=t("p",{class:"font-11 opacity-70"},"VK",-1),jt={class:"col-3 mb-n2"},zt=t("i",{class:"fa fa-envelope font-22"},null,-1),Et=t("br",null,null,-1),At=[zt,Et],Dt=t("p",{class:"font-11 opacity-70"},"Email",-1),Ot={class:"col-3 mb-n2"},Vt=t("i",{class:"fab fa-whatsapp font-22"},null,-1),It=t("br",null,null,-1),Ut=[Vt,It],Ht=t("p",{class:"font-11 opacity-70"},"WhatsApp",-1),Rt={class:"col-3 mb-n2"},Wt=t("i",{class:"fa fa-link font-22"},null,-1),Gt=t("br",null,null,-1),Jt=[Wt,Gt],Qt=t("p",{class:"font-11 opacity-70"},"Копировать",-1),Kt={class:"col-3 mb-n2"},Xt=t("i",{class:"fab fa-pinterest-p font-22"},null,-1),Yt=t("br",null,null,-1),Zt=[Xt,Yt],te=t("p",{class:"font-11 opacity-70"},"Pinterest",-1),ee=t("div",{class:"col-3 mb-n2"},[t("a",{href:"#",class:"close-menu icon icon-l bg-red2-dark rounded-s shadow-l text-white"},[t("i",{class:"fa fa-times font-22"}),t("br")]),t("p",{class:"font-11 opacity-70"},"Закрыть")],-1),se=t("div",{class:"divider divider-margins mt-n1 mb-3"},null,-1),oe={class:"w-100 p-3 object-fit-cover my-0",alt:""},ae=t("div",{class:"divider divider-margins mt-n1 mb-3"},null,-1),ne=t("p",{class:"footer-copyright font-10 text-center pb-3 mb-1"},[f("© CashMan "),t("span",{id:"copyright-year"},"2023"),f(". Все Права защищены.")],-1);function ie(s,e,r,_,l,o){const i=v("lazy");return a(),n("div",pt,[mt,gt,bt,t("div",vt,[t("div",$t,[t("a",{href:"#",onClick:e[0]||(e[0]=p=>o.open("https://www.facebook.com/sharer/sharer.php?u="+o.link)),class:"icon icon-l bg-facebook rounded-s shadow-l text-white"},yt),xt]),t("div",Ct,[t("a",{href:"#",onClick:e[1]||(e[1]=p=>o.open("https://twitter.com/home?status="+o.link)),class:"icon icon-l bg-twitter rounded-s shadow-l text-white"},St),Pt]),t("div",Mt,[t("a",{href:"#",onClick:e[2]||(e[2]=p=>o.open("https://vk.com/share.php?url="+o.link)),class:"icon icon-l bg-linkedin rounded-s shadow-l text-white"},qt),Nt]),t("div",jt,[t("a",{href:"#",onClick:e[3]||(e[3]=p=>o.open("mailto:?body="+o.link)),class:"icon icon-l bg-mail rounded-s shadow-l text-white"},At),Dt]),t("div",Ot,[t("a",{href:"#",onClick:e[4]||(e[4]=p=>o.open("whatsapp://send?text="+o.link)),class:"icon icon-l bg-whatsapp rounded-s shadow-l text-white"},Ut),Ht]),t("div",Rt,[t("a",{href:"#",onClick:e[5]||(e[5]=(...p)=>o.copy&&o.copy(...p)),class:"shareToCopyLink icon icon-l bg-blue2-dark rounded-s shadow-l text-white"},Jt),Qt]),t("div",Kt,[t("a",{href:"#",onClick:e[6]||(e[6]=p=>o.open("https://pinterest.com/pin/create/button/?url="+o.link)),class:"icon icon-l bg-pinterest rounded-s shadow-l text-white"},Zt),te]),ee]),se,w(t("img",oe,null,512),[[i,o.qr]]),ae,ne])}const ce=m(ft,[["render",ie]]),le={},re={id:"menu-highlights",class:"menu menu-box-bottom menu-box-detached rounded-m",style:{display:"block",height:"510px"}},de=b('<div class="card header-card shape-rounded h-40"><div class="card-overlay bg-highlight opacity-95"></div><div class="card-bg preload-img" data-src="images/pictures/20s.jpg"></div></div><h1 class="text-center color-white mt-4 font-35 font-800">CashMan</h1><p class="text-center color-white font-12 mt-n1 pb-2 mb-3">Добавь красок в свою жизнь</p><div class="card card-style"><div class="highlight-changer pt-3 pb-2"><p class="text-center"> Доступные цветовые схемы для использования в приложении. Нажми на кружочек и цветовая схема автоматически будет применена. </p><a href="#" data-change-highlight="blue2"><i class="fa fa-circle color-blue2-dark"></i><span class="color-blue2-light">Default</span></a><a href="#" data-change-highlight="red2"><i class="fa fa-circle color-red1-dark"></i><span class="color-red2-light">Red</span></a><a href="#" data-change-highlight="orange"><i class="fa fa-circle color-orange-dark"></i><span class="color-orange-light">Orange</span></a><a href="#" data-change-highlight="pink2"><i class="fa fa-circle color-pink2-dark"></i><span class="color-pink2-light">Pink</span></a><a href="#" data-change-highlight="magenta2"><i class="fa fa-circle color-magenta2-dark"></i><span class="color-magenta2-light">Purple</span></a><a href="#" data-change-highlight="aqua"><i class="fa fa-circle color-aqua-dark"></i><span class="color-aqua-light">Aqua</span></a><a href="#" data-change-highlight="teal"><i class="fa fa-circle color-teal-dark"></i><span class="color-teal-light">Teal</span></a><a href="#" data-change-highlight="mint"><i class="fa fa-circle color-mint-dark"></i><span class="color-mint-light">Mint</span></a><a href="#" data-change-highlight="green2"><i class="fa fa-circle color-green2-dark"></i><span class="color-green2-light">Green</span></a><a href="#" data-change-highlight="green1"><i class="fa fa-circle color-green1-dark"></i><span class="color-green1-light">Grass</span></a><a href="#" data-change-highlight="yellow2"><i class="fa fa-circle color-yellow2-dark"></i><span class="color-yellow2-light">Sunny</span></a><a href="#" data-change-highlight="yellow1"><i class="fa fa-circle color-yellow1-dark"></i><span class="color-yellow1-light">Goldish</span></a><a href="#" data-change-highlight="brown1"><i class="fa fa-circle color-brown1-dark"></i><span class="color-brown1-light">Wood</span></a><a href="#" data-change-highlight="dark1"><i class="fa fa-circle color-dark1-dark"></i><span class="color-dark1-light">Night</span></a><a href="#" data-change-highlight="dark2"><i class="fa fa-circle color-dark2-dark"></i><span class="color-dark2-light">Dark</span></a><div class="clearfix"></div></div></div><a href="#" class="close-menu btn btn-full btn-margins rounded-sm shadow-l bg-highlight btn-m font-900 text-uppercase mb-0">Закрыть смену цвета</a>',5),he=[de];function ue(s,e,r,_,l,o){return a(),n("div",re,he)}const _e=m(le,[["render",ue]]),fe={data(){return{load:!1}},mounted(){window.addEventListener("preloader-toggle",s=>{this.load=!this.load}),window.addEventListener("preloader-hide",s=>{this.load=!1}),window.addEventListener("preloader-show",s=>{this.load=!0,setTimeout(()=>{this.load=!1},1e3)})}},pe={key:0,id:"preloader"},me=t("div",{class:"spinner-border color-highlight",role:"status"},null,-1),ge=[me];function be(s,e,r,_,l,o){return l.load?(a(),n("div",pe,ge)):d("",!0)}const ve=m(fe,[["render",be]]),$e={data(){return{isActive:!1}},computed:{...g(["cartTotalCount","favoritesCount"]),logo(){return`/images-by-bot-id/${this.currentBot.id}/${this.currentBot.image}`},currentBot(){return window.currentBot}},mounted(){}},we={id:"menu-main",class:"menu menu-box-right menu-box-detached rounded-m",style:{width:"260px",display:"block",height:"100vh","overflow-y":"scroll"}},ke={class:"menu-header"},ye=b('<a href="#" data-toggle-theme="" class="border-right-0"><i class="fa font-12 color-yellow1-dark fa-lightbulb"></i></a><a href="#" data-menu="menu-highlights" class="border-right-0"><i class="fa font-12 color-green1-dark fa-brush"></i></a><a href="#" data-menu="menu-share" class="border-right-0"><i class="fa font-12 color-red2-dark fa-share-alt"></i></a>',3),xe=t("i",{class:"fa color-blue2-dark fa-cog font-12"},null,-1),Ce=t("a",{class:"border-right-0 close-menu"},[t("i",{class:"fa font-12 color-red2-dark fa-times"})],-1),Be={class:"menu-logo text-center"},Te={href:"#"},Se={class:"rounded-circle bg-highlight",width:"80"},Pe={class:"p-3 font-800 font-24 text-uppercase"},Me={class:"font-11 mt-n2"},Le=t("i",{class:"fa-solid fa-location-dot mr-2 text-danger"},null,-1),Fe={class:"menu-items"},qe=t("h5",{class:"text-uppercase opacity-20 font-12 pl-3"},"Главное меню",-1),Ne=t("i",{class:"fa-solid fa-house-chimney",style:{color:"lightblue"}},null,-1),je=t("span",null,"Главная",-1),ze=t("i",{class:"fa fa-circle"},null,-1),Ee=t("i",{class:"fa-solid fa-basket-shopping"},null,-1),Ae=t("span",null,"Корзина",-1),De={key:0,class:"badge bg-highlight color-white"},Oe=t("i",{class:"fa fa-circle"},null,-1),Ve=t("i",{class:"fa-solid fa-pizza-slice",style:{color:"orangered"}},null,-1),Ie=t("span",null,"Продукция",-1),Ue=t("i",{class:"fa fa-circle"},null,-1),He=t("i",{class:"fa-solid fa-star",style:{color:"orange"}},null,-1),Re=t("span",null,"Избранное",-1),We={key:0,class:"badge bg-highlight color-white"},Ge=t("i",{class:"fa fa-circle"},null,-1),Je=t("i",{class:"fa-regular fa-clock",style:{color:"#842029"}},null,-1),Qe=t("span",null,"История заказов",-1),Ke=t("strong",{class:"badge bg-highlight color-white"},"3",-1),Xe=t("i",{class:"fa fa-circle"},null,-1),Ye=t("i",{class:"fa-solid fa-people-group",style:{color:"#6f42c1"}},null,-1),Ze=t("span",null,"Наша команда",-1),ts=t("i",{class:"fa fa-circle"},null,-1),es=t("i",{class:"fa-solid fa-star",style:{color:"orange"}},null,-1),ss=t("span",null,"О нас",-1),os=t("i",{class:"fa fa-circle"},null,-1),as=t("i",{class:"fa-regular fa-circle-question",style:{color:"green"}},null,-1),ns=t("span",null,"Правила сервиса",-1),is=t("i",{class:"fa fa-circle"},null,-1),cs={href:"#",class:"close-menu"},ls={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-x","data-feather-line":"3","data-feather-size":"16","data-feather-color":"red2-dark","data-feather-bg":"red2-fade-dark",style:{width:"16px",height:"16px"}},rs=t("line",{x1:"18",y1:"6",x2:"6",y2:"18"},null,-1),ds=t("line",{x1:"6",y1:"6",x2:"18",y2:"18"},null,-1),hs=[rs,ds],us=t("span",null,"Закрыть",-1),_s=t("i",{class:"fa fa-circle"},null,-1),fs=b('<div class="text-center pt-2"><a href="#" class="icon icon-xs mr-1 rounded-s bg-facebook"><i class="fab fa-facebook"></i></a><a href="#" class="icon icon-xs mr-1 rounded-s bg-twitter"><i class="fab fa-twitter"></i></a><a href="#" class="icon icon-xs mr-1 rounded-s bg-instagram"><i class="fab fa-instagram"></i></a><a href="#" class="icon icon-xs mr-1 rounded-s bg-linkedin"><i class="fab fa-linkedin-in"></i></a><a href="#" class="icon icon-xs rounded-s bg-whatsapp"><i class="fab fa-whatsapp"></i></a><p class="mb-0 pt-3 font-10 opacity-30">Copyright <span class="copyright-year"></span> Enabled. All rights reserved</p></div>',1);function ps(s,e,r,_,l,o){const i=k("router-link"),p=v("lazy");return a(),n("div",we,[t("div",ke,[ye,c(i,{class:"close-menu",tag:"a",to:"/settings"},{default:u(()=>[xe]),_:1}),Ce]),t("div",Be,[t("a",Te,[w(t("img",Se,null,512),[[p,o.logo]])]),t("h1",Pe,h(o.currentBot.company.title||o.currentBot.bot_domain||"CashMan:Shopify"),1),t("p",Me,[Le,f(h(o.currentBot.company.address||"Без описания"),1)])]),t("div",Fe,[qe,c(i,{id:"nav-home","active-class":"nav-item-active",tag:"a",to:"/home"},{default:u(()=>[Ne,je,ze]),_:1}),c(i,{id:"nav-basket","active-class":"nav-item-active",tag:"a",to:"/basket"},{default:u(()=>[Ee,Ae,s.cartTotalCount>0?(a(),n("strong",De,h(s.cartTotalCount),1)):d("",!0),Oe]),_:1}),c(i,{id:"nav-products","active-class":"nav-item-active",tag:"a",to:"/products"},{default:u(()=>[Ve,Ie,Ue]),_:1}),c(i,{id:"nav-favorites","active-class":"nav-item-active",tag:"a",to:"/favorites"},{default:u(()=>[He,Re,s.favoritesCount>0?(a(),n("strong",We,h(s.favoritesCount),1)):d("",!0),Ge]),_:1}),c(i,{id:"nav-out-team","active-class":"nav-item-active",tag:"a",to:"/history"},{default:u(()=>[Je,Qe,Ke,Xe]),_:1}),c(i,{id:"nav-out-team","active-class":"nav-item-active",tag:"a",to:"/our-team"},{default:u(()=>[Ye,Ze,ts]),_:1}),c(i,{id:"nav-contact-us","active-class":"nav-item-active",tag:"a",to:"/contact-us"},{default:u(()=>[es,ss,os]),_:1}),c(i,{id:"nav-terms","active-class":"nav-item-active",tag:"a",to:"/terms"},{default:u(()=>[as,ns,is]),_:1}),t("a",cs,[(a(),n("svg",ls,hs)),us,_s])]),fs])}const ms=m($e,[["render",ps]]);const gs=t("title",null,"CashMan - система твоего бизнеса внутри",-1),bs=t("meta",{name:"description",content:"CashMan - система твоего бизнеса внутри"},null,-1),vs={id:"page"},$s={class:"header header-fixed header-auto-show header-logo-app"},ws=t("i",{class:"fas fa-arrow-left"},null,-1),ks=[ws],ys=b('<a href="#" data-toggle-theme class="header-icon header-icon-2 show-on-theme-dark"><i class="fas fa-sun"></i></a><a href="#" data-toggle-theme class="header-icon header-icon-2 show-on-theme-light"><i class="fas fa-moon"></i></a><a href="#" data-menu="menu-highlights" class="header-icon header-icon-3"><i class="fas fa-brush"></i></a>',3),xs={key:0,href:"#","data-menu":"menu-main",class:"header-icon header-icon-4"},Cs=t("i",{class:"fas fa-bars"},null,-1),Bs=[Cs],Ts={key:0,id:"footer-bar",class:"footer-bar-5 bg-dark2-dark mb-2 ml-2 mr-2 rounded-m"},Ss=t("i",{class:"fa-solid fa-basket-shopping"},null,-1),Ps=t("span",{class:"color-white"},"Корзина",-1),Ms={key:0,class:"badge bg-green1-dark"},Ls={key:1},Fs=t("i",{class:"fa-brands fa-shopify"},null,-1),qs=t("span",{class:"color-white"},"Продукты",-1),Ns={key:0},js=t("i",{class:"fa fa-home"},null,-1),zs=t("span",{class:"color-white"},"Домой",-1),Es={key:0},As=t("i",{class:"fa fa-heart"},null,-1),Ds=t("span",{class:"color-white"},"Избранное",-1),Os={key:0,class:"badge bg-green1-dark"},Vs={key:1},Is=t("a",{href:"#","data-menu":"menu-main"},[t("i",{class:"fa-solid fa-bars"}),t("span",{class:"color-white"},"Меню")],-1),Us={watch:{$route(s){this.$preloader.show(),x.handler(),this.$nextTick(()=>{document.body.scrollTop=document.documentElement.scrollTop=0,console.log("on route change")})}},computed:{...g(["cartTotalCount","favoritesCount"]),prefix(){return window.currentPath||""},tg(){return window.Telegram.WebApp},tgUser(){const s=new URLSearchParams(this.tg.initData);return JSON.parse(s.get("user"))}},mounted(){},methods:{openLink(s){this.tg.openLink(s,{try_instant_view:!0})},closeShop(){this.tg.close()}}},Hs=Object.assign(Us,{__name:"ShopLayout",setup(s){return(e,r)=>{const _=k("router-link");return a(),n(y,null,[c(C(B),null,{default:u(()=>[gs,bs]),_:1}),c(ve),c(_t),c(R),t("div",vs,[t("div",$s,[t("a",{onClick:r[0]||(r[0]=(...l)=>e.closeShop&&e.closeShop(...l)),class:"header-title header-subtitle"},"Вернуться в бота"),t("a",{onClick:r[1]||(r[1]=l=>e.$router.back()),"data-back-button":"",class:"header-icon header-icon-1"},ks),ys,e.$route.meta.hide_menu?d("",!0):(a(),n("a",xs,Bs))]),e.$route.meta.hide_menu?d("",!0):(a(),n("div",Ts,[c(_,{"active-class":"active-nav",tag:"a",to:e.prefix+"/basket"},{default:u(()=>[Ss,Ps,e.cartTotalCount>0?(a(),n("em",Ms,h(e.cartTotalCount),1)):d("",!0),e.$route.path==e.prefix+"/basket"?(a(),n("strong",Ls)):d("",!0)]),_:1},8,["to"]),c(_,{"active-class":"active-nav",tag:"a",to:e.prefix+"/products"},{default:u(()=>[Fs,qs,e.$route.path==e.prefix+"/products"?(a(),n("strong",Ns)):d("",!0)]),_:1},8,["to"]),c(_,{"active-class":"active-nav",tag:"a",to:e.prefix+"/home"},{default:u(()=>[js,zs,e.$route.path==e.prefix+"/home"?(a(),n("strong",Es)):d("",!0)]),_:1},8,["to"]),c(_,{"active-class":"active-nav",tag:"a",to:e.prefix+"/favorites"},{default:u(()=>[As,Ds,e.favoritesCount>0?(a(),n("em",Os,h(e.favoritesCount),1)):d("",!0),e.$route.path==e.prefix+"/favorites"?(a(),n("strong",Vs)):d("",!0)]),_:1},8,["to"]),Is])),T(e.$slots,"default"),c(ce),c(_e),c(ms)])],64)}}});const Rs={key:0,class:"page-content",style:{"min-height":"667px"}},Ws={class:"page-title page-title-small"},Gs=t("i",{class:"fa fa-arrow-left"},null,-1),Js=["href"],Qs={style:{width:"50px","object-fit":"cover","border-radius":"50%"},alt:""},Ks=t("div",{class:"card header-card shape-rounded",style:{height:"115px"}},[t("div",{class:"card-overlay bg-highlight opacity-95"}),t("div",{class:"card-overlay dark-mode-tint"}),t("div",{class:"card-bg preload-img","data-src":"/shop/images/pictures/20s.jpg"})],-1),Xs={class:"footer"},Ys={class:"card card-style mb-0"},Zs={href:"#",class:"footer-title p-4"},to=t("p",{class:"text-center font-12 mt-n1 mb-3 opacity-70"},[f(" Добавь "),t("span",{class:"color-highlight"},"красок"),f(" в свою жизнь ")],-1),eo={class:"boxed-text-l"},so={class:"text-center mb-3"},oo=t("i",{class:"fa-solid fa-at"},null,-1),ao=[oo],no=t("i",{class:"fa-brands fa-vk"},null,-1),io=[no],co=t("i",{class:"fa fa-phone"},null,-1),lo=[co],ro=t("a",{href:"#","data-menu":"menu-share",class:"icon icon-xs rounded-sm mr-1 shadow-l bg-red2-dark text-white"},[t("i",{class:"fa fa-share-alt"})],-1),ho=t("a",{href:"#",class:"back-to-top icon icon-xs rounded-sm shadow-l bg-highlight text-white"},[t("i",{class:"fa fa-arrow-up"})],-1),uo=t("p",{class:"footer-copyright pb-3 mb-1"},[f("© CashMan "),t("span",{id:"copyright-year"},"2023"),f(". Все Права защищены.")],-1),_o=t("div",{class:"footer-card card shape-rounded","data-card-height":"230",style:{height:"230px"}},[t("div",{class:"card-overlay bg-highlight opacity-95"}),t("div",{class:"card-bg preload-img","data-src":"/shop/images/pictures/20s.jpg"})],-1),fo={computed:{...g(["getSelf"]),logo(){return`/images-by-bot-id/${this.currentBot.id}/${this.currentBot.image}`},self(){return window.self||null},tg(){return window.Telegram.WebApp},tgUser(){const s=new URLSearchParams(this.tg.initData);return JSON.parse(s.get("user"))},currentBot(){return window.currentBot},qr(){return"https://api.qrserver.com/v1/create-qr-code/?size=450x450&qzone=2&data="+this.link},link(){return"https://t.me/"+this.currentBot.bot_domain+"?start="+btoa("001"+this.self.telegram_chat_id)}},created(){window.currentBot=this.bot.data,window.currentScript=this.slug_id;let s=this.tgUser||null;this.$store.dispatch("loadSelf",{dataObject:{telegram_chat_id:s?s.id:484698703,bot_id:window.currentBot.id}}).then(()=>{window.self=this.getSelf}),this.$notify({type:"success",text:"The operation completed"})},methods:{open(s){this.tg.openLink(s)}}},mo=Object.assign(fo,{__name:"Main",props:{bot:{type:Object},slug_id:{type:String}},setup(s){return(e,r)=>{const _=k("router-view"),l=v("lazy");return a(),S(Hs,null,{default:u(()=>[e.self?(a(),n("div",Rs,[t("div",Ws,[t("h2",null,[t("a",{onClick:r[0]||(r[0]=o=>e.$router.back())},[Gs,f(" "+h(e.$route.meta.title||"Меню"),1)])]),t("a",{href:e.$route.meta.hide_menu?"#":"#/contact-us",class:"bg-fade-gray1-dark shadow-xl d-flex justify-content-center align-items-center font-18 bot-avatar"},[w(t("img",Qs,null,512),[[l,e.logo]])],8,Js)]),Ks,c(_,{bot:s.bot},null,8,["bot"]),t("div",Xs,[t("div",Ys,[t("a",Zs,h(e.currentBot.company.title||"CashMan:Shopify"),1),to,t("p",eo,h(e.currentBot.company.description||"Описание вашего магазина"),1),t("div",so,[e.currentBot.company.email?(a(),n("a",{key:0,href:"#",onClick:r[1]||(r[1]=o=>e.open("mailTo:"+e.currentBot.company.email)),class:"icon icon-xs rounded-sm shadow-l mr-1 bg-facebook text-white"},ao)):d("",!0),e.currentBot.company.links[0]?(a(),n("a",{key:1,href:"#",onClick:r[2]||(r[2]=o=>e.open(e.currentBot.company.links[0])),class:"icon icon-xs rounded-sm shadow-l mr-1 bg-vk text-white"},io)):d("",!0),e.currentBot.company.phones[0]?(a(),n("a",{key:2,href:"#",onClick:r[3]||(r[3]=o=>e.open("tel:"+e.currentBot.company.phones[0])),class:"icon icon-xs rounded-sm shadow-l mr-1 bg-phone text-white"},lo)):d("",!0),ro,ho]),uo]),_o])])):d("",!0)]),_:1})}}});export{mo as default};
