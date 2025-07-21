# WButton 按钮

常用的操作按钮。

## 基础用法

使用 `type`、`plain`、`round` 和 `circle` 来定义按钮的样式。

<preview-demo>
<template>
  <WButton>默认按钮</WButton>
  <WButton type="primary">主要按钮</WButton>
</template>
</preview-demo>

```vue
<template>
  <WButton>默认按钮</WButton>
  <WButton type="primary">主要按钮</WButton>
</template>
```

## API

### 属性

| 参数 | 说明 | 类型                                                      | 默认值    |
| ---- | ---- | --------------------------------------------------------- | --------- |
| type | 类型 | 'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' | -         |
| size | 尺寸 | 'large' \| 'default' \| 'small'                           | 'default' |
