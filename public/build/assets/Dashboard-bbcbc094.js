/* empty css                                                    */import{_}from"./CompanyList-7263da84.js";import{a as h,_ as p,I as k,b as $,c as v,d as g}from"./BotList-102cfbef.js";import{o as a,c as n,f as i,d as e,a as s,e as c,m as u,b as d,l as f,u as B,t as w,n as m,F as L,B as T,X as E}from"./app-1391603c.js";import{_ as y,L as C}from"./CompanyForm-85c5e232.js";import"./Pagination-58951aad.js";import"./v4-a960c1f4.js";import"./SlugForm-f185bea7.js";const j={class:"row"},M={key:0,class:"card mb-3 p-0"},O=s("div",{class:"card-header"},[s("h3",null,"Шаг 1: найдите или создайте компанию")],-1),D={key:0,class:"card-body"},G=s("h5",{class:"mt-2 mb-2"},"Найдите существующую компанию",-1),I=s("h5",{class:"mb-2"},"или создайте новую компанию",-1),N={key:1,class:"card-body"},V=s("div",{class:"alert alert-success",role:"alert"}," Отлично! Шаг создания компании пройден! Далее следует приступить к следующим шагам! ",-1),W=[V],A={key:1,class:"card mb-3 p-0"},F=s("div",{class:"card-header"},[s("h3",null,"Шаг 2: Добавьте локации заведений (не объязательно)")],-1),S={key:0,class:"card-body"},z={class:"alert alert-success",role:"alert"},P={key:1,class:"card-body"},X=s("div",{class:"alert alert-warning",role:"alert"}," Внимание! Вы еще не справились с прошлыми шагами! ",-1),q=[X],H={key:2,class:"card-body"},J=s("div",{class:"alert alert-success",role:"alert"}," Отлично! Вы создалии локации в завдении! Приступаем к следующим шагам! ",-1),K=[J],Q={key:2,class:"card mb-3 p-0"},R=s("div",{class:"card-header"},[s("h3",null,"Шаг 3: Добавьте бота ")],-1),U={key:0,class:"card-body"},Y={class:"alert alert-success",role:"alert"},Z=s("h5",{class:"mt-2 mb-2"},"Найдите существующего бота",-1),x=s("h5",{class:"mb-2"},"или создайте нового бота",-1),tt={key:1,class:"card-body"},st=s("div",{class:"alert alert-warning",role:"alert"}," Внимание! Вы еще не справились с прошлыми шагами! ",-1),ot=[st],at={key:2,class:"card-body"},et=s("div",{class:"alert alert-success",role:"alert"}," Отлично! Бот создан! ",-1),lt=[et],nt={key:3,class:"card mb-3 p-0"},it=s("div",{class:"card-header"},[s("h3",null,"Шаг 4: Добавьте в бота меню")],-1),rt={key:0,class:"card-body"},dt={class:"alert alert-success",role:"alert"},ct={key:1,class:"card-body"},ut=s("div",{class:"alert alert-warning",role:"alert"}," Внимание! Вы еще не справились с прошлыми шагами! ",-1),bt=[ut],ht={key:2,class:"card-body"},mt={class:"alert alert-success",role:"alert"},pt={key:4,class:"card mb-3 p-0"},_t=s("div",{class:"card-header"},[s("h3",null,"Шаг 5: Обновите зависимости веб-хуков")],-1),kt={class:"card-body"},yt={class:"row"},Ct=s("div",{class:"alert alert-warning",role:"alert"},[s("strong",null,"Важно!"),c(" новые боты начнут работать только после того, как вы обновите зависимости! ")],-1),$t={class:"col-12 mb-3"},vt={class:"col-12"},gt={data(){return{step:0,load:!1,company:null,location:null,bot:null}},methods:{reloadWebhooks(){axios.get("/bot/register-webhooks").then(()=>{this.$notify({title:"Конструктор ботов",text:"Зависимости успешно обновлены!",type:"success"})})},reset(){this.step=0,this.company=null,this.bot=null},skip(){this.step++},companyListCallback(o){this.load=!0,this.company=o,this.$nextTick(()=>{this.load=!1})},companyCallback(o){this.step++,this.load=!0,this.$nextTick(()=>{this.load=!1}),document.documentElement.scrollTop=0},locationCallback(){this.step++,this.load=!1,document.documentElement.scrollTop=0},botListCallback(o){this.load=!0,this.bot=o,this.$nextTick(()=>{this.load=!1})},botCallback(o){this.step++,this.bot=o,document.documentElement.scrollTop=0},imageMenuCallback(o){this.step++,document.documentElement.scrollTop=0}}},ft=Object.assign(gt,{__name:"InitialStepper",setup(o){return(t,l)=>(a(),n("div",j,[t.step===0?(a(),n("div",M,[O,t.step===0?(a(),n("div",D,[G,t.load?e("",!0):(a(),i(_,{key:0,onCallback:t.companyListCallback},null,8,["onCallback"])),I,t.load?e("",!0):(a(),i(y,{key:1,company:t.company,onCallback:t.companyCallback},null,8,["company","onCallback"]))])):(a(),n("div",N,W))])):e("",!0),t.step===1?(a(),n("div",A,[F,t.step===1?(a(),n("div",S,[s("div",z,[c(" Если нет необходимости в локациях, вы можете пропустить данный шаг "),s("button",{type:"button",class:"btn btn-primary",onClick:l[0]||(l[0]=(...r)=>t.skip&&t.skip(...r))},"Пропустить "),c(" или же вы можете вернуться на прошлый шаг "),s("button",{type:"button",class:"btn btn-primary",onClick:l[1]||(l[1]=(...r)=>t.reset&&t.reset(...r))},"Начать заново ")]),t.company?(a(),i(C,{key:0,"company-id":t.company.id,onCallback:t.locationCallback},null,8,["company-id","onCallback"])):e("",!0)])):e("",!0),t.step<1?(a(),n("div",P,q)):e("",!0),t.step>1?(a(),n("div",H,K)):e("",!0)])):e("",!0),t.step===2?(a(),n("div",Q,[R,t.step===2?(a(),n("div",U,[s("div",Y,[c(" При необходимости вы можете начать по новой "),s("button",{type:"button",class:"btn btn-primary",onClick:l[2]||(l[2]=(...r)=>t.reset&&t.reset(...r))},"Начать заново ")]),Z,t.company?(a(),i(h,{key:0,"company-id":t.company.id,onCallback:t.botListCallback},null,8,["company-id","onCallback"])):e("",!0),x,t.bot&&t.company&&!t.load?(a(),i(p,{key:1,bot:t.bot,"company-id":t.company.id,onCallback:t.botCallback},null,8,["bot","company-id","onCallback"])):t.bot==null&&t.company&&!t.load?(a(),i(p,{key:2,"company-id":t.company.id,onCallback:t.botCallback},null,8,["company-id","onCallback"])):e("",!0)])):e("",!0),t.step<2?(a(),n("div",tt,ot)):e("",!0),t.step>2?(a(),n("div",at,lt)):e("",!0)])):e("",!0),t.step===3?(a(),n("div",nt,[it,t.step===3?(a(),n("div",rt,[s("div",dt,[c(" При необходимости вы можете начать по новой "),s("button",{type:"button",class:"btn btn-primary",onClick:l[3]||(l[3]=(...r)=>t.reset&&t.reset(...r))},"Начать заново ")]),t.bot?(a(),i(k,{key:0,"bot-id":t.bot.id,onCallback:t.imageMenuCallback},null,8,["bot-id","onCallback"])):e("",!0)])):e("",!0),t.step<3?(a(),n("div",ct,bt)):e("",!0),t.step>3?(a(),n("div",ht,[s("div",mt,[c(" Отлично! Все шаги выполнены "),s("button",{type:"button",class:"btn btn-primary",onClick:l[4]||(l[4]=(...r)=>t.reset&&t.reset(...r))},"Начать заново ")])])):e("",!0)])):e("",!0),t.step===4?(a(),n("div",pt,[_t,s("div",kt,[s("div",yt,[Ct,s("div",$t,[s("a",{class:"btn btn-outline-success w-100",onClick:l[5]||(l[5]=(...r)=>t.reloadWebhooks&&t.reloadWebhooks(...r))},"Обновить зависимости")]),s("div",vt,[s("a",{onClick:l[6]||(l[6]=(...r)=>t.reset&&t.reset(...r)),class:"btn btn-outline-primary w-100"},"Начать заново")])])])])):e("",!0)]))}}),Bt={class:"row"},wt={class:"col-12"},Lt={class:"col-12"},Tt={data(){return{load:!1,bot:null}},computed:{...u(["getCurrentBot"])},mounted(){this.loadCurrentBot()},methods:{loadCurrentBot(o=null){this.$store.dispatch("updateCurrentBot",{bot:o}).then(()=>{this.bot=this.getCurrentBot})},botCallback(o){this.load=!0,this.bot=null,this.$nextTick(()=>{this.load=!1})},botListCallback(o){this.load=!0,this.loadCurrentBot(o),this.$nextTick(()=>{this.load=!1})}}},Et=Object.assign(Tt,{__name:"BotEditor",setup(o){return(t,l)=>(a(),n("div",Bt,[s("div",wt,[t.load?e("",!0):(a(),i(h,{key:0,editor:!0,onCallback:t.botListCallback},null,8,["onCallback"]))]),s("div",Lt,[t.bot&&!t.load?(a(),i(p,{key:0,bot:t.bot,editor:!0,onCallback:t.botCallback},null,8,["bot","onCallback"])):e("",!0)])]))}}),jt={class:"row pb-2 pt-2"},Mt={class:"col-12"},Ot={key:0,class:"col-12"},Dt={key:1},Gt={data(){return{bot:null,page:null,load:!1}},mounted(){this.loadCurrentBot()},computed:{...u(["getCurrentBot"])},methods:{loadCurrentBot(o=null){this.$store.dispatch("updateCurrentBot",{bot:o}).then(()=>{this.bot=this.getCurrentBot})},botListCallback(o){this.load=!0,this.bot=o,this.$nextTick(()=>{this.load=!1})},pageListCallback(o){this.load=!0,this.page=o,this.$nextTick(()=>{this.load=!1})},pageCallback(o){this.load=!0,this.$nextTick(()=>{this.load=!1})}}},It=Object.assign(Gt,{__name:"BotPageConstructor",setup(o){return(t,l)=>(a(),n("div",jt,[s("div",Mt,[t.load?e("",!0):(a(),i(h,{key:0,editor:!0,onCallback:t.botListCallback},null,8,["onCallback"]))]),t.bot?(a(),n("div",Ot,[!t.load&&t.bot?(a(),i($,{key:0,"bot-id":t.bot.id,editor:!0,onCallback:t.pageListCallback},null,8,["bot-id","onCallback"])):e("",!0)])):e("",!0),t.bot&&!t.load?(a(),n("div",Dt,[d(v,{page:t.page,bot:t.bot,onCallback:t.pageCallback},null,8,["page","bot","onCallback"])])):e("",!0)]))}}),Nt={class:"row"},Vt={class:"col-12"},Wt={class:"col-12"},At={data(){return{load:!1,bot:null}},mounted(){this.loadCurrentBot()},computed:{...u(["getCurrentBot"])},methods:{loadCurrentBot(o=null){this.$store.dispatch("updateCurrentBot",{bot:o}).then(()=>{this.bot=this.getCurrentBot})},imageMenuCallback(o){this.load=!0,this.$nextTick(()=>{this.load=!1})},botListCallback(o){this.load=!0,this.bot=o,this.$nextTick(()=>{this.load=!1})}}},Ft=Object.assign(At,{__name:"ImageMenuEditor",setup(o){return(t,l)=>(a(),n("div",Nt,[s("div",Vt,[t.load?e("",!0):(a(),i(h,{key:0,editor:!0,onCallback:t.botListCallback},null,8,["onCallback"]))]),s("div",Wt,[t.bot&&!t.load?(a(),i(k,{key:0,bot:t.bot,onCallback:t.imageMenuCallback},null,8,["bot","onCallback"])):e("",!0)])]))}}),St={class:"row"},zt={class:"col-12"},Pt={class:"col-12"},Xt={data(){return{load:!1,company:null}},computed:{...u(["getCurrentCompany"])},mounted(){this.loadCurrentCompany()},methods:{loadCurrentCompany(o=null){this.$store.dispatch("updateCurrentCompany",{company:o}).then(()=>{this.company=this.getCurrentCompany,console.log("company",this.company)})},companyListCallback(o){this.load=!0,this.loadCurrentCompany(o),this.$nextTick(()=>{this.load=!1})},companyCallback(o){this.load=!0,this.$nextTick(()=>{this.load=!1}),document.documentElement.scrollTop=0}}},qt=Object.assign(Xt,{__name:"CompanyEditor",setup(o){return(t,l)=>(a(),n("div",St,[s("div",zt,[t.load?e("",!0):(a(),i(_,{key:0,onCallback:t.companyListCallback},null,8,["onCallback"]))]),s("div",Pt,[!t.load&&t.company?(a(),i(y,{key:0,company:t.company,onCallback:t.companyCallback},null,8,["company","onCallback"])):e("",!0)])]))}}),Ht={class:"row"},Jt={class:"col-12"},Kt={class:"col-12"},Qt={data(){return{load:!1,company:null}},computed:{...u(["getCurrentCompany"])},mounted(){this.loadCurrentCompany()},methods:{loadCurrentCompany(o=null){this.$store.dispatch("updateCurrentCompany",{company:o}).then(()=>{this.company=this.getCurrentCompany})},companyListCallback(o){this.load=!0,this.company=o,this.$nextTick(()=>{this.load=!1})},locationCallback(){this.step++,this.load=!1,document.documentElement.scrollTop=0}}},Rt=Object.assign(Qt,{__name:"LocationEditor",setup(o){return(t,l)=>(a(),n("div",Ht,[s("div",Jt,[t.load?e("",!0):(a(),i(_,{key:0,onCallback:t.companyListCallback},null,8,["onCallback"]))]),s("div",Kt,[t.company&&!t.load?(a(),i(C,{key:0,company:t.company,onCallback:t.locationCallback},null,8,["company","onCallback"])):e("",!0)])]))}});({...u(["getErrors"])});const Ut={class:"row"},Yt={class:"col-12"},Zt={key:0,class:"col-12"},xt=s("div",{class:"col-12"},null,-1),ts={data(){return{load:!1,bot:null}},mounted(){this.loadCurrentBot()},computed:{...u(["getCurrentBot"])},methods:{loadCurrentBot(o=null){this.$store.dispatch("updateCurrentBot",{bot:o}).then(()=>{this.bot=this.getCurrentBot})},dialogGroupListCallback(o){this.load=!0,this.company=o,this.$nextTick(()=>{this.load=!1})},botListCallback(o){this.load=!0,this.bot=o,this.$nextTick(()=>{this.load=!1})}}},ss=Object.assign(ts,{__name:"BotDialogGroupEditor",setup(o){return(t,l)=>(a(),n("div",Ut,[s("div",Yt,[t.load?e("",!0):(a(),i(h,{key:0,editor:!0,onCallback:t.botListCallback},null,8,["onCallback"]))]),t.bot?(a(),n("div",Zt,[t.load?e("",!0):(a(),i(g,{key:0,bot:t.bot,onCallback:t.dialogGroupListCallback},null,8,["bot","onCallback"]))])):e("",!0),xt]))}}),os={class:"row"},as={class:"col-12"},es=s("h5",{class:"mt-2 mb-2"},"Найдите существующую компанию",-1),ls={data(){return{company:null,load:!1}},computed:{...u(["getCurrentCompany"])},mounted(){this.loadCurrentCompany()},methods:{loadCurrentCompany(o=null){this.$store.dispatch("updateCurrentCompany",{company:o}).then(()=>{this.company=this.getCurrentCompany})},botCallback(o){this.load=!0,this.bot=o,this.$nextTick(()=>{this.load=!1})},companyListCallback(o){this.load=!0,this.loadCurrentCompany(o),this.$nextTick(()=>{this.load=!1})}}},ns=Object.assign(ls,{__name:"BotCreator",setup(o){return(t,l)=>(a(),n("div",os,[s("div",as,[es,t.load?e("",!0):(a(),i(_,{key:0,onCallback:t.companyListCallback},null,8,["onCallback"])),t.company&&!t.load?(a(),i(p,{key:1,company:t.company,onCallback:t.botCallback},null,8,["company","onCallback"])):e("",!0)])]))}});const is=s("title",null,"Административная панель",-1),rs=s("meta",{name:"description",content:"Административная панель<"},null,-1),ds={class:"navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow"},cs=s("a",{class:"navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6",href:"#"},"CashMan",-1),us=s("button",{class:"navbar-toggler position-absolute d-md-none collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#sidebarMenu","aria-controls":"sidebarMenu","aria-expanded":"false","aria-label":"Toggle navigation"},[s("span",{class:"navbar-toggler-icon"})],-1),bs={key:0,class:"navbar-nav"},hs={class:"nav-item text-nowrap"},ms={class:"bot-label d-flex justify-between align-items-center"},ps={class:"p-2 text-white"},_s=["href"],ks=s("i",{class:"fa-solid fa-xmark text-white"},null,-1),ys=[ks],Cs=s("div",{class:"navbar-nav d-none d-md-block"},[s("div",{class:"nav-item text-nowrap"},[s("a",{class:"nav-link px-3",href:"/logout"},"Выход")])],-1),$s={class:"container-fluid"},vs={class:"row"},gs={id:"sidebarMenu",class:"col-md-3 col-lg-2 d-md-block bg-body-tertiary sidebar",style:{}},fs={class:"position-sticky pt-3 sidebar-sticky"},Bs={class:"nav flex-column"},ws={class:"nav-item"},Ls=s("i",{class:"fa-regular fa-building"},null,-1),Ts={class:"nav-item"},Es=s("i",{class:"fa-regular fa-building"},null,-1),js={class:"nav-item"},Ms=s("i",{class:"fa-brands fa-android"},null,-1),Os={class:"nav-item"},Ds=s("i",{class:"fa-solid fa-robot"},null,-1),Gs={class:"nav-item p-2"},Is=["disabled"],Ns={key:0,class:"col-md-9 ms-sm-auto col-lg-10 px-md-4"},Vs={class:"pt-3 pb-2 mb-3 border-bottom"},Ws=s("h1",{class:"mb-3 mt-3"},"Создание нового клиента",-1),As={key:1,class:"col-md-9 ms-sm-auto col-lg-10 px-md-4"},Fs={class:"pt-3 pb-2 mb-3 border-bottom"},Ss=s("h1",{class:"mb-3 mt-3"},"Редактор компаний",-1),zs=s("div",{class:"alert alert-success mb-2",role:"alert"}," Выберите компанию из списка! ",-1),Ps={key:2,class:"col-md-9 ms-sm-auto col-lg-10 px-md-4"},Xs={class:"pt-3 pb-2 mb-3 border-bottom"},qs=s("h1",{class:"mb-3 mt-3"},"Редактор локаций",-1),Hs=s("div",{class:"alert alert-success mb-2",role:"alert"}," Выберите компанию из списка! ",-1),Js={key:3,class:"col-md-9 ms-sm-auto col-lg-10 px-md-4"},Ks={class:"pt-3 pb-2 mb-3 border-bottom"},Qs=s("h1",{class:"mb-3 mt-3"},"Редактор ботов",-1),Rs=s("div",{class:"alert alert-success mb-2",role:"alert"}," Выберите бота из списка! ",-1),Us={key:4,class:"col-md-9 ms-sm-auto col-lg-10 px-md-4"},Ys={class:"pt-3 pb-2 mb-3 border-bottom"},Zs=s("h1",{class:"mb-3 mt-3"},"Создание бота",-1),xs=s("div",{class:"alert alert-success mb-2",role:"alert"}," Выберите компанию из списка! ",-1),to={key:5,class:"col-md-9 ms-sm-auto col-lg-10 px-md-4"},so={class:"pt-3 pb-2 mb-3 border-bottom"},oo=s("h1",{class:"mb-3 mt-3"},"Редактор меню",-1),ao=s("div",{class:"alert alert-success mb-2",role:"alert"}," Выберите бота из списка! ",-1),eo={key:6,class:"col-md-9 ms-sm-auto col-lg-10 px-md-4"},lo={class:"pt-3 pb-2 mb-3 border-bottom"},no=s("h1",{class:"mb-3 mt-3"},"Конструктор страниц",-1),io=s("div",{class:"alert alert-success mb-2",role:"alert"}," Выберите бота из списка! ",-1),ro={key:7,class:"col-md-9 ms-sm-auto col-lg-10 px-md-4"},co={class:"pt-3 pb-2 mb-3 border-bottom"},uo=s("h1",{class:"mb-3 mt-3"},"Конструктор диалогов",-1),bo=s("div",{class:"alert alert-success mb-2",role:"alert"}," Выберите бота из списка! ",-1),ho={data(){return{tab:0,load:!1,bot:null}},computed:{...u(["getErrors","getCurrentBot"])},watch:{getErrors:function(o,t){Object.keys(o).forEach(l=>{this.$notify({title:"Конструктор ботов",text:o[l],type:"warn"})})}},mounted(){this.loadCurrentBot(),window.addEventListener("store_current_bot-change-event",o=>{this.bot=this.getCurrentBot})},methods:{loadCurrentBot(o=null){this.$store.dispatch("updateCurrentBot",{bot:o}).then(()=>{this.bot=this.getCurrentBot})},resetBot(){this.$store.dispatch("resetCurrentBot").then(()=>{this.bot=null})},stopAllDialogs(){this.$store.dispatch("stopDialogs").then(o=>{this.$notify({title:"Конструктор ботов",text:"Все диалоги остановлены",type:"success"})}).catch(o=>{})},reloadWebhooks(){this.load=!0,this.$notify({title:"Конструктор ботов",text:"Процедура обновления зависимостей началась"}),axios.get("/bot/register-webhooks").then(()=>{this.load=!1,this.$notify({title:"Конструктор ботов",text:"Зависимости успешно обновлены!",type:"success"})}).catch(()=>{this.load=!1,this.$notify({title:"Конструктор ботов",text:"Неудалось обновить зависимости",type:"error"})})}}},go=Object.assign(ho,{__name:"Dashboard",setup(o){return(t,l)=>{const r=T("notifications");return a(),n(L,null,[d(B(E),null,{default:f(()=>[is,rs]),_:1}),d(r,{position:"top right"}),s("header",ds,[cs,us,t.bot?(a(),n("div",bs,[s("div",hs,[s("div",ms,[s("span",ps,[c("У вас выбран бот: "),s("a",{href:"https://t.me/"+(t.bot.bot_domain||"botfather"),target:"_blank"},w(t.bot.bot_domain||"Без имени"),9,_s)]),s("span",{onClick:l[0]||(l[0]=(...b)=>t.resetBot&&t.resetBot(...b)),class:"p-2 text-white"},ys)])])])):e("",!0),Cs]),s("div",$s,[s("div",vs,[s("nav",gs,[s("div",fs,[s("ul",Bs,[s("li",ws,[s("a",{class:m(["nav-link",{active:t.tab===1}]),href:"#company-editor","aria-current":"page",onClick:l[1]||(l[1]=b=>t.tab=1)},[Ls,c(" Создание компании ")],2)]),s("li",Ts,[s("a",{class:m(["nav-link",{active:t.tab===8}]),href:"#company-editor","aria-current":"page",onClick:l[2]||(l[2]=b=>t.tab=8)},[Es,c(" Создание редактирование компании ")],2)]),s("li",js,[s("a",{class:m(["nav-link",{active:t.tab===7}]),href:"#new-bot","aria-current":"page",onClick:l[3]||(l[3]=b=>t.tab=7)},[Ms,c(" Создание нового бота ")],2)]),s("li",Os,[s("a",{class:m(["nav-link",{active:t.tab===3}]),href:"#bot-editor","aria-current":"page",onClick:l[4]||(l[4]=b=>t.tab=3)},[Ds,c(" Редактирование ботов ")],2)]),s("li",Gs,[s("button",{type:"button",disabled:t.load,class:"nav-lin btn btn-outline-success w-100",onClick:l[5]||(l[5]=(...b)=>t.stopAllDialogs&&t.stopAllDialogs(...b))},"Остановить все диалоги",8,Is)])])])]),t.tab===0?(a(),n("main",Ns,[s("div",Vs,[Ws,d(ft)])])):e("",!0),t.tab===1?(a(),n("main",As,[s("div",Fs,[Ss,zs,d(qt)])])):e("",!0),t.tab===2?(a(),n("main",Ps,[s("div",Xs,[qs,Hs,d(Rt)])])):e("",!0),t.tab===3?(a(),n("main",Js,[s("div",Ks,[Qs,Rs,d(Et)])])):e("",!0),t.tab===7?(a(),n("main",Us,[s("div",Ys,[Zs,xs,d(ns)])])):e("",!0),t.tab===4?(a(),n("main",to,[s("div",so,[oo,ao,d(Ft)])])):e("",!0),t.tab===5?(a(),n("main",eo,[s("div",lo,[no,io,d(It)])])):e("",!0),t.tab===6?(a(),n("main",ro,[s("div",co,[uo,bo,d(ss)])])):e("",!0)])])],64)}}});export{go as default};
