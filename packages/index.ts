import { App, Plugin } from 'vue'
import components from './components'

type WLHComponent = {
  name?: string
  install: () => void
  [key: string]: any
}

const plugin: Plugin = {
  install(app: App) {
    Object.keys(components).forEach((compName) => {
      const component = (
        components as unknown as { [key: string]: WLHComponent }
      )[compName]
      app.use(component)
    })
  },
}

export default plugin
