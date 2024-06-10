<template>
  <el-divider />
  <div class="my-center-grid">
    <div>
      ref数据：【{{ data }}】 ； Store数据：【{{ baseStore.HelloWord }}】；
    </div>
    <el-divider />
    <div>
      <el-button @click="mockApi()" class="mr-4">mockLocalApi测试</el-button>
      <el-button @click="mockApi(URL.MOCK_PICSUMLIST)" class="mr-4"
        >mockRomoteApi测试</el-button
      >
      mock数据：【{{ mockData }}】
    </div>
    <el-divider />
    <div>
      <el-button @click="$router.push('/')">回到首页</el-button>
      <el-button @click="$router.push(URL.SYSTEM_ADMIN_HOME)">系统主页</el-button>
      <el-button @click="userStore.logout()">退出登录</el-button>
    </div>
    <el-divider />
    <h1 class="text-3xl font-bold text-blue-500">Hello world!</h1>
    <el-divider />
    <my-seamless :list="res.seamlessList"></my-seamless>
    <el-divider />
    <lord-icon src="https://cdn.lordicon.com/vyqvtrtg.json" />
    <el-divider />
  </div>
</template>

<script setup>
import URL from '@/enum/url'
import { mock } from '@/mock'
import http from '@/service'
import { useBaseStore } from '@/store/baseStore'
import { useUserStore } from '@/store/system/userStore'
const data = ref('Hello World')
const baseStore = useBaseStore()
const userStore = useUserStore()
const res = $ref({})
const mockData = ref('🈚️')
onMounted(() => {
  getSeamlessList()
})
async function getSeamlessList() {
  const seamless = await mock.get(URL.MOCK_PICSUMLIST_PAGE)
  if (seamless)
    // 获取对象数组中每个对象的download_url和title属性，并赋值给res.seamlessList
    res.seamlessList = seamless.map((item) => ({
      imgUrl: item.download_url,
      title: item.author,
    }))
}
const mockApi = async (mock_url = URL.MOCK_DEFAULT, url = URL.MOCK_ERROR) =>
  (mockData.value = await http.get({
    url: url,
    mock: mock_url,
  }))
</script>

<style scoped></style>
