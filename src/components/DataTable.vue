<script setup lang="ts" generic="T">
import { ref, computed, watch, onMounted, onUnmounted, useSlots } from "vue";
import {
  Search, X, SearchX, MoreHorizontal, Check, Minus,
  ArrowUp, ArrowDown, ChevronsUpDown, ChevronLeft, ChevronRight,
} from "lucide-vue-next";
import {
  DropdownMenuRoot,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "reka-ui";
import UiSkeleton from "./UiSkeleton.vue";
import UiTooltip from "./UiTooltip.vue";
import type {
  DataTableColumn,
  DataTableLabels,
  DataTableSortState,
} from "./DataTable.types";
import {
  toolbar, searchWrap, searchIcon, searchInput, searchClear, searchClearIcon,
  bulkBar, bulkCount,
  table, tableHead, tableBody, tableRow,
  headerCell, headerLabel, sortBtn, sortIcon, sortIconActive,
  dataCell, actionsCell, hideMobileCell,
  checkCell, nativeCheckbox, checkIcon,
  menuBtn, menuBtnIcon, actionMenu,
  mobileList, mobileCard, mobileCardSelected, mobileToolbar, mobileActionsRow, mobileSearchRow, mobileSelectAll, mobileBulkActions,
  deselectBtn, deselectIcon,
  filteredEmpty, filteredEmptyIcon, filteredEmptyTitle, filteredEmptyDesc,
  clearSearchBtn, listFooter, footerCount, pageBtn, pageInfo,
} from "./DataTable.styles";

const BREAKPOINT_MD = 768;

const props = withDefaults(defineProps<{
  items: T[];
  columns: DataTableColumn[];
  isLoading?: boolean;
  searchable?: boolean;
  searchPlaceholder?: string;
  searchFields?: string[];
  itemIdKey?: string;
  /** Show the selection column + bulk actions. Set false for display-only tables. */
  selectable?: boolean;
  /** Override the scrollable body max-height (any CSS length, or "none"). */
  bodyMaxHeight?: string;
  /** Override user-visible strings for i18n. */
  labels?: Partial<DataTableLabels>;
  /** Where sorting runs. "client" sorts in-place; "server" only emits. */
  sortMode?: "client" | "server";
  /** Controlled sort state (use with v-model:sort). */
  sort?: DataTableSortState | null;
  /** Page size for client-side pagination. Omit to disable. */
  pageSize?: number;
  /** Controlled current page (use with v-model:page). */
  page?: number;
}>(), {
  isLoading: false,
  searchable: false,
  searchPlaceholder: "Search...",
  searchFields: () => [],
  itemIdKey: "id",
  selectable: true,
  sortMode: "client",
  sort: undefined,
  pageSize: undefined,
  page: undefined,
});

const emit = defineEmits<{
  "update:selected": [string[]];
  "update:sort": [DataTableSortState | null];
  "update:page": [number];
}>();

// ── Labels (i18n) ──
const DEFAULT_LABELS: DataTableLabels = {
  search: "Search",
  searchPlaceholder: "Search...",
  clearSearch: "Clear search",
  selectAll: "Select all",
  deselectAll: "Deselect all",
  select: "Select",
  deselect: "Deselect",
  selectRow: "Select row",
  actions: "Actions",
  selected: "{count} selected",
  noResultsTitle: 'No results for "{term}"',
  noResultsDesc: "Try a different search term.",
  clearSearchBtn: "Clear search",
  footerCount: "{shown} of {total} items",
  previousPage: "Previous page",
  nextPage: "Next page",
  pageOf: "Page {page} of {pages}",
};

const L = computed<DataTableLabels>(() => ({ ...DEFAULT_LABELS, ...props.labels }));

function fmt(str: string, vars: Record<string, string | number>): string {
  return str.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ""));
}

// ── Selection (Set-based, immutable updates) ──
const selectedSet = ref(new Set<string>());
const selectedSize = computed(() => selectedSet.value.size);
const isMobile = ref(false);
const selectMode = computed(() => isMobile.value && selectedSize.value > 0);
const selectedItems = computed(() => props.items.filter(i => selectedSet.value.has(getItemId(i))));

