import { css } from "@styled/css";

// ── Toolbar ──

export const toolbar = css({
  display: { base: "none", md: "flex" },
  alignItems: "center",
  gap: "3",
  pb: "3",
  flexWrap: "wrap",
});

export const searchWrap = css({
  position: "relative",
  flex: "1",
  maxW: { base: "100%", lg: "360px" },
  minW: { base: "0", lg: "180px" },
});

export const searchIcon = css({
  position: "absolute",
  left: "3",
  top: "50%",
  transform: "translateY(-50%)",
  w: "4",
  h: "4",
  color: "text.muted",
  pointerEvents: "none",
});

export const searchInput = css({
  w: "full",
  pl: "9",
  pr: "9",
  py: { base: "2.5", md: "2" },
  borderRadius: { base: "xl", md: "lg" },
  border: "1px solid",
  borderColor: "border.soft",
  bg: { base: "bg.cardAlt", md: "bg.input" },
  color: "text.primary",
  fontSize: "sm",
  transition: "border-color 160ms ease-out, box-shadow 160ms ease-out",
  _placeholder: { color: "text.muted" },
  _focusVisible: {
    outline: "none",
    borderColor: "border.accent",
    boxShadow: "0 0 0 3px var(--colors-bg-accentSoft)",
  },
});

export const searchClear = css({
  position: "absolute",
  right: "2",
  top: "50%",
  transform: "translateY(-50%)",
  w: "6",
  h: "6",
  borderRadius: "full",
  border: "none",
  bg: "transparent",
  color: "text.muted",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "color 160ms ease-out, background-color 160ms ease-out",
  _hover: { color: "text.primary", bg: "bg.hover" },
});

export const searchClearIcon = css({
  w: "3.5",
  h: "3.5",
});

// ── Bulk bar ──

export const bulkBar = css({
  display: "flex",
  alignItems: "center",
  gap: "2",
  marginLeft: "auto",
  flexShrink: "0",
  whiteSpace: "nowrap",
});

export const bulkCount = css({
  fontSize: "xs",
  fontWeight: "600",
  color: "text.accent",
});

// ── Table ──

export const table = css({
  display: { base: "none", md: "block" },
  border: "1px solid",
  borderColor: "border.soft",
  borderRadius: "lg",
  overflow: "hidden",
});

export const tableHead = css({
  display: "grid",
  alignItems: "center",
  gap: "3",
  px: "4",
  py: "2.5",
  position: "sticky",
  top: "0",
  zIndex: "2",
  bg: "bg.card",
});

export const tableBody = css({
  display: "flex",
  flexDirection: "column",
  maxH: "calc(100vh - 320px)",
  overflowY: "auto",
});

export const tableRow = css({
  display: "grid",
  alignItems: "center",
  gap: "3",
  px: "4",
  py: "2.5",
  // Very subtle inter-row separator. Raw rgba (with _dark override) instead of
  // the border.soft token so it never falls back to currentColor if the token
  // var is unresolved in a consumer's dev context.
  borderBottomWidth: "1px",
  borderBottomStyle: "solid",
  borderBottomColor: "rgba(15,23,42,0.05)",
  _dark: { borderBottomColor: "rgba(255,255,255,0.06)" },
  transition: "background-color 160ms ease-out",
  _last: { borderBottom: "none" },
  _hover: { bg: "bg.hover" },
  userSelect: "none",
});

export const headerCell = css({
  display: "flex",
  alignItems: "center",
  minWidth: "0",
});

export const headerLabel = css({
  fontSize: "xs",
  fontWeight: "600",
  color: "text.muted",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  userSelect: "none",
});

export const sortBtn = css({
  display: "inline-flex",
  alignItems: "center",
  gap: "1",
  bg: "transparent",
  border: "none",
  padding: "0",
  cursor: "pointer",
  color: "text.muted",
  font: "inherit",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  fontSize: "xs",
  fontWeight: "600",
  transition: "color 160ms ease-out",
  _hover: { color: "text.secondary" },
});

export const sortIcon = css({
  w: "3",
  h: "3",
  opacity: "0.5",
});

export const sortIconActive = css({
  opacity: "1",
  color: "text.accent",
});

export const dataCell = css({
  display: "flex",
  alignItems: "center",
  minWidth: "0",
});

export const actionsCell = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
});

export const hideMobileCell = css({
  display: { base: "none", lg: "flex" },
});

// ── Checkbox ──

export const checkCell = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const nativeCheckbox = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  w: "4",
  h: "4",
  borderRadius: "sm",
  border: "1px solid",
  borderColor: "border.default",
  bg: "transparent",
  cursor: "pointer",
  flexShrink: "0",
  transition: "background-color 160ms ease, border-color 160ms ease",
  "&.checked": {
    bg: "bg.accentStrong",
    borderColor: "border.accent",
  },
});

export const checkIcon = css({
  w: "3",
  h: "3",
  color: "text.inverse",
});

// ── Menu button ──

export const menuBtn = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  w: "8",
  h: "8",
  borderRadius: "md",
  border: "none",
  bg: "transparent",
  color: "text.muted",
  cursor: "pointer",
  transition: "background-color 160ms ease-out, color 160ms ease-out",
  _hover: { bg: "bg.hover", color: "text.secondary" },
});

export const menuBtnIcon = css({
  w: "4",
  h: "4",
});

// ── Dropdown menu ──

