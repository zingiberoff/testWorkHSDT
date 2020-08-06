import Vue from 'vue'
import App from './App.vue'
import GraySection from './views/GraySection.vue'


Vue.config.productionTip = false
Vue.component('gray-section', GraySection)
new Vue({
    render: h => h(App)
}).$mount('#app')
