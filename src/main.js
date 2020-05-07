import Vue from 'vue'
import App from './App.vue'

require('./assets/style/reset.css')
require('./assets/style/quicksand.css')

new Vue({
  ...App
})
.$mount('#app')