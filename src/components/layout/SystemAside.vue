<template>
  <t-aside class="aside-body">
    <t-menu
      v-model:expanded="expanded"
      theme="dark"
      default-value="0"
      :collapsed="collapsed"
      :expandMutex="true">
      <template v-for="(item, index) in userStore.userMenus" :key="item.id">
        <template v-if="item.children">
          <t-submenu :value="`${index}`">
            <template #icon>
              <t-icon :name="item.icon ?? `system-3`" />
            </template>
            <template #title>
              <span>{{ item.name }}</span>
            </template>
            <template
              v-for="(subItem, subIndex) in item.children"
              :key="subItem.id">
              <t-menu-item :value="`${index}-${subIndex}`" :to="subItem.url">
                {{ subItem.name }}
              </t-menu-item>
            </template>
          </t-submenu>
        </template>
        <template v-else>
          <t-menu-item :value="`${index}`" :to="item.url">
            <template #icon>
              <t-icon :name="item.icon ?? `system-3`" />
            </template>
            {{ item.name }}
          </t-menu-item>
        </template>
      </template>

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
import { useUserStore } from '@/store/system/userStore'
const userStore = useUserStore()
const expanded = ref(['0'])
const collapsed = ref(false)
const changeCollapsed = () => {
  collapsed.value = !collapsed.value
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
