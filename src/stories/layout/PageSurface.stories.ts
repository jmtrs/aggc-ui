import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { ref } from "vue";
import { PageSurface, SectionCard, StatusBadge, UiButton } from "../../components";
import StoryThemeFrame from "../support/StoryThemeFrame.vue";
import { storyCaptionClass, storySectionLabelClass, storySurfaceWideClass } from "../support/storyStyles";
import { pageSurfaceSource } from "../support/sources";

const meta = {
  title: "Layout/PageSurface",
  id: "page-surface",
  component: PageSurface,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Top-level scroll-aware wrapper for page-sized views and workspace surfaces.",
      },
    },
  },
} satisfies Meta<typeof PageSurface>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  parameters: {
    docs: { source: { code: pageSurfaceSource } },
  },
  render: () => ({
    components: { PageSurface, SectionCard, StatusBadge, StoryThemeFrame, UiButton },
    setup() {
      const previewTheme = ref<"light" | "dark">("dark");
      return { previewTheme, storyCaptionClass, storySectionLabelClass, storySurfaceWideClass };
    },
    template: `
      <StoryThemeFrame v-model:theme="previewTheme" preview-id="overview">
        <div :class="storySurfaceWideClass">
          <p :class="storySectionLabelClass">Page wrapper</p>
          <PageSurface>
            <SectionCard title="Release summary" eyebrow="Shared shell" description="Use PageSurface as the main scroll-aware wrapper for top-level screens.">
              <template #actions>
                <StatusBadge tone="info">Desktop + Web</StatusBadge>
              </template>
              <p>PageSurface gives top-level views a predictable outer rhythm and width behavior.</p>
              <UiButton>Primary action</UiButton>
            </SectionCard>
          </PageSurface>
          <p :class="storyCaptionClass">Use PageSurface at the page level, not for nested cards or inline sub-sections.</p>
        </div>
      </StoryThemeFrame>
    `,
  }),
};
