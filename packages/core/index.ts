import type { App } from 'vue'

import { WButton } from './Button'
import { WIcon } from './Icon'

export { WButton, WIcon }

const components = [WButton, WIcon]

const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name as string, component)
  })
}

export default {
  install,
}