function toggleItem(id: string, idx: number) {
  const next = new Set(selectedSet.value);
  next.has(id) ? next.delete(id) : next.add(id);
  selectedSet.value = next;
  lastClickedIdx.value = idx;
}

// Shift+Click range select
const lastClickedIdx = ref(-1);

function onCheckboxClick(e: MouseEvent, itemId: string, idx: number) {
  // Don't double-toggle if mousedown already toggled this checkbox
  if (suppressCheckboxClick) { suppressCheckboxClick = false; return; }
  if (e.shiftKey && lastClickedIdx.value !== -1 && lastClickedIdx.value !== idx) {
    e.preventDefault();
    const start = Math.min(lastClickedIdx.value, idx);
    const end = Math.max(lastClickedIdx.value, idx);
    const targetState = !selectedSet.value.has(itemId);
    const next = new Set(selectedSet.value);
    for (let i = start; i <= end; i++) {
      const id = getItemId(viewItems.value[i]);
      if (targetState) next.add(id);
      else next.delete(id);
    }
    selectedSet.value = next;
  } else {
    toggleItem(itemId, idx);
  }
  // Keep drag-to-select direction in sync with checkbox action
  dragTargetState.value = selectedSet.value.has(itemId);
}

function toggleAll() {
  if (isAllSelected() || isIndeterminate()) selectedSet.value = new Set();
  else selectedSet.value = new Set(viewItems.value.map(i => getItemId(i)));
}

function isAllSelected(): boolean {
  const ids = viewItems.value.map(i => getItemId(i));
  return ids.length > 0 && ids.every(id => selectedSet.value.has(id));
}

function isIndeterminate(): boolean {
  const ids = viewItems.value.map(i => getItemId(i));
  return ids.some(id => selectedSet.value.has(id)) && !isAllSelected();
}

function ariaCheckedValue(): "true" | "false" | "mixed" {
  if (isIndeterminate()) return "mixed";
  return isAllSelected() ? "true" : "false";
}

watch(() => selectedSet.value.size, () => emit("update:selected", [...selectedSet.value]));

// ── Safe ID (fail fast in dev on missing id) ──
function getItemId(item: T): string {
  const raw = (item as Record<string, unknown>)[props.itemIdKey];
  if (raw != null && String(raw).length > 0) return String(raw);
  if (import.meta.env.DEV) {
    throw new Error(
      `[DataTable] item is missing an id for itemIdKey "${props.itemIdKey}". ` +
      `Set a valid itemIdKey prop or ensure every item has that field.`,
    );
  }
  return "";
}

// ── Search (debounced) ──
const searchRaw = ref("");
const search = ref("");
let searchTimer: ReturnType<typeof setTimeout>;
watch(searchRaw, (v) => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => { search.value = v; }, 150);
});

const filteredItems = computed(() => {
  const q = search.value.toLowerCase().trim();
  if (!q) return props.items;
  const fields = props.searchFields?.length ? props.searchFields : props.columns.map(c => c.key);
  return props.items.filter(item =>
    fields.some(f => {
      const val = (item as Record<string, unknown>)[f];
      return val != null && String(val).toLowerCase().includes(q);
    }),
  );
});

// ── Sorting ──
const sortControlled = computed(() => props.sort !== undefined);
const internalSort = ref<DataTableSortState | null>(null);
const currentSort = computed<DataTableSortState | null>(() =>
  sortControlled.value ? (props.sort ?? null) : internalSort.value,
);

function setSort(next: DataTableSortState | null) {
  if (!sortControlled.value) internalSort.value = next;
  emit("update:sort", next);
}

function onHeaderClick(col: DataTableColumn) {
  if (!col.sortable) return;
  const cur = currentSort.value;
  let next: DataTableSortState | null;
  if (cur?.key !== col.key) next = { key: col.key, dir: "asc" };
  else if (cur.dir === "asc") next = { key: col.key, dir: "desc" };
  else next = null; // desc → clear
  setSort(next);
}

