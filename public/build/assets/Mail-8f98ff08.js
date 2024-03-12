import{G as w,q as n,t as i,v as t,H as r,J as u,R as _,K as p,A as a,F as h,C as f,x as y,D as m,y as k,u as R,B as v,X as V,P as K,L as j}from"./index.es-71d37bd0.js";import{P}from"./Pagination-c0ff4992.js";import{V as g}from"./vue3-json-editor.esm.prod-61e9e0df.js";import{v as C}from"./v4-a960c1f4.js";import{T}from"./TelegramChannelHelper-864fe219.js";const S={class:"row"},B={class:"input-group mb-3"},q={class:"row"},M={class:"col-12"},U={class:"form-check"},O=t("label",{class:"form-check-label",for:"need-new-first"},"Сперва новые",-1),J={class:"col-12"},I={class:"form-check"},D=t("label",{class:"form-check-label",for:"needDeleted"},"Отобразить удаленные",-1),A={key:0,class:"row"},L={key:0,class:"col-12"},N={class:"col-12 mb-3"},E={class:"list-group w-100"},z={class:"d-flex justify-content-between"},G=["onClick"],H={key:0},X={key:1},Y={key:2,title:"Вы не можете выбрать данную страницу"},Q=t("i",{class:"fa-solid fa-lock ml-2 text-danger"},null,-1),W=[Q],Z={key:0},x={class:"dropdown"},ee=t("button",{class:"btn btn-outline-secondary",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},[t("i",{class:"fa-solid fa-ellipsis"})],-1),te={class:"dropdown-menu"},oe={key:0},se=["onClick"],le=t("i",{class:"fa-solid fa-copy mr-1"},null,-1),ne={key:1},ie=["onClick"],ae=t("i",{class:"fa-solid fa-ban mr-1"},null,-1),de=["onClick"],re=t("i",{class:"fa-solid fa-copy mr-1"},null,-1),ce={key:2},ue=["onClick"],he=t("i",{class:"fa-solid fa-trash mr-1"},null,-1),be={key:0,class:"component-icons"},me={key:0},ye=t("i",{class:"fa-regular fa-images"},null,-1),pe=[ye],_e={key:1},fe=t("i",{class:"fa-regular fa-note-sticky"},null,-1),ke=[fe],ge={key:2},$e=t("i",{class:"fa-solid fa-photo-film"},null,-1),we=[$e],ve={key:3},Ce=t("i",{class:"fa-regular fa-file-audio"},null,-1),Fe=[Ce],Pe={key:4},Re=t("i",{class:"fa-regular fa-file-word"},null,-1),Ve=[Re],Ke={key:5},je=t("i",{class:"fa-solid fa-link"},null,-1),Te=[je],Se={key:6},Be=t("i",{class:"fa-solid fa-scroll"},null,-1),qe=[Be],Me={key:7},Ue=t("i",{class:"fa-regular fa-comment-dots"},null,-1),Oe=[Ue],Je={key:8},Ie=t("i",{class:"fa-solid fa-scale-balanced"},null,-1),De=[Ie],Ae={key:9},Le=t("i",{class:"fa-regular fa-keyboard"},null,-1),Ne=[Le],Ee={key:10},ze=t("i",{class:"fa-solid fa-ellipsis"},null,-1),Ge=[ze],He={class:"col-12"},Xe={key:1,class:"row"},Ye=t("div",{class:"col-12"},[t("div",{class:"alert alert-warning",role:"alert"}," Созданных страниц не найдено! ")],-1),Qe=[Ye],We={props:["editor","current","selected"],data(){return{bot:null,current_page:0,need_deleted:!1,need_new_first:!0,loading:!0,pages:[],search:null,pages_paginate_object:null,need_new_page:!1}},watch:{need_new_first:function(s,e){this.nextPages(0)},need_deleted:function(s,e){this.nextPages(0)},getPages:function(s,e){this.$nextTick(()=>{this.search||(this.pages=this.getPages)})},search:function(s,e){this.nextPages(0)}},computed:{...w(["getPages","getCurrentBot","getPagesPaginateObject"])},mounted(){this.loadCurrentBot().then(()=>{this.bot&&(this.current_page=localStorage.getItem(`cashman_pagelist_${this.bot.id}_page_index`)||0),this.loadPages()})},methods:{loadCurrentBot(s=null){return this.$store.dispatch("updateCurrentBot",{bot:s}).then(()=>{this.bot=this.getCurrentBot})},selectPage(s){this.$emit("callback",s)},nextPages(s){this.current_page=s,this.bot&&localStorage.setItem(`cashman_pagelist_${this.bot.id}_page_index`,this.current_page),this.loadPages()},duplicatePage(s){this.loading=!0,this.$store.dispatch("duplicatePage",{dataObject:{pageId:s}}).then(e=>{this.loading=!1,this.loadPages()}).catch(()=>{this.loading=!1})},forceRemovePage(s){this.loading=!0,this.$store.dispatch("forceRemovePage",{dataObject:{pageId:s}}).then(e=>{this.loading=!1,this.loadPages()}).catch(()=>{this.loading=!1})},restorePage(s){this.loading=!0,this.$store.dispatch("restorePage",{dataObject:{pageId:s}}).then(e=>{this.loading=!1,this.loadPages()}).catch(()=>{this.loading=!1})},removePage(s){this.loading=!0,this.$store.dispatch("removePage",{dataObject:{pageId:s}}).then(e=>{this.loading=!1,this.loadPages()}).catch(()=>{this.loading=!1})},loadPages(){this.loading=!0,this.$store.dispatch("loadPages",{dataObject:{botId:this.bot.id||null,search:this.search||null,needDeleted:this.need_deleted,needNewFirst:this.need_new_first},page:this.current_page||0}).then(s=>{this.loading=!1,this.pages=this.getPages,this.pages_paginate_object=this.getPagesPaginateObject,this.pages.length===0&&localStorage.setItem(`cashman_pagelist_${this.bot.id}_page_index`,0)}).catch(()=>{this.loading=!1})}}},Ze=Object.assign(We,{__name:"PagesList",setup(s){return(e,o)=>(n(),i(h,null,[t("div",S,[t("div",B,[r(t("input",{type:"search",class:"form-control",placeholder:"Поиск страницы","aria-label":"Поиск бота","onUpdate:modelValue":o[0]||(o[0]=l=>e.search=l),"aria-describedby":"button-addon2"},null,512),[[u,e.search]]),t("button",{class:"btn btn-outline-secondary",onClick:o[1]||(o[1]=(...l)=>e.loadPages&&e.loadPages(...l)),type:"button",id:"button-addon2"},"Найти ")])]),t("div",q,[t("div",M,[t("div",U,[r(t("input",{class:"form-check-input","onUpdate:modelValue":o[2]||(o[2]=l=>e.need_new_first=l),type:"checkbox",id:"need-new-first"},null,512),[[_,e.need_new_first]]),O])]),t("div",J,[t("div",I,[r(t("input",{class:"form-check-input","onUpdate:modelValue":o[3]||(o[3]=l=>e.need_deleted=l),type:"checkbox",id:"needDeleted"},null,512),[[_,e.need_deleted]]),D])])]),e.pages.length>0?(n(),i("div",A,[e.pages.length>7?(n(),i("div",L,[e.pages_paginate_object?(n(),p(P,{key:0,onPagination_page:e.nextPages,pagination:e.pages_paginate_object},null,8,["onPagination_page","pagination"])):a("",!0)])):a("",!0),t("div",N,[t("ul",E,[(n(!0),i(h,null,f(e.pages,(l,d)=>(n(),i("li",{class:y(["list-group-item cursor-pointer page-menu-item btn btn-outline-info mb-1",{"border border-warning":l.deleted_at!=null}])},[t("div",z,[t("strong",{onClick:c=>e.selectPage(l)},[m("#"+k(l.id||"Не указано")+" ",1),l.slug?(n(),i("span",H,k(l.slug.command||"Не указано"),1)):(n(),i("span",X,"Не привязано к команде")),s.current&&s.current==l.id||(s.selected||[]).indexOf(l.id)!=-1?(n(),i("span",Y,W)):a("",!0)],8,G),s.editor?(n(),i("div",Z,[t("div",x,[ee,t("ul",te,[l.deleted_at!=null?(n(),i("li",oe,[t("a",{class:"dropdown-item",onClick:c=>e.restorePage(l.id)},[le,m("Восстановить")],8,se)])):a("",!0),l.deleted_at!=null?(n(),i("li",ne,[t("a",{class:"dropdown-item",onClick:c=>e.forceRemovePage(l.id)},[ae,m("Удалить полностью")],8,ie)])):a("",!0),t("li",null,[t("a",{class:"dropdown-item",onClick:c=>e.duplicatePage(l.id)},[re,m("Дублировать")],8,de)]),l.deleted_at==null?(n(),i("li",ce,[t("a",{class:"dropdown-item",onClick:c=>e.removePage(l.id)},[he,m("Удалить")],8,ue)])):a("",!0)])])])):a("",!0)]),l?(n(),i("ul",be,[(l.images||[]).length>0?(n(),i("li",me,pe)):a("",!0),l.sticker?(n(),i("li",_e,ke)):a("",!0),(l.videos||[]).length>0?(n(),i("li",ge,we)):a("",!0),(l.audios||[]).length>0?(n(),i("li",ve,Fe)):a("",!0),(l.documents||[]).length>0?(n(),i("li",Pe,Ve)):a("",!0),l.next_page_id?(n(),i("li",Ke,Te)):a("",!0),l.next_bot_menu_slug_id?(n(),i("li",Se,qe)):a("",!0),l.next_bot_dialog_command_id?(n(),i("li",Me,Oe)):a("",!0),l.rules_if?(n(),i("li",Je,De)):a("",!0),l.reply_keyboard_id?(n(),i("li",Ae,Ne)):a("",!0),l.inline_keyboard_id?(n(),i("li",Ee,Ge)):a("",!0)])):a("",!0)],2))),256))])]),t("div",He,[e.pages_paginate_object?(n(),p(P,{key:0,onPagination_page:e.nextPages,pagination:e.pages_paginate_object},null,8,["onPagination_page","pagination"])):a("",!0)])])):(n(),i("div",Xe,Qe))],64))}});const xe={key:0},et={class:"row"},tt={class:"col-12 d-flex justify-content-between"},ot=t("i",{class:"fa-solid fa-arrows-up-to-line"},null,-1),st=[ot],lt=t("i",{class:"fa-solid fa-arrows-down-to-line"},null,-1),nt=[lt],it=t("i",{class:"fa-solid fa-xmark"},null,-1),at=[it],dt={class:"d-flex flex-column"},rt={class:"form-check"},ct=["id"],ut=["for"],ht={key:0,class:"col-12"},bt={class:"row"},mt={class:"col-2 d-flex justify-content-around p-2"},yt=["onClick"],pt=t("i",{class:"fa-solid fa-plus"},null,-1),_t=[pt],ft=["onClick"],kt=t("i",{class:"fa-solid fa-minus"},null,-1),gt=[kt],$t=["onClick"],wt=t("i",{class:"fa-solid fa-caret-left"},null,-1),vt=[wt],Ct=["onClick"],Ft=t("i",{class:"fa-solid fa-caret-right"},null,-1),Pt=[Ft],Rt={class:"col-10 d-flex justify-content-center p-1"},Vt=["onClick"],Kt=["onUpdate:modelValue"],jt=t("i",{class:"fa-solid fa-bars"},null,-1),Tt=[jt],St={key:0,class:"row"},Bt={class:"col-12"},qt=t("label",{class:"form-label",id:"bot-domain"},"JSON-код клавиатуры",-1),Mt={key:1},Ut={class:"row"},Ot={class:"col-12 mb-2"},Jt={class:"col-12"},It=t("div",{class:"alert alert-danger",role:"alert"}," Возможно выбрать только 1 тип действия ",-1),Dt={class:"mb-3"},At=["for"],Lt={class:"input-group"},Nt=["id"],Et=t("i",{class:"fa-solid fa-bars"},null,-1),zt=[Et],Gt=t("hr",null,null,-1),Ht={key:0,class:"mb-3"},Xt=["for"],Yt=["id"],Qt={key:1,class:"mb-3"},Wt=["for"],Zt=["id"],xt={key:2,class:"mb-3"},eo=["for"],to=["id"],oo={key:3,class:"mb-3"},so=["for"],lo=["id"],no={key:4,class:"mb-3"},io={class:"form-check"},ao=t("label",{class:"form-check-label",for:"need-login-url"}," Добавить ссылку авторизации ",-1),ro={key:0,class:"mb-3"},co=["for"],uo=["id"],ho={key:1,class:"mb-3"},bo=["for"],mo=["id"],yo={key:2,class:"mb-3"},po=["for"],_o=["id"],fo={key:3,class:"form-check mb-3"},ko=t("label",{class:"form-check-label",for:"need-request_write_access"}," Запросить отправку сообщений ботом ",-1),go={key:5,class:"form-check"},$o=["id"],wo=["for"],vo={key:6,class:"form-check"},Co=["checked","id"],Fo=["for"],Po={key:7,class:"form-check"},Ro=["checked","id"],Vo=["for"],Ko=["id"],jo={class:"modal-dialog"},To={class:"modal-content"},So={class:"modal-body"},Bo={props:["editedKeyboard","type"],components:{Vue3JsonEditor:g},computed:{uuid(){return C()}},watch:{need_login_url:{handler:function(s){this.need_login_url?this.keyboard[this.select.row][this.select.col].login_url={url:null,forward_text:null,bot_username:null,request_write_access:!0}:delete this.keyboard[this.select.row][this.select.col].login_url},deep:!0},keyboard:{handler:function(s){this.save()},deep:!0}},data(){return{need_login_url:!1,pageModal:null,mode:0,editor:!1,showCode:!1,showAssign:!1,selectedRow:null,load:!1,rowCount:1,keyboard:[],select:{row:0,col:0,type:this.type||"reply"}}},mounted(){this.pageModal=new bootstrap.Modal(document.getElementById("page-list-in-keyboard-"+this.uuid),{}),this.editedKeyboard&&this.$nextTick(()=>{this.keyboard=this.editedKeyboard.menu})},methods:{openPageModal(){this.pageModal.show()},attachPage(s){let e=(s.slug.command||"Нет команды").replace(".*","");this.keyboard[this.select.row][this.select.col].text=e,this.$notify({title:"Конструктор страниц",text:"Вы успешно выбрали страницу",type:"success"}),this.type==="inline"&&(this.keyboard[this.select.row][this.select.col].callback_data=e)},reset(){this.selectedRow=null,this.select={row:-1,col:-1,type:this.type||"reply"}},needRemoveField(s,e,o){Object.keys(this.keyboard[e][o]).forEach(l=>{l!=="text"&&l!==s&&delete this.keyboard[e][o][l]})},save(){this.$emit("save",this.keyboard)},onJsonChange(s){this.keyboard=s,this.save()},removeColFromRow(s){this.keyboard[s].length>1?this.keyboard[s].splice(this.keyboard[s].length-1,1):this.keyboard.splice(s,1),this.keyboard.length===0&&(this.selectedRow=null),this.save()},addRowAbove(){this.addRow(!0)},moveCol(s,e=0){s!==this.select.row&&(this.select.row=s,this.select.col=0,this.select.text=this.keyboard[this.select.row][this.select.col].text);let o=this.select.row,l=this.select.col,d=this.keyboard[o].length,c=e===0?l-1>=0?l-1:d-1:l<d-1?l+1:0,b=this.keyboard[o][l];this.keyboard[o][l]=this.keyboard[o][c],this.keyboard[o][c]=b,this.select.row=o,this.select.col=c,this.select.text=this.keyboard[o][c].text},moveRow(s=0){if(this.selectedRow==null)return;let e=this.keyboard.length,o=s===0?this.selectedRow-1>=0?this.selectedRow-1:e-1:this.selectedRow<e-1?this.selectedRow+1:0,l=this.keyboard[this.selectedRow];this.keyboard[this.selectedRow]=this.keyboard[o],this.keyboard[o]=l,this.select.row=o,this.select.col=0,this.select.text=this.keyboard[o][0].text,this.selectedRow=o},addRowBelow(){this.addRow(!1)},addRow(s=!1){if(this.selectedRow==null)this.keyboard?this.keyboard.push([{text:"Нет команды"}]):this.keyboard=[[{text:"Нет команды"}]],this.selectedRow=null;else{let e=s?this.selectedRow:this.selectedRow+1;this.keyboard.splice(e,0,[{text:"Нет команды"}])}this.save()},addColToRow(s){this.keyboard[s].push({text:"Нет команды"}),this.save()},selectIndex(s,e){this.selectedRow=s,this.select.row=s,this.select.col=e,this.select.text=this.keyboard[s][e].text||"",this.load=!0,this.$nextTick(()=>{this.load=!1})},removeCol(s,e){this.keyboard[s].length>1?this.keyboard[s].splice(e,1):this.keyboard.splice(1,1),this.save()}}},F=Object.assign(Bo,{__name:"KeyboardConstructor",setup(s){return(e,o)=>(n(),i(h,null,[!e.editor&&e.mode===0?(n(),i("div",xe,[t("div",et,[t("div",tt,[t("div",null,[e.selectedRow==null?(n(),i("button",{key:0,type:"button",class:"btn btn-primary mb-2",onClick:o[0]||(o[0]=(...l)=>e.addRow&&e.addRow(...l))},"Добавить строку ")):a("",!0),e.selectedRow!=null?(n(),i("button",{key:1,type:"button",class:"btn btn-primary mb-2",onClick:o[1]||(o[1]=(...l)=>e.addRowAbove&&e.addRowAbove(...l))},"Добавить строку выше ")):a("",!0),e.selectedRow!=null?(n(),i("button",{key:2,type:"button",class:"btn btn-primary mb-2 ml-2",onClick:o[2]||(o[2]=(...l)=>e.addRowBelow&&e.addRowBelow(...l))},"Добавить строку ниже ")):a("",!0),e.selectedRow!=null?(n(),i("button",{key:3,type:"button",class:"btn btn-primary mb-2 ml-2",onClick:o[3]||(o[3]=l=>e.moveRow(0))},st)):a("",!0),e.selectedRow!=null?(n(),i("button",{key:4,type:"button",class:"btn btn-primary mb-2 ml-2",onClick:o[4]||(o[4]=l=>e.moveRow(1))},nt)):a("",!0),e.selectedRow!=null?(n(),i("button",{key:5,type:"button",class:"btn btn-outline-danger mb-2 ml-2",onClick:o[5]||(o[5]=(...l)=>e.reset&&e.reset(...l))},at)):a("",!0)]),t("div",dt,[t("div",rt,[r(t("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":o[6]||(o[6]=l=>e.showCode=l),id:"showCode"+e.uuid},null,8,ct),[[_,e.showCode]]),t("label",{class:"form-check-label",for:"showCode"+e.uuid}," Отобразить код ",8,ut)])])]),(e.keyboard||[]).length>0?(n(),i("div",ht,[(n(!0),i(h,null,f(e.keyboard,(l,d)=>(n(),i("div",bt,[t("div",mt,[t("button",{type:"button",class:"btn btn-link w-100",onClick:c=>e.addColToRow(d)},_t,8,yt),t("button",{type:"button",class:"btn btn-link w-100",onClick:c=>e.removeColFromRow(d)},gt,8,ft),t("button",{type:"button",class:"btn btn-link w-100",onClick:c=>e.moveCol(d,0)},vt,8,$t),t("button",{type:"button",class:"btn btn-link w-100",onClick:c=>e.moveCol(d,1)},Pt,8,Ct)]),t("div",Rt,[(n(!0),i(h,null,f(l,(c,b)=>(n(),i("div",{class:"btn-group dropdown-center w-100 m-1",onClick:$=>e.selectIndex(d,b)},[r(t("input",{type:"text",class:y([{"btn-outline-primary":e.select.row!=d||e.select.col!=b,"btn-primary":e.select.row==d&&e.select.col==b},"btn w-100"]),"onUpdate:modelValue":$=>e.keyboard[d][b].text=$},null,10,Kt),[[u,e.keyboard[d][b].text]]),t("button",{type:"button",onClick:o[7]||(o[7]=$=>e.mode=1),class:"btn btn-outline-primary","aria-expanded":"false"},Tt)],8,Vt))),256))])]))),256))])):a("",!0)]),e.showCode?(n(),i("div",St,[t("div",Bt,[qt,e.load?a("",!0):(n(),p(R(g),{key:0,mode:"code",modelValue:e.keyboard,"onUpdate:modelValue":o[8]||(o[8]=l=>e.keyboard=l),"show-btns":!1,expandedOnStart:!0,onJsonChange:e.onJsonChange},null,8,["modelValue","onJsonChange"]))])])):a("",!0)])):a("",!0),e.mode===1?(n(),i("div",Mt,[t("div",Ut,[t("div",Ot,[t("button",{type:"button",onClick:o[9]||(o[9]=l=>e.mode=0),class:"btn btn-outline-primary"},"Назад ")]),t("form",Jt,[It,t("div",Dt,[t("label",{for:"command-title-"+e.select.row+"-col-"+e.select.сol,class:"form-label"},"Название кнопки",8,At),t("div",Lt,[r(t("input",{type:"text",id:"command-title-"+e.select.row+"-col-"+e.select.col,class:"form-control","onUpdate:modelValue":o[10]||(o[10]=l=>e.keyboard[e.select.row][e.select.col].text=l)},null,8,Nt),[[u,e.keyboard[e.select.row][e.select.col].text]]),t("button",{type:"button",onClick:o[11]||(o[11]=(...l)=>e.openPageModal&&e.openPageModal(...l)),class:"btn btn-outline-primary","aria-expanded":"false"},zt)])]),Gt,s.type==="inline"?(n(),i("div",Ht,[t("label",{for:"command-row-"+e.select.row+"-col-"+e.select.col,class:"form-label"},"Команда (для меню в сообщении)",8,Xt),r(t("input",{type:"text",onChange:o[12]||(o[12]=l=>e.needRemoveField("callback_data",e.select.row,e.select.col)),"onUpdate:modelValue":o[13]||(o[13]=l=>e.keyboard[e.select.row][e.select.col].callback_data=l),class:"form-control",id:"command-row-"+e.select.row+"-col-"+e.select.col,placeholder:"/start"},null,40,Yt),[[u,e.keyboard[e.select.row][e.select.col].callback_data]])])):a("",!0),s.type==="inline"?(n(),i("div",Qt,[t("label",{for:"switch-inline-query-row-"+e.select.row+"-col-"+e.select.col,class:"form-label"},"Ссылка на аккаунт в ТЕЛЕГРАММ",8,Wt),r(t("input",{type:"text",class:"form-control",onChange:o[14]||(o[14]=l=>e.needRemoveField("switch_inline_query",e.select.row,e.select.col)),"onUpdate:modelValue":o[15]||(o[15]=l=>e.keyboard[e.select.row][e.select.col].switch_inline_query=l),id:"switch-inline-query-row-"+e.select.row+"-col-"+e.select.col,placeholder:"@YourAccountLink"},null,40,Zt),[[u,e.keyboard[e.select.row][e.select.col].switch_inline_query]])])):a("",!0),s.type==="inline"?(n(),i("div",xt,[t("label",{for:"url-row-"+e.select.row+"-col-"+e.select.col,class:"form-label"},"Внешняя URL-ссылка",8,eo),r(t("input",{type:"text",class:"form-control",onChange:o[16]||(o[16]=l=>e.needRemoveField("url",e.select.row,e.select.col)),"onUpdate:modelValue":o[17]||(o[17]=l=>e.keyboard[e.select.row][e.select.col].url=l),id:"url-row-"+e.select.row+"-col-"+e.colIndex,placeholder:"https://t.me/example"},null,40,to),[[u,e.keyboard[e.select.row][e.select.col].url]])])):a("",!0),s.type==="inline"?(n(),i("div",oo,[t("label",{for:"switch-inline-query-current-chat-row-"+e.select.row+"-col-"+e.select.col,class:"form-label"},"Команда всплывающего меню бота",8,so),r(t("input",{type:"text",class:"form-control",onChange:o[18]||(o[18]=l=>e.needRemoveField("switch_inline_query_current_chat",e.select.row,e.select.col)),"onUpdate:modelValue":o[19]||(o[19]=l=>e.keyboard[e.select.row][e.select.col].switch_inline_query_current_chat=l),id:"switch-inline-query-current-chat-row-"+e.select.row+"-col-"+e.select.col,placeholder:"команда"},null,40,lo),[[u,e.keyboard[e.select.row][e.select.col].switch_inline_query_current_chat]])])):a("",!0),s.type==="inline"?(n(),i("div",no,[t("div",io,[r(t("input",{class:"form-check-input","onUpdate:modelValue":o[20]||(o[20]=l=>e.need_login_url=l),type:"checkbox",id:"need-login-url"},null,512),[[_,e.need_login_url]]),ao]),e.need_login_url?(n(),i("div",ro,[t("label",{for:"login-link-row-"+e.select.row+"-col-"+e.select.col,class:"form-label"},"Ссылка авторизации ",8,co),r(t("input",{type:"text",class:"form-control","onUpdate:modelValue":o[21]||(o[21]=l=>e.keyboard[e.select.row][e.select.col].login_url.url=l),id:"login-link-row-"+e.select.row+"-col-"+e.select.col,placeholder:"Ссылка авторизации",required:""},null,8,uo),[[u,e.keyboard[e.select.row][e.select.col].login_url.url]])])):a("",!0),e.need_login_url?(n(),i("div",ho,[t("label",{for:"login-link-forward-text-row-"+e.select.row+"-col-"+e.select.col,class:"form-label"},"Новый текст кнопки в пересылаемых сообщениях ",8,bo),r(t("input",{type:"text",class:"form-control","onUpdate:modelValue":o[22]||(o[22]=l=>e.keyboard[e.select.row][e.select.col].login_url.forward_text=l),id:"login-link-forward-text-row-"+e.select.row+"-col-"+e.select.col,placeholder:"Текст кнопки"},null,8,mo),[[u,e.keyboard[e.select.row][e.select.col].login_url.forward_text]])])):a("",!0),e.need_login_url?(n(),i("div",yo,[t("label",{for:"login-link-bot-username-row-"+e.select.row+"-col-"+e.select.col,class:"form-label"},"Имя бота, которое будет использоваться для авторизации ",8,po),r(t("input",{type:"text",class:"form-control","onUpdate:modelValue":o[23]||(o[23]=l=>e.keyboard[e.select.row][e.select.col].login_url.bot_username=l),id:"login-link-bot-username-row-"+e.select.row+"-col-"+e.select.col,placeholder:"Имя бота"},null,8,_o),[[u,e.keyboard[e.select.row][e.select.col].login_url.bot_username]])])):a("",!0),e.need_login_url?(n(),i("div",fo,[r(t("input",{class:"form-check-input","onUpdate:modelValue":o[24]||(o[24]=l=>e.keyboard[e.select.row][e.select.col].login_url.request_write_access=l),type:"checkbox",id:"need-request_write_access"},null,512),[[_,e.keyboard[e.select.row][e.select.col].login_url.request_write_access]]),ko])):a("",!0)])):a("",!0),s.type==="reply"?(n(),i("div",go,[t("input",{type:"radio",onChange:o[25]||(o[25]=l=>e.needRemoveField(null,e.select.row,e.select.col)),name:"request-radio",class:"form-check-input",id:"no-action-row-"+e.select.row+"-col-"+e.select.col},null,40,$o),t("label",{class:"form-check-label",for:"no-action-row-"+e.select.row+"-col-"+e.select.col}," Без действий ",8,wo)])):a("",!0),s.type==="reply"?(n(),i("div",vo,[t("input",{type:"radio",onChange:o[26]||(o[26]=l=>e.needRemoveField("request_contact",e.select.row,e.select.col)),onClick:o[27]||(o[27]=l=>e.keyboard[e.select.row][e.select.col].request_contact=!0),name:"request-radio",checked:e.keyboard[e.select.row][e.select.col].request_contact,class:"form-check-input",id:"phone-row-"+e.select.row+"-col-"+e.select.col},null,40,Co),t("label",{class:"form-check-label",for:"phone-row-"+e.select.row+"-col-"+e.select.col}," Запросить телефон ",8,Fo)])):a("",!0),s.type==="reply"?(n(),i("div",Po,[t("input",{type:"radio",name:"request-radio",checked:e.keyboard[e.select.row][e.select.col].request_location,onChange:o[28]||(o[28]=l=>e.needRemoveField("request_location",e.select.row,e.select.col)),onClick:o[29]||(o[29]=l=>e.keyboard[e.select.row][e.select.col].request_location=!0),class:"form-check-input",id:"location-row-"+e.select.row+"-col-"+e.select.col},null,40,Ro),t("label",{class:"form-check-label",for:"location-row-"+e.select.row+"-col-"+e.select.col}," Запросить локацию ",8,Vo)])):a("",!0)])])])):a("",!0),t("div",{class:"modal fade",id:"page-list-in-keyboard-"+e.uuid,tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},[t("div",jo,[t("div",To,[t("div",So,[v(Ze,{onCallback:e.attachPage,editor:!1},null,8,["onCallback"])])])])],8,Ko)],64))}});const qo={key:0,class:"card"},Mo={key:0,class:"card-header"},Uo={key:0,class:"d-flex justify-content-start align-items-center"},Oo=["disabled"],Jo=t("i",{class:"fa-solid fa-arrow-left"},null,-1),Io=[Jo],Do=["disabled"],Ao=t("i",{class:"fa-regular fa-pen-to-square"},null,-1),Lo=[Ao],No=["disabled"],Eo=t("i",{class:"fa-regular fa-floppy-disk"},null,-1),zo=[Eo],Go={key:1,class:"d-flex justify-content-between align-items-center"},Ho={class:"mr-2"},Xo=["disabled"],Yo=t("i",{class:"fa-regular fa-pen-to-square"},null,-1),Qo=[Yo],Wo=["disabled"],Zo=t("i",{class:"fa-regular fa-clone"},null,-1),xo=[Zo],es=["disabled"],ts=t("i",{class:"fa-regular fa-floppy-disk"},null,-1),os=[ts],ss=["disabled"],ls=t("i",{class:"fa-solid fa-trash-can"},null,-1),ns=[ls],is={class:"card-body"},as={key:0,class:"row"},ds={class:"col-md-6 col-12"},rs={class:"mb-3"},cs=t("label",{class:"form-label",id:"bot-domain"},"Тип",-1),us=t("option",{value:"reply"},"Нижняя клавиатура",-1),hs=t("option",{value:"inline"},"Встроенная клавиатура",-1),bs=[us,hs],ms={class:"col-md-6 col-12"},ys={class:"mb-3"},ps=t("label",{class:"form-label",id:"bot-domain"},"Мнемоническое имя",-1),_s={class:"row"},fs={class:"col-12"},ks={class:"row"},gs={class:"col-12"},$s={class:"row"},ws={class:"col"},vs={type:"button",class:"btn btn-outline-primary w-100 mb-2"},Cs={key:1,class:"card"},Fs={class:"card-header d-flex justify-content-between align-items-center"},Ps=["disabled"],Rs=t("i",{class:"fa-regular fa-floppy-disk"},null,-1),Vs=[Rs],Ks={class:"card-body"},js={props:["keyboard","selectMode","simple"],data:()=>({is_edited:!1,load:!1,keyboardForm:null}),components:{Vue3JsonEditor:g},computed:{uuid(){return C()}},watch:{keyboardForm:{handler(s){this.is_edited=!0},deep:!0}},mounted(){const s=this.keyboard;this.keyboardForm=s,this.$nextTick(()=>{this.is_edited=!1,Array.isArray(s.menu)||this.updateKeyboard()})},methods:{onJsonChange(s){this.keyboardForm=s},removeKeyboard(){this.$store.dispatch("removeKeyboardTemplate",{templateId:this.keyboardForm.id}).then(s=>{this.load=!0,this.$nextTick(()=>{this.load=!1}),this.$emit("callback",this.keyboardForm.id)}).catch(()=>{this.$emit("callback",this.keyboardForm.id)})},saveKeyboard(s){this.keyboardForm.menu=s},selectCard(){this.$emit("select",this.keyboardForm)},duplicateKeyboard(){let s=new FormData;Object.keys(this.keyboardForm).forEach(e=>{const o=this.keyboardForm[e]||"";typeof o=="object"?s.append(e,JSON.stringify(o)):s.append(e,o)}),this.$store.dispatch("createKeyboardTemplate",{keyboardForm:s}).then(e=>{this.$notify({title:"Конструктор ботов",text:"Меню успешно продублировано!",type:"success"}),this.load=!0,this.$nextTick(()=>{this.load=!1}),this.$emit("reload")})},updateKeyboard(){let s=new FormData;Object.keys(this.keyboardForm).forEach(e=>{const o=this.keyboardForm[e]||"";typeof o=="object"?s.append(e,JSON.stringify(o)):s.append(e,o)}),this.$store.dispatch("editKeyboardTemplate",{keyboardForm:s}).then(e=>{this.load=!0,this.$nextTick(()=>{this.load=!1,this.is_edited=!1}),this.$emit("callback")}).catch(()=>{this.is_edited=!1,this.$emit("callback")})}}},Ts=Object.assign(js,{__name:"KeyboardCard",setup(s){return(e,o)=>(n(),i(h,null,[e.is_edited?a("",!0):(n(),i("div",qo,[s.simple?a("",!0):(n(),i("div",Mo,[s.selectMode?(n(),i("div",Uo,[t("button",{onClick:o[0]||(o[0]=(...l)=>e.selectCard&&e.selectCard(...l)),disabled:e.load,type:"button",class:"btn btn-outline-success mr-2"},Io,8,Oo),t("button",{onClick:o[1]||(o[1]=l=>e.is_edited=!0),disabled:e.load,type:"button",title:"Редактировать клавиатуру",class:"btn btn-outline-success mr-2"},Lo,8,Do),t("button",{onClick:o[2]||(o[2]=(...l)=>e.updateKeyboard&&e.updateKeyboard(...l)),type:"button",title:"Обновить клавиатуру",disabled:e.load||!e.is_edited,class:y(["btn btn-outline-primary mr-2",{"have-change":e.is_edited}])},zo,10,No)])):a("",!0),s.selectMode?a("",!0):(n(),i("div",Go,[t("div",null,[t("strong",Ho,"#"+k(s.keyboard.id),1),t("button",{onClick:o[3]||(o[3]=l=>e.is_edited=!0),disabled:e.load,type:"button",title:"Редактировать клавиатуру",class:"btn btn-outline-success mr-2"},Qo,8,Xo),t("button",{onClick:o[4]||(o[4]=(...l)=>e.duplicateKeyboard&&e.duplicateKeyboard(...l)),type:"button",title:"Дублировать клавиатуру",disabled:e.load,class:"btn btn-outline-primary mr-2"},xo,8,Wo),t("button",{onClick:o[5]||(o[5]=(...l)=>e.updateKeyboard&&e.updateKeyboard(...l)),type:"button",title:"Обновить клавиатуру",disabled:e.load||!e.is_edited,class:y(["btn btn-outline-primary mr-2",{"have-change":e.is_edited}])},os,10,es)]),t("button",{onClick:o[6]||(o[6]=(...l)=>e.removeKeyboard&&e.removeKeyboard(...l)),type:"button",disabled:e.load,title:"Удалить клавиатуру",class:"btn btn-outline-danger mr-2"},ns,8,ss)]))])),t("div",is,[s.selectMode?a("",!0):(n(),i("div",as,[t("div",ds,[t("div",rs,[cs,r(t("select",{disabled:!0,"onUpdate:modelValue":o[7]||(o[7]=l=>s.keyboard.type=l),class:"form-control"},bs,512),[[V,s.keyboard.type]])])]),t("div",ms,[t("div",ys,[ps,r(t("input",{type:"text",class:"form-control",placeholder:"Мнемоническое имя",disabled:!0,"aria-label":"Мнемоническое имя","onUpdate:modelValue":o[8]||(o[8]=l=>s.keyboard.slug=l),maxlength:"255","aria-describedby":"bot-domain",required:""},null,512),[[u,s.keyboard.slug]])])])])),t("div",_s,[t("div",fs,[t("div",ks,[t("div",gs,[(n(!0),i(h,null,f(s.keyboard.menu,(l,d)=>(n(),i("div",$s,[(n(!0),i(h,null,f(l,(c,b)=>(n(),i("div",ws,[t("button",vs,k(c.text),1)]))),256))]))),256))])])])])])])),e.is_edited?(n(),i("div",Cs,[t("div",Fs,[t("button",{onClick:o[9]||(o[9]=(...l)=>e.updateKeyboard&&e.updateKeyboard(...l)),type:"button",title:"Обновить клавиатуру",disabled:e.load||!e.is_edited,class:y(["btn btn-outline-primary mr-2",{"have-change":e.is_edited}])},Vs,10,Ps)]),t("div",Ks,[e.keyboardForm?(n(),p(F,{key:0,onSave:e.saveKeyboard,"edited-keyboard":e.keyboardForm},null,8,["onSave","edited-keyboard"])):a("",!0),v(R(g),{mode:"code",modelValue:e.keyboardForm,"onUpdate:modelValue":o[10]||(o[10]=l=>e.keyboardForm=l),"show-btns":!1,expandedOnStart:!0,onJsonChange:e.onJsonChange},null,8,["modelValue","onJsonChange"])])])):a("",!0)],64))}}),Ss={key:0,class:"row mb-2 py-3"},Bs={class:"col-12"},qs={class:"card"},Ms=t("div",{class:"card-header"},[t("h6",null,"Форма создания шаблона клавиатуры")],-1),Us={class:"card-body"},Os={class:"col-md-6 col-12"},Js={class:"mb-3"},Is=t("label",{class:"form-label",id:"bot-domain"},"Тип",-1),Ds=t("option",{value:"reply"},"Нижняя клавиатура",-1),As=t("option",{value:"inline"},"Встроенная клавиатура",-1),Ls=[Ds,As],Ns={class:"col-md-6 col-12"},Es={class:"mb-3"},zs={class:"form-label d-flex justify-content-between",id:"bot-domain"},Gs=t("span",null,"Мнемоническое имя",-1),Hs=t("i",{class:"fa-solid fa-arrows-rotate"},null,-1),Xs=[Hs],Ys={class:"col-12"},Qs=t("div",{class:"col-12"},[t("button",{class:"btn btn-outline-success w-100 p-3"}," Добавить новый шаблон клавиатуры ")],-1),Ws={class:"row"},Zs={key:0,class:"col-12"},xs={class:"badge bg-warning"},el={class:"col-12 mb-3"},tl={key:1,class:"card"},ol={class:"card-body"},sl={key:2,class:"col-12 mb-3"},ll=t("div",{class:"alert alert-warning",role:"alert"},[t("p",null,"Список шаблонов клавиатур пуст!")],-1),nl=[ll],il={props:["selectMode","type"],data(){return{keyboards:[],load:!1,bot:null,editedKeyboard:null,selectMenuIndex:null,keyboardForm:{type:"reply",bot_id:null,slug:null,menu:[]}}},computed:{...w(["getCurrentBot"]),filteredKeyboard(){return this.type?this.keyboards.filter(s=>s.type==this.type):this.keyboards}},mounted(){this.loadCurrentBot().then(()=>{this.loadMenusByBotTemplate(),this.generateSlug()})},methods:{selectCard(s){this.$emit("select",s)},keyboardCallbackAction(s){let e=this.keyboards.find(o=>o.id===s);e&&(e.deleted_at=new Date),this.loadMenusByBotTemplate()},loadMenusByBotTemplate(){this.$store.dispatch("loadBotKeyboards",{botId:this.bot.id}).then(s=>{this.keyboards=s.data})},loadCurrentBot(s=null){return this.$store.dispatch("updateCurrentBot",{bot:s}).then(()=>{this.bot=this.getCurrentBot})},submitKeyboard(){this.keyboardForm.bot_id=this.bot.id;let s=new FormData;Object.keys(this.keyboardForm).forEach(e=>{const o=this.keyboardForm[e]||"";typeof o=="object"?s.append(e,JSON.stringify(o)):s.append(e,o)}),this.$store.dispatch("createKeyboardTemplate",{keyboardForm:s}).then(e=>{this.keyboardForm={type:"reply",bot_id:null,slug:null,menu:[]},this.load=!0,this.$nextTick(()=>{this.load=!1}),this.loadMenusByBotTemplate()})},generateSlug(){this.keyboardForm.slug=C()},changeKeyboardFormMenu(s){this.keyboardForm.menu=s}}},al=Object.assign(il,{__name:"KeyboardList",setup(s){return(e,o)=>(n(),i(h,null,[s.selectMode?a("",!0):(n(),i("div",Ss,[t("div",Bs,[t("div",qs,[Ms,t("div",Us,[t("form",{onSubmit:o[3]||(o[3]=K((...l)=>e.submitKeyboard&&e.submitKeyboard(...l),["prevent"])),class:"row"},[t("div",Os,[t("div",Js,[Is,r(t("select",{"onUpdate:modelValue":o[0]||(o[0]=l=>e.keyboardForm.type=l),class:"form-control"},Ls,512),[[V,e.keyboardForm.type]])])]),t("div",Ns,[t("div",Es,[t("label",zs,[Gs,t("a",{onClick:o[1]||(o[1]=(...l)=>e.generateSlug&&e.generateSlug(...l)),href:"#generate"},Xs)]),r(t("input",{type:"text",class:"form-control",placeholder:"Мнемоническое имя","aria-label":"Мнемоническое имя","onUpdate:modelValue":o[2]||(o[2]=l=>e.keyboardForm.slug=l),maxlength:"255","aria-describedby":"bot-domain",required:""},null,512),[[u,e.keyboardForm.slug]])])]),t("div",Ys,[e.load?a("",!0):(n(),p(F,{key:0,onSave:e.changeKeyboardFormMenu,"edited-keyboard":e.keyboardForm},null,8,["onSave","edited-keyboard"]))]),Qs],32)])])])])),t("div",Ws,[e.keyboards&&e.bot?(n(),i("div",Zs,[t("p",null,[m("В списке клавиатур "),t("span",xs,k(e.filteredKeyboard.length)+" ед.",1)])])):a("",!0),e.keyboards&&e.bot?(n(!0),i(h,{key:1},f(e.filteredKeyboard,(l,d)=>(n(),i("div",el,[l.deleted_at?(n(),i("div",tl,[t("div",ol,[t("p",null,"Удаленная клавиатура #"+k(l.id),1)])])):(n(),p(Ts,{key:0,"select-mode":s.selectMode,onSelect:e.selectCard,onReload:e.loadMenusByBotTemplate,onCallback:e.keyboardCallbackAction,keyboard:l},null,8,["select-mode","onSelect","onReload","onCallback","keyboard"]))]))),256)):a("",!0),e.filteredKeyboard.length===0?(n(),i("div",sl,nl)):a("",!0)])],64))}}),dl={class:"col-md-12 col-12"},rl={class:"mb-3"},cl=t("i",{class:"fa-solid fa-xmark"},null,-1),ul=[cl],hl={class:"mb-3"},bl={class:"d-flex justify-content-between flex-wrap al"},ml=t("label",{class:"form-label",id:"bot-main-channel"},"Канал для постов (id,рекламный)",-1),yl={class:"d-flex flex-wrap align-items-center"},pl=t("span",{class:"badge rounded-pill text-bg-danger m-0"},"Нужно",-1),_l={class:"col-12 mb-2"},fl=t("label",{class:"form-label d-flex justify-content-between align-items-center mb-2",id:"bot-domain"},[m(" Текстовое содержимое страницы "),t("span",{class:"badge rounded-pill text-bg-danger m-0"},"Нужно")],-1),kl={class:"form-floating"},gl={for:"floatingTextarea2"},$l={key:0},wl={class:"col-12 mb-2"},vl={class:"form-check"},Cl=t("label",{class:"form-check-label",for:"need-page-images"}," Изображения на странице (максимум 10) ",-1),Fl={key:0,class:"col-12 mb-2"},Pl={class:"card mb-3"},Rl=t("div",{class:"card-header"},[t("h6",null,"Изображения на странице")],-1),Vl={class:"card-body d-flex justify-content-start"},Kl={for:"photos",style:{"margin-right":"10px"},class:"photo-loader ml-2"},jl={class:"row"},Tl={key:0,class:"col-12 d-flex flex-wrap"},Sl={class:"mb-2 img-preview",style:{"margin-right":"10px"}},Bl={class:"remove"},ql=["onClick"],Ml={class:"col-12 mb-2"},Ul={class:"form-check"},Ol=t("label",{class:"form-check-label",for:"need-inline-menu"}," Меню под текстом страницы ",-1),Jl={key:1,class:"col-12 mb-2"},Il={class:"card"},Dl={class:"card-header d-flex justify-between align-items-center"},Al=t("h6",null,"Конструктор меню в сообщении",-1),Ll={key:0},Nl={key:1},El={class:"card-body"},zl=t("div",{class:"col-12"},[t("button",{type:"submit",class:"btn btn-success w-100 p-3"}," Отправить сообщение в канал ")],-1),Gl={data(){return{load:!1,photos:[],showInlineTemplateSelector:!1,need_page_images:!1,need_inline_menu:!1,bot:null,mailForm:{text:"",inline_keyboard:null,channel:null}}},computed:{...w(["getCurrentBot"])},mounted(){this.loadCurrentBot()},methods:{addTextTo(s={param:null,text:null}){this.mailForm.channel=s.text},loadCurrentBot(s=null){return this.$store.dispatch("updateCurrentBot",{bot:s}).then(()=>{this.bot=this.getCurrentBot})},submitMail(){let s=new FormData;if(Object.keys(this.mailForm).forEach(e=>{const o=this.mailForm[e]||"";typeof o=="object"?s.append(e,JSON.stringify(o)):s.append(e,o)}),this.bot&&s.append("bot_id",this.bot.id),this.photos.length>0)for(let e=0;e<this.photos.length;e++)s.append("photos[]",this.photos[e]);this.$store.dispatch("sendToChannel",{mailForm:s}).then(e=>{this.load=!0,this.photos=[],this.need_inline_menu=!1,this.need_page_images=!1,this.mailForm={text:"",channel:null,inline_keyboard:null},this.$notify({title:"Конструктор ботов",text:"Сообщение успещно отправлено!",type:"success"})}).catch(e=>{})},saveInlineKeyboard(s){this.mailForm.inline_keyboard=s},selectInlineKeyboard(s){this.mailForm.inline_keyboard=s,this.showInlineTemplateSelector=!1},getPhoto(s){return{imageUrl:URL.createObjectURL(s)}},removePhoto(s){this.photos.splice(s,1)},removeImage(s){this.mailForm.images.splice(s,1)},onChangePhotos(s){const e=s.target.files;for(let o=0;o<e.length;o++)this.photos.push(e[o])}}},Zl=Object.assign(Gl,{__name:"Mail",setup(s){return(e,o)=>{const l=j("lazy");return e.bot?(n(),i("form",{key:0,onSubmit:o[9]||(o[9]=K((...d)=>e.submitMail&&e.submitMail(...d),["prevent"]))},[t("div",dl,[t("div",rl,[e.mailForm.channel!=null?(n(),i("button",{key:0,type:"button",class:"btn btn-outline-info mr-2",onClick:o[0]||(o[0]=d=>e.mailForm.channel=null)},ul)):a("",!0),t("button",{type:"button",class:y(["btn mr-2",{"btn-info":e.mailForm.channel===e.bot.main_channel,"btn-outline-info":e.mailForm.channel!==e.bot.main_channel}]),onClick:o[1]||(o[1]=d=>e.mailForm.channel=e.bot.main_channel)},"Главный канал ",2),t("button",{type:"button",class:y(["btn",{"btn-info":e.mailForm.channel===e.bot.order_channel,"btn-outline-info":e.mailForm.channel!==e.bot.order_channel}]),onClick:o[2]||(o[2]=d=>e.mailForm.channel=e.bot.order_channel)},"Канал заказов ",2)]),t("div",hl,[t("div",bl,[ml,t("div",yl,[v(T,{token:e.bot.bot_token,param:"channel",onCallback:e.addTextTo},null,8,["token","onCallback"]),pl])]),r(t("input",{type:"text",class:"form-control",placeholder:"id канала","aria-label":"id канала","onUpdate:modelValue":o[3]||(o[3]=d=>e.mailForm.channel=d),maxlength:"255","aria-describedby":"bot-main-channel",required:""},null,512),[[u,e.mailForm.channel]])])]),t("div",_l,[fl,t("div",kl,[r(t("textarea",{class:"form-control","onUpdate:modelValue":o[4]||(o[4]=d=>e.mailForm.text=d),maxlength:"4096",placeholder:"Введите текст",id:"floatingTextarea2",style:{"min-height":"100px"},required:""},null,512),[[u,e.mailForm.text]]),t("label",gl,[m("Содержимое страницы "),e.mailForm.text?(n(),i("span",$l,k(e.mailForm.text.length)+"/4096 ",1)):a("",!0)])])]),t("div",wl,[t("div",vl,[r(t("input",{class:"form-check-input","onUpdate:modelValue":o[5]||(o[5]=d=>e.need_page_images=d),type:"checkbox",id:"need-page-images"},null,512),[[_,e.need_page_images]]),Cl])]),e.need_page_images?(n(),i("div",Fl,[t("div",Pl,[Rl,t("div",Vl,[t("label",Kl,[m(" + "),t("input",{type:"file",id:"photos",multiple:"",accept:"image/*",onChange:o[6]||(o[6]=(...d)=>e.onChangePhotos&&e.onChangePhotos(...d)),style:{display:"none"}},null,32)]),t("div",jl,[e.photos.length>0?(n(),i("div",Tl,[(n(!0),i(h,null,f(e.photos,(d,c)=>(n(),i("div",Sl,[r(t("img",null,null,512),[[l,e.getPhoto(d).imageUrl]]),t("div",Bl,[t("a",{onClick:b=>e.removePhoto(c)},"Удалить",8,ql)])]))),256))])):a("",!0)])])])])):a("",!0),t("div",Ml,[t("div",Ul,[r(t("input",{class:"form-check-input","onUpdate:modelValue":o[7]||(o[7]=d=>e.need_inline_menu=d),type:"checkbox",id:"need-inline-menu"},null,512),[[_,e.need_inline_menu]]),Ol])]),e.need_inline_menu?(n(),i("div",Jl,[t("div",Il,[t("div",Dl,[Al,t("button",{class:y(["btn",{"btn-outline-primary":!e.showInlineTemplateSelector,"btn-primary":e.showInlineTemplateSelector}]),type:"button",onClick:o[8]||(o[8]=d=>e.showInlineTemplateSelector=!e.showInlineTemplateSelector)},[e.showInlineTemplateSelector?(n(),i("span",Nl," Скрыть шаблоны меню")):(n(),i("span",Ll," Открыть шаблоны меню"))],2)]),t("div",El,[e.showInlineTemplateSelector?(n(),p(al,{key:0,class:"mb-2",type:"inline",onSelect:e.selectInlineKeyboard,"select-mode":!0},null,8,["onSelect"])):(n(),p(F,{key:1,type:"inline",onSave:e.saveInlineKeyboard,"edited-keyboard":e.mailForm.inline_keyboard},null,8,["onSave","edited-keyboard"]))])])])):a("",!0),zl],32)):a("",!0)}}});export{Ze as _,F as a,Ts as b,al as c,Zl as d};