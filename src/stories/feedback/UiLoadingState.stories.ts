import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { ref } from "vue";
import { UiLoadingState } from "../../components";
import StoryThemeFrame from "../support/StoryThemeFrame.vue";
import { storyCaptionClass, storySectionLabelClass, storySurfaceClass, storySurfaceCompactClass } from "../support/storyStyles";
import { uiLoadingStateSource } from "../support/sources";

const meta = {
  title: "Feedback/UiLoadingState",
  id: "ui-loading-state",
  component: UiLoadingState,
  tags: ["autodocs"],
  args: {
    title: "Preparing release artifacts",
    description: "Generating CSS, declarations and export map.",
  },
  parameters: {
    docs: {
      description: {
        component: "Shared loading treatment for async flows that need a title and supporting description.",
      },
    },
  },
} satisfies Meta<typeof UiLoadingState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  parameters: {
    docs: { source: { code: uiLoadingStateSource } },
  },
  render: () => ({
    components: { StoryThemeFrame, UiLoadingState },
    setup() {
      const previewTheme = ref<"light" | "dark">("dark");
      return { previewTheme, storyCaptionClass, storySectionLabelClass, storySurfaceClass, storySurfaceCompactClass };
    },
    template: `
      <StoryThemeFrame v-model:theme="previewTheme" preview-id="overview">
        <div :class="[storySurfaceClass, storySurfaceCompactClass]">
          <p :class="storySectionLabelClass">Async feedback</p>
          <UiLoadingState
            title="Preparing release artifacts"
            description="Generating CSS, declarations and export map."
          />
          <p :class="storyCaptionClass">Use when an async action needs more structure than a spinner alone.</p>
        </div>
      </StoryThemeFrame>
    `,
  }),
};
