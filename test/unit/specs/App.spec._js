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

describe('App.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(App, router, store)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('h1').textContent)
      .toEqual('Stock Trader - Final Project')
  })
})
