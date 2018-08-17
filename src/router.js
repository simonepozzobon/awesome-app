/*global Vue*/
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ItsFriday from '@/components/ItsFriday'
import ItsMonday from '@/components/ItsMonday'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/its-monday',
      name: 'ItsMonday',
      component: ItsMonday
    },
    {
      path: '/its-friday',
      name: 'ItsFriday',
      component: ItsFriday
    }
  ]
})
