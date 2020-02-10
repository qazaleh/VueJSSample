import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from "vue-router";
import Vuetify from "vuetify";
import LoginForm from "@/components/LoginForm";
import OtpCodeView from "@/components/OtpCodeView";
import MainRoot from "@/components/MainRoot";
import Dashboard from "@/components/Dashboard";
import PaymentGateway from "@/components/PaymentGateway";
// import UserWorkFlow from "@/components/UserWorkFlow";
// import WalletDiagrams from "@/components/WalletDiagrams";
// import CustomerInfo from "@/components/CustomerInfo";
import ProfileView from "@/components/ProfileView";

Vue.config.productionTip = false
Vue.config.rtl = true
Vue.use(VueRouter)
Vue.use(Vuetify)
Vue.use(require('vue-chartist'), {
  messageNoData: "داده ای برای نمایش وجود ندارد",
  classNoData: "empty",
})
export default new Vuetify({
  rtl: true,
})
const routers =[
  {
    name:"login",
    path:"/login",
    component:LoginForm
  },
  {
    name:"otp",
    path:"/otp",
    component:OtpCodeView
  },
  {
    name:"home",
    path:"/home",
    component:MainRoot,
  },
  {
    name:"dashboard",
    path:"/dashboard",
    component:Dashboard,
    children: [{
      name:"userProfile",
      path:"userProfile",
      component:ProfileView,
    },
    ]
  },
  {
    name:"gateway",
    path:"/gateway",
    component:PaymentGateway,
  },
]

const router = new  VueRouter({mode:'history',routes:routers})
router.push('/login')

new Vue({
  vuetify,
  router,
  rtl:true,
  render: h => h(App)
}).$mount('#app')
