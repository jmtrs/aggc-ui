import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import UiTooltip from "./UiTooltip.vue";

describe("UiTooltip", () => {
  it("renders the trigger slot", () => {
    const wrapper = mount(UiTooltip, {
      props: { content: "Help" },
      slots: { default: '<button type="button">Hover me</button>' },
    });

    expect(wrapper.text()).toContain("Hover me");
    expect(wrapper.find("button").exists()).toBe(true);
  });

  it("renders the trigger bare when content is empty (no tooltip)", () => {
    const wrapper = mount(UiTooltip, {
      props: { content: "" },
      slots: { default: '<button type="button">Bare</button>' },
    });

    expect(wrapper.find("button").exists()).toBe(true);
    expect(wrapper.text()).toContain("Bare");
    // No tooltip content rendered for empty content.
    expect(wrapper.find('[role="tooltip"]').exists()).toBe(false);
  });

  it("keeps the trigger focusable", () => {
    const wrapper = mount(UiTooltip, {
      props: { content: "Help" },
      slots: { default: '<button type="button">Hover me</button>' },
    });

    const trigger = wrapper.find("button");
    expect(trigger.attributes("tabindex")).not.toBe("-1");
  });
});
