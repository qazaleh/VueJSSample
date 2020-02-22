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
// import ProfileView from "@/components/ProfileView";
import PanelHelp from "@/components/PanelHelp";
import PanelPrivacyPolicy from "@/components/PanelPrivacyPolicy";
import PanelRules from "@/components/PanelRules";
import PanelCommonQuestion from "@/components/PanelCommonQuestion";
import PanelUsageHelp from "@/components/PanelUsageHelp";

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
    class:'main'
  },
  {
    name:"gateway",
    path:"/gateway",
    component:PaymentGateway,
    class:'main'
  },
  {
    name:"PanelHelp",
    path:"/panelHelp",
    component:PanelHelp,
    class:'main'
  },
  {
    name:"help",
    path:"/help",
    component:PanelUsageHelp,
    class:'panelHelpTab'
  },
  {
    name:"commonQuestions",
    path:"/commonQuestions",
    component:PanelCommonQuestion,
    class:'panelHelpTab'
  },
  {
    name:"rules",
    path:"/rules",
    component:PanelRules,
    class:'panelHelpTab'
  },
  {
    name:"privacy",
    path:"/privacy",
    component:PanelPrivacyPolicy,
    class:'panelHelpTab'
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
