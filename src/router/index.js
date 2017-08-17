import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import RegMember from 'components/account/RegMember'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/regmember',
            name: 'RegMember',
            component: RegMember
        }
    ]
})
