<template>
  <div class="my-center-grid mt-[50px]">
    <img class="h-[600px] my-center-grid" src="@/assets/images/error-img/500/service-error.svg" >
    <el-button type="primary"  @click="$router.go(-1)" class="btn">返回</el-button>
  </img>
  </div>
</template>

<script setup></script>

<style scoped>
.btn {
  width: 100px;
  height: 40px;
}
</style>
