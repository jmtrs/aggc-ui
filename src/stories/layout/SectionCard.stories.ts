import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { StatusBadge, SectionCard, UiButton } from "../../components";
import StoryThemeFrame from "../support/StoryThemeFrame.vue";
import { ref } from "vue";
import { storyCaptionClass, storySectionLabelClass, storySurfaceClass, storySurfaceWideClass } from "../support/storyStyles";
import { sectionCardDefaultSource, sectionCardScrollSource } from "../support/sources";

const meta = {
  title: "Layout/SectionCard",
  id: "section-card",
  component: SectionCard,
  tags: ["autodocs"],
  args: {
    title: "Section title",
  },
  parameters: {
    docs: {
      description: {
        component: "Reusable section surface for grouped content with optional actions.",
      },
    },
  },
} satisfies Meta<typeof SectionCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: { source: { code: sectionCardDefaultSource } },
  },
  render: () => ({
    components: { SectionCard, StatusBadge, StoryThemeFrame, UiButton },
    setup() {
      const previewTheme = ref<"light" | "dark">("dark");
      return { previewTheme, storyCaptionClass, storySectionLabelClass, storySurfaceClass, storySurfaceWideClass };
    },
    template: `
      <StoryThemeFrame v-model:theme="previewTheme" preview-id="default">
        <div :class="[storySurfaceClass, storySurfaceWideClass]">
          <p :class="storySectionLabelClass">Base surface</p>
          <SectionCard title="AGGC UI Playground" eyebrow="Shared system" description="Visual reference for reusable components and patterns.">
            <template #actions>
              <StatusBadge tone="info">v0.1.0</StatusBadge>
            </template>
            <p>Shared components should render consistently in desktop and public web.</p>
            <UiButton variant="outline">Open docs</UiButton>
          </SectionCard>
          <p :class="storyCaptionClass">Use SectionCard for focused regions with a strong header and optional header actions.</p>
        </div>
      </StoryThemeFrame>
    `,
  }),
};

export const ScrollBody: Story = {
  parameters: {
    docs: { source: { code: sectionCardScrollSource } },
  },
  render: () => ({
    components: { SectionCard, StatusBadge, StoryThemeFrame },
    setup() {
      const previewTheme = ref<"light" | "dark">("dark");
      return { previewTheme, storyCaptionClass, storySectionLabelClass, storySurfaceClass, storySurfaceWideClass };
    },
    template: `
      <StoryThemeFrame v-model:theme="previewTheme" preview-id="scroll-body">
        <div :class="[storySurfaceClass, storySurfaceWideClass]">
          <p :class="storySectionLabelClass">Scrollable body</p>
          <SectionCard title="Changelog" eyebrow="Scrollable region" description="Longer bodies can scroll without breaking the card header." scroll-body>
            <template #actions>
              <StatusBadge tone="neutral">14 entries</StatusBadge>
            </template>
            <p>Release note 1. Shared surfaces keep spacing stable across dense content.</p>
            <p>Release note 2. Shared surfaces keep spacing stable across dense content.</p>
            <p>Release note 3. Shared surfaces keep spacing stable across dense content.</p>
            <p>Release note 4. Shared surfaces keep spacing stable across dense content.</p>
            <p>Release note 5. Shared surfaces keep spacing stable across dense content.</p>
          </SectionCard>
          <p :class="storyCaptionClass">Use scrollBody when long detail lists should stay within a bounded panel.</p>
        </div>
      </StoryThemeFrame>
    `,
  }),
};
