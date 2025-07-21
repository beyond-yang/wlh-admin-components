# 快速开始

## 1 引入 wlh-admin-components

```bash
$ pnpm i --save @wli-admin-components/core
```

### 1.1 全局注册所有组件

```Javascript
import { createApp } from 'vue' import './style.css'
import App from './App.vue'
import WliAdminComponents from '@wli-admin-components/core'
import '@wli-admin-components/core/dist/wlh-admin-components.css'
const app = createApp(App)
app.use(WliAdminComponents)
app.mount('#app')
```

### 1.2 全局注册单个组件

```Javascript
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { WButton } from '@wli-admin-components/core'
import '@wli-admin-components/core/dist/wlh-admin-components.css'

const app = createApp(App)
app.component('WButton', WButton)
app.mount('#app')
```

### 1.2 vue文件中按需引入

main.ts文件中导入 css 样式：

```Javascript
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import '@wli-admin-components/core/dist/wlh-admin-components.css'

const app = createApp(App)
app.mount('#app')
```

vue 文件中按需引入：

```Javascript
<script setup lang="ts">
import { WButton } from '@wli-admin-components/core'
</script>

<template>
  <WButton />
</template>

<style scoped lang="scss"></style>
```
