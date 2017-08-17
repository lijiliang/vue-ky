import 'babel-polyfill'
import Vue from 'vue'
import fastclick from 'fastclick'
import iView from 'iview'
import 'iview/dist/styles/iview.css'  // 使用css
import App from './App'
import router from './router'
import 'common/less/reset.less'

fastclick.attach(document.body)

Vue.use(iView)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
