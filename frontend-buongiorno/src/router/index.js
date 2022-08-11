import { createRouter, createWebHashHistory } from 'vue-router'

// Pages
import LandingPage from '../pages/LandingPage.vue'
import Register from '../pages/Register.vue'

// Components
import Menu from '../components/Menu.vue'
import Locales from '../components/Locales.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: LandingPage
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/menu',
    name: 'menu',
    component: Menu
  },
  {
    path: '/locales',
    name: 'locales',
    component: Locales
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
