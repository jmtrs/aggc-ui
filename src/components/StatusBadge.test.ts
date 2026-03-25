import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import StatusBadge from "./StatusBadge.vue";

describe("StatusBadge", () => {
  it("renders slot content", () => {
    const wrapper = mount(StatusBadge, {
      props: {
        tone: "success",
      },
      slots: {
        default: "Ready",
      },
    });

    expect(wrapper.text()).toContain("Ready");
  });
});
