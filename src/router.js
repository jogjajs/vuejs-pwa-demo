import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('./views/Home')
    },
    {
      path: '/add',
      component: () => import('./views/Form')
    },
    {
      path: '/contact/:id',
      component: () => import('./views/Form')
    },
  ]
})
