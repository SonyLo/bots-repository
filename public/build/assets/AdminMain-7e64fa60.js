import{m as u,o as i,c as n,a as t,n as r,b as p,U as f,d as l,F as g,r as k,t as m,e as b,f as _,w as d,v as c,g as h}from"./app-3d85007a.js";import{P as v}from"./Pagination-72ef4d82.js";const w={key:0,class:"container pt-3 pb-3"},y={class:"row mb-2"},U={class:"col-12 d-flex justify-content-center mb-2"},C={class:"btn-group w-100",role:"group","aria-label":"Basic outlined example"},B={key:0,class:"row mb-2"},F={class:"col-12"},j={key:1,class:"row mb-2"},O={class:"col-12"},$={class:"card"},L={class:"card-body"},P={key:0,class:"list-group w-100"},V={class:"list-group-item"},A={key:1},S={class:"row"},q={class:"col-12"},I={key:2,class:"row"},N={class:"mb-3"},D=t("label",{for:"bill-amount",class:"form-label"},"Сумма в чеке, руб",-1),M={class:"mb-3"},Q=t("label",{for:"bill-info",class:"form-label"},"Информация о чеке, номер",-1),T={class:"mb-3"},R=["disabled"],z={key:3,class:"row"},E={class:"mb-3"},G=t("label",{for:"bill-amount",class:"form-label"},"Сумма списания CashBack, руб",-1),J={class:"mb-3"},W=t("label",{for:"bill-info",class:"form-label"},"Причина списания",-1),H={class:"mb-3"},K=["disabled"],X={key:4,class:"row"},Y={class:"mb-3"},Z=t("label",{for:"bill-info",class:"form-label"},"Причина добавления администратора",-1),x={class:"mb-3"},tt=["disabled"],st={key:5,class:"row"},ot={class:"mb-3"},at=t("label",{for:"bill-info",class:"form-label"},"Причина разжалования администратора",-1),et={class:"mb-3"},it=["disabled"],nt={key:6,class:"row"},lt={class:"mb-3"},rt=t("label",{for:"bill-info",class:"form-label"},"Комменатрий",-1),dt={class:"mb-3"},ct=["disabled"],bt=t("div",{class:"row",style:{"padding-bottom":"300px"}},null,-1),mt={key:1,class:"container"},ht=t("div",{class:"row"},[t("div",{class:"alert alert-warning",role:"alert"}," Не найден пользователь! ")],-1),ut=[ht],pt={data(){return{tab:0,loading:!1,section:0,cashback:[],referrals:[],cashback_paginate_object:null,referrals_paginate_object:null,locationForm:{info:null},adminForm:{info:null},cashbackForm:{amount:null,info:null}}},computed:{...u(["getCashBack","getCashBackPaginateObject"]),tg(){return window.Telegram.WebApp},tgUser(){const e=new URLSearchParams(this.tg.initData);return JSON.parse(e.get("user"))}},mounted(){this.loadCashBack()},methods:{nextCashBackPage(e){this.loadCashBack(e)},loadCashBack(e=0){this.$store.dispatch("loadCashBack",{dataObject:{user_id:this.botUser.user_id,bot_id:this.botUser.bot_id},page:e}).then(s=>{this.loading=!1,this.cashback=this.getCashBack,this.cashback_paginate_object=this.getCashBackPaginateObject}).catch(()=>{this.loading=!1})},acceptUserInLocation(){this.loading=!0,this.$store.dispatch("acceptUserInLocation",{dataObject:{user_telegram_chat_id:this.botUser.telegram_chat_id,bot_id:this.botUser.bot_id,info:this.locationForm.info,tg:this.tgUser}}).then(e=>{this.loading=!1,this.locationForm.info=null,window.location.reload()}).catch(()=>{this.loading=!1})},removeCashBack(){this.loading=!0,this.$store.dispatch("removeCashBack",{dataObject:{user_telegram_chat_id:this.botUser.telegram_chat_id,bot_id:this.botUser.bot_id,cashback:this.cashbackForm.amount,info:this.cashbackForm.info,tg:this.tgUser}}).then(e=>{this.loading=!1,this.cashbackForm.amount=0,this.cashbackForm.info=null,window.location.reload()}).catch(()=>{this.loading=!1})},addCashBack(){this.loading=!0,this.$store.dispatch("addCashBack",{dataObject:{user_telegram_chat_id:this.botUser.telegram_chat_id,bot_id:this.botUser.bot_id,cashback:this.cashbackForm.amount,info:this.cashbackForm.info,tg:this.tgUser}}).then(e=>{this.loading=!1,this.cashbackForm.amount=0,this.cashbackForm.info=null,window.location.reload()}).catch(()=>{this.loading=!1})},addAdmin(){this.loading=!0,this.$store.dispatch("addAdmin",{dataObject:{user_telegram_chat_id:this.botUser.telegram_chat_id,bot_id:this.botUser.bot_id,info:this.adminForm.info,tg:this.tgUser}}).then(e=>{this.loading=!1,this.adminForm.info=null,window.location.reload()}).catch(()=>{this.loading=!1})},removeAdmin(){this.loading=!0,this.$store.dispatch("removeAdmin",{dataObject:{user_telegram_chat_id:this.botUser.telegram_chat_id,bot_id:this.botUser.bot_id,info:this.adminForm.info,tg:this.tgUser}}).then(e=>{this.loading=!1,this.adminForm.info=null,window.location.reload()}).catch(()=>{this.loading=!1})},scanQR(){this.tg.showScanQrPopup({text:"test"},e=>(document.write("<br>"+e),this.tg.closeScanQrPopup(),!0))},openLink(e){this.section=e}}},_t=Object.assign(pt,{__name:"AdminMain",props:{user:{type:Object},botUser:{type:Object},cashBack:{type:Object}},setup(e){return(s,o)=>e.user&&e.botUser?(i(),n("div",w,[t("div",y,[t("div",U,[t("div",C,[t("button",{type:"button",class:r([{active:s.tab===0},"btn btn-outline-primary"]),onClick:o[0]||(o[0]=a=>s.tab=0)},"Инфо ",2),t("button",{type:"button",class:r([{active:s.tab===1},"btn btn-outline-primary"]),onClick:o[1]||(o[1]=a=>s.tab=1)}," CashBack ",2)])])]),s.tab===0?(i(),n("div",B,[t("div",F,[p(f,{"bot-user":e.botUser},null,8,["bot-user"])])])):l("",!0),s.tab===1?(i(),n("div",j,[t("div",O,[t("div",$,[t("div",L,[s.cashback.length>0?(i(),n("ul",P,[(i(!0),n(g,null,k(s.cashback,(a,ft)=>(i(),n("li",V,[t("span",null,m(a.money_in_check||0)+" руб.",1),b(", "),t("span",null,m(a.description||"Не указано"),1),b(", "),t("span",null,m(a.operation_type?"Начисление":"Списание"),1)]))),256))])):(i(),n("p",A,"У пользователя еще нет операций с CashBack-ом")),s.cashback_paginate_object?(i(),_(v,{key:2,class:"mt-2",onPagination_page:s.nextCashBackPage,pagination:s.cashback_paginate_object},null,8,["onPagination_page","pagination"])):l("",!0)])])])])):l("",!0),t("div",S,[t("div",q,[t("a",{onClick:o[2]||(o[2]=a=>s.openLink(5)),class:r([{"btn-primary text-white":s.section===5},"btn btn-outline-primary w-100 mb-2"])},"Отметить пользователя в заведении",2),t("a",{onClick:o[3]||(o[3]=a=>s.openLink(1)),class:r([{"btn-primary text-white":s.section===1},"btn btn-outline-primary w-100 mb-2"])},"Списать CashBack",2),t("a",{onClick:o[4]||(o[4]=a=>s.openLink(2)),class:r([{"btn-primary text-white":s.section===2},"btn btn-outline-primary w-100 mb-2"])},"Начислить CashBack",2),t("a",{onClick:o[5]||(o[5]=a=>s.openLink(3)),class:r([{"btn-primary text-white":s.section===3},"btn btn-outline-primary w-100 mb-2"])},"Добавить администратора",2),t("a",{onClick:o[6]||(o[6]=a=>s.openLink(4)),class:r([{"btn-primary text-white":s.section===4},"btn btn-outline-primary w-100 mb-2"])},"Убрать администратора",2)])]),s.section===2?(i(),n("div",I,[t("form",{onSubmit:o[9]||(o[9]=h((...a)=>s.addCashBack&&s.addCashBack(...a),["prevent"]))},[t("p",null,[b("У пользователя "),t("strong",null,m(e.cashBack.amount||0)+" руб",1),b(" CashBack")]),t("div",N,[D,d(t("input",{type:"number",min:"0",class:"form-control",id:"bill-amount","onUpdate:modelValue":o[7]||(o[7]=a=>s.cashbackForm.amount=a),placeholder:"Сумма",required:""},null,512),[[c,s.cashbackForm.amount]])]),t("div",M,[Q,d(t("textarea",{class:"form-control",placeholder:"Информация","onUpdate:modelValue":o[8]||(o[8]=a=>s.cashbackForm.info=a),id:"bill-info",rows:"3",required:""},null,512),[[c,s.cashbackForm.info]])]),t("div",T,[t("button",{disabled:s.loading,type:"submit",class:"btn btn-outline-success w-100"},"Отправить ",8,R)])],32)])):l("",!0),s.section===1?(i(),n("div",z,[t("form",{onSubmit:o[12]||(o[12]=h((...a)=>s.removeCashBack&&s.removeCashBack(...a),["prevent"]))},[t("p",null,[b("У пользователя "),t("strong",null,m(e.cashBack.amount||0)+" руб",1),b(" CashBack")]),t("div",E,[G,d(t("input",{type:"number",min:"0",class:"form-control",id:"bill-amount","onUpdate:modelValue":o[10]||(o[10]=a=>s.cashbackForm.amount=a),placeholder:"Сумма",required:""},null,512),[[c,s.cashbackForm.amount]])]),t("div",J,[W,d(t("textarea",{class:"form-control",placeholder:"Информация","onUpdate:modelValue":o[11]||(o[11]=a=>s.cashbackForm.info=a),id:"bill-info",rows:"3",required:""},null,512),[[c,s.cashbackForm.info]])]),t("div",H,[t("button",{disabled:s.loading,type:"submit",class:"btn btn-outline-success w-100"},"Отправить ",8,K)])],32)])):l("",!0),s.section===3?(i(),n("div",X,[t("form",{onSubmit:o[14]||(o[14]=h((...a)=>s.addAdmin&&s.addAdmin(...a),["prevent"]))},[t("div",Y,[Z,d(t("textarea",{class:"form-control",placeholder:"Информация","onUpdate:modelValue":o[13]||(o[13]=a=>s.adminForm.info=a),id:"bill-info",rows:"3",required:""},null,512),[[c,s.adminForm.info]])]),t("div",x,[t("button",{disabled:s.loading,type:"submit",class:"btn btn-outline-success w-100"},"Подтвредить ",8,tt)])],32)])):l("",!0),s.section===4?(i(),n("div",st,[t("form",{onSubmit:o[16]||(o[16]=h((...a)=>s.removeAdmin&&s.removeAdmin(...a),["prevent"]))},[t("div",ot,[at,d(t("textarea",{class:"form-control",placeholder:"Информация","onUpdate:modelValue":o[15]||(o[15]=a=>s.adminForm.info=a),id:"bill-info",rows:"3",required:""},null,512),[[c,s.adminForm.info]])]),t("div",et,[t("button",{disabled:s.loading,type:"submit",class:"btn btn-outline-success w-100"},"Подтвредить ",8,it)])],32)])):l("",!0),s.section===5?(i(),n("div",nt,[t("form",{onSubmit:o[18]||(o[18]=h((...a)=>s.acceptUserInLocation&&s.acceptUserInLocation(...a),["prevent"]))},[t("div",lt,[rt,d(t("textarea",{class:"form-control",placeholder:"Информация","onUpdate:modelValue":o[17]||(o[17]=a=>s.locationForm.info=a),id:"bill-info",rows:"3",required:""},null,512),[[c,s.locationForm.info]])]),t("div",dt,[t("button",{disabled:s.loading,type:"submit",class:"btn btn-outline-success w-100"},"Отметить ",8,ct)])],32)])):l("",!0),bt])):(i(),n("div",mt,ut))}});export{_t as default};
