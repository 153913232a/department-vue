import Vue from 'vue'
import Router from 'vue-router'
import Test from '../views/test/test'
import Login from '../views/login/login'
import Admin from '../views/admin/admin'
import User from '../components/user/user'
import Test2 from '../views/test2/test2'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/test',
      component: Test
    },
    {
      path: '/test2',
      component: Test2
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/g=1',
      component: Admin,
      children: [
        {
          path: '/user',
          component: User
        }
      ]
    }
  ]
})
