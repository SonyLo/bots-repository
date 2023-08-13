import{o as a,q as n,t as e,D as r,G as m,F as g,B as k,x as _,Y as C,L as B,z as d,v,C as c,A as h,N as b,X as V,O as F,J as p,H as T}from"./index.es-3f23c3ba.js";import{A as P,c as U,I as j,d as q,b as L,e as I,f as O,a as D,_ as S}from"./AmoForm-c94975f6.js";import{_ as M}from"./_plugin-vue_export-helper-c27b6911.js";import{T as w}from"./SlugForm-2c18ca5f.js";import{P as z}from"./Pagination-7feb7ae2.js";import{m as A}from"./index-2a9de1d3.js";const N={props:["param"],data(){return{search:null,descriptions:[]}},computed:{filteredDescription(){return this.search?this.descriptions.filter(l=>l.text.indexOf(this.search)!==-1):this.descriptions}},mounted(){this.loadDescription()},methods:{select(l){this.$emit("callback",{param:this.param,text:l})},loadDescription(){this.$store.dispatch("loadDescription").then(l=>{this.descriptions=l.data})}}},E={class:"dropdown"},H=e("button",{class:"btn btn-link dropdown-toggle",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},[e("i",{class:"fa-solid fa-spell-check"})],-1),R={class:"dropdown-menu item-with-text cursor-pointer text-muted p-2"},G=e("div",{class:"dropdown-divider"},null,-1),J=["onClick"];function X(l,t,o,i,f,s){return a(),n("div",E,[H,e("div",R,[r(e("input",{type:"search",class:"form-control",id:"search-description-text","onUpdate:modelValue":t[0]||(t[0]=u=>f.search=u),placeholder:"Введите текст для поиска"},null,512),[[m,f.search]]),G,(a(!0),n(g,null,k(s.filteredDescription,(u,y)=>(a(),n("p",{class:"p-1 text-left w-100",onClick:el=>s.select(u.text)},_(u.text),9,J))),256))])])}const $=M(N,[["render",X]]);const Y={key:0,class:"row"},K={class:"col-12"},Q={key:1,class:"row mb-3 bot-sub-menu"},W={class:"col-12"},Z={class:"btn-group",role:"group","aria-label":"Basic outlined example"},x=e("i",{class:"fa-solid fa-info mr-1"},null,-1),ee=["disabled"],te=e("i",{class:"fa-solid fa-file mr-2"},null,-1),oe=e("i",{class:"fa-solid fa-list-check mr-2"},null,-1),se=e("i",{class:"fa-brands fa-shopify mr-2"},null,-1),le={class:"dropdown"},ae=["disabled"],ne=e("i",{class:"fa-solid fa-bars"},null,-1),ie=[ne],de={class:"dropdown-menu","aria-labelledby":"dropdownMenuLink"},re={key:0},ce={key:0,class:"row"},be={class:"col-12"},me={class:"card border-success mb-3 mt-3"},ue={class:"card-body"},he={class:"form-label",id:"bot-level-2"},_e=e("i",{class:"fa-regular fa-circle-question mr-1"},null,-1),pe=e("div",null,[c("Ваш бот будет 1 в 1 как в шаблоне!"),e("br"),c("Потом можно исправить названия кнопок в меню. ")],-1),fe=e("span",{class:"badge rounded-pill text-bg-danger m-0"},"Нужно",-1),ge=["value"],ve={class:"row"},ke={class:"col-md-12 col-12"},ye={class:"form-check mb-3"},Fe=["value"],$e=e("label",{class:"form-check-label",for:"bot-is-template"}," Сделать шаблоном ",-1),we={key:0,class:"col-md-12 col-12"},Ce={class:"mb-3"},Be={class:"form-label",id:"bot-template-description"},Ve=e("i",{class:"fa-regular fa-circle-question mr-1"},null,-1),Te=e("div",null,"Если вы создаете шаблон, а не реального бота ",-1),Pe=e("span",{class:"badge rounded-pill text-bg-danger m-0"},"Нужно",-1),Ue={class:"row"},je=e("div",{class:"col-12"},[e("p",null,[c("Для создания бота в Телеграм воспользуйтесь "),e("a",{href:"https://telegra.ph/Sozdanie-telegram-bota-06-12",target:"_blank"},"инструкцией")])],-1),qe={class:"col-12"},Le={class:"mb-3"},Ie={class:"form-label",id:"bot-domain"},Oe=e("i",{class:"fa-regular fa-circle-question mr-1"},null,-1),De=e("div",null,'Строго взять из BotFather! ТО что при создании с окончанием на "bot"',-1),Se=e("span",{class:"badge rounded-pill text-bg-danger m-0"},"Нужно",-1),Me={key:0},ze=["href"],Ae={class:"col-md-6 col-12"},Ne={class:"mb-3"},Ee={class:"form-label d-flex justify-content-between",id:"bot-token"},He=e("i",{class:"fa-regular fa-circle-question mr-1"},null,-1),Re=e("div",null,"Взять из BotFater при создании бота! Длинная нечитаемая подсвеченная строка! ",-1),Ge=e("span",{class:"badge rounded-pill text-bg-danger m-0"},"Нужно",-1),Je=e("a",{href:"https://t.me/botfather",target:"_blank"},"Создать нового бота в ТГ",-1),Xe={class:"col-md-6 col-12"},Ye={class:"mb-3"},Ke=e("label",{class:"form-label",id:"bot-token-dev"},"Токен бота (для тестирования)",-1),Qe={class:"col-md-6 col-12"},We={class:"mb-3"},Ze={class:"d-flex justify-content-between align-items-center"},xe={class:"form-label d-flex justify-content-between",id:"bot-order-channel"},et=e("i",{class:"fa-regular fa-circle-question mr-1"},null,-1),tt=e("div",null,"Ввести адрес ссылки на канал в форму после добавления тоукена ",-1),ot=e("span",{class:"badge rounded-pill text-bg-danger m-0"},"Нужно",-1),st={class:"col-md-6 col-12"},lt={class:"mb-3"},at={class:"d-flex justify-content-between"},nt=e("label",{class:"form-label",id:"bot-main-channel"},"Канал для постов (id,рекламный)",-1),it={key:1,class:"row"},dt={class:"col-12"},rt={class:"mb-3"},ct={class:"d-flex justify-content-between"},bt={class:"form-label",id:"bot-description"},mt=e("i",{class:"fa-regular fa-circle-question mr-1"},null,-1),ut=e("div",null,"Отобразится пользователю при первом запуске",-1),ht=e("span",{class:"badge rounded-pill text-bg-danger m-0"},"Нужно",-1),_t={key:0,class:"text-gray-400 ml-3",style:{"font-size":"10px"}},pt={class:"col-12"},ft={class:"mb-3"},gt={class:"d-flex justify-content-between"},vt={class:"form-label",id:"bot-description"},kt=e("i",{class:"fa-regular fa-circle-question mr-1"},null,-1),yt=e("div",null,'Для меню "О Боте"',-1),Ft=e("span",{class:"badge rounded-pill text-bg-danger m-0"},"Нужно",-1),$t={key:0,class:"text-gray-400 ml-3",style:{"font-size":"10px"}},wt={class:"col-12"},Ct={class:"mb-3"},Bt={class:"d-flex justify-content-between"},Vt={class:"form-label",id:"bot-maintenance-message"},Tt=e("span",{class:"badge rounded-pill text-bg-danger m-0"},"Нужно",-1),Pt={key:0,class:"text-gray-400 ml-3",style:{"font-size":"10px"}},Ut={class:"col-md-6 col-12"},jt={class:"mb-3"},qt={class:"form-label",id:"bot-balance"},Lt=e("i",{class:"fa-regular fa-circle-question mr-1"},null,-1),It=e("div",null,"Начальная сумма денег на счету у конкретного бота",-1),Ot=e("span",{class:"badge rounded-pill text-bg-danger m-0"},"Нужно",-1),Dt={class:"col-md-6 col-12"},St={class:"mb-3"},Mt={class:"form-label",id:"bot-tax-per-day"},zt=e("i",{class:"fa-regular fa-circle-question mr-1"},null,-1),At=e("div",null,"Сумма списания денег за сутки работы бота (тариф)",-1),Nt=e("span",{class:"badge rounded-pill text-bg-danger m-0"},"Нужно",-1),Et={class:"col-md-6 col-12"},Ht={class:"mb-3"},Rt=e("label",{class:"form-label",id:"bot-level-1"},[c(" Уровень 1 CashBack, % "),e("span",{class:"badge rounded-pill text-bg-danger m-0"},"Нужно")],-1),Gt={class:"col-md-6 col-12"},Jt={class:"mb-3"},Xt=e("label",{class:"form-label",id:"bot-level-2"},"Уровень 2 CashBack, %",-1),Yt={class:"col-md-6 col-12"},Kt={class:"mb-3"},Qt=e("label",{class:"form-label",id:"bot-level-3"},"Уровень 3 CashBack, %",-1),Wt={class:"col-12 mb-2"},Zt={class:"form-check"},xt=e("label",{class:"form-check-label",for:"need-payments"}," Необходимо подключить платежную систему ",-1),eo={key:0,class:"col-md-12 col-12"},to={class:"form-check mb-3"},oo=["value"],so=e("label",{class:"form-check-label",for:"bot-auto-cashback-on-payments"}," Начислять CashBack автоматически после успешной оплаты ",-1),lo={class:"mb-3"},ao=e("i",{class:"fa-regular fa-circle-question mr-1"},null,-1),no=e("div",null,"Если в боте планируется оплата, то необходимо через BotFather привязать нужную платежную систему и указать в данном поле полученный токен ",-1),io=e("label",{class:"form-label",id:"bot-level-3"},[c("Токен платежной системы "),e("a",{href:"https://t.me/botfather",target:"_blank"},"Подключить")],-1),ro={class:"col-12 mb-2"},co={class:"form-check"},bo=e("label",{class:"form-check-label",for:"need-shop"}," Необходимо интегрировать магазин в бота ",-1),mo={key:1,class:"col-md-12 col-12"},uo={class:"mb-3"},ho=e("i",{class:"fa-regular fa-circle-question mr-1"},null,-1),_o=e("div",null,"Ссылка на страницу ВК с товарами для вашего магазина в боте ",-1),po=e("label",{class:"form-label",id:"bot-level-3"},[c("Ссылка на группу ВК с товарами "),e("a",{href:"https://vk.com/groups?w=groups_create",target:"_blank"},"Создать")],-1),fo={class:"col-12"},go={class:"card mb-3"},vo=e("div",{class:"card-header"},[e("h6",null,[c("Информационная ссылка: создайте контент в "),e("a",{target:"_blank",href:"https://telegra.ph"},"https://telegra.ph")])],-1),ko={class:"card-body"},yo=e("div",{class:"row"},[e("div",{class:"col-12"},[e("h6",null,"Ссылка")])],-1),Fo={class:"row"},$o={class:"col-12"},wo={class:"mb-3"},Co={class:"col-12"},Bo={class:"card mb-3"},Vo=e("div",{class:"card-header"},[e("h6",null,"Ссылки на соц. сети")],-1),To={class:"card-body"},Po=e("div",{class:"row"},[e("div",{class:"col-12"},[e("h6",null,"Ссылка")])],-1),Uo={class:"col-5"},jo={class:"mb-3"},qo=["onUpdate:modelValue","aria-describedby"],Lo={class:"col-5"},Io={class:"mb-3"},Oo=["onUpdate:modelValue","aria-describedby"],Do={class:"col-2"},So=["onClick"],Mo=e("i",{class:"fa-regular fa-trash-can"},null,-1),zo=[Mo],Ao={class:"row"},No={class:"col-12"},Eo={class:"col-12 mb-3"},Ho=e("h6",null,[c("Аватар для бота "),e("span",{class:"badge rounded-pill text-bg-danger m-0"},"Нужно")],-1),Ro={class:"photo-preview d-flex justify-content-start flex-wrap w-100"},Go={for:"bot-photos",style:{"margin-right":"10px"},class:"photo-loader ml-2"},Jo=e("span",null,"+",-1),Xo={class:"mb-2 img-preview",style:{"margin-right":"10px"}},Yo={class:"remove"},Ko=["onClick"],Qo=e("i",{class:"fa-regular fa-trash-can"},null,-1),Wo=[Qo],Zo={key:1,class:"mb-2 img-preview",style:{"margin-right":"10px"}},xo={class:"remove"},es=e("i",{class:"fa-regular fa-trash-can"},null,-1),ts=[es],os={class:"row"},ss={class:"col-12"},ls=["disabled"],as={key:0},ns={key:1},is={key:1},ds={key:2},rs={key:3},cs={key:4},bs={key:5},ms={key:6},us={key:7},hs={key:8,class:"row"},_s={key:0,class:"col-12 col-md-8"},ps={key:1,class:"col-12 col-md-4"},fs={props:["company","bot","editor"],data(){return{page:null,step:0,templates:[],load:!1,loadPage:!1,loadPageList:!1,need_payments:!1,need_shop:!1,command:null,botForm:{is_template:!1,auto_cashback_on_payments:!1,template_description:null,bot_domain:null,bot_token:null,bot_token_dev:null,order_channel:null,main_channel:null,vk_shop_link:null,balance:null,tax_per_day:null,welcome_message:null,image:null,description:null,info_link:null,social_links:[],maintenance_message:null,payment_provider_token:null,level_1:10,level_2:0,level_3:0,photos:[],selected_bot_template_id:null,pages:[],amo:null}}},watch:{need_payments:function(l,t){this.need_payments||(this.botForm.auto_cashback_on_payments=!1)},"botForm.selected_bot_template_id":function(l,t){this.botForm.selected_bot_template_id!=null&&(this.loadSlugsByBotTemplate(this.botForm.selected_bot_template_id),this.loadPagesByBotTemplate(this.botForm.selected_bot_template_id))}},mounted(){this.loadBotTemplates(),this.bot&&this.$nextTick(()=>{this.loadSlugsByBotTemplate(this.bot.id),this.loadPagesByBotTemplate(this.bot.id),this.botForm={id:this.bot.id||null,is_template:this.bot.is_template||!1,auto_cashback_on_payments:this.bot.auto_cashback_on_payments||!1,template_description:this.bot.template_description||null,bot_domain:this.bot.bot_domain||null,bot_token:this.bot.bot_token||null,bot_token_dev:this.bot.bot_token_dev||null,order_channel:this.bot.order_channel||null,main_channel:this.bot.main_channel||null,balance:this.bot.balance||null,tax_per_day:this.bot.tax_per_day||null,vk_shop_link:this.bot.vk_shop_link||null,image:this.bot.image||null,description:this.bot.description||null,info_link:this.bot.info_link||null,social_links:this.bot.social_links||[],maintenance_message:this.bot.maintenance_message||null,welcome_message:this.bot.welcome_message||null,payment_provider_token:this.bot.payment_provider_token||null,level_1:this.bot.level_1||10,level_2:this.bot.level_2||0,level_3:this.bot.level_3||0,photos:this.bot.photos||[],amo:this.bot.amo||null},this.botForm.payment_provider_token&&(this.need_payments=!0)})},methods:{addTextTo(l={param:null,text:null}){this.botForm[l.param]=l.text},loadSlugsByBotTemplate(l){this.load=!0,this.$store.dispatch("loadBotSlugs",{botId:l}).then(t=>{this.botForm.slugs=t,this.$nextTick(()=>{this.load=!1})})},loadPagesByBotTemplate(l){this.$store.dispatch("loadBotPages",{botId:l}).then(t=>{this.botForm.pages=t})},loadBotTemplates(){this.$store.dispatch("loadTemplates").then(l=>{this.templates=l.data})},getPhoto(l){return{imageUrl:URL.createObjectURL(l)}},onChangePhotos(l){const t=l.target.files;this.botForm.image=null;for(let o=0;o<t.length;o++)this.botForm.photos.push(t[o])},addItem(l){this.botForm[l].push("")},addSocialLinks(){this.botForm.social_links.push({title:null,url:null})},removeItem(l,t){this.botForm[l].splice(t,1)},removePhoto(l){l?this.botForm.photos.splice(l,1):this.botForm.image=null},addBot(){let l=new FormData;Object.keys(this.botForm).forEach(t=>{const o=this.botForm[t]||"";typeof o=="object"?l.append(t,JSON.stringify(o)):l.append(t,o)}),this.company&&l.append("company_id",this.company.id);for(let t=0;t<this.botForm.photos.length;t++)l.append("images[]",this.botForm.photos[t]);l.delete("photos"),this.$store.dispatch(this.bot==null?"createBot":"updateBot",{botForm:l}).then(t=>{this.$emit("callback",t.data),this.$notify({title:"Конструктор ботов",text:this.bot==null?"Бот успешно создан!":"Бот успешно обновлен!",type:"success"}),this.bot==null&&(this.botForm={is_template:!1,auto_cashback_on_payments:!1,template_description:null,bot_domain:null,bot_token:null,bot_token_dev:null,order_channel:null,main_channel:null,balance:null,tax_per_day:null,image:null,description:null,info_link:null,social_links:[],maintenance_message:null,payment_provider_token:null,level_1:10,level_2:0,level_3:0,photos:[],selected_bot_template_id:null,pages:[]})}).catch(t=>{})},pageListCallback(l){this.loadPage=!0,this.page=l,this.$nextTick(()=>{this.loadPage=!1})},pageCallback(l){this.loadPageList=!0,this.$nextTick(()=>{this.loadPageList=!1})}}},il=Object.assign(fs,{__name:"BotForm",setup(l){return(t,o)=>{const i=C("Popper"),f=B("lazy");return a(),n(g,null,[l.company?(a(),n("div",Y,[e("div",K,[e("h6",null,"Создаем бот к компании "+_(l.company.title||"Не установлен"),1)])])):d("",!0),l.editor?(a(),n("div",Q,[e("div",W,[e("div",Z,[e("button",{type:"button",class:v([{"btn-info text-white":t.step===0},"btn btn-outline-info"]),onClick:o[0]||(o[0]=s=>t.step=0)},[x,c(" Информация о боте ")],2),e("button",{type:"button",disabled:t.botForm.selected_bot_template_id===null,class:v([{"btn-info text-white":t.step===4},"btn btn-outline-info"]),onClick:o[1]||(o[1]=s=>t.step=4)},[te,c(" Страницы ")],10,ee),e("button",{type:"button",class:v([{"btn-info text-white":t.step===7},"btn btn-outline-info"]),onClick:o[2]||(o[2]=s=>t.step=7)},[oe,c(" AMO CRM ")],2),e("button",{type:"button",class:v([{"btn-info text-white":t.step===8},"btn btn-outline-info"]),onClick:o[3]||(o[3]=s=>t.step=8)},[se,c(" Магазин ")],2),e("div",le,[e("button",{type:"button",disabled:t.botForm.selected_bot_template_id===null,class:"btn btn-outline-info dropdown-toggle custom-group-dropdown-btn",href:"#",role:"button",id:"dropdownMenuLink","data-bs-toggle":"dropdown","aria-expanded":"false"},ie,8,ae),e("ul",de,[e("li",null,[e("a",{class:"dropdown-item",href:"#bot-image-menu",onClick:o[4]||(o[4]=s=>t.step=5)},"Меню заведения")]),e("li",null,[e("a",{class:"dropdown-item",href:"#bot-menu-template",onClick:o[5]||(o[5]=s=>t.step=1)},"Шаблон клавитатур бота")]),e("li",null,[e("a",{class:"dropdown-item",href:"#bot-slugs",onClick:o[6]||(o[6]=s=>t.step=2)},"Скрипты")]),e("li",null,[e("a",{class:"dropdown-item",href:"#bot-dialogs",onClick:o[7]||(o[7]=s=>t.step=6)},"Диалоги")]),e("li",null,[e("a",{class:"dropdown-item",href:"#bot-users",onClick:o[8]||(o[8]=s=>t.step=3)},"Пользователи")])])])])])])):d("",!0),e("form",{class:"pb-5 mb-5",onSubmit:o[34]||(o[34]=T((...s)=>t.addBot&&t.addBot(...s),["prevent"]))},[t.step===0?(a(),n("div",re,[t.templates.length>0&&l.bot==null?(a(),n("div",ce,[e("div",be,[e("div",me,[e("div",ue,[e("label",he,[h(i,null,{content:b(()=>[pe]),default:b(()=>[_e]),_:1}),c(" Выберите шаблон! "),fe]),r(e("select",{class:"form-control","aria-label":"Шаблон бота","onUpdate:modelValue":o[9]||(o[9]=s=>t.botForm.selected_bot_template_id=s),"aria-describedby":"bot-level-2",required:""},[(a(!0),n(g,null,k(t.templates,(s,u)=>(a(),n("option",{value:s.id},_(s.template_description||s.bot_domain||"Не указано"),9,ge))),256))],512),[[V,t.botForm.selected_bot_template_id]])])])])])):d("",!0),e("div",ve,[e("div",ke,[e("div",ye,[r(e("input",{class:"form-check-input",type:"checkbox",value:t.botForm.is_template,"onUpdate:modelValue":o[10]||(o[10]=s=>t.botForm.is_template=s),id:"bot-is-template"},null,8,Fe),[[F,t.botForm.is_template]]),$e])]),t.botForm.is_template?(a(),n("div",we,[e("div",Ce,[e("label",Be,[h(i,null,{content:b(()=>[Te]),default:b(()=>[Ve]),_:1}),c(" Название шаблона бота "),Pe]),r(e("input",{type:"text",class:"form-control",placeholder:"Название \\ описание шаблона","aria-label":"Описание шаблона","onUpdate:modelValue":o[11]||(o[11]=s=>t.botForm.template_description=s),maxlength:"255","aria-describedby":"bot-template-description",required:""},null,512),[[m,t.botForm.template_description]])])])):d("",!0)]),e("div",Ue,[je,e("div",qe,[e("div",Le,[e("label",Ie,[h(i,null,{content:b(()=>[De]),default:b(()=>[Oe]),_:1}),c(" Доменное имя бота из BotFather "),Se]),r(e("input",{type:"text",class:"form-control",placeholder:"Имя бота","aria-label":"Имя бота","onUpdate:modelValue":o[12]||(o[12]=s=>t.botForm.bot_domain=s),maxlength:"255","aria-describedby":"bot-domain",required:""},null,512),[[m,t.botForm.bot_domain]]),t.botForm.bot_domain?(a(),n("p",Me,[c("Проверить работу бота "),e("a",{href:"https://t.me/"+t.botForm.bot_domain,target:"_blank"},"@"+_(t.botForm.bot_domain),9,ze)])):d("",!0)])]),e("div",Ae,[e("div",Ne,[e("label",Ee,[e("div",null,[h(i,null,{content:b(()=>[Re]),default:b(()=>[He]),_:1}),c(" Токен бота "),Ge]),Je]),r(e("input",{type:"text",class:"form-control",placeholder:"Токен","aria-label":"Токен","onUpdate:modelValue":o[13]||(o[13]=s=>t.botForm.bot_token=s),maxlength:"255","aria-describedby":"bot-token",required:""},null,512),[[m,t.botForm.bot_token]])])]),e("div",Xe,[e("div",Ye,[Ke,r(e("input",{type:"text",class:"form-control",placeholder:"Токен","aria-label":"Токен","onUpdate:modelValue":o[14]||(o[14]=s=>t.botForm.bot_token_dev=s),maxlength:"255","aria-describedby":"bot-token-dev"},null,512),[[m,t.botForm.bot_token_dev]])])]),e("div",Qe,[e("div",We,[e("div",Ze,[e("label",xe,[e("div",null,[h(i,null,{content:b(()=>[tt]),default:b(()=>[et]),_:1}),c(" Канал для заказов (id) "),ot])]),h(w,{token:t.botForm.bot_token,param:"order_channel",onCallback:t.addTextTo},null,8,["token","onCallback"])]),r(e("input",{type:"text",class:"form-control",placeholder:"id канала","aria-label":"id канала","onUpdate:modelValue":o[15]||(o[15]=s=>t.botForm.order_channel=s),maxlength:"255","aria-describedby":"bot-order-channel"},null,512),[[m,t.botForm.order_channel]])])]),e("div",st,[e("div",lt,[e("div",at,[nt,h(w,{token:t.botForm.bot_token,param:"main_channel",onCallback:t.addTextTo},null,8,["token","onCallback"])]),r(e("input",{type:"text",class:"form-control",placeholder:"id канала","aria-label":"id канала","onUpdate:modelValue":o[16]||(o[16]=s=>t.botForm.main_channel=s),maxlength:"255","aria-describedby":"bot-main-channel"},null,512),[[m,t.botForm.main_channel]])])])]),t.botForm.bot_token?(a(),n("div",it,[e("div",dt,[e("div",rt,[e("div",ct,[e("label",bt,[h(i,null,{content:b(()=>[ut]),default:b(()=>[mt]),_:1}),c(" Приветственное сообщение "),ht,t.botForm.welcome_message?(a(),n("small",_t," Длина текста "+_(t.botForm.welcome_message.length),1)):d("",!0)]),h($,{param:"welcome_message",onCallback:t.addTextTo},null,8,["onCallback"])]),r(e("textarea",{type:"text",class:"form-control",placeholder:"Текстовое приветствие при запуске бота","aria-label":"Текстовое приветствие при запуске бота","onUpdate:modelValue":o[17]||(o[17]=s=>t.botForm.welcome_message=s),"aria-describedby":"bot-description",required:""},`
                    `,512),[[m,t.botForm.welcome_message]])])]),e("div",pt,[e("div",ft,[e("div",gt,[e("label",vt,[h(i,null,{content:b(()=>[yt]),default:b(()=>[kt]),_:1}),c(" Описание бота "),Ft,t.botForm.description?(a(),n("small",$t," Длина текста "+_(t.botForm.description.length),1)):d("",!0)]),h($,{param:"description",onCallback:t.addTextTo},null,8,["onCallback"])]),r(e("textarea",{type:"text",class:"form-control",placeholder:"Текстовое описание бота","aria-label":"Текстовое описание бота","onUpdate:modelValue":o[18]||(o[18]=s=>t.botForm.description=s),"aria-describedby":"bot-description",required:""},`
                    `,512),[[m,t.botForm.description]])])]),e("div",wt,[e("div",Ct,[e("div",Bt,[e("label",Vt,[c("Сообщение для режима тех. работ "),Tt,t.botForm.maintenance_message?(a(),n("small",Pt," Длина текста "+_(t.botForm.maintenance_message.length),1)):d("",!0)]),h($,{param:"maintenance_message",onCallback:t.addTextTo},null,8,["onCallback"])]),r(e("textarea",{type:"text",class:"form-control",placeholder:"Текстовое сообщение","aria-label":"Текстовое сообщение","onUpdate:modelValue":o[19]||(o[19]=s=>t.botForm.maintenance_message=s),maxlength:"255","aria-describedby":"bot-maintenance-message",required:""},`
                    `,512),[[m,t.botForm.maintenance_message]])])]),e("div",Ut,[e("div",jt,[e("label",qt,[h(i,null,{content:b(()=>[It]),default:b(()=>[Lt]),_:1}),c(" Баланс бота, руб "),Ot]),r(e("input",{type:"number",class:"form-control",placeholder:"Баланс","aria-label":"Баланс","onUpdate:modelValue":o[20]||(o[20]=s=>t.botForm.balance=s),min:"0","aria-describedby":"bot-balance",required:""},null,512),[[m,t.botForm.balance]])])]),e("div",Dt,[e("div",St,[e("label",Mt,[h(i,null,{content:b(()=>[At]),default:b(()=>[zt]),_:1}),c(" Списание за сутки, руб "),Nt]),r(e("input",{type:"number",class:"form-control",placeholder:"Списание","aria-label":"Списание","onUpdate:modelValue":o[21]||(o[21]=s=>t.botForm.tax_per_day=s),min:"0","aria-describedby":"bot-tax-per-day",required:""},null,512),[[m,t.botForm.tax_per_day]])])]),e("div",Et,[e("div",Ht,[Rt,r(e("input",{type:"number",class:"form-control",placeholder:"%","aria-label":"уровень CashBack","onUpdate:modelValue":o[22]||(o[22]=s=>t.botForm.level_1=s),max:"50",min:"0","aria-describedby":"bot-level-1",required:""},null,512),[[m,t.botForm.level_1]])])]),e("div",Gt,[e("div",Jt,[Xt,r(e("input",{type:"number",class:"form-control",placeholder:"%","aria-label":"уровень CashBack","onUpdate:modelValue":o[23]||(o[23]=s=>t.botForm.level_2=s),max:"50",min:"0","aria-describedby":"bot-level-2"},null,512),[[m,t.botForm.level_2]])])]),e("div",Yt,[e("div",Kt,[Qt,r(e("input",{type:"number",class:"form-control",placeholder:"%","aria-label":"уровень CashBack","onUpdate:modelValue":o[24]||(o[24]=s=>t.botForm.level_3=s),max:"50",min:"0","aria-describedby":"bot-level-3"},null,512),[[m,t.botForm.level_3]])])]),e("div",Wt,[e("div",Zt,[r(e("input",{class:"form-check-input","onUpdate:modelValue":o[25]||(o[25]=s=>t.need_payments=s),type:"checkbox",id:"need-payments"},null,512),[[F,t.need_payments]]),xt])]),t.need_payments?(a(),n("div",eo,[e("div",to,[r(e("input",{class:"form-check-input",type:"checkbox",value:t.botForm.auto_cashback_on_payments,"onUpdate:modelValue":o[26]||(o[26]=s=>t.botForm.auto_cashback_on_payments=s),id:"bot-auto-cashback-on-payments"},null,8,oo),[[F,t.botForm.auto_cashback_on_payments]]),so]),e("div",lo,[h(i,null,{content:b(()=>[no]),default:b(()=>[ao]),_:1}),io,r(e("input",{type:"text",class:"form-control",placeholder:"Токен","aria-label":"уровень CashBack","onUpdate:modelValue":o[27]||(o[27]=s=>t.botForm.payment_provider_token=s),"aria-describedby":"bot-level-3"},null,512),[[m,t.botForm.payment_provider_token]])])])):d("",!0),e("div",ro,[e("div",co,[r(e("input",{class:"form-check-input","onUpdate:modelValue":o[28]||(o[28]=s=>t.need_shop=s),type:"checkbox",id:"need-shop"},null,512),[[F,t.need_shop]]),bo])]),t.need_shop?(a(),n("div",mo,[e("div",uo,[h(i,null,{content:b(()=>[_o]),default:b(()=>[ho]),_:1}),po,r(e("input",{type:"url",class:"form-control",placeholder:"Ссылка на группу ВК","aria-label":"ссылка на группу ВК","onUpdate:modelValue":o[29]||(o[29]=s=>t.botForm.vk_shop_link=s),"aria-describedby":"vk_shop_link"},null,512),[[m,t.botForm.vk_shop_link]])])])):d("",!0),e("div",fo,[e("div",go,[vo,e("div",ko,[yo,e("div",Fo,[e("div",$o,[e("div",wo,[r(e("input",{type:"text",class:"form-control",placeholder:"Ссылка ресурс telegraph","aria-label":"Ссылка ресурс telegraph",maxlength:"255","onUpdate:modelValue":o[30]||(o[30]=s=>t.botForm.info_link=s),"aria-describedby":"bot-info-link"},null,512),[[m,t.botForm.info_link]])])])])])])]),e("div",Co,[e("div",Bo,[Vo,e("div",To,[Po,(a(!0),n(g,null,k(t.botForm.social_links,(s,u)=>(a(),n("div",{class:"row",key:"social-link"+u},[e("div",Uo,[e("div",jo,[r(e("input",{type:"text",class:"form-control",placeholder:"Название ссылки","aria-label":"Название ссылки",maxlength:"255","onUpdate:modelValue":y=>t.botForm.social_links[u].title=y,"aria-describedby":"bot-social-link-"+u,required:""},null,8,qo),[[m,t.botForm.social_links[u].title]])])]),e("div",Lo,[e("div",Io,[r(e("input",{type:"text",class:"form-control",placeholder:"Ссылка на соц.сеть","aria-label":"Ссылка на соц.сеть",maxlength:"255","onUpdate:modelValue":y=>t.botForm.social_links[u].url=y,"aria-describedby":"bot-social-link-"+u,required:""},null,8,Oo),[[m,t.botForm.social_links[u].url]])])]),e("div",Do,[e("button",{type:"button",onClick:y=>t.removeItem("social_links",u),class:"btn btn-outline-danger w-100"},zo,8,So)])]))),128)),e("div",Ao,[e("div",No,[e("button",{type:"button",onClick:o[31]||(o[31]=s=>t.addSocialLinks()),class:"btn btn-outline-success w-100"},"Добавить еще ссылку ")])])])])]),e("div",Eo,[Ho,e("div",Ro,[e("label",Go,[Jo,e("input",{type:"file",id:"bot-photos",multiple:"",accept:"image/*",onChange:o[32]||(o[32]=(...s)=>t.onChangePhotos&&t.onChangePhotos(...s)),style:{display:"none"}},null,32)]),t.botForm.photos?(a(!0),n(g,{key:0},k(t.botForm.photos,(s,u)=>(a(),n("div",Xo,[r(e("img",null,null,512),[[f,t.getPhoto(s).imageUrl]]),e("div",Yo,[e("a",{onClick:y=>t.removePhoto(u)},Wo,8,Ko)])]))),256)):(a(),n("div",Zo,[r(e("img",null,null,512),[[f,"/images-by-bot-id/"+l.bot.id+"/"+t.botForm.image]]),e("div",xo,[e("a",{onClick:o[33]||(o[33]=s=>t.removePhoto())},ts)])]))])])])):d("",!0),e("div",os,[e("div",ss,[e("button",{disabled:!t.botForm.bot_token,type:"submit",class:"btn btn-success w-100 p-3"},[l.bot?(a(),n("span",ns,"Обновить бота")):(a(),n("span",as,"Добавить бота"))],8,ls)])])])):d("",!0),t.step===7?(a(),n("div",is,[t.load?d("",!0):(a(),p(P,{key:0,data:t.botForm.amo},null,8,["data"]))])):d("",!0),t.step===8?(a(),n("div",ds,[t.load?d("",!0):(a(),p(U,{key:0}))])):d("",!0),t.step===5?(a(),n("div",rs,[t.load?d("",!0):(a(),p(j,{key:0}))])):d("",!0),t.step===1?(a(),n("div",cs,[t.load?d("",!0):(a(),p(q,{key:0,"select-mode":!1}))])):d("",!0),t.step===6?(a(),n("div",bs,[t.load?d("",!0):(a(),p(L,{key:0}))])):d("",!0),t.step===2?(a(),n("div",ms,[t.load?d("",!0):(a(),p(I,{key:0}))])):d("",!0),t.step===3?(a(),n("div",us,[t.load?d("",!0):(a(),p(O,{key:0}))])):d("",!0),t.step===4?(a(),n("div",hs,[t.load?d("",!0):(a(),n("div",_s,[t.loadPage?d("",!0):(a(),p(D,{key:0,page:t.page,onCallback:t.pageCallback},null,8,["page","onCallback"]))])),t.load?d("",!0):(a(),n("div",ps,[t.loadPageList?d("",!0):(a(),p(S,{key:0,editor:!0,onCallback:t.pageListCallback},null,8,["onCallback"]))]))])):d("",!0)],32)],64)}}}),gs={key:0},vs={class:"row"},ks={class:"col-md-12 d-flex flex-column"},ys={class:"d-flex"},Fs={class:"dropdown mr-2"},$s=e("button",{class:"btn btn-outline-primary dropdown-toggle",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false"}," Фильтры ",-1),ws={class:"dropdown-menu","aria-labelledby":"dropdownMenuButton1"},Cs=["onClick"],Bs={class:"input-group mb-3"},Vs={key:0,class:"mt-2"},Ts={class:"badge bg-info mr-1"},Ps=["onClick"],Us=e("i",{class:"fa-solid fa-xmark"},null,-1),js=[Us],qs={key:0,class:"row"},Ls={class:"col-12 mb-3"},Is={class:"list-group w-100"},Os=["onClick"],Ds={key:0,class:"badge bg-info"},Ss=["onClick"],Ms=e("i",{class:"fa-regular fa-copy"},null,-1),zs=[Ms],As=["onClick"],Ns=e("i",{class:"fa-solid fa-boxes-packing"},null,-1),Es=[Ns],Hs=["onClick"],Rs=e("i",{class:"fa-solid fa-box-open"},null,-1),Gs=[Rs],Js=["onClick"],Xs=e("i",{class:"fa-solid fa-trash-can text-white"},null,-1),Ys=[Xs],Ks={class:"col-12"},Qs={key:1,class:"row"},Ws=e("div",{class:"col-12"},[e("div",{class:"alert alert-warning",role:"alert"}," У выбранной компании нет созданных ботов! ")],-1),Zs=[Ws],xs={props:["companyId","editor"],data(){return{filters:[{name:"Активные",icon:"fa-brands fa-telegram",slug:"active"},{name:"Архивные",icon:"fa-solid fa-box-archive",slug:"archive"}],selectedFilters:[],show:!0,loading:!0,bots:[],search:null,bots_paginate_object:null}},computed:{...A(["getBots","getBotsPaginateObject","getCurrentCompany"]),filteredBots(){if(!this.bots)return[];if(this.selectedFilters.length===0&&this.search==null)return this.bots;if(this.selectedFilters.length===0&&this.search!=null)return this.bots.filter(t=>(t.bot_domain||"").trim().toLowerCase().indexOf(this.search.trim().toLowerCase())!==-1);let l=[];return this.selectedFilters.forEach(t=>{switch(t.slug){case"active":this.bots.filter(o=>o.deleted_at==null).forEach(o=>{l.push(o)});break;case"archive":this.bots.filter(o=>o.deleted_at!=null).forEach(o=>{l.push(o)});break}}),this.search==null?l:l.filter(t=>(t.bot_domain||"").trim().toLowerCase().indexOf(this.search.trim().toLowerCase())!==-1)}},mounted(){this.loadBots(),this.selectFilter("active")},methods:{duplicate(l){if(!this.getCurrentCompany){this.$notify("У вас не выбран клиент!");return}this.$store.dispatch("duplicateBot",{dataObject:{bot_id:l,company_id:this.getCurrentCompany.id}}).then(t=>{let o=this.bots_paginate_object.meta.current_page||0;this.loadBots(o),this.$notify("Указанный бот успешно продублирован")})},addToArchive(l){this.$store.dispatch("removeBot",{botId:l}).then(t=>{let o=this.bots_paginate_object.meta.current_page||0;this.loadBots(o),this.$notify("Указанный бот успешно перемещен в архив")})},forceDelete(l){this.$store.dispatch("forceDeleteBot",{botId:l}).then(t=>{let o=this.bots_paginate_object.meta.current_page||0;this.loadBots(o),this.$notify("Указанный бот успешно перемещен из архива")})},extractFromArchive(l){this.$store.dispatch("restoreBot",{botId:l}).then(t=>{let o=this.bots_paginate_object.meta.current_page||0;this.loadBots(o),this.$notify("Указанный бот успешно перемещен из архива")})},selectFilter(l){let t=this.filters.find(o=>o.slug===l);t&&this.selectedFilters.filter(o=>o.slug===l).length===0&&this.selectedFilters.push(t)},removeSelectedFilter(l){let t=this.selectedFilters.findIndex(o=>o.slug===l);this.selectedFilters.splice(t,1)},selectBot(l){this.$emit("callback",l),this.show=!1,this.$notify("Вы выбрали бота из списка! Все остальные действия будут производится для этого бота.")},nextBots(l){this.loadBots(l)},loadBots(l=0){this.loading=!0,this.$store.dispatch("loadBots",{dataObject:{companyId:this.companyId||null,search:this.search},page:l}).then(t=>{this.loading=!1,this.bots=this.getBots,this.bots_paginate_object=this.getBotsPaginateObject}).catch(()=>{this.loading=!1})}}},dl=Object.assign(xs,{__name:"BotList",setup(l){return(t,o)=>t.show?(a(),n("div",gs,[e("div",vs,[e("div",ks,[e("div",ys,[e("div",Fs,[$s,e("ul",ws,[(a(!0),n(g,null,k(t.filters,i=>(a(),n("li",null,[e("a",{class:"dropdown-item",onClick:f=>t.selectFilter(i.slug),href:"#filter"},[e("i",{class:v([i.icon,"mr-2"])},null,2),c(" "+_(i.name||"Не указано"),1)],8,Cs)]))),256))])]),e("div",Bs,[r(e("input",{type:"search",class:"form-control",placeholder:"Поиск бота","aria-label":"Поиск бота","onUpdate:modelValue":o[0]||(o[0]=i=>t.search=i),"aria-describedby":"button-addon2"},null,512),[[m,t.search]]),e("button",{class:"btn btn-outline-secondary",onClick:o[1]||(o[1]=(...i)=>t.loadBots&&t.loadBots(...i)),type:"button",id:"button-addon2"},"Найти ")])]),t.selectedFilters.length>0?(a(),n("p",Vs,[(a(!0),n(g,null,k(t.selectedFilters,i=>(a(),n("span",Ts,[c(_(i.name||"не указан")+" ",1),e("a",{onClick:f=>t.removeSelectedFilter(i.slug),class:"ml-1 text-white",href:"#filter"},js,8,Ps)]))),256))])):d("",!0)])]),t.bots.length>0?(a(),n("div",qs,[e("div",Ls,[e("ul",Is,[l.editor?d("",!0):(a(),n("li",{key:0,class:"list-group-item active cursor-pointer btn btn-outline-info",onClick:o[2]||(o[2]=i=>t.selectBot(null))},"Создать нового бота ")),(a(!0),n(g,null,k(t.filteredBots,(i,f)=>(a(),n("li",{class:v(["list-group-item cursor-pointer btn mb-1 d-flex align-items-center justify-between",{"btn-outline-info":i.deleted_at==null,"btn-outline-secondary border-secondary":i.deleted_at!=null}])},[e("strong",{onClick:s=>t.selectBot(i),style:{"word-wrap":"break-word"}},[e("i",{class:v([{"text-danger":i.deleted_at!=null},"fa-solid fa-robot mr-2"])},null,2),c(_(i.bot_domain||"Не указано"),1)],8,Os),i.is_template?(a(),n("span",Ds,_(i.template_description||"Шаблон без названия"),1)):d("",!0),e("div",null,[e("button",{class:"btn btn-outline-info mr-2",type:"button",onClick:s=>t.duplicate(i.id),title:"Дублировать"},zs,8,Ss),i.deleted_at==null?(a(),n("button",{key:0,class:"btn btn-outline-info",type:"button",onClick:s=>t.addToArchive(i.id),title:"В архив"},Es,8,As)):d("",!0),i.deleted_at!=null?(a(),n("button",{key:1,class:"btn btn-outline-info mr-2",onClick:s=>t.extractFromArchive(i.id),title:"Из архива"},Gs,8,Hs)):d("",!0),i.deleted_at!=null?(a(),n("button",{key:2,class:"btn btn-danger mr-2",onClick:s=>t.forceDelete(i.id),title:"Удалить на совсем"},Ys,8,Js)):d("",!0)])],2))),256))])]),e("div",Ks,[t.bots_paginate_object?(a(),p(z,{key:0,onPagination_page:t.nextBots,pagination:t.bots_paginate_object},null,8,["onPagination_page","pagination"])):d("",!0)])])):(a(),n("div",Qs,Zs))])):d("",!0)}});export{il as _,dl as a};
