import{_ as x}from"./MainAdminLayout-19787917.js";import{L as F,q as r,t as n,v as s,H as _,D as c,y as p,A as d,x as b,P as C,J as h,F as v,C as f,R as V,M as U,S as j,T as q,G as M,K as B,O as S,B as P}from"./index.es-71d37bd0.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                                                 */const O={props:["bot"],data(){return{tab:0,load:!1,confirm:!1,step:0,botUser:null,isEdit:!1,messages:[],photo:null,botUserForm:{id:null,is_vip:!1,is_admin:!1,is_work:!1,is_manager:!1,is_deliveryman:!1,user_in_location:!1,name:null,phone:null,email:null,birthday:null,age:null,city:null,country:null,address:null,sex:null,is_blocked:null,blocked_message:null},managerForm:{name:null,phone:null,email:null,image:null,birthday:null,city:null,country:null,address:null,sex:!0,referral:null,strengths:[""],weaknesses:[""],educations:[""],social_links:[""],skills:[{title:null,value:50}],info:null}}},watch:{getSelf:function(){this.prepareManager()}},mounted(){this.prepareManager()},computed:{tg(){return window.Telegram.WebApp},getSelf(){return window.profile},currentBot(){return window.currentBot}},methods:{prepareManager(){this.botUser=this.getSelf,this.managerForm.name=this.botUser.name||this.botUser.fio_from_telegram||null,this.managerForm.phone=this.botUser.phone||null,this.managerForm.email=this.botUser.email||null,this.managerForm.birthday=this.botUser.birthday||null,this.managerForm.city=this.botUser.city||null,this.managerForm.country=this.botUser.country||null,this.managerForm.address=this.botUser.address||null,this.managerForm.sex=this.botUser.sex||!0,this.botUser.manager&&(this.managerForm.id=this.botUser.manager.id||null,this.managerForm.social_links=this.botUser.manager.social_links||[""],this.managerForm.skills=this.botUser.manager.skills||[{title:null,value:50}],this.managerForm.weaknesses=this.botUser.manager.weaknesses||[""],this.managerForm.educations=this.botUser.manager.educations||[""],this.managerForm.strengths=this.botUser.manager.strengths||[""],this.managerForm.image=this.botUser.manager.image||null),this.botUserForm.id=this.botUser.id,this.botUserForm.is_vip=this.botUser.is_vip,this.botUserForm.is_admin=this.botUser.is_admin,this.botUserForm.is_work=this.botUser.is_work,this.botUserForm.is_manager=this.botUser.is_manager,this.botUserForm.is_deliveryman=this.botUser.is_deliveryman,this.botUserForm.user_in_location=this.botUser.user_in_location,this.botUserForm.name=this.botUser.name||this.botUser.username||this.botUser.id,this.botUserForm.phone=this.botUser.phone,this.botUserForm.email=this.botUser.email,this.botUserForm.birthday=this.botUser.birthday||null,this.botUserForm.city=this.botUser.city||null,this.botUserForm.country=this.botUser.country||null,this.botUserForm.address=this.botUser.address||null,this.botUserForm.sex=this.botUser.sex||!1,this.botUserForm.is_blocked=this.botUser.blocked_at!=null,this.botUserForm.blocked_message=this.botUser.blocked_message||null},alert(i){this.messages.push(i)},removeMessage(i){this.messages.splice(i,1)},getPhoto(i){return{imageUrl:URL.createObjectURL(i)}},removePhoto(i="photo"){i==="photo"&&(this.photo=null),i==="image"&&(this.managerForm.image=null)},onChangePhotos(i){const t=i.target.files;this.photo=t[0]},nextStep(){this.step++},remove(i,t){this.managerForm[i].splice(t,1)},add(i){i!=="skills"?this.managerForm[i].push(""):this.managerForm[i].push({title:null,value:50})},submitBotUser(){this.$store.dispatch("updateBotUser",{botUserForm:this.botUserForm}).then(()=>{this.isEdit=!1,this.messages=[],this.botUserForm={id:null,is_vip:!1,is_admin:!1,is_work:!1,is_manager:!1,is_deliveryman:!1,user_in_location:!1,name:null,phone:null,email:null,birthday:null,age:null,city:null,country:null,address:null,sex:null,is_blocked:!1},this.$emit("update"),this.$botNotification.notification("Редактирование данных","Данные успешно обновлены!")}).catch(()=>{this.$botNotification.warning("Редактирование данных","Ошибка обновления данных")})},submitManager(){this.loading=!0;const i=this.photo||null;let t=new FormData;i&&t.append("images[]",i),Object.keys(this.managerForm).forEach(g=>{const y=this.managerForm[g]||"";typeof y=="object"?t.append(g,JSON.stringify(y)):t.append(g,y)}),t.append("bot_id",this.bot.id),t.append("bot_user_id",this.botUser.id),this.$store.dispatch("saveManager",t).then(g=>{window.location.reload()}).catch(()=>{this.loading=!1})}}},o=i=>(j("data-v-5fd521bb"),i=i(),q(),i),D={key:0,class:"container shadow-lg border mt-1 mb-1"},E={class:"row"},I={key:0,class:"col-md-3 border-right bg-primary"},L={style:{position:"sticky",top:"0px"},class:"d-flex flex-column align-items-center text-center p-3 py-5"},T={class:"rounded-circle mt-5",style:{width:"150px",height:"150px","object-fit":"cover"}},z={key:0,class:"text-white"},R=o(()=>s("strong",{class:"text-uppercase"},"активирована!",-1)),A={key:1,class:"text-white"},G=o(()=>s("strong",{class:"text-uppercase"},"не активна!",-1)),J={class:"mb-0"},H={class:"text-white"},K={class:"mb-0"},W={class:"text-white"},Q={class:"mb-0"},X={class:"text-white"},Y={class:"mb-0"},Z={class:"text-white"},$={class:"mb-3"},ss={class:"text-white"},es=o(()=>s("i",{class:"fa-solid fa-user-pen mr-2"},null,-1)),ts=o(()=>s("a",{class:"btn btn-info p-3 rounded-5 w-100 my-2"},[s("i",{class:"fa-solid fa-graduation-cap mr-2"}),c("Обучение")],-1)),os=o(()=>s("a",{href:"/договор_аренды_по.docx",target:"_blank",class:"text-white"}," Образец договора для клиента ",-1)),as={class:"row"},ls={key:0,class:"col-12 mt-3"},rs={class:"card text-center"},ns={class:"card-body"},is=o(()=>s("h3",null,"Для начал заведите профиль",-1)),cs=o(()=>s("h5",{class:"card-title"},"Редактирование профиля менеджера",-1)),ds=o(()=>s("p",{class:"card-text"},"Внесите информацию о себе и получите более расширенный доступ к системе",-1)),ms={class:"col-12 my-3"},_s={class:"card text-center"},us={class:"card-body"},hs=o(()=>s("h3",null,"Работа с клиентами",-1)),bs=o(()=>s("h5",{class:"card-title"},"Набор инструментов для работы с клиентом",-1)),ps=o(()=>s("p",{class:"card-text"},[s("strong",null,"Основные функции"),c(": "),s("em",null,"создание и редактирование клиента"),c(", "),s("em",null,"работа со списком заведений клиента")],-1)),gs={key:0,href:"/company-page",class:"btn btn-outline-primary rounded-5 p-3"},vs={key:1,type:"button",disabled:!0,class:"btn btn-outline-secondary rounded-5 p-3"},fs={class:"col-12"},ys={class:"card text-center"},ks={class:"card-body"},Fs=U('<h3 data-v-5fd521bb> Работа с ботами</h3><h5 class="card-title" data-v-5fd521bb>Набор инструментов для работы с ботами</h5><p class="card-text" data-v-5fd521bb><strong data-v-5fd521bb>Основные функции</strong>: <em data-v-5fd521bb>создание и редактирование бота</em>, <em data-v-5fd521bb>работа со страницами бота</em>, <em data-v-5fd521bb>графическое меню бота</em>, <em data-v-5fd521bb>шаблоны клавиатур бота</em>, <em data-v-5fd521bb>скрипты в боте</em>, <em data-v-5fd521bb>и т.д.</em></p>',3),Us={key:0,href:"/bot-page",class:"btn btn-outline-primary p-3 rounded-5"},ws={key:1,type:"button",disabled:!0,class:"btn btn-outline-secondary p-3 rounded-5"},xs={class:"col-12 my-3"},Cs={class:"card text-center"},Vs={class:"card-body"},js=o(()=>s("h3",null,"Работа с системными скриптами",-1)),qs=o(()=>s("h5",{class:"card-title"},"Набор инструментов для работы с основными скриптами системы",-1)),Ms=o(()=>s("p",{class:"card-text"},[s("strong",null,"Основные функции"),c(": "),s("em",null,"создание и редактирование скриптов"),c(", "),s("em",null,"модификация глобальных параметров")],-1)),Bs={key:0,href:"/script-page",class:"btn btn-outline-primary rounded-5 p-3"},Ss={key:1,type:"button",disabled:!0,class:"btn btn-outline-secondary rounded-5 p-3"},Ps={class:"row mt-2"},Ns={class:"col-12"},Os={class:"nav nav-tabs"},Ds={class:"nav-item"},Es={class:"nav-item"},Is={class:"nav-item"},Ls={class:"nav-item"},Ts={class:"nav-item"},zs={class:"row"},Rs={class:"col-md-6 border-right"},As={class:"p-3 py-5"},Gs=o(()=>s("div",{class:"d-flex justify-content-between align-items-center mb-3"},[s("h4",{class:"text-right"},"Настройки профиля менеджера")],-1)),Js={class:"col-12"},Hs=o(()=>s("label",null,"Укажите Ваше Ф.И.О",-1)),Ks={class:"col-12"},Ws=o(()=>s("label",{class:"mb-3"},"Загрузи своё персональное фото, мы же должны знать в лицо наших сотрудников",-1)),Qs={class:"card d-inline-flex justify-content-center flex-wrap"},Xs={class:"card-body"},Ys={for:"bot-photos",style:{"margin-right":"10px"},class:"photo-loader ml-2 text-center"},Zs=o(()=>s("span",{class:"p-3"},[s("i",{class:"fa-solid fa-image"})],-1)),$s={key:0,class:"card d-inline-flex justify-content-center flex-wrap mt-2"},se={class:"card-body"},ee={class:"img-preview",style:{"margin-right":"10px"}},te={class:"remove"},oe=o(()=>s("i",{class:"fa-regular fa-trash-can"},null,-1)),ae={key:1,class:"card d-inline-flex justify-content-center flex-wrap mt-2"},le={class:"card-body"},re={class:"img-preview",style:{"margin-right":"10px"}},ne={class:"remove"},ie=o(()=>s("i",{class:"fa-regular fa-trash-can"},null,-1)),ce={class:"col-12 mt-3"},de=o(()=>s("label",null,"Введите свой номер телефона",-1)),me={class:"col-12"},_e=o(()=>s("label",null,"Введите свой email адрес",-1)),ue={class:"col-12 mt-3"},he=o(()=>s("label",null,"Ссылки на ваши соц. сети",-1)),be={class:"input-group position-relative mb-2"},pe=["onUpdate:modelValue","aria-label","aria-describedby"],ge={key:0,class:"input-group-text bg-primary"},ve=["onClick"],fe=o(()=>s("i",{class:"fa-regular fa-square-minus"},null,-1)),ye=[fe],ke={class:"col-12"},Fe=o(()=>s("label",null,"Укажите ваш пол",-1)),Ue={class:"row mb-0"},we={class:"col-6 p-1"},xe=o(()=>s("i",{class:"fa-solid fa-mars font-28"},null,-1)),Ce=o(()=>s("span",{class:"text-center text-uppercase my-2"},"Мужчина",-1)),Ve=[xe,Ce],je={class:"col-6 p-1"},qe=o(()=>s("i",{class:"fa-solid fa-mars font-28"},null,-1)),Me=o(()=>s("span",{class:"text-center text-uppercase my-2"},"Женщина",-1)),Be=[qe,Me],Se={class:"col-12"},Pe=o(()=>s("label",null,"Введите дату своего рождения",-1)),Ne={class:"input-style input-style-2"},Oe={class:"col-12"},De=o(()=>s("label",null,"Укажите город вашего проживания",-1)),Ee={class:"input-style input-style-2"},Ie=U('<datalist id="datalistCityOptions" data-v-5fd521bb><option value="Краснодар" data-v-5fd521bb></option><option value="Ростов-на-Дону" data-v-5fd521bb></option><option value="Таганрог" data-v-5fd521bb></option><option value="Донецк" data-v-5fd521bb></option><option value="Москва" data-v-5fd521bb></option></datalist>',1),Le={class:"col-12"},Te=o(()=>s("p",{class:"mb-3"},[s("em",null,"Напишите о себе любую информацию, которая может иметь для нас значение ")],-1)),ze=o(()=>s("h6",{class:"text-center"},"Дополнительная информация",-1)),Re={class:"input-style input-style-2"},Ae={key:0,class:"col-12"},Ge=o(()=>s("p",{class:"mb-3"},[s("em",null,"Для того чтоб вы и ваш друг получали больше бонусов воспользуйтесь реферальной программой и введите реферальный код от вашего друга!")],-1)),Je=o(()=>s("h6",{class:"text-center"},"Введите реферальный код вашего друга",-1)),He={class:"input-style input-style-2"},Ke={class:"col-12"},We=o(()=>s("p",{class:"mb-3"},[s("em",null,"Отлично! Теперь, прежде чем закончить, пожалуйста, прочитайте условия использования и дайте свое согласие на их принятие.")],-1)),Qe=o(()=>s("p",null,[c("Перед отправкой данных нужно ознакомиться с "),s("a",{href:"#"},"политикой конфиденциальности"),c(".")],-1)),Xe={class:"d-flex mb-3"},Ye={class:"pt-1"},Ze={"data-activate":"toggle-id-1",class:"font-500 font-13"},$e={key:0},st={key:1},et={class:"ml-auto mr-4 pr-2"},tt={class:"custom-control ios-switch"},ot=o(()=>s("label",{class:"custom-control-label",for:"toggle-id-1"},null,-1)),at=["disabled"],lt={class:"row mt-5"},rt={class:"col-12"},nt=o(()=>s("label",null,"Полученное высшее образование",-1)),it=o(()=>s("p",{class:"mb-0 small"},[s("em",null,[c("Если еще нет высшего образования, впишите "),s("strong",{class:"text-primary"},'"нет"')])],-1)),ct={class:"input-group position-relative mb-2"},dt=["onUpdate:modelValue","aria-label","aria-describedby"],mt=["id"],_t=["onClick"],ut=o(()=>s("i",{class:"fa-regular fa-square-minus"},null,-1)),ht=[ut],bt=o(()=>s("i",{class:"fa-solid fa-plus mr-2"},null,-1)),pt={class:"col-12 mt-3"},gt=o(()=>s("label",null,"Ваши сильные стороны",-1)),vt={class:"input-group position-relative mb-2"},ft=["onUpdate:modelValue","aria-label","aria-describedby"],yt=["id"],kt=["onClick"],Ft=o(()=>s("i",{class:"fa-regular fa-square-minus"},null,-1)),Ut=[Ft],wt=o(()=>s("i",{class:"fa-solid fa-plus mr-2"},null,-1)),xt={class:"col-12 mt-3"},Ct=o(()=>s("label",null,"Ваши слабые стороны",-1)),Vt={class:"input-group position-relative mb-2"},jt=["onUpdate:modelValue","aria-label","aria-describedby"],qt=["id"],Mt=["onClick"],Bt=o(()=>s("i",{class:"fa-regular fa-square-minus"},null,-1)),St=[Bt],Pt=o(()=>s("i",{class:"fa-solid fa-plus mr-2"},null,-1)),Nt={class:"col-12 mt-3"},Ot=o(()=>s("label",null,"Ваши профессиональные навыки",-1)),Dt={class:"mb-2"},Et={class:"input-group position-relative"},It=["onUpdate:modelValue","aria-label","aria-describedby"],Lt=["id"],Tt=["onClick"],zt=o(()=>s("i",{class:"fa-regular fa-square-minus"},null,-1)),Rt=[zt],At={class:"range-slider bottom-15 range-slider-icons"},Gt={class:"my-2 text-center font-bold"},Jt={key:0},Ht=["onUpdate:modelValue"],Kt=o(()=>s("i",{class:"fa-solid fa-plus mr-2"},null,-1));function Wt(i,t,g,y,e,m){const k=F("lazy"),w=F("mask");return e.botUser?(r(),n("div",D,[s("div",E,[e.botUser.manager?(r(),n("div",I,[s("div",L,[_(s("img",T,null,512),[[k,e.botUser.manager.image?e.botUser.manager.image:"../images/manager.png"]]),e.botUser.manager.verified_at!=null?(r(),n("p",z,[c(" Учетная запись менеджера "),R])):(r(),n("p",A,[c(" Учетная запись менеджера "),G])),s("p",J,[c("Имя: "),s("strong",H,p(e.botUser.name||"Не указано"),1)]),s("p",K,[c("Телефон: "),s("strong",W,p(e.botUser.phone||"Не указано"),1)]),s("p",Q,[c("Ваш баланс: "),s("strong",X,p(e.botUser.manager.balance||0)+" руб",1)]),s("p",Y,[c("Слотов под клиентов: "),s("strong",Z,p(e.botUser.manager.max_company_slot_count||0),1)]),s("p",$,[c("Слотов слотов под ботов: "),s("strong",ss,p(e.botUser.manager.max_bot_slot_count||0),1)]),e.tab===0?(r(),n("a",{key:2,onClick:t[0]||(t[0]=l=>e.tab++),class:"btn btn-outline-light p-3 rounded-5 w-100"},[es,c("Профиль")])):d("",!0),e.tab>0?(r(),n("a",{key:3,onClick:t[1]||(t[1]=l=>e.tab=0),class:"btn btn-outline-light p-3 rounded-5 w-100"},"Главный экран")):d("",!0),ts,os])])):d("",!0),e.tab===0?(r(),n("div",{key:1,class:b(["col-md-9",{"col-md-12":!e.botUser.manager}])},[s("div",as,[e.botUser.manager?d("",!0):(r(),n("div",ls,[s("div",rs,[s("div",ns,[is,cs,ds,s("a",{onClick:t[2]||(t[2]=l=>e.tab++),class:"btn btn-outline-primary p-3"},"Перейти к разделу")])])])),s("div",ms,[s("div",_s,[s("div",us,[hs,bs,ps,e.botUser.manager?(r(),n("a",gs,"Перейти к разделу")):(r(),n("button",vs,"Перейти к разделу "))])])]),s("div",fs,[s("div",ys,[s("div",ks,[Fs,e.botUser.manager?(r(),n("a",Us," Перейти к разделу ")):(r(),n("button",ws,"Перейти к разделу "))])])]),s("div",xs,[s("div",Cs,[s("div",Vs,[js,qs,Ms,e.botUser.manager?(r(),n("a",Bs,"Перейти к разделу")):(r(),n("button",Ss,"Перейти к разделу "))])])])])],2)):d("",!0),e.tab>0?(r(),n("div",{key:2,class:b(["col-md-9",{"col-md-12":!e.botUser.manager}])},[s("div",Ps,[s("div",Ns,[s("ul",Os,[s("li",Ds,[s("a",{class:b(["nav-link",{active:e.tab===1}]),onClick:t[3]||(t[3]=l=>e.tab=1),"aria-current":"page",href:"#"}," Профиль ",2)]),s("li",Es,[s("a",{class:b(["nav-link",{active:e.tab===2}]),href:"#",onClick:t[4]||(t[4]=l=>e.tab=2)}," Документы ",2)]),s("li",Is,[s("a",{class:b(["nav-link",{active:e.tab===3}]),onClick:t[5]||(t[5]=l=>e.tab=3),href:"#"}," Клиенты & Боты ",2)]),s("li",Ls,[s("a",{class:b(["nav-link",{active:e.tab===4}]),onClick:t[6]||(t[6]=l=>e.tab=4),href:"#"}," Навыки и умения ",2)]),s("li",Ts,[s("a",{class:b(["nav-link",{active:e.tab===5}]),onClick:t[7]||(t[7]=l=>e.tab=5),href:"#"}," Статистика ",2)])])])]),s("div",zs,[s("div",Rs,[s("div",As,[Gs,s("form",{onSubmit:t[22]||(t[22]=C((...l)=>m.submitManager&&m.submitManager(...l),["prevent"])),class:"row mb-0"},[s("div",Js,[Hs,_(s("input",{type:"text",class:"form-control font-14 p-3",placeholder:"Петров Петр Семенович","aria-label":"managerForm-name","onUpdate:modelValue":t[8]||(t[8]=l=>e.managerForm.name=l),"aria-describedby":"managerForm-name",required:""},null,512),[[h,e.managerForm.name]])]),s("div",Ks,[Ws,s("div",Qs,[s("div",Xs,[s("label",Ys,[Zs,s("input",{type:"file",id:"bot-photos",accept:"image/*",onChange:t[9]||(t[9]=(...l)=>m.onChangePhotos&&m.onChangePhotos(...l)),style:{display:"none"}},null,32)])])]),e.managerForm.image?(r(),n("div",$s,[s("div",se,[s("div",ee,[_(s("img",null,null,512),[[k,e.managerForm.image]]),s("div",te,[s("a",{onClick:t[10]||(t[10]=l=>m.removePhoto("image")),class:"cursor-pointer"},[oe,c(" удалить фото")])])])])])):d("",!0),e.photo?(r(),n("div",ae,[s("div",le,[s("div",re,[_(s("img",null,null,512),[[k,m.getPhoto(e.photo).imageUrl]]),s("div",ne,[s("a",{onClick:t[11]||(t[11]=l=>m.removePhoto("photo")),class:"cursor-pointer"},[ie,c(" удалить фото")])])])])])):d("",!0)]),s("div",ce,[de,_(s("input",{type:"text",class:"form-control font-14 p-3 rounded-s border-theme","onUpdate:modelValue":t[12]||(t[12]=l=>e.managerForm.phone=l),placeholder:"+7(000)000-00-00","aria-label":"managerForm-phone","aria-describedby":"managerForm-phone",required:""},null,512),[[w,"+7(###)###-##-##"],[h,e.managerForm.phone]])]),s("div",me,[_e,_(s("input",{type:"email",class:"form-control font-14 p-3 rounded-s border-theme","onUpdate:modelValue":t[13]||(t[13]=l=>e.managerForm.email=l),placeholder:"inbox@your-cashman.com","aria-label":"managerForm-phone","aria-describedby":"managerForm-email",required:""},null,512),[[h,e.managerForm.email]])]),s("div",ue,[he,(r(!0),n(v,null,f(e.managerForm.social_links,(l,a)=>(r(),n("div",be,[_(s("input",{type:"url",class:"form-control font-14 p-3 rounded-s border-theme","onUpdate:modelValue":u=>e.managerForm.social_links[a]=u,placeholder:"Ссылка на соц. сеть","aria-label":"managerForm-social-links-"+a,"aria-describedby":"managerForm-social-links-"+a,required:""},null,8,pe),[[h,e.managerForm.social_links[a]]]),a>0?(r(),n("span",ge,[s("a",{href:"javascript:void(0)",onClick:u=>m.remove("social_links",a),class:"text-white"},ye,8,ve)])):d("",!0)]))),256)),s("a",{onClick:t[14]||(t[14]=l=>m.add("social_links")),class:"d-block w-100 py-3 text-center",href:"javascript:void(0)"},"Добавить еще ссылку")]),s("div",ke,[Fe,s("div",Ue,[s("div",we,[s("div",{class:b([{"btn-primary text-white":e.managerForm.sex},"btn btn-outline-secondary w-100 p-2 d-flex justify-content-between flex-column align-items-center"]),onClick:t[15]||(t[15]=l=>e.managerForm.sex=!0)},Ve,2)]),s("div",je,[s("div",{class:b([{"btn-primary text-white":!e.managerForm.sex},"btn btn-outline-secondary w-100 p-2 d-flex justify-content-between flex-column align-items-center"]),onClick:t[16]||(t[16]=l=>e.managerForm.sex=!1)},Be,2)])])]),s("div",Se,[Pe,s("div",Ne,[_(s("input",{type:"date",class:"form-control font-14 p-3 rounded-s border-theme","onUpdate:modelValue":t[17]||(t[17]=l=>e.managerForm.birthday=l),"aria-label":"managerForm-birthday","aria-describedby":"managerForm-birthday",required:""},null,512),[[h,e.managerForm.birthday]])])]),s("div",Oe,[De,s("div",Ee,[_(s("input",{type:"text","onUpdate:modelValue":t[18]||(t[18]=l=>e.managerForm.city=l),list:"datalistCityOptions",class:"form-control font-14 p-3 rounded-s border-theme",placeholder:"Город проживания","aria-label":"managerForm-city","aria-describedby":"managerForm-city",required:""},null,512),[[h,e.managerForm.city]]),Ie])]),s("div",Le,[Te,ze,s("div",Re,[_(s("textarea",{type:"text",class:"form-control text-left font-14 p-3 rounded-s border-theme","onUpdate:modelValue":t[19]||(t[19]=l=>e.managerForm.info=l),placeholder:"Дополнительная информация",style:{"min-height":"200px"},"aria-label":"managerForm-referral","aria-describedby":"managerForm-info"},`
                        `,512),[[h,e.managerForm.info]])])]),e.botUser.manager?d("",!0):(r(),n("div",Ae,[Ge,Je,s("div",He,[_(s("input",{type:"text",class:"form-control text-center font-14 p-3 rounded-s border-theme","onUpdate:modelValue":t[20]||(t[20]=l=>e.managerForm.referral=l),placeholder:"Реферальный код","aria-label":"managerForm-referral","aria-describedby":"managerForm-referral"},null,512),[[h,e.managerForm.referral]])])])),s("div",Ke,[We,Qe,s("div",Xe,[s("div",Ye,[s("p",Ze,[e.managerForm.sex?d("",!0):(r(),n("span",$e,"С правилами ознакомилась")),e.managerForm.sex?(r(),n("span",st,"С правилами ознакомлен")):d("",!0)])]),s("div",et,[s("div",tt,[_(s("input",{"onUpdate:modelValue":t[21]||(t[21]=l=>e.confirm=l),type:"checkbox",class:"ios-input",id:"toggle-id-1"},null,512),[[V,e.confirm]]),ot])])]),s("button",{type:"submit",disabled:!e.confirm||e.load,class:"btn btn-primary mb-2 text-uppercase w-100"}," Отправить анкету ",8,at)])],32)])]),s("div",{class:b(["col-md-6",{"col-md-6":!e.botUser.manager}])},[s("div",lt,[s("div",rt,[nt,it,(r(!0),n(v,null,f(e.managerForm.educations,(l,a)=>(r(),n("div",ct,[_(s("input",{type:"text",class:"form-control font-14 p-3","onUpdate:modelValue":u=>e.managerForm.educations[a]=u,placeholder:"Название ВУЗа, специализация, уровень образования","aria-label":"managerForm-educations-"+a,"aria-describedby":"managerForm-educations-"+a,required:""},null,8,dt),[[h,e.managerForm.educations[a]]]),a>0?(r(),n("span",{key:0,class:"input-group-text bg-primary",id:"managerForm-educations-"+a},[s("a",{href:"javascript:void(0)",onClick:u=>m.remove("educations",a),class:"text-white"},ht,8,_t)],8,mt)):d("",!0)]))),256)),s("a",{onClick:t[23]||(t[23]=l=>m.add("educations")),class:"d-block w-100",href:"javascript:void(0)"},[bt,c("Добавить еще высшее образование")])]),s("div",pt,[gt,(r(!0),n(v,null,f(e.managerForm.strengths,(l,a)=>(r(),n("div",vt,[_(s("input",{type:"text",class:"form-control font-14 p-3","onUpdate:modelValue":u=>e.managerForm.strengths[a]=u,placeholder:"Ваше сильное качество","aria-label":"managerForm-strengths-"+a,"aria-describedby":"managerForm-strengths-"+a,required:""},null,8,ft),[[h,e.managerForm.strengths[a]]]),a>0?(r(),n("span",{key:0,class:"input-group-text bg-primary",id:"managerForm-strengths-"+a},[s("a",{href:"javascript:void(0)",onClick:u=>m.remove("strengths",a),class:"text-white"},Ut,8,kt)],8,yt)):d("",!0)]))),256)),s("a",{onClick:t[24]||(t[24]=l=>m.add("strengths")),class:"d-block w-100",href:"javascript:void(0)"},[wt,c("Добавить еще сильные стороны")])]),s("div",xt,[Ct,(r(!0),n(v,null,f(e.managerForm.weaknesses,(l,a)=>(r(),n("div",Vt,[_(s("input",{type:"text",class:"form-control font-14 p-3","onUpdate:modelValue":u=>e.managerForm.weaknesses[a]=u,placeholder:"Ваша слабая сторона","aria-label":"managerForm-weaknesses-"+a,"aria-describedby":"managerForm-weaknesses-"+a,required:""},null,8,jt),[[h,e.managerForm.weaknesses[a]]]),a>0?(r(),n("span",{key:0,class:"input-group-text bg-primary",id:"managerForm-weaknesses-"+a},[a>0?(r(),n("a",{key:0,href:"javascript:void(0)",onClick:u=>m.remove("weaknesses",a),class:"text-white"},St,8,Mt)):d("",!0)],8,qt)):d("",!0)]))),256)),s("a",{onClick:t[25]||(t[25]=l=>m.add("weaknesses")),class:"d-block w-100",href:"javascript:void(0)"},[Pt,c(" Добавить еще слабые стороны")])]),s("div",Nt,[Ot,(r(!0),n(v,null,f(e.managerForm.skills,(l,a)=>(r(),n("div",Dt,[s("div",Et,[_(s("input",{type:"text",class:"form-control font-14 p-3","onUpdate:modelValue":u=>e.managerForm.skills[a].title=u,placeholder:"Название навыка","aria-label":"managerForm-skills-"+a,"aria-describedby":"managerForm-skills-"+a,required:""},null,8,It),[[h,e.managerForm.skills[a].title]]),a>0?(r(),n("span",{key:0,class:"input-group-text bg-primary",id:"managerForm-skills-"+a},[a>0?(r(),n("a",{key:0,href:"javascript:void(0)",onClick:u=>m.remove("skills",a),class:"text-white"},Rt,8,Tt)):d("",!0)],8,Lt)):d("",!0)]),s("div",At,[s("p",Gt,[e.managerForm.skills[a].title?(r(),n("span",Jt,p(e.managerForm.skills[a].title)+" прокачан на ",1)):d("",!0),c(p(e.managerForm.skills[a].value)+"% ",1)]),_(s("input",{class:"form-range w-100",max:"100","onUpdate:modelValue":u=>e.managerForm.skills[a].value=u,type:"range"},null,8,Ht),[[h,e.managerForm.skills[a].value]])])]))),256)),s("a",{onClick:t[26]||(t[26]=l=>m.add("skills")),class:"d-block w-100",href:"javascript:void(0)"},[Kt,c(" Добавить еще навык")])])])],2)])],2)):d("",!0)])])):d("",!0)}const Qt=N(O,[["render",Wt],["__scopeId","data-v-5fd521bb"]]),Xt={class:"container"},Yt={class:"row mb-2"},Zt={class:"col-12"},$t={data(){return{load:!1,bot:null}},computed:{...M(["getCurrentBot"])},mounted(){this.loadCurrentBot()},methods:{loadCurrentBot(i=null){this.$store.dispatch("updateCurrentBot",{bot:i}).then(()=>{this.bot=this.getCurrentBot})}}},ao=Object.assign($t,{__name:"ManagerPage",setup(i){return(t,g)=>(r(),B(x,{active:0,"need-menu":!1},{default:S(()=>[s("div",Xt,[s("div",Yt,[s("div",Zt,[P(Qt,{bot:t.bot},null,8,["bot"])])])])]),_:1}))}});export{ao as default};
