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
    path: '/details/:name/:rating/:type/:city/:state:/:pincode:/:nBed/:nDoc/:disease/:treatment/:link/:image/:nlat/:nlong',
    name: 'HospitalDetails',
    component: HospitalDetails,
    props: true,
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
