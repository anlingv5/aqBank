// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
import { Checklist } from 'mint-ui';
Vue.component(Checklist.name, Checklist);
import { Button } from 'mint-ui';
Vue.component(Button.name, Button);

Vue.config.productionTip = false
import store from '@/store/index'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store
})