const sortedItems = computed(() => {
  const cur = currentSort.value;
  if (props.sortMode !== "client" || !cur) return filteredItems.value;
  const { key, dir } = cur;
  const mul = dir === "asc" ? 1 : -1;
  return [...filteredItems.value].sort((a, b) => {
    const av = (a as Record<string, unknown>)[key];
    const bv = (b as Record<string, unknown>)[key];
    if (av == null && bv == null) return 0;
    if (av == null) return 1;
    if (bv == null) return -1;
    if (typeof av === "number" && typeof bv === "number") return (av - bv) * mul;
    return String(av).localeCompare(String(bv)) * mul;
  });
});

// ── Pagination (client-side) ──
const paginated = computed(() => typeof props.pageSize === "number" && props.pageSize > 0);
const totalPages = computed(() =>
  paginated.value && props.pageSize
    ? Math.max(1, Math.ceil(sortedItems.value.length / props.pageSize))
    : 1,
);
const pageControlled = computed(() => props.page !== undefined);
const internalPage = ref(1);
const currentPage = computed(() => {
  const p = pageControlled.value ? (props.page ?? 1) : internalPage.value;
  return Math.min(Math.max(1, p), totalPages.value);
});

function setPage(p: number) {
  const clamped = Math.min(Math.max(1, p), totalPages.value);
  if (!pageControlled.value) internalPage.value = clamped;
  emit("update:page", clamped);
}

// Reset internal page when the dataset changes shape.
watch([filteredItems, currentSort], () => {
  if (!pageControlled.value && internalPage.value > totalPages.value) {
    internalPage.value = totalPages.value;
  }
});

const viewItems = computed(() => {
  if (!paginated.value || !props.pageSize) return sortedItems.value;
  const start = (currentPage.value - 1) * props.pageSize;
  return sortedItems.value.slice(start, start + props.pageSize);
});

// Pre-resolve id + index once per visible row.
const rowsWithIds = computed(() =>
  viewItems.value.map((item, idx) => ({ item, id: getItemId(item), idx })),
);

const slots = useSlots();
const hasActions = computed(() => !!slots.actions);
const gridTemplate = computed(() => {
  const prefix = props.selectable ? "40px " : "";
  const suffix = hasActions.value ? " 48px" : "";
  return `${prefix}${props.columns.map(c => c.width).join(" ")}${suffix}`;
});

const bodyMaxHeightStyle = computed(() =>
  props.bodyMaxHeight !== undefined ? { maxHeight: props.bodyMaxHeight } : {},
);

// ── Drag-to-select (paint selection) ──
const dragSelecting = ref(false);
const dragTargetState = ref(false);
const dragStartIdx = ref(-1);
let suppressCheckboxClick = false;

function startDragSelect(idx: number, itemId: string, isCheckbox: boolean) {
  dragSelecting.value = true;
  dragStartIdx.value = idx;
  dragTargetState.value = !selectedSet.value.has(itemId);
  toggleItem(itemId, idx);
  if (isCheckbox) suppressCheckboxClick = true;
}

function applyDragRange(idx: number) {
  if (!dragSelecting.value || dragStartIdx.value === -1) return;
  const start = Math.min(dragStartIdx.value, idx);
  const end = Math.max(dragStartIdx.value, idx);
  const next = new Set(selectedSet.value);
  for (let i = start; i <= end; i++) {
    const id = getItemId(viewItems.value[i]);
    if (dragTargetState.value) next.add(id);
    else next.delete(id);
  }
  selectedSet.value = next;
}

function stopDragSelect() {
  dragSelecting.value = false;
  dragStartIdx.value = -1;
  touchDragActive = false;
  setTimeout(() => { suppressCheckboxClick = false; }, 0);
}

// Desktop: mouse
function onRowMouseDown(e: MouseEvent, itemId: string, idx: number) {
  if (!props.selectable || e.button !== 0) return;
  const target = e.target as HTMLElement;
  const onCheckbox = !!target.closest("button[role='checkbox'], [role='checkbox']");
  startDragSelect(idx, itemId, onCheckbox);
  e.preventDefault();
}

