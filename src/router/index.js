import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../pages/home' // 主页
import LifePage from '../pages/life' // 生活
import UserPage from '../pages/user' // 用户

Vue.use(Router)

const routers = {
  routes: [
    { path: '/', name: 'HomePage', component: HomePage },
    { path: '/life', name: 'LifePage', component: LifePage },
    { path: '/user', name: 'UserPage', component: UserPage }
  ]
}

export default new Router(routers)
