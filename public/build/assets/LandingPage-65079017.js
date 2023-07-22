import{m as M,o as a,c as i,b as _,l as w,u as E,X as T,y as B,F as x,a as e,h as F,B as j,_ as S,j as $,w as u,e as c,f as C,r as v,n as L,d as r,t as y,g as V,v as f,A as I}from"./app-d543012c.js";import{V as A}from"./VisitCardConstructor-7ef2c801.js";import{v as D}from"./v4-a960c1f4.js";const H=e("title",null,"CashMan - система твоего бизнеса внутри",-1),N=e("meta",{name:"description",content:"CashMan - система твоего бизнеса внутри"},null,-1),P=F('<nav class="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="mainNav"><div class="container px-5"><a class="bg-light px-3 text-gradient fs-3 fw-lighter" href="#page-top"> Next IT </a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"> Menu <i class="bi-list"></i></button><div class="collapse navbar-collapse" id="navbarResponsive"><ul class="navbar-nav ms-auto me-4 my-3 my-lg-0"><li class="nav-item"><a class="nav-link me-lg-3" href="#constructor">Конструктор</a></li><li class="nav-item"><a class="nav-link me-lg-3" href="#prices">Тарифы</a></li><li class="nav-item"><a class="nav-link me-lg-3" href="#employes">Сотрудничество</a></li><li class="nav-item" style="border-left:2px #efefef solid;"><a class="nav-link me-lg-3 text-gradient ml-2" href="#!"><i class="fa-brands fa-vk"></i></a></li><li class="nav-item" style="border-right:2px #efefef solid;"><a class="nav-link me-lg-3 text-gradient" href="#!"><i class="fa-brands fa-instagram"></i></a></li></ul><button class="btn btn-primary rounded-pill px-3 mb-2 mb-lg-0" data-bs-toggle="modal" data-bs-target="#feedbackModal"><span class="d-flex align-items-center"><i class="bi-chat-text-fill me-2"></i><span class="small">Перезвонить</span></span></button></div></div></nav>',1),U={props:["active"],data(){return{load:!1,bot:null,company:null}},computed:{...M(["getErrors","getCurrentBot","getCurrentCompany"])},watch:{getErrors:function(o,t){Object.keys(o).forEach(n=>{this.$notify({title:"Конструктор ботов",text:o[n],type:"warn"})})}},mounted(){this.loadCurrentCompany(),this.loadCurrentBot(),window.addEventListener("store_current_bot-change-event",o=>{this.bot=this.getCurrentBot}),window.addEventListener("store_current_company-change-event",o=>{this.company=this.getCurrentCompany})},methods:{loadCurrentCompany(o=null){this.$store.dispatch("updateCurrentCompany",{company:o}).then(()=>{this.company=this.getCurrentCompany})},loadCurrentBot(o=null){this.$store.dispatch("updateCurrentBot",{bot:o}).then(()=>{this.bot=this.getCurrentBot})},resetCompany(){this.$store.dispatch("resetCurrentCompany").then(()=>{this.company=null,window.dispatchEvent(new CustomEvent("store_current_company-change-event"))})},resetBot(){this.$store.dispatch("resetCurrentBot").then(()=>{this.bot=null,window.dispatchEvent(new CustomEvent("store_current_bot-change-event"))})},stopAllDialogs(){this.$store.dispatch("stopDialogs").then(o=>{this.$notify({title:"Конструктор ботов",text:"Все диалоги остановлены",type:"success"})}).catch(o=>{})},reloadWebhooks(){this.load=!0,this.$notify({title:"Конструктор ботов",text:"Процедура обновления зависимостей началась"}),axios.get("/bot/register-webhooks").then(()=>{this.load=!1,this.$notify({title:"Конструктор ботов",text:"Зависимости успешно обновлены!",type:"success"})}).catch(()=>{this.load=!1,this.$notify({title:"Конструктор ботов",text:"Неудалось обновить зависимости",type:"error"})})}}},R=Object.assign(U,{__name:"ClientLayout",setup(o){return(t,n)=>{const m=j("notifications");return a(),i(x,null,[_(E(T),null,{default:w(()=>[H,N]),_:1}),_(m,{position:"top right"}),P,B(t.$slots,"default")],64)}}});const G={props:["domain"],watch:{messages:function(o){this.$nextTick(function(){var t=this.$el.querySelector("#scroll-area");t.scrollTop=t.scrollHeight+120})}},data(){return{loaded:!0,canEnter:!1,messages:[],buttons:[],dataForm:{message:null,query:null,user:{id:null,first_name:null,last_name:null,username:null}}}},methods:{login(){this.canEnter=!0,this.dataForm.user.id=D(),this.send("/start")},send(o=null,t=0){this.loaded=!1,console.log(o);let n=o||this.dataForm.message;o&&(this.dataForm.message=null,this.dataForm.query=o),t===0&&this.messages.push({text:n,direction:"outgoing",created_at:(()=>{let m=new Date,l=String(m.getDate()).padStart(2,"0"),d=String(m.getMonth()+1).padStart(2,"0"),g=m.getFullYear(),p=m.getMinutes(),k=m.getHours(),s=m.getSeconds();return g+"-"+d+"-"+l+" "+k+":"+p+":"+s})()}),axios.post("/web/"+this.domain,this.dataForm).then(m=>{this.dataForm.message=null,this.dataForm.query=null,m.data.forEach(d=>{let g=null;if(d.reply_markup){let p=JSON.parse(d.reply_markup);p.keyboard&&(this.buttons=p.keyboard,this.is_keyboard=!0,document.querySelector("#bottom-menu").click()),g=p.inline_keyboard||null}this.messages.push({text:d.text||null,direction:"incoming",keyboard:g,photo:d.photo||null,created_at:d.created_at||null}),this.$nextTick(()=>{this.loaded=!0})}).catch(()=>{this.$nextTick(()=>{this.loaded=!0})})})}}},O={class:"row d-flex justify-content-center"},z={class:"col-md-10 col-lg-8 col-xl-6"},K={class:"card",id:"chat2"},W={class:"card-header d-flex justify-content-between align-items-center p-3"},Y={class:"mb-0"},J={style:{width:"50px","object-fit":"cover","margin-right":"10px","border-radius":"50%"},alt:""},X=e("strong",{style:{color:"#7701ce"}},"Man",-1),Q=e("button",{type:"button",class:"btn btn-primary btn-sm","data-mdb-ripple-color":"dark"},"Перейти к созданию чат-бота ",-1),Z={alt:"avatar 1",style:{width:"45px",height:"100%"}},ee={key:0},te=["innerHTML"],se=["innerHTML"],ae={key:2,class:"small ms-3 mb-3 rounded-3 text-muted"},le={key:3,class:"w-100 mb-1 mt-1",alt:""},ie={key:4,class:"chat-custom-menu px-2 py-2",style:{"border-radius":"10px"}},oe={class:"col-12 d-flex justify-content-between flex-wrap mb-1"},ne={class:"d-flex justify-content-between w-100"},re={class:"chat-inline-btn w-100"},ce=["onClick"],de=["href"],me=["href"],ue={key:1},he=["innerHTML"],pe=["innerHTML"],fe={key:2,class:"small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end"},ge={key:1,class:"w-100"},be={class:"form-floating mb-3"},xe=e("label",{for:"floatingInput"},"Ваше имя",-1),ve={class:"form-floating mb-3"},ye=e("label",{for:"floatingInput"},"Ваша фамилия",-1),_e={class:"form-floating mb-3"},ke=e("label",{for:"floatingInput"},"Ваш номер телефона",-1),we=e("button",{class:"btn btn-outline-primary p-3 w-100"},"Войти",-1),$e={class:"card-footer"},Ce={class:"row"},qe={class:"col-12 d-flex justify-content-center"},Me={class:"dropup-center dropup"},Fe=e("a",{class:"ms-3 text-muted",type:"button",id:"bottom-menu","data-bs-toggle":"dropdown","aria-expanded":"true"},[e("i",{class:"fa-solid fa-ellipsis"})],-1),je={class:"dropdown-menu w-100 chat-custom-dropdown-menu",style:{"min-width":"300px"}},Ee={class:"d-flex justify-content-between flex-wrap"},Te={class:"d-flex justify-content-between w-100"},Be={class:"chat-reply-btn w-100"},Se={class:"p-1"},Le=["onClick"],Ve={class:"col-12 text-muted d-flex justify-content-start align-items-center py-1 px-3"},Ie={alt:"avatar 3",style:{width:"40px",height:"100%"}},Ae=F('<a class="ms-1 text-muted" href="#!"><i class="fas fa-paperclip"></i></a><a class="ms-3 text-muted" href="#!"><i class="fas fa-smile"></i></a><a class="ms-3" href="#!"><i class="fas fa-paper-plane"></i></a>',3);function De(o,t,n,m,l,d){const g=j("perfect-scrollbar"),p=$("lazy"),k=$("mask");return a(),i("div",O,[e("div",z,[e("div",K,[e("div",W,[e("h5",Y,[u(e("img",J,null,512),[[p,"/images/cashman.jpg"]]),c(" Cash"),X]),Q]),l.canEnter?(a(),C(g,{key:0,id:"scroll-area",class:"card-body ps-container py-5 px-3",style:{position:"relative",height:"400px"}},{default:w(()=>[(a(!0),i(x,null,v(l.messages,s=>(a(),i("div",{class:L([{"justify-content-start":s.direction==="incoming","justify-content-end":s.direction==="outgoing"},"d-flex flex-row mb-3"])},[u(e("img",Z,null,512),[[p,"/images/cashman.jpg"]]),s.direction==="incoming"?(a(),i("div",ee,[s.text?(a(),i("p",{key:0,class:"small p-2 ms-3 mb-1 rounded-3",style:{"background-color":"#f5f6f7"},innerHTML:s.text},null,8,te)):r("",!0),s.caption?(a(),i("p",{key:1,class:"small p-2 ms-3 mb-1 rounded-3",style:{"background-color":"#f5f6f7"},innerHTML:s.caption},null,8,se)):r("",!0),s.created_at?(a(),i("p",ae,y(s.created_at),1)):r("",!0),s.photo?u((a(),i("img",le,null,512)),[[p,s.photo]]):r("",!0),s.keyboard?(a(),i("div",ie,[(a(!0),i(x,null,v(s.keyboard,b=>(a(),i("div",oe,[e("div",ne,[(a(!0),i(x,null,v(b,h=>(a(),i("div",re,[h.callback_data?(a(),i("button",{key:0,onClick:zt=>d.send(h.callback_data||h.text,1),class:"btn btn-outline-light w-100"},y(h.text||h||"-"),9,ce)):r("",!0),h.web_app?(a(),i("a",{key:1,class:"btn btn-outline-light w-100",href:"https://t.me/"+n.domain,target:"_blank"},"Только в Telegram",8,de)):r("",!0),h.url?(a(),i("a",{key:2,class:"btn btn-outline-light w-100",href:h.url,target:"_blank"},y(h.text||h||"-"),9,me)):r("",!0)]))),256))])]))),256))])):r("",!0)])):r("",!0),s.direction==="outgoing"?(a(),i("div",ue,[s.text?(a(),i("p",{key:0,class:"small p-2 me-3 mb-1 text-white rounded-3 bg-primary",innerHTML:s.text},null,8,he)):r("",!0),s.caption?(a(),i("p",{key:1,class:"small p-2 me-3 mb-1 text-white rounded-3 bg-primary",innerHTML:s.caption},null,8,pe)):r("",!0),s.created_at?(a(),i("p",fe,y(s.created_at),1)):r("",!0)])):r("",!0)],2))),256))]),_:1})):r("",!0),l.canEnter?r("",!0):(a(),i("div",ge,[e("form",{onSubmit:t[3]||(t[3]=V((...s)=>d.login&&d.login(...s),["prevent"])),class:"p-2"},[e("div",be,[u(e("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=s=>l.dataForm.user.first_name=s),class:"form-control",id:"floatingInput",placeholder:"name@example.com",required:""},null,512),[[f,l.dataForm.user.first_name]]),xe]),e("div",ve,[u(e("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=s=>l.dataForm.user.last_name=s),class:"form-control",id:"floatingInput",placeholder:"name@example.com",required:""},null,512),[[f,l.dataForm.user.last_name]]),ye]),e("div",_e,[u(e("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=s=>l.dataForm.user.username=s),class:"form-control",id:"floatingInput",placeholder:"name@example.com",required:""},null,512),[[k,"+7(###)###-##-##"],[f,l.dataForm.user.username]]),ke]),we],32)])),e("div",$e,[e("div",Ce,[e("div",qe,[e("div",Me,[Fe,e("div",je,[l.buttons.length===0?(a(),i("button",{key:0,onClick:t[4]||(t[4]=s=>d.send("/start")),class:"btn btn-outline-light w-100 text-center"},"Начать ")):r("",!0),l.buttons.length>0?(a(),C(g,{key:1,class:"ps-keyboard-container buttons p-2"},{default:w(()=>[(a(!0),i(x,null,v(l.buttons,s=>(a(),i("div",Ee,[e("div",Te,[(a(!0),i(x,null,v(s,b=>(a(),i("div",Be,[e("div",Se,[e("button",{onClick:h=>d.send(b.text||b),class:"btn btn-outline-light w-100"},y(b.text||b||"-"),9,Le)])]))),256))])]))),256))]),_:1})):r("",!0)])])]),e("div",Ve,[u(e("img",Ie,null,512),[[p,"/images/cashman.jpg"]]),u(e("input",{type:"text",onKeydown:t[5]||(t[5]=I(s=>d.send(null),["enter"])),"onUpdate:modelValue":t[6]||(t[6]=s=>l.dataForm.message=s),class:"form-control form-control-lg",id:"exampleFormControlInput1",placeholder:"Ваше сообщение"},null,544),[[f,l.dataForm.message]]),Ae])])])])])])}const q=S(G,[["render",De]]),He=e("header",{class:"masthead"},[e("div",{class:"container px-5"},[e("div",{class:"row gx-5 align-items-center"},[e("div",{class:"col-lg-6"},[e("div",{class:"mb-5 mb-lg-0 text-center text-lg-start"},[e("h1",{class:"display-1 lh-1 mb-3"},"Showcase your app beautifully."),e("p",{class:"lead fw-normal text-muted mb-5"},"Launch your mobile app landing page faster with this free, open source theme from Start Bootstrap!"),e("div",{class:"d-flex flex-column flex-lg-row align-items-center"},[e("a",{class:"me-lg-3 mb-4 mb-lg-0",href:"#!"},[e("img",{class:"app-badge",src:"/landing/assets/img/google-play-badge.svg",alt:"..."})]),e("a",{href:"#!"},[e("img",{class:"app-badge",src:"/landing/assets/img/app-store-badge.svg",alt:"..."})])])])]),e("div",{class:"col-lg-6"},[e("div",{class:"masthead-device-mockup"},[e("svg",{class:"circle",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"},[e("defs",null,[e("linearGradient",{id:"circleGradient",gradientTransform:"rotate(45)"},[e("stop",{class:"gradient-start-color",offset:"0%"}),e("stop",{class:"gradient-end-color",offset:"100%"})])]),e("circle",{cx:"50",cy:"50",r:"50"})]),e("svg",{class:"shape-1 d-none d-sm-block",viewBox:"0 0 240.83 240.83",xmlns:"http://www.w3.org/2000/svg"},[e("rect",{x:"-32.54",y:"78.39",width:"305.92",height:"84.05",rx:"42.03",transform:"translate(120.42 -49.88) rotate(45)"}),e("rect",{x:"-32.54",y:"78.39",width:"305.92",height:"84.05",rx:"42.03",transform:"translate(-49.88 120.42) rotate(-45)"})]),e("svg",{class:"shape-2 d-none d-sm-block",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"},[e("circle",{cx:"50",cy:"50",r:"50"})]),e("div",{class:"device-wrapper"},[e("div",{class:"device","data-device":"iPhoneX","data-orientation":"portrait","data-color":"black"},[e("div",{class:"screen bg-black"},[e("video",{muted:"muted",autoplay:"",loop:"",style:{"max-width":"100%",height:"100%"}},[e("source",{src:"/landing/assets/img/demo-screen.mp4",type:"video/mp4"})])])])])])])])])],-1),Ne=e("aside",{class:"text-center bg-gradient-primary-to-secondary"},[e("div",{class:"container px-5"},[e("div",{class:"row gx-5 justify-content-center"},[e("div",{class:"col-xl-8"},[e("div",{class:"h2 fs-1 text-white mb-4"},'"An intuitive solution to a common problem that we all face, wrapped up in a single app!" '),e("img",{src:"/landing/assets/img/tnw-logo.svg",alt:"...",style:{height:"3rem"}})])])])],-1),Pe=e("section",{class:"bg-light py-5"},[e("div",{class:"container px-5"},[e("div",{class:"row gx-5 justify-content-center"},[e("div",{class:"col-xxl-8"},[e("div",{class:"text-center my-5"},[e("h2",{class:"display-5 fw-bolder"},[e("span",{class:"text-gradient d-inline"},"About Me")]),e("p",{class:"lead fw-light mb-4"},"My name is Start Bootstrap and I help brands grow."),e("p",{class:"text-muted"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dolorum itaque qui unde quisquam consequatur autem. Eveniet quasi nobis aliquid cumque officiis sed rem iure ipsa! Praesentium ratione atque dolorem?"),e("div",{class:"d-flex justify-content-center fs-2 gap-4"},[e("a",{class:"text-gradient",href:"#!"},[e("i",{class:"bi bi-twitter"})]),e("a",{class:"text-gradient",href:"#!"},[e("i",{class:"bi bi-linkedin"})]),e("a",{class:"text-gradient",href:"#!"},[e("i",{class:"bi bi-github"})])])])])])])],-1),Ue=e("section",{class:"py-5"},[e("div",{class:"container px-5 mb-5"},[e("div",{class:"text-center mb-5"},[e("h1",{class:"display-5 fw-bolder mb-0"},[e("span",{class:"text-gradient d-inline"},"Наши кейсы")])]),e("div",{class:"row gx-5 justify-content-center"},[e("div",{class:"col-lg-11 col-xl-9 col-xxl-8"},[e("div",{class:"card overflow-hidden shadow rounded-4 border-0 mb-5"},[e("div",{class:"card-body p-0"},[e("div",{class:"d-flex align-items-center"},[e("div",{class:"p-5"},[e("h2",{class:"fw-bolder"},"Project Name 1"),e("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius at enim eum illum aperiam placeat esse? Mollitia omnis minima saepe recusandae libero, iste ad asperiores! Explicabo commodi quo itaque! Ipsam!")]),e("img",{class:"img-fluid",src:"https://dummyimage.com/300x400/343a40/6c757d",alt:"..."})])])]),e("div",{class:"card overflow-hidden shadow rounded-4 border-0"},[e("div",{class:"card-body p-0"},[e("div",{class:"d-flex align-items-center"},[e("div",{class:"p-5"},[e("h2",{class:"fw-bolder"},"Project Name 2"),e("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius at enim eum illum aperiam placeat esse? Mollitia omnis minima saepe recusandae libero, iste ad asperiores! Explicabo commodi quo itaque! Ipsam!")]),e("img",{class:"img-fluid",src:"https://dummyimage.com/300x400/343a40/6c757d",alt:"..."})])])])])])])],-1),Re={id:"cases"},Ge={class:"container px-5"},Oe={class:"row gx-5 justify-content-center"},ze={class:"col-12"},Ke={key:0,class:"py-5 bg-gradient-primary-to-secondary text-white"},We={class:"container px-5 my-5"},Ye={class:"text-center"},Je=e("h2",{class:"display-4 fw-bolder mb-4"},"Давайте создадим что-нибудь вместе!",-1),Xe=e("a",{class:"btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder ml-2","data-bs-toggle":"modal","data-bs-target":"#feedbackModal"},"Позвать помошника",-1),Qe={key:1,id:"constructor",class:"py-5 bg-gradient-primary-to-secondary text-white"},Ze={class:"container px-5 my-5"},et={class:"w-100 d-flex justify-content-center mt-5"},tt=e("i",{class:"fa-solid fa-arrows-rotate text-white fw-bold",style:{"font-size":"26px"}},null,-1),st=[tt],at={id:"features"},lt={class:"container px-5"},it={class:"row gx-5 align-items-center"},ot=e("div",{class:"col-lg-8 order-lg-1 mb-5 mb-lg-0"},[e("div",{class:"container-fluid px-5"},[e("div",{class:"row gx-5"},[e("div",{class:"col-md-6 mb-5"},[e("div",{class:"text-center"},[e("i",{class:"bi-phone icon-feature text-gradient d-block mb-3"}),e("h3",{class:"font-alt"},"Device Mockups"),e("p",{class:"text-muted mb-0"},"Ready to use HTML/CSS device mockups, no Photoshop required!")])]),e("div",{class:"col-md-6 mb-5"},[e("div",{class:"text-center"},[e("i",{class:"bi-camera icon-feature text-gradient d-block mb-3"}),e("h3",{class:"font-alt"},"Flexible Use"),e("p",{class:"text-muted mb-0"},"Put an image, video, animation, or anything else in the screen!")])])]),e("div",{class:"row"},[e("div",{class:"col-md-6 mb-5 mb-md-0"},[e("div",{class:"text-center"},[e("i",{class:"bi-gift icon-feature text-gradient d-block mb-3"}),e("h3",{class:"font-alt"},"Free to Use"),e("p",{class:"text-muted mb-0"},"As always, this theme is free to download and use for any purpose!")])]),e("div",{class:"col-md-6"},[e("div",{class:"text-center"},[e("i",{class:"bi-patch-check icon-feature text-gradient d-block mb-3"}),e("h3",{class:"font-alt"},"Open Source"),e("p",{class:"text-muted mb-0"},"Since this theme is MIT licensed, you can use it commercially!")])])])])],-1),nt={class:"col-lg-4 order-lg-0"},rt={class:"features-device-mockup"},ct=e("svg",{class:"circle",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"},[e("defs",null,[e("linearGradient",{id:"circleGradient",gradientTransform:"rotate(45)"},[e("stop",{class:"gradient-start-color",offset:"0%"}),e("stop",{class:"gradient-end-color",offset:"100%"})])]),e("circle",{cx:"50",cy:"50",r:"50"})],-1),dt=e("svg",{class:"shape-1 d-none d-sm-block",viewBox:"0 0 240.83 240.83",xmlns:"http://www.w3.org/2000/svg"},[e("rect",{x:"-32.54",y:"78.39",width:"305.92",height:"84.05",rx:"42.03",transform:"translate(120.42 -49.88) rotate(45)"}),e("rect",{x:"-32.54",y:"78.39",width:"305.92",height:"84.05",rx:"42.03",transform:"translate(-49.88 120.42) rotate(-45)"})],-1),mt=e("svg",{class:"shape-2 d-none d-sm-block",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"},[e("circle",{cx:"50",cy:"50",r:"50"})],-1),ut={class:"device-wrapper"},ht={class:"row"},pt={class:"col-12"},ft=e("section",{class:"bg-light"},[e("div",{class:"container px-5"},[e("div",{class:"row gx-5 align-items-center justify-content-center justify-content-lg-between"},[e("div",{class:"col-12 col-lg-5"},[e("h2",{class:"display-4 lh-1 mb-4"},"Enter a new age of web design"),e("p",{class:"lead fw-normal text-muted mb-5 mb-lg-0"},"This section is perfect for featuring some information about your application, why it was built, the problem it solves, or anything else! There's plenty of space for text here, so don't worry about writing too much.")]),e("div",{class:"col-sm-8 col-md-6"},[e("div",{class:"px-5 px-sm-0"},[e("img",{class:"img-fluid rounded-circle",src:"https://source.unsplash.com/u8Jn2rzYIps/900x900",alt:"..."})])])])])],-1),gt=e("section",{class:"cta"},[e("div",{class:"cta-content"},[e("div",{class:"container px-5"},[e("h2",{class:"text-white display-1 lh-1 mb-4"},[c(" Stop waiting. "),e("br"),c(" Start building. ")]),e("a",{class:"btn btn-outline-light py-3 px-4 rounded-pill",href:"https://startbootstrap.com/theme/new-age",target:"_blank"},"Download for free")])])],-1),bt=e("section",{id:"prices"},[e("div",{class:"container px-5"},[e("div",{class:"row gx-5 justify-content-center"},[e("div",{class:"col-xxl-8"},[e("div",{class:"text-center my-5"},[e("h2",{class:"display-5 fw-bolder"},[e("span",{class:"text-gradient d-inline"},"Наши тарифы")]),e("p",{class:"lead fw-light mb-4"},"My name is Start Bootstrap and I help brands grow."),e("p",{class:"text-muted"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dolorum itaque qui unde quisquam consequatur autem. Eveniet quasi nobis aliquid cumque officiis sed rem iure ipsa! Praesentium ratione atque dolorem?")])])]),e("div",{class:"row"},[e("div",{class:"col"},[e("div",{class:"card bg-gradient-primary-to-secondary shadow text-white mb-5"},[e("div",{class:"card-header pt-4"},[e("h4",{class:"text-center"},"Индивидуальный")]),e("div",{class:"card-body px-3 py-4"},[e("p",null,[e("i",{class:"fa-solid fa-check mr-2"}),c(" Соберем тариф под Ваши нужды")]),e("p",null,[e("i",{class:"fa-solid fa-check mr-2"}),c(" Рассылки неограничены")]),e("button",{"data-bs-toggle":"modal","data-bs-target":"#feedbackModal",type:"button",class:"btn btn-outline-light w-100"},"Обсудить тариф ")])]),e("div",{class:"content"},[e("h3",{class:"text-secondary"}," Список услуг"),e("ul",{id:"services",class:"list-group list-group-flush"},[e("li",{class:"list-group-item"},"Online-chat"),e("li",{class:"list-group-item"},"Бот для мессенджеров"),e("li",{class:"list-group-item"},"Бот для Whatsapp"),e("li",{class:"list-group-item"},"Сбор заявок"),e("li",{class:"list-group-item"},"Графический редактор"),e("li",{class:"list-group-item"},"Отправка медиафайлов"),e("li",{class:"list-group-item"},"CRM"),e("li",{class:"list-group-item"},"Перенос клиентской базы"),e("li",{class:"list-group-item"},"Инструменты оператора"),e("li",{class:"list-group-item"},"Статистика"),e("li",{class:"list-group-item"},"Рассылки"),e("li",{class:"list-group-item"},"Bitrix, AmoCRM"),e("li",{class:"list-group-item"},"Работа с API"),e("li",{class:"list-group-item"},"Запись/бронирование"),e("li",{class:"list-group-item"},"Работа с Google таблицами"),e("li",{class:"list-group-item"},"Программируемая логика"),e("li",{class:"list-group-item"},"Высокая нагрузка"),e("li",{class:"list-group-item"},"Оплаты в боте")])])]),e("div",{class:"col"},[e("div",{class:"card mb-3",style:{border:"none","min-height":"290px"}},[e("div",{class:"card-header bg-white pt-4"},[e("h4",{class:"text-center"},"Базовый")]),e("div",{class:"card-body d-flex flex-column justify-content-between"},[e("p",null,[e("i",{class:"fa-solid fa-check mr-2"}),c(" Многоуровневые автоворонки")]),e("p",null,[e("i",{class:"fa-solid fa-check mr-2"}),c(" Первый месяц бесплатно")]),e("h2",{class:"gray"},[c("1099 "),e("small",null,"₽ / мес")]),e("button",{"data-bs-toggle":"modal","data-bs-target":"#feedbackModal",class:"btn btn-outline-primary w-100"},"Попробовать ")])]),e("div",{class:"content"},[e("h5",{class:"text-primary text-center"},"Для старта"),e("ul",{class:"list-group list-group-flush"},[e("li",{class:"have list-group-item text-center",style:{border:"none"}},[e("i",{class:"fa-solid fa-check mr-2 text-success"})]),e("li",{class:"have list-group-item text-center",style:{border:"none"}},[e("i",{class:"fa-solid fa-check mr-2 text-success"})]),e("li",{class:"have list-group-item text-center",style:{border:"none"}},[e("i",{class:"fa-solid fa-check mr-2 text-success"})]),e("li",{class:"have list-group-item text-center",style:{border:"none"}},[e("i",{class:"fa-solid fa-check mr-2 text-success"})]),e("li",{class:"have list-group-item text-center",style:{border:"none"}},[e("i",{class:"fa-solid fa-check mr-2 text-success"})]),e("li",{class:"have list-group-item text-center",style:{border:"none"}},[e("i",{class:"fa-solid fa-check mr-2 text-success"})]),e("li",{class:"have list-group-item text-center",style:{border:"none"}},[e("i",{class:"fa-solid fa-check mr-2 text-success"})]),e("li",{class:"have list-group-item text-center",style:{border:"none"}},[e("i",{class:"fa-solid fa-check mr-2 text-success"})]),e("li",{class:"have list-group-item text-center",style:{border:"none"}},[e("i",{class:"fa-solid fa-check mr-2 text-success"})]),e("li",{class:"have list-group-item text-center",style:{border:"none"}},[e("i",{class:"fa-solid fa-check mr-2 text-success"})]),e("li",{class:"have list-group-item text-center",style:{border:"none"}},[e("i",{class:"fa-solid fa-check mr-2 text-success"})]),e("li",{class:"have list-group-item text-center",style:{border:"none"}},[e("i",{class:"fa-solid fa-check mr-2 text-success"})]),e("li",{class:"have list-group-item text-center",style:{border:"none"}},[e("i",{class:"fa-solid fa-check mr-2 text-success"})]),e("li",{class:"have list-group-item text-center",style:{border:"none"}},[e("i",{class:"fa-solid fa-check mr-2 text-success"})]),e("li",{class:"have list-group-item text-center",style:{border:"none"}},[e("i",{class:"fa-solid fa-xmark mr-2 text-danger"})]),e("li",{class:"have list-group-item text-center",style:{border:"none"}},[e("i",{class:"fa-solid fa-xmark mr-2 text-danger"})]),e("li",{class:"have list-group-item text-center",style:{border:"none"}},[e("i",{class:"fa-solid fa-xmark mr-2 text-danger"})]),e("li",{class:"have list-group-item text-center",style:{border:"none"}},[e("i",{class:"fa-solid fa-xmark mr-2 text-danger"})])])])]),e("div",{class:"col"},[e("div",{class:"card mb-3",style:{border:"none","min-height":"290px"}},[e("div",{class:"card-header bg-white pt-4"},[e("h4",{class:"text-center"},"Стандартный")]),e("div",{class:"card-body d-flex flex-column justify-content-between"},[e("p",null,[e("i",{class:"fa-solid fa-check mr-2"}),c(" Автоворонки и рассылки")]),e("p",null,[e("i",{class:"fa-solid fa-check mr-2"}),c(" Первый месяц бесплатно")]),e("h2",{class:"gray"},[c("1099 "),e("small",null,"₽ / мес")]),e("button",{"data-bs-toggle":"modal","data-bs-target":"#feedbackModal",class:"btn btn-outline-primary w-100"},"Попробовать ")])]),e("div",{class:"content"},[e("h5",{class:"text-primary text-center"},"Для малого бизнеса"),e("ul",{class:"list-group list-group-flush"},[e("li",{class:"have list-group-item text-center",style:{border:"none"}},[e("i",{class:"fa-solid fa-check mr-2 text-success"})]),e("li",{class:"have list-group-item text-center",style:{border:"none"}},[e("i",{class:"fa-solid fa-check mr-2 text-success"})]),e("li",{class:"have list-group-item text-center",style:{border:"none"}},[e("i",{class:"fa-solid fa-check mr-2 text-success"})]),e("li",{class:"have list-group-item text-center",style:{border:"none"}},[e("i",{class:"fa-solid fa-check mr-2 text-success"})]),e("li",{class:"have list-group-item text-center",style:{border:"none"}},[e("i",{class:"fa-solid fa-check mr-2 text-success"})]),e("li",{class:"have list-group-item text-center",style:{border:"none"}},[e("i",{class:"fa-solid fa-check mr-2 text-success"})]),e("li",{class:"have list-group-item text-center",style:{border:"none"}},[e("i",{class:"fa-solid fa-check mr-2 text-success"})]),e("li",{class:"have list-group-item text-center",style:{border:"none"}},[e("i",{class:"fa-solid fa-check mr-2 text-success"})]),e("li",{class:"have list-group-item text-center",style:{border:"none"}},[e("i",{class:"fa-solid fa-check mr-2 text-success"})]),e("li",{class:"have list-group-item text-center",style:{border:"none"}},[e("i",{class:"fa-solid fa-check mr-2 text-success"})]),e("li",{class:"have list-group-item text-center",style:{border:"none"}},[e("i",{class:"fa-solid fa-check mr-2 text-success"})]),e("li",{class:"have list-group-item text-center",style:{border:"none"}},[e("i",{class:"fa-solid fa-check mr-2 text-success"})]),e("li",{class:"have list-group-item text-center",style:{border:"none"}},[e("i",{class:"fa-solid fa-check mr-2 text-success"})]),e("li",{class:"have list-group-item text-center",style:{border:"none"}},[e("i",{class:"fa-solid fa-check mr-2 text-success"})]),e("li",{class:"have list-group-item text-center",style:{border:"none"}},[e("i",{class:"fa-solid fa-xmark mr-2 text-danger"})]),e("li",{class:"have list-group-item text-center",style:{border:"none"}},[e("i",{class:"fa-solid fa-xmark mr-2 text-danger"})]),e("li",{class:"have list-group-item text-center",style:{border:"none"}},[e("i",{class:"fa-solid fa-xmark mr-2 text-danger"})]),e("li",{class:"have list-group-item text-center",style:{border:"none"}},[e("i",{class:"fa-solid fa-xmark mr-2 text-danger"})])])])]),e("div",{class:"col"},[e("div",{class:"card mb-3",style:{border:"none","min-height":"290px"}},[e("div",{class:"card-header bg-white pt-4"},[e("h4",{class:"text-center"},"Премиум")]),e("div",{class:"card-body d-flex flex-column justify-content-between"},[e("p",null,[e("i",{class:"fa-solid fa-check mr-2"}),c(" Полная автоматизация")]),e("p",null,[e("i",{class:"fa-solid fa-check mr-2"}),c(" Первый месяц бесплатно")]),e("h2",{class:"gray"},[c("1099 "),e("small",null,"₽ / мес")]),e("button",{"data-bs-toggle":"modal","data-bs-target":"#feedbackModal",class:"btn btn-outline-primary w-100"},"Попробовать ")])]),e("div",{class:"content"},[e("h5",{class:"text-primary text-center"},"Для компаний"),e("ul",{class:"list-group list-group-flush"},[e("li",{class:"have list-group-item text-center",style:{border:"none"}},[e("i",{class:"fa-solid fa-check mr-2 text-success"})]),e("li",{class:"have list-group-item text-center",style:{border:"none"}},[e("i",{class:"fa-solid fa-check mr-2 text-success"})]),e("li",{class:"have list-group-item text-center",style:{border:"none"}},[e("i",{class:"fa-solid fa-check mr-2 text-success"})]),e("li",{class:"have list-group-item text-center",style:{border:"none"}},[e("i",{class:"fa-solid fa-check mr-2 text-success"})]),e("li",{class:"have list-group-item text-center",style:{border:"none"}},[e("i",{class:"fa-solid fa-check mr-2 text-success"})]),e("li",{class:"have list-group-item text-center",style:{border:"none"}},[e("i",{class:"fa-solid fa-check mr-2 text-success"})]),e("li",{class:"have list-group-item text-center",style:{border:"none"}},[e("i",{class:"fa-solid fa-check mr-2 text-success"})]),e("li",{class:"have list-group-item text-center",style:{border:"none"}},[e("i",{class:"fa-solid fa-check mr-2 text-success"})]),e("li",{class:"have list-group-item text-center",style:{border:"none"}},[e("i",{class:"fa-solid fa-check mr-2 text-success"})]),e("li",{class:"have list-group-item text-center",style:{border:"none"}},[e("i",{class:"fa-solid fa-check mr-2 text-success"})]),e("li",{class:"have list-group-item text-center",style:{border:"none"}},[e("i",{class:"fa-solid fa-check mr-2 text-success"})]),e("li",{class:"have list-group-item text-center",style:{border:"none"}},[e("i",{class:"fa-solid fa-check mr-2 text-success"})]),e("li",{class:"have list-group-item text-center",style:{border:"none"}},[e("i",{class:"fa-solid fa-check mr-2 text-success"})]),e("li",{class:"have list-group-item text-center",style:{border:"none"}},[e("i",{class:"fa-solid fa-check mr-2 text-success"})]),e("li",{class:"have list-group-item text-center",style:{border:"none"}},[e("i",{class:"fa-solid fa-xmark mr-2 text-danger"})]),e("li",{class:"have list-group-item text-center",style:{border:"none"}},[e("i",{class:"fa-solid fa-xmark mr-2 text-danger"})]),e("li",{class:"have list-group-item text-center",style:{border:"none"}},[e("i",{class:"fa-solid fa-xmark mr-2 text-danger"})]),e("li",{class:"have list-group-item text-center",style:{border:"none"}},[e("i",{class:"fa-solid fa-xmark mr-2 text-danger"})])])])])])])],-1),xt=e("section",{class:"bg-gradient-primary-to-secondary",id:"download"},[e("div",{class:"container px-5"},[e("h2",{class:"text-center text-white font-alt mb-4"},"Get the app now!"),e("div",{class:"d-flex flex-column flex-lg-row align-items-center justify-content-center"},[e("a",{class:"me-lg-3 mb-4 mb-lg-0",href:"#!"},[e("img",{class:"app-badge",src:"/landing/assets/img/google-play-badge.svg",alt:"..."})]),e("a",{href:"#!"},[e("img",{class:"app-badge",src:"/landing/assets/img/app-store-badge.svg",alt:"..."})])])])],-1),vt=e("footer",{class:"bg-black text-center py-5"},[e("div",{class:"container px-5"},[e("div",{class:"text-white-50 small"},[e("div",{class:"mb-2"},"© Your Website 2023. All Rights Reserved."),e("a",{href:"#!"},"Privacy"),e("span",{class:"mx-1"},"·"),e("a",{href:"#!"},"Terms"),e("span",{class:"mx-1"},"·"),e("a",{href:"#!"},"FAQ")])])],-1),yt={class:"modal fade",id:"feedbackModal",tabindex:"-1","aria-labelledby":"feedbackModalLabel","aria-hidden":"true"},_t={class:"modal-dialog modal-dialog-centered"},kt={class:"modal-content"},wt=e("div",{class:"modal-header bg-gradient-primary-to-secondary p-4"},[e("h5",{class:"modal-title font-alt text-white",id:"feedbackModalLabel"},"Заказать обратную связь"),e("button",{class:"btn-close btn-close-white",type:"button","data-bs-dismiss":"modal","aria-label":"Close"})],-1),$t={class:"modal-body border-0 p-4"},Ct={id:"contactForm","data-sb-form-api-token":"API_TOKEN"},qt={class:"form-floating mb-3"},Mt=e("label",{for:"name"},"Ваше Ф.И.О.",-1),Ft=e("div",{class:"invalid-feedback","data-sb-feedback":"name:required"},"Является обязательным ",-1),jt={class:"form-floating mb-3"},Et=e("label",{for:"email"},"Ваша почта",-1),Tt=e("div",{class:"invalid-feedback","data-sb-feedback":"email:required"},"An email is required. ",-1),Bt=e("div",{class:"invalid-feedback","data-sb-feedback":"email:email"},"Email is not valid. ",-1),St={class:"form-floating mb-3"},Lt=e("label",{for:"phone"},"Номер телефона",-1),Vt=e("div",{class:"invalid-feedback","data-sb-feedback":"phone:required"},"A phone number is required. ",-1),It={class:"form-floating mb-3"},At=e("label",{for:"phone"},"Когда вам удобно?",-1),Dt=e("div",{class:"invalid-feedback","data-sb-feedback":"phone:required"},"A phone number is required. ",-1),Ht={class:"form-floating mb-3"},Nt=e("label",{for:"message"},"Сообщение менеджеру",-1),Pt=e("div",{class:"invalid-feedback","data-sb-feedback":"message:required"},"A message is required. ",-1),Ut=e("div",{class:"d-none",id:"submitSuccessMessage"},[e("div",{class:"text-center mb-3"},[e("div",{class:"fw-bolder"},"Form submission successful!"),c(" To activate this form, sign up at "),e("br"),e("a",{href:"https://startbootstrap.com/solution/contact-forms"},"https://startbootstrap.com/solution/contact-forms")])],-1),Rt=e("div",{class:"d-none",id:"submitErrorMessage"},[e("div",{class:"text-center text-danger mb-3"},"Error sending message!")],-1),Gt=e("div",{class:"d-grid"},[e("button",{class:"btn btn-primary rounded-pill btn-lg disabled",id:"submitButton",type:"submit"},"Отправить заявку ")],-1),Ot={data(){let o=new Date;return{need_start:!1,feedbackForm:{name:null,email:null,phone:null,time:o.getHours()+":"+o.getMinutes(),message:"Добрый день! Заинтересовала данная система, хочу запросить перезвон менеджера для обсуждения деталей!"}}},computed:{...M(["getCurrentCompany"])},mounted(){},methods:{}},Jt=Object.assign(Ot,{__name:"LandingPage",setup(o){return(t,n)=>{const m=$("mask");return a(),C(R,null,{default:w(()=>[He,Ne,Pe,Ue,e("section",Re,[e("div",Ge,[e("div",Oe,[e("div",ze,[_(q,{domain:"isushibot"})])])])]),c("- "),t.need_start?r("",!0):(a(),i("section",Ke,[e("div",We,[e("div",Ye,[Je,e("a",{class:"btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder",onClick:n[0]||(n[0]=l=>t.need_start=!0)},"Я создам!"),Xe])])])),t.need_start?(a(),i("section",Qe,[e("div",Ze,[_(A,{start:0}),e("div",et,[e("button",{title:"Перезапустить",class:"btn btn-link",onClick:n[1]||(n[1]=l=>t.need_start=!1)},st)])])])):r("",!0),e("section",at,[e("div",lt,[e("div",it,[ot,e("div",nt,[e("div",rt,[ct,dt,mt,e("div",ut,[e("div",ht,[e("div",pt,[_(q,{domain:"isushibot"})])])])])])])])]),ft,gt,bt,xt,vt,e("div",yt,[e("div",_t,[e("div",kt,[wt,e("div",$t,[e("form",Ct,[e("div",qt,[u(e("input",{class:"form-control","onUpdate:modelValue":n[2]||(n[2]=l=>t.feedbackForm.name=l),id:"name",type:"text",placeholder:"Enter your name...","data-sb-validations":"required"},null,512),[[f,t.feedbackForm.name]]),Mt,Ft]),e("div",jt,[u(e("input",{class:"form-control","onUpdate:modelValue":n[3]||(n[3]=l=>t.feedbackForm.email=l),id:"email",type:"email",placeholder:"name@example.com"},null,512),[[f,t.feedbackForm.email]]),Et,Tt,Bt]),e("div",St,[u(e("input",{class:"form-control","onUpdate:modelValue":n[4]||(n[4]=l=>t.feedbackForm.phone=l),id:"phone",type:"text",placeholder:"+7(123)456-78-90","data-sb-validations":"required"},null,512),[[m,"+7(###)###-##-##"],[f,t.feedbackForm.phone]]),Lt,Vt]),e("div",It,[u(e("input",{class:"form-control",id:"time","onUpdate:modelValue":n[5]||(n[5]=l=>t.feedbackForm.time=l),type:"time",placeholder:"12:00"},null,512),[[f,t.feedbackForm.time]]),At,Dt]),e("div",Ht,[u(e("textarea",{"onUpdate:modelValue":n[6]||(n[6]=l=>t.feedbackForm.message=l),class:"form-control",id:"message",type:"text",placeholder:"Enter your message here...",style:{height:"10rem"},"data-sb-validations":"required"},null,512),[[f,t.feedbackForm.message]]),Nt,Pt]),Ut,Rt,Gt])])])])])]),_:1})}}});export{Jt as default};
