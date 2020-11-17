import Vue from 'vue'
import App from './App.vue'
import store from './store'
import ScrollLoader from 'vue-scroll-loader'

Vue.config.productionTip = false
Vue.use(ScrollLoader)
import "@/assets/sass/main.scss"

import 'bootstrap/js/src/collapse'
import 'bootstrap/js/src/popover'
import 'bootstrap/js/src/modal'
import 'bootstrap/js/src/dropdown'
import 'bootstrap/js/src/carousel'
import 'bootstrap/js/src/util'
import 'bootstrap/js/src/button'

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
