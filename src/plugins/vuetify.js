import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@mdi/font/css/materialdesignicons.css'
import colors from 'vuetify/lib/util/colors'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

Vue.component('font-awesome-icon', FontAwesomeIcon) // Register component globally
library.add(fas) // Include needed icons
Vue.use(Vuetify, {
})
export default new Vuetify({
    icons: {
        iconfont: 'mdi', // default
        values: {
            product: 'mdi-dropbox',
            support: 'mdi-lifebuoy',
            steam: 'mdi-steam-box',
            pc: 'mdi-desktop-classic',
            xbox: 'mdi-xbox',
            playstation: 'mdi-playstation',
            switch: 'mdi-nintendo-switch',
        },
        // values: MY_ICONS,
        // iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
    },
    theme: {
        themes: {
            light: {
                primary: colors.grey.darken2,
                secondary: colors.grey.darken1,
                accent: colors.shades.black,
                error: colors.red.accent3,
                mainPurple:colors.purple.accent3
            },
            dark: {
                primary: colors.blue.lighten3,
            },
        },
    },

});