export const actionMenu = css({
  bg: "bg.menu",
  border: "1px solid",
  borderColor: "border.soft",
  borderRadius: "lg",
  boxShadow:
    "0 12px 40px -8px rgba(15,23,42,0.12), 0 4px 12px -4px rgba(15,23,42,0.06)",
  minW: "180px",
  py: "1",
  zIndex: "60",
  _dark: {
    boxShadow:
      "0 12px 40px -8px rgba(0,0,0,0.56), 0 4px 12px -4px rgba(0,0,0,0.32)",
  },
});

export const menuItem = css({
  px: "3",
  py: "2.5",
  fontSize: "sm",
  color: "text.secondary",
  cursor: "pointer",
  bg: "transparent",
  border: "none",
  textAlign: "left",
  w: "full",
  transition: "background-color 160ms ease-out, color 160ms ease-out",
  _hover: { bg: "bg.hover", color: "text.primary" },
});

export const menuItemDanger = css({
  color: "text.error",
  _hover: { bg: "bg.dangerSoft", color: "text.error" },
});

export const menuSeparator = css({
  h: "1px",
  bg: "border.soft",
  mx: "2",
  my: "1",
});

// ── Mobile ──

export const mobileList = css({
  display: { base: "flex", md: "none" },
  flexDirection: "column",
  gap: "2",
});

export const mobileCard = css({
  bg: "bg.card",
  borderRadius: "lg",
  border: "1px solid",
  borderColor: "border.soft",
  px: "4",
  py: "3",
  display: "flex",
  flexDirection: "column",
  gap: "3",
  transition: "background-color 120ms ease-out, border-color 120ms ease-out",
});

export const mobileCardSelected = css({
  borderColor: "border.accent",
  bg: "bg.accentSoft",
});

// ── States ──

export const filteredEmpty = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  py: "16",
  px: "4",
  color: "text.secondary",
  textAlign: "center",
  gap: "4",
});

export const filteredEmptyIcon = css({
  w: "10",
  h: "10",
  color: "text.muted",
  opacity: "0.4",
});

export const filteredEmptyTitle = css({
  fontFamily: "heading",
  fontSize: "md",
  fontWeight: "600",
  color: "text.primary",
});

export const filteredEmptyDesc = css({
  color: "text.secondary",
  fontSize: "sm",
  maxWidth: "90",
  lineHeight: "1.6",
});

export const clearSearchBtn = css({
  display: "inline-flex",
  alignItems: "center",
  px: "4",
  py: "1.5",
  fontSize: "sm",
  color: "text.secondary",
  bg: "transparent",
  border: "1px solid",
  borderColor: "border.soft",
  borderRadius: "md",
  cursor: "pointer",
  transition: "background-color 160ms ease, color 160ms ease",
  _hover: { bg: "bg.hover", color: "text.primary" },
});

export const listFooter = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "3",
  pt: "3",
  flexWrap: "wrap",
});

export const footerCount = css({
  fontSize: "xs",
  color: "text.muted",
  fontWeight: "500",
});

export const pageBtn = css({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  w: "7",
  h: "7",
  borderRadius: "md",
  border: "1px solid",
  borderColor: "border.soft",
  bg: "transparent",
  color: "text.secondary",
  cursor: "pointer",
  transition: "background-color 160ms ease, color 160ms ease",
  _hover: { bg: "bg.hover", color: "text.primary" },
  _disabled: { opacity: "0.4", cursor: "not-allowed", _hover: { bg: "transparent", color: "text.secondary" } },
});

export const pageInfo = css({
  fontSize: "xs",
  color: "text.muted",
  fontWeight: "500",
  whiteSpace: "nowrap",
});

// ── Mobile toolbar ──

export const mobileToolbar = css({
  display: { base: "flex", md: "none" },
  flexDirection: "column",
  position: "sticky",
  top: "0",
  zIndex: "10",
  bg: "bg.canvas",
  pb: "1",
  mb: "2",
  boxShadow: "0 6px 16px -2px rgba(15,23,42,0.10)",
  _dark: {
    boxShadow: "0 6px 16px -2px rgba(0,0,0,0.40)",
  },
});

export const mobileSearchRow = css({
  display: { base: "flex", md: "none" },
  pt: "3",
  pb: "2",
  px: "4",
});

export const mobileActionsRow = css({
  display: { base: "flex", md: "none" },
  alignItems: "center",
  gap: "2",
  h: "10",
  px: "4",
  pb: "2",
  flexWrap: "wrap",
  overflow: "hidden",
});

export const mobileSelectAll = css({
  display: "flex",
  alignItems: "center",
  gap: "2",
  fontSize: "sm",
  color: "text.secondary",
  cursor: "pointer",
  bg: "transparent",
  border: "none",
  padding: "0",
  flexShrink: "0",
  whiteSpace: "nowrap",
});

export const mobileBulkActions = css({
  display: "flex",
  alignItems: "center",
  gap: "2",
  marginLeft: "auto",
  flexShrink: "0",
});

// ── Deselect button (in bulk bar) ──

export const deselectBtn = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  w: "6",
  h: "6",
  borderRadius: "md",
  border: "none",
  bg: "transparent",
  color: "text.muted",
  cursor: "pointer",
  transition: "background-color 160ms ease-out, color 160ms ease-out",
  _hover: { bg: "bg.hover", color: "text.secondary" },
});

export const deselectIcon = css({
  w: "3.5",
  h: "3.5",
  color: "text.muted",
});
