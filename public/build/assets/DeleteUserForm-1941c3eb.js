import{_ as $,o as u,c as g,y as w,G as B,H as C,J as D,p as S,e as V,b as o,l,w as m,L as f,a as e,T as y,n as v,u as c,d as E,M as U,K as h,k as N,N as T,f as p,B as A}from"./app-dcc84722.js";import{_ as K,a as M,b as L}from"./TextInput-4b9f5763.js";const O={},P={class:"inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150"};function W(t,r){return u(),g("button",P,[w(t.$slots,"default")])}const x=$(O,[["render",W]]),z={class:"fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50","scroll-region":""},F=e("div",{class:"absolute inset-0 bg-gray-500 dark:bg-gray-900 opacity-75"},null,-1),I=[F],j={__name:"Modal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(t,{emit:r}){const a=t;B(()=>a.show,()=>{a.show?document.body.style.overflow="hidden":document.body.style.overflow=null});const s=()=>{a.closeable&&r("close")},d=n=>{n.key==="Escape"&&a.show&&s()};C(()=>document.addEventListener("keydown",d)),D(()=>{document.removeEventListener("keydown",d),document.body.style.overflow=null});const i=S(()=>({sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"})[a.maxWidth]);return(n,b)=>(u(),V(U,{to:"body"},[o(y,{"leave-active-class":"duration-200"},{default:l(()=>[m(e("div",z,[o(y,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:l(()=>[m(e("div",{class:"fixed inset-0 transform transition-all",onClick:s},I,512),[[f,t.show]])]),_:1}),o(y,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"opacity-100 translate-y-0 sm:scale-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100 translate-y-0 sm:scale-100","leave-to-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:l(()=>[m(e("div",{class:v(["mb-6 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto",c(i)])},[t.show?w(n.$slots,"default",{key:0}):E("",!0)],2),[[f,t.show]])]),_:3})],512),[[f,t.show]])]),_:3})]))}},G=["type"],H={__name:"SecondaryButton",props:{type:{type:String,default:"button"}},setup(t){return(r,a)=>(u(),g("button",{type:t.type,class:"inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-500 rounded-md font-semibold text-xs text-gray-700 dark:text-gray-300 uppercase tracking-widest shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:opacity-25 transition ease-in-out duration-150"},[w(r.$slots,"default")],8,G))}},J={class:"space-y-6"},q=e("header",null,[e("h2",{class:"text-lg font-medium text-gray-900 dark:text-gray-100"},"Delete Account"),e("p",{class:"mt-1 text-sm text-gray-600 dark:text-gray-400"}," Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. ")],-1),Q={class:"p-6"},R=e("h2",{class:"text-lg font-medium text-gray-900 dark:text-gray-100"}," Are you sure you want to delete your account? ",-1),X=e("p",{class:"mt-1 text-sm text-gray-600 dark:text-gray-400"}," Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. ",-1),Y={class:"mt-6"},Z={class:"mt-6 flex justify-end"},te={__name:"DeleteUserForm",setup(t){const r=h(!1),a=h(null),s=N({password:""}),d=()=>{r.value=!0,T(()=>a.value.focus())},i=()=>{s.delete(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>n(),onError:()=>a.value.focus(),onFinish:()=>s.reset()})},n=()=>{r.value=!1,s.reset()};return(b,_)=>(u(),g("section",J,[q,o(x,{onClick:d},{default:l(()=>[p("Delete Account")]),_:1}),o(j,{show:r.value,onClose:n},{default:l(()=>[e("div",Q,[R,X,e("div",Y,[o(K,{for:"password",value:"Password",class:"sr-only"}),o(M,{id:"password",ref_key:"passwordInput",ref:a,modelValue:c(s).password,"onUpdate:modelValue":_[0]||(_[0]=k=>c(s).password=k),type:"password",class:"mt-1 block w-3/4",placeholder:"Password",onKeyup:A(i,["enter"])},null,8,["modelValue","onKeyup"]),o(L,{message:c(s).errors.password,class:"mt-2"},null,8,["message"])]),e("div",Z,[o(H,{onClick:n},{default:l(()=>[p(" Cancel ")]),_:1}),o(x,{class:v(["ml-3",{"opacity-25":c(s).processing}]),disabled:c(s).processing,onClick:i},{default:l(()=>[p(" Delete Account ")]),_:1},8,["class","disabled"])])])]),_:1},8,["show"])]))}};export{te as default};
