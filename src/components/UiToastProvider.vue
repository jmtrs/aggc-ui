<script setup lang="ts">
import { ToastProvider, ToastViewport } from "reka-ui";
import { useToast } from "../composables/useToast";
import UiToast from "./UiToast.vue";
import { uiToastViewportClass } from "./UiToast.styles";

const { toasts } = useToast();
</script>

<template>
  <ToastProvider swipe-direction="right">
    <slot />
    <template v-for="toast in toasts" :key="toast.id">
      <UiToast
        :tone="toast.tone"
        :message="toast.message"
        :duration="toast.duration"
      />
    </template>
    <ToastViewport :class="uiToastViewportClass" />
  </ToastProvider>
</template>
