import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import DashboardsView from '../views/DashboardsView.vue'
import AdministrationView from '../views/AdministrationView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/dashboards',
    name: 'dashboards',
    component: DashboardsView
  },
  {
    path: '/administration',
    name: 'administration',
    component: AdministrationView
  },
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
