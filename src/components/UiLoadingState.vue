<script setup lang="ts">
import {
  uiLoadingStateContentClass,
  uiLoadingStatePulseClass,
  uiLoadingStateRootClass,
  uiLoadingStateTitleClass,
} from "./UiLoadingState.styles";

withDefaults(
  defineProps<{
    title: string;
    description: string;
    live?: "polite" | "assertive" | "off";
  }>(),
  {
    live: "polite",
  }
);
</script>

<template>
  <div
    :class="uiLoadingStateRootClass"
    data-testid="loading-state"
    :aria-live="live"
    :role="live === 'off' ? undefined : 'status'"
  >
    <span :class="uiLoadingStatePulseClass" aria-hidden="true" data-ui-loading-pulse />
    <div :class="uiLoadingStateContentClass">
      <p :class="uiLoadingStateTitleClass">{{ title }}</p>
      <p>{{ description }}</p>
    </div>
  </div>
</template>
