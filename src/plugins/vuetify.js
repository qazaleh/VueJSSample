import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@mdi/font/css/materialdesignicons.css'
import colors from 'vuetify/lib/util/colors'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

Vue.component('font-awesome-icon',FontAwesomeIcon) // Register component globally
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
                accent:colors.lightBlue,
                primary: '#b10dbb',
                secondary: '#b10dbb',
                error: '#b10dbb',
            },
            dark: {
                primary: colors.blue.lighten3,
            },
        },
    },

});
