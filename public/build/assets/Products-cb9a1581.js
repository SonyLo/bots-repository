import{m as u,o as r,c,a,w as i,v as _,F as l,r as p,b as n,d as h}from"./app-0c485829.js";import{_ as m}from"./_plugin-vue_export-helper-c27b6911.js";const f={props:["item"]};function P(e,t,s,o,d,x){return null}const $=m(f,[["render",P]]),v={class:"row"},g={class:"col-12"},B={class:"col-12"},V={data(){return{search:null,products:[]}},computed:{...u(["getProducts"])},watch:{search:function(e,t){this.loadBotProducts()}},mounted(){this.loadBotProducts()},methods:{loadBotProducts(e=0){this.$store.dispatch("loadProducts",{dataObject:{search:this.search},page:e}).then(()=>{this.products=this.getProducts}).catch(()=>{})}}},w=Object.assign(V,{__name:"ProductList",setup(e){return(t,s)=>(r(),c("div",v,[a("div",g,[i(a("input",{type:"text",class:"form-control","onUpdate:modelValue":s[0]||(s[0]=o=>t.search=o)},null,512),[[_,t.search]])]),t.products.length>0?(r(!0),c(l,{key:0},p(t.products,(o,d)=>(r(),c("div",B,[n($,{item:o},null,8,["item"])]))),256)):h("",!0)]))}}),b={class:"container pt-3 pb-3"},j={__name:"Products",setup(e){return(t,s)=>(r(),c("div",b,[n(w)]))}};export{j as default};
