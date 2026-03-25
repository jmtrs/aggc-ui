import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { ref } from "vue";
import { StatusBadge, UiField, UiSelect } from "../../components";
import StoryThemeFrame from "../support/StoryThemeFrame.vue";
import { storyCaptionClass, storySectionLabelClass, storySurfaceClass, storySurfaceWideClass } from "../support/storyStyles";
import { uiFieldMetaSource, uiFieldSource } from "../support/sources";

const meta = {
  title: "Forms/UiField",
  id: "ui-field",
  component: UiField,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Labeling wrapper for form controls that need shared copy and field-level status.",
      },
    },
  },
} satisfies Meta<typeof UiField>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { label: "Desktop app", value: "desktop" },
  { label: "Public web", value: "web" },
];

export const Basic: Story = {
  parameters: {
    docs: { source: { code: uiFieldSource } },
  },
  render: () => ({
    components: { StoryThemeFrame, UiField, UiSelect },
    setup() {
      const previewTheme = ref<"light" | "dark">("dark");
      const target = ref("desktop");
      return { options, previewTheme, storyCaptionClass, storySectionLabelClass, storySurfaceClass, storySurfaceWideClass, target };
    },
    template: `
      <StoryThemeFrame v-model:theme="previewTheme" preview-id="basic">
        <div :class="[storySurfaceClass, storySurfaceWideClass]">
          <p :class="storySectionLabelClass">Baseline field</p>
          <UiField id="consumer-target-hint" for-id="consumer-target" label="Consumer target" hint="The same component works in desktop and public web.">
            <UiSelect id="consumer-target" v-model="target" :options="options" aria-describedby="consumer-target-hint" />
          </UiField>
          <p :class="storyCaptionClass">UiField handles label, hint and field rhythm so controls stay visually consistent.</p>
        </div>
      </StoryThemeFrame>
    `,
  }),
};

export const WithMeta: Story = {
  parameters: {
    docs: { source: { code: uiFieldMetaSource } },
  },
  render: () => ({
    components: { StatusBadge, StoryThemeFrame, UiField, UiSelect },
    setup() {
      const previewTheme = ref<"light" | "dark">("dark");
      const target = ref("web");
      return { options, previewTheme, storyCaptionClass, storySectionLabelClass, storySurfaceClass, storySurfaceWideClass, target };
    },
    template: `
      <StoryThemeFrame v-model:theme="previewTheme" preview-id="with-meta">
        <div :class="[storySurfaceClass, storySurfaceWideClass]">
          <p :class="storySectionLabelClass">Field metadata</p>
          <UiField
            id="consumer-target-meta-hint"
            for-id="consumer-target-meta"
            eyebrow="Shared system"
            label="Release target"
            hint="Use the meta slot for compact status context."
          >
            <template #meta>
              <StatusBadge tone="info">Required</StatusBadge>
            </template>
            <UiSelect id="consumer-target-meta" v-model="target" :options="options" aria-describedby="consumer-target-meta-hint" />
          </UiField>
          <p :class="storyCaptionClass">The meta slot is useful for compact status or requirement markers without crowding the main label copy.</p>
        </div>
      </StoryThemeFrame>
    `,
  }),
};
