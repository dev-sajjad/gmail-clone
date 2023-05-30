import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '../stores/user-store'

import HomeView from '../views/HomeView.vue'
import MessageView from '../views/MessageView.vue'
import EmailView from '../views/template/EmailView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LoginView
  },
    {
      path: '/email',
      beforeEnter: (to, from, next) => {
        useUserStore().email ? next() : next('/')
      },
      component: EmailView,
      children: [
        {
          path: '',
          component: HomeView
        },
        {
          path: 'message/:id',
          component: MessageView
         }
      ]
    },
   
  ]
})

export default router
