import{L as T,q as a,t as i,v as t,x as b,P as C,H as p,J as _,D as f,y as u,A as c,F as y,C as v,T as w,Z as I,G as V,B as F,O as B,u as $,a2 as S,N as U,R as x,K as j}from"./index.es-bac3219e.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";const M={data(){return{tab:0,need_cashback_config:!1,need_cashback_rules:!1,need_cashback_fired:!1,warnings:[{title:"Сумма чека больше чем",key:"bill_sum_more_then"},{title:"Сумма начисления кэшбэка больше чем",key:"cashback_up_sum_more_then"},{title:"Сумма списания кэшбэка больше чем",key:"cashback_down_sum_more_then"}],cashback_fire_periods:[{title:"Не сгорает",value:0},{title:"7 дней",value:7},{title:"15 дней",value:15},{title:"30 дней",value:30},{title:"60 дней",value:60},{title:"60 дней",value:90},{title:"120 дней",value:120},{title:"180 дней",value:180},{title:"360 дней",value:360}],selected_warning:null,botForm:{warnings:[],payment_provider_token:null,auto_cashback_on_payments:!1,level_1:0,level_2:0,level_3:0,max_cashback_use_percent:0,cashback_config:[]},companyForm:{id:null,title:null,description:null,address:null,phones:[],links:{vk:null,inst:null,map_link:null},email:null,schedule:[{day:"Понедельник",start_at:"08:00",end_at:"20:00",closed:!1,closed_comment:"Выходной"},{day:"Вторник",start_at:"08:00",end_at:"20:00",closed:!1,closed_comment:"Выходной"},{day:"Среда",start_at:"08:00",end_at:"20:00",closed:!1,closed_comment:"Выходной"},{day:"Четверг",start_at:"08:00",end_at:"20:00",closed:!1,closed_comment:"Выходной"},{day:"Пятница",start_at:"08:00",end_at:"20:00",closed:!1,closed_comment:"Выходной"},{day:"Суббота",start_at:"08:00",end_at:"20:00",closed:!1,closed_comment:"Выходной"},{day:"Воскресенье",start_at:"08:00",end_at:"20:00",closed:!1,closed_comment:"Выходной"}]}}},computed:{currentBot(){return window.currentBot},filteredWarnings(){return this.botForm.warnings.length===0?this.warnings:this.warnings.filter(s=>!(this.botForm.warnings.findIndex(e=>e.rule_key===s.key)>=0))}},mounted(){const s=this.currentBot.company;this.companyForm.id=s.id||null,this.companyForm.title=s.title||null,this.companyForm.description=s.description||null,this.companyForm.email=s.email||null,this.companyForm.address=s.address||null,this.companyForm.phones=s.phones||["+7"],this.botForm.payment_provider_token=this.currentBot.payment_provider_token||null,this.botForm.auto_cashback_on_payments=this.currentBot.auto_cashback_on_payments||!1,this.botForm.max_cashback_use_percent=this.currentBot.max_cashback_use_percent||0,this.botForm.level_1=this.currentBot.level_1||0,this.botForm.level_2=this.currentBot.level_2||0,this.botForm.level_3=this.currentBot.level_3||0,this.botForm.cashback_config=this.currentBot.cashback_config||[],this.botForm.warnings=this.currentBot.warnings||[];let e=(m=[])=>{let o=["inst","vk","map_link"],d=!1,g=0;return Object.keys(m).forEach(n=>{o.indexOf(n)!==-1&&(d=!0,g++)}),d&&g===o.length};this.companyForm.links=e(s.links||[])?s.links:this.companyForm.links;let l=m=>{if((m||[]).length<7)return!1;let o=!0;return m.forEach(d=>{o=o&&typeof d=="object"}),o};this.companyForm.schedule=l(s.schedule)?s.schedule:this.companyForm.schedule},methods:{submitBotForm(){let s=new FormData;Object.keys(this.botForm).forEach(e=>{const l=this.botForm[e]||"";typeof l=="object"?s.append(e,JSON.stringify(l)):s.append(e,l)}),this.$store.dispatch("updateBotParams",{botForm:s}).then(e=>{this.$notify({title:"Информация о боте",text:"Информация о боте успешно обновлена!",type:"success"}),this.$emit("callback",e.data),window.location.reload()}).catch(e=>{this.$notify({title:"Информация о боте",text:"Ошибка обновления информации о боте",type:"error"})})},submitCompanyForm(){let s=new FormData;Object.keys(this.companyForm).forEach(e=>{const l=this.companyForm[e]||"";typeof l=="object"?s.append(e,JSON.stringify(l)):s.append(e,l)}),this.$store.dispatch("updateCompany",{companyForm:s}).then(e=>{this.$notify({title:"Информация о компании",text:"Информация о компании успешно обновлена!",type:"success"}),this.$emit("callback",e.data),window.location.reload()}).catch(e=>{this.$notify({title:"Информация о компании",text:"Ошибка обновления информации о компании",type:"error"})})},addWarning(){const s=this.selected_warning;this.botForm.warnings.push({rule_key:s.key,rule_value:0,is_active:!0}),this.selected_warning=null},addCashBackConfig(){this.botForm.cashback_config=this.botForm.cashback_config==null?[]:this.botForm.cashback_config,this.botForm.cashback_config.push({title:null})},getWarning(s){let e=this.warnings.find(l=>l.key===s);return e||{title:"Не найдено"}},removeWarning(s){this.botForm.warnings.splice(s,1)},removeCashBackConfig(s){this.botForm.cashback_config.splice(s,1)}}},z={class:"nav nav-tabs mb-2"},q={class:"nav-item"},E={class:"nav-item"},O={class:"form-floating mb-2"},D={for:"floatingInput"},W={key:0,class:"ml-1",style:{"font-size":"10px"}},P={class:"form-floating"},H={for:"floatingTextarea2"},N={key:0,class:"ml-1",style:{"font-size":"10px"}},A=t("h6",{class:"opacity-75 my-2"},"Контактная информация",-1),J={class:"form-floating mb-2"},R=t("label",{for:"floatingInput"},"Телефон",-1),G={class:"form-floating mb-2"},K=t("label",{for:"floatingInput"},"Инста",-1),X={class:"form-floating mb-2"},Y=t("label",{for:"floatingInput"},"Вконтакте",-1),Z={class:"form-floating mb-2"},Q=t("label",{for:"floatingInput"},"Почта",-1),tt=t("h6",{class:"opacity-75 my-2"},"Расположение заведения",-1),et={class:"form-floating mb-2"},ot={for:"floatingInput"},st={key:0,class:"ml-1",style:{"font-size":"10px"}},nt={class:"form-floating mb-2"},lt=t("label",{for:"floatingInput"},"Виджет с Яндекс.Картой",-1),at=t("h6",{class:"opacity-75 my-3"},"График работы",-1),it=t("div",{class:"alert alert-light p-2",style:{"font-size":"12px"},role:"alert"},[f(" Укажите график работы вашего заведения. Если в какой-то день ваше заведение "),t("span",{class:"fw-bold"},"закрыто"),f(" - поставьте галочку сбоку от времени и укажите причину. ")],-1),rt={class:"mb-0",style:{"font-size":"12px"}},ct={class:"input-group mb-2"},mt={class:"input-group-text"},dt=["onUpdate:modelValue"],pt={key:0,class:"form-floating"},ut=["onUpdate:modelValue"],ht=t("label",{for:"floatingInput"},"Начало",-1),_t={key:1,class:"form-floating"},ft=["onUpdate:modelValue"],bt=t("label",{for:"floatingInput"},"Окончание",-1),yt={key:2,class:"form-floating"},gt=["onUpdate:modelValue"],kt=t("label",{for:"floatingInput"},"Причина закрытия",-1),vt=t("button",{style:{"z-index":"100"},type:"submit",class:"btn btn-primary w-100 p-3 mb-3 position-sticky bottom-0"},"Сохранить изменения ",-1),wt=t("div",{class:"alert alert-light mb-2"}," Максимальное значение CashBack, которое пользователь может списать во время покупки в магазине, в % от цены заказа. ",-1),Ft={class:"form-floating mb-2"},Ct=t("label",{for:"floatingInput"},"CashBack",-1),xt=t("div",{class:"alert alert-light mb-2"}," Уровни автоматического начисления CashBack по реферальной программе, в %. ",-1),Vt={class:"form-floating mb-2"},Bt=t("label",{for:"floatingInput"},"Уровень 1, %",-1),Tt={class:"form-floating mb-2"},It=t("label",{for:"floatingInput"},"Уровень 2, %",-1),$t={class:"form-floating mb-2"},St=t("label",{for:"floatingInput"},"Уровень 3, %",-1),Ut={class:"mb-2"},jt={class:"form-check"},Lt=t("label",{class:"form-check-label",for:"need-cashback-config"}," Необходимо настроить CashBack по категориям ",-1),Mt={key:0,class:"mb-2"},zt=t("h6",{class:"opacity-75 my-2"},"Настройка категорий CashBack-а",-1),qt=t("div",{class:"alert alert-light",role:"alert"}," Категории CashBack - это возможность разделить накопления и траты CashBack пользователями бота на указанные цели, например, кофейня может создать категории: на кофе, на десерты - и начислять баллы за купленный кофе отдельно от баллов за купленный десерт ",-1),Et={class:"input-group mb-2"},Ot={class:"form-floating"},Dt=["onUpdate:modelValue"],Wt=t("label",{for:"floatingInput"},"Название категории",-1),Pt=["onClick"],Ht=t("i",{class:"fa-regular fa-trash-can"},null,-1),Nt=[Ht],At={class:"mb-2"},Jt={class:"form-check"},Rt=t("label",{class:"form-check-label",for:"need-cashback-rules"}," Необходимо настроить оповещения под CashBack ",-1),Gt={key:1,class:"col-md-12 col-12 mb-2"},Kt={class:"form-floating mb-2"},Xt=t("option",{value:null},"Не выбрано",-1),Yt=["value"],Zt=t("label",{for:"floatingSelect"},[t("i",{class:"fa-solid fa-triangle-exclamation text-danger"}),f(" Правила критических оповещений ")],-1),Qt={class:"m-0 fst-italic"},te={class:"input-group mb-2"},ee={class:"input-group-text"},oe={class:"form-check d-flex justify-content-center align-items-center"},se=["onUpdate:modelValue","id"],ne={class:"form-floating"},le=["onUpdate:modelValue"],ae=t("label",{for:"floatingInput"},"Значение",-1),ie=["onClick"],re=t("i",{class:"fa-regular fa-trash-can"},null,-1),ce=[re],me=t("button",{style:{"z-index":"100"},type:"submit",class:"btn btn-primary w-100 p-3 mb-3 position-sticky bottom-0"},"Сохранить изменения ",-1);function de(s,e,l,m,o,d){const g=T("mask");return a(),i(y,null,[t("ul",z,[t("li",q,[t("a",{class:b(["nav-link",{"active fw-bold":o.tab===0}]),onClick:e[0]||(e[0]=n=>o.tab=0),"aria-current":"page",href:"javascript:void(0)"},"Основное",2)]),t("li",E,[t("a",{class:b(["nav-link",{"active fw-bold":o.tab===1}]),onClick:e[1]||(e[1]=n=>o.tab=1),href:"javascript:void(0)"},"CashBack",2)])]),o.tab===0?(a(),i("form",{key:0,onSubmit:e[10]||(e[10]=C((...n)=>d.submitCompanyForm&&d.submitCompanyForm(...n),["prevent"]))},[t("div",O,[p(t("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=n=>o.companyForm.title=n),maxlength:"255",class:"form-control",id:"floatingInput",placeholder:"name@example.com",required:""},null,512),[[_,o.companyForm.title]]),t("label",D,[f("Название "),(o.companyForm.title||"").length>0?(a(),i("span",W,"("+u(o.companyForm.title.length)+"/255)",1)):c("",!0)])]),t("div",P,[p(t("textarea",{"onUpdate:modelValue":e[3]||(e[3]=n=>o.companyForm.description=n),maxlength:"512",required:"",class:"form-control",placeholder:"Leave a comment here",id:"floatingTextarea2",style:{height:"200px"}},null,512),[[_,o.companyForm.description]]),t("label",H,[f("Описание "),(o.companyForm.description||"").length>0?(a(),i("span",N,"("+u(o.companyForm.description.length)+"/512)",1)):c("",!0)])]),A,t("div",J,[p(t("input",{type:"text","onUpdate:modelValue":e[4]||(e[4]=n=>o.companyForm.phones[0]=n),class:"form-control",id:"floatingInput",placeholder:"name@example.com"},null,512),[[g,["+7(###)###-##-##"]],[_,o.companyForm.phones[0]]]),R]),t("div",G,[p(t("input",{type:"text","onUpdate:modelValue":e[5]||(e[5]=n=>o.companyForm.links.inst=n),class:"form-control",id:"floatingInput",placeholder:"name@example.com"},null,512),[[_,o.companyForm.links.inst]]),K]),t("div",X,[p(t("input",{type:"text","onUpdate:modelValue":e[6]||(e[6]=n=>o.companyForm.links.vk=n),class:"form-control",id:"floatingInput",placeholder:"name@example.com"},null,512),[[_,o.companyForm.links.vk]]),Y]),t("div",Z,[p(t("input",{type:"email","onUpdate:modelValue":e[7]||(e[7]=n=>o.companyForm.email=n),class:"form-control",id:"floatingInput",placeholder:"name@example.com"},null,512),[[_,o.companyForm.email]]),Q]),tt,t("div",et,[p(t("input",{type:"text","onUpdate:modelValue":e[8]||(e[8]=n=>o.companyForm.address=n),class:"form-control",id:"floatingInput",placeholder:"name@example.com"},null,512),[[_,o.companyForm.address]]),t("label",ot,[f("Адрес расположения "),(o.companyForm.address||"").length>0?(a(),i("span",st,"("+u(o.companyForm.address.length)+"/255)",1)):c("",!0)])]),t("div",nt,[p(t("textarea",{"onUpdate:modelValue":e[9]||(e[9]=n=>o.companyForm.links.map_link=n),class:"form-control",placeholder:"Leave a comment here",id:"floatingTextarea2",style:{height:"200px"}},null,512),[[_,o.companyForm.links.map_link]]),lt]),at,it,(a(!0),i(y,null,v(o.companyForm.schedule,(n,r)=>(a(),i(y,null,[t("p",rt,u(o.companyForm.schedule[r].day),1),t("div",ct,[t("div",mt,[p(t("input",{class:"form-check-input mt-0","onUpdate:modelValue":h=>o.companyForm.schedule[r].closed=h,type:"checkbox",value:"","aria-label":"Checkbox for following text input"},null,8,dt),[[w,o.companyForm.schedule[r].closed]])]),o.companyForm.schedule[r].closed?c("",!0):(a(),i("div",pt,[p(t("input",{type:"time","onUpdate:modelValue":h=>o.companyForm.schedule[r].start_at=h,class:"form-control",id:"floatingInput",placeholder:"name@example.com"},null,8,ut),[[_,o.companyForm.schedule[r].start_at]]),ht])),o.companyForm.schedule[r].closed?c("",!0):(a(),i("div",_t,[p(t("input",{type:"time","onUpdate:modelValue":h=>o.companyForm.schedule[r].end_at=h,class:"form-control",id:"floatingInput",placeholder:"name@example.com"},null,8,ft),[[_,o.companyForm.schedule[r].end_at]]),bt])),o.companyForm.schedule[r].closed?(a(),i("div",yt,[p(t("input",{type:"text","onUpdate:modelValue":h=>o.companyForm.schedule[r].closed_comment=h,class:"form-control",id:"floatingInput",placeholder:"name@example.com"},null,8,gt),[[_,o.companyForm.schedule[r].closed_comment]]),kt])):c("",!0)])],64))),256)),vt],32)):c("",!0),o.tab===1?(a(),i("form",{key:1,onSubmit:e[20]||(e[20]=C((...n)=>d.submitBotForm&&d.submitBotForm(...n),["prevent"]))},[wt,t("div",Ft,[p(t("input",{type:"number","onUpdate:modelValue":e[11]||(e[11]=n=>o.botForm.max_cashback_use_percent=n),min:"0",max:"100",class:"form-control",id:"floatingInput",placeholder:"name@example.com",required:""},null,512),[[_,o.botForm.max_cashback_use_percent]]),Ct]),xt,t("div",Vt,[p(t("input",{type:"number","onUpdate:modelValue":e[12]||(e[12]=n=>o.botForm.level_1=n),min:"0",max:"100",class:"form-control",id:"floatingInput",placeholder:"name@example.com",required:""},null,512),[[_,o.botForm.level_1]]),Bt]),t("div",Tt,[p(t("input",{type:"number","onUpdate:modelValue":e[13]||(e[13]=n=>o.botForm.level_2=n),min:"0",max:"100",class:"form-control",id:"floatingInput",placeholder:"name@example.com",required:""},null,512),[[_,o.botForm.level_2]]),It]),t("div",$t,[p(t("input",{type:"number","onUpdate:modelValue":e[14]||(e[14]=n=>o.botForm.level_3=n),min:"0",max:"100",class:"form-control",id:"floatingInput",placeholder:"name@example.com",required:""},null,512),[[_,o.botForm.level_3]]),St]),t("div",Ut,[t("div",jt,[p(t("input",{class:"form-check-input","onUpdate:modelValue":e[15]||(e[15]=n=>o.need_cashback_config=n),type:"checkbox",id:"need-cashback-config"},null,512),[[w,o.need_cashback_config]]),Lt])]),o.need_cashback_config?(a(),i("div",Mt,[zt,qt,(a(!0),i(y,null,v(o.botForm.cashback_config,(n,r)=>(a(),i("div",{class:"d-flex justify-content-between flex-wrap",key:"social-link"+r},[t("div",Et,[t("div",Ot,[p(t("input",{type:"text",placeholder:"Название категории","aria-label":"Название категории",maxlength:"255","onUpdate:modelValue":h=>o.botForm.cashback_config[r].title=h,class:"form-control",id:"floatingInput"},null,8,Dt),[[_,o.botForm.cashback_config[r].title]]),Wt]),t("button",{type:"button",onClick:h=>d.removeCashBackConfig(r),class:"btn btn-outline-light text-danger"},Nt,8,Pt)])]))),128)),t("button",{type:"button",onClick:e[16]||(e[16]=n=>d.addCashBackConfig()),class:"btn mb-2 rounded-sm btn-outline-primary p-3 w-100"}," Добавить категорию ")])):c("",!0),t("div",At,[t("div",Jt,[p(t("input",{class:"form-check-input","onUpdate:modelValue":e[17]||(e[17]=n=>o.need_cashback_rules=n),type:"checkbox",id:"need-cashback-rules"},null,512),[[w,o.need_cashback_rules]]),Rt])]),o.need_cashback_rules?(a(),i("div",Gt,[t("div",Kt,[p(t("select",{class:"form-select","onUpdate:modelValue":e[18]||(e[18]=n=>o.selected_warning=n),onChange:e[19]||(e[19]=(...n)=>d.addWarning&&d.addWarning(...n)),id:"floatingSelect","aria-label":"Floating label select example"},[Xt,(a(!0),i(y,null,v(d.filteredWarnings,n=>(a(),i("option",{value:n},u(n.title),9,Yt))),256))],544),[[I,o.selected_warning]]),Zt]),(a(!0),i(y,null,v(o.botForm.warnings,(n,r)=>(a(),i(y,null,[t("p",Qt,u(d.getWarning(n.rule_key).title||"Не найдено"),1),t("div",te,[t("div",ee,[t("div",oe,[p(t("input",{class:"form-check-input","onUpdate:modelValue":h=>o.botForm.warnings[r].is_active=h,type:"checkbox",id:"warning-is-active-"+r},null,8,se),[[w,o.botForm.warnings[r].is_active]])])]),t("div",ne,[p(t("input",{type:"number",placeholder:"Значение","aria-label":"Значение","onUpdate:modelValue":h=>o.botForm.warnings[r].rule_value=h,min:"0",class:"form-control",id:"floatingInput"},null,8,le),[[_,o.botForm.warnings[r].rule_value]]),ae]),t("button",{type:"button",onClick:h=>d.removeWarning(r),class:"btn btn-outline-light text-danger"},ce,8,ie)])],64))),256))])):c("",!0),me],32)):c("",!0)],64)}const pe=L(M,[["render",de]]);const ue=t("title",null,"CashMan - система твоего бизнеса внутри",-1),he=t("meta",{name:"description",content:"CashMan - система твоего бизнеса внутри"},null,-1),_e={key:0,"data-bs-theme":"dark"},fe={class:"navbar shadow shadow-sm"},be={class:"container flex-row-reverse p-2"},ye={key:0,class:"mb-0 fw-bold d-flex flex-column",style:{"font-size":"12px"}},ge={key:0,class:"text-primary"},ke=t("i",{class:"fa-solid fa-location-dot mr-1"},null,-1),ve={key:1,class:"text-primary"},we={key:2,class:"small d-flex justify-content-end"},Fe={href:"javascript:void(0)",class:"text-secondary fw-bold"},Ce={key:1,class:"mb-0 text-primary",style:{"font-size":"12px"}},xe=t("button",{class:"btn btn-link rounded-0 border-0 p-1",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#sidebar-menu","aria-controls":"sidebar-menu"},[t("span",{class:"navbar-toggler-icon"})],-1),Ve={class:"text-body-secondary",style:{padding:"0px 0px 90px 0px"}},Be={class:"container d-flex justify-content-center flex-column align-items-center"},Te={class:"text-center mb-3"},Ie=["innerHTML"],$e=t("br",null,null,-1),Se={key:0,"data-bs-toggle":"modal","data-bs-target":"#edit-shop-footer-description-modal",href:"javascript:void(0)",class:"text-primary ml-2",style:{"font-size":"12px"}},Ue=t("i",{class:"fa-solid fa-pen-to-square"},null,-1),je={key:1,class:"mb-3 text-center"},Le=t("i",{class:"fa-solid fa-map-location-dot mr-2"},null,-1),Me={class:"mb-0"},ze={class:"d-flex justify-content-center my-3"},qe=t("i",{class:"fa-solid fa-arrow-up mr-2"},null,-1),Ee={class:"offcanvas offcanvas-start custom-offcanvas",style:{width:"70%","border-radius":"0px 10px 10px 0px"},tabindex:"-1",id:"sidebar-menu","aria-labelledby":"offcanvasExampleLabel"},Oe={class:"offcanvas-header"},De={class:"offcanvas-title",id:"offcanvasExampleLabel"},We=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"offcanvas","aria-label":"Close"},null,-1),Pe={class:"offcanvas-body"},He={class:"list-unstyled"},Ne={class:"p-1"},Ae={class:"p-1"},Je={class:"p-1"},Re={class:"p-1"},Ge={key:0,class:"fw-bold"},Ke={class:"p-1"},Xe={class:"p-1"},Ye={class:"p-1"},Ze=t("div",{class:"border-top my-3"},null,-1),Qe={key:0,class:"p-2"},to={class:"list-unstyled"},eo={key:0},oo=t("p",{class:"mb-0"},"Телефон",-1),so=[oo],no={key:1,class:"mb-2"},lo=["href"],ao={key:2},io=t("p",{class:"mb-0"},"Ссылки",-1),ro=[io],co={key:3},mo=["href"],po=t("i",{class:"fa-brands fa-instagram mr-1"},null,-1),uo={key:4},ho=["href"],_o=t("i",{class:"fa-brands fa-vk mr-1"},null,-1),fo={key:5},bo=t("p",{class:"mb-0"},"Почта",-1),yo=[bo],go=["href"],ko={class:"modal fade",id:"edit-shop-footer-description-modal",tabindex:"-1","aria-labelledby":"edit-shop-footer-description","aria-hidden":"true"},vo={class:"modal-dialog modal-fullscreen"},wo={class:"modal-content"},Fo=t("div",{class:"modal-header"},[t("h1",{class:"modal-title fs-5",id:"exampleModalLabel"},"Редактор"),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Co={class:"modal-body"},xo={data(){return{currentTheme:"",themes:[{title:"Тема 3",href:"/theme5.bootstrap.min.css"},{title:"Тема 4",href:"/theme6.bootstrap.min.css"},{title:"Тема 5",href:"/theme8.bootstrap.min.css"},{title:"Тема 6",href:"/theme9.bootstrap.min.css"},{title:"Тема 7",href:"/theme10.bootstrap.min.css"},{title:"Тема 8",href:"/theme11.bootstrap.min.css"},{title:"Тема 9",href:"/theme12.bootstrap.min.css"},{title:"Тема 10",href:"/theme13.bootstrap.min.css"},{title:"Тема 11",href:"/theme14.bootstrap.min.css"},{title:"Тема 12",href:"/theme15.bootstrap.min.css"},{title:"Тема 13",href:"/theme16.bootstrap.min.css"}]}},watch:{$route(s){let e=localStorage.getItem("cashman_global_client_theme")||null;e&&this.$nextTick(()=>{this.currentTheme=e}),this.$preloader.show(),this.$nextTick(()=>{document.body.scrollTop=document.documentElement.scrollTop=0})}},computed:{...V(["getSelf","cartTotalCount"]),tg(){return window.Telegram.WebApp},bot(){return window.currentBot},needHideMenu(){return new URLSearchParams(window.location.search).has("hide_menu")||this.$route.meta.hide_menu},links(){return{inst:(this.bot.company.links||{inst:null}).inst||null,vk:(this.bot.company.links||{inst:null}).vk||null,map_link:(this.bot.company.links||{inst:null}).map_link||null}}},mounted(){let s=localStorage.getItem("cashman_global_client_theme")||null;s&&this.$nextTick(()=>{this.currentTheme=s}),this.changeTheme(this.tg.colorScheme),this.tg.expand(),this.tg.BackButton.hide()},methods:{switchTheme(s){let e=document.querySelector("#theme");e.href=this.themes[s].href,localStorage.setItem("cashman_global_client_theme",e.href),this.$nextTick(()=>{this.currentTheme=e.href})},goTo(s){this.$router.push({name:s})},changeTheme(s){document.querySelectorAll("[data-bs-theme]").forEach(l=>{l.setAttribute("data-bs-theme",s)})},scrollTop(){window.scrollTo(0,80)},openLink(s){this.tg.openLink(s,{try_instant_view:!0})},closeShop(){this.tg.close()}}},Vo=Object.assign(xo,{__name:"V2Layout",setup(s){return(e,l)=>(a(),i(y,null,[F($(S),null,{default:B(()=>[ue,he]),_:1}),e.needHideMenu?c("",!0):(a(),i("header",_e,[t("div",fe,[t("div",be,[e.bot.company?(a(),i("p",ye,[e.bot.company.address?(a(),i("span",ge,[ke,f(" "+u(e.bot.company.address),1)])):(a(),i("span",ve,u(e.bot.title||"Магазин"),1)),(e.bot.company.phones||[]).length>0?(a(),i("span",we,[t("a",Fe,u(e.bot.company.phones[0]),1)])):c("",!0)])):(a(),i("p",Ce,u(e.bot.title||"Бот"),1)),xe])])])),U(e.$slots,"default"),t("footer",Ve,[t("div",Be,[e.$route.name!="FeedBackV2"?(a(),i("button",{key:0,onClick:l[0]||(l[0]=m=>e.goTo("FeedBackV2")),class:"btn btn-link mb-2 w-100 p-3 text-primary"},"Обратная связь ")):c("",!0),t("p",Te,[t("span",{innerHTML:e.bot.company.description},null,8,Ie),$e,(e.getSelf||{is_admin:!1}).is_admin?(a(),i("a",Se,[Ue,f(" редактировать")])):c("",!0)]),e.bot.company.address?(a(),i("p",je,[Le,f(u(e.bot.company.address),1)])):c("",!0),t("p",Me,u(e.bot.company.title)+"©"+u(new Date().getFullYear()),1),t("p",ze,[t("a",{href:"javascript:void(0)",onClick:l[1]||(l[1]=(...m)=>e.scrollTop&&e.scrollTop(...m))},[qe,f("Вернуться наверх")])])])]),t("div",Ee,[t("div",Oe,[t("h6",De,u(e.bot.title||"Магазин"),1),We]),t("div",Pe,[t("ul",He,[t("li",Ne,[t("a",{class:b([{"fw-bold":e.$route.name==="MenuV2"},"text-decoration-none fw-normal"]),onClick:l[2]||(l[2]=m=>e.goTo("MenuV2")),href:"javascript:void(0)"}," Главное меню",2)]),t("li",Ae,[t("a",{class:b([{"fw-bold":e.$route.name==="ProfileV2"},"text-decoration-none fw-normal"]),onClick:l[3]||(l[3]=m=>e.goTo("ProfileV2")),href:"javascript:void(0)"}," Профиль",2)]),t("li",Je,[t("a",{class:b([{"fw-bold":e.$route.name==="CatalogV2"},"text-decoration-none fw-normal"]),onClick:l[4]||(l[4]=m=>e.goTo("CatalogV2")),href:"javascript:void(0)"}," Каталог товаров",2)]),t("li",Re,[t("a",{class:b([{"fw-bold":e.$route.name==="ShopCartV2"},"text-decoration-none fw-normal"]),onClick:l[5]||(l[5]=m=>e.goTo("ShopCartV2")),href:"javascript:void(0)"},[f(" Корзина "),e.cartTotalCount>0?(a(),i("span",Ge,"("+u(e.cartTotalCount)+")",1)):c("",!0)],2)]),t("li",Ke,[t("a",{class:b([{"fw-bold":e.$route.name==="OrdersV2"},"text-decoration-none fw-normal"]),onClick:l[6]||(l[6]=m=>e.goTo("OrdersV2")),href:"javascript:void(0)"}," История заказов",2)]),t("li",Xe,[t("a",{class:b([{"fw-bold":e.$route.name==="CashBackV2"},"text-decoration-none fw-normal"]),onClick:l[7]||(l[7]=m=>e.goTo("CashBackV2")),href:"javascript:void(0)"}," CashBack",2)]),t("li",Ye,[t("a",{class:b([{"fw-bold":e.$route.name==="FeedBackV2"},"text-decoration-none fw-normal"]),onClick:l[8]||(l[8]=m=>e.goTo("FeedBackV2")),href:"javascript:void(0)"}," Оставить отзыв",2)])]),Ze,e.bot.company?(a(),i("div",Qe,[t("ul",to,[(e.bot.company.phones||[]).length>0?(a(),i("li",eo,so)):c("",!0),(e.bot.company.phones||[]).length>0?(a(),i("li",no,[t("a",{target:"_blank",href:"tel:"+e.bot.company.phones[0],class:"text-decoration-none fw-bold"},u(e.bot.company.phones[0]||"-"),9,lo)])):c("",!0),e.links.inst||e.links.vk?(a(),i("li",ao,ro)):c("",!0),e.links.inst?(a(),i("li",co,[t("a",{target:"_blank",href:"http://instagram.com/"+e.links.inst,style:{"font-size":"12px"},class:"text-primary"},[po,f(" "+u(e.links.inst||"ссылка"),1)],8,mo)])):c("",!0),e.links.vk?(a(),i("li",uo,[t("a",{target:"_blank",href:"https://vk.com/"+e.links.vk,style:{"font-size":"12px"},class:"text-primary"},[_o,f(" "+u(e.links.vk||"ссылка"),1)],8,ho)])):c("",!0),e.bot.company.email?(a(),i("li",fo,yo)):c("",!0),t("li",null,[e.bot.company.email?(a(),i("a",{key:0,href:"mailto:"+e.bot.company.email,class:"text-decoration-none fw-bold"},u(e.bot.company.email),9,go)):c("",!0)])])])):c("",!0)])]),t("div",ko,[t("div",vo,[t("div",wo,[Fo,t("div",Co,[F(pe)])])])])],64))}}),Bo={computed:{...V(["getSelf"]),logo(){return`/images-by-bot-id/${this.currentBot.id}/${this.currentBot.image}`},self(){return window.self||null},tg(){return window.Telegram.WebApp},tgUser(){const s=new URLSearchParams(this.tg.initData);return JSON.parse(s.get("user"))},currentBot(){return window.currentBot},qr(){return"https://api.qrserver.com/v1/create-qr-code/?size=450x450&qzone=2&data="+this.link},link(){return"https://t.me/"+this.currentBot.bot_domain+"?start="+btoa("001"+this.self.telegram_chat_id)}},created(){window.currentBot=this.bot.data;const s=window.currentBot.company.schedule||[];if(window.isCorrectSchedule=e=>{if((e||[]).length<7)return!1;let l=!0;return e.forEach(m=>{l=l&&typeof m=="object"}),l},window.isCorrectSchedule(s)&&((!s||(s||[]).length===0)&&(window.currentBot.company.is_work=!0),s&&(s||[]).length>0)){const e=new Date().getUTCDay(),l=new Date().getHours(),m=new Date().getMinutes();let o=s[e].start_at||"08:00",d=parseInt(o.split(":")[0]),g=parseInt(o.split(":")[1]),n=s[e].end_at||"20:00",r=parseInt(n.split(":")[0]),h=parseInt(n.split(":")[1]),k=!1;d===l&&(k=m>=g),r===l&&(k=m<h),l>d&&l<r&&d<=r&&(k=!0),(l>d||l<=r)&&d>=r&&(k=!0),window.currentBot.company.is_work=!s[e].closed&&k}window.currentScript=this.slug_id||null,this.$store.dispatch("loadSelf").then(()=>{window.self=this.getSelf}),this.$notify({title:"Главная",text:"Успешно!",type:"success"})},methods:{open(s){this.tg.openLink(s)}}},$o=Object.assign(Bo,{__name:"MainV2",props:{bot:{type:Object},slug_id:{type:String}},setup(s){return(e,l)=>{const m=x("notifications"),o=x("router-view");return a(),j(Vo,null,{default:B(()=>[F(m,{position:"top right",width:"100%",speed:"100"}),F(o,{bot:s.bot},null,8,["bot"])]),_:1})}}});export{$o as default};
