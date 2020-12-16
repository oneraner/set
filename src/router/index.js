import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/Index.vue')
  },
  {
    path: '/chart',
    name: 'Chart',
    component: () => import('../views/Chartviews.vue')
  },
  {
    path: '/drag',
    name: 'Drag',
    component: () => import('../views/Drag&drop.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
