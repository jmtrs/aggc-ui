<script setup lang="ts">
import { X } from "lucide-vue-next";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  VisuallyHidden,
} from "reka-ui";
import {
  uiModalActionsClass,
  uiModalBodyClass,
  uiModalCloseClass,
  uiModalContentClass,
  uiModalDescriptionClass,
  uiModalHeaderClass,
  uiModalHeaderContentClass,
  uiModalOverlayClass,
  uiModalTitleClass,
} from "./UiModal.styles";

withDefaults(
  defineProps<{
    open: boolean;
    size?: "sm" | "md" | "lg";
    title: string;
    description?: string;
  }>(),
  {
    size: "md",
    description: undefined,
  }
);

const emit = defineEmits<{
  "update:open": [value: boolean];
  close: [];
}>();

function handleOpenChange(open: boolean) {
  emit("update:open", open);
  if (!open) {
    emit("close");
  }
}
</script>

<template>
  <DialogRoot :open="open" @update:open="handleOpenChange">
    <DialogPortal>
      <DialogOverlay :class="uiModalOverlayClass" />
      <DialogContent :class="uiModalContentClass({ size })">
        <div :class="uiModalHeaderClass">
          <div :class="uiModalHeaderContentClass">
            <DialogTitle :class="uiModalTitleClass">{{ title }}</DialogTitle>
            <DialogDescription v-if="description" :class="uiModalDescriptionClass">
              {{ description }}
            </DialogDescription>
            <VisuallyHidden v-else>
              <DialogDescription>{{ title }}</DialogDescription>
            </VisuallyHidden>
          </div>
          <DialogClose :class="uiModalCloseClass" aria-label="Close dialog">
            <X :size="20" aria-hidden="true" />
          </DialogClose>
        </div>
        <div :class="uiModalBodyClass">
          <slot />
        </div>
        <div v-if="$slots.actions" :class="uiModalActionsClass">
          <slot name="actions" />
        </div>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
