import{o as e,c as n,e as k,l as v,F as h,r as p,n as F,a as s,d as r,t as g,w as b,v as y,z as C,g as S,A as T,j as x,b as j}from"./app-bbc2afe9.js";import{_ as V}from"./_plugin-vue_export-helper-c27b6911.js";import{v as M}from"./v4-a960c1f4.js";const U={props:["domain"],watch:{messages:function(i){this.$nextTick(function(){var o=this.$el.querySelector("#scroll-area");o.scrollTop=o.scrollHeight+120})}},data(){return{loaded:!0,canEnter:!1,messages:[],buttons:[],dataForm:{message:null,query:null,user:{id:null,first_name:null,last_name:null,username:null}}}},methods:{login(){this.canEnter=!0,this.dataForm.user.id=M(),this.send("/start")},send(i=null,o=0){this.loaded=!1,console.log(i);let f=i||this.dataForm.message;i&&(this.dataForm.message=null,this.dataForm.query=i),o===0&&this.messages.push({text:f,direction:"outgoing",created_at:(()=>{let u=new Date,l=String(u.getDate()).padStart(2,"0"),a=String(u.getMonth()+1).padStart(2,"0"),c=u.getFullYear(),m=u.getMinutes(),w=u.getHours(),t=u.getSeconds();return c+"-"+a+"-"+l+" "+w+":"+m+":"+t})()}),axios.post("/web/"+this.domain,this.dataForm).then(u=>{this.dataForm.message=null,this.dataForm.query=null,u.data.forEach(a=>{let c=null;if(a.reply_markup){let m=JSON.parse(a.reply_markup);m.keyboard&&(this.buttons=m.keyboard,this.is_keyboard=!0),c=m.inline_keyboard||null}this.messages.push({text:a.text||null,direction:"incoming",keyboard:c,photo:a.photo||null,created_at:a.created_at||null}),this.$nextTick(()=>{this.loaded=!0})}).catch(()=>{this.$nextTick(()=>{this.loaded=!0})})})}}},q={class:"chat-window d-flex justify-content-between align-items-center flex-column"},E={class:"message-card-body"},D=["innerHTML"],H=["innerHTML"],I={key:2},L={key:3,class:"w-100 mb-1 mt-1",alt:""},O={key:4,class:"inline-keyboard w-100"},N={class:"d-flex justify-content-between flex-wrap"},z={class:"d-flex justify-content-between w-100"},B={class:"chat-inline-btn w-100"},K=["onClick"],A=["href"],J=["href"],P={key:1,class:"footer"},W={class:"menu"},R={class:"dropdown dropup w-100"},Y=s("button",{class:"chat-menu-btn w-100",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},[s("i",{class:"fa-solid fa-ellipsis"})],-1),G={class:"dropdown-menu w-100 chat-custom-dropdown-menu"},Q={class:"d-flex justify-content-between flex-wrap"},X={class:"d-flex justify-content-between w-100"},Z={class:"chat-reply-btn w-100"},$=["onClick"],tt={class:"message"},et=["disabled"],nt={key:2,class:"p-1"},st={class:"form-floating mb-3"},ot=s("label",{for:"floatingInput"},"Ваше имя",-1),lt={class:"form-floating mb-3"},at=s("label",{for:"floatingInput"},"Ваша фамилия",-1),rt={class:"form-floating mb-3"},it=s("label",{for:"floatingInput"},"Ваш номер телефона",-1),dt=s("button",{class:"btn btn-outline-primary p-3 w-100"},"Войти",-1);function ut(i,o,f,u,l,a){const c=T("perfect-scrollbar"),m=x("lazy"),w=x("mask");return e(),n("div",q,[l.canEnter?(e(),k(c,{key:0,class:"ps-container w-100"},{default:v(()=>[(e(!0),n(h,null,p(l.messages,t=>(e(),n("div",{class:F(["message-card",{incoming:t.direction==="incoming",outgoing:t.direction==="outgoing"}])},[s("div",E,[t.text?(e(),n("p",{key:0,innerHTML:t.text},null,8,D)):r("",!0),t.caption?(e(),n("p",{key:1,innerHTML:t.caption},null,8,H)):r("",!0),t.created_at?(e(),n("p",I,g(t.created_at),1)):r("",!0),t.photo?b((e(),n("img",L,null,512)),[[m,t.photo]]):r("",!0),t.keyboard?(e(),n("div",O,[(e(!0),n(h,null,p(t.keyboard,_=>(e(),n("div",N,[s("div",z,[(e(!0),n(h,null,p(_,d=>(e(),n("div",B,[d.callback_data?(e(),n("button",{key:0,onClick:ht=>a.send(d.callback_data||d.text,1),class:"btn btn-outline-light w-100"},g(d.text||d||"-"),9,K)):r("",!0),d.web_app?(e(),n("a",{key:1,class:"btn btn-outline-light w-100",href:"https://t.me/"+f.domain,target:"_blank"},"Только в Telegram",8,A)):r("",!0),d.url?(e(),n("a",{key:2,class:"btn btn-outline-light w-100",href:d.url,target:"_blank"},g(d.text||d||"-"),9,J)):r("",!0)]))),256))])]))),256))])):r("",!0)])],2))),256))]),_:1})):r("",!0),l.canEnter?(e(),n("div",P,[s("div",W,[s("div",R,[Y,s("div",G,[l.buttons.length===0?(e(),n("button",{key:0,onClick:o[0]||(o[0]=t=>a.send("/start")),class:"btn btn-outline-light w-100 text-center"},"Начать ")):r("",!0),l.buttons.length>0?(e(),k(c,{key:1,class:"ps-keyboard-container buttons"},{default:v(()=>[(e(!0),n(h,null,p(l.buttons,t=>(e(),n("div",Q,[s("div",X,[(e(!0),n(h,null,p(t,_=>(e(),n("div",Z,[s("button",{onClick:d=>a.send(_.text||_),class:"btn btn-outline-light w-100"},g(_.text||_||"-"),9,$)]))),256))])]))),256))]),_:1})):r("",!0)])])]),s("div",tt,[b(s("input",{type:"text",disabled:!l.loaded,class:"form-control w-100",placeholder:"text",onKeydown:o[1]||(o[1]=C(t=>a.send(null),["enter"])),"onUpdate:modelValue":o[2]||(o[2]=t=>l.dataForm.message=t)},null,40,et),[[y,l.dataForm.message]])])])):r("",!0),l.canEnter?r("",!0):(e(),n("div",nt,[s("form",{onSubmit:o[6]||(o[6]=S((...t)=>a.login&&a.login(...t),["prevent"])),class:"pt-2 pb-2"},[s("div",st,[b(s("input",{type:"text","onUpdate:modelValue":o[3]||(o[3]=t=>l.dataForm.user.first_name=t),class:"form-control",id:"floatingInput",placeholder:"name@example.com",required:""},null,512),[[y,l.dataForm.user.first_name]]),ot]),s("div",lt,[b(s("input",{type:"text","onUpdate:modelValue":o[4]||(o[4]=t=>l.dataForm.user.last_name=t),class:"form-control",id:"floatingInput",placeholder:"name@example.com",required:""},null,512),[[y,l.dataForm.user.last_name]]),at]),s("div",rt,[b(s("input",{type:"text","onUpdate:modelValue":o[5]||(o[5]=t=>l.dataForm.user.username=t),class:"form-control",id:"floatingInput",placeholder:"name@example.com",required:""},null,512),[[w,"+7(###)###-##-##"],[y,l.dataForm.user.username]]),it]),dt],32)]))])}const ct=V(U,[["render",ut]]),mt={key:0},_t={data(){return{load:!1,confirm:!1,vipForm:{name:null,phone:null,email:null,birthday:null,city:null,country:null,address:null,sex:!0}}},computed:{tg(){return window.Telegram.WebApp},tgUser(){const i=new URLSearchParams(this.tg.initData);return JSON.parse(i.get("user"))}},methods:{submit(){this.loading=!0,this.$store.dispatch("saveVip",{dataObject:{bot_id:this.bot.id,tg:this.tgUser,form:this.vipForm}}).then(i=>{this.loading=!1,window.location.reload()}).catch(()=>{this.loading=!1})}}},gt=Object.assign(_t,{__name:"ChatWindow",props:{bot:{type:Object},botUser:{type:Object}},setup(i){return(o,f)=>i.bot?(e(),n("div",mt,[j(ct,{domain:i.bot.bot_domain},null,8,["domain"])])):r("",!0)}});export{gt as default};
