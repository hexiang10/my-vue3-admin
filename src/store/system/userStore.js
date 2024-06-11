import { defineStore } from 'pinia'
import userAPI from '@/api/system/user'
import roleAPI from '@/api/system/role'
import router from '@/router'
import mq from '@/utils/mq'
import URL from '@/enum/url'

export const useUserStore = defineStore('userStore', {
  state: () => {
    return {
      token: '',
      userInfo: {},
      userMenus: [],
    }
  },
  actions: {
    setUserInfo(userInfo) {
      this.userInfo = userInfo
    },
    setUserMenus(menus) {
      this.userMenus = menus
    },
    setToken(token) {
      this.token = token
    },
    async login(account) {
      // 显示loading
      const loading = mq.showLoading('登录中')
      try {
        // 调用登录接口
        const res = await userAPI.login(account)
        if (res) {
          // 保存token
          this.setToken(res.token)
          // 请求用户信息
          const userInfo = await userAPI.getUserInfoById(res.userId)
          if (userInfo) {
            this.setUserInfo(userInfo)
            // 请求用户菜单
            const userMenus = await roleAPI.getRoleMenusByRoleId(
              userInfo.role.roleId,
            )
            if (userMenus) {
              this.setUserMenus(userMenus)
            }
          }
          mq.notifyOK('登录成功')
          router.push(URL.SYSTEM_HOME)
        }
      } finally {
        // 关闭loading
        loading.close()
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
