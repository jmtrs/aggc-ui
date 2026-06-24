export interface DataTableColumn {
  key: string;
  label: string;
  width: string;
  hideMobile?: boolean;
  /** Enable client-side sorting on this column's header. */
  sortable?: boolean;
}

export type DataTableSortDir = "asc" | "desc";

export interface DataTableSortState {
  key: string;
  dir: DataTableSortDir;
}

/** Where sorting happens. "client" sorts in-component; "server" only emits. */
export type DataTableSortMode = "client" | "server";

/**
 * All user-visible strings. Override any subset via the `labels` prop for i18n.
 * Placeholders: {count}, {term}, {shown}, {total}, {page}, {pages}.
 */
export interface DataTableLabels {
  search: string;
  searchPlaceholder: string;
  clearSearch: string;
  selectAll: string;
  deselectAll: string;
  select: string;
  deselect: string;
  selectRow: string;
  actions: string;
  selected: string;
  noResultsTitle: string;
  noResultsDesc: string;
  clearSearchBtn: string;
  footerCount: string;
  previousPage: string;
  nextPage: string;
  pageOf: string;
}
