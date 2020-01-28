import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from "vue-router";
import Team from "@/components/Team";
import ProfileView from "@/components/ProfileView";
import Vuetify from "vuetify";
import HomeBase from "@/components/HomeBase";

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
    name:"counter",
    path:"/",
    component:HomeBase
  },
  {
    name:"profile",
    path:"/profile",
    component:ProfileView
  },
  {
    name:"team",
    path:"/team",
    component:Team
  }
]

const router = new  VueRouter({mode:'history',routes:routers})

new Vue({
  vuetify,
  router,
  rtl:true,
  render: h => h(App)
}).$mount('#app')
