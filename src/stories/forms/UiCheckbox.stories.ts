import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { ref } from "vue";
import { UiCheckbox } from "../../components";
import StoryThemeFrame from "../support/StoryThemeFrame.vue";
import { storyCaptionClass, storySectionLabelClass, storySurfaceClass, storySurfaceCompactClass } from "../support/storyStyles";
import {
  uiCheckboxCheckedSource,
  uiCheckboxDisabledSource,
  uiCheckboxUncheckedSource,
} from "../support/sources";

const meta = {
  title: "Forms/UiCheckbox",
  id: "ui-checkbox",
  component: UiCheckbox,
  tags: ["autodocs"],
  args: {
    modelValue: false,
  },
  parameters: {
    docs: {
      description: {
        component: "Checkbox control with shared label, description and invalid states.",
      },
    },
  },
} satisfies Meta<typeof UiCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unchecked: Story = {
  parameters: {
    docs: { source: { code: uiCheckboxUncheckedSource } },
  },
  render: () => ({
    components: { StoryThemeFrame, UiCheckbox },
    setup() {
      const previewTheme = ref<"light" | "dark">("dark");
      const enabled = ref(false);
      return { enabled, previewTheme, storyCaptionClass, storySectionLabelClass, storySurfaceClass, storySurfaceCompactClass };
    },
    template: `
      <StoryThemeFrame v-model:theme="previewTheme" preview-id="unchecked">
        <div :class="[storySurfaceClass, storySurfaceCompactClass]">
          <p :class="storySectionLabelClass">Unchecked</p>
          <UiCheckbox v-model="enabled" label="Enable feature flag" description="Unchecked baseline state." />
          <p :class="storyCaptionClass">Baseline checkbox state with label and supporting description.</p>
        </div>
      </StoryThemeFrame>
    `,
  }),
};

export const Checked: Story = {
  parameters: {
    docs: { source: { code: uiCheckboxCheckedSource } },
  },
  render: () => ({
    components: { StoryThemeFrame, UiCheckbox },
    setup() {
      const previewTheme = ref<"light" | "dark">("dark");
      const enabled = ref(true);
      return { enabled, previewTheme, storyCaptionClass, storySectionLabelClass, storySurfaceClass, storySurfaceCompactClass };
    },
    template: `
      <StoryThemeFrame v-model:theme="previewTheme" preview-id="checked">
        <div :class="[storySurfaceClass, storySurfaceCompactClass]">
          <p :class="storySectionLabelClass">Checked</p>
          <UiCheckbox v-model="enabled" label="Enable feature flag" description="Checked baseline state." />
          <p :class="storyCaptionClass">The checked state keeps the same layout and emphasis as the baseline control.</p>
        </div>
      </StoryThemeFrame>
    `,
  }),
};

export const Disabled: Story = {
  parameters: {
    docs: { source: { code: uiCheckboxDisabledSource } },
  },
  render: () => ({
    components: { StoryThemeFrame, UiCheckbox },
    setup() {
      const previewTheme = ref<"light" | "dark">("dark");
      const enabled = ref(true);
      return { enabled, previewTheme, storyCaptionClass, storySectionLabelClass, storySurfaceClass, storySurfaceCompactClass };
    },
    template: `
      <StoryThemeFrame v-model:theme="previewTheme" preview-id="disabled">
        <div :class="[storySurfaceClass, storySurfaceCompactClass]">
          <p :class="storySectionLabelClass">Disabled</p>
          <UiCheckbox
            v-model="enabled"
            label="Protected setting"
            description="Disabled state keeps the same layout and copy."
            disabled
          />
          <p :class="storyCaptionClass">Use disabled controls sparingly and keep the label explicit about why the setting cannot be changed.</p>
        </div>
      </StoryThemeFrame>
    `,
  }),
};
