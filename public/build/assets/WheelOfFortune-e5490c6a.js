import{c as i,a as t,t as l,d as r,f as c,e as w,l as y,u as _,w as d,v as h,g,j as m,o}from"./app-b97dcf1f.js";import{s as u}from"./vue3-roulette.esm-0981ad7e.js";const f={class:"container"},v={key:0,class:"row"},k={key:0,class:"col-12 mb-2 mt-2"},F={class:"card"},W={class:"card-body"},C={class:"col-12 mb-2 mt-2"},S={key:0,style:{"text-align":"center","font-size":"larger"}},O={key:1,style:{"text-align":"center","font-size":"larger"}},j={key:1,class:"col-12 d-flex justify-content-center align-items-center"},D=t("div",null,"Поехали",-1),E={key:2,class:"col-12 p-2"},P={class:"alert alert-info mb-2",role:"alert"},U=t("h6",{class:"text-center"},"Укажите своё имя, как к Вам может обращаться менеджер?",-1),z={class:"input-group mb-2"},N=t("h6",{class:"text-center"},"Введите свой номер телефона чтобы наш менеджер мог связаться с Вами!",-1),T={class:"input-group mb-2"},V=t("button",{class:"btn btn-outline-primary p-3 w-100"}," Получить выигрышь ",-1),A={class:"col-12 p-2"},B={key:1,class:"row"},$={class:"col-12"},I={class:"w-100",style:{"object-fit":"cover"},alt:""},K={name:"App",components:{Roulette:u},data(){return{rouletteKey:0,action:null,winForm:{win:null,name:null,phone:null},items:[]}},computed:{canPlay(){return this.action.current_attempts<this.action.max_attempts},tg(){return window.Telegram.WebApp},tgUserId(){let s=JSON.parse(new URLSearchParams(window.Telegram.WebApp.initData).get("user"));return s?s.id:null}},mounted(){this.prepare().then(()=>{let s=1;this.items=[],this.wheels.forEach(e=>{this.items.push({id:s,name:e.value,htmlContent:e.value,textColor:"",background:""}),s++})})},methods:{prepare(){return this.$store.dispatch("wheelOfFortunePrepare",{prepareForm:{telegram_chat_id:this.tgUserId},botDomain:this.bot.bot_domain}).then(s=>{this.action=s})},submit(){let s=new FormData;Object.keys(this.winForm).forEach(e=>{const n=this.winForm[e]||"";typeof n=="object"?s.append(e,JSON.stringify(n)):s.append(e,n)}),s.append("telegram_chat_id",this.tgUserId),this.$store.dispatch("wheelOfFortuneWin",{winForm:s,botDomain:this.bot.bot_domain}).then(e=>{this.winForm={win:null,name:null,phone:null},this.$notify({title:"Колесо фортуны",text:"Вы успешно приняли участие в розыгрыше! Наш менеджер свяжется с вами для дальнейших инструкций.",type:"success"}),this.prepare()}).catch(e=>{})},closeWheel(){this.tg.close()},launchWheel(){this.rouletteKey+=1,setTimeout(()=>this.$refs.wheel.launchWheel(),0)},wheelStartedCallback(){console.log("wheelStartedCallback")},wheelEndedCallback(s){this.winForm.win=s.id}}},M=Object.assign(K,{props:{bot:Object,wheels:Array,rules:String},setup(s){return(e,n)=>{const p=m("mask"),b=m("lazy");return o(),i("div",f,[e.action?(o(),i("div",v,[s.rules?(o(),i("div",k,[t("div",F,[t("div",W,[t("p",null,l(s.rules),1)])])])):r("",!0),t("div",C,[e.canPlay?(o(),i("p",S,[c("Ваши попытки: "),t("strong",null,l(e.action.current_attempts||0),1),c(" из "),t("strong",null,l(e.action.max_attempts||1),1)])):(o(),i("p",O,"Вы израсходовали все ваши попытки"))]),e.canPlay&&e.winForm.win==null?(o(),i("div",j,[(o(),w(_(u),{ref:"wheel",size:"300",key:e.rouletteKey,items:e.items,"centered-indicator":"","indicator-position":"top","display-shadow":"","display-border":"","base-display":"","base-display-indicator":"","base-background":"orange","base-display-shadow":"",easing:"bounce",onWheelStart:e.wheelStartedCallback,onWheelEnd:e.wheelEndedCallback,onClick:e.launchWheel},{baseContent:y(()=>[D]),_:1},8,["items","onWheelStart","onWheelEnd","onClick"]))])):r("",!0),e.canPlay&&e.winForm.win?(o(),i("div",E,[t("div",P,[t("p",null,"Вы выиграли - "+l(e.winForm.win)+".",1)]),t("form",{onSubmit:n[2]||(n[2]=g((...a)=>e.submit&&e.submit(...a),["prevent"]))},[U,t("div",z,[d(t("input",{type:"text",class:"form-control text-center p-3",placeholder:"Петров Петр Семенович","aria-label":"winForm-name","onUpdate:modelValue":n[0]||(n[0]=a=>e.winForm.name=a),"aria-describedby":"winForm-name",required:""},null,512),[[h,e.winForm.name]])]),N,t("div",T,[d(t("input",{type:"text",class:"form-control p-3 text-center","onUpdate:modelValue":n[1]||(n[1]=a=>e.winForm.phone=a),placeholder:"+7(000)000-00-00","aria-label":"winForm-phone","aria-describedby":"vipForm-phone",required:""},null,512),[[p,"+7(###)###-##-##"],[h,e.winForm.phone]])]),V],32)])):r("",!0),t("div",A,[t("button",{onClick:n[3]||(n[3]=(...a)=>e.closeWheel&&e.closeWheel(...a)),type:"button",class:"btn btn-outline-success p-3 w-100"}," Вернуться в бота ")])])):(o(),i("div",B,[t("div",$,[d(t("img",I,null,512),[[b,"/images/load.gif"]])])]))])}}});export{M as default};
