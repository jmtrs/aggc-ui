import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { ref } from "vue";
import { UiSegmentedControl } from "../../components";
import StoryThemeFrame from "../support/StoryThemeFrame.vue";
import { storyCaptionClass, storySectionLabelClass, storySurfaceClass, storySurfaceCompactClass } from "../support/storyStyles";
import { uiSegmentedControlSource } from "../support/sources";

const meta = {
  title: "Primitives/UiSegmentedControl",
  id: "ui-segmented-control",
  component: UiSegmentedControl,
  tags: ["autodocs"],
  args: {
    modelValue: "components",
    options: [
      { label: "Components", value: "components" },
      { label: "Tokens", value: "tokens" },
      { label: "Patterns", value: "patterns" },
    ],
  },
  parameters: {
    docs: {
      description: {
        component: "Compact option switcher for short mutually exclusive views.",
      },
    },
  },
} satisfies Meta<typeof UiSegmentedControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  parameters: {
    docs: { source: { code: uiSegmentedControlSource } },
  },
  render: () => ({
    components: { StoryThemeFrame, UiSegmentedControl },
    setup() {
      const previewTheme = ref<"light" | "dark">("dark");
      const value = ref("components");
      const options = [
        { label: "Components", value: "components" },
        { label: "Tokens", value: "tokens" },
        { label: "Patterns", value: "patterns" },
      ];
      return {
        options,
        previewTheme,
        storyCaptionClass,
        storySectionLabelClass,
        storySurfaceClass,
        storySurfaceCompactClass,
        value,
      };
    },
    template: `
      <StoryThemeFrame v-model:theme="previewTheme" preview-id="overview">
        <div :class="[storySurfaceClass, storySurfaceCompactClass]">
          <p :class="storySectionLabelClass">Shared navigation</p>
          <UiSegmentedControl v-model="value" :options="options" />
          <p :class="storyCaptionClass">Use for short mutually exclusive views where tabs would be visually heavier than needed.</p>
        </div>
      </StoryThemeFrame>
    `,
  }),
};
