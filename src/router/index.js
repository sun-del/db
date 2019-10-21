import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import nav from '@/components/nav'
import index from '@/components/index'
import book from '@/components/book'
import broadcast from '@/components/broadcast'
import group from '@/components/group'
import details from '@/components/details'
import list from '@/components/list'
import search from '@/components/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: nav,
      children:[
        {
          path: '/index',
          component: index,
        },
        {
          path: '/book',
          component: book,
        },
        {
          path: '/broadcast',
          component: broadcast,
        },
        {
          path: '/group',
          component: group,
        },
        {
          path: '/details',
          component: details,
        },
        {
          path: '/',
          redirect:'/index'
        },
      ]
    },
    {
      path: '/list',
      component: list,
    },
    {
      path: '/search',
      component: search,
    },
  ]
})
