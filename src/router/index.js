import URL from '@/enum/url'
import { useUserStore } from '@/store/system/userStore'
import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'

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
