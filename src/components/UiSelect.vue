<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, useId, watch } from "vue";
import { Check, ChevronDown } from "lucide-vue-next";
import {
  uiSelectCheckClass,
  uiSelectChevronClass,
  uiSelectMenuClass,
  uiSelectMenuClassExtra,
  uiSelectOptionClass,
  uiSelectOptionContentClass,
  uiSelectOptionDescriptionClass,
  uiSelectOptionLabelClass,
  uiSelectRootClass,
  uiSelectTriggerClass,
  uiSelectValueTextClass,
  uiSelectValueWrapClass,
} from "./UiSelect.styles";

type UiSelectOption = {
  label: string;
  value: string;
  description?: string;
};

const props = withDefaults(
  defineProps<{
    modelValue: string;
    options: UiSelectOption[];
    id?: string;
    name?: string;
    placeholder?: string;
    disabled?: boolean;
    invalid?: boolean;
    size?: "sm" | "md";
    ariaLabel?: string;
    ariaLabelledby?: string;
    ariaDescribedby?: string;
  }>(),
  {
    id: undefined,
    name: undefined,
    placeholder: "Select an option",
    disabled: false,
    invalid: false,
    size: "md",
    ariaLabel: undefined,
    ariaLabelledby: undefined,
    ariaDescribedby: undefined,
  }
);

const emit = defineEmits<{
  "update:modelValue": [string];
}>();

const rootRef = ref<HTMLElement | null>(null);
const triggerRef = ref<HTMLButtonElement | null>(null);
const optionRefs = ref<(HTMLButtonElement | null)[]>([]);
const open = ref(false);
const activeIndex = ref(-1);
const generatedId = useId();
const baseId = computed(() => props.id ?? `ui-select-${generatedId}`);
const listId = computed(() => `${baseId.value}-listbox`);

const selectedOption = computed(
  () => props.options.find((option) => option.value === props.modelValue) ?? null
);

function setActiveIndex(index: number) {
  if (!props.options.length) {
    activeIndex.value = -1;
    return;
  }

  const normalized = (index + props.options.length) % props.options.length;
  activeIndex.value = normalized;
  nextTick(() => {
    optionRefs.value[normalized]?.focus();
  });
}

function closeMenu() {
  open.value = false;
  activeIndex.value = -1;
}

async function openMenu() {
  if (props.disabled || !props.options.length) {
    return;
  }

  open.value = true;
  const selectedIndex = props.options.findIndex((option) => option.value === props.modelValue);
  await nextTick();
  setActiveIndex(selectedIndex >= 0 ? selectedIndex : 0);
}

function toggleMenu() {
  if (open.value) {
    closeMenu();
    return;
  }
  void openMenu();
}

function selectOption(value: string) {
  emit("update:modelValue", value);
  closeMenu();
  nextTick(() => {
    triggerRef.value?.focus();
  });
}

function onTriggerKeydown(event: KeyboardEvent) {
  if (props.disabled) {
    return;
  }

  if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    void openMenu();
  }
}

function onOptionKeydown(event: KeyboardEvent, index: number) {
  switch (event.key) {
    case "ArrowDown":
      event.preventDefault();
      setActiveIndex(index + 1);
      break;
    case "ArrowUp":
      event.preventDefault();
      setActiveIndex(index - 1);
      break;
    case "Home":
      event.preventDefault();
      setActiveIndex(0);
      break;
    case "End":
      event.preventDefault();
      setActiveIndex(props.options.length - 1);
      break;
    case "Escape":
      event.preventDefault();
      closeMenu();
      triggerRef.value?.focus();
      break;
    case "Enter":
    case " ":
      event.preventDefault();
      selectOption(props.options[index].value);
      break;
  }
}

function onPointerDown(event: MouseEvent) {
  if (!open.value) {
    return;
  }

  if (rootRef.value?.contains(event.target as Node)) {
    return;
  }

  closeMenu();
}

watch(
  () => props.options,
  () => {
    optionRefs.value = [];
    if (!props.options.some((option) => option.value === props.modelValue)) {
      closeMenu();
    }
  }
);

watch(
  () => props.disabled,
  (disabled) => {
    if (disabled) {
      closeMenu();
    }
  }
);

onMounted(() => {
  document.addEventListener("pointerdown", onPointerDown);
});

onBeforeUnmount(() => {
  document.removeEventListener("pointerdown", onPointerDown);
});
</script>

<template>
  <div ref="rootRef" :class="uiSelectRootClass({ open })">
    <button
      ref="triggerRef"
      type="button"
      :id="baseId"
      :name="name"
      :disabled="disabled"
      :class="uiSelectTriggerClass({ size, open, selected: Boolean(selectedOption), disabled })"
      aria-haspopup="listbox"
      :aria-expanded="open"
      :aria-controls="listId"
      :aria-label="ariaLabel"
      :aria-labelledby="ariaLabelledby"
      :aria-describedby="ariaDescribedby"
      :aria-invalid="invalid || undefined"
      @click="toggleMenu"
      @keydown="onTriggerKeydown"
    >
      <span :class="uiSelectValueWrapClass">
        <span :class="uiSelectValueTextClass">
          {{ selectedOption?.label ?? placeholder }}
        </span>
      </span>
      <ChevronDown :size="16" :class="uiSelectChevronClass({ open })" />
    </button>

    <div
      v-if="open"
      :id="listId"
      :class="[uiSelectMenuClass, uiSelectMenuClassExtra]"
      role="listbox"
      :aria-activedescendant="activeIndex >= 0 ? `${baseId}-${activeIndex}` : undefined"
    >
      <button
        v-for="(option, index) in options"
        :id="`${baseId}-${index}`"
        :key="option.value"
        :ref="(node) => (optionRefs[index] = node as HTMLButtonElement | null)"
        type="button"
        role="option"
        :aria-selected="option.value === modelValue"
        :class="uiSelectOptionClass({ size, active: activeIndex === index || option.value === modelValue })"
        @mouseenter="activeIndex = index"
        @click="selectOption(option.value)"
        @keydown="onOptionKeydown($event, index)"
        >
          <span :class="uiSelectOptionContentClass">
          <span :class="uiSelectOptionLabelClass">{{ option.label }}</span>
          <span
            v-if="option.description && size === 'md'"
            :class="uiSelectOptionDescriptionClass"
          >
            {{ option.description }}
          </span>
        </span>
        <Check :size="15" :class="uiSelectCheckClass({ selected: option.value === modelValue })" />
      </button>
    </div>
  </div>
</template>
