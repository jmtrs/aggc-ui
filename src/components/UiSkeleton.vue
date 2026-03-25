<script setup lang="ts">
import { computed } from "vue";
import { skeletonClass } from "./UiSkeleton.styles";

const props = withDefaults(
  defineProps<{
    variant?: "text" | "title" | "rect" | "pill" | "circle" | "stat" | "action";
    width?: string;
    height?: string;
  }>(),
  {
    variant: "rect",
    width: undefined,
    height: undefined,
  }
);

const skeletonClassName = computed(() => skeletonClass({ variant: props.variant }));
const skeletonStyle = computed(() => ({
  width:
    props.width ??
    (props.variant === "circle" ? "2.75rem" : props.variant === "pill" ? "5rem" : "100%"),
  height:
    props.height ??
    (props.variant === "text"
      ? "0.875rem"
      : props.variant === "title"
        ? "1.75rem"
        : props.variant === "pill"
          ? "1.75rem"
          : props.variant === "circle"
            ? "2.75rem"
            : props.variant === "action"
              ? "2.75rem"
              : props.variant === "stat"
                ? "4.75rem"
                : "5rem"),
}));
</script>

<template>
  <div
    aria-hidden="true"
    data-ui-skeleton
    :class="skeletonClassName"
    :style="skeletonStyle"
  />
</template>
