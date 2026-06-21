import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { ref } from "vue";
import {
  DataTable,
  UiButton,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuRoot,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "../../components";
import type { DataTableColumn } from "../../components";
import StoryThemeFrame from "../support/StoryThemeFrame.vue";
import { storyCaptionClass, storySectionLabelClass, storySurfaceClass, storySurfaceWideClass } from "../support/storyStyles";
import { dataTableDefaultSource, dataTableLoadingSource, dataTableSortableSource } from "../support/sources";

interface Member {
  id: string;
  name: string;
  email: string;
  role: "ADMIN" | "MEMBER";
}

const columns: DataTableColumn[] = [
  { key: "name", label: "Member", width: "1fr" },
  { key: "email", label: "Email", width: "1fr" },
  { key: "role", label: "Role", width: "120px" },
];

const meta = {
  title: "Layout/DataTable",
  id: "data-table",
  // Generic <T> component doesn't fit Meta's ConcreteComponent type; cast keeps
  // autodocs working without forcing typed args on every story.
  component: DataTable as never,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Reusable data table with debounced search, Set-based selection (shift+click, drag-to-select, Ctrl/Cmd+A, Escape), responsive mobile cards, bulk actions, per-row actions, and loading skeletons.",
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  parameters: { docs: { source: { code: dataTableDefaultSource } } },
  render: () => ({
    components: { DataTable, UiButton, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuRoot, DropdownMenuTrigger, DropdownMenuContent, StoryThemeFrame },
    setup() {
      const previewTheme = ref<"light" | "dark">("dark");
      const selected = ref<string[]>([]);
      const items = ref<Member[]>([
        { id: "1", name: "Alice Johnson", email: "alice@example.com", role: "ADMIN" },
        { id: "2", name: "Bob Smith", email: "bob@example.com", role: "MEMBER" },
        { id: "3", name: "Carla Mendes", email: "carla@example.com", role: "MEMBER" },
      ]);
      return { previewTheme, selected, items, columns, storyCaptionClass, storySectionLabelClass, storySurfaceClass, storySurfaceWideClass };
    },
    template: `
      <StoryThemeFrame v-model:theme="previewTheme" preview-id="default">
        <div :class="[storySurfaceClass, storySurfaceWideClass]">
          <p :class="storySectionLabelClass">Searchable + selectable</p>
          <DataTable v-model:selected="selected" :items="items" :columns="columns" searchable :search-fields="['name', 'email']" search-placeholder="Search by name or email...">
            <template #bulk-actions="{ selectedItems }">
              <UiButton size="sm" variant="outline">{{ selectedItems.length }} selected</UiButton>
            </template>
            <template #cell-name="{ item }"><strong>{{ item.name }}</strong></template>
            <template #cell-email="{ item }">{{ item.email }}</template>
            <template #cell-role="{ item }">{{ item.role === 'ADMIN' ? 'Admin' : 'Member' }}</template>
            <template #actions="{ item }">
              <DropdownMenuItem @select="() => {}">Change role</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem @select="() => {}">Deactivate</DropdownMenuItem>
            </template>
          </DataTable>
          <p :class="storyCaptionClass">Shift+click ranges, drag to paint, Ctrl/Cmd+A selects all visible, Escape clears.</p>
        </div>
      </StoryThemeFrame>
    `,
  }),
};

export const Loading: Story = {
  parameters: { docs: { source: { code: dataTableLoadingSource } } },
  render: () => ({
    components: { DataTable, StoryThemeFrame },
    setup() {
      const previewTheme = ref<"light" | "dark">("dark");
      return { previewTheme, columns, storyCaptionClass, storySectionLabelClass, storySurfaceClass, storySurfaceWideClass };
    },
    template: `
      <StoryThemeFrame v-model:theme="previewTheme" preview-id="loading">
        <div :class="[storySurfaceClass, storySurfaceWideClass]">
          <p :class="storySectionLabelClass">Loading skeletons</p>
          <DataTable :items="[]" :columns="columns" :is-loading="true" searchable />
          <p :class="storyCaptionClass">Skeleton rows render while data loads, with aria-busy on the root.</p>
        </div>
      </StoryThemeFrame>
    `,
  }),
};

export const SortablePaginated: Story = {
  parameters: { docs: { source: { code: dataTableSortableSource } } },
  render: () => ({
    components: { DataTable, StoryThemeFrame },
    setup() {
      const previewTheme = ref<"light" | "dark">("dark");
      const items = ref<Member[]>([
        { id: "1", name: "Alice Johnson", email: "alice@example.com", role: "ADMIN" },
        { id: "2", name: "Bob Smith", email: "bob@example.com", role: "MEMBER" },
        { id: "3", name: "Carla Mendes", email: "carla@example.com", role: "MEMBER" },
        { id: "4", name: "Dan Lee", email: "dan@example.com", role: "MEMBER" },
      ]);
      const sortColumns: DataTableColumn[] = [
        { key: "name", label: "Member", width: "1fr", sortable: true },
        { key: "email", label: "Email", width: "1fr", sortable: true },
        { key: "role", label: "Role", width: "120px", sortable: true },
      ];
      return { previewTheme, items, sortColumns, storyCaptionClass, storySectionLabelClass, storySurfaceClass, storySurfaceWideClass };
    },
    template: `
      <StoryThemeFrame v-model:theme="previewTheme" preview-id="sortable">
        <div :class="[storySurfaceClass, storySurfaceWideClass]">
          <p :class="storySectionLabelClass">Sortable + paginated (display-only)</p>
          <DataTable :items="items" :columns="sortColumns" :page-size="3" :selectable="false">
            <template #cell-name="{ item }"><strong>{{ item.name }}</strong></template>
            <template #cell-email="{ item }">{{ item.email }}</template>
            <template #cell-role="{ item }">{{ item.role === 'ADMIN' ? 'Admin' : 'Member' }}</template>
          </DataTable>
          <p :class="storyCaptionClass">sortable columns toggle asc/desc/clear; pageSize adds client-side pagination. selectable=false hides the checkbox column.</p>
        </div>
      </StoryThemeFrame>
    `,
  }),
};
