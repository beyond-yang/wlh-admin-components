<template>
  <div class="button-wrapper">
    <button>Click me999555566666</button>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'WButton',
})
const BUTTON_MARKER = 'THIS_IS_BUTTON_COMPONENT' // 添加标记
// eslint-disable-next-line no-undef
console.log(BUTTON_MARKER)
</script>

<style scoped lang="scss">
.button-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  background-color: rgb(150, 222, 213);
}
</style>
