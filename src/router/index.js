import URL from '@/enum/url'
import { useUserStore } from '@/store/system/userStore'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/system/home',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue'),
  },
  {
    path: '/:all(.*)*',
    name: 'notFound',
    component: () => import('@/views/[...all].vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

/* 路由发生变化修改页面title */
router.beforeEach((to, from) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  if (useUserStore().token) {
    if (to.path == URL.SYSTEM_LOGIN) return URL.SYSTEM_HOME
  } else if (to.path !== URL.SYSTEM_LOGIN) return URL.SYSTEM_LOGIN
})

export default router
