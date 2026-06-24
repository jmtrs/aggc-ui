<script setup lang="ts">
import {
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
  TooltipContent,
} from "reka-ui";
import { tooltipContent } from "./UiTooltip.styles";

withDefaults(
  defineProps<{
    /** Tooltip text. When empty, renders the trigger bare (no tooltip). */
    content: string;
    side?: "top" | "right" | "bottom" | "left";
    /** Open delay in ms. */
    delay?: number;
  }>(),
  {
    side: "top",
    delay: 500,
  },
);
</script>

<template>
  <TooltipProvider v-if="content" :delay-duration="delay">
    <TooltipRoot>
      <TooltipTrigger as-child>
        <slot />
      </TooltipTrigger>
      <TooltipContent :side="side" :side-offset="6" :class="tooltipContent">
        {{ content }}
      </TooltipContent>
    </TooltipRoot>
  </TooltipProvider>
  <slot v-else />
</template>
