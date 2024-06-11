<template>
  <vue3-seamless-scroll
    :list="list"
    :style="{ width: width }"
    class="scroll"
    :direction="`left`"
    :hover="true"
    :singleLine="true"
    :step="0.3">
    <template v-for="item in list">
      <span class="m-[10px]"
        ><el-card shadow="hover" class="show-item w-[120px]">
          <el-image :src="item.url" class="object-fill h-[150px]"> </el-image>
          <template #footer
            ><span class="my-center-flex my-ellipsis">{{
              item.title
            }}</span></template
          ></el-card
        >
      </span>
    </template>
  </vue3-seamless-scroll>
</template>
<script setup>
import { Vue3SeamlessScroll } from 'vue3-seamless-scroll'

const props = defineProps({
  width: {
    type: String,
  },
  list: {
    type: Array,
    default: () => {
      let arr = []
      for (let i = 0; i < 20; i++) {
        arr.push({
          url: `https://cdn-img.gitcode.com/ed/ca/62ed3ca6afbac50cc2dadf19846feb6d30db01d4a5a46ce2edf4aef9d597259e.png?time=1716449229155`, // https://picsum.photos/120/150?${i}
          title: `第${i + 1}条数据`,
        })
      }
      return arr
    },
  },
})
</script>

<style>
.el-card__body {
  padding: 0px;
}
.el-card__footer {
  padding: 5px;
}
.scroll {
  margin: 0px auto;
  overflow: hidden;
}
.show-item:hover {
  cursor: pointer;
  transform: translateY(-5px);
  transition: all 0.2s ease-in;
}
</style>
