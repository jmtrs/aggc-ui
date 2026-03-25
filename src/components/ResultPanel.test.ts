import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import ResultPanel from "./ResultPanel.vue";

describe("ResultPanel", () => {
  it("renders configurable copy and polite live region by default", () => {
    const wrapper = mount(ResultPanel, {
      props: {
        ok: false,
        summary: "Validation failed",
        failLabel: "Failed",
        warningsLabel: "Heads up",
        warnings: ["One warning"],
      },
    });

    expect(wrapper.attributes("role")).toBe("status");
    expect(wrapper.attributes("aria-live")).toBe("polite");
    expect(wrapper.text()).toContain("Failed");
    expect(wrapper.text()).toContain("Heads up");
  });
});
