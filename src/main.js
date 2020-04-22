import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from "vue-router";
import Vuetify from "vuetify";
import LoginForm from "@/components/LoginForm";
import OtpCodeView from "@/components/OtpCodeView";
import VueAxios from 'vue-axios'
import VueAuthenticate from 'vue-authenticate'
import axios from 'axios';

// import MainRoot from "@/components/MainRoot";
import Dashboard from "@/components/Dashboard";
import PaymentGateway from "@/components/PaymentGateway";
import PanelHelp from "@/components/PanelHelp";
import PanelPrivacyPolicy from "@/components/PanelPrivacyPolicy";
import PanelRules from "@/components/PanelRules";
import PanelCommonQuestion from "@/components/PanelCommonQuestion";
import PanelUsageHelp from "@/components/PanelUsageHelp";
import ComplaintSubmittingForm from "@/components/ComplaintSubmittingForm";
import VueCharts from 'vue-chartjs'
import Vuex from 'vuex'

import vBlur from 'v-blur'
// import PanelMainView from "./components/PanelMainView";
import ScrollView from 'vue-scrollview'
import BankingAccountsMainView from "./components/Accounts/BankingAccountsMainView";
import VueMobileDetection from 'vue-mobile-detection'
import VueMask from 'v-mask'


Vue.use(VueMask);
Vue.use(VueMobileDetection)
Vue.use(VueAxios, axios)
Vue.use(VueAuthenticate, {
    baseUrl: 'http://localhost::8080', // Your API domain

    providers: {
        github: {
            clientId: '',
            redirectUri: 'http://localhost:8080/auth/callback' // Your client app URL
        }
    }
})
Vue.use(vBlur)
Vue.config.productionTip = false
Vue.config.rtl = true
Vue.use(VueRouter)
Vue.use(Vuetify)
Vue.use(VueCharts)
Vue.use(Vuex)

Vue.use(require('vue-chartist'), {
  messageNoData: "داده ای برای نمایش وجود ندارد",
  classNoData: "empty",
})

const options = {
    throttle: 50,
    callbacks: []
}
Vue.use(ScrollView, options)
export default new Vuetify({
  rtl: true,
    // rules: {
    //     'no-console': 'off',
    // },
})
const routers =[
  {
    name:"login",
    path:"/",
    component:LoginForm
  },
  {
    name:"otp",
    path:"/otp",
    component:OtpCodeView
  },
    {
        name:"dashboard",
        path:"/dashboard",
        component:Dashboard
    },
    {
        name:"gateway",
        path:"/gateway",
        component:PaymentGateway
    },
    {
        name:"bankingAccounts",
        path:"/bankingAccounts",
        component:BankingAccountsMainView
    },
    // {
    //     name:"help",
    //     path:"PanelHelp/help",
    //     component:PanelUsageHelp,
    // },
    // {
    //     name:"commonQuestions",
    //     path:"PanelHelp/commonQuestions",
    //     component:PanelCommonQuestion,
    // },
    // {
    //     name:"privacy",
    //     path:"PanelHelp/privacy",
    //     component:PanelPrivacyPolicy,
    // },
    // {
    //     name:"complainForm",
    //     path:"PanelHelp/complainForm",
    //     component:ComplaintSubmittingForm,
    // },
    // {
    //     name:"rules",
    //     path:"PanelHelp/rules",
    //     component:PanelRules,
    // },

    {name: "PanelHelp", path: '/panelHelp/:id', component: PanelHelp, children: [
            {
                // name:"help",
                path:":panelUsageHelp",
                component:PanelUsageHelp,
                // props: true
            },
            {
                // name:"commonQuestions",
                path:"commonQuestions",
                component:PanelCommonQuestion,
                // props: true
            },
            {
                // name:"privacy",
                path:"privacy",
                component:PanelPrivacyPolicy,
                // props: true
            },
            {
                // name:"rules",
                path:"rules",
                component:PanelRules,
                // props: true
            },
            {
                // name:"complainForm",
                path:"complainForm",
                component:ComplaintSubmittingForm,
                // props: true

            }
        ]
    },
    //         {
    //     name:"PanelHelp",
    //     path:"/panelHelp/",
    //     component:PanelHelp,
    //     children:[
    //         {
    //             name:"help",
    //             path:"/help",
    //             component:PanelUsageHelp,
    //         },
    //         {
    //             name:"commonQuestions",
    //             path:"/commonQuestions",
    //             component:PanelCommonQuestion,
    //         },
    //         {
    //             name:"rules",
    //             path:"/rules",
    //             component:PanelRules,
    //         },
    //         {
    //             name:"privacy",
    //             path:"/privacy",
    //             component:PanelPrivacyPolicy,
    //         },
    //         {
    //             name:"complainForm",
    //             path:"/complainForm",
    //             component:ComplaintSubmittingForm,
    //         }
    //     ]
    // },

]

const router = new  VueRouter({mode:'history',routes:routers})
if(localStorage.token != null && localStorage.token != '') {
    router.push(router.name)
    // router.push('/dashboard')
}else {
    router.push('/login')
}


new Vue({
  vuetify,
  router,
  rtl:true,
  render: h => h(App)
}).$mount('#app')
