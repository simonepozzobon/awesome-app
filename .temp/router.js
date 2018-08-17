import Vue from 'vue'
/*global Vue*/
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
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
    }
  ]
})
