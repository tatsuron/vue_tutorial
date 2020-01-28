import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App.vue'
import router from './router'
import I18nSetup from './I18nSetup'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  i18n: new I18nSetup().i18n

}).$mount('#app')
