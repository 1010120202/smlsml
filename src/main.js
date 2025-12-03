import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import i18n from './i18n'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// Vue.prototype.$i18n = i18n

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  i18n,
}).$mount('#app')
