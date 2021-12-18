import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import root from '../components/root'
import xuanxuan from '../components/xuanxuan'
import ruirui from '../components/ruirui'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/root',
      name: 'root',
      component: root
    },
    {
      path: '/xuanxuan',
      name: 'xuanxuan',
      component: xuanxuan
    },
    {
      path: '/ruirui',
      name: 'ruirui',
      component: ruirui
    }
  ]
})
