import{_ as $}from"./MainAdminLayout-a45b7daf.js";import{q as a,t as l,v as t,H as h,J as b,D as c,y as _,A as d,P as U,M as k,L as F,x as m,K as C,R as j,F as v,C as f,B as y,S as V,T as B,G as M,O as S}from"./index.es-71d37bd0.js";import{_ as P}from"./BotForm-06ec0fd1.js";import{M as q}from"./ManagerPrfileForm.vue_vue_type_style_index_0_scoped_0d788c3d_lang-41e3f7e4.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                                                 */import"./CompanyList-c0a10ba6.js";import"./Pagination-c0ff4992.js";import"./TelegramChannelHelper-864fe219.js";const x={props:["bot"],data(){return{load:!1,slots:0,promoCodeForm:{code:null}}},computed:{getSelf(){return window.profile}},mounted(){},methods:{submitForm(){let n=new FormData;Object.keys(this.promoCodeForm).forEach(s=>{const e=this.promoCodeForm[s]||"";typeof e=="object"?n.append(s,JSON.stringify(e)):n.append(s,e)}),n.append("bot_id",this.bot.id),this.$store.dispatch("promoCodeActivate",{promoCodeForm:n}).then(s=>{this.slots=s.slots||0,this.promoCodeForm={code:null},this.$emit("callback",s.data),this.$notify("Промокод успешно активирован")}).catch(s=>{this.$notify("Ошибка активации промокода")})}}},O={class:"row"},E={class:"col-12"},L={class:"form-floating mb-3"},I=t("label",{for:"promo-code-field"},"Ваш код",-1),N={key:0,class:"col-12 mb-2"},D={class:"alert alert-success alert-dismissible fade show",role:"alert"},G=t("strong",null,"Внимание",-1),z=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"},null,-1),A={class:"col-12"},H=["disabled"];function T(n,s,e,p,g,o){return a(),l("form",{onSubmit:s[1]||(s[1]=U((...i)=>o.submitForm&&o.submitForm(...i),["prevent"])),class:"py-3"},[t("div",O,[t("div",E,[t("div",L,[h(t("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=i=>g.promoCodeForm.code=i),class:"form-control",id:"promo-code-field",placeholder:"Ваш код",required:""},null,512),[[b,g.promoCodeForm.code]]),I])]),g.slots>0?(a(),l("div",N,[t("div",D,[G,c(" Вам зачислено "+_(g.slots)+" слотов! ",1),z])])):d("",!0),t("div",A,[t("button",{disabled:(g.promoCodeForm.code||"").length===0,type:"submit",class:"btn btn-outline-success w-100 p-3"}," Активировать код ",8,H)])])],32)}const J=w(x,[["render",T]]),R={class:"container"},K=k('<div class="row"><div class="col-12"></div><div class="col-12"><div class="pricing-header p-3 pb-md-4 mx-auto text-center"><h1 class="display-4 fw-normal text-body-emphasis">Пакеты слотов</h1><p class="fs-5 text-body-secondary">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.</p></div></div></div><div class="row row-cols-1 row-cols-md-3 mb-3 text-center"><div class="col"><div class="card mb-4 rounded-3 shadow-sm"><div class="card-header py-3"><h4 class="my-0 fw-normal">Free</h4></div><div class="card-body"><h1 class="card-title pricing-card-title">$0<small class="text-body-secondary fw-light">/mo</small></h1><ul class="list-unstyled mt-3 mb-4"><li>10 users included</li><li>2 GB of storage</li><li>Email support</li><li>Help center access</li></ul><button type="button" class="w-100 btn btn-lg btn-outline-primary">Sign up for free</button></div></div></div><div class="col"><div class="card mb-4 rounded-3 shadow-sm"><div class="card-header py-3"><h4 class="my-0 fw-normal">Pro</h4></div><div class="card-body"><h1 class="card-title pricing-card-title">$15<small class="text-body-secondary fw-light">/mo</small></h1><ul class="list-unstyled mt-3 mb-4"><li>20 users included</li><li>10 GB of storage</li><li>Priority email support</li><li>Help center access</li></ul><button type="button" class="w-100 btn btn-lg btn-primary">Get started</button></div></div></div><div class="col"><div class="card mb-4 rounded-3 shadow-sm border-primary"><div class="card-header py-3 text-bg-primary border-primary"><h4 class="my-0 fw-normal">Enterprise</h4></div><div class="card-body"><h1 class="card-title pricing-card-title">$29<small class="text-body-secondary fw-light">/mo</small></h1><ul class="list-unstyled mt-3 mb-4"><li>30 users included</li><li>15 GB of storage</li><li>Phone and email support</li><li>Help center access</li></ul><button type="button" class="w-100 btn btn-lg btn-primary">Contact us</button></div></div></div></div><div class="table-responsive"><table class="table text-center"><thead><tr><th style="width:34%;"></th><th style="width:22%;">Free</th><th style="width:22%;">Pro</th><th style="width:22%;">Enterprise</th></tr></thead><tbody><tr><th scope="row" class="text-start">Public</th><td><svg class="bi" width="24" height="24"><use xlink:href="#check"></use></svg></td><td><svg class="bi" width="24" height="24"><use xlink:href="#check"></use></svg></td><td><svg class="bi" width="24" height="24"><use xlink:href="#check"></use></svg></td></tr><tr><th scope="row" class="text-start">Private</th><td></td><td><svg class="bi" width="24" height="24"><use xlink:href="#check"></use></svg></td><td><svg class="bi" width="24" height="24"><use xlink:href="#check"></use></svg></td></tr></tbody><tbody><tr><th scope="row" class="text-start">Permissions</th><td><svg class="bi" width="24" height="24"><use xlink:href="#check"></use></svg></td><td><svg class="bi" width="24" height="24"><use xlink:href="#check"></use></svg></td><td><svg class="bi" width="24" height="24"><use xlink:href="#check"></use></svg></td></tr><tr><th scope="row" class="text-start">Sharing</th><td></td><td><svg class="bi" width="24" height="24"><use xlink:href="#check"></use></svg></td><td><svg class="bi" width="24" height="24"><use xlink:href="#check"></use></svg></td></tr><tr><th scope="row" class="text-start">Unlimited members</th><td></td><td><svg class="bi" width="24" height="24"><use xlink:href="#check"></use></svg></td><td><svg class="bi" width="24" height="24"><use xlink:href="#check"></use></svg></td></tr><tr><th scope="row" class="text-start">Extra security</th><td></td><td></td><td><svg class="bi" width="24" height="24"><use xlink:href="#check"></use></svg></td></tr></tbody></table></div>',3),Q=[K],W={props:["bot"]},X=Object.assign(W,{__name:"ManagerPackageList",setup(n){return(s,e)=>(a(),l("div",R,Q))}}),Y={},Z={class:"container py-5"},tt=k('<h6>Список наших уроков</h6><table class="table align-middle mb-0 bg-white"><thead class="bg-light"><tr><th>Название</th><th>Длительность</th><th>Действие</th></tr></thead><tbody><tr><td><div class="d-flex align-items-center"><img src="/images/cashman.jpg" alt="" style="width:45px;height:45px;" class="rounded-circle"><div class="ms-3"><p class="fw-bold mb-1">Вводное занятие</p><p class="text-muted mb-0">Немного деталей и нас и системе в целом</p></div></div></td><td><strong>12:40</strong></td><td><button type="button" class="btn btn-primary btn-sm btn-rounded"> Смотреть урок </button></td></tr><tr><td><div class="d-flex align-items-center"><img src="/images/cashman.jpg" alt="" style="width:45px;height:45px;" class="rounded-circle"><div class="ms-3"><p class="fw-bold mb-1">Урок 1</p><p class="text-muted mb-0">Немного деталей и нас и системе в целом</p></div></div></td><td><strong>05:30</strong></td><td><button type="button" class="btn btn-primary btn-sm btn-rounded"> Смотреть урок </button></td></tr><tr><td><div class="d-flex align-items-center"><img src="/images/cashman.jpg" alt="" style="width:45px;height:45px;" class="rounded-circle"><div class="ms-3"><p class="fw-bold mb-1">Урок 2</p><p class="text-muted mb-0">Немного деталей и нас и системе в целом</p></div></div></td><td><strong>08:10</strong></td><td><button type="button" class="btn btn-primary btn-sm btn-rounded"> Смотреть урок </button></td></tr><tr><td><div class="d-flex align-items-center"><img src="/images/cashman.jpg" alt="" style="width:45px;height:45px;" class="rounded-circle"><div class="ms-3"><p class="fw-bold mb-1">Урок 3</p><p class="text-muted mb-0">Немного деталей и нас и системе в целом</p></div></div></td><td><strong>08:10</strong></td><td><button type="button" class="btn btn-primary btn-sm btn-rounded"> Смотреть урок </button></td></tr><tr><td><div class="d-flex align-items-center"><img src="/images/cashman.jpg" alt="" style="width:45px;height:45px;" class="rounded-circle"><div class="ms-3"><p class="fw-bold mb-1">Урок 4</p><p class="text-muted mb-0">Немного деталей и нас и системе в целом</p></div></div></td><td><strong>08:10</strong></td><td><button type="button" class="btn btn-primary btn-sm btn-rounded"> Смотреть урок </button></td></tr><tr><td><div class="d-flex align-items-center"><img src="/images/cashman.jpg" alt="" style="width:45px;height:45px;" class="rounded-circle"><div class="ms-3"><p class="fw-bold mb-1">Урок 5</p><p class="text-muted mb-0">Немного деталей и нас и системе в целом</p></div></div></td><td><strong>08:10</strong></td><td><button type="button" class="btn btn-primary btn-sm btn-rounded"> Смотреть урок </button></td></tr><tr><td><div class="d-flex align-items-center"><img src="/images/cashman.jpg" alt="" style="width:45px;height:45px;" class="rounded-circle"><div class="ms-3"><p class="fw-bold mb-1">Урок 6</p><p class="text-muted mb-0">Немного деталей и нас и системе в целом</p></div></div></td><td><strong>08:10</strong></td><td><button type="button" class="btn btn-primary btn-sm btn-rounded"> Смотреть урок </button></td></tr></tbody></table>',2),st=[tt];function et(n,s,e,p,g,o){return a(),l("div",Z,st)}const ot=w(Y,[["render",et]]),r=n=>(V("data-v-0d788c3d"),n=n(),B(),n),at={key:0,class:"container shadow-lg border mt-1 mb-1"},lt={class:"row"},it={key:0,class:"col-lg-3 col-md-6 border-right bg-primary"},rt={style:{position:"sticky",top:"0px"},class:"d-flex flex-column align-items-center text-center p-3 py-5"},nt={key:0,class:"text-white"},dt=r(()=>t("strong",{class:"text-uppercase"},"активирована!",-1)),ct={key:1,class:"text-white"},mt={class:"rounded-circle mt-5 mb-5",style:{width:"150px",height:"150px","object-fit":"cover",border:"1px white solid"}},ht={class:"mb-0 text-light"},ut={class:"text-white"},bt={class:"mb-3 my-3"},pt={href:"#","data-bs-toggle":"modal","data-bs-target":"#activate-promo-code",class:"btn btn-link text-white"},gt={class:"text-white"},_t=r(()=>t("i",{class:"fa-solid fa-user-pen mr-2"},null,-1)),vt=r(()=>t("i",{class:"fa-solid fa-graduation-cap mr-2"},null,-1)),ft=r(()=>t("i",{class:"fa-solid fa-robot mr-2"},null,-1)),yt={class:"row"},kt={key:0,class:"col-12 my-3"},wt={class:"row mt-2"},Ft={class:"col-12"},Ut={class:"nav nav-tabs"},Ct={class:"nav-item"},$t={class:"nav-item"},jt={class:"nav-item"},Vt={class:"nav-item"},Bt={class:"nav-item"},Mt={class:"nav-item"},St={key:0,class:"row"},Pt={class:"col-md-6 border-right"},qt={class:"p-3 py-5"},xt=r(()=>t("div",{class:"d-flex justify-content-between align-items-center mb-3"},[t("h4",{class:"text-right"},"Настройки профиля менеджера")],-1)),Ot={class:"col-12"},Et=r(()=>t("label",null,"Укажите Ваше Ф.И.О",-1)),Lt={class:"col-12 mt-3"},It=r(()=>t("label",null,"Введите свой номер телефона",-1)),Nt={class:"col-12"},Dt=r(()=>t("label",null,"Введите свой email адрес",-1)),Gt={class:"col-12"},zt=r(()=>t("label",null,"Укажите город вашего проживания",-1)),At={class:"input-style input-style-2"},Ht=k('<datalist id="datalistCityOptions" data-v-0d788c3d><option value="Краснодар" data-v-0d788c3d></option><option value="Ростов-на-Дону" data-v-0d788c3d></option><option value="Таганрог" data-v-0d788c3d></option><option value="Донецк" data-v-0d788c3d></option><option value="Москва" data-v-0d788c3d></option></datalist>',1),Tt={class:"col-12"},Jt=r(()=>t("p",{class:"mb-3"},[t("em",null,"Напишите о себе любую информацию, которая может иметь для нас значение ")],-1)),Rt=r(()=>t("h6",null,"Дополнительная информация",-1)),Kt={class:"input-style input-style-2"},Qt={key:0,class:"col-12"},Wt=r(()=>t("p",{class:"mb-3"},[t("em",null,"Для того чтоб вы и ваш друг получали больше бонусов воспользуйтесь реферальной программой и введите реферальный код от вашего друга!")],-1)),Xt=r(()=>t("h6",{class:"text-center"},"Введите реферальный код вашего друга",-1)),Yt={class:"input-style input-style-2"},Zt={class:"col-12"},ts=r(()=>t("p",{class:"mb-3"},[t("em",null,"Отлично! Теперь, прежде чем закончить, пожалуйста, прочитайте условия использования и дайте свое согласие на их принятие.")],-1)),ss=r(()=>t("p",null,[c("Перед отправкой данных нужно ознакомиться с "),t("a",{href:"#"},"политикой конфиденциальности"),c(".")],-1)),es={class:"d-flex mb-3"},os={class:"pt-1"},as={"data-activate":"toggle-id-1",class:"font-500 font-13"},ls={key:0},is={key:1},rs={class:"ml-auto mr-4 pr-2"},ns={class:"custom-control ios-switch"},ds=r(()=>t("label",{class:"custom-control-label",for:"toggle-id-1"},null,-1)),cs=["disabled"],ms={class:"col-md-6 border-right"},hs={class:"my-2"},us=r(()=>t("label",{class:"mb-3"},"Загрузи своё персональное фото, мы же должны знать в лицо наших сотрудников",-1)),bs={class:"d-flex justify-content-center flex-wrap"},ps={for:"bot-photos",style:{"margin-right":"10px"},class:"photo-loader ml-2 text-center"},gs=r(()=>t("span",{class:"p-3"},[t("i",{class:"fa-solid fa-image"})],-1)),_s={key:0,class:"d-flex justify-content-center flex-wrap mt-2"},vs={class:"img-preview"},fs={class:"remove"},ys=r(()=>t("i",{class:"fa-regular fa-trash-can"},null,-1)),ks={key:1,class:"d-flex justify-content-center flex-wrap mt-2"},ws={class:"img-preview",style:{"margin-right":"10px"}},Fs={class:"remove"},Us=r(()=>t("i",{class:"fa-regular fa-trash-can"},null,-1)),Cs={class:"mb-2"},$s=r(()=>t("label",null,"Укажите ваш пол",-1)),js={class:"row mb-0"},Vs={class:"col-6 p-1"},Bs=r(()=>t("i",{class:"fa-solid fa-mars font-28 mr-2"},null,-1)),Ms=r(()=>t("span",{class:"text-center text-uppercase my-2"},"Мужчина",-1)),Ss=[Bs,Ms],Ps={class:"col-6 p-1"},qs=r(()=>t("i",{class:"fa-solid fa-mars font-28 mr-2"},null,-1)),xs=r(()=>t("span",{class:"text-center text-uppercase my-2"},"Женщина",-1)),Os=[qs,xs],Es={class:"mb-2"},Ls=r(()=>t("label",null,"Ссылки на ваши соц. сети",-1)),Is={class:"input-group position-relative mb-2"},Ns=["onUpdate:modelValue","aria-label","aria-describedby"],Ds={key:0,class:"input-group-text bg-primary"},Gs=["onClick"],zs=r(()=>t("i",{class:"fa-regular fa-square-minus"},null,-1)),As=[zs],Hs={key:1,class:"row"},Ts={key:2,class:"row"},Js={key:3,class:"row"},Rs={class:"col-12"},Ks=r(()=>t("label",null,"Введите дату своего рождения",-1)),Qs={class:"input-style input-style-2"},Ws={class:"row mt-5"},Xs={class:"col-12"},Ys=r(()=>t("label",null,"Полученное высшее образование",-1)),Zs=r(()=>t("p",{class:"mb-0 small"},[t("em",null,[c("Если еще нет высшего образования, впишите "),t("strong",{class:"text-primary"},'"нет"')])],-1)),te={class:"input-group position-relative mb-2"},se=["onUpdate:modelValue","aria-label","aria-describedby"],ee=["id"],oe=["onClick"],ae=r(()=>t("i",{class:"fa-regular fa-square-minus"},null,-1)),le=[ae],ie=r(()=>t("i",{class:"fa-solid fa-plus mr-2"},null,-1)),re={class:"col-12 mt-3"},ne=r(()=>t("label",null,"Ваши сильные стороны",-1)),de={class:"input-group position-relative mb-2"},ce=["onUpdate:modelValue","aria-label","aria-describedby"],me=["id"],he=["onClick"],ue=r(()=>t("i",{class:"fa-regular fa-square-minus"},null,-1)),be=[ue],pe=r(()=>t("i",{class:"fa-solid fa-plus mr-2"},null,-1)),ge={class:"col-12 mt-3"},_e=r(()=>t("label",null,"Ваши слабые стороны",-1)),ve={class:"input-group position-relative mb-2"},fe=["onUpdate:modelValue","aria-label","aria-describedby"],ye=["id"],ke=["onClick"],we=r(()=>t("i",{class:"fa-regular fa-square-minus"},null,-1)),Fe=[we],Ue=r(()=>t("i",{class:"fa-solid fa-plus mr-2"},null,-1)),Ce={class:"col-12 mt-3"},$e=r(()=>t("label",null,"Ваши профессиональные навыки",-1)),je={class:"mb-2"},Ve={class:"input-group position-relative"},Be=["onUpdate:modelValue","aria-label","aria-describedby"],Me=["id"],Se=["onClick"],Pe=r(()=>t("i",{class:"fa-regular fa-square-minus"},null,-1)),qe=[Pe],xe={class:"range-slider bottom-15 range-slider-icons"},Oe={class:"my-2 text-center font-bold"},Ee={key:0},Le=["onUpdate:modelValue"],Ie=r(()=>t("i",{class:"fa-solid fa-plus mr-2"},null,-1)),Ne={key:4,class:"row"},De={key:5,class:"row"},Ge={class:"col-12 py-3"},ze={key:0,class:"alert alert-warning",role:"alert"},Ae={key:1,class:"table"},He=r(()=>t("thead",null,[t("tr",null,[t("th",{scope:"col"},"#"),t("th",{scope:"col"},"Команда"),t("th",{scope:"col"},"Пояснение"),t("th",{scope:"col"},"Глобальный")])],-1)),Te={key:0},Je=r(()=>t("i",{class:"fa-solid fa-check text-success"},null,-1)),Re=[Je],Ke={key:1},Qe=r(()=>t("i",{class:"fa-solid fa-xmark text-danger"},null,-1)),We=[Qe],Xe={class:"modal fade",id:"activate-promo-code",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},Ye={class:"modal-dialog"},Ze={class:"modal-content"},to={class:"modal-body"},so=r(()=>t("h6",{class:"text-center"},"Активируйте ваш ключ и получите дополнительные слоты",-1)),eo=r(()=>t("div",{class:"modal-footer"},[t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Закрыть")],-1)),oo={props:["bot"],data(){return{tab:0,load:!1,confirm:!1,step:0,botUser:null,isEdit:!1,messages:[],photo:null,botUserForm:{id:null,is_vip:!1,is_admin:!1,is_work:!1,is_manager:!1,is_deliveryman:!1,user_in_location:!1,name:null,phone:null,email:null,birthday:null,age:null,city:null,country:null,address:null,sex:null,is_blocked:null,blocked_message:null},managerForm:{name:null,phone:null,email:null,image:null,birthday:null,city:null,country:null,address:null,sex:!0,referral:null,strengths:[""],weaknesses:[""],educations:[""],social_links:[""],scripts:[],skills:[{title:null,value:50}],info:null}}},watch:{getSelf:function(){this.prepareManager()}},mounted(){this.prepareManager()},computed:{tg(){return window.Telegram.WebApp},getSelf(){return window.profile},currentBot(){return window.currentBot}},methods:{callback(n){this.tab=n},prepareManager(){this.botUser=this.getSelf,this.managerForm.name=this.botUser.name||this.botUser.fio_from_telegram||null,this.managerForm.phone=this.botUser.phone||null,this.managerForm.email=this.botUser.email||null,this.managerForm.birthday=this.botUser.birthday||null,this.managerForm.city=this.botUser.city||null,this.managerForm.country=this.botUser.country||null,this.managerForm.address=this.botUser.address||null,this.managerForm.sex=this.botUser.sex||!0,this.botUser.manager&&(this.managerForm.id=this.botUser.manager.id||null,this.managerForm.social_links=this.botUser.manager.social_links||[""],this.managerForm.skills=this.botUser.manager.skills||[{title:null,value:50}],this.managerForm.weaknesses=this.botUser.manager.weaknesses||[""],this.managerForm.educations=this.botUser.manager.educations||[""],this.managerForm.strengths=this.botUser.manager.strengths||[""],this.managerForm.image=this.botUser.manager.image||null,this.managerForm.scripts=this.botUser.scripts||[]),this.botUserForm.id=this.botUser.id,this.botUserForm.is_vip=this.botUser.is_vip,this.botUserForm.is_admin=this.botUser.is_admin,this.botUserForm.is_work=this.botUser.is_work,this.botUserForm.is_manager=this.botUser.is_manager,this.botUserForm.is_deliveryman=this.botUser.is_deliveryman,this.botUserForm.user_in_location=this.botUser.user_in_location,this.botUserForm.name=this.botUser.name||this.botUser.username||this.botUser.id,this.botUserForm.phone=this.botUser.phone,this.botUserForm.email=this.botUser.email,this.botUserForm.birthday=this.botUser.birthday||null,this.botUserForm.city=this.botUser.city||null,this.botUserForm.country=this.botUser.country||null,this.botUserForm.address=this.botUser.address||null,this.botUserForm.sex=this.botUser.sex||!1,this.botUserForm.is_blocked=this.botUser.blocked_at!=null,this.botUserForm.blocked_message=this.botUser.blocked_message||null,this.botUser.manager||(this.tab=1)},alert(n){this.messages.push(n)},removeMessage(n){this.messages.splice(n,1)},getPhoto(n){return{imageUrl:URL.createObjectURL(n)}},removePhoto(n="photo"){n==="photo"&&(this.photo=null),n==="image"&&(this.managerForm.image=null)},onChangePhotos(n){const s=n.target.files;this.photo=s[0]},nextStep(){this.step++},remove(n,s){this.managerForm[n].splice(s,1)},add(n){n!=="skills"?this.managerForm[n].push(""):this.managerForm[n].push({title:null,value:50})},submitBotUser(){this.$store.dispatch("updateBotUser",{botUserForm:this.botUserForm}).then(()=>{this.isEdit=!1,this.messages=[],this.botUserForm={id:null,is_vip:!1,is_admin:!1,is_work:!1,is_manager:!1,is_deliveryman:!1,user_in_location:!1,name:null,phone:null,email:null,birthday:null,age:null,city:null,country:null,address:null,sex:null,is_blocked:!1},this.$emit("update"),this.$notify("Редактирование данных: Данные успешно обновлены!")}).catch(()=>{this.$notify("Редактирование данных: Ошибка обновления данных")})},submitManager(){this.loading=!0;const n=this.photo||null;let s=new FormData;n&&s.append("images[]",n),Object.keys(this.managerForm).forEach(e=>{const p=this.managerForm[e]||"";typeof p=="object"?s.append(e,JSON.stringify(p)):s.append(e,p)}),s.append("bot_id",this.bot.id),s.append("bot_user_id",this.botUser.id),this.$store.dispatch("saveManager",s).then(e=>{window.location.reload(),this.$notify("Редактирование данных: Данные успешно обновлены!")}).catch(()=>{this.loading=!1})},loadCurrentBot(n=null){this.$store.dispatch("updateCurrentBot",{bot:n}).then(()=>{this.bot=this.getCurrentBot})},prepareCurrentBot(n){this.loadCurrentBot(n),localStorage.setItem("cashman_set_botform_step_index",0),localStorage.setItem("cashman_set_botpage_step_index",2),window.location.href="/bot-page"}}},ao=Object.assign(oo,{__name:"ManagerPrfileForm",setup(n){return(s,e)=>{const p=F("lazy"),g=F("mask");return a(),l(v,null,[s.botUser?(a(),l("div",at,[t("div",lt,[s.botUser.manager?(a(),l("div",it,[t("div",rt,[s.botUser.manager.verified_at!=null?(a(),l("p",nt,[c(" Учетная запись менеджера "),dt])):(a(),l("p",ct," Учетная запись менеджера")),h(t("img",mt,null,512),[[p,s.botUser.manager.image?s.botUser.manager.image:"../images/manager.png"]]),t("p",ht,[c("Приветствуем, "),t("strong",ut,_(s.botUser.name||"Не указано"),1),c("!")]),t("p",bt,[t("a",pt,[c("У вас "),t("strong",gt,_(s.botUser.manager.max_bot_slot_count||0),1),c(" свободных слотов")])]),s.tab===0?(a(),l("a",{key:2,onClick:e[0]||(e[0]=o=>s.tab++),class:"btn btn-outline-light p-3 rounded-5 w-100 mb-2"},[_t,c("Профиль")])):d("",!0),s.tab>0?(a(),l("a",{key:3,onClick:e[1]||(e[1]=o=>s.tab=0),class:"btn btn-outline-light p-3 rounded-5 w-100 mb-2"},"Главный экран")):d("",!0),t("a",{onClick:e[2]||(e[2]=o=>s.tab=10),class:"btn btn-info p-3 rounded-5 w-100 mb-2"},[vt,c("Обучение")]),t("a",{onClick:e[3]||(e[3]=o=>s.tab=11),class:"btn btn-info p-3 rounded-5 w-100 mb-2"},[ft,c("Мои боты")])])])):d("",!0),s.tab===0?(a(),l("div",{key:1,class:m(["col-lg-9 col-md-6",{"col-md-12":!s.botUser.manager}])},[t("div",yt,[s.botUser.manager?(a(),l("div",kt,[s.load?d("",!0):(a(),C(P,{key:0,onCallback:s.prepareCurrentBot},null,8,["onCallback"]))])):d("",!0)])],2)):d("",!0),s.tab>0&&s.tab<10?(a(),l("div",{key:2,class:m(["col-lg-9 col-md-6",{"col-md-12":!s.botUser.manager}])},[t("div",wt,[t("div",Ft,[t("ul",Ut,[t("li",Ct,[t("a",{class:m(["nav-link",{active:s.tab===1}]),onClick:e[4]||(e[4]=o=>s.tab=1),"aria-current":"page",href:"#"}," Профиль ",2)]),t("li",$t,[t("a",{class:m(["nav-link",{active:s.tab===6}]),href:"#",onClick:e[5]||(e[5]=o=>s.tab=6)}," Мои скрипты ",2)]),t("li",jt,[t("a",{class:m(["nav-link disabled",{active:s.tab===2}]),href:"#",onClick:e[6]||(e[6]=o=>s.tab=2)}," Документы ",2)]),t("li",Vt,[t("a",{class:m(["nav-link disabled",{active:s.tab===3}]),onClick:e[7]||(e[7]=o=>s.tab=3),href:"#"}," Клиенты & Боты ",2)]),t("li",Bt,[t("a",{class:m(["nav-link disabled",{active:s.tab===4}]),onClick:e[8]||(e[8]=o=>s.tab=4),href:"#"}," Навыки и умения ",2)]),t("li",Mt,[t("a",{class:m(["nav-link disabled",{active:s.tab===5}]),onClick:e[9]||(e[9]=o=>s.tab=5),href:"#"}," Статистика ",2)])])])]),s.tab===1?(a(),l("div",St,[t("form",{onSubmit:e[23]||(e[23]=U((...o)=>s.submitManager&&s.submitManager(...o),["prevent"])),class:"row mb-0"},[t("div",Pt,[t("div",qt,[xt,t("div",Ot,[Et,h(t("input",{type:"text",class:"form-control font-14 p-3",placeholder:"Петров Петр Семенович","aria-label":"managerForm-name","onUpdate:modelValue":e[10]||(e[10]=o=>s.managerForm.name=o),"aria-describedby":"managerForm-name",required:""},null,512),[[b,s.managerForm.name]])]),t("div",Lt,[It,h(t("input",{type:"text",class:"form-control font-14 p-3 rounded-s border-theme","onUpdate:modelValue":e[11]||(e[11]=o=>s.managerForm.phone=o),placeholder:"+7(000)000-00-00","aria-label":"managerForm-phone","aria-describedby":"managerForm-phone",required:""},null,512),[[g,"+7(###)###-##-##"],[b,s.managerForm.phone]])]),t("div",Nt,[Dt,h(t("input",{type:"email",class:"form-control font-14 p-3 rounded-s border-theme","onUpdate:modelValue":e[12]||(e[12]=o=>s.managerForm.email=o),placeholder:"inbox@your-cashman.com","aria-label":"managerForm-phone","aria-describedby":"managerForm-email",required:""},null,512),[[b,s.managerForm.email]])]),t("div",Gt,[zt,t("div",At,[h(t("input",{type:"text","onUpdate:modelValue":e[13]||(e[13]=o=>s.managerForm.city=o),list:"datalistCityOptions",class:"form-control font-14 p-3 rounded-s border-theme",placeholder:"Город проживания","aria-label":"managerForm-city","aria-describedby":"managerForm-city",required:""},null,512),[[b,s.managerForm.city]]),Ht])]),t("div",Tt,[Jt,Rt,t("div",Kt,[h(t("textarea",{type:"text",class:"form-control text-left font-14 p-3 rounded-s border-theme","onUpdate:modelValue":e[14]||(e[14]=o=>s.managerForm.info=o),placeholder:"Дополнительная информация",style:{"min-height":"200px"},"aria-label":"managerForm-referral","aria-describedby":"managerForm-info"},`
                        `,512),[[b,s.managerForm.info]])])]),s.botUser.manager?d("",!0):(a(),l("div",Qt,[Wt,Xt,t("div",Yt,[h(t("input",{type:"text",class:"form-control text-center font-14 p-3 rounded-s border-theme","onUpdate:modelValue":e[15]||(e[15]=o=>s.managerForm.referral=o),placeholder:"Реферальный код","aria-label":"managerForm-referral","aria-describedby":"managerForm-referral"},null,512),[[b,s.managerForm.referral]])])])),t("div",Zt,[ts,ss,t("div",es,[t("div",os,[t("p",as,[s.managerForm.sex?d("",!0):(a(),l("span",ls,"С правилами ознакомилась")),s.managerForm.sex?(a(),l("span",is,"С правилами ознакомлен")):d("",!0)])]),t("div",rs,[t("div",ns,[h(t("input",{"onUpdate:modelValue":e[16]||(e[16]=o=>s.confirm=o),type:"checkbox",class:"ios-input",id:"toggle-id-1"},null,512),[[j,s.confirm]]),ds])])]),t("button",{type:"submit",disabled:!s.confirm||s.load,class:"btn btn-primary mb-2 text-uppercase w-100"}," Отправить анкету ",8,cs)])])]),t("div",ms,[t("div",hs,[us,t("div",bs,[t("label",ps,[gs,t("input",{type:"file",id:"bot-photos",accept:"image/*",onChange:e[17]||(e[17]=(...o)=>s.onChangePhotos&&s.onChangePhotos(...o)),style:{display:"none"}},null,32)])]),s.managerForm.image?(a(),l("div",_s,[t("div",vs,[h(t("img",null,null,512),[[p,s.managerForm.image]]),t("div",fs,[t("a",{onClick:e[18]||(e[18]=o=>s.removePhoto("image")),class:"cursor-pointer"},[ys,c(" удалить фото")])])])])):d("",!0),s.photo?(a(),l("div",ks,[t("div",ws,[h(t("img",null,null,512),[[p,s.getPhoto(s.photo).imageUrl]]),t("div",Fs,[t("a",{onClick:e[19]||(e[19]=o=>s.removePhoto("photo")),class:"cursor-pointer"},[Us,c(" удалить фото")])])])])):d("",!0)]),t("div",Cs,[$s,t("div",js,[t("div",Vs,[t("div",{class:m([{"btn-primary text-white":s.managerForm.sex},"btn btn-outline-secondary w-100 d-flex justify-content-center align-items-center"]),onClick:e[20]||(e[20]=o=>s.managerForm.sex=!0)},Ss,2)]),t("div",Ps,[t("div",{class:m([{"btn-primary text-white":!s.managerForm.sex},"btn btn-outline-secondary w-100 d-flex justify-content-center align-items-center"]),onClick:e[21]||(e[21]=o=>s.managerForm.sex=!1)},Os,2)])])]),t("div",Es,[Ls,(a(!0),l(v,null,f(s.managerForm.social_links,(o,i)=>(a(),l("div",Is,[h(t("input",{type:"url",class:"form-control font-14 p-3 rounded-s border-theme","onUpdate:modelValue":u=>s.managerForm.social_links[i]=u,placeholder:"Ссылка на соц. сеть","aria-label":"managerForm-social-links-"+i,"aria-describedby":"managerForm-social-links-"+i},null,8,Ns),[[b,s.managerForm.social_links[i]]]),i>0?(a(),l("span",Ds,[t("a",{href:"javascript:void(0)",onClick:u=>s.remove("social_links",i),class:"text-white"},As,8,Gs)])):d("",!0)]))),256)),t("a",{onClick:e[22]||(e[22]=o=>s.add("social_links")),class:"d-block w-100 py-3 text-center",href:"javascript:void(0)"},"Добавить еще ссылку")])])],32)])):d("",!0),s.tab===2?(a(),l("div",Hs)):d("",!0),s.tab===3?(a(),l("div",Ts)):d("",!0),s.tab===4?(a(),l("div",Js,[t("div",Rs,[Ks,t("div",Qs,[h(t("input",{type:"date",class:"form-control font-14 p-3 rounded-s border-theme","onUpdate:modelValue":e[24]||(e[24]=o=>s.managerForm.birthday=o),"aria-label":"managerForm-birthday","aria-describedby":"managerForm-birthday",required:""},null,512),[[b,s.managerForm.birthday]])])]),t("div",{class:m(["col-md-6",{"col-md-6":!s.botUser.manager}])},[t("div",Ws,[t("div",Xs,[Ys,Zs,(a(!0),l(v,null,f(s.managerForm.educations,(o,i)=>(a(),l("div",te,[h(t("input",{type:"text",class:"form-control font-14 p-3","onUpdate:modelValue":u=>s.managerForm.educations[i]=u,placeholder:"Название ВУЗа, специализация, уровень образования","aria-label":"managerForm-educations-"+i,"aria-describedby":"managerForm-educations-"+i,required:""},null,8,se),[[b,s.managerForm.educations[i]]]),i>0?(a(),l("span",{key:0,class:"input-group-text bg-primary",id:"managerForm-educations-"+i},[t("a",{href:"javascript:void(0)",onClick:u=>s.remove("educations",i),class:"text-white"},le,8,oe)],8,ee)):d("",!0)]))),256)),t("a",{onClick:e[25]||(e[25]=o=>s.add("educations")),class:"d-block w-100",href:"javascript:void(0)"},[ie,c("Добавить еще высшее образование")])]),t("div",re,[ne,(a(!0),l(v,null,f(s.managerForm.strengths,(o,i)=>(a(),l("div",de,[h(t("input",{type:"text",class:"form-control font-14 p-3","onUpdate:modelValue":u=>s.managerForm.strengths[i]=u,placeholder:"Ваше сильное качество","aria-label":"managerForm-strengths-"+i,"aria-describedby":"managerForm-strengths-"+i,required:""},null,8,ce),[[b,s.managerForm.strengths[i]]]),i>0?(a(),l("span",{key:0,class:"input-group-text bg-primary",id:"managerForm-strengths-"+i},[t("a",{href:"javascript:void(0)",onClick:u=>s.remove("strengths",i),class:"text-white"},be,8,he)],8,me)):d("",!0)]))),256)),t("a",{onClick:e[26]||(e[26]=o=>s.add("strengths")),class:"d-block w-100",href:"javascript:void(0)"},[pe,c("Добавить еще сильные стороны")])]),t("div",ge,[_e,(a(!0),l(v,null,f(s.managerForm.weaknesses,(o,i)=>(a(),l("div",ve,[h(t("input",{type:"text",class:"form-control font-14 p-3","onUpdate:modelValue":u=>s.managerForm.weaknesses[i]=u,placeholder:"Ваша слабая сторона","aria-label":"managerForm-weaknesses-"+i,"aria-describedby":"managerForm-weaknesses-"+i,required:""},null,8,fe),[[b,s.managerForm.weaknesses[i]]]),i>0?(a(),l("span",{key:0,class:"input-group-text bg-primary",id:"managerForm-weaknesses-"+i},[i>0?(a(),l("a",{key:0,href:"javascript:void(0)",onClick:u=>s.remove("weaknesses",i),class:"text-white"},Fe,8,ke)):d("",!0)],8,ye)):d("",!0)]))),256)),t("a",{onClick:e[27]||(e[27]=o=>s.add("weaknesses")),class:"d-block w-100",href:"javascript:void(0)"},[Ue,c(" Добавить еще слабые стороны")])]),t("div",Ce,[$e,(a(!0),l(v,null,f(s.managerForm.skills,(o,i)=>(a(),l("div",je,[t("div",Ve,[h(t("input",{type:"text",class:"form-control font-14 p-3","onUpdate:modelValue":u=>s.managerForm.skills[i].title=u,placeholder:"Название навыка","aria-label":"managerForm-skills-"+i,"aria-describedby":"managerForm-skills-"+i,required:""},null,8,Be),[[b,s.managerForm.skills[i].title]]),i>0?(a(),l("span",{key:0,class:"input-group-text bg-primary",id:"managerForm-skills-"+i},[i>0?(a(),l("a",{key:0,href:"javascript:void(0)",onClick:u=>s.remove("skills",i),class:"text-white"},qe,8,Se)):d("",!0)],8,Me)):d("",!0)]),t("div",xe,[t("p",Oe,[s.managerForm.skills[i].title?(a(),l("span",Ee,_(s.managerForm.skills[i].title)+" прокачан на ",1)):d("",!0),c(_(s.managerForm.skills[i].value)+"% ",1)]),h(t("input",{class:"form-range w-100",max:"100","onUpdate:modelValue":u=>s.managerForm.skills[i].value=u,type:"range"},null,8,Le),[[b,s.managerForm.skills[i].value]])])]))),256)),t("a",{onClick:e[28]||(e[28]=o=>s.add("skills")),class:"d-block w-100",href:"javascript:void(0)"},[Ie,c(" Добавить еще навык")])])])],2)])):d("",!0),s.tab===5?(a(),l("div",Ne)):d("",!0),s.tab===6?(a(),l("div",De,[t("div",Ge,[s.botUser.manager.scripts.length===0?(a(),l("div",ze," Внимание! У вас нет ни одного глобального скрипта для использования. ")):(a(),l("table",Ae,[He,t("tbody",null,[(a(!0),l(v,null,f(s.botUser.manager.scripts,(o,i)=>(a(),l("tr",{class:m({"border-info":o.deleted_at==null,"border-danger":o.deleted_at!=null})},[t("th",{scope:"row",class:m({"text-danger":o.deleted_at!=null})},_(o.id||"Нет идентификатора"),3),t("td",{class:m({"text-danger":o.deleted_at!=null})},_(o.command||"Нет команды"),3),t("td",{class:m({"text-danger":o.deleted_at!=null})},_(o.comment||"Пояснение не указано"),3),t("td",null,[o.is_global?(a(),l("span",Te,Re)):(a(),l("span",Ke,We))])],2))),256))])]))])])):d("",!0)],2)):d("",!0),s.tab===10?(a(),l("div",{key:3,class:m(["col-lg-9 col-md-6",{"col-md-12":!s.botUser.manager}])},[y(ot)],2)):d("",!0),s.tab===11?(a(),l("div",{key:4,class:m(["col-lg-9 col-md-6",{"col-md-12":!s.botUser.manager}])},[y(q,{onCallback:s.callback},null,8,["onCallback"])],2)):d("",!0),s.tab===12?(a(),l("div",{key:5,class:m(["col-lg-9 col-md-6",{"col-md-12":!s.botUser.manager}])},[y(X,{bot:n.bot},null,8,["bot"])],2)):d("",!0)])])):d("",!0),t("div",Xe,[t("div",Ye,[t("div",Ze,[t("div",to,[so,y(J,{onCallback:s.prepareManager,bot:n.bot},null,8,["onCallback","bot"])]),eo])])])],64)}}}),lo=w(ao,[["__scopeId","data-v-0d788c3d"]]),io={class:"container"},ro={class:"row mb-2"},no={class:"col-12"},co={data(){return{load:!1,bot:null}},computed:{...M(["getCurrentBot"])},mounted(){this.loadCurrentBot()},methods:{loadCurrentBot(n=null){this.$store.dispatch("updateCurrentBot",{bot:n}).then(()=>{this.bot=this.getCurrentBot})}}},yo=Object.assign(co,{__name:"ManagerPage",setup(n){return(s,e)=>(a(),C($,{active:0,"need-menu":!1},{default:S(()=>[t("div",io,[t("div",ro,[t("div",no,[y(lo,{bot:s.bot},null,8,["bot"])])])])]),_:1}))}});export{yo as default};