import{L as n,q as a,K as l,O as r,v as e,t as i,F as _,C as h,y as p,H as u,P as m}from"./index.es-bac3219e.js";import{_ as f}from"./MainAdminLayout-79740fff.js";import"./_plugin-vue_export-helper-c27b6911.js";/* empty css                                                 */const v={class:"container"},b={class:"row"},w={class:"col-3 mb-2"},g={class:"card"},y={class:"card-header"},k={class:"card-body"},F={alt:"",class:"w-100 object-cover"},x={class:"card-footer d-flex"},B={class:"dropdown"},C=e("button",{class:"btn btn-outline-info",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},[e("i",{class:"fa-solid fa-bars"})],-1),$={class:"dropdown-menu"},D=["onClick"],j=e("li",null,[e("a",{class:"dropdown-item",href:"#"},"Получить ссылку на файл")],-1),z={data(){return{load:!1,step:0}},computed:{},mounted(){},methods:{removeFile(s,t){this.files.splice(t,1),this.$store.dispatch("removeFile",{file_path:s}).then(()=>{this.$notify("Файл удалён")})}}},H=Object.assign(z,{__name:"MediaPage",props:{files:{default:[]}},setup(s){return(t,L)=>{const c=n("lazy");return a(),l(f,{active:4,"need-menu":!0},{default:r(()=>[e("div",v,[e("div",b,[(a(!0),i(_,null,h(s.files,(o,d)=>(a(),i("div",w,[e("div",g,[e("div",y,[e("p",null,p(o),1)]),e("div",k,[u(e("img",F,null,512),[[c,"/"+o]])]),e("div",x,[e("div",B,[C,e("ul",$,[e("li",null,[e("a",{class:"dropdown-item",href:"#",onClick:m(M=>t.removeFile(o,d),["prevent"])},"Удалить файл",8,D)]),j])])])])]))),256))])])]),_:1})}}});export{H as default};
