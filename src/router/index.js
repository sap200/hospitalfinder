import { createRouter, createWebHistory } from 'vue-router'
import HospitalList from '../views/HospitalList.vue'
import AzureMap from '../views/AzureMap.vue'
import HospitalDetails from '../components/HospitalDetails.vue'
import Government from '../views/Government.vue'
import PrivateHospital from '../views/PrivateHospital.vue'

const routes = [
  {
    path: '/',
    name: 'HospitalList',
    component: HospitalList
  },
  {
    path: '/maps/:plat/:plong/:lat/:long',
    name: 'Azuremaps',
    component: AzureMap,
    props: true,
  },

  {
    path: '/government',
    component: Government,
  },

  {
    path: '/privatehos',
    component: PrivateHospital,
  },

  {
    path: '/details/:name/:rating/:type/:city/:state:/:pincode:/:nBed/:nDoc/:disease/:treatment/:link/:image',
    name: 'HospitalDetails',
    component: HospitalDetails,
    props: true,
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
