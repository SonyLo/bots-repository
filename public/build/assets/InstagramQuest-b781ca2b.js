import{c as a,a as t,t as c,d as l,f as p,w as r,v as d,g as _,j as h,o as i}from"./app-dcc84722.js";import{s as g}from"./vue3-roulette.esm-ca34ab88.js";const b={class:"container"},y={key:0,class:"row"},f={key:0,class:"col-12 mb-2 mt-2"},v={class:"card"},w={class:"card-body"},F={class:"col-12 mb-2 mt-2"},P={key:0,style:{"text-align":"center","font-size":"larger"}},k={key:1,style:{"text-align":"center","font-size":"larger"}},U={key:1,class:"col-12"},j=t("h6",{class:"text-center"},"Выберите фотографию согласно задания квеста",-1),C=[j],D={key:2,class:"col-12 d-flex justify-content-center align-items-center"},Q={class:"card mb-3"},O={class:"card-body d-flex justify-content-start"},S={for:"photos",class:"photo-loader ml-2"},V=t("i",{class:"fa-brands fa-instagram"},null,-1),I={key:0,class:"img-preview",style:{"margin-left":"10px"}},N={class:"remove"},R=t("i",{class:"fa-regular fa-trash-can"},null,-1),z=[R],T={key:3,class:"col-12 p-2"},q=t("div",{class:"alert alert-info mb-2",role:"alert"},[t("p",null,"Вы успешно прошли квест")],-1),A=t("h6",{class:"text-center"},"Укажите своё имя, как к Вам может обращаться менеджер?",-1),B={class:"input-group mb-2"},L=t("h6",{class:"text-center"},"Введите свой номер телефона чтобы наш менеджер мог связаться с Вами!",-1),$={class:"input-group mb-2"},E=t("h6",{class:"text-center"},"Оставьте свой комментарий",-1),J={class:"input-group mb-2"},M=t("button",{class:"btn btn-outline-primary p-3 w-100"}," Получить приз ",-1),W={class:"col-12 p-2"},K={key:1,class:"row"},G={class:"col-12"},H={class:"w-100",style:{"object-fit":"cover"},alt:""},X={name:"App",components:{Roulette:g},data(){return{rouletteKey:0,action:null,success:!1,photo:null,instaForm:{comment:null,name:null,phone:null},items:[]}},computed:{canPlay(){return this.action.current_attempts<this.action.max_attempts},tg(){return window.Telegram.WebApp},tgUserId(){return JSON.parse(new URLSearchParams(window.Telegram.WebApp.initData).get("user")).id||null}},mounted(){this.prepare()},methods:{removePhoto(){this.photo=null,this.success=!1},getPhoto(){return{imageUrl:URL.createObjectURL(this.photo)}},onChangePhotos(n){const e=n.target.files;this.photo=e[0],this.success=!0},prepare(){return this.$store.dispatch("instagramQuestPrepare",{prepareForm:{telegram_chat_id:this.tgUserId},botDomain:this.bot.bot_domain}).then(n=>{this.action=n})},submit(){let n=new FormData;Object.keys(this.instaForm).forEach(e=>{const s=this.instaForm[e]||"";typeof s=="object"?n.append(e,JSON.stringify(s)):n.append(e,s)}),n.append("telegram_chat_id",this.tgUserId),n.append("photo",this.photo),this.$store.dispatch("instagramQuestResult",{instaForm:n,botDomain:this.bot.bot_domain}).then(e=>{this.winForm={comment:null,name:null,phone:null},this.photo=null,this.$notify({title:"Instagram Quest",text:"Вы успешно приняли участие в квесте! Наш менеджер свяжется с вами для дальнейших инструкций.",type:"success"}),this.prepare()}).catch(e=>{})},closeQuest(){this.tg.close()}}},x=Object.assign(X,{props:{bot:Object,rules:String},setup(n){return(e,s)=>{const m=h("lazy"),u=h("mask");return i(),a("div",b,[e.action?(i(),a("div",y,[n.rules?(i(),a("div",f,[t("div",v,[t("div",w,[t("p",null,c(n.rules),1)])])])):l("",!0),t("div",F,[e.canPlay?(i(),a("p",P,[p("Ваши попытки: "),t("strong",null,c(e.action.current_attempts||0),1),p(" из "),t("strong",null,c(e.action.max_attempts||1),1)])):(i(),a("p",k,"Вы израсходовали все ваши попытки"))]),e.canPlay?(i(),a("div",U,C)):l("",!0),e.canPlay?(i(),a("div",D,[t("div",Q,[t("div",O,[t("label",S,[V,t("input",{type:"file",id:"photos",accept:"image/*",onChange:s[0]||(s[0]=(...o)=>e.onChangePhotos&&e.onChangePhotos(...o)),style:{display:"none"}},null,32)]),e.photo?(i(),a("div",I,[r(t("img",null,null,512),[[m,e.getPhoto().imageUrl]]),t("div",N,[t("a",{onClick:s[1]||(s[1]=(...o)=>e.removePhoto&&e.removePhoto(...o))},z)])])):l("",!0)])])])):l("",!0),e.canPlay&&e.success?(i(),a("div",T,[q,t("form",{onSubmit:s[5]||(s[5]=_((...o)=>e.submit&&e.submit(...o),["prevent"]))},[A,t("div",B,[r(t("input",{type:"text",class:"form-control text-center p-3",placeholder:"Петров Петр Семенович","aria-label":"winForm-name","onUpdate:modelValue":s[2]||(s[2]=o=>e.instaForm.name=o),"aria-describedby":"instaForm-name",required:""},null,512),[[d,e.instaForm.name]])]),L,t("div",$,[r(t("input",{type:"text",class:"form-control p-3 text-center","onUpdate:modelValue":s[3]||(s[3]=o=>e.instaForm.phone=o),placeholder:"+7(000)000-00-00","aria-label":"winForm-phone","aria-describedby":"instaForm-phone",required:""},null,512),[[u,"+7(###)###-##-##"],[d,e.instaForm.phone]])]),E,t("div",J,[r(t("textarea",{type:"text",class:"form-control p-3",placeholder:"Текст вашего комментария","onUpdate:modelValue":s[4]||(s[4]=o=>e.instaForm.comment=o),"aria-label":"winForm-phone","aria-describedby":"instaForm-comment",required:""},`
                        `,512),[[d,e.instaForm.comment]])]),M],32)])):l("",!0),t("div",W,[t("button",{onClick:s[6]||(s[6]=(...o)=>e.closeQuest&&e.closeQuest(...o)),type:"button",class:"btn btn-outline-success p-3 w-100"}," Вернуться в бота ")])])):(i(),a("div",K,[t("div",G,[r(t("img",H,null,512),[[m,"/images/load.gif"]])])]))])}}});export{x as default};
