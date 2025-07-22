<template>
  <div class="button-wrapper">
    <button>Click me</button>
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
  display: inline-block;
  color: rgb(111, 7, 230);
  background-color: rgb(150, 222, 213);
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid rgb(111, 7, 230);
  cursor: pointer;
  transition: all 0.3s ease;
}
</style>
