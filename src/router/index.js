/**
 * 路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite/Msite'
import Profile from '../pages/Profile/Profile'
import Search from '../pages/Search/Search'
import Order from '../pages/Order/Order'

//声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
    //所有路由
    routes: [
        {
            path:'/msite',
            name:'首页',
            component: Msite
        },
        {
            path: '/profile',
            name: '个人中心',
            component: Profile
        },
        {
            path: '/search',
            name: '搜索',
            component: Search
        },
        {
            path: '/order',
            name: '订单',
            component: Order
        },
        {
            path:'/',
            redirect:'/msite'
        }
    ]
})