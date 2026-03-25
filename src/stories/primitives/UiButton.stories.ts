import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { ref } from "vue";
import { UiButton } from "../../components";
import StoryThemeFrame from "../support/StoryThemeFrame.vue";
import {
  storyCaptionClass,
  storySectionLabelClass,
  storySurfaceClass,
  storySurfaceCompactClass,
} from "../support/storyStyles";
import {
  uiButtonLoadingSource,
  uiButtonOutlineSource,
  uiButtonSolidSource,
  uiButtonSubtleSource,
} from "../support/sources";

const meta = {
  title: "Primitives/UiButton",
  id: "ui-button",
  component: UiButton,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Action primitive for high-emphasis, secondary and low-emphasis actions.",
      },
    },
  },
} satisfies Meta<typeof UiButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  parameters: {
    docs: { source: { code: uiButtonSolidSource } },
  },
  render: () => ({
    components: { StoryThemeFrame, UiButton },
    setup() {
      const previewTheme = ref<"light" | "dark">("dark");
      return {
        previewTheme,
        storyCaptionClass,
        storySectionLabelClass,
        storySurfaceClass,
        storySurfaceCompactClass,
      };
    },
    template: `
      <StoryThemeFrame v-model:theme="previewTheme" preview-id="solid">
        <div :class="[storySurfaceClass, storySurfaceCompactClass]">
          <p :class="storySectionLabelClass">Primary</p>
          <UiButton>Primary action</UiButton>
          <p :class="storyCaptionClass">Default high-emphasis action for the most important choice in a surface.</p>
        </div>
      </StoryThemeFrame>
    `,
  }),
};

export const Outline: Story = {
  parameters: {
    docs: { source: { code: uiButtonOutlineSource } },
  },
  render: () => ({
    components: { StoryThemeFrame, UiButton },
    setup() {
      const previewTheme = ref<"light" | "dark">("dark");
      return {
        previewTheme,
        storyCaptionClass,
        storySectionLabelClass,
        storySurfaceClass,
        storySurfaceCompactClass,
      };
    },
    template: `
      <StoryThemeFrame v-model:theme="previewTheme" preview-id="outline">
        <div :class="[storySurfaceClass, storySurfaceCompactClass]">
          <p :class="storySectionLabelClass">Secondary</p>
          <UiButton variant="outline">Secondary action</UiButton>
          <p :class="storyCaptionClass">Use when the action is important but should not dominate the surface.</p>
        </div>
      </StoryThemeFrame>
    `,
  }),
};

export const Loading: Story = {
  parameters: {
    docs: { source: { code: uiButtonLoadingSource } },
  },
  render: () => ({
    components: { StoryThemeFrame, UiButton },
    setup() {
      const previewTheme = ref<"light" | "dark">("dark");
      return {
        previewTheme,
        storyCaptionClass,
        storySectionLabelClass,
        storySurfaceClass,
        storySurfaceCompactClass,
      };
    },
    template: `
      <StoryThemeFrame v-model:theme="previewTheme" preview-id="loading">
        <div :class="[storySurfaceClass, storySurfaceCompactClass]">
          <p :class="storySectionLabelClass">Async state</p>
          <UiButton variant="subtle" loading loading-label="Loading">Async action</UiButton>
          <p :class="storyCaptionClass">The component sets busy state and blocks interaction while work is running.</p>
        </div>
      </StoryThemeFrame>
    `,
  }),
};

export const Subtle: Story = {
  parameters: {
    docs: { source: { code: uiButtonSubtleSource } },
  },
  render: () => ({
    components: { StoryThemeFrame, UiButton },
    setup() {
      const previewTheme = ref<"light" | "dark">("dark");
      return {
        previewTheme,
        storyCaptionClass,
        storySectionLabelClass,
        storySurfaceClass,
        storySurfaceCompactClass,
      };
    },
    template: `
      <StoryThemeFrame v-model:theme="previewTheme" preview-id="subtle">
        <div :class="[storySurfaceClass, storySurfaceCompactClass]">
          <p :class="storySectionLabelClass">Supportive action</p>
          <UiButton variant="subtle">Preview state</UiButton>
          <p :class="storyCaptionClass">Use subtle actions for preview, inspect and other lower-emphasis flows.</p>
        </div>
      </StoryThemeFrame>
    `,
  }),
};
