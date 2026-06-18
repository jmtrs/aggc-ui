<script setup lang="ts">
import { X } from "lucide-vue-next";
import {
  ToastClose,
  ToastDescription,
  ToastRoot,
  ToastTitle,
} from "reka-ui";
import {
  uiToastCloseClass,
  uiToastContentClass,
  uiToastDescriptionClass,
  uiToastIconClass,
  uiToastRootClass,
  uiToastTitleClass,
} from "./UiToast.styles";
import type { ToastTone } from "../composables/useToast";
import {
  CheckCircle,
  AlertCircle,
  Info,
  AlertTriangle,
} from "lucide-vue-next";

const props = withDefaults(
  defineProps<{
    tone: ToastTone;
    message: string;
    title?: string;
    duration?: number;
  }>(),
  {
    title: undefined,
    duration: 4000,
  }
);

const iconMap = {
  success: CheckCircle,
  error: AlertCircle,
  info: Info,
  warning: AlertTriangle,
};
</script>

<template>
  <ToastRoot
    :class="uiToastRootClass({ tone })"
    :duration="duration"
    :type="'foreground'"
  >
    <component
      :is="iconMap[props.tone]"
      :class="uiToastIconClass({ tone })"
      aria-hidden="true"
    />
    <div :class="uiToastContentClass">
      <ToastTitle v-if="title" :class="uiToastTitleClass">{{ title }}</ToastTitle>
      <ToastDescription :class="uiToastDescriptionClass">{{ message }}</ToastDescription>
    </div>
    <ToastClose :class="uiToastCloseClass" aria-label="Dismiss">
      <X :size="14" aria-hidden="true" />
    </ToastClose>
  </ToastRoot>
</template>
