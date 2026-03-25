<script setup lang="ts">
import { computed } from "vue";
import { colorTokens } from "../../tokens/colors";
import {
  storyPreviewActionsClass,
  storyPreviewHeaderClass,
  storyPreviewRootClass,
  storyPreviewThemeButtonClass,
  storyPreviewThemeGroupClass,
} from "./storyStyles";

type PreviewTheme = "light" | "dark";

const props = defineProps<{
  theme: PreviewTheme;
  previewId?: string;
}>();

const emit = defineEmits<{
  "update:theme": [value: PreviewTheme];
}>();

const themeLabel = computed(() => (props.theme === "dark" ? "Dark" : "Light"));
const themeVars = computed<Record<string, string>>(() => buildThemeVars(props.theme));

function setTheme(nextTheme: PreviewTheme) {
  emit("update:theme", nextTheme);
}

function buildThemeVars(theme: PreviewTheme) {
  const vars: Record<string, string> = {};

  walkTokens(colorTokens, [], vars, theme);

  return vars;
}

function walkTokens(
  node: Record<string, unknown>,
  path: string[],
  vars: Record<string, string>,
  theme: PreviewTheme
) {
  for (const [key, value] of Object.entries(node)) {
    if (value && typeof value === "object" && "value" in value) {
      const tokenValue = (value as { value: { base: string; _dark?: string } }).value;
      vars[`--colors-${toKebabCase([...path, key].join("-"))}`] =
        theme === "dark" ? (tokenValue._dark ?? tokenValue.base) : tokenValue.base;
      continue;
    }

    if (value && typeof value === "object") {
      walkTokens(value as Record<string, unknown>, [...path, key], vars, theme);
    }
  }
}

function toKebabCase(value: string) {
  return value.replace(/[A-Z]/g, (char) => `-${char.toLowerCase()}`);
}

</script>

<template>
  <div
    :class="[storyPreviewRootClass, props.theme === 'dark' ? 'dark' : '']"
    :data-story-preview-root="props.previewId ?? ''"
    :data-theme="props.theme"
    :style="themeVars"
  >
    <div :class="storyPreviewHeaderClass">
      <div :class="storyPreviewActionsClass">
        <span>Preview theme</span>
        <strong>{{ themeLabel }}</strong>
      </div>

      <div :class="storyPreviewThemeGroupClass" role="group" aria-label="Preview theme">
        <button
          type="button"
          :class="storyPreviewThemeButtonClass({ active: props.theme === 'dark' })"
          data-testid="story-theme-dark"
          :aria-pressed="props.theme === 'dark'"
          @click="setTheme('dark')"
        >
          Dark
        </button>
        <button
          type="button"
          :class="storyPreviewThemeButtonClass({ active: props.theme === 'light' })"
          data-testid="story-theme-light"
          :aria-pressed="props.theme === 'light'"
          @click="setTheme('light')"
        >
          Light
        </button>
      </div>
    </div>

    <slot />
  </div>
</template>
