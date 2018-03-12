// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import { router } from './router'
import mixins from './mixins'

// element-ui
import './elementUi'

// mixin
Vue.mixin(mixins);

// 监控
import Raven from 'raven-js';
import RavenVue from 'raven-js/plugins/vue';
Raven
  .config('https://92c2612cb9914e2b9396d152c8514cad@sentry.io/298571', {
    release: 'test'
  })
  .addPlugin(RavenVue, Vue)
  .install();
    
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
