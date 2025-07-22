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
      测试changeset功能啊啊啊啊
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
<style lang="scss" scoped>
.ant-btn {
  min-width: 80px;
  padding: 0 10px;
}

.ant-btn-default {
  border-color: var(--color-primary);
  background-color: var(--color-primary-bg);
  color: var(--color-primary-text);

  &:disabled {
    border-color: var(--color-border);
    background-color: var(--color-bg-container-disabled);
    color: var(--color-text-disabled);
  }
}

.icon {
  display: inline-flex !important;
  color: var(--color-white);
}

.btn-default {
  height: 28px;
}

.btn-small {
  height: 26px;
}

.btn-mini {
  height: 24px;
}
</style>
