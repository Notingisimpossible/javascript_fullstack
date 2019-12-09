import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import button from '@/components/button'
import A from '@/components/pages/A'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/button',
      name: 'button',
      component: button
    },
    {
      path: '/A',
      name: 'A',
      component: A
    }
  ]
})
