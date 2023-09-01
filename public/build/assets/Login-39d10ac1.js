import{f as b,D as h,O as x,u as s,o as d,q as y,Z as w,X as v,J as m,N as u,A as a,Y as V,x as B,z as c,t as r,$ as C,C as f,v as $,H as q}from"./index.es-c55f1051.js";import{_ as N,P}from"./PrimaryButton-c1a9fcde.js";import{_ as p,a as g,b as k}from"./TextInput-e28fc925.js";import"./_plugin-vue_export-helper-c27b6911.js";const R=["value"],S={__name:"Checkbox",props:{checked:{type:[Array,Boolean],required:!0},value:{default:null}},emits:["update:checked"],setup(l,{emit:e}){const i=l,n=b({get(){return i.checked},set(t){e("update:checked",t)}});return(t,o)=>h((d(),y("input",{type:"checkbox",value:l.value,"onUpdate:modelValue":o[0]||(o[0]=_=>w(n)?n.value=_:null),class:"rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-indigo-600 shadow-sm focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:focus:ring-offset-gray-800"},null,8,R)),[[x,s(n)]])}},U={key:0,class:"mb-4 font-medium text-sm text-green-600"},D=["onSubmit"],L={class:"mt-4"},z={class:"block mt-4"},A={class:"flex items-center"},E=r("span",{class:"ml-2 text-sm text-gray-600 dark:text-gray-400"},"Remember me",-1),F={class:"flex items-center justify-end mt-4"},J={__name:"Login",props:{canResetPassword:{type:Boolean},status:{type:String}},setup(l){const e=v({email:"",password:"",remember:!1}),i=()=>{e.post(route("login"),{onFinish:()=>e.reset("password")})};return(n,t)=>(d(),m(N,null,{default:u(()=>[a(s(V),{title:"Log in"}),l.status?(d(),y("div",U,B(l.status),1)):c("",!0),r("form",{onSubmit:q(i,["prevent"])},[r("div",null,[a(p,{for:"email",value:"Email"}),a(g,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":t[0]||(t[0]=o=>s(e).email=o),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),a(k,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),r("div",L,[a(p,{for:"password",value:"Password"}),a(g,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s(e).password,"onUpdate:modelValue":t[1]||(t[1]=o=>s(e).password=o),required:"",autocomplete:"current-password"},null,8,["modelValue"]),a(k,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),r("div",z,[r("label",A,[a(S,{name:"remember",checked:s(e).remember,"onUpdate:checked":t[2]||(t[2]=o=>s(e).remember=o)},null,8,["checked"]),E])]),r("div",F,[l.canResetPassword?(d(),m(s(C),{key:0,href:n.route("password.request"),class:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"},{default:u(()=>[f(" Forgot your password? ")]),_:1},8,["href"])):c("",!0),a(P,{class:$(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:u(()=>[f(" Log in ")]),_:1},8,["class","disabled"])])],40,D)]),_:1}))}};export{J as default};
