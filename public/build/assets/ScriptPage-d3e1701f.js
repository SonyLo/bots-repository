import{_ as u}from"./MainAdminLayout-9c3c835b.js";import{_ as d,a as m}from"./SlugForm-f185bea7.js";import{o,f as c,l as b,a as e,n,c as a,b as i,d as l}from"./app-1391603c.js";import"./Pagination-58951aad.js";const _={class:"container"},f={class:"row mb-2"},y={class:"col-12"},v={class:"btn-group",role:"group","aria-label":"Basic outlined example"},k=["disabled"],g={key:0,class:"row"},h={key:1},C={key:2,class:"row"},$={data(){return{slug:null,load:!1,step:0}},computed:{},mounted(){},methods:{selectScript(r){this.slug=r,this.step=2}}},V=Object.assign($,{__name:"ScriptPage",setup(r){return(t,s)=>(o(),c(u,{active:6},{default:b(()=>[e("div",_,[e("div",f,[e("div",y,[e("div",v,[e("button",{type:"button",onClick:s[0]||(s[0]=p=>t.step=0),class:n([{"btn-primary":t.step===0,"btn-outline-primary":t.step!==0},"btn"])},"Добавление скрипта ",2),e("button",{type:"button",onClick:s[1]||(s[1]=p=>t.step=1),class:n([{"btn-primary":t.step===1,"btn-outline-primary":t.step!==1},"btn"])},"Поиск скрипта ",2),e("button",{type:"button",disabled:t.slug==null,onClick:s[2]||(s[2]=p=>t.step=2),class:n([{"btn-primary":t.step===2,"btn-outline-primary":t.step!==2},"btn"])},"Редактирование скрипта ",10,k)])])]),t.step===0?(o(),a("div",g,[i(d)])):l("",!0),t.step===1?(o(),a("div",h,[i(m,{onSelect:t.selectScript},null,8,["onSelect"])])):l("",!0),t.step===2?(o(),a("div",C,[i(d,{item:t.slug},null,8,["item"])])):l("",!0)])]),_:1}))}});export{V as default};
