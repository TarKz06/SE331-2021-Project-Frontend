import { createRouter, createWebHistory } from 'vue-router'
import PatientList from '../views/PatientList.vue'
import About from '../views/About.vue'

import Layout from '../views/detailsPage/Layout.vue'
import userInfo from '../views/detailsPage/userInfo.vue'
import vaccineInfo from '../views/detailsPage/vaccineInfo.vue'
import doctorComment from '../views/detailsPage/doctorComment.vue'
import NotFound from '../views/NotFound.vue'
import NetworkError from '../views/NetworkError.vue'
import NProgress from 'nprogress'
import patientService from '@/services/patientService.js'
import GStore from '@/store'
import VaccineList from '../views/detailsPage/VaccineList.vue'
import Login from '@/views/LoginForm.vue'
import Register from '@/views/Register.vue'

const routes = [
  {
    path: '/',
    name: 'PatientList',
    component: PatientList,
    props: (route) => ({ page: parseInt(route.query.page) || 1 })
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/details/:id',
    name: 'Layout',
    props: true,
    component: Layout,
    beforeEnter: (to) => {
      return patientService.getEvent(to.params.id) // Return and params.id
        .then((response) => {
          // Still need to set the data here
          GStore.plist = response.data // <--- Store the plist
        })
        .catch((error) => {
          if (error.response && error.response.status == 404) {
            return {
              // <--- Return
              name: '404Resource',
              params: { resource: 'plist' }
            }
          } else {
            return { name: 'NetworkError' } // <--- Return
          }
        })
    },
    children: [
      {
        path: '',
        name: 'userInfo',
        props: true,
        component: userInfo
      },
      {
        path: 'vaccineInfo',
        name: 'vaccineInfo',
        props: true,
        component: vaccineInfo
      },
      {
        path: 'doctorComment',
        name: 'doctorComment',
        props: true,
        component: doctorComment
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/404/:resource',
    name: '404Resource',
    component: NotFound,
    props: true
  },
  {
    path: '/network-error',
    name: 'NetworkError',
    component: NetworkError
  },
  {
    path: '/vaccinelist',
    name: 'VaccineList',
    component: VaccineList
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach(() => {
  NProgress.start()
})
router.afterEach(() => {
  NProgress.done()
})

export default router
