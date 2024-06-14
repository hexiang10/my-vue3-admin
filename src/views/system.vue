<template>
  <div>
    <t-layout>
      <my-aside />
      <t-layout class="body">
        <t-header><my-header></my-header></t-header>
        <t-content>
          <el-scrollbar height="88.5vh">
            <router-view />
          </el-scrollbar>
        </t-content>
        <my-footer />
      </t-layout>
    </t-layout>
  </div>
</template>

<script setup></script>

<style scoped>
.body {
  background-color: #fff;
}
</style>
