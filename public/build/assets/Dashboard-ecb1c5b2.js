import{a as v,_ as f,L as w}from"./CompanyList-a7f29675.js";import{_ as y,a as C,b as T,c as E}from"./BotList-a36bbbfa.js";import{_ as F}from"./MailingTable-80068c49.js";import"./InlineInjectionsHelper.vue_vue_type_style_index_0_lang-fd7c9506.js";import"./BotForm-0bf2191f.js";import{G as b,L as j,q as e,t as n,v as s,P as O,y as _,H as p,J as $,D as u,A as a,F as B,C as I,K as r,B as h,R as D,O as P,u as U,x as k,a1 as V}from"./index.es-f98e90e3.js";import"./BotMediaList-30372b72.js";import"./TelegramChannelHelper-ed863637.js";import"./GlobalSlugList-4e2affc7.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";import"./Pagination-8d87cf85.js";import"./main-1ee4809f.js";import"./v4-4a60fe23.js";const G={data(){return{bot:null,menus:[],deletedMenus:[],menuForm:{title:null,description:null,image:null,info_link:null,bot_id:null}}},computed:{...b(["getCurrentBot"])},mounted(){this.loadCurrentBot().then(()=>{this.loadMenuByBotId()})},methods:{loadCurrentBot(o=null){return this.$store.dispatch("updateCurrentBot",{bot:o}).then(()=>{this.bot=this.getCurrentBot})},loadMenuByBotId(){this.$store.dispatch("loadMenuByBotId",{botId:this.bot.id}).then(o=>{this.menus=o}).catch(()=>{})},getPhoto(o){return{imageUrl:URL.createObjectURL(o)}},removePhoto(){this.menuForm.image=null},removeItem(o){this.menus[o].id&&this.deletedMenus.push(this.menus[o].id),this.menus.splice(o,1)},submitMenus(){this.menus.forEach(o=>{let t=new FormData;Object.keys(o).forEach(l=>{const d=o[l]||"";typeof d=="object"?t.append(l,JSON.stringify(d)):t.append(l,d)}),this.deletedMenus.length>0&&t.append("deleted_menus",JSON.stringify(this.deletedMenus)),typeof o.image!="string"&&(t.append("preview",o.image),t.delete("image")),this.$store.dispatch("createImageMenu",{menuForm:t}).then(l=>{this.$emit("callback",l.data),this.$notify("Меню успешно создано и сохранено")}).catch(l=>{})})},addImageMenu(){this.menuForm.bot_id=this.bot.id,this.menus.push(this.menuForm),this.$notify("Меню успешно добавлено в список"),this.menuForm={title:null,description:null,image:null,info_link:null,bot_id:null}},onChangePhotos(o){const t=o.target.files[0];this.menuForm.image=t}}},S={key:0,class:"card"},z={class:"card-body"},A={class:"row"},W={class:"col-md-8"},J={class:"row"},R={class:"col-12"},q={class:"mb-3"},H=s("label",{class:"form-label",id:"menu-address"},[u(" Заголовок меню "),s("span",{class:"badge rounded-pill text-bg-danger m-0"},"Нужно")],-1),K={class:"row"},X={class:"col-12"},Q={class:"mb-3"},Y={class:"form-label",id:"menu-description"},Z=s("span",{class:"badge rounded-pill text-bg-danger m-0"},"Нужно",-1),x={key:0,class:"text-gray-400 ml-3",style:{"font-size":"10px"}},tt={class:"row"},st={class:"col-12"},ot={class:"mb-3"},et=s("label",{class:"form-label",id:"menu-address"},[u("Ссылка на страницу в "),s("a",{target:"_blank",href:"https://telegra.ph"},"telegra.ph")],-1),at={class:"row"},lt={class:"col-12 mb-3"},nt=s("h5",null,"Картинка меню с позициями",-1),it={class:"photo-preview d-flex justify-content-start flex-wrap w-100"},rt={for:"menu-photos",style:{"margin-right":"10px"},class:"photo-loader ml-2"},dt=s("span",null,"+",-1),ct={key:0,class:"mb-2 img-preview",style:{"margin-right":"10px"}},ut={class:"remove"},ht=s("div",{class:"row"},[s("div",{class:"col-12"},[s("button",{class:"btn btn-outline-success w-100",type:"submit"},"Добавить меню ")])],-1),mt={class:"col-md-4"},bt={class:"row"},pt={class:"col-12 mt-3"},_t={class:"card"},yt={class:"card-header d-flex justify-content-between"},kt=["onClick"],Ct={class:"card-body"},vt={class:"w-100 d-flex"},gt={key:0,class:"mb-2 img-preview",style:{"margin-right":"10px"}},$t={key:0},ft={key:1},wt={key:1,class:"col-12 mt-3"},Bt=s("p",null,"На текущий момент у заведения нет ни 1 созданного меню",-1),Lt=[Bt],Mt={class:"row mt-3"},Tt={class:"col-12"},Et=["disabled"];function Ft(o,t,l,d,i,m){const g=j("lazy");return i.bot?(e(),n("div",S,[s("div",z,[s("div",A,[s("div",W,[s("form",{onSubmit:t[5]||(t[5]=O((...c)=>m.addImageMenu&&m.addImageMenu(...c),["prevent"]))},[s("h6",null,"Графическое Меню к боту #"+_(i.bot.id||"Не установлен"),1),s("div",J,[s("div",R,[s("div",q,[H,p(s("input",{type:"text",class:"form-control",placeholder:"Название меню","aria-label":"Название меню",maxlength:"255","onUpdate:modelValue":t[0]||(t[0]=c=>i.menuForm.title=c),"aria-describedby":"menu-address",required:""},null,512),[[$,i.menuForm.title]])])])]),s("div",K,[s("div",X,[s("div",Q,[s("label",Y,[u(" Описание меню "),Z,i.menuForm.description?(e(),n("small",x," Длина текста "+_(i.menuForm.description.length),1)):a("",!0)]),p(s("textarea",{type:"text",class:"form-control",placeholder:"Описание меню","aria-label":"Описание меню",maxlength:"255","onUpdate:modelValue":t[1]||(t[1]=c=>i.menuForm.description=c),"aria-describedby":"menu-description"},`
                    `,512),[[$,i.menuForm.description]])])])]),s("div",tt,[s("div",st,[s("div",ot,[et,u(" с вашим меню "),p(s("input",{type:"text",class:"form-control",placeholder:"Информационная ссылка","aria-label":"Информационная ссылка",maxlength:"255","onUpdate:modelValue":t[2]||(t[2]=c=>i.menuForm.info_link=c),"aria-describedby":"menu-info-link"},null,512),[[$,i.menuForm.info_link]])])])]),s("div",at,[s("div",lt,[nt,s("div",it,[s("label",rt,[dt,s("input",{type:"file",id:"menu-photos",accept:"image/*",onChange:t[3]||(t[3]=(...c)=>m.onChangePhotos&&m.onChangePhotos(...c)),style:{display:"none"}},null,32)]),i.menuForm.image?(e(),n("div",ct,[p(s("img",null,null,512),[[g,m.getPhoto(i.menuForm.image).imageUrl]]),s("div",ut,[s("a",{onClick:t[4]||(t[4]=c=>m.removePhoto())},"Удалить")])])):a("",!0)])])]),ht],32)]),s("div",mt,[s("div",bt,[i.menus.length>0?(e(!0),n(B,{key:0},I(i.menus,(c,M)=>(e(),n("div",pt,[s("div",_t,[s("div",yt,[s("h6",null,[u("Название "),s("strong",null,_(c.title||"Не указано"),1)]),s("a",{class:"cursor-pointer",onClick:_e=>m.removeItem(M)},"Удалить",8,kt)]),s("div",Ct,[s("p",null,_(c.description||"Не указано"),1),s("p",null," ссылка на меню из telegra.ph "+_(c.info_link||"Не указано"),1),s("div",vt,[c.image?(e(),n("div",gt,[typeof c.image=="string"?p((e(),n("img",$t,null,512)),[[g,"/images-by-bot-id/"+i.bot.id+"/"+c.image]]):p((e(),n("img",ft,null,512)),[[g,m.getPhoto(c.image).imageUrl]])])):a("",!0)])])])]))),256)):(e(),n("div",wt,Lt))])])]),s("div",Mt,[s("div",Tt,[s("button",{onClick:t[6]||(t[6]=(...c)=>m.submitMenus&&m.submitMenus(...c)),disabled:i.menus.length===0,class:"btn btn-outline-primary p-3 w-100"},"Сохранить меню для заведения ",8,Et)])])])])):a("",!0)}const L=N(G,[["render",Ft]]),jt={class:"row"},Ot={key:0,class:"card mb-3 p-0"},It=s("div",{class:"card-header"},[s("h3",null,"Шаг 1: найдите или создайте компанию")],-1),Dt={key:0,class:"card-body"},Pt=s("h5",{class:"mt-2 mb-2"},"Найдите существующую компанию",-1),Ut=s("h5",{class:"mb-2"},"или создайте новую компанию",-1),Vt={key:1,class:"card-body"},Nt=s("div",{class:"alert alert-success",role:"alert"}," Отлично! Шаг создания компании пройден! Далее следует приступить к следующим шагам! ",-1),Gt=[Nt],St={key:1,class:"card mb-3 p-0"},zt=s("div",{class:"card-header"},[s("h3",null,"Шаг 2: Добавьте локации заведений (не объязательно)")],-1),At={key:0,class:"card-body"},Wt={class:"alert alert-success",role:"alert"},Jt={key:1,class:"card-body"},Rt=s("div",{class:"alert alert-warning",role:"alert"}," Внимание! Вы еще не справились с прошлыми шагами! ",-1),qt=[Rt],Ht={key:2,class:"card-body"},Kt=s("div",{class:"alert alert-success",role:"alert"}," Отлично! Вы создалии локации в завдении! Приступаем к следующим шагам! ",-1),Xt=[Kt],Qt={key:2,class:"card mb-3 p-0"},Yt=s("div",{class:"card-header"},[s("h3",null,"Шаг 3: Добавьте бота ")],-1),Zt={key:0,class:"card-body"},xt={class:"alert alert-success",role:"alert"},ts=s("h5",{class:"mt-2 mb-2"},"Найдите существующего бота",-1),ss=s("h5",{class:"mb-2"},"или создайте нового бота",-1),os={key:1,class:"card-body"},es=s("div",{class:"alert alert-warning",role:"alert"}," Внимание! Вы еще не справились с прошлыми шагами! ",-1),as=[es],ls={key:2,class:"card-body"},ns=s("div",{class:"alert alert-success",role:"alert"}," Отлично! Бот создан! ",-1),is=[ns],rs={key:3,class:"card mb-3 p-0"},ds=s("div",{class:"card-header"},[s("h3",null,"Шаг 4: Добавьте в бота меню")],-1),cs={key:0,class:"card-body"},us={class:"alert alert-success",role:"alert"},hs={key:1,class:"card-body"},ms=s("div",{class:"alert alert-warning",role:"alert"}," Внимание! Вы еще не справились с прошлыми шагами! ",-1),bs=[ms],ps={key:2,class:"card-body"},_s={class:"alert alert-success",role:"alert"},ys={key:4,class:"card mb-3 p-0"},ks=s("div",{class:"card-header"},[s("h3",null,"Шаг 5: Обновите зависимости веб-хуков")],-1),Cs={class:"card-body"},vs={class:"row"},gs=s("div",{class:"alert alert-warning",role:"alert"},[s("strong",null,"Важно!"),u(" новые боты начнут работать только после того, как Вы обновите зависимости! ")],-1),$s={class:"col-12 mb-3"},fs={class:"col-12"},ws={data(){return{step:0,load:!1,company:null,location:null,bot:null}},methods:{reloadWebhooks(){axios.get("/bot/register-webhooks").then(()=>{this.$notify({title:"Конструктор ботов",text:"Зависимости успешно обновлены!",type:"success"})})},reset(){this.step=0,this.company=null,this.bot=null},skip(){this.step++},companyListCallback(o){this.load=!0,this.company=o,this.$nextTick(()=>{this.load=!1})},companyCallback(o){this.step++,this.load=!0,this.$nextTick(()=>{this.load=!1}),document.documentElement.scrollTop=0},locationCallback(){this.step++,this.load=!1,document.documentElement.scrollTop=0},botListCallback(o){this.load=!0,this.bot=o,this.$nextTick(()=>{this.load=!1})},botCallback(o){this.step++,this.bot=o,document.documentElement.scrollTop=0},imageMenuCallback(o){this.step++,document.documentElement.scrollTop=0}}},Bs=Object.assign(ws,{__name:"InitialStepper",setup(o){return(t,l)=>(e(),n("div",jt,[t.step===0?(e(),n("div",Ot,[It,t.step===0?(e(),n("div",Dt,[Pt,t.load?a("",!0):(e(),r(v,{key:0,onCallback:t.companyListCallback},null,8,["onCallback"])),Ut,t.load?a("",!0):(e(),r(f,{key:1,company:t.company,onCallback:t.companyCallback},null,8,["company","onCallback"]))])):(e(),n("div",Vt,Gt))])):a("",!0),t.step===1?(e(),n("div",St,[zt,t.step===1?(e(),n("div",At,[s("div",Wt,[u(" Если нет необходимости в локациях, Вы можете пропустить данный шаг "),s("button",{type:"button",class:"btn btn-primary",onClick:l[0]||(l[0]=(...d)=>t.skip&&t.skip(...d))},"Пропустить "),u(" или же Вы можете вернуться на прошлый шаг "),s("button",{type:"button",class:"btn btn-primary",onClick:l[1]||(l[1]=(...d)=>t.reset&&t.reset(...d))},"Начать заново ")]),t.company?(e(),r(w,{key:0,"company-id":t.company.id,onCallback:t.locationCallback},null,8,["company-id","onCallback"])):a("",!0)])):a("",!0),t.step<1?(e(),n("div",Jt,qt)):a("",!0),t.step>1?(e(),n("div",Ht,Xt)):a("",!0)])):a("",!0),t.step===2?(e(),n("div",Qt,[Yt,t.step===2?(e(),n("div",Zt,[s("div",xt,[u(" При необходимости Вы можете начать по новой "),s("button",{type:"button",class:"btn btn-primary",onClick:l[2]||(l[2]=(...d)=>t.reset&&t.reset(...d))},"Начать заново ")]),ts,t.company?(e(),r(y,{key:0,"company-id":t.company.id,onCallback:t.botListCallback},null,8,["company-id","onCallback"])):a("",!0),ss,t.bot&&t.company&&!t.load?(e(),r(C,{key:1,bot:t.bot,"company-id":t.company.id,onCallback:t.botCallback},null,8,["bot","company-id","onCallback"])):t.bot==null&&t.company&&!t.load?(e(),r(C,{key:2,"company-id":t.company.id,onCallback:t.botCallback},null,8,["company-id","onCallback"])):a("",!0)])):a("",!0),t.step<2?(e(),n("div",os,as)):a("",!0),t.step>2?(e(),n("div",ls,is)):a("",!0)])):a("",!0),t.step===3?(e(),n("div",rs,[ds,t.step===3?(e(),n("div",cs,[s("div",us,[u(" При необходимости Вы можете начать по новой "),s("button",{type:"button",class:"btn btn-primary",onClick:l[3]||(l[3]=(...d)=>t.reset&&t.reset(...d))},"Начать заново ")]),t.bot?(e(),r(L,{key:0,"bot-id":t.bot.id,onCallback:t.imageMenuCallback},null,8,["bot-id","onCallback"])):a("",!0)])):a("",!0),t.step<3?(e(),n("div",hs,bs)):a("",!0),t.step>3?(e(),n("div",ps,[s("div",_s,[u(" Отлично! Все шаги выполнены "),s("button",{type:"button",class:"btn btn-primary",onClick:l[4]||(l[4]=(...d)=>t.reset&&t.reset(...d))},"Начать заново ")])])):a("",!0)])):a("",!0),t.step===4?(e(),n("div",ys,[ks,s("div",Cs,[s("div",vs,[gs,s("div",$s,[s("a",{class:"btn btn-outline-success w-100",onClick:l[5]||(l[5]=(...d)=>t.reloadWebhooks&&t.reloadWebhooks(...d))},"Обновить зависимости")]),s("div",fs,[s("a",{onClick:l[6]||(l[6]=(...d)=>t.reset&&t.reset(...d)),class:"btn btn-outline-primary w-100"},"Начать заново")])])])])):a("",!0)]))}}),Ls={class:"row"},Ms={class:"col-12"},Ts={class:"col-12"},Es={data(){return{load:!1,bot:null}},computed:{...b(["getCurrentBot"])},mounted(){this.loadCurrentBot()},methods:{loadCurrentBot(o=null){this.$store.dispatch("updateCurrentBot",{bot:o}).then(()=>{this.bot=this.getCurrentBot})},botCallback(o){this.load=!0,this.bot=null,this.$nextTick(()=>{this.load=!1})},botListCallback(o){this.load=!0,this.loadCurrentBot(o),this.$nextTick(()=>{this.load=!1})}}},Fs=Object.assign(Es,{__name:"BotEditor",setup(o){return(t,l)=>(e(),n("div",Ls,[s("div",Ms,[t.load?a("",!0):(e(),r(y,{key:0,editor:!0,onCallback:t.botListCallback},null,8,["onCallback"]))]),s("div",Ts,[t.bot&&!t.load?(e(),r(C,{key:0,bot:t.bot,editor:!0,onCallback:t.botCallback},null,8,["bot","onCallback"])):a("",!0)])]))}}),js={class:"row pb-2 pt-2"},Os={class:"col-12"},Is={key:0,class:"col-12"},Ds={key:1},Ps={data(){return{bot:null,page:null,load:!1}},mounted(){this.loadCurrentBot()},computed:{...b(["getCurrentBot"])},methods:{loadCurrentBot(o=null){this.$store.dispatch("updateCurrentBot",{bot:o}).then(()=>{this.bot=this.getCurrentBot})},botListCallback(o){this.load=!0,this.bot=o,this.$nextTick(()=>{this.load=!1})},pageListCallback(o){this.load=!0,this.page=o,this.$nextTick(()=>{this.load=!1})},pageCallback(o){this.load=!0,this.$nextTick(()=>{this.load=!1})}}},Us=Object.assign(Ps,{__name:"BotPageConstructor",setup(o){return(t,l)=>(e(),n("div",js,[s("div",Os,[t.load?a("",!0):(e(),r(y,{key:0,editor:!0,onCallback:t.botListCallback},null,8,["onCallback"]))]),t.bot?(e(),n("div",Is,[!t.load&&t.bot?(e(),r(F,{key:0,"bot-id":t.bot.id,editor:!0,onCallback:t.pageListCallback},null,8,["bot-id","onCallback"])):a("",!0)])):a("",!0),t.bot&&!t.load?(e(),n("div",Ds,[h(T,{page:t.page,bot:t.bot,onCallback:t.pageCallback},null,8,["page","bot","onCallback"])])):a("",!0)]))}}),Vs={class:"row"},Ns={class:"col-12"},Gs={class:"col-12"},Ss={data(){return{load:!1,bot:null}},mounted(){this.loadCurrentBot()},computed:{...b(["getCurrentBot"])},methods:{loadCurrentBot(o=null){this.$store.dispatch("updateCurrentBot",{bot:o}).then(()=>{this.bot=this.getCurrentBot})},imageMenuCallback(o){this.load=!0,this.$nextTick(()=>{this.load=!1})},botListCallback(o){this.load=!0,this.bot=o,this.$nextTick(()=>{this.load=!1})}}},zs=Object.assign(Ss,{__name:"ImageMenuEditor",setup(o){return(t,l)=>(e(),n("div",Vs,[s("div",Ns,[t.load?a("",!0):(e(),r(y,{key:0,editor:!0,onCallback:t.botListCallback},null,8,["onCallback"]))]),s("div",Gs,[t.bot&&!t.load?(e(),r(L,{key:0,bot:t.bot,onCallback:t.imageMenuCallback},null,8,["bot","onCallback"])):a("",!0)])]))}}),As={class:"row"},Ws={class:"col-12"},Js={class:"col-12"},Rs={data(){return{load:!1,company:null}},computed:{...b(["getCurrentCompany"])},mounted(){this.loadCurrentCompany()},methods:{loadCurrentCompany(o=null){this.$store.dispatch("updateCurrentCompany",{company:o}).then(()=>{this.company=this.getCurrentCompany,console.log("company",this.company)})},companyListCallback(o){this.load=!0,this.loadCurrentCompany(o),this.$nextTick(()=>{this.load=!1})},companyCallback(o){this.load=!0,this.$nextTick(()=>{this.load=!1}),document.documentElement.scrollTop=0}}},qs=Object.assign(Rs,{__name:"CompanyEditor",setup(o){return(t,l)=>(e(),n("div",As,[s("div",Ws,[t.load?a("",!0):(e(),r(v,{key:0,onCallback:t.companyListCallback},null,8,["onCallback"]))]),s("div",Js,[!t.load&&t.company?(e(),r(f,{key:0,company:t.company,onCallback:t.companyCallback},null,8,["company","onCallback"])):a("",!0)])]))}}),Hs={class:"row"},Ks={class:"col-12"},Xs={class:"col-12"},Qs={data(){return{load:!1,company:null}},computed:{...b(["getCurrentCompany"])},mounted(){this.loadCurrentCompany()},methods:{loadCurrentCompany(o=null){this.$store.dispatch("updateCurrentCompany",{company:o}).then(()=>{this.company=this.getCurrentCompany})},companyListCallback(o){this.load=!0,this.company=o,this.$nextTick(()=>{this.load=!1})},locationCallback(){this.step++,this.load=!1,document.documentElement.scrollTop=0}}},Ys=Object.assign(Qs,{__name:"LocationEditor",setup(o){return(t,l)=>(e(),n("div",Hs,[s("div",Ks,[t.load?a("",!0):(e(),r(v,{key:0,onCallback:t.companyListCallback},null,8,["onCallback"]))]),s("div",Xs,[t.company&&!t.load?(e(),r(w,{key:0,company:t.company,onCallback:t.locationCallback},null,8,["company","onCallback"])):a("",!0)])]))}});({...b(["getErrors"])});const Zs={class:"row"},xs={class:"col-12"},to={key:0,class:"col-12"},so=s("div",{class:"col-12"},null,-1),oo={data(){return{load:!1,bot:null}},mounted(){this.loadCurrentBot()},computed:{...b(["getCurrentBot"])},methods:{loadCurrentBot(o=null){this.$store.dispatch("updateCurrentBot",{bot:o}).then(()=>{this.bot=this.getCurrentBot})},dialogGroupListCallback(o){this.load=!0,this.company=o,this.$nextTick(()=>{this.load=!1})},botListCallback(o){this.load=!0,this.bot=o,this.$nextTick(()=>{this.load=!1})}}},eo=Object.assign(oo,{__name:"BotDialogGroupEditor",setup(o){return(t,l)=>(e(),n("div",Zs,[s("div",xs,[t.load?a("",!0):(e(),r(y,{key:0,editor:!0,onCallback:t.botListCallback},null,8,["onCallback"]))]),t.bot?(e(),n("div",to,[t.load?a("",!0):(e(),r(E,{key:0,bot:t.bot,onCallback:t.dialogGroupListCallback},null,8,["bot","onCallback"]))])):a("",!0),so]))}}),ao={class:"row"},lo={class:"col-12"},no=s("h5",{class:"mt-2 mb-2"},"Найдите существующую компанию",-1),io={data(){return{company:null,load:!1}},computed:{...b(["getCurrentCompany"])},mounted(){this.loadCurrentCompany()},methods:{loadCurrentCompany(o=null){this.$store.dispatch("updateCurrentCompany",{company:o}).then(()=>{this.company=this.getCurrentCompany})},botCallback(o){this.load=!0,this.bot=o,this.$nextTick(()=>{this.load=!1})},companyListCallback(o){this.load=!0,this.loadCurrentCompany(o),this.$nextTick(()=>{this.load=!1})}}},ro=Object.assign(io,{__name:"BotCreator",setup(o){return(t,l)=>(e(),n("div",ao,[s("div",lo,[no,t.load?a("",!0):(e(),r(v,{key:0,onCallback:t.companyListCallback},null,8,["onCallback"])),t.company&&!t.load?(e(),r(C,{key:1,company:t.company,onCallback:t.botCallback},null,8,["company","onCallback"])):a("",!0)])]))}});const co=s("title",null,"Административная панель",-1),uo=s("meta",{name:"description",content:"Административная панель<"},null,-1),ho={class:"navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow"},mo=s("a",{class:"navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6",href:"#"},"CashMan",-1),bo=s("button",{class:"navbar-toggler position-absolute d-md-none collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#sidebarMenu","aria-controls":"sidebarMenu","aria-expanded":"false","aria-label":"Toggle navigation"},[s("span",{class:"navbar-toggler-icon"})],-1),po={key:0,class:"navbar-nav"},_o={class:"nav-item text-nowrap"},yo={class:"bot-label d-flex justify-between align-items-center"},ko={class:"p-2 text-white"},Co=["href"],vo=s("i",{class:"fa-solid fa-xmark text-white"},null,-1),go=[vo],$o=s("div",{class:"navbar-nav d-none d-md-block"},[s("div",{class:"nav-item text-nowrap"},[s("a",{class:"nav-link px-3",href:"/logout"},"Выход")])],-1),fo={class:"container-fluid"},wo={class:"row"},Bo={id:"sidebarMenu",class:"col-md-3 col-lg-2 d-md-block bg-body-tertiary sidebar",style:{}},Lo={class:"position-sticky pt-3 sidebar-sticky"},Mo={class:"nav flex-column"},To={class:"nav-item"},Eo=s("i",{class:"fa-regular fa-building"},null,-1),Fo={class:"nav-item"},jo=s("i",{class:"fa-regular fa-building"},null,-1),Oo={class:"nav-item"},Io=s("i",{class:"fa-brands fa-android"},null,-1),Do={class:"nav-item"},Po=s("i",{class:"fa-solid fa-robot"},null,-1),Uo={class:"nav-item p-2"},Vo=["disabled"],No={key:0,class:"col-md-9 ms-sm-auto col-lg-10 px-md-4"},Go={class:"pt-3 pb-2 mb-3 border-bottom"},So=s("h1",{class:"mb-3 mt-3"},"Создание нового клиента",-1),zo={key:1,class:"col-md-9 ms-sm-auto col-lg-10 px-md-4"},Ao={class:"pt-3 pb-2 mb-3 border-bottom"},Wo=s("h1",{class:"mb-3 mt-3"},"Редактор компаний",-1),Jo=s("div",{class:"alert alert-success mb-2",role:"alert"}," Выберите компанию из списка! ",-1),Ro={key:2,class:"col-md-9 ms-sm-auto col-lg-10 px-md-4"},qo={class:"pt-3 pb-2 mb-3 border-bottom"},Ho=s("h1",{class:"mb-3 mt-3"},"Редактор локаций",-1),Ko=s("div",{class:"alert alert-success mb-2",role:"alert"}," Выберите компанию из списка! ",-1),Xo={key:3,class:"col-md-9 ms-sm-auto col-lg-10 px-md-4"},Qo={class:"pt-3 pb-2 mb-3 border-bottom"},Yo=s("h1",{class:"mb-3 mt-3"},"Редактор ботов",-1),Zo=s("div",{class:"alert alert-success mb-2",role:"alert"}," Выберите бота из списка! ",-1),xo={key:4,class:"col-md-9 ms-sm-auto col-lg-10 px-md-4"},te={class:"pt-3 pb-2 mb-3 border-bottom"},se=s("h1",{class:"mb-3 mt-3"},"Создание бота",-1),oe=s("div",{class:"alert alert-success mb-2",role:"alert"}," Выберите компанию из списка! ",-1),ee={key:5,class:"col-md-9 ms-sm-auto col-lg-10 px-md-4"},ae={class:"pt-3 pb-2 mb-3 border-bottom"},le=s("h1",{class:"mb-3 mt-3"},"Редактор меню",-1),ne=s("div",{class:"alert alert-success mb-2",role:"alert"}," Выберите бота из списка! ",-1),ie={key:6,class:"col-md-9 ms-sm-auto col-lg-10 px-md-4"},re={class:"pt-3 pb-2 mb-3 border-bottom"},de=s("h1",{class:"mb-3 mt-3"},"Конструктор страниц",-1),ce=s("div",{class:"alert alert-success mb-2",role:"alert"}," Выберите бота из списка! ",-1),ue={key:7,class:"col-md-9 ms-sm-auto col-lg-10 px-md-4"},he={class:"pt-3 pb-2 mb-3 border-bottom"},me=s("h1",{class:"mb-3 mt-3"},"Конструктор диалогов",-1),be=s("div",{class:"alert alert-success mb-2",role:"alert"}," Выберите бота из списка! ",-1),pe={data(){return{tab:0,load:!1,bot:null}},computed:{...b(["getErrors","getCurrentBot"])},watch:{getErrors:function(o,t){Object.keys(o).forEach(l=>{this.$notify({title:"Конструктор ботов",text:o[l],type:"warn"})})}},mounted(){this.loadCurrentBot(),window.addEventListener("store_current_bot-change-event",o=>{this.bot=this.getCurrentBot})},methods:{loadCurrentBot(o=null){this.$store.dispatch("updateCurrentBot",{bot:o}).then(()=>{this.bot=this.getCurrentBot})},resetBot(){this.$store.dispatch("resetCurrentBot").then(()=>{this.bot=null})},stopAllDialogs(){this.$store.dispatch("stopDialogs").then(o=>{this.$notify({title:"Конструктор ботов",text:"Все диалоги остановлены",type:"success"})}).catch(o=>{})},reloadWebhooks(){this.load=!0,this.$notify({title:"Конструктор ботов",text:"Процедура обновления зависимостей началась"}),axios.get("/bot/register-webhooks").then(()=>{this.load=!1,this.$notify({title:"Конструктор ботов",text:"Зависимости успешно обновлены!",type:"success"})}).catch(()=>{this.load=!1,this.$notify({title:"Конструктор ботов",text:"Неудалось обновить зависимости",type:"error"})})}}},Fe=Object.assign(pe,{__name:"Dashboard",setup(o){return(t,l)=>{const d=D("notifications");return e(),n(B,null,[h(U(V),null,{default:P(()=>[co,uo]),_:1}),h(d,{position:"top right"}),s("header",ho,[mo,bo,t.bot?(e(),n("div",po,[s("div",_o,[s("div",yo,[s("span",ko,[u("У Вас выбран бот: "),s("a",{href:"https://t.me/"+(t.bot.bot_domain||"botfather"),target:"_blank"},_(t.bot.bot_domain||"Без имени"),9,Co)]),s("span",{onClick:l[0]||(l[0]=(...i)=>t.resetBot&&t.resetBot(...i)),class:"p-2 text-white"},go)])])])):a("",!0),$o]),s("div",fo,[s("div",wo,[s("nav",Bo,[s("div",Lo,[s("ul",Mo,[s("li",To,[s("a",{class:k(["nav-link",{active:t.tab===1}]),href:"#company-editor","aria-current":"page",onClick:l[1]||(l[1]=i=>t.tab=1)},[Eo,u(" Создание компании ")],2)]),s("li",Fo,[s("a",{class:k(["nav-link",{active:t.tab===8}]),href:"#company-editor","aria-current":"page",onClick:l[2]||(l[2]=i=>t.tab=8)},[jo,u(" Создание редактирование компании ")],2)]),s("li",Oo,[s("a",{class:k(["nav-link",{active:t.tab===7}]),href:"#new-bot","aria-current":"page",onClick:l[3]||(l[3]=i=>t.tab=7)},[Io,u(" Создание нового бота ")],2)]),s("li",Do,[s("a",{class:k(["nav-link",{active:t.tab===3}]),href:"#bot-editor","aria-current":"page",onClick:l[4]||(l[4]=i=>t.tab=3)},[Po,u(" Редактирование ботов ")],2)]),s("li",Uo,[s("button",{type:"button",disabled:t.load,class:"nav-lin btn btn-outline-success w-100",onClick:l[5]||(l[5]=(...i)=>t.stopAllDialogs&&t.stopAllDialogs(...i))},"Остановить все диалоги",8,Vo)])])])]),t.tab===0?(e(),n("main",No,[s("div",Go,[So,h(Bs)])])):a("",!0),t.tab===1?(e(),n("main",zo,[s("div",Ao,[Wo,Jo,h(qs)])])):a("",!0),t.tab===2?(e(),n("main",Ro,[s("div",qo,[Ho,Ko,h(Ys)])])):a("",!0),t.tab===3?(e(),n("main",Xo,[s("div",Qo,[Yo,Zo,h(Fs)])])):a("",!0),t.tab===7?(e(),n("main",xo,[s("div",te,[se,oe,h(ro)])])):a("",!0),t.tab===4?(e(),n("main",ee,[s("div",ae,[le,ne,h(zs)])])):a("",!0),t.tab===5?(e(),n("main",ie,[s("div",re,[de,ce,h(Us)])])):a("",!0),t.tab===6?(e(),n("main",ue,[s("div",he,[me,be,h(eo)])])):a("",!0)])])],64)}}});export{Fe as default};
