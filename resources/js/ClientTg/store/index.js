import {createStore} from 'vuex'

import cashBack from './modules/cashback';
import admins from './modules/admins';

import products from './modules/shop/products';

import wheelOfFortune from "./modules/globals/wheelOfFortune";
import bonusProduct from "./modules/globals/bonusProduct";
import instagramQuest from "./modules/globals/instagramQuest";
import cart from "./modules/shop/cart";
import self from "./modules/self";
import favorites from "./modules/shop/favorites";
import shopAdmin from "./modules/shop/admin";
import company from "./modules/company";
import watches from "./modules/shop/watch";
import pages from "./modules/pages";
import bots from "./modules/bots";
import dialogs from "./modules/dialogs";

import util from "./modules/utilites";



export default createStore({
    state: {
        errors: [],
    },
    getters: {
        getErrors: state => state.errors || [],
    },
    actions: {
        async callbackForm(context, payload = {callbackForm: null}) {

            let tgData = window.Telegram.WebApp.initData
            let botDomain = window.currentBot.bot_domain || null
            let slugId = window.currentScript || null


            let callbackForm = payload.callbackForm

            callbackForm.append("tgData", tgData)
            callbackForm.append("slugId", slugId)
            callbackForm.append("botDomain", botDomain)

            let link = `/bot-client/callback`

            let _axios = util.makeAxiosFactory(link, 'POST', callbackForm)

            return _axios.then((response) => {
                return Promise.resolve(response.data);
            }).catch(err => {
                context.commit("setErrors", err.response.data.errors || [])
                return Promise.reject(err);
            })
        }
    },
    mutations: {
        setErrors(state, payload) {
            state.errors = payload || [];
        },
    },
    modules: {
        cashBack,
        admins,
        products,
        wheelOfFortune,
        instagramQuest,
        cart,
        self,
        favorites,
        shopAdmin,
        bonusProduct,
        watches,
        company,
        pages,
        bots,
        dialogs
    }
})
