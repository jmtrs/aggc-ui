import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import UiSelect from "./UiSelect.vue";

describe("UiSelect", () => {
  const options = [
    { label: "Desktop", value: "desktop" },
    { label: "Web", value: "web" },
  ];

  it("uses deterministic ids and aria wiring", async () => {
    const wrapper = mount(UiSelect, {
      props: {
        id: "target",
        modelValue: "desktop",
        options,
        ariaDescribedby: "target-hint",
      },
    });

    const trigger = wrapper.get("button");
    expect(trigger.attributes("id")).toBe("target");
    expect(trigger.attributes("aria-describedby")).toBe("target-hint");

    await trigger.trigger("click");

    const listbox = wrapper.get('[role="listbox"]');
    expect(listbox.attributes("id")).toBe("target-listbox");
  });

  it("supports keyboard selection", async () => {
    const wrapper = mount(UiSelect, {
      attachTo: document.body,
      props: {
        id: "consumer-target",
        modelValue: "desktop",
        options,
      },
    });

    const trigger = wrapper.get("button");
    await trigger.trigger("keydown", { key: "ArrowDown" });
    await wrapper.get("#consumer-target-0").trigger("keydown", { key: "ArrowDown" });
    await wrapper.get("#consumer-target-1").trigger("keydown", { key: "Enter" });

    expect(wrapper.emitted("update:modelValue")?.at(-1)).toEqual(["web"]);
    wrapper.unmount();
  });
});
