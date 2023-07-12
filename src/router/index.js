import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import AdminView from '../views/AdminView.vue'
import HomeView from '../views/HomeView.vue'
import HelloWorld from '../components/HelloWorld.vue'
const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView,
    meta: { requiresAuth: true }
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/hello',
    name: 'hello',
    component: HelloWorld
  }



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
