import vue3SeamlessScroll from 'vue3-seamless-scroll'
import VMdPreview from '@kangc/v-md-editor/lib/preview'
import '@kangc/v-md-editor/lib/style/preview.css'
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js'
import '@kangc/v-md-editor/lib/theme/style/github.css'
import hljs from 'highlight.js'

import myComponent from '@/components/index'

export function globalRegister(app) {
  // 全局组件注册
  Object.keys(myComponent).forEach((key) => {
    app.component(key, myComponent[key])
  })
  // 导入组件注册
  for (const component of components) {
    app.component(component.name, component)
  }
  // 引入seamless-scroll
  app.use(vue3SeamlessScroll)
  // 使用markdown编辑器
  VMdPreview.use(githubTheme, {
    Hljs: hljs,
  })
  app.use(VMdPreview)
}

import { LettersTIcon, CenterFocusStrongIcon } from 'tdesign-icons-vue-next'

const components = [LettersTIcon, CenterFocusStrongIcon]
