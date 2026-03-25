export const uiButtonSolidSource = `<script setup lang="ts">
import { UiButton } from "@aggc/ui";
</script>

<template>
  <UiButton>Primary action</UiButton>
</template>`;

export const uiButtonOutlineSource = `<script setup lang="ts">
import { UiButton } from "@aggc/ui";
</script>

<template>
  <UiButton variant="outline">Secondary action</UiButton>
</template>`;

export const uiButtonLoadingSource = `<script setup lang="ts">
import { UiButton } from "@aggc/ui";
</script>

<template>
  <UiButton variant="subtle" loading loading-label="Loading">
    Async action
  </UiButton>
</template>`;

export const uiButtonSubtleSource = `<script setup lang="ts">
import { UiButton } from "@aggc/ui";
</script>

<template>
  <UiButton variant="subtle">
    Preview state
  </UiButton>
</template>`;

export const uiCheckboxUncheckedSource = `<script setup lang="ts">
import { ref } from "vue";
import { UiCheckbox } from "@aggc/ui";

const enabled = ref(false);
</script>

<template>
  <UiCheckbox
    v-model="enabled"
    label="Enable feature flag"
    description="Unchecked baseline state."
  />
</template>`;

export const uiCheckboxCheckedSource = `<script setup lang="ts">
import { ref } from "vue";
import { UiCheckbox } from "@aggc/ui";

const enabled = ref(true);
</script>

<template>
  <UiCheckbox
    v-model="enabled"
    label="Enable feature flag"
    description="Checked baseline state."
  />
</template>`;

export const uiCheckboxDisabledSource = `<script setup lang="ts">
import { ref } from "vue";
import { UiCheckbox } from "@aggc/ui";

const enabled = ref(true);
</script>

<template>
  <UiCheckbox
    v-model="enabled"
    label="Protected setting"
    description="Disabled state keeps the same layout and copy."
    disabled
  />
</template>`;

export const uiFieldSource = `<script setup lang="ts">
import { ref } from "vue";
import { UiField, UiSelect } from "@aggc/ui";

const target = ref("desktop");
const options = [
  { label: "Desktop app", value: "desktop" },
  { label: "Public web", value: "web" },
];
</script>

<template>
  <UiField
    id="consumer-target-hint"
    for-id="consumer-target"
    label="Consumer target"
    hint="The same component works in desktop and public web."
  >
    <UiSelect
      id="consumer-target"
      v-model="target"
      :options="options"
      aria-describedby="consumer-target-hint"
    />
  </UiField>
</template>`;

export const uiFieldMetaSource = `<script setup lang="ts">
import { ref } from "vue";
import { StatusBadge, UiField, UiSelect } from "@aggc/ui";

const target = ref("web");
const options = [
  { label: "Desktop app", value: "desktop" },
  { label: "Public web", value: "web" },
];
</script>

<template>
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

    <UiSelect
      id="consumer-target-meta"
      v-model="target"
      :options="options"
      aria-describedby="consumer-target-meta-hint"
    />
  </UiField>
</template>`;

export const uiSelectClosedSource = `<script setup lang="ts">
import { ref } from "vue";
import { UiField, UiSelect } from "@aggc/ui";

const target = ref("desktop");
const options = [
  { label: "Desktop app", value: "desktop", description: "Product shell and authenticated workflows." },
  { label: "Public web", value: "web", description: "Marketing site and reusable presentation sections." },
];
</script>

<template>
  <UiField
    id="consumer-target-hint"
    for-id="consumer-target"
    label="Consumer target"
    hint="The same component works in desktop and public web."
  >
    <UiSelect
      id="consumer-target"
      v-model="target"
      :options="options"
      aria-describedby="consumer-target-hint"
    />
  </UiField>
</template>`;

export const uiSelectOpenSource = `<script setup lang="ts">
import { ref } from "vue";
import { UiField, UiSelect } from "@aggc/ui";

const target = ref("desktop");
const options = [
  { label: "Desktop app", value: "desktop", description: "Product shell and authenticated workflows." },
  { label: "Public web", value: "web", description: "Marketing site and reusable presentation sections." },
];
</script>

<template>
  <UiField
    id="consumer-target-open-hint"
    for-id="consumer-target-open"
    label="Consumer target"
    hint="The same component works in desktop and public web."
  >
    <UiSelect
      id="consumer-target-open"
      v-model="target"
      :options="options"
      aria-describedby="consumer-target-open-hint"
    />
  </UiField>
</template>`;

