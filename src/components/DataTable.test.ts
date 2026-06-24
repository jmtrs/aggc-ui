import { mount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import DataTable from "./DataTable.vue";

// Stub UiTooltip so tests don't exercise reka-ui portal/floating in jsdom.
const globalStubs = {
  UiTooltip: { template: "<div><slot /></div>" },
};

interface TestItem {
  id: string;
  name: string;
  email: string;
}

const items: TestItem[] = [
  { id: "1", name: "Alice", email: "alice@example.com" },
  { id: "2", name: "Bob", email: "bob@example.com" },
];

const columns = [
  { key: "name", label: "Name", width: "1fr" },
  { key: "email", label: "Email", width: "1fr" },
];

function mountTable(props: Record<string, unknown> = {}, slots: Record<string, string> = {}) {
  return mount(DataTable<TestItem>, {
    props: { items, columns, isLoading: false, ...props } as never,
    slots,
    global: { stubs: globalStubs },
  });
}

describe("DataTable", () => {
  it("renders column headers", () => {
    const wrapper = mountTable();
    expect(wrapper.text()).toContain("Name");
    expect(wrapper.text()).toContain("Email");
  });

  it("renders rows from items", () => {
    const wrapper = mountTable({}, {
      "cell-name": `<template #cell-name="{ item }">{{ item.name }}</template>`,
    });
    expect(wrapper.text()).toContain("Alice");
    expect(wrapper.text()).toContain("Bob");
  });

  it("renders custom cell slots", () => {
    const wrapper = mountTable({}, {
      "cell-name": `<template #cell-name="{ item }"><strong>{{ item.name }}</strong></template>`,
    });
    expect(wrapper.html()).toContain("<strong>Alice</strong>");
  });

  it("renders search input when searchable", () => {
    const wrapper = mountTable({ searchable: true, searchFields: ["name", "email"] });
    expect(wrapper.find('input[aria-label="Search"]').exists()).toBe(true);
  });

  it("filters items by search", async () => {
    vi.useFakeTimers();
    const wrapper = mountTable(
      { searchable: true, searchFields: ["name"] },
      { "cell-name": `<template #cell-name="{ item }">{{ item.name }}</template>` },
    );

    const input = wrapper.find('input[aria-label="Search"]');
    await input.setValue("Alice");
    vi.advanceTimersByTime(200);
    await wrapper.vm.$nextTick();

    expect(wrapper.text()).toContain("Alice");
    expect(wrapper.text()).not.toContain("Bob");
    vi.useRealTimers();
  });

  it("renders mobile cards on mobile viewport", async () => {
    const originalWidth = window.innerWidth;
    window.innerWidth = 500;
    try {
      const wrapper = mount(DataTable<TestItem>, {
        props: { items, columns, isLoading: false },
        slots: {
          "mobile-card": '<template #mobile-card="{ item }"><div class="test-mobile">{{ item.name }}</div></template>',
        },
        global: { stubs: globalStubs },
      });
      // Belt-and-suspenders: fire resize so onResize runs against the mocked width.
      window.dispatchEvent(new Event("resize"));
      await wrapper.vm.$nextTick();

      const mobileCards = wrapper.findAll(".test-mobile");
      expect(mobileCards).toHaveLength(2);
      expect(mobileCards[0].text()).toBe("Alice");
    } finally {
      window.innerWidth = originalWidth;
    }
  });

  it("emits update:selected when a row checkbox is toggled", async () => {
    const wrapper = mountTable();
    // First button[role=checkbox] is "select all", second is row 1.
    const checkboxes = wrapper.findAll('button[role="checkbox"]');
    await checkboxes[1].trigger("click");

    const emitted = wrapper.emitted("update:selected") as string[][];
    expect(emitted).toBeTruthy();
    expect(emitted[emitted.length - 1][0]).toContain("1");
  });

  it("sets aria-checked to mixed when selection is indeterminate", async () => {
    const wrapper = mountTable();
    const checkboxes = wrapper.findAll('button[role="checkbox"]');
    // Select only row 1 → select-all becomes indeterminate.
    await checkboxes[1].trigger("click");
    await wrapper.vm.$nextTick();

    expect(checkboxes[0].attributes("aria-checked")).toBe("mixed");
  });

  it("selects all visible items on Ctrl/Cmd+A", async () => {
    const wrapper = mountTable();
    window.dispatchEvent(new KeyboardEvent("keydown", { key: "a", ctrlKey: true }));
    await wrapper.vm.$nextTick();

    const emitted = wrapper.emitted("update:selected") as string[][];
    const last = emitted[emitted.length - 1][0] as unknown as string[];
    expect(last).toHaveLength(2);
    expect(last).toEqual(expect.arrayContaining(["1", "2"]));
  });

  it("clears selection on Escape", async () => {
    const wrapper = mountTable();
    const checkboxes = wrapper.findAll('button[role="checkbox"]');
    await checkboxes[1].trigger("click");

    window.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
    await wrapper.vm.$nextTick();

    const emitted = wrapper.emitted("update:selected") as string[][];
    const last = emitted[emitted.length - 1][0] as unknown as string[];
    expect(last).toHaveLength(0);
  });

  it("shows skeleton rows and aria-busy when isLoading is true", () => {
    const wrapper = mountTable({ isLoading: true, items: [] as unknown as TestItem[] });
    expect(wrapper.find('[aria-busy="true"]').exists()).toBe(true);
    expect(wrapper.findAll('[aria-hidden="true"]').length).toBeGreaterThan(0);
    expect(wrapper.text()).not.toContain("Alice");
  });

  it("throws in dev when an item is missing its id", () => {
    expect(() =>
      mount(DataTable<TestItem>, {
        props: { items: [{ name: "x" } as unknown as TestItem], columns, isLoading: false },
        global: { stubs: globalStubs },
      }),
    ).toThrow();
  });

  it("renders actions slot per row", () => {
    const wrapper = mountTable({}, {
      actions: '<template #actions="{ item }"><button class="test-action">{{ item.name }}</button></template>',
    });
    const triggers = wrapper.findAllComponents({ name: "DropdownMenuTrigger" });
    expect(triggers).toHaveLength(2);
  });

  // ── Reusability: selectable, labels, sort, pagination, bodyMaxHeight ──

  it("hides the selection column when selectable is false", () => {
    const wrapper = mountTable({ selectable: false });
    expect(wrapper.findAll('button[role="checkbox"]')).toHaveLength(0);
  });

  it("hides the actions column when no actions slot is provided", () => {
    const wrapper = mountTable();
    // gridTemplate has no trailing 48px; no Actions columnheader rendered.
    expect(wrapper.find('[aria-label="Actions"]').exists()).toBe(false);
  });

  it("overrides user-visible strings via the labels prop", () => {
    const wrapper = mountTable({
      searchable: true,
      labels: { searchPlaceholder: "Buscar...", selected: "{count} elegidos" },
    });
    expect(wrapper.find('input[aria-label="Search"]').attributes("placeholder")).toBe("Buscar...");
  });

  it("sorts rows client-side when a sortable header is clicked", async () => {
    const sortableColumns = [
      { key: "name", label: "Name", width: "1fr", sortable: true },
    ];
    const wrapper = mount(DataTable<TestItem>, {
      props: { items, columns: sortableColumns, isLoading: false },
      slots: { "cell-name": `<template #cell-name="{ item }">{{ item.name }}</template>` },
      global: { stubs: globalStubs },
    });

    // Initial order: Alice, Bob.
    let rows = wrapper.findAll('[data-row-idx]');
    expect(rows[0].text()).toContain("Alice");

    // The sortable header is a <button> containing the column label.
    const headerBtn = wrapper.findAll("button").find((b) => b.text().includes("Name"))!;
    // Click header → asc (Alice, Bob), click again → desc (Bob, Alice).
    await headerBtn.trigger("click");
    rows = wrapper.findAll('[data-row-idx]');
    expect(rows[0].text()).toContain("Alice");

    await headerBtn.trigger("click");
    rows = wrapper.findAll('[data-row-idx]');
    expect(rows[0].text()).toContain("Bob");

    // Emits update:sort.
    const sorts = wrapper.emitted("update:sort");
    expect(sorts).toBeTruthy();
  });

  it("paginates rows client-side when pageSize is set", async () => {
    const wrapper = mount(DataTable<TestItem>, {
      props: { items, columns, isLoading: false, pageSize: 1 },
      slots: { "cell-name": `<template #cell-name="{ item }">{{ item.name }}</template>` },
      global: { stubs: globalStubs },
    });

    // Page 1 shows only Alice.
    let rows = wrapper.findAll('[data-row-idx]');
    expect(rows).toHaveLength(1);
    expect(rows[0].text()).toContain("Alice");

    // Page info + next button.
    expect(wrapper.text()).toContain("Page 1 of 2");
    const buttons = wrapper.findAll("button");
    const next = buttons[buttons.length - 1];
    await next.trigger("click");

    rows = wrapper.findAll('[data-row-idx]');
    expect(rows[0].text()).toContain("Bob");
    expect(wrapper.emitted("update:page")).toBeTruthy();
  });

  it("applies bodyMaxHeight as an inline style on the table body", () => {
    const wrapper = mountTable({ bodyMaxHeight: "400px" });
    const body = wrapper.find('[role="rowgroup"]');
    expect(body.attributes("style") ?? "").toContain("max-height: 400px");
  });
});
