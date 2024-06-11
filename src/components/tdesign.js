import { LettersTIcon, CenterFocusStrongIcon } from 'tdesign-icons-vue-next'

const components = [LettersTIcon, CenterFocusStrongIcon]

export function tdesignRegister(app) {
  for (const component of components) {
    app.component(component.name, component)
  }
}
