import{m as U,_ as j,j as I,o as n,c as l,a as t,g,w as r,v as f,q as h,d as i,F as y,r as x,n as C,f as u,t as b,h as v}from"./app-dcc84722.js";const V={props:["start"],data(){return{load:!1,step:0,form:{name:null,botDomain:"vape888bot",have_token:!1,token:null,greeting:{text:null,avatar:null,profile:null,need_photo:!0},contacts:{need_photo:!0,image:null,links:[]},selfInfo:{name:null,phone:null,text:null,image:null,need_photo:!0},businessInfo:{name:null,text:null,image:null,need_photo:!0},functions:[]},contactTypes:[{title:"Номер телефона",mask:"+7(###)###-##-##",pattern:null,slug:"phone-number",icon:"fa-solid fa-mobile-screen"},{title:"Эл.почта",pattern:null,mask:null,slug:"email",icon:"fa-solid fa-at"},{title:"Адресс расположения",pattern:null,mask:null,slug:"address",icon:"fa-solid fa-location-dot"},{title:"Соц.сети",pattern:null,mask:null,slug:"social-link",icon:"fa-solid fa-square-share-nodes"},{title:"Сайт",pattern:null,mask:null,slug:"web-site-link",icon:"fa-solid fa-laptop"},{title:"Месенджер",pattern:null,mask:null,slug:"messenger-link",icon:"fa-regular fa-envelope"}],moreFunctions:[{title:"КэшБек",description:"Например три уровня  7% , 3% и 1% + фото.",slug:"cashback",icon:"fa-solid fa-sack-dollar",is_active:!0},{title:"Агентский кабинет",description:"Желающие смогут стать Вашими агентами, рекомендовать Вас и получать вознаграждение.",slug:"agent-cabinet",icon:"fa-solid fa-house-laptop",is_active:!0},{title:"Бонус за рекомендации",description:"Приграси 5 друзе и получи подарок",slug:"referral-bonus",icon:"fa-solid fa-money-bill-trend-up",is_active:!0},{title:"Бонус за отзыв",description:"Оставь отзыв в яндексе и 2гис и получи подарок от нас.",slug:"review-bonus",icon:"fa-solid fa-comments-dollar",is_active:!1},{title:"Регистрация на мероприятия",slug:"event-form",description:"Вы можете регистрировать людей на мероприятия через нашего чат бата или же сообщать о своих ближайших мероприятиях",icon:"fa-solid fa-calendar-check",is_active:!0},{title:"Интеграция с каналами Telegram",description:"Мы может интегрировать ваш канал в наш бот",slug:"telegram-channel-integration",icon:"fa-brands fa-telegram",is_active:!1},{title:"Прикрепленные документы",slug:"attached-documents",icon:"fa-solid fa-folder-open",description:"Вы можете прикрепить документ в котором хотите рассказать (например) об обучении, о курсах и тд.",is_active:!0},{title:"Лид магнит",slug:"lead-magnet",icon:"fa-solid fa-magnet",description:"Лид магнит продумывается индивидуально",is_active:!0},{title:"Воронка продаж",slug:"sales-funnel",description:"Воронка продаж продумывается индивидуально",icon:"fa-solid fa-filter-circle-dollar",is_active:!0},{title:"Отзывы",slug:"reviews",description:"Можете добавить отзывы в бот чтобы людям не приходилось искать отзовы на других площадках ",icon:"fa-solid fa-magnifying-glass-dollar",is_active:!0},{title:"Задать вопрос",slug:"ask-a-question",description:"Люди смогут задавать вопрос прямо в бот, а Вы отвечать им уже лично",icon:"fa-solid fa-clipboard-question",is_active:!0},{title:"Получить онлайн консультацию",slug:"online-consultation",description:"Запись на консультацию",icon:"fa-solid fa-circle-info",is_active:!0},{title:"Локация",slug:"location",description:"Ваш адрес, если необходим вашему бизнесу ",icon:"fa-solid fa-map-location-dot",is_active:!0},{title:"Акции",slug:"promotions",description:"Вы сможете выкладывать акции и распродажи",icon:"fa-solid fa-percent",is_active:!0},{title:"Наши клиенты",slug:"our-clients",description:"Сюда Вы сможете выложить фото ваших гостей ",icon:"fa-solid fa-carrot",is_active:!0},{title:"Инвесторам",slug:"investors",description:"Предложения для инвестрора",icon:"fa-solid fa-comment-dollar",is_active:!0},{title:"Франшиза",slug:"franchise",description:"Информация о франшизе",icon:"fa-solid fa-earth-asia",is_active:!0},{title:"Стоимость услуг",slug:"cost-of-services",description:"Ваш прайс или меню",icon:"fa-solid fa-money-check-dollar",is_active:!0},{title:"Ваш магазин",slug:"custom-shop",description:"Ваш индивидуальный магазин внутри бота с возможностью оплаты онлайн",icon:"fa-brands fa-shopify",is_active:!0},{title:"Стоит купить или попробовать",slug:"buy-or-try",description:"Горящее предложение",icon:"fa-solid fa-basket-shopping",is_active:!0},{title:"Доставка",slug:"delivery",description:"Если вы отправляете доставки яндек или сдек и тд.",icon:"fa-solid fa-dolly",is_active:!0},{title:"Забронировать номер/столик",slug:"booking",description:"Человет сможет заброниравать в боте или же выйти на менеджера",icon:"fa-solid fa-utensils",is_active:!0},{title:"Атмосфера",slug:"atmosphere",description:"Фото Вашей атмосферы",icon:"fa-solid fa-trophy",is_active:!0},{title:"Курсы",slug:"courses",description:"Информация о курсах",icon:"fa-solid fa-graduation-cap",is_active:!0},{title:"Оплата в боте",slug:"payments",description:"Создавайте запросы на оплату непосредственно в боте",icon:"fa-regular fa-credit-card",is_active:!1},{title:"Колесо фортуны",slug:"wheel-of-fortune",description:"Розыгрыши призов в боте",icon:"fa-solid fa-dharmachakra",is_active:!1},{title:"Индивидуальная кнопка",slug:"individual-button",description:"Можете предложить свою кнопку",icon:"fa-solid fa-person-chalkboard",is_active:!0}]}},computed:{...U(["getCurrentCompany"])},mounted(){this.start&&(this.step=this.start)},methods:{submitBot(){let a=new FormData;Object.keys(this.form).forEach(o=>{const p=this.form[o]||"";typeof p=="object"?a.append(o,JSON.stringify(p)):a.append(o,p)}),this.form.greeting.need_photo&&(a.append("greeting_image_avatar",this.form.greeting.avatar),a.append("greeting_image_profile",this.form.greeting.profile)),this.form.contacts.need_photo&&a.append("contacts_image",this.form.contacts.image),this.form.selfInfo.need_photo&&a.append("self_info_image",this.form.selfInfo.image),this.form.businessInfo.need_photo&&a.append("business_info_image",this.form.businessInfo.image),this.$store.dispatch("createBotLazy",{botForm:a}).then(o=>{this.step++,this.$notify({title:"Конструктор ботов",text:"Бот успешно создан!",type:"success"})}).catch(o=>{})},remove(a){this.form.contacts.links.splice(a,1)},duplicate(a){const o={...a};this.form.contacts.links.push(o)},addContact(a){const o={...a,value:null,description:null};this.form.contacts.links.push(o)},getPhoto(a){return{imageUrl:URL.createObjectURL(a)}},onChangePhotos(a,o,p){const k=a.target.files;this.form[o][p]=k[0]}}},T={class:"row d-flex justify-content-center"},q={class:"col-12 col-md-8 mb-2"},S=t("h2",null,"Создадим Вашего бота вместе!",-1),D=t("h6",null,"Первым делом необходимо имя бота (на русском - для пользователей, на английском - как ссылка на вашего бота)",-1),P={class:"form-floating mb-2 w-100"},G=t("label",{for:"floatingTextarea",class:"text-primary"},"Название вашего бота (на русском)",-1),L=t("div",{class:"alert border-light alert-dismissible fade show w-100",role:"alert"},[t("ul",null,[t("li",null," Ссылка должна быть длинной (от 7 символов) и, по возможности, уникальной."),t("li",null,' Ссылка должна заканчиваться словом "bot"'),t("li",null," Ссылка должна состоть только из английских символов и символов нижнего подчеркивания"),t("li",null," В ссылке нельзя ставить пробелы")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})],-1),B={class:"form-floating mb-2 w-100"},F=t("label",{for:"floatingTextarea",class:"text-primary"},"Доменное имя вашего бота на английском",-1),z={class:"alert border-light alert-dismissible fade show w-100",role:"alert"},M=t("p",null,[u("Если у вас есть "),t("a",{href:"https://t.me/botFather",class:"text-light"},"Token"),u(", то вы сразу же сможете протестировать своего бота на парктике. Если же Token-а нет, то вам помогут его создать наши менеджеры.")],-1),N={class:"form-check form-switch"},O={class:"form-check-label",for:"flexSwitchCheckDefault"},E={key:0},H={key:1},R={key:0,class:"form-floating mb-2 w-100"},A=t("label",{for:"floatingTextarea",class:"text-primary"},"Телеграм token бота",-1),J=t("button",{type:"submit",class:"btn mt-3 bg-primary text-white rounded-pill px-3 shadow"}," Следующий шаг ",-1),Z=t("h2",null,"Приветственное сообщение!",-1),K=t("p",{class:"mt-2 mb-2"},[t("span",{class:"badge bg-white text-primary p-2 mr-2"},[t("i",{class:"fa-regular fa-bell"})]),u("И так, первым делом бот должен быть общительным и вежливым! Вам необходимо добавить привественное сообщение. "),t("strong",null,"Напишите небольшой текст"),u(" привествия и добавьте 2 фото (одно к приветствию, второе на аватар).")],-1),Q={class:"form-floating mb-2 w-100"},W=t("label",{for:"floatingInputValue",class:"text-primary"},"Напишите текст привествия в боте! ",-1),X=t("h6",{class:"mt-3 mb-3"},"Добавим изображения",-1),Y=t("p",null,"Вы можете выбрать фото или же указать ссылку на фото",-1),$={class:"form-check form-switch"},tt={class:"form-check-label",for:"flexSwitchCheckDefault"},et={key:0},ot={key:1},st={key:0,class:"d-flex mt-3"},nt={style:{height:"100px",width:"100px"},for:"greeting-avatar",class:"btn btn-outline-light shadow d-flex justify-content-center align-items-center flex-column mr-2"},lt={key:0,class:"d-flex justify-content-center align-items-center flex-column"},it=t("i",{class:"fa-regular fa-image"},null,-1),rt=t("span",null,"Аватарка",-1),at=[it,rt],ct={key:1,style:{overflow:"hidden"}},dt={style:{width:"100%","object-fit":"cover"},alt:""},ft={style:{height:"100px",width:"100px"},for:"greeting-profile",class:"btn btn-outline-light shadow d-flex justify-content-center align-items-center flex-column mr-2"},ut={key:0,class:"d-flex justify-content-center align-items-center flex-column"},mt=t("i",{class:"fa-regular fa-image"},null,-1),pt=t("span",null,"Профиль",-1),ht=[mt,pt],_t={key:1,style:{overflow:"hidden"}},gt={style:{width:"100%","object-fit":"cover"},alt:""},bt={key:1,class:"d-flex mt-3 flex-wrap"},yt=v('<div class="input-group mb-3"><span class="input-group-text bg-white"><i class="fa-solid fa-globe"></i></span><div class="form-floating"><input type="text" class="form-control" id="floatingInputGroup1" placeholder="Username"><label for="floatingInputGroup1" class="text-black">Аватар</label></div></div><div class="input-group mb-3"><span class="input-group-text bg-white"><i class="fa-solid fa-globe"></i></span><div class="form-floating"><input type="text" class="form-control" id="floatingInputGroup1" placeholder="Username"><label for="floatingInputGroup1" class="text-black">В профиль</label></div></div>',2),xt=[yt],vt=t("button",{class:"btn mt-3 bg-primary text-white rounded-pill px-3 shadow",type:"submit"}," Следующий шаг ",-1),kt=t("h2",null,"Персональная информация",-1),wt=t("p",{class:"mt-2 mb-2"},[t("span",{class:"badge bg-light text-primary p-2 mr-2"},[t("i",{class:"fa-regular fa-bell"})]),u(" Напишите подробную информацию о себе + фото")],-1),It={class:"form-floating mb-2 w-100"},Ct=t("label",{for:"floatingTextarea",class:"text-primary"},"Ваше Ф.И.О.",-1),Ut={class:"form-floating mb-2 w-100"},jt=t("label",{for:"floatingTextarea",class:"text-primary"},"Ваш личный номер телефона для связи менеджера",-1),Vt={class:"form-floating mb-2 w-100"},Tt=t("label",{for:"floatingTextarea",class:"text-primary"},"Информация о Вас:",-1),qt={class:"d-flex justify-content-center align-items-center flex-column"},St=t("h6",{class:"mb-3 mt-3"},"Выберите своё персональное фото ",-1),Dt=t("p",null,"Вы можете выбрать фото или же указать ссылку на фото",-1),Pt={class:"form-check form-switch"},Gt={class:"form-check-label",for:"flexSwitchCheckDefault"},Lt={key:0},Bt={key:1},Ft={key:0,style:{height:"100px",width:"100px"},for:"self-image-photo",class:"btn btn-outline-light shadow d-flex justify-content-center align-items-center flex-column mr-2"},zt={key:0,class:"d-flex justify-content-center align-items-center flex-column"},Mt=t("i",{class:"fa-regular fa-image"},null,-1),Nt=t("span",null,"Фото",-1),Ot=[Mt,Nt],Et={key:1,style:{overflow:"hidden"}},Ht={style:{width:"100%","object-fit":"cover"},alt:""},Rt={key:1,class:"input-group mb-3"},At=v('<span class="input-group-text bg-white"><i class="fa-solid fa-globe"></i></span><div class="form-floating"><input type="text" class="form-control" id="floatingInputGroup1" placeholder="Username" required><label for="floatingInputGroup1" class="text-black">Фото</label></div>',2),Jt=[At],Zt={key:0,class:"m-0"},Kt=t("button",{class:"btn mt-3 btn-primary rounded-pill px-3 shadow",type:"submit"}," Следующий шаг ",-1),Qt=t("h2",null,"Информация о бизнесе",-1),Wt=t("p",{class:"mt-2 mb-2"},[t("span",{class:"badge bg-light text-primary p-2 mr-2"},[t("i",{class:"fa-regular fa-bell"})]),u(" Напишите подробную информацию о Вашем бизнесе + фото.")],-1),Xt={class:"form-floating mb-2 w-100"},Yt=t("label",{for:"floatingTextarea",class:"text-primary"},"Название вашей организации",-1),$t={class:"form-floating mb-2 w-100"},te=t("label",{for:"floatingTextarea",class:"text-primary"},"Информация о бизнесе:",-1),ee={class:"d-flex justify-content-center align-items-center flex-column"},oe=t("h6",{class:"mb-3 mt-3"},"Выберите фото для вашей визитки ",-1),se=t("p",null,"Вы можете выбрать фото или же указать ссылку на фото",-1),ne={class:"form-check form-switch"},le={class:"form-check-label",for:"flexSwitchCheckDefault"},ie={key:0},re={key:1},ae={key:0,style:{height:"100px",width:"100px"},for:"businessInfo-image-photo",class:"btn btn-outline-light shadow d-flex justify-content-center align-items-center flex-column mr-2"},ce={key:0,class:"d-flex justify-content-center align-items-center flex-column"},de=t("i",{class:"fa-regular fa-image"},null,-1),fe=t("span",null,"Фото",-1),ue=[de,fe],me={key:1,style:{overflow:"hidden"}},pe={style:{width:"100%","object-fit":"cover"},alt:""},he={key:1,class:"input-group mb-3"},_e=v('<span class="input-group-text bg-white"><i class="fa-solid fa-globe"></i></span><div class="form-floating"><input type="text" class="form-control" id="floatingInputGroup1" placeholder="Username" required><label for="floatingInputGroup1" class="text-black">Фото</label></div>',2),ge=[_e],be=t("button",{type:"submit",class:"btn mt-3 btn-light shadow rounded-pill px-3"}," Следующий шаг ",-1),ye=t("h2",null,"Контактная информация",-1),xe=t("p",{class:"mt-2 mb-2"},[t("span",{class:"badge bg-light text-primary p-2 mr-2"},[t("i",{class:"fa-regular fa-bell"})]),u(" Здесь будут ссылки на все ваши контактные данные ( социальные сети, месенджеры, новер телефона и сайт) + фото.")],-1),ve={class:"mb-2 d-flex align-items-center justify-content-center flex-column"},ke=t("p",null,"Вы можете выбрать фото или же указать ссылку на фото",-1),we={class:"form-check form-switch"},Ie={class:"form-check-label",for:"flexSwitchCheckDefault"},Ce={key:0},Ue={key:1},je={key:0,style:{height:"100px",width:"100px"},for:"contacts-image-photo",class:"btn btn-outline-light shadow d-flex justify-content-center align-items-center flex-column mr-2"},Ve={key:0,class:"d-flex justify-content-center align-items-center flex-column"},Te=t("i",{class:"fa-regular fa-image"},null,-1),qe=t("span",null,"Фото",-1),Se=[Te,qe],De={key:1,style:{overflow:"hidden"}},Pe={style:{width:"100%","object-fit":"cover"},alt:""},Ge={key:1,class:"input-group mb-3"},Le=v('<span class="input-group-text bg-white"><i class="fa-solid fa-globe"></i></span><div class="form-floating"><input type="text" class="form-control" id="floatingInputGroup1" placeholder="Username" required><label for="floatingInputGroup1" class="text-black">Фото</label></div>',2),Be=[Le],Fe=t("h6",null,[u("А также добавьте контактную информацию, нажав на "),t("i",{class:"fa-solid fa-square-plus"})],-1),ze={class:"dropdown mr-2"},Me=t("button",{style:{"min-height":"100px","min-width":"100px"},class:"btn btn-outline-light shadow d-flex justify-content-center align-items-center flex-column",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},[t("i",{class:"fa-solid fa-square-plus",style:{"font-size":"24px"}}),u(" Контакт ")],-1),Ne={class:"dropdown-menu"},Oe=["onClick"],Ee={class:"row mb-2 w-100 d-flex justify-content-center"},He={class:"col-12 col-md-6"},Re={class:"card mb-2 w-100 shadow"},Ae={class:"card-body"},Je={class:"form-floating"},Ze=["pattern","id","onUpdate:modelValue"],Ke=["pattern","id","onUpdate:modelValue"],Qe=["for"],We={class:"form-floating mt-1"},Xe=["onUpdate:modelValue","id"],Ye=["for"],$e={class:"dropdown mt-1"},to=t("button",{class:"btn btn-primary w-100",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},[t("i",{class:"fa-solid fa-ellipsis mr-1"})],-1),eo={class:"dropdown-menu w-100"},oo=["onClick"],so=t("i",{class:"fa-solid fa-trash-can mr-1"},null,-1),no=["onClick"],lo=t("i",{class:"fa-solid fa-clone mr-1"},null,-1),io=t("button",{class:"btn mt-3 btn-light rounded-pill px-3",type:"submit"}," Следующий шаг ",-1),ro=t("h2",null,"Хочу себе в бота ",-1),ao={key:0},co=t("i",{class:"fa-solid fa-xmark mr-1 text-danger"},null,-1),fo=[co],uo={class:"row"},mo={class:"col-6 col-md-4 col-lg-3 mb-2 position-relative"},po=["data-bs-target"],ho=t("i",{class:"fa-regular fa-circle-question"},null,-1),_o=[ho],go=["id"],bo={class:"modal-dialog modal-dialog-centered"},yo={class:"modal-content bg-gradient-primary-to-secondary"},xo={class:"modal-body"},vo=["innerHTML"],ko=["disabled","value","id"],wo=["for"],Io={class:"small"},Co={key:0,class:"row"},Uo={class:"col-12"},jo={class:"badge bg-light text-primary mr-2"},Vo=t("button",{type:"submit",class:"btn mt-3 btn-light rounded-pill px-3"}," Финиш! ",-1),To={key:6,class:"w-100 d-flex justify-content-center align-items-center flex-column"},qo=t("h2",null,"Демонстрация работы бота",-1),So={class:"row"},Do={class:"col-md-6"},Po={class:"mobile"},Go=["src"],Lo=t("div",{class:"col-md-6"},null,-1);function Bo(a,o,p,k,e,c){const _=I("lazy"),w=I("mask");return n(),l("div",T,[t("div",q,[e.step===0?(n(),l("form",{key:0,onSubmit:o[4]||(o[4]=g(s=>e.step++,["prevent"])),class:"w-100 d-flex justify-content-center align-items-center flex-column"},[S,D,t("div",P,[r(t("input",{type:"text",class:"form-control",minlength:"5",maxlength:"50","onUpdate:modelValue":o[0]||(o[0]=s=>e.form.name=s),id:"floatingTextarea",required:""},null,512),[[f,e.form.name]]),G]),L,t("div",B,[r(t("input",{type:"text",class:"form-control",minlength:"5",maxlength:"50","onUpdate:modelValue":o[1]||(o[1]=s=>e.form.botDomain=s),pattern:"[_A-Za-z0-9]{5,50}(bot)",id:"floatingTextarea",required:""},null,512),[[f,e.form.botDomain]]),F]),t("div",z,[M,t("div",N,[r(t("input",{class:"form-check-input","onUpdate:modelValue":o[2]||(o[2]=s=>e.form.have_token=s),type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"},null,512),[[h,e.form.have_token]]),t("label",O,[e.form.have_token?i("",!0):(n(),l("strong",E,"У меня есть Token бота")),e.form.have_token?(n(),l("strong",H,"У меня нет Token бота")):i("",!0)])])]),e.form.have_token?(n(),l("div",R,[r(t("input",{type:"text",class:"form-control",minlength:"5",maxlength:"100","onUpdate:modelValue":o[3]||(o[3]=s=>e.form.token=s),id:"floatingTextarea",required:""},null,512),[[f,e.form.token]]),A])):i("",!0),J],32)):i("",!0),e.step===1?(n(),l("form",{key:1,onSubmit:o[10]||(o[10]=s=>e.step++),class:"w-100 d-flex justify-content-center align-items-center flex-column"},[Z,K,t("div",Q,[r(t("textarea",{class:"form-control",style:{"min-height":"150px"},"onUpdate:modelValue":o[5]||(o[5]=s=>e.form.greeting.text=s),placeholder:"Leave a comment here",id:"floatingInputValue",required:""},null,512),[[f,e.form.greeting.text]]),W]),X,Y,t("div",$,[r(t("input",{class:"form-check-input","onUpdate:modelValue":o[6]||(o[6]=s=>e.form.greeting.need_photo=s),type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"},null,512),[[h,e.form.greeting.need_photo]]),t("label",tt,[e.form.greeting.need_photo?(n(),l("strong",et,"Фото")):i("",!0),e.form.greeting.need_photo?i("",!0):(n(),l("strong",ot,"Ссылка"))])]),e.form.greeting.need_photo?(n(),l("div",st,[t("label",nt,[e.form.greeting.avatar?(n(),l("span",ct,[r(t("img",dt,null,512),[[_,c.getPhoto(e.form.greeting.avatar).imageUrl]])])):(n(),l("span",lt,at)),t("input",{type:"file",name:"greeting-avatar",id:"greeting-avatar",accept:"image/*",onChange:o[7]||(o[7]=s=>c.onChangePhotos(s,"greeting","avatar")),style:{display:"none"},required:""},null,32)]),t("label",ft,[e.form.greeting.profile?(n(),l("span",_t,[r(t("img",gt,null,512),[[_,c.getPhoto(e.form.greeting.profile).imageUrl]])])):(n(),l("span",ut,ht)),t("input",{type:"file",id:"greeting-profile",name:"greeting-profile",accept:"image/*",onChange:o[8]||(o[8]=s=>c.onChangePhotos(s,"greeting","profile")),style:{display:"none"},required:""},null,32)])])):i("",!0),e.form.greeting.need_photo?i("",!0):(n(),l("div",bt,xt)),t("div",null,[t("button",{type:"button",class:"btn mt-3 btn-light rounded-pill px-3 mr-2 shadow",onClick:o[9]||(o[9]=s=>e.step--)}," Назад "),vt])],32)):i("",!0),e.step===2?(n(),l("form",{key:2,onSubmit:o[17]||(o[17]=g(s=>e.step++,["prevent"])),class:"w-100 d-flex justify-content-center align-items-center flex-column"},[kt,wt,t("div",It,[r(t("input",{type:"text",class:"form-control","onUpdate:modelValue":o[11]||(o[11]=s=>e.form.selfInfo.name=s),id:"floatingTextarea",required:""},null,512),[[f,e.form.selfInfo.name]]),Ct]),t("div",Ut,[r(t("input",{type:"text","onUpdate:modelValue":o[12]||(o[12]=s=>e.form.selfInfo.phone=s),class:"form-control",id:"floatingTextarea",required:""},null,512),[[f,e.form.selfInfo.phone],[w,"+7(###)###-##-##"]]),jt]),t("div",Vt,[r(t("textarea",{style:{"min-height":"150px"},"onUpdate:modelValue":o[13]||(o[13]=s=>e.form.selfInfo.text=s),class:"form-control",placeholder:"Leave a comment here",id:"floatingTextarea",required:""},null,512),[[f,e.form.selfInfo.text]]),Tt]),t("div",qt,[St,Dt,t("div",Pt,[r(t("input",{class:"form-check-input","onUpdate:modelValue":o[14]||(o[14]=s=>e.form.selfInfo.need_photo=s),type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"},null,512),[[h,e.form.selfInfo.need_photo]]),t("label",Gt,[e.form.selfInfo.need_photo?(n(),l("strong",Lt,"Фото")):i("",!0),e.form.selfInfo.need_photo?i("",!0):(n(),l("strong",Bt,"Ссылка"))])]),e.form.selfInfo.need_photo?(n(),l("label",Ft,[e.form.selfInfo.image?(n(),l("span",Et,[r(t("img",Ht,null,512),[[_,c.getPhoto(e.form.selfInfo.image).imageUrl]])])):(n(),l("span",zt,Ot)),t("input",{type:"file",name:"self-image-photo",id:"self-image-photo",accept:"image/*",onChange:o[15]||(o[15]=s=>c.onChangePhotos(s,"selfInfo","image")),style:{display:"none"},required:""},null,32)])):i("",!0),e.form.selfInfo.need_photo?i("",!0):(n(),l("div",Rt,Jt))]),e.form.selfInfo.image?i("",!0):(n(),l("p",Zt,"Добавтье фотографию!")),t("div",null,[t("button",{type:"button",class:"btn mt-3 btn-light rounded-pill px-3 mr-2 shadow",onClick:o[16]||(o[16]=s=>e.step--)}," Назад "),Kt])],32)):i("",!0),e.step===3?(n(),l("form",{key:3,onSubmit:o[23]||(o[23]=g(s=>e.step++,["prevent"])),class:"w-100 d-flex justify-content-center align-items-center flex-column"},[Qt,Wt,t("div",Xt,[r(t("input",{type:"text",class:"form-control","onUpdate:modelValue":o[18]||(o[18]=s=>e.form.businessInfo.name=s),id:"floatingTextarea"},null,512),[[f,e.form.businessInfo.name]]),Yt]),t("div",$t,[r(t("textarea",{style:{"min-height":"150px"},class:"form-control","onUpdate:modelValue":o[19]||(o[19]=s=>e.form.businessInfo.text=s),placeholder:"Leave a comment here",id:"floatingTextarea",required:""},null,512),[[f,e.form.businessInfo.text]]),te]),t("div",ee,[oe,se,t("div",ne,[r(t("input",{class:"form-check-input","onUpdate:modelValue":o[20]||(o[20]=s=>e.form.businessInfo.need_photo=s),type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"},null,512),[[h,e.form.businessInfo.need_photo]]),t("label",le,[e.form.businessInfo.need_photo?(n(),l("strong",ie,"Фото")):i("",!0),e.form.businessInfo.need_photo?i("",!0):(n(),l("strong",re,"Ссылка"))])]),e.form.businessInfo.need_photo?(n(),l("label",ae,[e.form.businessInfo.image?(n(),l("span",me,[r(t("img",pe,null,512),[[_,c.getPhoto(e.form.businessInfo.image).imageUrl]])])):(n(),l("span",ce,ue)),t("input",{type:"file",name:"businessInfo-image-photo",id:"businessInfo-image-photo",accept:"image/*",onChange:o[21]||(o[21]=s=>c.onChangePhotos(s,"businessInfo","image")),style:{display:"none"},required:""},null,32)])):i("",!0),e.form.businessInfo.need_photo?i("",!0):(n(),l("div",he,ge))]),t("div",null,[t("button",{type:"button",class:"btn mt-3 btn-primary shadow rounded-pill px-3 mr-2",onClick:o[22]||(o[22]=s=>e.step--)}," Назад "),be])],32)):i("",!0),e.step===4?(n(),l("form",{key:4,onSubmit:o[27]||(o[27]=g(s=>e.step++,["prevent"])),class:"w-100 d-flex justify-content-center align-items-center flex-column"},[ye,xe,t("div",ve,[ke,t("div",we,[r(t("input",{class:"form-check-input","onUpdate:modelValue":o[24]||(o[24]=s=>e.form.contacts.need_photo=s),type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"},null,512),[[h,e.form.contacts.need_photo]]),t("label",Ie,[e.form.contacts.need_photo?(n(),l("strong",Ce,"Фото")):i("",!0),e.form.contacts.need_photo?i("",!0):(n(),l("strong",Ue,"Ссылка"))])]),e.form.contacts.need_photo?(n(),l("label",je,[e.form.contacts.image?(n(),l("span",De,[r(t("img",Pe,null,512),[[_,c.getPhoto(e.form.contacts.image).imageUrl]])])):(n(),l("span",Ve,Se)),t("input",{type:"file",name:"contacts-image-photo",id:"contacts-image-photo",accept:"image/*",onChange:o[25]||(o[25]=s=>c.onChangePhotos(s,"contacts","image")),style:{display:"none"},required:""},null,32)])):i("",!0),e.form.contacts.need_photo?i("",!0):(n(),l("div",Ge,Be)),Fe,t("div",ze,[Me,t("ul",Ne,[(n(!0),l(y,null,x(e.contactTypes,s=>(n(),l("li",null,[t("a",{onClick:d=>c.addContact(s),class:"dropdown-item"},[t("i",{class:C([s.icon,"mr-1"])},null,2),u(b(s.title||"Не указан"),1)],8,Oe)]))),256))])])]),t("div",Ee,[(n(!0),l(y,null,x(e.form.contacts.links,(s,d)=>(n(),l("div",He,[t("div",Re,[t("div",Ae,[t("div",Je,[s.mask?r((n(),l("input",{key:0,type:"text",pattern:s.pattern,class:"form-control",id:"contact-input-"+d,"onUpdate:modelValue":m=>e.form.contacts.links[d].value=m,required:""},null,8,Ze)),[[w,s.mask],[f,e.form.contacts.links[d].value]]):r((n(),l("input",{key:1,type:"text",pattern:s.pattern,class:"form-control",id:"contact-input-"+d,"onUpdate:modelValue":m=>e.form.contacts.links[d].value=m,required:""},null,8,Ke)),[[f,e.form.contacts.links[d].value]]),t("label",{class:"text-primary",for:"contact-input-"+d},b(s.title||"Без названия"),9,Qe)]),t("div",We,[r(t("textarea",{class:"form-control","onUpdate:modelValue":m=>e.form.contacts.links[d].description=m,placeholder:"Leave a comment here",id:"contact-description-textarea-"+d,required:""},`

                                        `,8,Xe),[[f,e.form.contacts.links[d].description]]),t("label",{class:"text-primary",for:"contact-description-textarea-"+d},"Описание",8,Ye)]),t("div",$e,[to,t("ul",eo,[t("li",null,[t("a",{class:"dropdown-item",onClick:m=>c.remove(d)},[so,u(" Удалить")],8,oo)]),t("li",null,[t("a",{class:"dropdown-item",onClick:m=>c.duplicate(s)},[lo,u(" Дублировать")],8,no)])])])])])]))),256))]),t("div",null,[t("button",{type:"button",class:"btn mt-3 btn-primary rounded-pill px-3 mr-2",onClick:o[26]||(o[26]=s=>e.step--)}," Назад "),io])],32)):i("",!0),e.step===5?(n(),l("form",{key:5,onSubmit:o[31]||(o[31]=g((...s)=>c.submitBot&&c.submitBot(...s),["prevent"])),class:"w-100 d-flex justify-content-center align-items-center flex-column"},[ro,t("p",null,[e.form.functions.length>0?(n(),l("span",ao,"механик выбрано - "+b(e.form.functions.length)+" ед. ",1)):i("",!0),e.form.functions.length>0?(n(),l("a",{key:1,class:"underline cursor-pointer ml-2",onClick:o[28]||(o[28]=s=>e.form.functions=[])},fo)):i("",!0)]),t("div",uo,[(n(!0),l(y,null,x(e.moreFunctions,s=>(n(),l("div",mo,[s.description?(n(),l("button",{key:0,type:"button",class:"btn btn-link text-light function-info-modal-btn","data-bs-toggle":"modal","data-bs-target":"#info-modal-"+s.slug},_o,8,po)):i("",!0),t("div",{class:"modal fade",id:"info-modal-"+s.slug,tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},[t("div",bo,[t("div",yo,[t("div",xo,[t("p",{class:"text-center",innerHTML:s.description},null,8,vo)])])])],8,go),r(t("input",{type:"checkbox",disabled:!s.is_active,"onUpdate:modelValue":o[29]||(o[29]=d=>e.form.functions=d),value:s.slug,class:"btn-check function-check",id:"btn-check-outlined"+s.slug},null,8,ko),[[h,e.form.functions]]),t("label",{style:{"min-height":"100px"},class:"btn btn-outline-light shadow d-flex flex-column align-items-center justify-content-center",for:"btn-check-outlined"+s.slug},[t("i",{class:C(s.icon)},null,2),t("span",Io,b(s.title),1)],8,wo)]))),256))]),e.form.functions.length>0?(n(),l("div",Co,[t("div",Uo,[(n(!0),l(y,null,x(e.form.functions,s=>(n(),l("span",jo,b(s),1))),256))])])):i("",!0),t("div",null,[t("button",{type:"button",class:"btn mt-3 btn-primary rounded-pill px-3 mr-2",onClick:o[30]||(o[30]=s=>e.step--)}," Назад "),Vo])],32)):i("",!0),e.step===6?(n(),l("div",To,[qo,t("div",So,[t("div",Do,[t("div",Po,[t("iframe",{src:"/web/"+e.form.botDomain},null,8,Go)])]),Lo])])):i("",!0)])])}const zo=j(V,[["render",Bo]]);export{zo as V};
