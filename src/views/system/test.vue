<template>
  <div class="my-center-grid">
    <div>
      ref数据：【{{ data }}】 ； Store数据：【{{ baseStore.HelloWord }}】；
    </div>
    <el-divider />
    <div>
      <el-button @click="mockApi()" class="mr-4">mockLocalApi测试</el-button>
      <el-button @click="mockApi(URL.MOCK_JSONPLACEHOLDER)" class="mr-4"
        >mockRomoteApi测试</el-button
      >
      <el-button @click="mockApi('/cros/comments?postId=1', true)" class="mr-4"
        >mockProxyApi测试</el-button
      >
      mock数据：【{{ mockData }}】
    </div>
    <el-divider />
    <div>
      <el-button @click="$router.push('/')">回到首页</el-button>
      <el-button @click="$router.push(URL.SYSTEM_HOME)">系统主页</el-button>
      <el-button @click="userStore.logout()">退出登录</el-button>
    </div>
    <el-divider />
    <h1 class="text-3xl font-bold text-blue-500">Hello world!</h1>
    <el-divider />
    <my-seamless :list="res.seamlessList" class="w-full"></my-seamless>
    <el-divider />
    <lord-icon src="https://cdn.lordicon.com/vyqvtrtg.json" />
    <letters-t-icon /><CenterFocusStrongIcon />
    <el-divider />
    <lord-icon src="https://cdn.lordicon.com/vyqvtrtg.json" />
    <letters-t-icon /><CenterFocusStrongIcon />
    <el-divider />
    <lord-icon src="https://cdn.lordicon.com/vyqvtrtg.json" />
    <letters-t-icon /><CenterFocusStrongIcon />
    <el-divider />
    <lord-icon src="https://cdn.lordicon.com/vyqvtrtg.json" />
    <letters-t-icon /><CenterFocusStrongIcon />
    <el-divider />
    <lord-icon src="https://cdn.lordicon.com/vyqvtrtg.json" />
    <letters-t-icon /><CenterFocusStrongIcon />
    <el-divider />
    <lord-icon src="https://cdn.lordicon.com/vyqvtrtg.json" />
    <letters-t-icon /><CenterFocusStrongIcon />
    <el-divider />
    <lord-icon src="https://cdn.lordicon.com/vyqvtrtg.json" />
    <letters-t-icon /><CenterFocusStrongIcon />
    <el-divider />
    <lord-icon src="https://cdn.lordicon.com/vyqvtrtg.json" />
    <letters-t-icon /><CenterFocusStrongIcon />
    <el-divider />
    <lord-icon src="https://cdn.lordicon.com/vyqvtrtg.json" />
    <letters-t-icon /><CenterFocusStrongIcon />
    <el-divider />
    <lord-icon src="https://cdn.lordicon.com/vyqvtrtg.json" />
    <letters-t-icon /><CenterFocusStrongIcon />
    <el-divider />
    <lord-icon src="https://cdn.lordicon.com/vyqvtrtg.json" />
    <letters-t-icon /><CenterFocusStrongIcon />
    <el-divider />
    <lord-icon src="https://cdn.lordicon.com/vyqvtrtg.json" />
    <letters-t-icon /><CenterFocusStrongIcon />
    <el-divider />
    <lord-icon src="https://cdn.lordicon.com/vyqvtrtg.json" />
    <letters-t-icon /><CenterFocusStrongIcon />
    <el-divider />
    <lord-icon src="https://cdn.lordicon.com/vyqvtrtg.json" />
    <letters-t-icon /><CenterFocusStrongIcon />

  </div>
</template>

<script setup>
import URL from '@/enum/url'
import { mock } from '@/mock'
import { useBaseStore } from '@/store/baseStore'
import { useUserStore } from '@/store/system/userStore'
const data = ref('Hello World')
const baseStore = useBaseStore()
const userStore = useUserStore()
const res = $ref({})
const mockData = ref('🈚️')

const mockApi = async (url = URL.MOCK_DEFAULT, isProxy = false) =>
  (mockData.value = await mock.get(url, isProxy))
</script>

<style scoped></style>
