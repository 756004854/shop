import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import about from '@/views/About.vue'
import title1 from '@/views/title/title1.vue'
import title2 from '@/views/title/title2.vue'
import title2_1 from '@/views/title/title2-1.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: '主页',
      component: Home
    },
    {
      path: '/about',
      name: '关于',
      component:about
    },
    {
      path: '/title2',
      name: 'title2',
      component:title2,
      children: [
        {
          path: 'title2-1',
          name: 'title2-1',
          component: title2_1
        },
      ]
    },
    {
      path: '/title1',
      name: 'title1',
      component:title1
    },
    
  ]
})
