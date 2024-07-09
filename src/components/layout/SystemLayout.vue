<template>
  <div>
    <t-layout>
      <t-header ref="header"><my-header></my-header></t-header>
      <t-layout :style="{ height: contentHeight }">
        <system-aside />
        <t-content class="grow">
          <el-scrollbar>
            <router-view />
          </el-scrollbar>
        </t-content>
      </t-layout>
    </t-layout>
  </div>
</template>

<script setup>
const header = ref(null)
const headerHeight = ref(56)
onMounted(() => {
  headerHeight.value = header.value.clienHeight
})
const contentHeight = computed(() => {
  return `calc(100vh - ${headerHeight.value}px)`
})
</script>

<style scoped></style>
