import{_ as d}from"./MainAdminLayout-66722a39.js";import{_ as u,a as m}from"./SlugForm-2c18ca5f.js";import{o,J as c,N as b,t as e,v as n,q as a,A as i,z as l}from"./index.es-3f23c3ba.js";import"./index-2a9de1d3.js";import"./Pagination-7feb7ae2.js";import"./_plugin-vue_export-helper-c27b6911.js";const _={class:"container"},v={class:"row mb-2"},y={class:"col-12"},f={class:"btn-group",role:"group","aria-label":"Basic outlined example"},k=["disabled"],g={key:0,class:"row"},h={key:1},C={key:2,class:"row"},$={data(){return{slug:null,load:!1,step:0}},computed:{},mounted(){},methods:{selectScript(r){this.slug=r,this.step=2}}},j=Object.assign($,{__name:"ScriptPage",setup(r){return(t,s)=>(o(),c(d,{active:6},{default:b(()=>[e("div",_,[e("div",v,[e("div",y,[e("div",f,[e("button",{type:"button",onClick:s[0]||(s[0]=p=>t.step=0),class:n([{"btn-primary":t.step===0,"btn-outline-primary":t.step!==0},"btn"])},"Добавление скрипта ",2),e("button",{type:"button",onClick:s[1]||(s[1]=p=>t.step=1),class:n([{"btn-primary":t.step===1,"btn-outline-primary":t.step!==1},"btn"])},"Поиск скрипта ",2),e("button",{type:"button",disabled:t.slug==null,onClick:s[2]||(s[2]=p=>t.step=2),class:n([{"btn-primary":t.step===2,"btn-outline-primary":t.step!==2},"btn"])},"Редактирование скрипта ",10,k)])])]),t.step===0?(o(),a("div",g,[i(u)])):l("",!0),t.step===1?(o(),a("div",h,[i(m,{onSelect:t.selectScript},null,8,["onSelect"])])):l("",!0),t.step===2?(o(),a("div",C,[i(u,{item:t.slug},null,8,["item"])])):l("",!0)])]),_:1}))}});export{j as default};