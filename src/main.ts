import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './I18nSetup'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  i18n

}).$mount('#app')
