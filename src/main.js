import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Icon} from 'vant';
import './assets/public.less'
import BottomBar from '@/components/BottomBar'
Vue.use(Icon);
Vue.component('BottomBar',BottomBar);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