function onRowMouseEnter(idx: number) {
  if (!props.selectable) return;
  applyDragRange(idx);
}

// Mobile: touch — only activate if started on a checkbox, else allow native scroll
let touchDragActive = false;

function onRowTouchStart(e: TouchEvent, itemId: string, idx: number) {
  if (!props.selectable) return;
  const target = e.target as HTMLElement;
  const onCheckbox = !!target.closest("button[role='checkbox'], [role='checkbox']");
  if (!onCheckbox && !selectMode.value) return;
  touchDragActive = true;
  startDragSelect(idx, itemId, onCheckbox);
  e.preventDefault();
}

function onRowTouchMove(e: TouchEvent) {
  if (!touchDragActive) return;
  e.preventDefault();
  const touch = e.touches[0];
  const el = document.elementFromPoint(touch.clientX, touch.clientY);
  if (!el) return;
  const row = el.closest("[data-row-idx]") as HTMLElement | null;
  if (!row) return;
  const idx = parseInt(row.dataset.rowIdx || "-1");
  if (idx >= 0) applyDragRange(idx);
}

// ── Responsive ──
function onResize() { isMobile.value = window.innerWidth < BREAKPOINT_MD; }

// ── Keyboard shortcuts ──
function onKeyDown(e: KeyboardEvent) {
  if (!props.selectable) return;
  if ((e.key === "a" || e.key === "A") && (e.metaKey || e.ctrlKey)) {
    // Ctrl/Cmd+A: select all visible
    if (document.activeElement?.closest("input, textarea, [contenteditable]")) return;
    e.preventDefault();
    selectedSet.value = new Set(viewItems.value.map(i => getItemId(i)));
  } else if (e.key === "Escape") {
    selectedSet.value = new Set();
  }
}

onMounted(() => {
  onResize();
  window.addEventListener("resize", onResize);
  window.addEventListener("mouseup", stopDragSelect);
  window.addEventListener("touchend", stopDragSelect);
  window.addEventListener("keydown", onKeyDown);
});
onUnmounted(() => {
  clearTimeout(searchTimer);
  window.removeEventListener("resize", onResize);
  window.removeEventListener("mouseup", stopDragSelect);
  window.removeEventListener("touchend", stopDragSelect);
  window.removeEventListener("keydown", onKeyDown);
});
</script>

