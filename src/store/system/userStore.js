import { defineStore } from 'pinia'
import userAPI from '@/api/system/user'
import roleAPI from '@/api/system/role'
import router from '@/router'
import mq from '@/utils/mq'
import URL from '@/enum/url'
import routes from '~pages'
import { filters } from '@/global/filters'
export const useUserStore = defineStore('userStore', {
  state: () => {
    return {
      token: '',
      userInfo: {},
      userMenus: [],
    }
  },
  actions: {
    async setUserInfo(id) {
      this.userInfo = (await userAPI.getUserInfoById(id)) ?? {}
    },
    async setUserMenus() {
      if (this.userInfo) {
        this.userMenus =
          (await roleAPI.getRoleMenusByRoleId(this.userInfo.role.roleId)) ?? []
      }
      if (this.userMenus.length > 0) {
        const system_routes = routes.find(
          (item) => item.path === URL.SYSTEM_MAIN,
        )
        console.log(system_routes)
        router.addRoute({
          path: system_routes.path,
          name: 'system',
          component: system_routes.component,
        })
        const addMenus = (menus) => {
          for (const item of menus) {
            if (item.url)
              filters.getRoutes(
                item.url,
                system_routes.children,
                'system',
                URL.SYSTEM_MAIN,
              )
            else if (item.children) addMenus(item.children)
          }
        }
        addMenus(this.userMenus)
      }
    },
    setToken(token) {
      this.token = token
    },
    async login(account) {
      // 显示loading
      const loading = mq.showLoading('登录中')
      // 调用登录接口
      const res = await userAPI.login(account)
      if (res) {
        // 保存token
        this.setToken(res.token)
        // 请求用户信息
        await this.setUserInfo(res.userId)
        // 请求用户菜单
        await this.setUserMenus()
        // 关闭loading
        loading.close()
        mq.notifyOK('登录成功')
        router.push(URL.SYSTEM_HOME)
      }
    },
    logout() {
      this.$reset()
      router.push(URL.SYSTEM_LOGIN)
    },
  },
  getters: {},
  persist: true,
})
