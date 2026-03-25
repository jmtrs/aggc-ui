import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { defineComponent, onMounted, ref } from "vue";
import { UiField, UiSelect } from "../../components";
import StoryThemeFrame from "../support/StoryThemeFrame.vue";
import { storyCaptionClass, storySectionLabelClass, storySurfaceClass, storySurfaceWideClass } from "../support/storyStyles";
import { uiSelectClosedSource, uiSelectOpenSource, uiSelectSmallSource } from "../support/sources";

const options = [
  { label: "Desktop app", value: "desktop", description: "Product shell and authenticated workflows." },
  { label: "Public web", value: "web", description: "Marketing site and reusable presentation sections." },
];

const meta = {
  title: "Forms/UiSelect",
  id: "ui-select",
  component: UiSelect,
  tags: ["autodocs"],
  args: {
    modelValue: "desktop",
    options,
  },
  parameters: {
    docs: {
      description: {
        component: "Shared select control with deterministic open state for docs and visual testing.",
      },
    },
  },
} satisfies Meta<typeof UiSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

const OpenSelectDemo = defineComponent({
  name: "OpenSelectDemo",
  components: { UiField, UiSelect },
  setup() {
    const value = ref("desktop");
    onMounted(() => {
      requestAnimationFrame(() => {
        document.querySelector<HTMLButtonElement>("#docs-select-open")?.click();
      });
    });

    return { options, value };
  },
  template: `
    <UiField
      id="docs-select-open-hint"
      for-id="docs-select-open"
      label="Consumer target"
      hint="Open state of the shared select component."
    >
      <UiSelect
        id="docs-select-open"
        v-model="value"
        :options="options"
        aria-describedby="docs-select-open-hint"
      />
    </UiField>
  `,
});

export const Closed: Story = {
  parameters: {
    docs: { source: { code: uiSelectClosedSource } },
  },
  render: () => ({
    components: { StoryThemeFrame, UiField, UiSelect },
    setup() {
      const previewTheme = ref<"light" | "dark">("dark");
      const value = ref("desktop");
      return { options, previewTheme, storyCaptionClass, storySectionLabelClass, storySurfaceClass, storySurfaceWideClass, value };
    },
    template: `
      <StoryThemeFrame v-model:theme="previewTheme" preview-id="closed">
        <div :class="[storySurfaceClass, storySurfaceWideClass]">
          <p :class="storySectionLabelClass">Baseline</p>
          <UiField id="consumer-target-hint" for-id="consumer-target" label="Consumer target" hint="The same component works in desktop and public web.">
            <UiSelect id="consumer-target" v-model="value" :options="options" aria-describedby="consumer-target-hint" />
          </UiField>
          <p :class="storyCaptionClass">Closed state keeps label, selected value and icon alignment stable across themes.</p>
        </div>
      </StoryThemeFrame>
    `,
  }),
};

export const Open: Story = {
  parameters: {
    docs: { source: { code: uiSelectOpenSource } },
  },
  render: () => ({
    components: { OpenSelectDemo, StoryThemeFrame },
    setup() {
      const previewTheme = ref<"light" | "dark">("dark");
      return { previewTheme, storyCaptionClass, storySectionLabelClass, storySurfaceClass, storySurfaceWideClass };
    },
    template: `
      <StoryThemeFrame v-model:theme="previewTheme" preview-id="open">
        <div :class="[storySurfaceClass, storySurfaceWideClass]">
          <p :class="storySectionLabelClass">Open listbox</p>
          <OpenSelectDemo />
          <p :class="storyCaptionClass">The open state is deterministic so it can be documented and captured in visual tests.</p>
        </div>
      </StoryThemeFrame>
    `,
  }),
};

export const Small: Story = {
  parameters: {
    docs: { source: { code: uiSelectSmallSource } },
  },
  render: () => ({
    components: { StoryThemeFrame, UiField, UiSelect },
    setup() {
      const previewTheme = ref<"light" | "dark">("dark");
      const value = ref("web");
      return { options, previewTheme, storyCaptionClass, storySectionLabelClass, storySurfaceClass, storySurfaceWideClass, value };
    },
    template: `
      <StoryThemeFrame v-model:theme="previewTheme" preview-id="small">
        <div :class="[storySurfaceClass, storySurfaceWideClass]">
          <p :class="storySectionLabelClass">Compact control</p>
          <UiField id="consumer-target-small-hint" for-id="consumer-target-small" label="Compact selector" hint="Use the small size in dense toolbars or secondary controls.">
            <UiSelect id="consumer-target-small" v-model="value" size="sm" :options="options" aria-describedby="consumer-target-small-hint" />
          </UiField>
          <p :class="storyCaptionClass">The small variant keeps the same semantics and dropdown behavior while reducing vertical footprint.</p>
        </div>
      </StoryThemeFrame>
    `,
  }),
};
