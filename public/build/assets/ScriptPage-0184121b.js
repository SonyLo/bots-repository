import{_ as d}from"./MainAdminLayout-4a13f226.js";import{a as c,_ as u}from"./GlobalSlugList-945af1d7.js";import{o,H as r,M as m,t as e,v as n,q as p,z as l,A as b}from"./index.es-ce2063b4.js";import"./index-490ab070.js";import"./TelegramChannelHelper-03e7b968.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Pagination-e8ce4012.js";const h={class:"container"},f={class:"row mb-2"},_={class:"col-12"},y={class:"btn-group",role:"group","aria-label":"Basic outlined example"},v=["disabled"],k={key:0},S={key:1,class:"row"},$={data(){return{slug:null,load:!1,step:0}},computed:{},mounted(){},methods:{selectScript(i){this.slug=i,this.step=1},reloadGlobalScripts(){this.load=!0,this.$store.dispatch("reloadGlobalScripts",{}).then(i=>{this.$notify({title:"Конструктор команд",text:"Глобальные скрипты успешно обновлены",type:"success"}),this.$nextTick(()=>{this.load=!1})}).catch(()=>{this.$notify({title:"Конструктор команд",text:"Ошибка обновления глобальных скриптов",type:"error"})})}}},j=Object.assign($,{__name:"ScriptPage",setup(i){return(t,s)=>(o(),r(d,{active:6},{default:m(()=>[e("div",h,[e("div",f,[e("div",_,[e("div",y,[e("button",{type:"button",onClick:s[0]||(s[0]=a=>t.step=0),class:n([{"btn-primary":t.step===0,"btn-outline-primary":t.step!==0},"btn"])},"Поиск скрипта ",2),e("button",{type:"button",disabled:t.slug==null,onClick:s[1]||(s[1]=a=>t.step=1),class:n([{"btn-primary":t.step===1,"btn-outline-primary":t.step!==1},"btn"])},"Редактирование скрипта ",10,v)])])]),t.step===0?(o(),p("div",k,[e("a",{onClick:s[2]||(s[2]=(...a)=>t.reloadGlobalScripts&&t.reloadGlobalScripts(...a)),href:"javascript:void()"},"Обновить глобальные скрипты"),t.load?l("",!0):(o(),r(c,{key:0,onSelect:t.selectScript},null,8,["onSelect"]))])):l("",!0),t.step===1?(o(),p("div",S,[b(u,{item:t.slug},null,8,["item"])])):l("",!0)])]),_:1}))}});export{j as default};
