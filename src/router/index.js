import Vue from 'vue'
import Router from 'vue-router'
import Admin from '@/views/admin'

import Headers from '../components/headers'
import Foot from '../components/foot'
import Center from '../components/center'

Vue.use(Router)

const router = new Router({
  mode:'hash',
  routes: [
    {
      path: '/',
      name: 'admin',
      component: Admin
    },
    {
      path:'headers',
      name:'headers',
      component:Headers
    },
    {
      path:'foot',
      name:'foot',
      component:Foot
    },
    {
      path:'center',
      name:'center',
      component:Center
    }
  ]
})
export default router;
