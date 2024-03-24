import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BrandView from '../views/BrandView.vue'
import ModelView from '../views/ModelView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:brand',
      name: 'brand',
      component: BrandView
    },
    {
      path: '/:brand/:model',
      name: 'model',
      component: ModelView,
      props : true
    }

  ]
})

export default router
