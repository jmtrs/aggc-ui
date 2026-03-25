<script setup lang="ts">
import { pageSurfaceClass } from "./PageSurface.styles";
</script>

<template>
  <div :class="pageSurfaceClass">
    <slot />
  </div>
</template>
