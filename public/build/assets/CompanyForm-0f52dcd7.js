import{_ as L,j as F,o as n,c as a,a as o,g as C,t as b,w as r,q as V,v as u,e as h,d as m,F as y,r as v,B as I,n as $,b as k,l as g,f as P}from"./app-d543012c.js";/* empty css                                                    */const j={props:["company"],data(){return{locations:[],deletedLocations:[],locationForm:{id:null,lat:null,lon:null,address:null,description:null,location_channel:null,can_booking:!1,photos:[],company_id:null}}},mounted(){this.loadLocationsByCompany()},methods:{loadLocationsByCompany(){this.$store.dispatch("loadLocationsByCompany",{companyId:this.company.id}).then(l=>{this.locations=l||[]}).catch(()=>{})},getPhoto(l){return{imageUrl:URL.createObjectURL(l)}},removePhoto(l){this.locationForm.photos.splice(l,1)},removeItem(l){this.locations[l].id!=null&&this.deletedLocations.push(this.locations[l].id),this.locations.splice(l,1)},submitLocations(){this.locations.forEach(l=>{let s=new FormData;if(Object.keys(l).forEach(e=>{const _=l[e]||"";typeof _=="object"?s.append(e,JSON.stringify(_)):s.append(e,_)}),l.photos){for(let e=0;e<l.photos.length;e++)s.append("files[]",l.photos[e]);s.delete("photos")}this.deletedLocations.length>0&&s.append("deleted_locations",JSON.stringify(this.deletedLocations)),this.$store.dispatch("createLocation",{locationForm:s}).then(e=>{this.$emit("callback"),this.$notify("Локация успешно созадана и сохранена")}).catch(e=>{})})},selectLocation(l){this.locationForm=l},submitLocation(){this.locationForm.company_id=this.company.id,this.locations.push(this.locationForm),this.$notify("Локация успешно добавлена в список. Не забудьте сохранить"),this.locationForm={id:null,lat:null,lon:null,address:null,description:null,location_channel:null,can_booking:!1,photos:[]}},onChangePhotos(l){const s=l.target.files;for(let e=0;e<s.length;e++)this.locationForm.photos.push(s[e])}}},q={class:"card"},B={class:"card-body"},O={class:"row"},z={class:"col-md-8"},D={class:"row"},N={class:"col-12"},S={class:"form-check"},E=o("label",{class:"form-check-label",for:"flexCheckDefault"}," Можно бронировать столик ",-1),R={class:"col-12"},T={class:"mb-3"},J=o("label",{class:"form-label",id:"location-address"},[h(" Адрес заведения "),o("span",{class:"badge rounded-pill text-bg-danger m-0"},"Нужно")],-1),M={class:"row"},x={class:"col-md-6 col-12"},A={class:"mb-3"},G=o("label",{class:"form-label",id:"location-lat"},[h(" Широта "),o("span",{class:"badge rounded-pill text-bg-danger m-0"},"Нужно")],-1),H={class:"col-md-6 col-12"},K={class:"mb-3"},Q=o("label",{class:"form-label",id:"location-lon"},[h(" Долгота "),o("span",{class:"badge rounded-pill text-bg-danger m-0"},"Нужно")],-1),W={class:"row"},X={class:"col-12"},Y={class:"mb-3"},Z={class:"form-label",id:"location-description"},oo=o("span",{class:"badge rounded-pill text-bg-danger m-0"},"Нужно",-1),so={key:0,class:"text-gray-400 ml-3",style:{"font-size":"10px"}},eo={class:"row"},to={class:"col-12 mb-3"},lo=o("h6",null,"Фотографии локаций",-1),no={class:"photo-preview d-flex justify-content-start flex-wrap w-100"},io={for:"location-photos",style:{"margin-right":"10px"},class:"photo-loader ml-2"},ao=o("span",null,"+",-1),co={class:"mb-2 img-preview",style:{"margin-right":"10px"}},ro={class:"remove"},mo=["onClick"],ho={class:"row"},po={class:"col-12"},uo={class:"btn btn-outline-success w-100",type:"submit"},_o={key:0},bo={key:1},yo={class:"col-md-4 mt-3"},go=["onClick"],vo={class:"card-header d-flex justify-content-between"},fo={key:0,class:"badge bg-success"},ko=["onClick"],Fo={class:"card-body"},wo={key:0},$o={key:1},Co={key:2,class:"w-100 d-flex"},Uo={class:"mb-2 img-preview",style:{"margin-right":"10px"}},Lo={key:3,class:"w-100 d-flex"},Vo={class:"mb-2 img-preview",style:{"margin-right":"10px"}},Io={class:"row mt-2"},Po={class:"col-12"},jo=["disabled"];function qo(l,s,e,_,c,p){const i=F("mask"),d=F("lazy");return n(),a("div",q,[o("div",B,[o("div",O,[o("div",z,[o("form",{onSubmit:s[6]||(s[6]=C((...t)=>p.submitLocation&&p.submitLocation(...t),["prevent"]))},[o("h6",null,"Локации к компании #"+b(e.company.title||"Не установлен"),1),o("div",D,[o("div",N,[o("div",S,[r(o("input",{class:"form-check-input","onUpdate:modelValue":s[0]||(s[0]=t=>c.locationForm.can_booking=t),type:"checkbox",value:"false",id:"flexCheckDefault"},null,512),[[V,c.locationForm.can_booking]]),E])]),o("div",R,[o("div",T,[J,r(o("input",{type:"text",class:"form-control",placeholder:"Адрес","aria-label":"Адрес",maxlength:"255","onUpdate:modelValue":s[1]||(s[1]=t=>c.locationForm.address=t),"aria-describedby":"location-address",required:""},null,512),[[u,c.locationForm.address]])])])]),o("div",M,[o("div",x,[o("div",A,[G,r(o("input",{type:"text",class:"form-control",placeholder:"##.######","aria-label":"Широта",maxlength:"255","onUpdate:modelValue":s[2]||(s[2]=t=>c.locationForm.lat=t),"aria-describedby":"location-lat",required:""},null,512),[[i,"##.######"],[u,c.locationForm.lat]])])]),o("div",H,[o("div",K,[Q,r(o("input",{type:"text",class:"form-control",placeholder:"##.######","aria-label":"Долгота",maxlength:"255","onUpdate:modelValue":s[3]||(s[3]=t=>c.locationForm.lon=t),"aria-describedby":"location-lon",required:""},null,512),[[i,"##.######"],[u,c.locationForm.lon]])])])]),o("div",W,[o("div",X,[o("div",Y,[o("label",Z,[h(" Описание локации "),oo,c.locationForm.description?(n(),a("small",so," Длина текста "+b(c.locationForm.description.length),1)):m("",!0)]),r(o("textarea",{type:"text",class:"form-control",placeholder:"Описание локации","aria-label":"Описание локации",maxlength:"255","onUpdate:modelValue":s[4]||(s[4]=t=>c.locationForm.description=t),"aria-describedby":"location-description",required:""},`
                    `,512),[[u,c.locationForm.description]])])])]),o("div",eo,[o("div",to,[lo,o("div",no,[o("label",io,[ao,o("input",{type:"file",id:"location-photos",multiple:"",accept:"image/*",onChange:s[5]||(s[5]=(...t)=>p.onChangePhotos&&p.onChangePhotos(...t)),style:{display:"none"}},null,32)]),c.locationForm.photos?(n(!0),a(y,{key:0},v(c.locationForm.photos,(t,w)=>(n(),a("div",co,[r(o("img",null,null,512),[[d,p.getPhoto(t).imageUrl]]),o("div",ro,[o("a",{onClick:f=>p.removePhoto(w)},"Удалить",8,mo)])]))),256)):m("",!0)])])]),o("div",ho,[o("div",po,[o("button",uo,[c.locationForm.id?(n(),a("span",_o,"Обновить расположение")):(n(),a("span",bo,"Добавить расположение"))])])])],32)]),c.locations?(n(!0),a(y,{key:0},v(c.locations,(t,w)=>(n(),a("div",yo,[o("div",{class:"card",onClick:f=>p.selectLocation(t)},[o("div",vo,[o("h6",null,[h("Адрес локации "),o("strong",null,b(t.address||"Не указано"),1),h(" (ш:"+b(t.lat)+",д:"+b(t.lon)+") ",1),t.can_booking?(n(),a("span",fo,"Можно забронировать столик")):m("",!0)]),o("a",{class:"cursor-pointer",onClick:f=>p.removeItem(w)},"Удалить",8,ko)]),o("div",Fo,[t.location_channel?(n(),a("p",wo,[h("Канал заведения "),o("strong",null,b(t.location_channel),1)])):m("",!0),o("p",null,b(t.description||"Не указано"),1),t.photos?(n(),a("h6",$o,"Фотографии локаций")):m("",!0),t.photos?(n(),a("div",Co,[t.photos.length>0?(n(!0),a(y,{key:0},v(t.photos,(f,U)=>(n(),a("div",Uo,[r(o("img",null,null,512),[[d,p.getPhoto(f).imageUrl]])]))),256)):m("",!0)])):m("",!0),t.images?(n(),a("div",Lo,[t.images.length>0?(n(!0),a(y,{key:0},v(t.images,(f,U)=>(n(),a("div",Vo,[r(o("img",null,null,512),[[d,"/images-by-company-id/"+e.company.id+"/"+f]])]))),256)):m("",!0)])):m("",!0)])],8,go)]))),256)):m("",!0)]),o("div",Io,[o("div",Po,[o("button",{onClick:s[7]||(s[7]=(...t)=>p.submitLocations&&p.submitLocations(...t)),disabled:c.locations.length===0&&c.deletedLocations.length===0,class:"btn btn-success p-3 w-100"}," Сохранить локации клиента ",8,jo)])])])])}const Bo=L(j,[["render",qo]]),Oo={key:0,class:"row mb-2"},zo={class:"col-12"},Do={key:1,class:"row bot-sub-menu mb-2"},No={class:"col-12"},So={class:"btn-group w-100",role:"group","aria-label":"Basic outlined example"},Eo={class:"row"},Ro={class:"col-6"},To={class:"row"},Jo={class:"col-12 mb-3"},Mo={class:"form-label",id:"company-title"},xo=o("i",{class:"fa-regular fa-circle-question mr-1"},null,-1),Ao=o("span",{class:"badge rounded-pill text-bg-danger m-0"},"Нужно",-1),Go={class:"col-12"},Ho={class:"mb-3"},Ko={class:"form-label",id:"company-slug"},Qo=o("i",{class:"fa-regular fa-circle-question mr-1"},null,-1),Wo=o("div",null,[h("Название компании на АНГЛИЙСКОМ"),o("br"),h(" без пробелов! можно использовать _"),o("br"),h(" Должно быть уникальным! Не отображается пользователю. ")],-1),Xo=o("span",{class:"badge rounded-pill text-bg-danger m-0"},"Нужно",-1),Yo={class:"col-12"},Zo={class:"mb-3"},os={class:"form-label",id:"company-description"},ss=o("i",{class:"fa-regular fa-circle-question mr-1"},null,-1),es=o("div",null,'Добавится в раздел "О Нас"',-1),ts=o("span",{class:"badge rounded-pill text-bg-danger m-0"},"Нужно",-1),ls={key:0,class:"text-gray-400 ml-3",style:{"font-size":"10px"}},ns={class:"col-12"},is={class:"mb-3"},as={class:"form-label",id:"company-address"},cs=o("i",{class:"fa-regular fa-circle-question mr-1"},null,-1),ds=o("div",null,[h("Где находится главное заведение компании!"),o("br"),h('Можно не указывать, т.к. есть еще "Локации" ')],-1),rs={class:"col-12"},ms={class:"mb-3"},hs=o("label",{class:"form-label",id:"company-email"},"Основная почта компании",-1),ps={class:"col-12"},us={class:"mb-3"},_s=o("label",{class:"form-label",id:"company-manager"},"Менеджер компании",-1),bs={class:"col-12"},ys={class:"card mb-3"},gs=o("div",{class:"card-header"},[o("h6",null,[h("Логотип компании "),o("span",{class:"badge rounded-pill text-bg-warning m-0"},"Желательно")])],-1),vs={class:"card-body d-flex justify-content-start"},fs={for:"photos",style:{"margin-right":"10px"},class:"photo-loader ml-2"},ks={key:0,class:"mb-2 img-preview",style:{"margin-right":"10px"}},Fs={class:"remove"},ws=o("i",{class:"fa-regular fa-trash-can"},null,-1),$s=[ws],Cs={key:1,class:"mb-2 img-preview",style:{"margin-right":"10px"}},Us={class:"remove"},Ls=o("i",{class:"fa-regular fa-trash-can"},null,-1),Vs=[Ls],Is={class:"col-6"},Ps={class:"row"},js={class:"col-12"},qs={class:"card mb-3"},Bs=o("div",{class:"card-header"},[o("h6",null,"Телефонные номера")],-1),Os={class:"card-body"},zs=o("div",{class:"row"},[o("div",{class:"col-12"},[o("h6",null,"Телефонный номер")])],-1),Ds={class:"col-10"},Ns={class:"mb-3"},Ss=["onUpdate:modelValue","aria-describedby"],Es={class:"col-2"},Rs=["onClick"],Ts=o("i",{class:"fa-regular fa-trash-can"},null,-1),Js=[Ts],Ms={class:"row"},xs={class:"col-12"},As={class:"col-12"},Gs={class:"card mb-3"},Hs=o("div",{class:"card-header"},[o("h6",null,"Ссылки на соц. сети")],-1),Ks={class:"card-body"},Qs=o("div",{class:"row"},[o("div",{class:"col-12"},[o("h6",null,"Ссылка")])],-1),Ws={class:"col-10"},Xs={class:"mb-3"},Ys=["onUpdate:modelValue","aria-describedby"],Zs={class:"col-2"},oe=["onClick"],se=o("i",{class:"fa-regular fa-trash-can"},null,-1),ee=[se],te={class:"row"},le={class:"col-12"},ne={class:"col-12"},ie={class:"card mb-3"},ae=o("div",{class:"card-header"},[o("h6",null,"График работы")],-1),ce={class:"card-body"},de={class:"row"},re={class:"col-12 d-flex justify-content-between align-items-center"},me=o("h6",null,"День недели ",-1),he={class:"col-10"},pe={class:"mb-3"},ue=["onUpdate:modelValue","aria-describedby"],_e={class:"col-2"},be=["onClick"],ye=o("i",{class:"fa-regular fa-trash-can"},null,-1),ge=[ye],ve={class:"row"},fe={class:"col-12"},ke=["disabled"],Fe={class:"row"},we={class:"col-12"},$e={type:"submit",class:"btn btn-outline-success w-100 p-3"},Ce={key:0},Ue={key:1},Le={key:3},Ve={props:["company","editor"],data(){return{step:0,load:!1,photo:null,removedImage:null,need_reset:!1,companyForm:{id:null,title:null,slug:null,description:null,address:null,phones:[""],links:[""],email:null,schedule:[],manager:null}}},watch:{companyForm:{handler(l){this.need_reset=!0},deep:!0}},mounted(){this.company&&this.$nextTick(()=>{this.companyForm={id:this.company.id||null,title:this.company.title||null,slug:this.company.slug||null,image:this.company.image||null,description:this.company.description||null,address:this.company.address||null,phones:this.company.phones||[""],links:this.company.links||[""],email:this.company.email||null,schedule:this.company.schedule||[],manager:this.company.manager||null}})},methods:{resetForm(){this.photo=null,this.removedImage=null,this.companyForm={id:null,title:null,slug:null,description:null,address:null,phones:[""],links:[""],email:null,schedule:[],manager:null},this.$nextTick(()=>{this.need_reset=!1})},getPhoto(){return{imageUrl:URL.createObjectURL(this.photo)}},onChangePhotos(l){const s=l.target.files;this.photo=s[0],this.companyForm.image=null},schedulePlaceholder(){this.companyForm.schedule.length>0?this.companyForm.schedule=[]:this.companyForm.schedule=["Понедельник - с 8:00 до 20:00","Вторник - с 8:00 до 20:00","Среда - с 8:00 до 20:00","Четверг - с 8:00 до 20:00","Пятница - с 8:00 до 20:00","Суббота - с 8:00 до 20:00","Воскресенье - выходной"]},removeCompanyImage(){this.removedImage=this.companyForm.image,this.companyForm.image=null},addItem(l){this.companyForm[l].push("")},removeItem(l,s){this.companyForm[l].splice(s,1)},submitForm(){let l=new FormData;Object.keys(this.companyForm).forEach(s=>{const e=this.companyForm[s]||"";typeof e=="object"?l.append(s,JSON.stringify(e)):l.append(s,e)}),l.append("company_logo",this.photo),this.removedImage!=null&&l.append("removed_image",this.removedImage),this.$store.dispatch(this.companyForm.id===null?"createCompany":"updateCompany",{companyForm:l}).then(s=>{this.$emit("callback",s.data),this.$notify("Компания успешно создана")}).catch(s=>{})}}},je=Object.assign(Ve,{__name:"CompanyForm",setup(l){return(s,e)=>{const _=I("Popper"),c=F("lazy"),p=F("mask");return n(),a(y,null,[s.need_reset&&!l.editor?(n(),a("div",Oo,[o("div",zo,[o("button",{type:"button",onClick:e[0]||(e[0]=(...i)=>s.resetForm&&s.resetForm(...i)),class:"btn btn-outline-danger"},"Новый клиент \\ очистка формы")])])):m("",!0),l.editor?(n(),a("div",Do,[o("div",No,[o("div",So,[o("button",{type:"button",class:$([{"btn-primary text-white":s.step===0},"btn btn-outline-primary"]),onClick:e[1]||(e[1]=i=>s.step=0)},"Информация о компании ",2),o("button",{type:"button",class:$([{"btn-primary text-white":s.step===1},"btn btn-outline-primary"]),onClick:e[2]||(e[2]=i=>s.step=1)},"Информация о расположении ",2)])])])):m("",!0),s.step===0?(n(),a("form",{key:2,onSubmit:e[16]||(e[16]=C((...i)=>s.submitForm&&s.submitForm(...i),["prevent"]))},[o("div",Eo,[o("div",Ro,[o("div",To,[o("div",Jo,[o("label",Mo,[k(_,{content:"Название вашей компании"},{default:g(()=>[xo]),_:1}),h(" Название компании "),Ao]),r(o("input",{type:"text",class:"form-control",placeholder:"Название","aria-label":"Название","onUpdate:modelValue":e[3]||(e[3]=i=>s.companyForm.title=i),maxlength:"255","aria-describedby":"company-title",required:""},null,512),[[u,s.companyForm.title]])]),o("div",Go,[o("div",Ho,[o("label",Ko,[k(_,null,{content:g(()=>[Wo]),default:g(()=>[Qo]),_:1}),h(" Название компании латиницей (домен компании) "),Xo]),r(o("input",{type:"text",class:"form-control",placeholder:"Мнемоническое имя","aria-label":"Мнемоническое имя","onUpdate:modelValue":e[4]||(e[4]=i=>s.companyForm.slug=i),maxlength:"255","aria-describedby":"company-slug",required:""},null,512),[[u,s.companyForm.slug]])])]),o("div",Yo,[o("div",Zo,[o("label",os,[k(_,null,{content:g(()=>[es]),default:g(()=>[ss]),_:1}),h(" Описание компании "),ts,s.companyForm.description?(n(),a("small",ls," Длина текста "+b(s.companyForm.description.length),1)):m("",!0)]),r(o("textarea",{type:"text",class:"form-control",placeholder:"Описание компании","aria-label":"Описание компании","onUpdate:modelValue":e[5]||(e[5]=i=>s.companyForm.description=i),"aria-describedby":"company-description",required:""},`
                    `,512),[[u,s.companyForm.description]])])]),o("div",ns,[o("div",is,[o("label",as,[k(_,null,{content:g(()=>[ds]),default:g(()=>[cs]),_:1}),h(" Основной адрес компании")]),r(o("input",{type:"text",class:"form-control",placeholder:"Адрес","aria-label":"Адрес",maxlength:"255","onUpdate:modelValue":e[6]||(e[6]=i=>s.companyForm.address=i),"aria-describedby":"company-address"},null,512),[[u,s.companyForm.address]])])]),o("div",rs,[o("div",ms,[hs,r(o("input",{type:"email",class:"form-control",placeholder:"Почтовый адрес","aria-label":"Почтовый адрес",maxlength:"255","onUpdate:modelValue":e[7]||(e[7]=i=>s.companyForm.email=i),"aria-describedby":"company-email"},null,512),[[u,s.companyForm.email]])])]),o("div",ps,[o("div",us,[_s,r(o("input",{type:"text",class:"form-control",placeholder:"Имя менеджера","aria-label":"Имя менеджера","onUpdate:modelValue":e[8]||(e[8]=i=>s.companyForm.manager=i),maxlength:"255","aria-describedby":"company-manager"},null,512),[[u,s.companyForm.manager]])])]),o("div",bs,[o("div",ys,[gs,o("div",vs,[o("label",fs,[h(" + "),o("input",{type:"file",id:"photos",accept:"image/*",onChange:e[9]||(e[9]=(...i)=>s.onChangePhotos&&s.onChangePhotos(...i)),style:{display:"none"}},null,32)]),s.photo?(n(),a("div",ks,[r(o("img",null,null,512),[[c,s.getPhoto().imageUrl]]),o("div",Fs,[o("a",{onClick:e[10]||(e[10]=i=>s.photo=null)},$s)])])):m("",!0),s.companyForm.image?(n(),a("div",Cs,[r(o("img",null,null,512),[[c,"/images/"+s.companyForm.slug+"/"+s.companyForm.image]]),o("div",Us,[o("a",{onClick:e[11]||(e[11]=(...i)=>s.removeCompanyImage&&s.removeCompanyImage(...i))},Vs)])])):m("",!0)])])])])]),o("div",Is,[o("div",Ps,[o("div",js,[o("div",qs,[Bs,o("div",Os,[zs,(n(!0),a(y,null,v(s.companyForm.phones,(i,d)=>(n(),a("div",{class:"row",key:"phone"+d},[o("div",Ds,[o("div",Ns,[r(o("input",{type:"text",class:"form-control",placeholder:"+7(000)000-00-00","aria-label":"Номер телефона",maxlength:"255","onUpdate:modelValue":t=>s.companyForm.phones[d]=t,"aria-describedby":"company-phone-"+d},null,8,Ss),[[p,"+7(###)###-##-##"],[u,s.companyForm.phones[d]]])])]),o("div",Es,[o("button",{type:"button",onClick:t=>s.removeItem("phones",d),class:"btn btn-outline-danger w-100"},Js,8,Rs)])]))),128)),o("div",Ms,[o("div",xs,[o("button",{type:"button",onClick:e[12]||(e[12]=i=>s.addItem("phones")),class:"btn btn-outline-success w-100"},"Добавить еще номер ")])])])])]),o("div",As,[o("div",Gs,[Hs,o("div",Ks,[Qs,(n(!0),a(y,null,v(s.companyForm.links,(i,d)=>(n(),a("div",{class:"row",key:"link"+d},[o("div",Ws,[o("div",Xs,[r(o("input",{type:"text",class:"form-control",placeholder:"Ссылка на соц.сеть","aria-label":"Ссылка на соц.сеть",maxlength:"255","onUpdate:modelValue":t=>s.companyForm.links[d]=t,"aria-describedby":"company-link-"+d},null,8,Ys),[[u,s.companyForm.links[d]]])])]),o("div",Zs,[o("button",{type:"button",onClick:t=>s.removeItem("links",d),class:"btn btn-outline-danger w-100"},ee,8,oe)])]))),128)),o("div",te,[o("div",le,[o("button",{type:"button",onClick:e[13]||(e[13]=i=>s.addItem("links")),class:"btn btn-outline-success w-100"},"Добавить еще ссылку ")])])])])]),o("div",ne,[o("div",ie,[ae,o("div",ce,[o("div",de,[o("div",re,[me,o("a",{class:"btn btn-link",onClick:e[14]||(e[14]=(...i)=>s.schedulePlaceholder&&s.schedulePlaceholder(...i))},"Заполнить\\очистить")])]),(n(!0),a(y,null,v(s.companyForm.schedule,(i,d)=>(n(),a("div",{class:"row",key:"link"+d},[o("div",he,[o("div",pe,[r(o("input",{type:"text",class:"form-control",placeholder:"День недели и время работы","aria-label":"День недели и время работы",maxlength:"255","onUpdate:modelValue":t=>s.companyForm.schedule[d]=t,"aria-describedby":"company-schedule-"+d},null,8,ue),[[u,s.companyForm.schedule[d]]])])]),o("div",_e,[o("button",{type:"button",onClick:t=>s.removeItem("schedule",d),class:"btn btn-outline-danger w-100"},ge,8,be)])]))),128)),o("div",ve,[o("div",fe,[o("button",{type:"button",disabled:s.companyForm.schedule.length===7,onClick:e[15]||(e[15]=i=>s.addItem("schedule")),class:"btn btn-outline-success w-100"},"Добавить еще время работы ",8,ke)])])])])])])])]),o("div",Fe,[o("div",we,[o("button",$e,[s.companyForm.id===null?(n(),a("span",Ce,"Создать компанию")):(n(),a("span",Ue,"Обновить компанию"))])])])],32)):m("",!0),s.step===1?(n(),a("div",Le,[l.company&&!s.load?(n(),P(Bo,{key:0,company:l.company},null,8,["company"])):m("",!0)])):m("",!0)],64)}}});export{Bo as L,je as _};
