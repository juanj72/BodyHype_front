import { createRouter, createWebHistory } from 'vue-router'
import Home from '../../src/components/Home.vue'
import Index from '../components/home/Index.vue'
import Profile from '../components/home/Profile.vue'
import Homeindex from '../components/home/index/index.vue'
import About from '../components/home/index/About.vue'
import site_web from '../components/Pagina_web.vue'
import Homesiteweb from '../components/pagina_web/home.vue'
import Rutinas from '../components/home/index/Rutinas.vue'
import Login from '../components/auth/Login.vue'
import tesoreria from '../components/home/Tesoreria.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/',
          name: 'index',
          component: Index,
          children: [
            {
              path: '/',
              name: 'homeindex',
              component: Homeindex
            },
            {
              path: '/index/about',
              name: 'about_index',
              component: About,
             

            },
            {
              path: '/index/rutinas',
              name: 'rutinas',
              component: Rutinas

            },
          


          ]
        },
        {
          path: '/profile',
          name: 'profile',
          component: Profile

        },
        {
          path:'/tesoreria',
          name:'tesoreria',
          component:tesoreria
        }
      ]
    },
    {
      path: '/pagina',
      name: 'homepage',
      component: site_web,
      children: [
        {
          path: '/pagina/home',
          name: 'homesite',
          component: Homesiteweb
        }
      ]


    },
    {
      path: '/Login',
      name: 'login',
      component: Login
    }
  ]
})

export default router
