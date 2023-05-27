import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EmailView from '../views/template/EmailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/email',
      name: 'email',
      component: EmailView,
      children: [
        {
          path: '/home',
          name: 'home',
          component: HomeView
        }
      ]
    },
   
  ]
})

export default router
