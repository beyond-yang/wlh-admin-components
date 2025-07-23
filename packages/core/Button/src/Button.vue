<template>
  <Button
    :class="`btn-${size}`"
    :style="{ borderRadius: radius }"
    @click="onClick"
  >
    <template #icon>
      <slot name="icon"></slot>
    </template>
    <template #default="data">
      <WIcon
        :icon="preIcon"
        v-if="preIcon"
        :size="iconSize"
        :style="iconStyle"
      />
      <slot v-bind="data || {}"></slot>
      <WIcon
        :icon="postIcon"
        v-if="postIcon"
        :size="iconSize"
        :style="iconStyle"
      />
    </template>
  </Button>
</template>

<script lang="ts" setup>
import { Button } from 'ant-design-vue'
import { WIcon } from '../../Icon'
import { buttonProps } from './props'

defineOptions({
  name: 'WButton',
})

defineProps(buttonProps)
</script>
<!-- <style lang="scss" scoped>
@import './BaseButton.scss';
</style> -->
