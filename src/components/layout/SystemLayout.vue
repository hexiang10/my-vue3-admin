<template>
  <div>
    <t-layout>
      <t-header><my-header></my-header></t-header>
      <t-layout class="content">
        <my-aside />
        <t-content class="grow">
          <el-scrollbar>
            <router-view />
          </el-scrollbar>
        </t-content>
      </t-layout>
    </t-layout>
  </div>
</template>

<script setup></script>

<style scoped>
.content {
  height: calc(100vh - 56px);
}
</style>
