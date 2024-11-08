import{_ as U}from"./MainAdminLayout-cd569fbc.js";import{bD as j,aT as I,aF as n,A as l,D as t,bB as g,by as r,bn as f,bj as h,z as i,F as y,aQ as v,ap as C,O as u,b4 as b,N as x,y as V,bw as T,P as q}from"./index.es-0c1040a4.js";import{_ as D}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                                                 */const S={props:["start"],data(){return{load:!1,step:0,form:{name:null,botDomain:"vape888bot",have_token:!1,token:null,greeting:{text:null,avatar:null,profile:null,need_photo:!0},contacts:{need_photo:!0,image:null,links:[]},selfInfo:{name:null,phone:null,text:null,image:null,need_photo:!0},businessInfo:{name:null,text:null,image:null,need_photo:!0},functions:[],individual:null},contactTypes:[{title:"Номер телефона",mask:"+7(###)###-##-##",pattern:null,slug:"phone-number",icon:"fa-solid fa-mobile-screen"},{title:"Эл.почта",pattern:null,mask:null,slug:"email",icon:"fa-solid fa-at"},{title:"Адресс расположения",pattern:null,mask:null,slug:"address",icon:"fa-solid fa-location-dot"},{title:"Соц.сети",pattern:null,mask:null,slug:"social-link",icon:"fa-solid fa-square-share-nodes"},{title:"Сайт",pattern:null,mask:null,slug:"web-site-link",icon:"fa-solid fa-laptop"},{title:"Месенджер",pattern:null,mask:null,slug:"messenger-link",icon:"fa-regular fa-envelope"}],moreFunctions:[{title:"КэшБек",description:"Например три уровня  7% , 3% и 1% + фото.",slug:"cashback",icon:"fa-solid fa-sack-dollar",is_active:!0},{title:"Агентский кабинет",description:"Желающие смогут стать Вашими агентами, рекомендовать Вас и получать вознаграждение.",slug:"agent-cabinet",icon:"fa-solid fa-house-laptop",is_active:!0},{title:"Бонус за рекомендации",description:"Приграси 5 друзе и получи подарок",slug:"referral-bonus",icon:"fa-solid fa-money-bill-trend-up",is_active:!0},{title:"Бонус за отзыв",description:"Оставь отзыв в яндексе и 2гис и получи подарок от нас.",slug:"review-bonus",icon:"fa-solid fa-comments-dollar",is_active:!1},{title:"Регистрация на мероприятия",slug:"event-form",description:"Вы можете регистрировать людей на мероприятия через нашего чат бата или же сообщать о своих ближайших мероприятиях",icon:"fa-solid fa-calendar-check",is_active:!0},{title:"Интеграция с каналами Telegram",description:"Мы может интегрировать ваш канал в наш бот",slug:"telegram-channel-integration",icon:"fa-brands fa-telegram",is_active:!1},{title:"Прикрепленные документы",slug:"attached-documents",icon:"fa-solid fa-folder-open",description:"Вы можете прикрепить документ в котором хотите рассказать (например) об обучении, о курсах и тд.",is_active:!0},{title:"Лид магнит",slug:"lead-magnet",icon:"fa-solid fa-magnet",description:"Лид магнит продумывается индивидуально",is_active:!0},{title:"Воронка продаж",slug:"sales-funnel",description:"Воронка продаж продумывается индивидуально",icon:"fa-solid fa-filter-circle-dollar",is_active:!0},{title:"Отзывы",slug:"reviews",description:"Можете добавить отзывы в бот чтобы людям не приходилось искать отзовы на других площадках ",icon:"fa-solid fa-magnifying-glass-dollar",is_active:!0},{title:"Задать вопрос",slug:"ask-a-question",description:"Люди смогут задавать вопрос прямо в бот, а Вы отвечать им уже лично",icon:"fa-solid fa-clipboard-question",is_active:!0},{title:"Получить онлайн консультацию",slug:"online-consultation",description:"Запись на консультацию",icon:"fa-solid fa-circle-info",is_active:!0},{title:"Локация",slug:"location",description:"Ваш адрес, если необходим вашему бизнесу ",icon:"fa-solid fa-map-location-dot",is_active:!0},{title:"Акции",slug:"promotions",description:"Вы сможете выкладывать акции и распродажи",icon:"fa-solid fa-percent",is_active:!0},{title:"Наши клиенты",slug:"our-clients",description:"Сюда Вы сможете выложить фото ваших гостей ",icon:"fa-solid fa-carrot",is_active:!0},{title:"Инвесторам",slug:"investors",description:"Предложения для инвестрора",icon:"fa-solid fa-comment-dollar",is_active:!0},{title:"Франшиза",slug:"franchise",description:"Информация о франшизе",icon:"fa-solid fa-earth-asia",is_active:!0},{title:"Стоимость услуг",slug:"cost-of-services",description:"Ваш прайс или меню",icon:"fa-solid fa-money-check-dollar",is_active:!0},{title:"Ваш магазин",slug:"custom-shop",description:"Ваш индивидуальный магазин внутри бота с возможностью оплаты онлайн",icon:"fa-brands fa-shopify",is_active:!0},{title:"Стоит купить или попробовать",slug:"buy-or-try",description:"Горящее предложение",icon:"fa-solid fa-basket-shopping",is_active:!0},{title:"Доставка",slug:"delivery",description:"Если вы отправляете доставки яндек или сдек и тд.",icon:"fa-solid fa-dolly",is_active:!0},{title:"Забронировать номер/столик",slug:"booking",description:"Человет сможет заброниравать в боте или же выйти на менеджера",icon:"fa-solid fa-utensils",is_active:!0},{title:"Атмосфера",slug:"atmosphere",description:"Фото Вашей атмосферы",icon:"fa-solid fa-trophy",is_active:!0},{title:"Курсы",slug:"courses",description:"Информация о курсах",icon:"fa-solid fa-graduation-cap",is_active:!0},{title:"Оплата в боте",slug:"payments",description:"Создавайте запросы на оплату непосредственно в боте",icon:"fa-regular fa-credit-card",is_active:!1},{title:"Колесо фортуны",slug:"wheel-of-fortune",description:"Розыгрыши призов в боте",icon:"fa-solid fa-dharmachakra",is_active:!1},{title:"Индивидуальная кнопка",slug:"individual-button",description:"Можете предложить свою кнопку",icon:"fa-solid fa-person-chalkboard",is_active:!0}]}},computed:{...j(["getCurrentCompany"])},mounted(){this.start&&(this.step=this.start)},methods:{submitBot(){let a=new FormData;Object.keys(this.form).forEach(o=>{const m=this.form[o]||"";typeof m=="object"?a.append(o,JSON.stringify(m)):a.append(o,m)}),this.form.greeting.need_photo&&(a.append("greeting_image_avatar",this.form.greeting.avatar),a.append("greeting_image_profile",this.form.greeting.profile)),this.form.contacts.need_photo&&a.append("contacts_image",this.form.contacts.image),this.form.selfInfo.need_photo&&a.append("self_info_image",this.form.selfInfo.image),this.form.businessInfo.need_photo&&a.append("business_info_image",this.form.businessInfo.image),this.$store.dispatch("createBotLazy",{botForm:a}).then(o=>{this.step++,this.$notify({title:"Конструктор ботов",text:"Бот успешно создан!",type:"success"})}).catch(o=>{})},remove(a){this.form.contacts.links.splice(a,1)},duplicate(a){const o={...a};this.form.contacts.links.push(o)},addContact(a){const o={...a,value:null,description:null};this.form.contacts.links.push(o)},getPhoto(a){return{imageUrl:URL.createObjectURL(a)}},onChangePhotos(a,o,m){const k=a.target.files;this.form[o][m]=k[0]}}},P={class:"row d-flex justify-content-center"},L={class:"col-12 col-md-8 mb-2"},G=t("h2",null,"Создадим Вашего бота вместе!",-1),B=t("h6",null,"Первым делом необходимо имя бота (на русском - для пользователей, на английском - как ссылка на вашего бота)",-1),F={class:"form-floating mb-2 w-100"},z=t("label",{for:"floatingTextarea",class:"text-primary"},"Название вашего бота (на русском)",-1),N=t("div",{class:"alert border-light alert-dismissible fade show w-100",role:"alert"},[t("ul",null,[t("li",null," Ссылка должна быть длинной (от 7 символов) и, по возможности, уникальной."),t("li",null,' Ссылка должна заканчиваться словом "bot"'),t("li",null," Ссылка должна состоть только из английских символов и символов нижнего подчеркивания"),t("li",null," В ссылке нельзя ставить пробелы")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})],-1),M={class:"form-floating mb-2 w-100"},O=t("label",{for:"floatingTextarea",class:"text-primary"},"Доменное имя вашего бота на английском",-1),A={class:"alert border-light alert-dismissible fade show w-100",role:"alert"},E=t("p",null,[u("Если у Вас есть "),t("a",{href:"https://t.me/botFather",class:"text-light"},"Token"),u(", то Вы сразу же сможете протестировать своего бота на парктике. Если же Token-а нет, то вам помогут его создать наши менеджеры.")],-1),H={class:"form-check form-switch"},R={class:"form-check-label",for:"flexSwitchCheckDefault"},J={key:0},Q={key:1},Z={key:0,class:"form-floating mb-2 w-100"},K=t("label",{for:"floatingTextarea",class:"text-primary"},"Телеграм token бота",-1),W=t("button",{type:"submit",class:"btn mt-3 bg-primary text-white rounded-pill px-3 shadow"}," Следующий шаг ",-1),X=t("h2",null,"Приветственное сообщение!",-1),Y=t("p",{class:"mt-2 mb-2"},[t("span",{class:"badge bg-white text-primary p-2 mr-2"},[t("i",{class:"fa-regular fa-bell"})]),u("И так, первым делом бот должен быть общительным и вежливым! Вам необходимо добавить привественное сообщение. "),t("strong",null,"Напишите небольшой текст"),u(" привествия и добавьте 2 фото (одно к приветствию, второе на аватар).")],-1),$={class:"form-floating mb-2 w-100"},tt=t("label",{for:"floatingInputValue",class:"text-primary"},"Напишите текст привествия в боте! ",-1),et=t("h6",{class:"mt-3 mb-3"},"Добавим изображения",-1),ot=t("p",null,"Вы можете выбрать фото или же указать ссылку на фото",-1),st={class:"form-check form-switch"},nt={class:"form-check-label",for:"flexSwitchCheckDefault"},lt={key:0},it={key:1},rt={key:0,class:"d-flex mt-3"},at={style:{height:"100px",width:"100px"},for:"greeting-avatar",class:"btn btn-outline-light shadow d-flex justify-content-center align-items-center flex-column mr-2"},ct={key:0,class:"d-flex justify-content-center align-items-center flex-column"},dt=t("i",{class:"fa-regular fa-image"},null,-1),ft=t("span",null,"Аватарка",-1),ut=[dt,ft],mt={key:1,style:{overflow:"hidden"}},pt={style:{width:"100%","object-fit":"cover"},alt:""},ht={style:{height:"100px",width:"100px"},for:"greeting-profile",class:"btn btn-outline-light shadow d-flex justify-content-center align-items-center flex-column mr-2"},_t={key:0,class:"d-flex justify-content-center align-items-center flex-column"},gt=t("i",{class:"fa-regular fa-image"},null,-1),bt=t("span",null,"Профиль",-1),yt=[gt,bt],vt={key:1,style:{overflow:"hidden"}},xt={style:{width:"100%","object-fit":"cover"},alt:""},kt={key:1,class:"d-flex mt-3 flex-wrap"},wt=x('<div class="input-group mb-3"><span class="input-group-text bg-white"><i class="fa-solid fa-globe"></i></span><div class="form-floating"><input type="text" class="form-control" id="floatingInputGroup1" placeholder="Username"><label for="floatingInputGroup1" class="text-black">Аватар</label></div></div><div class="input-group mb-3"><span class="input-group-text bg-white"><i class="fa-solid fa-globe"></i></span><div class="form-floating"><input type="text" class="form-control" id="floatingInputGroup1" placeholder="Username"><label for="floatingInputGroup1" class="text-black">В профиль</label></div></div>',2),It=[wt],Ct=t("button",{class:"btn mt-3 bg-primary text-white rounded-pill px-3 shadow",type:"submit"}," Следующий шаг ",-1),Ut=t("h2",null,"Персональная информация",-1),jt=t("p",{class:"mt-2 mb-2"},[t("span",{class:"badge bg-light text-primary p-2 mr-2"},[t("i",{class:"fa-regular fa-bell"})]),u(" Напишите подробную информацию о себе + фото")],-1),Vt={class:"form-floating mb-2 w-100"},Tt=t("label",{for:"floatingTextarea",class:"text-primary"},"Ваше Ф.И.О.",-1),qt={class:"form-floating mb-2 w-100"},Dt=t("label",{for:"floatingTextarea",class:"text-primary"},"Ваш личный номер телефона для связи менеджера",-1),St={class:"form-floating mb-2 w-100"},Pt=t("label",{for:"floatingTextarea",class:"text-primary"},"Информация о Вас:",-1),Lt={class:"d-flex justify-content-center align-items-center flex-column"},Gt=t("h6",{class:"mb-3 mt-3"},"Выберите своё персональное фото ",-1),Bt=t("p",null,"Вы можете выбрать фото или же указать ссылку на фото",-1),Ft={class:"form-check form-switch"},zt={class:"form-check-label",for:"flexSwitchCheckDefault"},Nt={key:0},Mt={key:1},Ot={key:0,style:{height:"100px",width:"100px"},for:"self-image-photo",class:"btn btn-outline-light shadow d-flex justify-content-center align-items-center flex-column mr-2"},At={key:0,class:"d-flex justify-content-center align-items-center flex-column"},Et=t("i",{class:"fa-regular fa-image"},null,-1),Ht=t("span",null,"Фото",-1),Rt=[Et,Ht],Jt={key:1,style:{overflow:"hidden"}},Qt={style:{width:"100%","object-fit":"cover"},alt:""},Zt={key:1,class:"input-group mb-3"},Kt=x('<span class="input-group-text bg-white"><i class="fa-solid fa-globe"></i></span><div class="form-floating"><input type="text" class="form-control" id="floatingInputGroup1" placeholder="Username" required><label for="floatingInputGroup1" class="text-black">Фото</label></div>',2),Wt=[Kt],Xt={key:0,class:"m-0"},Yt=t("button",{class:"btn mt-3 btn-primary rounded-pill px-3 shadow",type:"submit"}," Следующий шаг ",-1),$t=t("h2",null,"Информация о бизнесе",-1),te=t("p",{class:"mt-2 mb-2"},[t("span",{class:"badge bg-light text-primary p-2 mr-2"},[t("i",{class:"fa-regular fa-bell"})]),u(" Напишите подробную информацию о Вашем бизнесе + фото.")],-1),ee={class:"form-floating mb-2 w-100"},oe=t("label",{for:"floatingTextarea",class:"text-primary"},"Название вашей организации",-1),se={class:"form-floating mb-2 w-100"},ne=t("label",{for:"floatingTextarea",class:"text-primary"},"Информация о бизнесе:",-1),le={class:"d-flex justify-content-center align-items-center flex-column"},ie=t("h6",{class:"mb-3 mt-3"},"Выберите фото для вашей визитки ",-1),re=t("p",null,"Вы можете выбрать фото или же указать ссылку на фото",-1),ae={class:"form-check form-switch"},ce={class:"form-check-label",for:"flexSwitchCheckDefault"},de={key:0},fe={key:1},ue={key:0,style:{height:"100px",width:"100px"},for:"businessInfo-image-photo",class:"btn btn-outline-light shadow d-flex justify-content-center align-items-center flex-column mr-2"},me={key:0,class:"d-flex justify-content-center align-items-center flex-column"},pe=t("i",{class:"fa-regular fa-image"},null,-1),he=t("span",null,"Фото",-1),_e=[pe,he],ge={key:1,style:{overflow:"hidden"}},be={style:{width:"100%","object-fit":"cover"},alt:""},ye={key:1,class:"input-group mb-3"},ve=x('<span class="input-group-text bg-white"><i class="fa-solid fa-globe"></i></span><div class="form-floating"><input type="text" class="form-control" id="floatingInputGroup1" placeholder="Username" required><label for="floatingInputGroup1" class="text-black">Фото</label></div>',2),xe=[ve],ke=t("button",{type:"submit",class:"btn mt-3 btn-light shadow rounded-pill px-3"}," Следующий шаг ",-1),we=t("h2",null,"Контактная информация",-1),Ie=t("p",{class:"mt-2 mb-2"},[t("span",{class:"badge bg-light text-primary p-2 mr-2"},[t("i",{class:"fa-regular fa-bell"})]),u(" Здесь будут ссылки на все ваши контактные данные ( социальные сети, месенджеры, новер телефона и сайт) + фото.")],-1),Ce={class:"mb-2 d-flex align-items-center justify-content-center flex-column"},Ue=t("p",null,"Вы можете выбрать фото или же указать ссылку на фото",-1),je={class:"form-check form-switch"},Ve={class:"form-check-label",for:"flexSwitchCheckDefault"},Te={key:0},qe={key:1},De={key:0,style:{height:"100px",width:"100px"},for:"contacts-image-photo",class:"btn btn-outline-light shadow d-flex justify-content-center align-items-center flex-column mr-2"},Se={key:0,class:"d-flex justify-content-center align-items-center flex-column"},Pe=t("i",{class:"fa-regular fa-image"},null,-1),Le=t("span",null,"Фото",-1),Ge=[Pe,Le],Be={key:1,style:{overflow:"hidden"}},Fe={style:{width:"100%","object-fit":"cover"},alt:""},ze={key:1,class:"input-group mb-3"},Ne=x('<span class="input-group-text bg-white"><i class="fa-solid fa-globe"></i></span><div class="form-floating"><input type="text" class="form-control" id="floatingInputGroup1" placeholder="Username" required><label for="floatingInputGroup1" class="text-black">Фото</label></div>',2),Me=[Ne],Oe=t("h6",null,[u("А также добавьте контактную информацию, нажав на "),t("i",{class:"fa-solid fa-square-plus"})],-1),Ae={class:"dropdown mr-2"},Ee=t("button",{style:{"min-height":"100px","min-width":"100px"},class:"btn btn-outline-light shadow d-flex justify-content-center align-items-center flex-column",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},[t("i",{class:"fa-solid fa-square-plus",style:{"font-size":"24px"}}),u(" Контакт ")],-1),He={class:"dropdown-menu"},Re=["onClick"],Je={class:"row mb-2 w-100 d-flex justify-content-center"},Qe={class:"col-12 col-md-6"},Ze={class:"card mb-2 w-100 shadow"},Ke={class:"card-body"},We={class:"form-floating"},Xe=["pattern","id","onUpdate:modelValue"],Ye=["pattern","id","onUpdate:modelValue"],$e=["for"],to={class:"form-floating mt-1"},eo=["onUpdate:modelValue","id"],oo=["for"],so={class:"dropdown mt-1"},no=t("button",{class:"btn btn-primary w-100",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},[t("i",{class:"fa-solid fa-ellipsis mr-1"})],-1),lo={class:"dropdown-menu w-100"},io=["onClick"],ro=t("i",{class:"fa-solid fa-trash-can mr-1"},null,-1),ao=["onClick"],co=t("i",{class:"fa-solid fa-clone mr-1"},null,-1),fo=t("button",{class:"btn mt-3 btn-light rounded-pill px-3",type:"submit"}," Следующий шаг ",-1),uo=t("h2",null,"Хочу себе в бота ",-1),mo={key:0},po=t("i",{class:"fa-solid fa-xmark mr-1 text-danger"},null,-1),ho=[po],_o={class:"row"},go={class:"col-6 col-md-4 col-lg-3 mb-2 position-relative"},bo=["data-bs-target"],yo=t("i",{class:"fa-regular fa-circle-question"},null,-1),vo=[yo],xo=["id"],ko={class:"modal-dialog modal-dialog-centered"},wo={class:"modal-content bg-gradient-primary-to-secondary"},Io={class:"modal-body"},Co=["innerHTML"],Uo=["disabled","value","id"],jo=["for"],Vo={class:"small"},To={key:0,class:"row"},qo={class:"col-12"},Do={class:"badge bg-light text-primary mr-2"},So={key:1,class:"row"},Po={class:"col-12"},Lo=t("p",null,"Опишите ваши индивидуальные потребности и наши разработчики неприменно реализуют данную фичу для Вас!",-1),Go={class:"form-floating mt-1"},Bo=t("label",{class:"text-primary",for:"individual-description-textarea"},"Описание фичи",-1),Fo=t("button",{type:"submit",class:"btn mt-3 btn-light rounded-pill px-3"}," Финиш! ",-1),zo={key:6,class:"w-100 d-flex justify-content-center align-items-center flex-column"},No=t("h2",null,"Демонстрация работы бота",-1),Mo={class:"row"},Oo={class:"col-md-6"},Ao={class:"mobile"},Eo=["src"],Ho=t("div",{class:"col-md-6"},null,-1);function Ro(a,o,m,k,e,c){const _=I("lazy"),w=I("mask");return n(),l("div",P,[t("div",L,[e.step===0?(n(),l("form",{key:0,onSubmit:o[4]||(o[4]=g(s=>e.step++,["prevent"])),class:"w-100 d-flex justify-content-center align-items-center flex-column"},[G,B,t("div",F,[r(t("input",{type:"text",class:"form-control",minlength:"5",maxlength:"50","onUpdate:modelValue":o[0]||(o[0]=s=>e.form.name=s),id:"floatingTextarea",required:""},null,512),[[f,e.form.name]]),z]),N,t("div",M,[r(t("input",{type:"text",class:"form-control",minlength:"5",maxlength:"50","onUpdate:modelValue":o[1]||(o[1]=s=>e.form.botDomain=s),pattern:"[_A-Za-z0-9]{5,50}(bot)",id:"floatingTextarea",required:""},null,512),[[f,e.form.botDomain]]),O]),t("div",A,[E,t("div",H,[r(t("input",{class:"form-check-input","onUpdate:modelValue":o[2]||(o[2]=s=>e.form.have_token=s),type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"},null,512),[[h,e.form.have_token]]),t("label",R,[e.form.have_token?i("",!0):(n(),l("strong",J,"У меня есть Token бота")),e.form.have_token?(n(),l("strong",Q,"У меня нет Token бота")):i("",!0)])])]),e.form.have_token?(n(),l("div",Z,[r(t("input",{type:"text",class:"form-control",minlength:"5",maxlength:"100","onUpdate:modelValue":o[3]||(o[3]=s=>e.form.token=s),id:"floatingTextarea",required:""},null,512),[[f,e.form.token]]),K])):i("",!0),W],32)):i("",!0),e.step===1?(n(),l("form",{key:1,onSubmit:o[10]||(o[10]=s=>e.step++),class:"w-100 d-flex justify-content-center align-items-center flex-column"},[X,Y,t("div",$,[r(t("textarea",{class:"form-control",style:{"min-height":"150px"},"onUpdate:modelValue":o[5]||(o[5]=s=>e.form.greeting.text=s),placeholder:"Leave a comment here",id:"floatingInputValue",required:""},null,512),[[f,e.form.greeting.text]]),tt]),et,ot,t("div",st,[r(t("input",{class:"form-check-input","onUpdate:modelValue":o[6]||(o[6]=s=>e.form.greeting.need_photo=s),type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"},null,512),[[h,e.form.greeting.need_photo]]),t("label",nt,[e.form.greeting.need_photo?(n(),l("strong",lt,"Фото")):i("",!0),e.form.greeting.need_photo?i("",!0):(n(),l("strong",it,"Ссылка"))])]),e.form.greeting.need_photo?(n(),l("div",rt,[t("label",at,[e.form.greeting.avatar?(n(),l("span",mt,[r(t("img",pt,null,512),[[_,c.getPhoto(e.form.greeting.avatar).imageUrl]])])):(n(),l("span",ct,ut)),t("input",{type:"file",name:"greeting-avatar",id:"greeting-avatar",accept:"image/*",onChange:o[7]||(o[7]=s=>c.onChangePhotos(s,"greeting","avatar")),style:{display:"none"},required:""},null,32)]),t("label",ht,[e.form.greeting.profile?(n(),l("span",vt,[r(t("img",xt,null,512),[[_,c.getPhoto(e.form.greeting.profile).imageUrl]])])):(n(),l("span",_t,yt)),t("input",{type:"file",id:"greeting-profile",name:"greeting-profile",accept:"image/*",onChange:o[8]||(o[8]=s=>c.onChangePhotos(s,"greeting","profile")),style:{display:"none"},required:""},null,32)])])):i("",!0),e.form.greeting.need_photo?i("",!0):(n(),l("div",kt,It)),t("div",null,[t("button",{type:"button",class:"btn mt-3 btn-light rounded-pill px-3 mr-2 shadow",onClick:o[9]||(o[9]=s=>e.step--)}," Назад "),Ct])],32)):i("",!0),e.step===2?(n(),l("form",{key:2,onSubmit:o[17]||(o[17]=g(s=>e.step++,["prevent"])),class:"w-100 d-flex justify-content-center align-items-center flex-column"},[Ut,jt,t("div",Vt,[r(t("input",{type:"text",class:"form-control","onUpdate:modelValue":o[11]||(o[11]=s=>e.form.selfInfo.name=s),id:"floatingTextarea",required:""},null,512),[[f,e.form.selfInfo.name]]),Tt]),t("div",qt,[r(t("input",{type:"text","onUpdate:modelValue":o[12]||(o[12]=s=>e.form.selfInfo.phone=s),class:"form-control",id:"floatingTextarea",required:""},null,512),[[f,e.form.selfInfo.phone],[w,"+7(###)###-##-##"]]),Dt]),t("div",St,[r(t("textarea",{style:{"min-height":"150px"},"onUpdate:modelValue":o[13]||(o[13]=s=>e.form.selfInfo.text=s),class:"form-control",placeholder:"Leave a comment here",id:"floatingTextarea",required:""},null,512),[[f,e.form.selfInfo.text]]),Pt]),t("div",Lt,[Gt,Bt,t("div",Ft,[r(t("input",{class:"form-check-input","onUpdate:modelValue":o[14]||(o[14]=s=>e.form.selfInfo.need_photo=s),type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"},null,512),[[h,e.form.selfInfo.need_photo]]),t("label",zt,[e.form.selfInfo.need_photo?(n(),l("strong",Nt,"Фото")):i("",!0),e.form.selfInfo.need_photo?i("",!0):(n(),l("strong",Mt,"Ссылка"))])]),e.form.selfInfo.need_photo?(n(),l("label",Ot,[e.form.selfInfo.image?(n(),l("span",Jt,[r(t("img",Qt,null,512),[[_,c.getPhoto(e.form.selfInfo.image).imageUrl]])])):(n(),l("span",At,Rt)),t("input",{type:"file",name:"self-image-photo",id:"self-image-photo",accept:"image/*",onChange:o[15]||(o[15]=s=>c.onChangePhotos(s,"selfInfo","image")),style:{display:"none"},required:""},null,32)])):i("",!0),e.form.selfInfo.need_photo?i("",!0):(n(),l("div",Zt,Wt))]),e.form.selfInfo.image?i("",!0):(n(),l("p",Xt,"Добавтье фотографию!")),t("div",null,[t("button",{type:"button",class:"btn mt-3 btn-light rounded-pill px-3 mr-2 shadow",onClick:o[16]||(o[16]=s=>e.step--)}," Назад "),Yt])],32)):i("",!0),e.step===3?(n(),l("form",{key:3,onSubmit:o[23]||(o[23]=g(s=>e.step++,["prevent"])),class:"w-100 d-flex justify-content-center align-items-center flex-column"},[$t,te,t("div",ee,[r(t("input",{type:"text",class:"form-control","onUpdate:modelValue":o[18]||(o[18]=s=>e.form.businessInfo.name=s),id:"floatingTextarea"},null,512),[[f,e.form.businessInfo.name]]),oe]),t("div",se,[r(t("textarea",{style:{"min-height":"150px"},class:"form-control","onUpdate:modelValue":o[19]||(o[19]=s=>e.form.businessInfo.text=s),placeholder:"Leave a comment here",id:"floatingTextarea",required:""},null,512),[[f,e.form.businessInfo.text]]),ne]),t("div",le,[ie,re,t("div",ae,[r(t("input",{class:"form-check-input","onUpdate:modelValue":o[20]||(o[20]=s=>e.form.businessInfo.need_photo=s),type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"},null,512),[[h,e.form.businessInfo.need_photo]]),t("label",ce,[e.form.businessInfo.need_photo?(n(),l("strong",de,"Фото")):i("",!0),e.form.businessInfo.need_photo?i("",!0):(n(),l("strong",fe,"Ссылка"))])]),e.form.businessInfo.need_photo?(n(),l("label",ue,[e.form.businessInfo.image?(n(),l("span",ge,[r(t("img",be,null,512),[[_,c.getPhoto(e.form.businessInfo.image).imageUrl]])])):(n(),l("span",me,_e)),t("input",{type:"file",name:"businessInfo-image-photo",id:"businessInfo-image-photo",accept:"image/*",onChange:o[21]||(o[21]=s=>c.onChangePhotos(s,"businessInfo","image")),style:{display:"none"},required:""},null,32)])):i("",!0),e.form.businessInfo.need_photo?i("",!0):(n(),l("div",ye,xe))]),t("div",null,[t("button",{type:"button",class:"btn mt-3 btn-primary shadow rounded-pill px-3 mr-2",onClick:o[22]||(o[22]=s=>e.step--)}," Назад "),ke])],32)):i("",!0),e.step===4?(n(),l("form",{key:4,onSubmit:o[27]||(o[27]=g(s=>e.step++,["prevent"])),class:"w-100 d-flex justify-content-center align-items-center flex-column"},[we,Ie,t("div",Ce,[Ue,t("div",je,[r(t("input",{class:"form-check-input","onUpdate:modelValue":o[24]||(o[24]=s=>e.form.contacts.need_photo=s),type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"},null,512),[[h,e.form.contacts.need_photo]]),t("label",Ve,[e.form.contacts.need_photo?(n(),l("strong",Te,"Фото")):i("",!0),e.form.contacts.need_photo?i("",!0):(n(),l("strong",qe,"Ссылка"))])]),e.form.contacts.need_photo?(n(),l("label",De,[e.form.contacts.image?(n(),l("span",Be,[r(t("img",Fe,null,512),[[_,c.getPhoto(e.form.contacts.image).imageUrl]])])):(n(),l("span",Se,Ge)),t("input",{type:"file",name:"contacts-image-photo",id:"contacts-image-photo",accept:"image/*",onChange:o[25]||(o[25]=s=>c.onChangePhotos(s,"contacts","image")),style:{display:"none"},required:""},null,32)])):i("",!0),e.form.contacts.need_photo?i("",!0):(n(),l("div",ze,Me)),Oe,t("div",Ae,[Ee,t("ul",He,[(n(!0),l(y,null,v(e.contactTypes,s=>(n(),l("li",null,[t("a",{onClick:d=>c.addContact(s),class:"dropdown-item"},[t("i",{class:C([s.icon,"mr-1"])},null,2),u(b(s.title||"Не указан"),1)],8,Re)]))),256))])])]),t("div",Je,[(n(!0),l(y,null,v(e.form.contacts.links,(s,d)=>(n(),l("div",Qe,[t("div",Ze,[t("div",Ke,[t("div",We,[s.mask?r((n(),l("input",{key:0,type:"text",pattern:s.pattern,class:"form-control",id:"contact-input-"+d,"onUpdate:modelValue":p=>e.form.contacts.links[d].value=p,required:""},null,8,Xe)),[[w,s.mask],[f,e.form.contacts.links[d].value]]):r((n(),l("input",{key:1,type:"text",pattern:s.pattern,class:"form-control",id:"contact-input-"+d,"onUpdate:modelValue":p=>e.form.contacts.links[d].value=p,required:""},null,8,Ye)),[[f,e.form.contacts.links[d].value]]),t("label",{class:"text-primary",for:"contact-input-"+d},b(s.title||"Без названия"),9,$e)]),t("div",to,[r(t("textarea",{class:"form-control","onUpdate:modelValue":p=>e.form.contacts.links[d].description=p,placeholder:"Leave a comment here",id:"contact-description-textarea-"+d,required:""},`

                                        `,8,eo),[[f,e.form.contacts.links[d].description]]),t("label",{class:"text-primary",for:"contact-description-textarea-"+d},"Описание",8,oo)]),t("div",so,[no,t("ul",lo,[t("li",null,[t("a",{class:"dropdown-item",onClick:p=>c.remove(d)},[ro,u(" Удалить")],8,io)]),t("li",null,[t("a",{class:"dropdown-item",onClick:p=>c.duplicate(s)},[co,u(" Дублировать")],8,ao)])])])])])]))),256))]),t("div",null,[t("button",{type:"button",class:"btn mt-3 btn-primary rounded-pill px-3 mr-2",onClick:o[26]||(o[26]=s=>e.step--)}," Назад "),fo])],32)):i("",!0),e.step===5?(n(),l("form",{key:5,onSubmit:o[32]||(o[32]=g((...s)=>c.submitBot&&c.submitBot(...s),["prevent"])),class:"w-100 d-flex justify-content-center align-items-center flex-column"},[uo,t("p",null,[e.form.functions.length>0?(n(),l("span",mo,"механик выбрано - "+b(e.form.functions.length)+" ед. ",1)):i("",!0),e.form.functions.length>0?(n(),l("a",{key:1,class:"underline cursor-pointer ml-2",onClick:o[28]||(o[28]=s=>e.form.functions=[])},ho)):i("",!0)]),t("div",_o,[(n(!0),l(y,null,v(e.moreFunctions,s=>(n(),l("div",go,[s.description?(n(),l("button",{key:0,type:"button",class:"btn btn-link text-light function-info-modal-btn","data-bs-toggle":"modal","data-bs-target":"#info-modal-"+s.slug},vo,8,bo)):i("",!0),t("div",{class:"modal fade",id:"info-modal-"+s.slug,tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},[t("div",ko,[t("div",wo,[t("div",Io,[t("p",{class:"text-center",innerHTML:s.description},null,8,Co)])])])],8,xo),r(t("input",{type:"checkbox",disabled:!s.is_active,"onUpdate:modelValue":o[29]||(o[29]=d=>e.form.functions=d),value:s.slug,class:"btn-check function-check",id:"btn-check-outlined"+s.slug},null,8,Uo),[[h,e.form.functions]]),t("label",{style:{"min-height":"100px"},class:"btn btn-outline-light shadow d-flex flex-column align-items-center justify-content-center",for:"btn-check-outlined"+s.slug},[t("i",{class:C(s.icon)},null,2),t("span",Vo,b(s.title),1)],8,jo)]))),256))]),e.form.functions.length>0?(n(),l("div",To,[t("div",qo,[(n(!0),l(y,null,v(e.form.functions,s=>(n(),l("span",Do,b(s),1))),256))])])):i("",!0),e.form.functions.indexOf("individual-button")>=0?(n(),l("div",So,[t("div",Po,[Lo,t("div",Go,[r(t("textarea",{class:"form-control","onUpdate:modelValue":o[30]||(o[30]=s=>e.form.individual=s),placeholder:"Leave a comment here",id:"individual-description-textarea",required:""},`

                                        `,512),[[f,e.form.individual]]),Bo])])])):i("",!0),t("div",null,[t("button",{type:"button",class:"btn mt-3 btn-primary rounded-pill px-3 mr-2",onClick:o[31]||(o[31]=s=>e.step--)}," Назад "),Fo])],32)):i("",!0),e.step===6?(n(),l("div",zo,[No,t("div",Mo,[t("div",Oo,[t("div",Ao,[t("iframe",{src:"/web/"+e.form.botDomain},null,8,Eo)])]),Ho])])):i("",!0)])])}const Jo=D(S,[["render",Ro]]),Qo={},Yo=Object.assign(Qo,{__name:"BotVisitCardConstructorPage",setup(a){return(o,m)=>(n(),V(U,{active:5,"need-menu":!0},{default:T(()=>[q(Jo)]),_:1}))}});export{Yo as default};
