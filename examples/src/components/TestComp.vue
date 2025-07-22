<script setup lang="ts">
import { WButton, WIcon } from '@wli-admin-components/core'
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
