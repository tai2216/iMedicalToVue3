import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import AdminView from '../views/AdminView.vue'
import HomeView from '../views/HomeView.vue'
import AdminEditView from '../views/AdminEditView.vue'
const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },

  {
    path: '/admin/edit:id',
    name: 'edit',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AdminEditView,
    meta: { requiresAuth: true }
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


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
