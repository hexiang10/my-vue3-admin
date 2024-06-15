<template>
  <t-aside class="aside-body">
    <t-menu
      v-model:expanded="expanded"
      theme="dark"
      default-value="root"
      :collapsed="collapsed"
      :expandMutex="true">
      <t-menu-item value="root" :to="URL.SYSTEM_HOME">
        <template #icon>
          <t-icon name="dashboard" />
        </template>
        仪表盘
      </t-menu-item>
      <t-menu-item value="resource" :to="URL.SYSTEM_TEST">
        <template #icon>
          <t-icon name="measurement-1" />
        </template>
        测试页
      </t-menu-item>
      <t-menu-item value="home" :to="URL.SYSTEM_MAIN">
        <template #icon>
          <t-icon name="root-list" />
        </template>
        根目录
      </t-menu-item>
      <t-submenu value="2">
        <template #icon>
          <t-icon name="control-platform" />
        </template>
        <template #title>
          <span>调度平台</span>
        </template>
        <t-menu-item value="2-1"> 二级菜单内容 </t-menu-item>
        <t-menu-item value="2-2"> 二级菜单内容 </t-menu-item>
        <t-menu-item value="2-3"> 二级菜单内容 </t-menu-item>
      </t-submenu>
      <t-menu-item value="precise-monitor">
        <template #icon>
          <t-icon name="precise-monitor" />
        </template>
        精准监控
      </t-menu-item>
      <t-submenu title="消息区" value="3" disabled>
        <template #icon>
          <t-icon name="mail" />
        </template>
        <template #title>
          <span>消息区</span>
        </template>
        <t-menu-item value="3-1"> 二级菜单内容 </t-menu-item>
        <t-menu-item value="3-2"> 二级菜单内容 </t-menu-item>
        <t-menu-item value="3-3"> 二级菜单内容 </t-menu-item>
      </t-submenu>
      <t-menu-item value="user-circle" :to="'/system/main/user'">
        <template #icon>
          <t-icon name="user-circle" />
        </template>
        个人中心
      </t-menu-item>
      <t-submenu value="4">
        <template #icon>
          <t-icon name="play-circle" />
        </template>
        <template #title>
          <span>视频区</span>
        </template>
        <t-menu-item value="4-1"> 二级菜单内容 </t-menu-item>
        <t-menu-item value="4-2"> 二级菜单内容 </t-menu-item>
        <t-menu-item value="4-3"> 二级菜单内容 </t-menu-item>
      </t-submenu>
      <t-menu-item value="edit1">
        <template #icon>
          <t-icon name="edit-1" />
        </template>
        资源编辑
      </t-menu-item>
      <template #operations>
        <t-button
          class="collapse-btn"
          variant="text"
          shape="square"
          @click="changeCollapsed">
          <template #icon><t-icon name="view-list" /></template>
        </t-button>
      </template>
    </t-menu>
  </t-aside>
</template>

<script setup>
import URL from '@/enum/url'

const expanded = ref(['root'])
const collapsed = ref(false)
const menuWidth = ref(232)
const changeCollapsed = () => {
  collapsed.value = !collapsed.value
  menuWidth.value = collapsed.value ? 64 : 232
}
</script>

<style scoped lang="less">
.t-layout__sider {
  width: auto;
}
.aside-body {
  border-top: solid 1px #4b4b4b;
}
.collapse-btn {
  color: #fff;
  &:hover {
    background-color: #4b4b4b;
    border-color: transparent;
    --ripple-color: #383838;
  }
}
</style>
