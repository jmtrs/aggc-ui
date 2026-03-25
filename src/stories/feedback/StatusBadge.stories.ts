import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { StatusBadge } from "../../components";
import StoryThemeFrame from "../support/StoryThemeFrame.vue";
import { ref } from "vue";
import { storyCaptionClass, storyRowClass, storySectionLabelClass, storySurfaceClass, storySurfaceCompactClass } from "../support/storyStyles";
import { statusBadgeTonesSource } from "../support/sources";

const meta = {
  title: "Feedback/StatusBadge",
  id: "status-badge",
  component: StatusBadge,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Compact state label for neutral, informative, warning and success contexts.",
      },
    },
  },
} satisfies Meta<typeof StatusBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Tones: Story = {
  parameters: {
    docs: { source: { code: statusBadgeTonesSource } },
  },
  render: () => ({
    components: { StatusBadge, StoryThemeFrame },
    setup() {
      const previewTheme = ref<"light" | "dark">("dark");
      return { previewTheme, storyCaptionClass, storyRowClass, storySectionLabelClass, storySurfaceClass, storySurfaceCompactClass };
    },
    template: `
      <StoryThemeFrame v-model:theme="previewTheme" preview-id="tones">
        <div :class="[storySurfaceClass, storySurfaceCompactClass]">
          <p :class="storySectionLabelClass">Semantic tones</p>
          <div :class="storyRowClass">
            <StatusBadge tone="success">Ready</StatusBadge>
            <StatusBadge tone="warning">Needs review</StatusBadge>
            <StatusBadge tone="info">Preview</StatusBadge>
            <StatusBadge tone="neutral">Draft</StatusBadge>
          </div>
          <p :class="storyCaptionClass">Badges should stay short and categorical so they work in cards, lists and headers.</p>
        </div>
      </StoryThemeFrame>
    `,
  }),
};
