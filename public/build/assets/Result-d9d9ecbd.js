import{_ as n}from"./V1Layout-943574dd.js";import{R as r}from"./app-0a5943b0.js";import{aF as a,y as c,bw as l,D as t,b4 as s,A as d,O as o,z as p,P as m}from"./index.es-0c1040a4.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./BotMediaList-7025de24.js";import"./Pagination-36c231ef.js";import"./InlineInjectionsHelper.vue_vue_type_style_index_0_lang-2226bae9.js";import"./main-448b0665.js";import"./TelegramChannelHelper-9e8fc8f5.js";import"./v4-4a60fe23.js";import"./carousel.es-a798ae94.js";import"./GlobalSlugList-cf2de431.js";import"./vue3-perfect-scrollbar-8b545248.js";import"./index-d071548a.js";const u={class:"d-flex justify-content-center align-items-center w-100",style:{height:"100vh"}},_={class:"card card-style bg-8 w-100 px-3","data-card-height":"250",style:{height:"250px"}},h={class:"card-center"},g=t("h2",{class:"color-white font-700 text-center mb-2"},"Результат",-1),f={class:"color-white boxed-text-l text-center opacity-60 mt-n1 mb-3"},y={key:0,class:"color-white boxed-text-l text-center opacity-60 mt-n1 mb-3 d-flex flex-column"},b={class:"px-3"},x=t("div",{class:"card-overlay bg-black opacity-80"},null,-1),w={data(){return{statistic:null}},computed:{tg(){return window.Telegram.WebApp}},mounted(){this.data&&(this.statistic=JSON.parse(this.data))},methods:{}},z=Object.assign(w,{__name:"Result",props:{message:{type:String},data:{type:String}},setup(i){return(e,v)=>(a(),c(n,null,{default:l(()=>[t("div",u,[t("div",_,[t("div",h,[g,t("p",f,s(i.message),1),e.statistic?(a(),d("p",y,[t("span",null,[o("Всего товаров затронуто "),t("strong",null,s(e.statistic.total_product_count||0),1)]),t("span",null,[o("Совпадений товара с FrontPad "),t("strong",null,s(e.statistic.total_frontpad_count||0),1)]),t("span",null,[o("Создано новых товаров "),t("strong",null,s(e.statistic.created_product_count||0),1)]),t("span",null,[o("Обновлено товаров "),t("strong",null,s(e.statistic.updated_product_count||0),1)])])):p("",!0),t("div",b,[m(r)])]),x])])]),_:1}))}});export{z as default};
