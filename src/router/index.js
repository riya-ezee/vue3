import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/StocksView',
      name: 'StocksView',
      component: () => import('../views/StocksView.vue')
    },
    {
      path: '/PortfolioView',
      name: 'PortfolioView',
      component: () => import('../views/PortfolioView.vue')
    }
  ]
})

export default router
