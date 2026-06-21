import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { ref } from "vue";
import { UiTooltip, UiButton } from "../../components";
import StoryThemeFrame from "../support/StoryThemeFrame.vue";
import { storyCaptionClass, storySectionLabelClass, storySurfaceClass } from "../support/storyStyles";
import { uiTooltipDefaultSource } from "../support/sources";

const meta = {
  title: "Primitives/UiTooltip",
  id: "ui-tooltip",
  component: UiTooltip as never,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Accessible tooltip built on Reka UI. Renders the trigger in place and floats the content on hover/focus with positioning, portal, and keyboard support.",
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  parameters: { docs: { source: { code: uiTooltipDefaultSource } } },
  render: () => ({
    components: { UiTooltip, UiButton, StoryThemeFrame },
    setup() {
      const previewTheme = ref<"light" | "dark">("dark");
      return { previewTheme, storyCaptionClass, storySectionLabelClass, storySurfaceClass };
    },
    template: `
      <StoryThemeFrame v-model:theme="previewTheme" preview-id="default">
        <div :class="storySurfaceClass" style="min-height:160px;display:flex;align-items:center;justify-content:center;gap:4">
          <p :class="storySectionLabelClass">Hover the button</p>
          <UiTooltip content="Saves changes to the workspace">
            <UiButton size="sm">Save</UiButton>
          </UiTooltip>
          <p :class="storyCaptionClass">Reka UI handles positioning, portal, and focus.</p>
        </div>
      </StoryThemeFrame>
    `,
  }),
};
