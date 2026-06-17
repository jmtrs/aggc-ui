<script setup lang="ts">
import { statusBadgeClass } from "./StatusBadge.styles";

const props = withDefaults(
  defineProps<{
    tone?: "success" | "warning" | "info" | "danger" | "neutral";
  }>(),
  {
    tone: "neutral",
  }
);
</script>

<template>
  <span :class="statusBadgeClass({ tone: props.tone })">
    <slot />
  </span>
</template>
