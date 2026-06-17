<script setup lang="ts">
import { LoaderCircle } from "lucide-vue-next";
import {
  uiButtonBusyContentClass,
  uiButtonClass,
  uiButtonContentClass,
  uiButtonHiddenContentClass,
} from "./UiButton.styles";

withDefaults(
  defineProps<{
    variant?: "solid" | "outline" | "subtle";
    size?: "sm" | "md" | "lg";
    tone?: "default" | "danger";
    loading?: boolean;
    loadingLabel?: string;
    disabled?: boolean;
    type?: "button" | "submit";
    ariaLabel?: string;
  }>(),
  {
    variant: "solid",
    size: "md",
    tone: "default",
    loading: false,
    loadingLabel: "Working...",
    disabled: false,
    type: "button",
    ariaLabel: undefined,
  }
);
</script>

<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    :aria-busy="loading || undefined"
    :aria-label="ariaLabel"
    :class="uiButtonClass({ variant, size, tone, disabled, loading })"
  >
    <span :class="[uiButtonContentClass, loading ? uiButtonHiddenContentClass : undefined]">
      <slot />
    </span>
    <span v-if="loading" :class="uiButtonBusyContentClass">
      <LoaderCircle :size="14" class="aggc-spin" aria-hidden="true" />
      <span>{{ loadingLabel }}</span>
    </span>
  </button>
</template>
