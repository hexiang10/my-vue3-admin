<template>
  <div>
    <t-layout>
      <my-aside />
      <t-layout class="body">
        <t-header>Header</t-header>
        <t-content>
          <router-view />
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
