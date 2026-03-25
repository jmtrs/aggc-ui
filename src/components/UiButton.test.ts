import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import UiButton from "./UiButton.vue";

describe("UiButton", () => {
  it("renders loading state accessibly", () => {
    const wrapper = mount(UiButton, {
      props: {
        loading: true,
        loadingLabel: "Saving",
      },
      slots: {
        default: "Save",
      },
    });

    expect(wrapper.attributes("aria-busy")).toBe("true");
    expect(wrapper.text()).toContain("Saving");
    expect(wrapper.attributes("disabled")).toBeDefined();
  });
});
