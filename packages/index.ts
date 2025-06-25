import { App, Plugin } from 'vue'
import components from './components'

type WLHComponent = {
    name?: string;
    install: (app: App, ...options: any[]) => void;
    [key: string]: any;
}

const plugin: Plugin = {
    install(app: App, options: any = {}) {
        Object.keys(components).forEach((compName) => {
            const component = (components as { [key: string]: WLHComponent })[compName];
            app.use(component)
        })
    }
}

export default plugin