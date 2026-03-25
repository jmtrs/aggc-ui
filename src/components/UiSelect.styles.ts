import { cva, css } from "@styled/css";
import { dropdownRecipe } from "../styles";

export const uiSelectRootClass = cva({
  base: {
    position: "relative",
  },
  variants: {
    open: {
      true: { zIndex: "30" },
      false: { zIndex: "1" },
    },
  },
  defaultVariants: {
    open: false,
  },
});

export const uiSelectTriggerClass = cva({
  base: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "3",
    borderWidth: "1px",
    fontSize: "sm",
    overflow: "hidden",
    backdropFilter: "blur(24px) saturate(145%)",
    transition: "all 160ms ease",
  },
  variants: {
    size: {
      sm: {
        minHeight: "40px",
        borderRadius: "lg",
        px: "3",
        py: "2.5",
      },
      md: {
        minHeight: "48px",
        borderRadius: "xl",
        px: "4",
        py: "3",
      },
    },
    open: {
      true: {
        borderColor: "border.accent",
        bg: "bg.cardStrong",
        boxShadow: "0 18px 42px -28px rgba(49,94,255,0.42)",
      },
      false: {
        borderColor: "border.default",
        bg: "bg.input",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.22)",
      },
    },
    selected: {
      true: { color: "text.primary" },
      false: { color: "text.muted" },
    },
    disabled: {
      true: {
        cursor: "not-allowed",
        opacity: 0.55,
      },
      false: {
        cursor: "pointer",
      },
    },
  },
  compoundVariants: [
    {
      disabled: false,
      css: {
        _hover: {
          borderColor: "border.strong",
          bg: "bg.cardStrong",
        },
      },
    },
  ],
  defaultVariants: {
    size: "md",
    open: false,
    selected: false,
    disabled: false,
  },
});

export const uiSelectMenuClass = dropdownRecipe({
  placement: "anchored",
  density: "cozy",
});

export const uiSelectMenuClassExtra = css({
  width: "100%",
  zIndex: "30",
  maxHeight: "320px",
  overflowY: "auto",
  display: "grid",
});

export const uiSelectValueWrapClass = css({
  display: "block",
  textAlign: "left",
  minWidth: "0",
  flex: "1",
  overflow: "hidden",
});

export const uiSelectValueTextClass = css({
  display: "block",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

export const uiSelectChevronClass = cva({
  base: {
    color: "text.muted",
    transition: "transform 160ms ease",
  },
  variants: {
    open: {
      true: { transform: "rotate(180deg)" },
      false: { transform: "rotate(0deg)" },
    },
  },
  defaultVariants: {
    open: false,
  },
});

export const uiSelectOptionClass = cva({
  base: {
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "3",
    textAlign: "left",
    borderRadius: "xl",
    px: "3",
    borderWidth: "1px",
    cursor: "pointer",
    transition: "all 140ms ease",
    _hover: {
      bg: "bg.selected",
      borderColor: "border.accent",
    },
  },
  variants: {
    size: {
      sm: { py: "2.5" },
      md: { py: "3" },
    },
    active: {
      true: {
        color: "text.primary",
        bg: "bg.selected",
        borderColor: "border.accent",
      },
      false: {
        color: "text.secondary",
        bg: "transparent",
        borderColor: "transparent",
      },
    },
  },
  defaultVariants: {
    size: "md",
    active: false,
  },
});

export const uiSelectOptionContentClass = css({
  display: "grid",
  gap: "0.5",
  minWidth: "0",
});

export const uiSelectOptionLabelClass = css({
  fontSize: "sm",
  fontWeight: "600",
  minWidth: "0",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

export const uiSelectOptionDescriptionClass = css({
  color: "text.secondary",
  fontSize: "xs",
  lineHeight: "1.45",
  overflowWrap: "anywhere",
});

export const uiSelectCheckClass = cva({
  base: {
    color: "text.accent",
    transition: "opacity 140ms ease",
  },
  variants: {
    selected: {
      true: { opacity: 1 },
      false: { opacity: 0 },
    },
  },
  defaultVariants: {
    selected: false,
  },
});