<template>
  <div :aria-busy="isLoading || undefined">
    <!-- Desktop toolbar -->
    <div v-if="searchable && items.length > 0 && !isLoading && !isMobile" :class="toolbar">
      <div :class="searchWrap">
        <Search :class="searchIcon" aria-hidden="true" />
        <input v-model="searchRaw" :class="searchInput" type="text" :placeholder="L.searchPlaceholder" :aria-label="L.search" />
        <button v-if="searchRaw" :class="searchClear" @click="searchRaw = ''" :aria-label="L.clearSearch"><X :class="searchClearIcon" /></button>
      </div>
      <div v-if="selectable" v-show="selectedSize" :class="bulkBar">
        <span :class="bulkCount">{{ fmt(L.selected, { count: selectedSize }) }}</span>
        <UiTooltip :content="L.deselectAll">
          <button type="button" :class="deselectBtn" @click="selectedSet = new Set()" :aria-label="L.deselectAll"><X :class="deselectIcon" /></button>
        </UiTooltip>
        <slot name="bulk-actions" :selected="[...selectedSet]" :selected-items="selectedItems" />
      </div>
    </div>

    <!-- Mobile: sticky toolbar (search + select-all + bulk) -->
    <div v-if="searchable && items.length > 0 && !isLoading && isMobile" :class="mobileToolbar">
      <div :class="mobileSearchRow">
        <div :class="searchWrap">
          <Search :class="searchIcon" aria-hidden="true" />
          <input v-model="searchRaw" :class="searchInput" type="text" :placeholder="L.searchPlaceholder" :aria-label="L.search" />
          <button v-if="searchRaw" :class="searchClear" @click="searchRaw = ''" :aria-label="L.clearSearch"><X :class="searchClearIcon" /></button>
        </div>
      </div>
      <div :class="mobileActionsRow">
        <UiTooltip v-if="selectable" :content="isAllSelected() && !isIndeterminate() ? L.deselectAll : L.selectAll">
          <button type="button" :class="mobileSelectAll" @click="toggleAll">
            <span :class="[nativeCheckbox, (isAllSelected() || isIndeterminate()) && 'checked']" aria-hidden="true">
              <Check v-if="isAllSelected() && !isIndeterminate()" :class="checkIcon" />
              <Minus v-else-if="isIndeterminate()" :class="checkIcon" />
            </span>
            {{ isAllSelected() && !isIndeterminate() ? L.deselectAll : L.selectAll }}
          </button>
        </UiTooltip>
        <div v-if="selectable && selectedSize" :class="mobileBulkActions">
          <slot name="bulk-actions" :selected="[...selectedSet]" :selected-items="selectedItems" />
        </div>
      </div>
    </div>

    <!-- Filtered empty -->
    <div v-if="search && filteredItems.length === 0 && !isLoading" :class="filteredEmpty">
      <SearchX :class="filteredEmptyIcon" />
      <p :class="filteredEmptyTitle">{{ fmt(L.noResultsTitle, { term: search }) }}</p>
      <p :class="filteredEmptyDesc">{{ L.noResultsDesc }}</p>
      <button type="button" :class="clearSearchBtn" @click="searchRaw = ''">{{ L.clearSearchBtn }}</button>
    </div>

    <template v-else>
      <!-- Desktop table -->
      <div v-if="!isMobile" :class="table">
        <div :class="tableHead" :style="{ gridTemplateColumns: gridTemplate }">
          <div v-if="selectable" :class="checkCell">
            <UiTooltip :content="isAllSelected() ? L.deselectAll : L.selectAll">
              <button type="button" :class="[nativeCheckbox, (isAllSelected() || isIndeterminate()) && 'checked']"
                role="checkbox" :aria-checked="ariaCheckedValue()"
                :aria-label="isAllSelected() ? L.deselectAll : L.selectAll"
                @click="toggleAll">
                <Check v-if="isAllSelected() && !isIndeterminate()" :class="checkIcon" />
                <Minus v-else-if="isIndeterminate()" :class="checkIcon" />
              </button>
            </UiTooltip>
          </div>
          <div v-for="col in columns" :key="col.key" :class="[headerCell, col.hideMobile && hideMobileCell]">
            <slot :name="`header-${col.key}`">
              <button v-if="col.sortable" type="button" :class="sortBtn"
                :aria-label="`${col.label}, ${currentSort?.key === col.key ? currentSort.dir : 'none'}`"
                @click="onHeaderClick(col)">
                <span>{{ col.label }}</span>
                <ArrowUp v-if="currentSort?.key === col.key && currentSort.dir === 'asc'" :class="[sortIcon, sortIconActive]" />
                <ArrowDown v-else-if="currentSort?.key === col.key && currentSort.dir === 'desc'" :class="[sortIcon, sortIconActive]" />
                <ChevronsUpDown v-else :class="sortIcon" />
              </button>
              <span v-else :class="headerLabel">{{ col.label }}</span>
            </slot>
          </div>
          <div v-if="hasActions" :class="headerCell" role="columnheader" :aria-label="L.actions" />
        </div>
        <div :class="tableBody" role="rowgroup" :style="bodyMaxHeightStyle">
          <!-- Skeleton rows while loading -->
          <template v-if="isLoading">
            <div
              v-for="i in 5"
              :key="`sk-${i}`"
              :class="tableRow"
              :style="{ gridTemplateColumns: gridTemplate }"
              aria-hidden="true"
            >
              <div v-if="selectable" :class="checkCell"><UiSkeleton width="16px" height="16px" /></div>
              <div v-for="col in columns" :key="col.key" :class="[dataCell, col.hideMobile && hideMobileCell]">
                <UiSkeleton variant="text" :width="i % 2 === 0 ? '55%' : '70%'" />
              </div>
              <div v-if="hasActions" :class="dataCell" />
            </div>
          </template>
          <!-- Data rows -->
          <template v-else>
            <div
              v-for="row in rowsWithIds"
              :key="row.id"
              :class="tableRow"
              :style="{ gridTemplateColumns: gridTemplate }"
              :data-row-idx="row.idx"
              @mousedown="onRowMouseDown($event, row.id, row.idx)"
              @mouseenter="onRowMouseEnter(row.idx)"
              @touchstart="onRowTouchStart($event, row.id, row.idx)"
              @touchmove="onRowTouchMove"
              @touchend="stopDragSelect"
            >
              <div v-if="selectable" :class="checkCell">
                <UiTooltip :content="selectedSet.has(row.id) ? L.deselect : L.select">
                  <button type="button" :class="[nativeCheckbox, selectedSet.has(row.id) && 'checked']"
                    role="checkbox" :aria-checked="selectedSet.has(row.id)"
                    :aria-label="L.selectRow" @click="onCheckboxClick($event, row.id, row.idx)">
                    <Check v-if="selectedSet.has(row.id)" :class="checkIcon" />
                  </button>
                </UiTooltip>
              </div>
              <div v-for="col in columns" :key="col.key" :class="[dataCell, col.hideMobile && hideMobileCell]">
                <slot :name="`cell-${col.key}`" :item="row.item" />
              </div>
              <div v-if="hasActions" :class="actionsCell">
                <DropdownMenuRoot>
                  <DropdownMenuTrigger as="button" :class="menuBtn" :aria-label="L.actions"><MoreHorizontal :class="menuBtnIcon" /></DropdownMenuTrigger>
                  <DropdownMenuContent :class="actionMenu" align="end" :side-offset="4">
                    <slot name="actions" :item="row.item" />
                  </DropdownMenuContent>
                </DropdownMenuRoot>
              </div>
            </div>
          </template>
        </div>
      </div>

      <!-- Mobile cards -->
      <div v-if="isMobile" :class="mobileList">
        <template v-if="isLoading">
          <div v-for="i in 5" :key="`sk-m-${i}`" :class="mobileCard" aria-hidden="true">
            <UiSkeleton variant="title" height="18px" :width="i % 2 === 0 ? '45%' : '65%'" />
            <UiSkeleton variant="text" height="12px" :width="i % 3 === 0 ? '70%' : '55%'" />
          </div>
        </template>
        <template v-else>
          <div
            v-for="row in rowsWithIds"
            :key="row.id"
            :class="[mobileCard, selectable && selectedSet.has(row.id) && mobileCardSelected]"
            :data-row-idx="row.idx"
            @touchstart="onRowTouchStart($event, row.id, row.idx)"
            @touchmove="onRowTouchMove"
            @touchend="stopDragSelect"
          >
            <slot name="mobile-card" :item="row.item" :selected="selectedSet.has(row.id)" :toggle-select="() => toggleItem(row.id, row.idx)" :select-mode="selectMode" />
          </div>
        </template>
      </div>

      <!-- Footer -->
      <div v-if="items.length > 0" :class="listFooter">
        <span :class="footerCount">{{ fmt(L.footerCount, { shown: filteredItems.length, total: items.length }) }}</span>
        <template v-if="paginated && totalPages > 1">
          <button type="button" :class="pageBtn" :disabled="currentPage <= 1" :aria-label="L.previousPage" @click="setPage(currentPage - 1)"><ChevronLeft :class="sortIcon" /></button>
          <span :class="pageInfo">{{ fmt(L.pageOf, { page: currentPage, pages: totalPages }) }}</span>
          <button type="button" :class="pageBtn" :disabled="currentPage >= totalPages" :aria-label="L.nextPage" @click="setPage(currentPage + 1)"><ChevronRight :class="sortIcon" /></button>
        </template>
      </div>
    </template>
  </div>
</template>

<style scoped>
.bulk-bar-enter-active, .bulk-bar-leave-active { transition: opacity 150ms ease-out; }
.bulk-bar-enter-from, .bulk-bar-leave-to { opacity: 0; }
</style>
