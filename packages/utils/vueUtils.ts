// utils/withInstall.ts
import type { App, Component } from 'vue'

export function withInstall<T extends Component>(component: T, alias?: string) {
  // eslint-disable-next-line no-unused-vars
  const comp = component as T & { install(app: App): void }
  comp.install = (app: App) => {
    app.component(comp.name || alias || 'UnknownComponent', comp)
  }
  return comp
}
