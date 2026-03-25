<script setup lang="ts">
import { cx } from "@styled/css";
import {
  sectionCardActionsClass,
  sectionCardBodyScrollClass,
  sectionCardBodyStaticClass,
  sectionCardClass,
  sectionCardDescriptionClass,
  sectionCardEyebrowClass,
  sectionCardHeaderClass,
  sectionCardHeaderCollapsedGapClass,
  sectionCardHeaderContentClass,
  sectionCardHeaderWithGapClass,
  sectionCardScrollClass,
  sectionCardSurfaceClass,
  sectionCardTitleClass,
} from "./SectionCard.styles";

const props = withDefaults(defineProps<{
  title: string;
  eyebrow?: string;
  description?: string;
  scrollBody?: boolean;
  collapseBodyGap?: boolean;
}>(), {
  eyebrow: "Workspace surface",
  description: "",
  scrollBody: false,
  collapseBodyGap: false,
});
</script>

<template>
  <section :class="cx(sectionCardSurfaceClass, sectionCardClass, props.scrollBody && sectionCardScrollClass)">
    <div :class="cx(sectionCardHeaderClass, props.collapseBodyGap ? sectionCardHeaderCollapsedGapClass : sectionCardHeaderWithGapClass)">
      <div :class="sectionCardHeaderContentClass">
        <p v-if="props.eyebrow" :class="sectionCardEyebrowClass">{{ props.eyebrow }}</p>
        <h2 :class="sectionCardTitleClass">{{ props.title }}</h2>
        <p v-if="props.description" :class="sectionCardDescriptionClass">
          {{ props.description }}
        </p>
      </div>
      <div v-if="$slots.actions" :class="sectionCardActionsClass">
        <slot name="actions" />
      </div>
    </div>
    <div :class="props.scrollBody ? sectionCardBodyScrollClass : sectionCardBodyStaticClass">
      <slot />
    </div>
  </section>
</template>
