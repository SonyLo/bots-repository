import{_ as d}from"./MainAdminLayout-83cdf930.js";import{_ as u,a as c}from"./GlobalSlugList-4e2affc7.js";import{q as o,K as r,O as m,v as e,x as n,t as p,A as l,B as b}from"./index.es-f98e90e3.js";import"./_plugin-vue_export-helper-c27b6911.js";/* empty css                                                 */import"./TelegramChannelHelper-ed863637.js";import"./BotMediaList-30372b72.js";import"./Pagination-8d87cf85.js";const h={class:"container"},f={class:"row mb-2"},_={class:"col-12"},y={class:"btn-group",role:"group","aria-label":"Basic outlined example"},v=["disabled"],k={key:0},S={key:1,class:"row"},$={data(){return{slug:null,load:!1,step:0}},computed:{},mounted(){},methods:{selectScript(i){this.slug=i,this.step=1},reloadGlobalScripts(){this.load=!0,this.$store.dispatch("reloadGlobalScripts",{}).then(i=>{this.$notify({title:"Конструктор команд",text:"Глобальные скрипты успешно обновлены",type:"success"}),this.$nextTick(()=>{this.load=!1})}).catch(()=>{this.$notify({title:"Конструктор команд",text:"Ошибка обновления глобальных скриптов",type:"error"})})}}},O=Object.assign($,{__name:"ScriptPage",setup(i){return(t,s)=>(o(),r(d,{active:6,"need-menu":!0},{default:m(()=>[e("div",h,[e("div",f,[e("div",_,[e("div",y,[e("button",{type:"button",onClick:s[0]||(s[0]=a=>t.step=0),class:n([{"btn-primary":t.step===0,"btn-outline-primary":t.step!==0},"btn"])},"Поиск скрипта ",2),e("button",{type:"button",disabled:t.slug==null,onClick:s[1]||(s[1]=a=>t.step=1),class:n([{"btn-primary":t.step===1,"btn-outline-primary":t.step!==1},"btn"])},"Редактирование скрипта ",10,v)])])]),t.step===0?(o(),p("div",k,[e("a",{onClick:s[2]||(s[2]=(...a)=>t.reloadGlobalScripts&&t.reloadGlobalScripts(...a)),href:"javascript:void()"},"Обновить глобальные скрипты"),t.load?l("",!0):(o(),r(u,{key:0,onSelect:t.selectScript},null,8,["onSelect"]))])):l("",!0),t.step===1?(o(),p("div",S,[b(c,{item:t.slug},null,8,["item"])])):l("",!0)])]),_:1}))}});export{O as default};
