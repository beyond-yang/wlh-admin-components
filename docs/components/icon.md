# Icon 图标

图标用于展示……。

## 图标

按钮有五种类型：主按钮、次按钮、虚线按钮、文本按钮和链接按钮。主按钮在同一个操作区域最多出现一次。

<WButton type="primary">Primary Button</WButton>

```vue
<template>
  <WButton>默认按钮</WButton>
  <WButton type="primary">主要按钮</WButton>
</template>
```

## 加载中状态

<WButton type="primary">Primary Button</WButton>

```vue
<template>
  <WButton>默认按钮</WButton>
  <WButton type="primary">主要按钮</WButton>
</template>
```

## 不可用状态

<WButton type="primary">Primary Button</WButton>

```vue
<template>
  <WButton>默认按钮</WButton>
  <WButton type="primary">主要按钮</WButton>
</template>
```

## API

通过设置 Button 的属性来产生不同的按钮样式。

按钮的属性说明如下：

### 属性

| 属性 | 说明 | 类型                                                      | 默认值    | 版本  |
| ---- | ---- | --------------------------------------------------------- | --------- | ----- |
| type | 类型 | 'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' | -         |
| size | 尺寸 | 'large' \| 'default' \| 'small'                           | 'default' | 2.0.4 |

### 事件

支持原生 button 的其他所有属性。
| 事件名称 | 说明 | 回调参数 | 版本 |
| -------- | ---------------- | --------------- | ----- |
| click | 点击按钮时的回调 | (event) => void | 2.0.0 |
