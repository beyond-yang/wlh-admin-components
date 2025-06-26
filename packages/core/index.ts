import type { App } from 'vue'

import { Button } from './Button'
import { Icon } from './Icon'

export { Button, Icon }

const components = [Button, Icon]

const install = (app: App) => {
  components.forEach((component) => {
    app.use(component)
  })
}

export default {
  install,
}
