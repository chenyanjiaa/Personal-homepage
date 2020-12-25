import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../pages/home' // 主页

Vue.use(Router)

const routers = {
  routes: [
    { path: '/', name: 'HomePage', component: HomePage }
  ]
}

export default new Router(routers)
