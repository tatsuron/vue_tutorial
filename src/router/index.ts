import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import {loadLanguageAsync} from '@/I18nSetup'

Vue.use(VueRouter)

const routes = [
  {
    path: '/:lang',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, _from, next) => {
  const lang = to.params.lang
  loadLanguageAsync(lang).then(() => next())
})

export default router
