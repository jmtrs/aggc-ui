<script setup lang="ts">
import { Check } from "lucide-vue-next";
import {
  uiCheckboxContentClass,
  uiCheckboxDescriptionClass,
  uiCheckboxIndicatorClass,
  uiCheckboxLabelClass,
  uiCheckboxRootClass,
} from "./UiCheckbox.styles";

const props = withDefaults(
  defineProps<{
    modelValue: boolean;
    id?: string;
    name?: string;
    label?: string;
    description?: string;
    disabled?: boolean;
    invalid?: boolean;
    ariaDescribedby?: string;
  }>(),
  {
    id: undefined,
    name: undefined,
    label: undefined,
    description: undefined,
    disabled: false,
    invalid: false,
    ariaDescribedby: undefined,
  }
);

const emit = defineEmits<{
  "update:modelValue": [boolean];
}>();

function toggle() {
  if (props.disabled) {
    return;
  }
  emit("update:modelValue", !props.modelValue);
}
</script>

<template>
  <button
    type="button"
    :id="id"
    :name="name"
    role="checkbox"
    :aria-checked="modelValue"
    :aria-describedby="ariaDescribedby"
    :aria-invalid="invalid || undefined"
    :disabled="disabled"
    :class="uiCheckboxRootClass({ checked: modelValue, disabled })"
    @click="toggle"
    @keydown.enter.prevent="toggle"
    @keydown.space.prevent="toggle"
  >
    <span :class="uiCheckboxIndicatorClass({ checked: modelValue })" aria-hidden="true">
      <Check :size="14" />
    </span>
    <span :class="uiCheckboxContentClass">
      <span v-if="label || $slots.default" :class="uiCheckboxLabelClass">
        <slot>{{ label }}</slot>
      </span>
      <span v-if="description || $slots.description" :class="uiCheckboxDescriptionClass">
        <slot name="description">{{ description }}</slot>
      </span>
    </span>
  </button>
</template>
