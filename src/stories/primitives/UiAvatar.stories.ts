import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { ref } from "vue";
import { UiAvatar } from "../../components";
import StoryThemeFrame from "../support/StoryThemeFrame.vue";
import {
  storySurfaceClass,
  storySurfaceCompactClass,
} from "../support/storyStyles";

const meta: Meta = {
  title: "Primitives/UiAvatar",
  id: "ui-avatar",
  component: UiAvatar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "User avatar with image support and initials fallback. Built on Reka UI Avatar.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Sizes: Story = {
  render: () => ({
    components: { StoryThemeFrame, UiAvatar },
    setup() {
      const previewTheme = ref<"light" | "dark">("dark");
      return { previewTheme };
    },
    template: `
      <StoryThemeFrame v-model:theme="previewTheme" preview-id="avatar-sizes">
        <div :class="[storySurfaceClass, storySurfaceCompactClass]" style="display: flex; align-items: center; gap: 1rem;">
          <UiAvatar name="Alice Johnson" size="sm" />
          <UiAvatar name="Alice Johnson" size="md" />
          <UiAvatar name="Alice Johnson" size="lg" />
          <UiAvatar name="Alice Johnson" size="xl" />
        </div>
      </StoryThemeFrame>
    `,
  }),
};

export const Shapes: Story = {
  render: () => ({
    components: { StoryThemeFrame, UiAvatar },
    setup() {
      const previewTheme = ref<"light" | "dark">("dark");
      return { previewTheme };
    },
    template: `
      <StoryThemeFrame v-model:theme="previewTheme" preview-id="avatar-shapes">
        <div :class="[storySurfaceClass, storySurfaceCompactClass]" style="display: flex; align-items: center; gap: 1rem;">
          <UiAvatar name="Alice Johnson" size="lg" shape="circle" />
          <UiAvatar name="Alice Johnson" size="lg" shape="square" />
        </div>
      </StoryThemeFrame>
    `,
  }),
};

export const WithImage: Story = {
  render: () => ({
    components: { StoryThemeFrame, UiAvatar },
    setup() {
      const previewTheme = ref<"light" | "dark">("dark");
      return { previewTheme };
    },
    template: `
      <StoryThemeFrame v-model:theme="previewTheme" preview-id="avatar-image">
        <div :class="[storySurfaceClass, storySurfaceCompactClass]" style="display: flex; align-items: center; gap: 1rem;">
          <UiAvatar name="Colm Tuite" src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80" size="lg" />
          <UiAvatar name="Fallback User" src="https://broken-url.invalid/photo.jpg" size="lg" />
          <UiAvatar name="No Image" size="lg" />
        </div>
      </StoryThemeFrame>
    `,
  }),
};
