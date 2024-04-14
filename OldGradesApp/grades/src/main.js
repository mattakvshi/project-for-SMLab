import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

import vuetify from '@/plugins/vuetify';

//глобальные стили: иконки + шрифты
import '@/assets/css/materialdesignicons.min.css'
import '@/assets/fonts/roboto/roboto.css'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
