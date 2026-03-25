<script setup lang="ts">
import {
  uiFieldEyebrowClass,
  uiFieldHintClass,
  uiFieldLabelClass,
  uiFieldLabelWrapClass,
  uiFieldMetaClass,
  uiFieldRootClass,
  uiFieldTopRowClass,
} from "./UiField.styles";

defineProps<{
  id?: string;
  forId?: string;
  label?: string;
  hint?: string;
  eyebrow?: string;
}>();
</script>

<template>
  <div :class="uiFieldRootClass">
    <div v-if="eyebrow || label || hint || $slots.meta" :class="uiFieldTopRowClass">
      <div :class="uiFieldLabelWrapClass">
        <p v-if="eyebrow" :class="uiFieldEyebrowClass">{{ eyebrow }}</p>
        <label v-if="label" :for="forId" :class="uiFieldLabelClass">{{ label }}</label>
        <p v-if="hint" :id="id" :class="uiFieldHintClass">{{ hint }}</p>
      </div>
      <div v-if="$slots.meta" :class="uiFieldMetaClass">
        <slot name="meta" />
      </div>
    </div>

    <slot />
  </div>
</template>
