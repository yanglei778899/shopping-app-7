import Vue from 'vue'
import VueRouter from 'vue-router'

const home = () => import("../views/home/home");
const my = () => import("../views/my/my");
const cart = () => import("../views/cart/cart");
const classification = () => import("../views/classification/classification");

Vue.use(VueRouter)

const routes = [
  {
    path: '/my',
    name: 'my',
    component: my
  },
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/cart',
    name: 'cart',
    component: cart
  },
  {
    path: '/classification',
    name: 'classification',
    component: classification
  },
  {
    path: '/my',
    name: 'my',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
