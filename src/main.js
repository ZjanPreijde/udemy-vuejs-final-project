// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'

import App from '@/App'
import router from '@/router' // export default ...
import store from '@/store/store' // export default ...
import { FIREBASE_URL } from '@/config/firebase'

// testing purposes: from webpack template
Vue.config.productionTip = false

Vue.use(VueResource)
Vue.http.options.root = FIREBASE_URL

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
