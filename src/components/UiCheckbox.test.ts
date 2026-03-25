import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import UiCheckbox from "./UiCheckbox.vue";

describe("UiCheckbox", () => {
  it("toggles via keyboard", async () => {
    const wrapper = mount(UiCheckbox, {
      props: {
        modelValue: false,
        label: "Enable sync",
      },
    });

    await wrapper.trigger("keydown.space");

    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([true]);
  });
});
