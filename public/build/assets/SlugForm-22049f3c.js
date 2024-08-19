import{G as _,L as y,q as i,t as n,v as t,H as d,J as f,F as g,C as p,y as m,D as C,x as v,K as k,A as u,T as F,B as h,u as V,z as w,P as U}from"./index.es-bac3219e.js";import{V as b,T}from"./TelegramChannelHelper-73aab52f.js";import{_ as S}from"./BotMediaList-166fc8f2.js";const I={class:"form-floating mb-3"},$=t("label",{for:"floatingInput"},"Команда",-1),B={class:"form-floating mb-3"},J=t("label",{for:"floatingInput"},"Мнемоническое имя",-1),O={class:"form-floating mb-3"},N=t("label",{for:"floatingInput"},"Описание скрипта",-1),j=t("h6",null," Параметры скрипта ",-1),D=t("div",{class:"alert alert-info",role:"alert"}," Данные параметры используются для настройки скриптов на стороне сервера ",-1),M={class:"dropdown"},q=t("button",{class:"btn btn-outline-info w-100 dropdown-toggle mb-2",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}," Добавить ",-1),E={class:"dropdown-menu w-100"},H=["onClick"],L={class:"row"},z={class:"col-12"},G=["onClick"],P={key:0,class:"row"},A={class:"col-md-6 mb-1"},K={class:"card"},Q={class:"card-header d-flex justify-content-between align-items-center"},R=["onClick"],W=t("i",{class:"fa-solid fa-trash-can"},null,-1),X=[W],Y=["onClick"],Z=t("i",{class:"fa-solid fa-caret-left"},null,-1),x=[Z],ee=["onClick"],oe=t("i",{class:"fa-solid fa-caret-right"},null,-1),te=[oe],le={class:"dropdown"},se={class:"btn btn-outline-info dropdown-toggle",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},ie={class:"dropdown-menu"},ne=["onClick"],ae={class:"card-body"},re={class:"form-floating mb-1"},de=["onUpdate:modelValue","id"],fe=["for"],ue={class:"form-floating mb-1"},me=["innerHTML"],ce={key:1,class:"mb-0 font-10"},ge={key:0,class:"form-floating mb-1"},pe=["id","onUpdate:modelValue"],he=["for"],be={key:1,class:"form-check mb-1 mt-2"},_e=["onUpdate:modelValue","id"],ye=["for"],Ce={key:2,class:"form-floating mb-1 mt-2"},ve=["onUpdate:modelValue","id"],ke=["for"],Fe={key:3,class:"form-floating mb-1 mt-2"},Ve=["onUpdate:modelValue","id"],we=["for"],Ue={key:4,class:"form-floating mb-1 mt-2"},Te=["onUpdate:modelValue","id"],Se=["for"],Ie={key:5,class:"form-floating mb-1 mt-2"},$e=t("label",{class:"form-label",id:"bot-domain"},"JSON-код",-1),Be={key:6,class:"form-check mb-1 mt-2"},Je=["onUpdate:modelValue","id"],Oe=["for"],Ne={key:7,class:"form-floating mb-3"},je=["id","onUpdate:modelValue"],De=["for"],Me={key:8,class:"form-floating mb-3"},qe=["id","onUpdate:modelValue"],Ee=["for"],He={key:1,class:"row"},Le=t("div",{class:"col-12"},[t("p",null,"Параметры скрипта еще не добавлены")],-1),ze=[Le],Ge={class:"btn btn-primary text-white w-100 mt-2 p-3"},Pe={key:0},Ae={key:1},Ke={props:["item"],components:{Vue3JsonEditor:b},data(){return{filters:[],simple:!0,configTypes:[{title:"Текстовый или числовой параметр",type:"text"},{title:"Большое текстовое поле",type:"large-text"},{title:"Канал обратной связи",type:"channel"},{title:"Логический оператор",type:"boolean"},{title:"Ссылка на изображение",type:"image"},{title:"Цвет",type:"color"},{title:"Geo",type:"geo"},{title:"Номер телефона",type:"phone"},{title:"ID скрипта",type:"script"},{title:"JSON",type:"json"}],bot:null,photos:[],slugForm:{bot_id:null,id:null,command:null,comment:null,slug:null,config:[],is_global:!0}}},computed:{..._(["getCurrentBot"]),filteredConfigs(){return this.filters.length==0?this.slugForm.config:this.slugForm.config.filter(s=>this.filters.indexOf(s.type)>=0)}},mounted(){this.loadCurrentBot(),this.item&&(this.slugForm.id=this.item.id||null,this.slugForm.command=this.item.command,this.slugForm.comment=this.item.comment,this.slugForm.bot_id=this.item.bot_id,this.slugForm.slug=this.item.slug,this.slugForm.config=this.item.config||[],this.slugForm.is_global=this.item.is_global||!1)},methods:{toggleFilter(s){let e=this.filters.indexOf(s);e>=0?this.filters.splice(e,1):this.filters.push(s)},addTextTo(s,e={text:null}){this.slugForm.config[s].value=e.text},loadCurrentBot(s=null){return this.$store.dispatch("updateCurrentBot",{bot:s}).then(()=>{this.bot=this.getCurrentBot})},submit(){let s=new FormData;Object.keys(this.slugForm).forEach(e=>{const r=this.slugForm[e]||"";typeof r=="object"?s.append(e,JSON.stringify(r)):s.append(e,r)}),this.$store.dispatch(this.slugForm.id===null?"createSlug":"updateSlug",{slugForm:s}).then(e=>{this.$notify({title:"Конструктор команд",text:"Команда успешно обновлена",type:"success"}),this.slugForm.id===null&&(this.slugForm.id=null,this.slugForm.command=null,this.slugForm.comment=null,this.slugForm.bot_id=null,this.slugForm.slug=null,this.slugForm.config=[],this.slugForm.is_global=!0),this.$emit("callback")}).catch(e=>{})},onJsonChange(s,e){this.filteredConfigs[e].value=s},addConfig(s){this.slugForm.config.splice(0,0,{key:null,value:null,type:s||"text"})},move(s,e=0){let r=this.slugForm.config[s],c=this.slugForm.config.length||0,a=e===0?s-1>=0?s-1:c-1:s<c-1?s+1:0;this.slugForm.config[s]=this.slugForm.config[a],this.slugForm.config[a]=r},removeConfigItem(s){try{this.slugForm.config.splice(s,1)}catch{this.slugForm.config=[]}},selectPhoto(s,e){this.filteredConfigs[e].value=s.file_id}}},Ye=Object.assign(Ke,{__name:"SlugForm",setup(s){return(e,r)=>{const c=y("mask");return i(),n("form",{onSubmit:r[3]||(r[3]=U((...a)=>e.submit&&e.submit(...a),["prevent"]))},[t("div",I,[d(t("input",{type:"text","onUpdate:modelValue":r[0]||(r[0]=a=>e.slugForm.command=a),class:"form-control",id:"floatingInput",placeholder:"name@example.com",required:""},null,512),[[f,e.slugForm.command]]),$]),t("div",B,[d(t("input",{type:"text","onUpdate:modelValue":r[1]||(r[1]=a=>e.slugForm.slug=a),class:"form-control",id:"floatingInput",placeholder:"name@example.com",required:""},null,512),[[f,e.slugForm.slug]]),J]),t("div",O,[d(t("input",{type:"text","onUpdate:modelValue":r[2]||(r[2]=a=>e.slugForm.comment=a),class:"form-control",id:"floatingInput",placeholder:"name@example.com",required:""},null,512),[[f,e.slugForm.comment]]),N]),j,D,t("div",M,[q,t("ul",E,[(i(!0),n(g,null,p(e.configTypes,(a,o)=>(i(),n("li",null,[t("a",{class:"dropdown-item",onClick:l=>e.addConfig(a.type)},m(a.title||"Не установлен"),9,H)]))),256))])]),t("div",L,[t("div",z,[t("p",null,[C("Фильтры: "),(i(!0),n(g,null,p(e.configTypes,(a,o)=>(i(),n("span",{class:v(["badge mb-1 bg-gray-100 cursor-pointer mr-1",{"bg-info":e.filters.indexOf(a.type)>=0}]),onClick:l=>e.toggleFilter(a.type)},m(a.type),11,G))),256))])])]),e.filteredConfigs.length>0?(i(),n("div",P,[(i(!0),n(g,null,p(e.filteredConfigs,(a,o)=>(i(),n("div",A,[t("div",K,[t("div",Q,[t("div",null,[t("button",{onClick:l=>e.removeConfigItem(o),class:"btn btn-outline-info",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},X,8,R),t("button",{onClick:l=>e.move(o,0),style:{"margin-left":"5px"},class:"btn btn-outline-info",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},x,8,Y),t("button",{onClick:l=>e.move(o,1),style:{"margin-left":"5px"},class:"btn btn-outline-info",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},te,8,ee)]),e.bot&&e.filteredConfigs[o].type==="channel"?(i(),k(T,{key:0,token:e.bot.bot_token,onCallback:l=>e.addTextTo(o,l)},null,8,["token","onCallback"])):u("",!0),t("div",null,[t("div",le,[t("button",se,m(e.filteredConfigs[o].type),1),t("ul",ie,[(i(!0),n(g,null,p(e.configTypes,l=>(i(),n("li",null,[t("a",{class:"dropdown-item",onClick:Qe=>e.filteredConfigs[o].type=l.type},m(l.title||a.type),9,ne)]))),256))])])])]),t("div",ae,[t("div",re,[d(t("input",{type:"text",class:"form-control","onUpdate:modelValue":l=>e.filteredConfigs[o].key=l,id:"field-input-key-"+o,placeholder:"name@example.com"},null,8,de),[[f,e.filteredConfigs[o].key]]),t("label",{for:"field-input-key-"+o},"Ключ",8,fe)]),t("div",ue,[e.filteredConfigs[o].description?(i(),n("p",{key:0,class:"mb-0 font-italic font-10",innerHTML:e.filteredConfigs[o].description},null,8,me)):(i(),n("p",ce,"без описания"))]),e.filteredConfigs[o].type==="text"||e.filteredConfigs[o].type==="channel"?(i(),n("div",ge,[d(t("input",{type:"text",class:"form-control",id:"field-input-"+o,"onUpdate:modelValue":l=>e.filteredConfigs[o].value=l,placeholder:"name@example.com"},null,8,pe),[[f,e.filteredConfigs[o].value]]),t("label",{for:"field-input-"+o},"Значение",8,he)])):u("",!0),e.filteredConfigs[o].type==="boolean"?(i(),n("div",be,[d(t("input",{class:"form-check-input","onUpdate:modelValue":l=>e.filteredConfigs[o].value=l,type:"checkbox",value:"false",id:"filtered-config-"+o+"-checkbox"},null,8,_e),[[F,e.filteredConfigs[o].value]]),t("label",{class:"form-check-label",for:"filtered-config-"+o+"-checkbox"},m(e.filteredConfigs[o].value?"Истина":"Ложь"),9,ye)])):u("",!0),e.filteredConfigs[o].type==="geo"?(i(),n("div",Ce,[d(t("input",{class:"form-control",placeholder:"##.######,##.######","onUpdate:modelValue":l=>e.filteredConfigs[o].value=l,type:"text",id:"filtered-config-"+o+"-geo"},null,8,ve),[[c,"##.######,##.######"],[f,e.filteredConfigs[o].value]]),t("label",{for:"filtered-config-"+o+"-geo"},"Значение",8,ke)])):u("",!0),e.filteredConfigs[o].type==="script"?(i(),n("div",Fe,[d(t("input",{class:"form-control","onUpdate:modelValue":l=>e.filteredConfigs[o].value=l,type:"text",id:"filtered-config-"+o+"-script"},null,8,Ve),[[f,e.filteredConfigs[o].value]]),t("label",{for:"filtered-config-"+o+"-script"},"Значение",8,we)])):u("",!0),e.filteredConfigs[o].type==="phone"?(i(),n("div",Ue,[d(t("input",{class:"form-control",placeholder:"+7(###)###-##-##","onUpdate:modelValue":l=>e.filteredConfigs[o].value=l,type:"text",id:"filtered-config-"+o+"-phone"},null,8,Te),[[c,"+7(###)###-##-##"],[f,e.filteredConfigs[o].value]]),t("label",{for:"filtered-config-"+o+"-phone"},"Значение",8,Se)])):u("",!0),e.filteredConfigs[o].type==="json"?(i(),n("div",Ie,[$e,h(V(b),{mode:"form",modelValue:e.filteredConfigs[o].value,"onUpdate:modelValue":l=>e.filteredConfigs[o].value=l,"show-btns":!1,expandedOnStart:!0,onJsonChange:l=>e.onJsonChange(l,o)},null,8,["modelValue","onUpdate:modelValue","onJsonChange"])])):u("",!0),e.filteredConfigs[o].type==="color"?(i(),n("div",Be,[d(t("input",{class:"form-control","onUpdate:modelValue":l=>e.filteredConfigs[o].value=l,type:"color",id:"filtered-config-"+o+"-color"},null,8,Je),[[f,e.filteredConfigs[o].value]]),t("label",{for:"filtered-config-"+o+"-color"},[t("p",{style:w({color:e.filteredConfigs[o].value})},"Цвет: "+m(e.filteredConfigs[o].value),5)],8,Oe)])):u("",!0),e.filteredConfigs[o].type==="large-text"?(i(),n("div",Ne,[d(t("textarea",{class:"form-control",id:"field-input-"+o,"onUpdate:modelValue":l=>e.filteredConfigs[o].value=l,placeholder:"name@example.com"},`
                            `,8,je),[[f,e.filteredConfigs[o].value]]),t("label",{for:"field-input-"+o},"Значение",8,De)])):u("",!0),e.filteredConfigs[o].type==="image"?(i(),n("div",Me,[d(t("input",{class:"form-control mb-2",id:"field-input-"+o,type:"text",disabled:"true","onUpdate:modelValue":l=>e.filteredConfigs[o].value=l,placeholder:"name@example.com"},null,8,qe),[[f,e.filteredConfigs[o].value]]),t("label",{for:"field-input-"+o},"FileId ссылка на изображение",8,Ee),h(S,{"need-video":!1,"need-photo":!0,selected:[e.filteredConfigs[o].value],onSelect:l=>e.selectPhoto(l,o)},null,8,["selected","onSelect"])])):u("",!0)])])]))),256))])):(i(),n("div",He,ze)),t("button",Ge,[e.slugForm.id==null?(i(),n("span",Pe," Сохранить команду ")):(i(),n("span",Ae," Обновить команду "))])],32)}}});export{Ye as _};
