<script setup lang="ts">
import { computed } from "vue";
import { User } from "lucide-vue-next";
import { AvatarFallback, AvatarImage, AvatarRoot } from "reka-ui";
import {
  uiAvatarFallbackClass,
  uiAvatarImageClass,
  uiAvatarRootClass,
} from "./UiAvatar.styles";

const props = withDefaults(
  defineProps<{
    name: string;
    src?: string;
    size?: "sm" | "md" | "lg" | "xl";
    shape?: "circle" | "square";
  }>(),
  {
    src: undefined,
    size: "md",
    shape: "circle",
  }
);

const initials = computed(() => {
  const parts = props.name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
});

const iconSizeMap = { sm: 16, md: 20, lg: 24, xl: 28 };
</script>

<template>
  <AvatarRoot :class="uiAvatarRootClass({ size, shape })" :aria-label="name" role="img">
    <AvatarImage v-if="src" :src="src" :alt="name" :class="uiAvatarImageClass" />
    <AvatarFallback :delay-ms="300" :class="uiAvatarFallbackClass({ size })">
      {{ initials }}
    </AvatarFallback>
  </AvatarRoot>
</template>
