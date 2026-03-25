import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { ref } from "vue";
import { UiSkeleton } from "../../components";
import StoryThemeFrame from "../support/StoryThemeFrame.vue";
import {
  storyCaptionClass,
  storyGridClass,
  storySectionLabelClass,
  storyStackClass,
  storySurfaceClass,
  storySurfaceWideClass,
} from "../support/storyStyles";
import { uiSkeletonStackSource, uiSkeletonVariantsSource } from "../support/sources";

const meta = {
  title: "Feedback/UiSkeleton",
  id: "ui-skeleton",
  component: UiSkeleton,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Shared skeleton primitives for text, stat and action placeholders.",
      },
    },
  },
} satisfies Meta<typeof UiSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Stack: Story = {
  parameters: {
    docs: { source: { code: uiSkeletonStackSource } },
  },
  render: () => ({
    components: { StoryThemeFrame, UiSkeleton },
    setup() {
      const previewTheme = ref<"light" | "dark">("dark");
      return { previewTheme, storyCaptionClass, storySectionLabelClass, storyStackClass, storySurfaceClass, storySurfaceWideClass };
    },
    template: `
      <StoryThemeFrame v-model:theme="previewTheme" preview-id="stack">
        <div :class="[storySurfaceClass, storySurfaceWideClass]">
          <p :class="storySectionLabelClass">Content stack</p>
          <div :class="storyStackClass">
            <UiSkeleton variant="title" />
            <UiSkeleton variant="text" />
            <UiSkeleton variant="rect" height="120px" />
          </div>
          <p :class="storyCaptionClass">Use the stack composition for page bodies and list sections while data is still loading.</p>
        </div>
      </StoryThemeFrame>
    `,
  }),
};

export const Variants: Story = {
  parameters: {
    docs: { source: { code: uiSkeletonVariantsSource } },
  },
  render: () => ({
    components: { StoryThemeFrame, UiSkeleton },
    setup() {
      const previewTheme = ref<"light" | "dark">("dark");
      return { previewTheme, storyCaptionClass, storyGridClass, storySectionLabelClass, storySurfaceClass, storySurfaceWideClass };
    },
    template: `
      <StoryThemeFrame v-model:theme="previewTheme" preview-id="variants">
        <div :class="[storySurfaceClass, storySurfaceWideClass]">
          <p :class="storySectionLabelClass">Available shapes</p>
          <div :class="storyGridClass">
            <UiSkeleton variant="title" />
            <UiSkeleton variant="text" />
            <UiSkeleton variant="pill" />
            <UiSkeleton variant="circle" />
            <UiSkeleton variant="stat" />
            <UiSkeleton variant="action" />
          </div>
          <p :class="storyCaptionClass">Keep skeleton shapes close to the final layout so loading does not create reflow surprises.</p>
        </div>
      </StoryThemeFrame>
    `,
  }),
};