export const uiSelectSmallSource = `<script setup lang="ts">
import { ref } from "vue";
import { UiField, UiSelect } from "@aggc/ui";

const target = ref("web");
const options = [
  { label: "Desktop app", value: "desktop" },
  { label: "Public web", value: "web" },
];
</script>

<template>
  <UiField
    id="consumer-target-small-hint"
    for-id="consumer-target-small"
    label="Compact selector"
    hint="Use the small size in dense toolbars or secondary controls."
  >
    <UiSelect
      id="consumer-target-small"
      v-model="target"
      size="sm"
      :options="options"
      aria-describedby="consumer-target-small-hint"
    />
  </UiField>
</template>`;

export const statusBadgeTonesSource = `<script setup lang="ts">
import { StatusBadge } from "@aggc/ui";
</script>

<template>
  <StatusBadge tone="success">Ready</StatusBadge>
  <StatusBadge tone="warning">Needs review</StatusBadge>
  <StatusBadge tone="info">Preview</StatusBadge>
  <StatusBadge tone="neutral">Draft</StatusBadge>
</template>`;

export const uiLoadingStateSource = `<script setup lang="ts">
import { UiLoadingState } from "@aggc/ui";
</script>

<template>
  <UiLoadingState
    title="Preparing release artifacts"
    description="Generating CSS, declarations and export map."
  />
</template>`;

export const uiSkeletonStackSource = `<script setup lang="ts">
import { UiSkeleton } from "@aggc/ui";
</script>

<template>
  <UiSkeleton variant="title" />
  <UiSkeleton variant="text" />
  <UiSkeleton variant="rect" height="120px" />
</template>`;

export const uiSkeletonVariantsSource = `<script setup lang="ts">
import { UiSkeleton } from "@aggc/ui";
</script>

<template>
  <UiSkeleton variant="title" />
  <UiSkeleton variant="text" />
  <UiSkeleton variant="pill" />
  <UiSkeleton variant="circle" />
  <UiSkeleton variant="stat" />
  <UiSkeleton variant="action" />
</template>`;

export const resultPanelSuccessSource = `<script setup lang="ts">
import { ResultPanel } from "@aggc/ui";
</script>

<template>
  <ResultPanel
    ok
    summary="Package validation passed"
    :messages="['Typecheck passed', 'Tests passed', 'Build passed']"
  />
</template>`;

export const resultPanelFailureSource = `<script setup lang="ts">
import { ResultPanel } from "@aggc/ui";
</script>

<template>
  <ResultPanel
    :ok="false"
    summary="Package validation failed"
    :warnings="['One component needs contrast review']"
    :errors="['Visual regression diff detected']"
  />
</template>`;

export const sectionCardDefaultSource = `<script setup lang="ts">
import { SectionCard, StatusBadge, UiButton } from "@aggc/ui";
</script>

<template>
  <SectionCard
    title="AGGC UI Playground"
    eyebrow="Shared system"
    description="Visual reference for reusable components and patterns."
  >
    <template #actions>
      <StatusBadge tone="info">v0.1.0</StatusBadge>
    </template>

    <p>Shared components should render consistently in desktop and public web.</p>

    <UiButton variant="outline">Open docs</UiButton>
  </SectionCard>
</template>`;

export const sectionCardScrollSource = `<script setup lang="ts">
import { SectionCard, StatusBadge } from "@aggc/ui";
</script>

<template>
  <SectionCard
    title="Changelog"
    eyebrow="Scrollable region"
    description="Longer bodies can scroll without breaking the card header."
    scroll-body
  >
    <template #actions>
      <StatusBadge tone="neutral">14 entries</StatusBadge>
    </template>

    <p>Release note 1. Shared surfaces keep spacing stable across dense content.</p>
    <p>Release note 2. Shared surfaces keep spacing stable across dense content.</p>
    <p>Release note 3. Shared surfaces keep spacing stable across dense content.</p>
  </SectionCard>
</template>`;

export const uiSegmentedControlSource = `<script setup lang="ts">
import { ref } from "vue";
import { UiSegmentedControl } from "@aggc/ui";

const view = ref("components");
const options = [
  { label: "Components", value: "components" },
  { label: "Tokens", value: "tokens" },
  { label: "Patterns", value: "patterns" },
];
</script>

<template>
  <UiSegmentedControl
    v-model="view"
    :options="options"
  />
</template>`;

export const pageSurfaceSource = `<script setup lang="ts">
import { PageSurface, SectionCard, StatusBadge, UiButton } from "@aggc/ui";
</script>

<template>
  <PageSurface>
    <SectionCard
      title="Release summary"
      eyebrow="Shared shell"
      description="Use PageSurface as the main scroll-aware wrapper for top-level screens."
    >
      <template #actions>
        <StatusBadge tone="info">Desktop + Web</StatusBadge>
      </template>

      <p>PageSurface gives top-level views a predictable outer rhythm and width behavior.</p>

      <UiButton>Primary action</UiButton>
    </SectionCard>
  </PageSurface>
</template>`;
