import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { ref } from "vue";
import { UiButton, UiToast, UiToastProvider } from "../../components";
import { useToast } from "../../composables/useToast";
import StoryThemeFrame from "../support/StoryThemeFrame.vue";
import {
  storySurfaceClass,
  storySurfaceCompactClass,
} from "../support/storyStyles";

const meta: Meta = {
  title: "Feedback/UiToast",
  id: "ui-toast",
  component: UiToast,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Notification toast with tone-based styling, auto-dismiss, and swipe-to-dismiss. Built on Reka UI Toast.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Tones: Story = {
  render: () => ({
    components: { StoryThemeFrame, UiToast, UiToastProvider, UiButton },
    setup() {
      const previewTheme = ref<"light" | "dark">("dark");
      const toast = useToast();
      return { previewTheme, toast };
    },
    template: `
      <StoryThemeFrame v-model:theme="previewTheme" preview-id="toast-tones">
        <UiToastProvider>
          <div :class="[storySurfaceClass, storySurfaceCompactClass]" style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
            <UiButton variant="outline" @click="toast.success('Workspace created successfully')">Success</UiButton>
            <UiButton variant="outline" @click="toast.error('Failed to upload document')">Error</UiButton>
            <UiButton variant="outline" @click="toast.info('API key copied to clipboard')">Info</UiButton>
            <UiButton variant="outline" @click="toast.warning('Storage quota almost full')">Warning</UiButton>
          </div>
        </UiToastProvider>
      </StoryThemeFrame>
    `,
  }),
};

export const Static: Story = {
  render: () => ({
    components: { StoryThemeFrame, UiToast, UiToastProvider },
    setup() {
      const previewTheme = ref<"light" | "dark">("dark");
      return { previewTheme };
    },
    template: `
      <StoryThemeFrame v-model:theme="previewTheme" preview-id="toast-static">
        <UiToastProvider>
          <div :class="[storySurfaceClass, storySurfaceCompactClass]" style="display: flex; flex-direction: column; gap: 0.75rem;">
            <UiToast tone="success" message="Document uploaded and processed." :duration="0" />
            <UiToast tone="error" message="Upload failed. Please try again." :duration="0" />
            <UiToast tone="info" message="New workspace available." :duration="0" />
            <UiToast tone="warning" message="Rate limit approaching." :duration="0" />
          </div>
        </UiToastProvider>
      </StoryThemeFrame>
    `,
  }),
};
