import{w as i,J as l,o as a,c as s,a as c,t as n,y as m,I as p,E as _}from"./app-985e5a72.js";const g={class:"text-sm text-red-600 dark:text-red-400"},h={__name:"InputError",props:{message:{type:String}},setup(e){return(r,t)=>i((a(),s("div",null,[c("p",g,n(e.message),1)],512)),[[l,e.message]])}},f={class:"block font-medium text-sm text-gray-700 dark:text-gray-300"},y={key:0},k={key:1},x={__name:"InputLabel",props:{value:{type:String}},setup(e){return(r,t)=>(a(),s("label",f,[e.value?(a(),s("span",y,n(e.value),1)):(a(),s("span",k,[m(r.$slots,"default")]))]))}},v=["value"],S={__name:"TextInput",props:{modelValue:{type:String,required:!0}},emits:["update:modelValue"],setup(e,{expose:r}){const t=p(null);return _(()=>{t.value.hasAttribute("autofocus")&&t.value.focus()}),r({focus:()=>t.value.focus()}),(u,o)=>(a(),s("input",{class:"border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm",value:e.modelValue,onInput:o[0]||(o[0]=d=>u.$emit("update:modelValue",d.target.value)),ref_key:"input",ref:t},null,40,v))}};export{x as _,S as a,h as b};
