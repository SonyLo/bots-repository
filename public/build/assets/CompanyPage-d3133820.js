import{_ as d}from"./MainAdminLayout-79740fff.js";import{_ as m,a as c}from"./CompanyList-e8709bba.js";import{G as u,q as o,K as l,O as y,v as a,x as i,t as r,A as s}from"./index.es-bac3219e.js";import"./_plugin-vue_export-helper-c27b6911.js";/* empty css                                                 */import"./Pagination-fa992967.js";const b={class:"container"},C={class:"row mb-2"},k={class:"col-12"},h={class:"btn-group",role:"group","aria-label":"Basic outlined example"},_=["disabled"],v={key:0,class:"row"},f={class:"col-12"},$={key:1,class:"row"},g={class:"col-12"},w={key:2,class:"row"},B={class:"col-12"},T={data(){return{load:!1,step:0,company:null}},computed:{...u(["getCurrentCompany"])},mounted(){this.loadCurrentCompany()},methods:{loadCurrentCompany(n=null){this.$store.dispatch("updateCurrentCompany",{company:n}).then(()=>{this.company=this.getCurrentCompany})},companyListCallback(n){this.load=!0,this.loadCurrentCompany(n),this.step=2,this.$nextTick(()=>{this.load=!1})},companyCallback(n){this.load=!0,this.$nextTick(()=>{this.load=!1}),document.documentElement.scrollTop=0}}},j=Object.assign(T,{__name:"CompanyPage",setup(n){return(t,e)=>(o(),l(d,{active:1,"need-menu":!0},{default:y(()=>[a("div",b,[a("div",C,[a("div",k,[a("div",h,[a("button",{type:"button",onClick:e[0]||(e[0]=p=>t.step=0),class:i([{"btn-primary":t.step===0,"btn-outline-primary":t.step!==0},"btn"])},"Создание клиента в системе",2),a("button",{type:"button",onClick:e[1]||(e[1]=p=>t.step=1),class:i([{"btn-primary":t.step===1,"btn-outline-primary":t.step!==1},"btn"])},"Поиск существующего в системе клиента",2),a("button",{type:"button",disabled:!t.company,onClick:e[2]||(e[2]=p=>t.step=2),class:i([{"btn-primary":t.step===2,"btn-outline-primary":t.step!==2},"btn"])},"Редактирование выбранного клиента",10,_)])])]),t.step===0?(o(),r("div",v,[a("div",f,[t.load?s("",!0):(o(),l(m,{key:0,onCallback:t.companyCallback},null,8,["onCallback"]))])])):s("",!0),t.step===1?(o(),r("div",$,[a("div",g,[t.load?s("",!0):(o(),l(c,{key:0,onCallback:t.companyListCallback},null,8,["onCallback"]))])])):s("",!0),t.step===2?(o(),r("div",w,[a("div",B,[!t.load&&t.company?(o(),l(m,{key:0,company:t.company,editor:!0,onCallback:t.companyCallback},null,8,["company","onCallback"])):s("",!0)])])):s("",!0)])]),_:1}))}});export{j as default};
