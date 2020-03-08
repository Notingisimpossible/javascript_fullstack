import Vue from 'vue'
import Router from 'vue-router'
import Search from '../views/Search.vue'
import SignUp from '../views/SignUp.vue'
import CheckPhone from '../components/SignUp/CheckPhone.vue'
import Info from '../components/SignUp/Info.vue'
import Success from '../components/SignUp/Success.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp,
      children: [
        {
          path: '/',
          name: 'CheckPhone',
          component: CheckPhone
        },
        {
          path: 'info',
          name: 'Info',
          component: Info
        },
        {
          path: 'success',
          name: 'Success',
          component: Success
        }
      ]
    }
  ]
})
