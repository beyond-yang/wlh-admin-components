<script setup lang="ts">
import { WButton, WIcon } from '@wli-admin-components/core'
import '@wli-admin-components/core/dist/button.css'
</script>

<template>
  <WButton>
    <template #icon>
      <WIcon icon="UserOutlined" />
    </template>
    <template #default>
      <span>Click me</span>
    </template>
  </WButton>
</template>

<style scoped lang="scss"></style>
