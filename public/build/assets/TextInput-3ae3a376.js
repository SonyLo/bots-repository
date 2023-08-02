import{H as l,a0 as i,o as a,q as s,t as c,x as n,M as m,l as p,a1 as _}from"./index.es-065e5c55.js";const g={class:"text-sm text-red-600 dark:text-red-400"},b={__name:"InputError",props:{message:{type:String}},setup(e){return(r,t)=>l((a(),s("div",null,[c("p",g,n(e.message),1)],512)),[[i,e.message]])}},f={class:"block font-medium text-sm text-gray-700 dark:text-gray-300"},k={key:0},y={key:1},h={__name:"InputLabel",props:{value:{type:String}},setup(e){return(r,t)=>(a(),s("label",f,[e.value?(a(),s("span",k,n(e.value),1)):(a(),s("span",y,[m(r.$slots,"default")]))]))}},v=["value"],S={__name:"TextInput",props:{modelValue:{type:String,required:!0}},emits:["update:modelValue"],setup(e,{expose:r}){const t=p(null);return _(()=>{t.value.hasAttribute("autofocus")&&t.value.focus()}),r({focus:()=>t.value.focus()}),(u,o)=>(a(),s("input",{class:"border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm",value:e.modelValue,onInput:o[0]||(o[0]=d=>u.$emit("update:modelValue",d.target.value)),ref_key:"input",ref:t},null,40,v))}};export{h as _,S as a,b};
