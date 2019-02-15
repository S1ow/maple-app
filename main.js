import Vue from 'vue'
import App from './App'
import http from '@/api'

Vue.config.productionTip = false

App.mpType = 'app'

Vue.prototype.$http = http

const app = new Vue({
    ...App
})
app.$mount()
