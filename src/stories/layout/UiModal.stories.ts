import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { ref } from "vue";
import { UiButton, UiField, UiModal } from "../../components";
import StoryThemeFrame from "../support/StoryThemeFrame.vue";
import {
  storySurfaceClass,
  storySurfaceCompactClass,
} from "../support/storyStyles";

const meta: Meta = {
  title: "Layout/UiModal",
  id: "ui-modal",
  component: UiModal,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Accessible dialog overlay with focus trap, ESC close, and portal rendering. Built on Reka UI Dialog.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { StoryThemeFrame, UiModal, UiButton, UiField },
    setup() {
      const previewTheme = ref<"light" | "dark">("dark");
      const open = ref(false);
      return { previewTheme, open };
    },
    template: `
      <StoryThemeFrame v-model:theme="previewTheme" preview-id="modal-default">
        <div :class="[storySurfaceClass, storySurfaceCompactClass]">
          <UiButton @click="open = true">Open Modal</UiButton>
          <UiModal v-model:open="open" title="Create Workspace" description="Add a new workspace to your tenant.">
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <UiField label="Name" for-id="ws-name">
                <input id="ws-name" type="text" placeholder="e.g., Legal Documents Q2" style="width: 100%; padding: 0.5rem 0.75rem; border-radius: 0.5rem; border: 1px solid var(--colors-border-default); background: var(--colors-bg-input); color: var(--colors-text-primary); font-size: 0.875rem;" />
              </UiField>
            </div>
            <template #actions>
              <UiButton variant="outline" @click="open = false">Cancel</UiButton>
              <UiButton @click="open = false">Create</UiButton>
            </template>
          </UiModal>
        </div>
      </StoryThemeFrame>
    `,
  }),
};

export const Sizes: Story = {
  render: () => ({
    components: { StoryThemeFrame, UiModal, UiButton },
    setup() {
      const previewTheme = ref<"light" | "dark">("dark");
      const openSm = ref(false);
      const openMd = ref(false);
      const openLg = ref(false);
      return { previewTheme, openSm, openMd, openLg };
    },
    template: `
      <StoryThemeFrame v-model:theme="previewTheme" preview-id="modal-sizes">
        <div :class="[storySurfaceClass, storySurfaceCompactClass]" style="display: flex; gap: 0.75rem;">
          <UiButton variant="outline" @click="openSm = true">Small</UiButton>
          <UiButton variant="outline" @click="openMd = true">Medium</UiButton>
          <UiButton variant="outline" @click="openLg = true">Large</UiButton>
          <UiModal v-model:open="openSm" size="sm" title="Small Modal">
            <p>This is a small modal (400px max width).</p>
          </UiModal>
          <UiModal v-model:open="openMd" size="md" title="Medium Modal">
            <p>This is a medium modal (560px max width).</p>
          </UiModal>
          <UiModal v-model:open="openLg" size="lg" title="Large Modal">
            <p>This is a large modal (720px max width).</p>
            <template #actions>
              <UiButton variant="outline" @click="openLg = false">Close</UiButton>
            </template>
          </UiModal>
        </div>
      </StoryThemeFrame>
    `,
  }),
};
