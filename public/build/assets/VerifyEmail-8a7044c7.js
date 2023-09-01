import{X as f,f as m,o as a,J as g,N as s,A as o,u as e,Y as y,q as p,z as _,t as i,C as r,v as h,$ as k,H as v}from"./index.es-c55f1051.js";import{_ as x,P as b}from"./PrimaryButton-c1a9fcde.js";import"./_plugin-vue_export-helper-c27b6911.js";const w=i("div",{class:"mb-4 text-sm text-gray-600 dark:text-gray-400"}," Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ",-1),V={key:0,class:"mb-4 font-medium text-sm text-green-600 dark:text-green-400"},B=["onSubmit"],N={class:"mt-4 flex items-center justify-between"},z={__name:"VerifyEmail",props:{status:{type:String}},setup(n){const d=n,t=f({}),c=()=>{t.post(route("verification.send"))},u=m(()=>d.status==="verification-link-sent");return(l,C)=>(a(),g(x,null,{default:s(()=>[o(e(y),{title:"Email Verification"}),w,e(u)?(a(),p("div",V," A new verification link has been sent to the email address you provided during registration. ")):_("",!0),i("form",{onSubmit:v(c,["prevent"])},[i("div",N,[o(b,{class:h({"opacity-25":e(t).processing}),disabled:e(t).processing},{default:s(()=>[r(" Resend Verification Email ")]),_:1},8,["class","disabled"]),o(e(k),{href:l.route("logout"),method:"post",as:"button",class:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"},{default:s(()=>[r("Log Out")]),_:1},8,["href"])])],40,B)]),_:1}))}};export{z as default};
