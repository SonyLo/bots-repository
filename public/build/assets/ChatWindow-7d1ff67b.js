import{aS as F,aT as k,aF as e,A as s,y as x,bw as v,F as _,aQ as p,ap as U,D as n,z as l,b4 as g,by as b,bn as y,bz as S,bB as C,P as T}from"./index.es-0c1040a4.js";/* empty css                                                 */import{_ as j}from"./_plugin-vue_export-helper-c27b6911.js";import{v as V}from"./v4-4a60fe23.js";const E={props:["domain"],watch:{messages:function(i){this.$nextTick(function(){var o=this.$el.querySelector("#scroll-area");o.scrollTop=o.scrollHeight+120})}},computed:{getSelf(){return window.profile}},data(){return{loaded:!0,canEnter:!1,messages:[],buttons:[],botUser:null,dataForm:{message:null,query:null,chat:{type:"chat"},user:{id:null,first_name:null,last_name:null,username:null}}}},mounted(){this.botUser=this.getSelf,this.botUser&&this.$nextTick(()=>{this.canEnter=!0,this.dataForm.user.id=this.botUser.telegram_chat_id,this.dataForm.user.first_name=this.botUser.fio_from_telegram,this.dataForm.user.last_name="12312",this.dataForm.user.username=this.botUser.username||this.botUser.name||null,this.login()})},methods:{login(){this.canEnter=!0,this.dataForm.user.id=V(),this.send("/start")},send(i=null,o=0){this.loaded=!1;let f=i||this.dataForm.message;i&&(this.dataForm.message=null,this.dataForm.query=i),o===0&&this.messages.push({text:f,direction:"outgoing",created_at:(()=>{let u=new Date,a=String(u.getDate()).padStart(2,"0"),r=String(u.getMonth()+1).padStart(2,"0"),c=u.getFullYear(),m=u.getMinutes(),w=u.getHours(),t=u.getSeconds();return c+"-"+r+"-"+a+" "+w+":"+m+":"+t})()}),axios.post("/web/"+this.domain,this.dataForm).then(u=>{this.dataForm.message=null,this.dataForm.query=null,u.data.forEach(r=>{let c=null;if(r.reply_markup){let m=JSON.parse(r.reply_markup);m.keyboard&&(this.buttons=m.keyboard,this.is_keyboard=!0),c=m.inline_keyboard||null}this.messages.push({text:r.text||null,direction:"incoming",keyboard:c,photo:r.photo||null,created_at:r.created_at||null}),this.loaded=!0})}).catch(()=>{this.loaded=!0})}}},M={class:"chat-window d-flex justify-content-between align-items-center flex-column"},q={class:"message-card-body"},D=["innerHTML"],H=["innerHTML"],I={key:2},L={key:3,class:"w-100 mb-1 mt-1",alt:""},O={key:4,class:"inline-keyboard w-100"},z={class:"d-flex justify-content-between flex-wrap"},B={class:"d-flex justify-content-between w-100"},N={class:"chat-inline-btn w-100"},K=["onClick"],P=["href"],A=["href"],J={key:1,class:"footer"},W={class:"menu"},Q={class:"dropdown dropup w-100"},R=n("button",{class:"chat-menu-btn w-100",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},[n("i",{class:"fa-solid fa-ellipsis"})],-1),Y={class:"dropdown-menu w-100 chat-custom-dropdown-menu"},G={class:"d-flex justify-content-between flex-wrap"},X={class:"d-flex justify-content-between w-100"},Z={class:"chat-reply-btn w-100"},$=["onClick"],tt={class:"message"},et=["disabled"],st={key:2,class:"w-100"},nt={class:"form-floating mb-3"},ot=n("label",{for:"floatingInput"},"Ваше имя",-1),at={class:"form-floating mb-3"},rt=n("label",{for:"floatingInput"},"Ваша фамилия",-1),lt={class:"form-floating mb-3"},it=n("label",{for:"floatingInput"},"Ваш номер телефона",-1),dt=n("button",{class:"btn btn-outline-primary p-3 w-100"},"Войти",-1);function ut(i,o,f,u,a,r){const c=F("perfect-scrollbar"),m=k("lazy"),w=k("mask");return e(),s("div",M,[a.canEnter?(e(),x(c,{key:0,class:"ps-container w-100"},{default:v(()=>[(e(!0),s(_,null,p(a.messages,t=>(e(),s("div",{class:U(["message-card",{incoming:t.direction==="incoming",outgoing:t.direction==="outgoing"}])},[n("div",q,[t.text?(e(),s("p",{key:0,innerHTML:t.text},null,8,D)):l("",!0),t.caption?(e(),s("p",{key:1,innerHTML:t.caption},null,8,H)):l("",!0),t.created_at?(e(),s("p",I,g(t.created_at),1)):l("",!0),t.photo?b((e(),s("img",L,null,512)),[[m,t.photo]]):l("",!0),t.keyboard?(e(),s("div",O,[(e(!0),s(_,null,p(t.keyboard,h=>(e(),s("div",z,[n("div",B,[(e(!0),s(_,null,p(h,d=>(e(),s("div",N,[d.callback_data?(e(),s("button",{key:0,onClick:_t=>r.send(d.callback_data||d.text,1),class:"btn btn-outline-light w-100"},g(d.text||d||"-"),9,K)):l("",!0),d.web_app?(e(),s("a",{key:1,class:"btn btn-outline-light w-100",href:"https://t.me/"+f.domain,target:"_blank"},"Только в Telegram",8,P)):l("",!0),d.url?(e(),s("a",{key:2,class:"btn btn-outline-light w-100",href:d.url,target:"_blank"},g(d.text||d||"-"),9,A)):l("",!0)]))),256))])]))),256))])):l("",!0)])],2))),256))]),_:1})):l("",!0),a.canEnter?(e(),s("div",J,[n("div",W,[n("div",Q,[R,n("div",Y,[a.buttons.length===0?(e(),s("button",{key:0,onClick:o[0]||(o[0]=t=>r.send("/start")),class:"btn btn-outline-light w-100 text-center"},"Начать ")):l("",!0),a.buttons.length>0?(e(),x(c,{key:1,class:"ps-keyboard-container buttons"},{default:v(()=>[(e(!0),s(_,null,p(a.buttons,t=>(e(),s("div",G,[n("div",X,[(e(!0),s(_,null,p(t,h=>(e(),s("div",Z,[n("button",{onClick:d=>r.send(h.text||h),class:"btn btn-outline-light w-100"},g(h.text||h||"-"),9,$)]))),256))])]))),256))]),_:1})):l("",!0)])])]),n("div",tt,[b(n("input",{type:"text",disabled:!a.loaded,class:"form-control w-100",placeholder:"text",onKeydown:o[1]||(o[1]=S(t=>r.send(null),["enter"])),"onUpdate:modelValue":o[2]||(o[2]=t=>a.dataForm.message=t)},null,40,et),[[y,a.dataForm.message]])])])):l("",!0),a.canEnter?l("",!0):(e(),s("div",st,[n("form",{onSubmit:o[6]||(o[6]=C((...t)=>r.login&&r.login(...t),["prevent"])),class:"p-2"},[n("div",nt,[b(n("input",{type:"text","onUpdate:modelValue":o[3]||(o[3]=t=>a.dataForm.user.first_name=t),class:"form-control",id:"floatingInput",placeholder:"name@example.com",required:""},null,512),[[y,a.dataForm.user.first_name]]),ot]),n("div",at,[b(n("input",{type:"text","onUpdate:modelValue":o[4]||(o[4]=t=>a.dataForm.user.last_name=t),class:"form-control",id:"floatingInput",placeholder:"name@example.com",required:""},null,512),[[y,a.dataForm.user.last_name]]),rt]),n("div",lt,[b(n("input",{type:"text","onUpdate:modelValue":o[5]||(o[5]=t=>a.dataForm.user.username=t),class:"form-control",id:"floatingInput",placeholder:"name@example.com",required:""},null,512),[[w,"+7(###)###-##-##"],[y,a.dataForm.user.username]]),it]),dt],32)]))])}const ct=j(E,[["render",ut]]),mt={key:0},ht={data(){return{load:!1,confirm:!1,vipForm:{name:null,phone:null,email:null,birthday:null,city:null,country:null,address:null,sex:!0}}},computed:{tg(){return window.Telegram.WebApp},tgUser(){const i=new URLSearchParams(this.tg.initData);return JSON.parse(i.get("user"))}},methods:{submit(){this.loading=!0,this.$store.dispatch("saveVip",{dataObject:{bot_id:this.bot.id,tg:this.tgUser,form:this.vipForm}}).then(i=>{this.loading=!1,window.location.reload()}).catch(()=>{this.loading=!1})}}},yt=Object.assign(ht,{__name:"ChatWindow",props:{bot:{type:Object},botUser:{type:Object}},setup(i){return(o,f)=>i.bot?(e(),s("div",mt,[T(ct,{domain:i.bot.bot_domain},null,8,["domain"])])):l("",!0)}});export{yt as default};
