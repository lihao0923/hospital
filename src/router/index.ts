import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '@/pages/home/index.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/hospital',
      component: () => import('@/pages/hospital/index.vue')
    },
    {
      path: '/',
      redirect: '/home'
    }
  ],

  // 控制滚动行为
  scrollBehavior() {
    return {
      left: 0,
      top: 0
    }
  }
})










