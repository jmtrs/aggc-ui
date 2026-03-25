import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { ref } from "vue";
import { ResultPanel } from "../../components";
import StoryThemeFrame from "../support/StoryThemeFrame.vue";
import { storyCaptionClass, storySectionLabelClass, storySurfaceClass, storySurfaceWideClass } from "../support/storyStyles";
import { resultPanelFailureSource, resultPanelSuccessSource } from "../support/sources";

const meta = {
  title: "Feedback/ResultPanel",
  id: "result-panel",
  component: ResultPanel,
  tags: ["autodocs"],
  args: {
    ok: true,
    summary: "Package validation passed",
  },
  parameters: {
    docs: {
      description: {
        component: "Structured summary panel for success, warning and failure results.",
      },
    },
  },
} satisfies Meta<typeof ResultPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  parameters: {
    docs: { source: { code: resultPanelSuccessSource } },
  },
  render: () => ({
    components: { ResultPanel, StoryThemeFrame },
    setup() {
      const previewTheme = ref<"light" | "dark">("dark");
      return { previewTheme, storyCaptionClass, storySectionLabelClass, storySurfaceClass, storySurfaceWideClass };
    },
    template: `
      <StoryThemeFrame v-model:theme="previewTheme" preview-id="success">
        <div :class="[storySurfaceClass, storySurfaceWideClass]">
          <p :class="storySectionLabelClass">Pass state</p>
          <ResultPanel ok summary="Package validation passed" :messages="['Typecheck passed', 'Tests passed', 'Build passed']" />
          <p :class="storyCaptionClass">Use success panels to summarize what completed, not just to show a generic green state.</p>
        </div>
      </StoryThemeFrame>
    `,
  }),
};

export const Failure: Story = {
  parameters: {
    docs: { source: { code: resultPanelFailureSource } },
  },
  render: () => ({
    components: { ResultPanel, StoryThemeFrame },
    setup() {
      const previewTheme = ref<"light" | "dark">("dark");
      return { previewTheme, storyCaptionClass, storySectionLabelClass, storySurfaceClass, storySurfaceWideClass };
    },
    template: `
      <StoryThemeFrame v-model:theme="previewTheme" preview-id="failure">
        <div :class="[storySurfaceClass, storySurfaceWideClass]">
          <p :class="storySectionLabelClass">Fail state</p>
          <ResultPanel
            :ok="false"
            summary="Package validation failed"
            :warnings="['One component needs contrast review']"
            :errors="['Visual regression diff detected']"
          />
          <p :class="storyCaptionClass">Failure panels should distinguish warnings from errors so the next action is obvious.</p>
        </div>
      </StoryThemeFrame>
    `,
  }),
};
