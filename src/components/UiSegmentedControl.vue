<script setup lang="ts">
import {
  segmentedControlContainerClass,
  segmentedControlOptionClass,
} from "./UiSegmentedControl.styles";

defineProps<{
  modelValue: string;
  options: { label: string; value: string }[];
}>();

defineEmits<{
  "update:modelValue": [string];
}>();

</script>

<template>
  <div :class="segmentedControlContainerClass">
    <button
      v-for="option in options"
      :key="option.value"
      type="button"
      :class="segmentedControlOptionClass({ active: option.value === modelValue })"
      @click="$emit('update:modelValue', option.value)"
    >
      {{ option.label }}
    </button>
  </div>
</template>
