import{L as F,q as n,t as r,v as e,H as u,J as _,A as c,D as b,y as p,F as g,C as f,x as v,T as C,P as V,M as w,U as $,W as M,G as j,R as B,B as x,O as q,u as E,a2 as S,N as T,K as L}from"./index.es-bac3219e.js";import{_ as P}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                                                 */const N={props:["bot"],data(){return{isEdit:!1,messages:[],load:!1,confirm:!1,step:0,botUser:null,botUserForm:{id:null,is_vip:!1,is_admin:!1,is_work:!1,is_manager:!1,is_deliveryman:!1,user_in_location:!1,name:null,phone:null,email:null,birthday:null,age:null,city:null,country:null,address:null,sex:null,is_blocked:null,blocked_message:null},managerForm:{name:null,phone:null,email:null,image:null,birthday:null,city:null,country:null,address:null,sex:!0,referral:null,strengths:[""],weaknesses:[""],educations:[""],social_links:[""],skills:[{title:null,value:50}],info:null}}},watch:{getSelf:function(){this.prepareManager()}},mounted(){this.prepareManager()},computed:{tg(){return window.Telegram.WebApp},getSelf(){return window.profile},currentBot(){return window.currentBot},isManagerVerified(){return!(!this.botUser||!this.botUser.manager)}},methods:{prepareManager(){this.botUser=this.getSelf,this.managerForm.name=this.botUser.name||this.botUser.fio_from_telegram||null,this.managerForm.phone=this.botUser.phone||null,this.managerForm.email=this.botUser.email||null,this.managerForm.birthday=this.botUser.birthday||null,this.managerForm.city=this.botUser.city||null,this.managerForm.country=this.botUser.country||null,this.managerForm.address=this.botUser.address||null,this.managerForm.sex=this.botUser.sex||!0,this.botUser.manager&&(this.managerForm.social_links=this.botUser.manager.social_links||[""],this.managerForm.skills=this.botUser.manager.skills||[{title:null,value:50}],this.managerForm.weaknesses=this.botUser.manager.weaknesses||[""],this.managerForm.educations=this.botUser.manager.educations||[""],this.managerForm.strengths=this.botUser.manager.strengths||[""]),this.botUserForm.id=this.botUser.id,this.botUserForm.is_vip=this.botUser.is_vip,this.botUserForm.is_admin=this.botUser.is_admin,this.botUserForm.is_work=this.botUser.is_work,this.botUserForm.is_manager=this.botUser.is_manager,this.botUserForm.is_deliveryman=this.botUser.is_deliveryman,this.botUserForm.user_in_location=this.botUser.user_in_location,this.botUserForm.name=this.botUser.name||this.botUser.username||this.botUser.id,this.botUserForm.phone=this.botUser.phone,this.botUserForm.email=this.botUser.email,this.botUserForm.birthday=this.botUser.birthday||null,this.botUserForm.city=this.botUser.city||null,this.botUserForm.country=this.botUser.country||null,this.botUserForm.address=this.botUser.address||null,this.botUserForm.sex=this.botUser.sex||!1,this.botUserForm.is_blocked=this.botUser.blocked_at!=null,this.botUserForm.blocked_message=this.botUser.blocked_message||null},alert(o){this.messages.push(o)},removeMessage(o){this.messages.splice(o,1)},getPhoto(o){return{imageUrl:URL.createObjectURL(o)}},removePhoto(o){this.managerForm.image=null},onChangePhotos(o){const t=o.target.files;this.managerForm.image=t[0],console.log(t)},nextStep(){this.step++},remove(o,t){this.managerForm[o].splice(t,1)},add(o){o!=="skills"?this.managerForm[o].push(""):this.managerForm[o].push({title:null,value:50})},submitBotUser(){this.$store.dispatch("updateBotUser",{botUserForm:this.botUserForm}).then(()=>{this.isEdit=!1,this.messages=[],this.botUserForm={id:null,is_vip:!1,is_admin:!1,is_work:!1,is_manager:!1,is_deliveryman:!1,user_in_location:!1,name:null,phone:null,email:null,birthday:null,age:null,city:null,country:null,address:null,sex:null,is_blocked:!1},this.$emit("update"),this.$botNotification.notification("Редактирование данных","Данные успешно обновлены!")}).catch(()=>{this.$botNotification.warning("Редактирование данных","Ошибка обновления данных")})},submitManager(){this.loading=!0;let o=new FormData;Object.keys(this.managerForm).forEach(t=>{const m=this.managerForm[t]||"";typeof m=="object"?o.append(t,JSON.stringify(m)):o.append(t,m)}),o.set("image",this.managerForm.image),o.append("bot_id",this.bot.id),o.append("bot_user_id",this.botUser.id),this.$store.dispatch("saveManager",o).then(t=>{window.location.reload()}).catch(()=>{this.loading=!1})}}},i=o=>($("data-v-ccb9c047"),o=o(),M(),o),O={key:0,class:"card mb-2"},D={key:0,class:"card-body"},I={class:"col-12 d-flex justify-content-center mb-3"},R={class:"img-avatar"},A={class:"img-avatar"},z={class:"col-12"},W=i(()=>e("p",{class:"mb-3"},[e("em",null,[b("Приветствую Вас, "),e("strong",null,"Дорогой друг!"),b(" Я хочу поздравить Вас и дать возможность получать неограниченные заработка вместе с нашим сервисом! Для начала нам нужно с Вами познакомиться - это поможет нам понимать с кем мы становимся крепкими друзьями! Я задам Вам два блока вопросов - по легче - вопросы общего плана и по сложнее - вопросы профессиональной сферы.")])],-1)),G=i(()=>e("h6",{class:"text-center"},"Как мне к Вам обращаться?",-1)),J={class:"input-style input-style-2"},H={class:"col-12"},K=i(()=>e("p",{class:"mb-3"},"Загрузи свой персональное фото, мы же должны знать в лицо наших сотрудников",-1)),X={class:"photo-preview d-flex justify-content-center flex-wrap w-100"},Q={for:"bot-photos",style:{"margin-right":"10px"},class:"photo-loader ml-2"},Y=i(()=>e("span",null,"+",-1)),Z={key:0,class:"mb-2 img-preview",style:{"margin-right":"10px"}},ee={class:"remove"},te=i(()=>e("i",{class:"fa-regular fa-trash-can"},null,-1)),se=[te],oe={class:"col-12"},ae=i(()=>e("h4",{class:"text-center my-5 text-primary"}," Общий блок вопросов ",-1)),ie={key:0,class:"mb-3"},ne=i(()=>e("h6",{class:"text-center"},"Введите свой номер телефона",-1)),re={class:"input-style input-style-2"},le={class:"col-12"},ce=i(()=>e("p",{class:"mb-3"},[e("em",null,"Для своевременного оповещения Вас о наших нововведениях мы используем рассылку через email. Вам необходимо указать его для удобства получения актуальной информации и отчетов о Вашей работе и доходе.")],-1)),de=i(()=>e("h6",{class:"text-center"},"Введите свой email адрес",-1)),me={class:"input-style input-style-2"},he={class:"col-12"},ue=i(()=>e("p",{class:"mb-3"},[e("em",null,"Для связи с Вами нам также понадобятся ссылки на Ваши социальные сети!")],-1)),be=i(()=>e("h6",{class:"text-center"},"Ссылки на ваши соц. сети",-1)),_e={class:"input-group position-relative mb-2"},pe=["onUpdate:modelValue","aria-label","aria-describedby"],ge={key:0,class:"input-group-text bg-primary"},ve=["onClick"],fe=i(()=>e("i",{class:"fa-regular fa-square-minus"},null,-1)),ye=[fe],ke={class:"col-12"},Fe=i(()=>e("p",{class:"mb-3"},[e("em",null,"Чтобы я мог обращаться к Вам правильно, скажи мне, какого Вы пола?")],-1)),xe=i(()=>e("h6",{class:"text-center"},"Вы мужчина или женщина?",-1)),we={class:"row mb-0"},Ue={class:"col-6 p-3"},Ce=i(()=>e("i",{class:"fa-solid fa-mars font-28"},null,-1)),Ve=i(()=>e("span",{class:"text-center text-uppercase my-2"},"Мужчина",-1)),$e=[Ce,Ve],Me={class:"col-6 p-3"},je=i(()=>e("i",{class:"fa-solid fa-mars font-28"},null,-1)),Be=i(()=>e("span",{class:"text-center text-uppercase my-2"},"Женщина",-1)),qe=[je,Be],Ee={class:"col-12"},Se=i(()=>e("p",{class:"mb-3"},[e("em",null,"Для того, чтобы я мог поздравлять Вас с днем рождения и сделать Вам приятно, мне нужно знать, когда он у Вас")],-1)),Te=i(()=>e("h6",{class:"text-center"},"Введите свой день рождения",-1)),Le={class:"input-style input-style-2"},Pe={class:"col-12"},Ne=i(()=>e("p",{class:"mb-3"},[e("em",null,"Чтобы я мог показывать Вам информацию, актуальную для Вашего города, мне нужно знать город Вашего проживания\\работы.")],-1)),Oe=i(()=>e("h6",{class:"text-center"},"Какой у Вас город?",-1)),De={class:"input-style input-style-2"},Ie=w('<datalist id="datalistCityOptions" data-v-ccb9c047><option value="Краснодар" data-v-ccb9c047></option><option value="Ростов-на-Дону" data-v-ccb9c047></option><option value="Таганрог" data-v-ccb9c047></option><option value="Донецк" data-v-ccb9c047></option><option value="Москва" data-v-ccb9c047></option></datalist>',1),Re=i(()=>e("div",{class:"col-12"},[e("h4",{class:"text-center my-5 text-primary"}," Профессиональный блок вопросов ")],-1)),Ae={class:"col-12"},ze=i(()=>e("h6",{class:"text-center"},"Полученное высшее образование",-1)),We=i(()=>e("p",{class:"mb-0 text-center"},[e("em",null,[b("Если еще нет высшего образования, впишите "),e("strong",{class:"text-primary"},'"нет"')])],-1)),Ge={class:"input-group position-relative mb-2"},Je=["onUpdate:modelValue","aria-label","aria-describedby"],He=["id"],Ke=["onClick"],Xe=i(()=>e("i",{class:"fa-regular fa-square-minus"},null,-1)),Qe=[Xe],Ye={class:"col-12"},Ze=i(()=>e("h6",{class:"text-center"},"Ваши сильные стороны",-1)),et={class:"input-group position-relative mb-2"},tt=["onUpdate:modelValue","aria-label","aria-describedby"],st=["id"],ot=["onClick"],at=i(()=>e("i",{class:"fa-regular fa-square-minus"},null,-1)),it=[at],nt={class:"col-12"},rt=i(()=>e("p",{class:"mb-3"},[e("em",null,"Слабые стороны есть у всех! Нам нужно понимать в чем Вас стоит прокачать и в каких проблемных для Вас местах оказать помощь и т.д.")],-1)),lt=i(()=>e("h6",{class:"text-center"},"Ваши слабые стороны",-1)),ct={class:"input-group position-relative mb-2"},dt=["onUpdate:modelValue","aria-label","aria-describedby"],mt=["id"],ht=["onClick"],ut=i(()=>e("i",{class:"fa-regular fa-square-minus"},null,-1)),bt=[ut],_t={class:"col-12"},pt=i(()=>e("p",{class:"mb-3"},[e("em",null,"А теперь о ваших навыка - впишите название навыка и укажите % владения навыком при помощи ползунка.")],-1)),gt=i(()=>e("h6",{class:"text-center"},"Ваши профессиональные навыки",-1)),vt={class:"mb-2"},ft={class:"input-group position-relative"},yt=["onUpdate:modelValue","aria-label","aria-describedby"],kt=["id"],Ft=["onClick"],xt=i(()=>e("i",{class:"fa-regular fa-square-minus"},null,-1)),wt=[xt],Ut={class:"range-slider bottom-15 range-slider-icons"},Ct={class:"my-2 text-center font-bold"},Vt={key:0},$t=["onUpdate:modelValue"],Mt={class:"col-12"},jt=i(()=>e("p",{class:"mb-3"},[e("em",null,"Напишите о себе любую информацию, которая может иметь для нас значение ")],-1)),Bt=i(()=>e("h6",{class:"text-center"},"Дополнительная информация",-1)),qt={class:"input-style input-style-2"},Et={class:"col-12"},St=i(()=>e("p",{class:"mb-3"},[e("em",null,"Для того чтоб вы и ваш друг получали больше бонусов воспользуйтесь реферальной программой и введите реферальный код от вашего друга!")],-1)),Tt=i(()=>e("h6",{class:"text-center"},"Введите реферальный код вашего друга",-1)),Lt={class:"input-style input-style-2"},Pt={class:"col-12"},Nt=i(()=>e("p",{class:"mb-3"},[e("em",null,"Отлично! Теперь, прежде чем закончить, пожалуйста, прочитайте условия использования и дайте свое согласие на их принятие.")],-1)),Ot=i(()=>e("p",null,[b("Перед отправкой данных нужно ознакомиться с "),e("a",{href:"#"},"политикой конфиденциальности"),b(".")],-1)),Dt={class:"d-flex mb-3"},It={class:"pt-1"},Rt={"data-activate":"toggle-id-1",class:"font-500 font-13"},At={key:0},zt={key:1},Wt={class:"ml-auto mr-4 pr-2"},Gt={class:"custom-control ios-switch"},Jt=i(()=>e("label",{class:"custom-control-label",for:"toggle-id-1"},null,-1)),Ht=["disabled"],Kt={key:1,class:"card-body"},Xt={class:"mb-0"},Qt={class:"text-primary"},Yt={class:"mb-3"},Zt={class:"text-primary"},es=w('<a href="/manager-page" class="btn btn-outline-primary w-100 mb-3" data-v-ccb9c047>Перейти в ваш профиль</a><h6 class="text-center my-3" data-v-ccb9c047> Ваши возможности</h6><ol class="list-group list-group-numbered" data-v-ccb9c047><li class="list-group-item" data-v-ccb9c047>Регистрация клиента</li><li class="list-group-item" data-v-ccb9c047>Создание ботов любой конфигурации и сложности</li><li class="list-group-item" data-v-ccb9c047>Выставление счетов на оплату и прием платеже за обслуживание</li><li class="list-group-item" data-v-ccb9c047>Реферальная программа</li><li class="list-group-item" data-v-ccb9c047>Профессиональное обучение</li><li class="list-group-item" data-v-ccb9c047>Использование ресурсов компании для привлечения клиентов: маркетологи, дизайнеры, smm-специалисты, программисты </li><li class="list-group-item" data-v-ccb9c047>Тех.поддержка по системе</li></ol><h6 class="text-center my-3" data-v-ccb9c047> Ваши бонусы</h6><ol class="list-group list-group-numbered" data-v-ccb9c047><li class="list-group-item" data-v-ccb9c047>Оплата за регистрацию клиента (после его оплаты)</li><li class="list-group-item" data-v-ccb9c047>Начисление персональной скидки (сгораемой и несгораемой)</li><li class="list-group-item" data-v-ccb9c047>Получение бонусных доходов с реферальной программы 1, 2 и 3 уровня: ваши друзья работают, а вы получаете доход. Доход ограничен лишь числом друзей. </li></ol>',5);function ts(o,t,m,k,s,d){const y=F("lazy"),U=F("mask");return s.botUser?(n(),r("div",O,[d.isManagerVerified?c("",!0):(n(),r("div",D,[e("form",{onSubmit:t[17]||(t[17]=V((...l)=>d.submitManager&&d.submitManager(...l),["prevent"])),class:"row mb-0"},[e("div",I,[e("div",R,[u(e("img",A,null,512),[[y,"/images/manager.png"]])])]),e("div",z,[W,G,e("div",J,[u(e("input",{type:"text",class:"form-control text-center font-14 p-3 rounded-s border-theme",placeholder:"Петров Петр Семенович","aria-label":"managerForm-name","onUpdate:modelValue":t[0]||(t[0]=l=>s.managerForm.name=l),"aria-describedby":"managerForm-name",required:""},null,512),[[_,s.managerForm.name]])])]),e("div",H,[K,e("div",X,[e("label",Q,[Y,e("input",{type:"file",id:"bot-photos",accept:"image/*",onChange:t[1]||(t[1]=(...l)=>d.onChangePhotos&&d.onChangePhotos(...l)),style:{display:"none"}},null,32)]),s.managerForm.image?(n(),r("div",Z,[u(e("img",null,null,512),[[y,d.getPhoto(s.managerForm.image).imageUrl]]),e("div",ee,[e("a",{onClick:t[2]||(t[2]=l=>d.removePhoto())},se)])])):c("",!0)])]),e("div",oe,[ae,s.managerForm.name?(n(),r("p",ie,[e("em",null,[b("- Отлично, "),e("strong",null,p(s.managerForm.name),1),b("! А теперь, чтобы Вы могли пользоваться всеми моими функциями, мне нужен Ваш номер телефона. Можете ввести его?")])])):c("",!0),ne,e("div",re,[u(e("input",{type:"text",class:"form-control text-center font-14 p-3 rounded-s border-theme","onUpdate:modelValue":t[3]||(t[3]=l=>s.managerForm.phone=l),placeholder:"+7(000)000-00-00","aria-label":"managerForm-phone","aria-describedby":"managerForm-phone",required:""},null,512),[[U,"+7(###)###-##-##"],[_,s.managerForm.phone]])])]),e("div",le,[ce,de,e("div",me,[u(e("input",{type:"email",class:"form-control text-center font-14 p-3 rounded-s border-theme","onUpdate:modelValue":t[4]||(t[4]=l=>s.managerForm.email=l),placeholder:"inbox@your-cashman.com","aria-label":"managerForm-phone","aria-describedby":"managerForm-email",required:""},null,512),[[_,s.managerForm.email]])])]),e("div",he,[ue,be,(n(!0),r(g,null,f(s.managerForm.social_links,(l,a)=>(n(),r("div",_e,[u(e("input",{type:"url",class:"form-control text-center font-14 p-3 rounded-s border-theme","onUpdate:modelValue":h=>s.managerForm.social_links[a]=h,placeholder:"Ссылка на соц. сеть","aria-label":"managerForm-social-links-"+a,"aria-describedby":"managerForm-social-links-"+a,required:""},null,8,pe),[[_,s.managerForm.social_links[a]]]),a>0?(n(),r("span",ge,[e("a",{href:"javascript:void(0)",onClick:h=>d.remove("social_links",a),class:"text-white"},ye,8,ve)])):c("",!0)]))),256)),e("a",{onClick:t[5]||(t[5]=l=>d.add("social_links")),class:"d-block w-100 py-3 text-center",href:"javascript:void(0)"},"Добавить еще ссылку")]),e("div",ke,[Fe,xe,e("div",we,[e("div",Ue,[e("div",{class:v([{"btn-primary text-white":s.managerForm.sex},"btn btn-outline-secondary w-100 p-2 d-flex justify-content-between flex-column align-items-center"]),onClick:t[6]||(t[6]=l=>s.managerForm.sex=!0)},$e,2)]),e("div",Me,[e("div",{class:v([{"btn-primary text-white":!s.managerForm.sex},"btn btn-outline-secondary w-100 p-2 d-flex justify-content-between flex-column align-items-center"]),onClick:t[7]||(t[7]=l=>s.managerForm.sex=!1)},qe,2)])])]),e("div",Ee,[Se,Te,e("div",Le,[u(e("input",{type:"date",class:"form-control text-center font-14 p-3 rounded-s border-theme","onUpdate:modelValue":t[8]||(t[8]=l=>s.managerForm.birthday=l),"aria-label":"managerForm-birthday","aria-describedby":"managerForm-birthday",required:""},null,512),[[_,s.managerForm.birthday]])])]),e("div",Pe,[Ne,Oe,e("div",De,[u(e("input",{type:"text","onUpdate:modelValue":t[9]||(t[9]=l=>s.managerForm.city=l),list:"datalistCityOptions",class:"form-control text-center font-14 p-3 rounded-s border-theme",placeholder:"Город проживания","aria-label":"managerForm-city","aria-describedby":"managerForm-city",required:""},null,512),[[_,s.managerForm.city]]),Ie])]),Re,e("div",Ae,[ze,We,(n(!0),r(g,null,f(s.managerForm.educations,(l,a)=>(n(),r("div",Ge,[u(e("input",{type:"text",class:"form-control text-center font-14 p-3 rounded-s border-theme","onUpdate:modelValue":h=>s.managerForm.educations[a]=h,placeholder:"Название ВУЗа, специализация, уровень образования","aria-label":"managerForm-educations-"+a,"aria-describedby":"managerForm-educations-"+a,required:""},null,8,Je),[[_,s.managerForm.educations[a]]]),a>0?(n(),r("span",{key:0,class:"input-group-text bg-primary",id:"managerForm-educations-"+a},[e("a",{href:"javascript:void(0)",onClick:h=>d.remove("educations",a),class:"text-white"},Qe,8,Ke)],8,He)):c("",!0)]))),256)),e("a",{onClick:t[10]||(t[10]=l=>d.add("educations")),class:"d-block w-100 py-3 text-center",href:"javascript:void(0)"},"Добавить еще высшее образование")]),e("div",Ye,[Ze,(n(!0),r(g,null,f(s.managerForm.strengths,(l,a)=>(n(),r("div",et,[u(e("input",{type:"text",class:"form-control text-center font-14 p-3 rounded-s border-theme","onUpdate:modelValue":h=>s.managerForm.strengths[a]=h,placeholder:"Ваше сильное качество","aria-label":"managerForm-strengths-"+a,"aria-describedby":"managerForm-strengths-"+a,required:""},null,8,tt),[[_,s.managerForm.strengths[a]]]),a>0?(n(),r("span",{key:0,class:"input-group-text bg-primary",id:"managerForm-strengths-"+a},[e("a",{href:"javascript:void(0)",onClick:h=>d.remove("strengths",a),class:"text-white"},it,8,ot)],8,st)):c("",!0)]))),256)),e("a",{onClick:t[11]||(t[11]=l=>d.add("strengths")),class:"d-block w-100 py-3 text-center",href:"javascript:void(0)"},"Добавить еще сильные стороны")]),e("div",nt,[rt,lt,(n(!0),r(g,null,f(s.managerForm.weaknesses,(l,a)=>(n(),r("div",ct,[u(e("input",{type:"text",class:"form-control text-center font-14 p-3 rounded-s border-theme","onUpdate:modelValue":h=>s.managerForm.weaknesses[a]=h,placeholder:"Ваша слабая сторона","aria-label":"managerForm-weaknesses-"+a,"aria-describedby":"managerForm-weaknesses-"+a,required:""},null,8,dt),[[_,s.managerForm.weaknesses[a]]]),a>0?(n(),r("span",{key:0,class:"input-group-text bg-primary",id:"managerForm-weaknesses-"+a},[a>0?(n(),r("a",{key:0,href:"javascript:void(0)",onClick:h=>d.remove("weaknesses",a),class:"text-white"},bt,8,ht)):c("",!0)],8,mt)):c("",!0)]))),256)),e("a",{onClick:t[12]||(t[12]=l=>d.add("weaknesses")),class:"d-block w-100 py-3 text-center",href:"javascript:void(0)"},"Добавить еще слабые стороны")]),e("div",_t,[pt,gt,(n(!0),r(g,null,f(s.managerForm.skills,(l,a)=>(n(),r("div",vt,[e("div",ft,[u(e("input",{type:"text",class:"form-control text-center font-14 p-3 rounded-s border-theme","onUpdate:modelValue":h=>s.managerForm.skills[a].title=h,placeholder:"Название навыка","aria-label":"managerForm-skills-"+a,"aria-describedby":"managerForm-skills-"+a,required:""},null,8,yt),[[_,s.managerForm.skills[a].title]]),a>0?(n(),r("span",{key:0,class:"input-group-text bg-primary",id:"managerForm-skills-"+a},[a>0?(n(),r("a",{key:0,href:"javascript:void(0)",onClick:h=>d.remove("skills",a),class:"text-white"},wt,8,Ft)):c("",!0)],8,kt)):c("",!0)]),e("div",Ut,[e("p",Ct,[s.managerForm.skills[a].title?(n(),r("span",Vt,p(s.managerForm.skills[a].title)+" прокачан на ",1)):c("",!0),b(p(s.managerForm.skills[a].value)+"% ",1)]),u(e("input",{class:"form-range w-100",max:"100","onUpdate:modelValue":h=>s.managerForm.skills[a].value=h,type:"range"},null,8,$t),[[_,s.managerForm.skills[a].value]])])]))),256)),e("a",{onClick:t[13]||(t[13]=l=>d.add("skills")),class:"d-block w-100 py-3 text-center",href:"javascript:void(0)"},"Добавить еще навык")]),e("div",Mt,[jt,Bt,e("div",qt,[u(e("textarea",{type:"text",class:"form-control text-left font-14 p-3 rounded-s border-theme","onUpdate:modelValue":t[14]||(t[14]=l=>s.managerForm.info=l),placeholder:"Дополнительная информация",style:{"min-height":"200px"},"aria-label":"managerForm-referral","aria-describedby":"managerForm-info"},`
                        `,512),[[_,s.managerForm.info]])])]),e("div",Et,[St,Tt,e("div",Lt,[u(e("input",{type:"text",class:"form-control text-center font-14 p-3 rounded-s border-theme","onUpdate:modelValue":t[15]||(t[15]=l=>s.managerForm.referral=l),placeholder:"Реферальный код","aria-label":"managerForm-referral","aria-describedby":"managerForm-referral"},null,512),[[_,s.managerForm.referral]])])]),e("div",Pt,[Nt,Ot,e("div",Dt,[e("div",It,[e("p",Rt,[s.managerForm.sex?c("",!0):(n(),r("span",At,"С правилами ознакомилась")),s.managerForm.sex?(n(),r("span",zt,"С правилами ознакомлен")):c("",!0)])]),e("div",Wt,[e("div",Gt,[u(e("input",{"onUpdate:modelValue":t[16]||(t[16]=l=>s.confirm=l),type:"checkbox",class:"ios-input",id:"toggle-id-1"},null,512),[[C,s.confirm]]),Jt])])]),e("button",{type:"submit",disabled:!s.confirm||s.load,class:"btn btn-primary mb-2 text-uppercase w-100"}," Отправить анкету ",8,Ht)])],32)])),d.isManagerVerified?(n(),r("div",Kt,[e("p",Xt,[b("Ваш баланс: "),e("strong",Qt,p(s.botUser.manager.balance||0)+" ₽",1)]),e("p",Yt,[b("Колл-во слотов под ботов у клиента: "),e("strong",Zt,p(s.botUser.manager.max_bot_slot_count||0)+" ед.",1)]),es])):c("",!0)])):c("",!0)}const ss=P(N,[["render",ts],["__scopeId","data-v-ccb9c047"]]);const os=e("title",null,"Кабинет администратора",-1),as=e("meta",{name:"description",content:"Кабинет администратора<"},null,-1),is={key:0,class:"navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow"},ns={class:"navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 cursor-pointer align-items-center d-flex","data-bs-toggle":"modal","data-bs-target":"#selected-company-bot-info"},rs={key:0,style:{"font-size":"12px","margin-left":"10px"}},ls=["href"],cs=e("button",{class:"navbar-toggler position-absolute d-md-none collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#sidebarMenu","aria-controls":"sidebarMenu","aria-expanded":"false","aria-label":"Toggle navigation"},[e("span",{class:"navbar-toggler-icon"})],-1),ds={class:"navbar-nav d-flex justify-content-center align-items-center flex-row"},ms={class:"nav-item text-nowrap"},hs=e("i",{class:"fa-solid fa-mug-hot"},null,-1),us=e("div",{class:"nav-item text-nowrap"},[e("a",{class:"nav-link px-3","data-bs-toggle":"offcanvas",role:"button",href:"#profile-sidebar"},[e("i",{class:"fa-solid fa-user"}),b(" Профиль")])],-1),bs={class:"nav-item text-nowrap"},_s=e("i",{class:"fa-solid fa-mug-hot"},null,-1),ps={class:"nav-item text-nowrap"},gs=e("i",{class:"fa-solid fa-robot"},null,-1),vs={key:0,class:"nav-item text-nowrap"},fs=e("i",{class:"fa-solid fa-scroll"},null,-1),ys=e("div",{class:"navbar-nav d-none d-md-block"},[e("div",{class:"nav-item text-nowrap"},[e("a",{class:"nav-link px-3",href:"/logout"},"Выход")])],-1),ks={class:"container-fluid"},Fs={class:"row"},xs={class:"col-md-12 ms-sm-auto col-lg-12 px-md-4 px-0"},ws={class:"pt-md-3 pt-0 pb-md-2 pb-0 mb-3"},Us={class:"modal fade",id:"selected-company-bot-info",tabindex:"-1","aria-labelledby":"open-construct-label","aria-hidden":"true"},Cs={class:"modal-dialog"},Vs={class:"modal-content"},$s=e("div",{class:"modal-header"},[e("h1",{class:"modal-title fs-5",id:"open-construct-label"},"У вас выбрано"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Ms={class:"modal-body"},js={key:0,class:"card border-info mb-2"},Bs={class:"card-body"},qs=e("p",null,"У Вас выбран клиент:",-1),Es={class:"d-flex justify-content-between w-100"},Ss=e("i",{class:"fa-solid fa-xmark"},null,-1),Ts=[Ss],Ls={key:1,class:"card border-info"},Ps={class:"card-body"},Ns=e("p",null,"У Вас выбран бот:",-1),Os={class:"d-flex justify-content-between w-100"},Ds=["href"],Is=e("i",{class:"fa-solid fa-xmark"},null,-1),Rs=[Is],As=e("div",{class:"modal-footer"},[e("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Закрыть")],-1),zs=e("div",{class:"theme-switcher d-none d-md-block"},[e("button",{id:"switch-theme","data-bs-toggle":"modal","data-bs-target":"#theme-switch-modal",class:"btn btn-primary"},[e("i",{class:"fa-solid fa-palette"})])],-1),Ws={class:"modal",id:"theme-switch-modal",tabindex:"-1"},Gs={class:"modal-dialog"},Js={class:"modal-content"},Hs=e("div",{class:"modal-header"},[e("h5",{class:"modal-title"},"Выбор темы оформления"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Ks={class:"modal-body"},Xs={class:"list-group"},Qs=["onClick"],Ys=e("div",{class:"modal-footer"},[e("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Закрыть")],-1),Zs={class:"offcanvas offcanvas-start",tabindex:"-1",id:"profile-sidebar","aria-labelledby":"offcanvasExampleLabel"},eo=e("div",{class:"offcanvas-header"},[e("h5",{class:"offcanvas-title",id:"offcanvasExampleLabel"},"Ваш профиль"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"offcanvas","aria-label":"Закрыть"})],-1),to={class:"offcanvas-body"},so={props:["active","needMenu"],data(){return{load:!1,bot:null,is_chat_open:!1,currentTheme:"",company:null,themes:[{title:"Тема 1",href:"/theme1.bootstrap.min.css"},{title:"Тема 2",href:"/theme2.bootstrap.min.css"},{title:"Тема 3",href:"/theme3.bootstrap.min.css"},{title:"Тема 4",href:"/theme4.bootstrap.min.css"},{title:"Тема 5",href:"/theme5.bootstrap.min.css"},{title:"Тема 6",href:"/theme6.bootstrap.min.css"},{title:"Тема 7",href:"/theme7.bootstrap.min.css"},{title:"Тема 8",href:"/theme8.bootstrap.min.css"},{title:"Тема 9",href:"/theme9.bootstrap.min.css"},{title:"Тема 10",href:"/theme10.bootstrap.min.css"},{title:"Тема 11",href:"/theme11.bootstrap.min.css"},{title:"Тема 12",href:"/theme12.bootstrap.min.css"},{title:"Тема 13",href:"/theme13.bootstrap.min.css"},{title:"Тема 14",href:"/theme14.bootstrap.min.css"},{title:"Тема 15",href:"/theme15.bootstrap.min.css"},{title:"Тема 16",href:"/theme16.bootstrap.min.css"}]}},computed:{...j(["getErrors","getCurrentBot","getCurrentCompany"])},watch:{getErrors:function(o,t){Object.keys(o).forEach(m=>{this.$notify({title:"Конструктор ботов",text:o[m],type:"warn"})})}},mounted(){this.loadCurrentCompany(),this.loadCurrentBot();let o=localStorage.getItem("cashman_global_admin_theme")||null;o&&this.$nextTick(()=>{this.currentTheme=o}),window.addEventListener("store_current_bot-change-event",t=>{this.bot=this.getCurrentBot}),window.addEventListener("store_current_company-change-event",t=>{this.company=this.getCurrentCompany})},methods:{hasRole(o){return window.hasRole(o)||!1},switchTheme(o){let t=document.querySelector("#theme");t.href=this.themes[o].href,localStorage.setItem("cashman_global_admin_theme",t.href),this.$nextTick(()=>{this.currentTheme=t.href})},loadCurrentCompany(o=null){this.$store.dispatch("updateCurrentCompany",{company:o}).then(()=>{this.company=this.getCurrentCompany})},loadCurrentBot(o=null){this.$store.dispatch("updateCurrentBot",{bot:o}).then(()=>{this.bot=this.getCurrentBot})},resetCompany(){this.$store.dispatch("resetCurrentCompany").then(()=>{this.company=null,window.dispatchEvent(new CustomEvent("store_current_company-change-event"))})},resetBot(){this.$store.dispatch("resetCurrentBot").then(()=>{this.bot=null,window.dispatchEvent(new CustomEvent("store_current_bot-change-event"))})},stopAllDialogs(){this.$store.dispatch("stopDialogs").then(o=>{this.$notify({title:"Конструктор ботов",text:"Все диалоги остановлены",type:"success"})}).catch(o=>{})},reloadWebhooks(){this.load=!0,this.$notify({title:"Конструктор ботов",text:"Процедура обновления зависимостей началась"}),axios.get("/bot/register-webhooks").then(()=>{this.load=!1,this.$notify({title:"Конструктор ботов",text:"Зависимости успешно обновлены!",type:"success"})}).catch(()=>{this.load=!1,this.$notify({title:"Конструктор ботов",text:"Неудалось обновить зависимости",type:"error"})})}}},no=Object.assign(so,{__name:"MainAdminLayout",setup(o){return(t,m)=>{const k=B("notifications");return n(),r(g,null,[x(E(S),null,{default:q(()=>[os,as]),_:1}),x(k,{position:"top right"}),o.needMenu?(n(),r("header",is,[e("a",ns,[b("CashMan: "),t.bot?(n(),r("span",rs,[e("a",{href:"https://t.me/"+(t.bot.bot_domain||"botfather"),target:"_blank"},p(t.bot.bot_domain||"Без имени"),9,ls)])):c("",!0)]),cs,e("div",ds,[e("div",ms,[e("a",{class:v(["nav-link px-3",{"border-bottom-active active":o.active==0}]),onClick:m[0]||(m[0]=s=>o.active=0),href:"/manager-page"},[hs,b(" Стартовая страница")],2)]),us,e("div",bs,[e("a",{class:v(["nav-link px-3",{"border-bottom-active active":o.active==1}]),onClick:m[1]||(m[1]=s=>o.active=1),href:"/company-page"},[_s,b(" Клиенты")],2)]),e("div",ps,[e("a",{class:v(["nav-link px-3",{"border-bottom-active active":o.active==2}]),onClick:m[2]||(m[2]=s=>o.active=2),href:"/bot-page"},[gs,b(" Боты")],2)]),t.hasRole("admin")?(n(),r("div",vs,[e("a",{class:v(["nav-link px-3",{"border-bottom-active active":o.active==6}]),onClick:m[3]||(m[3]=s=>o.active=6),href:"/script-page"},[fs,b(" Скрипты")],2)])):c("",!0)]),ys])):c("",!0),e("div",ks,[e("div",Fs,[e("main",xs,[e("div",ws,[T(t.$slots,"default")])])])]),e("div",Us,[e("div",Cs,[e("div",Vs,[$s,e("div",Ms,[t.company?(n(),r("div",js,[e("div",Bs,[qs,e("div",Es,[e("span",null,p(t.company.title||"Без имени"),1),e("span",{onClick:m[4]||(m[4]=(...s)=>t.resetCompany&&t.resetCompany(...s))},Ts)])])])):c("",!0),t.bot?(n(),r("div",Ls,[e("div",Ps,[Ns,e("div",Os,[e("span",null,[e("a",{href:"https://t.me/"+(t.bot.bot_domain||"botfather"),target:"_blank"},p(t.bot.bot_domain||"Без имени"),9,Ds)]),e("span",{onClick:m[5]||(m[5]=(...s)=>t.resetBot&&t.resetBot(...s))},Rs)])])])):c("",!0)]),As])])]),zs,e("div",Ws,[e("div",Gs,[e("div",Js,[Hs,e("div",Ks,[e("div",Xs,[(n(!0),r(g,null,f(t.themes,(s,d)=>(n(),r("button",{type:"button",onClick:y=>t.switchTheme(d),class:v([{active:t.currentTheme.indexOf(s.href)!=-1},"list-group-item list-group-item-action"]),"aria-current":"true"},p(s.title||"-"),11,Qs))),256))])]),Ys])])]),e("div",Zs,[eo,e("div",to,[e("div",null,[t.bot?(n(),L(ss,{key:0,bot:t.bot},null,8,["bot"])):c("",!0)])])])],64)}}});export{no as _};
