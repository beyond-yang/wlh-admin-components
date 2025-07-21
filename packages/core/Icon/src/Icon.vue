<template>
  <div class="icon-wrapper">
    <h1>Icon</h1>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'WIcon',
})
// Icon/src/Icon.vue
const ICON_MARKER = 'THIS_IS_ICON_COMPONENT' // 添加标记
// eslint-disable-next-line no-undef
console.log(ICON_MARKER)
</script>

<style scoped lang="scss">
.icon-wrapper {
  color: rgb(220, 103, 207);
}
</style>
