import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import SectionCard from "./SectionCard.vue";

describe("SectionCard", () => {
  it("renders a configurable eyebrow and actions slot", () => {
    const wrapper = mount(SectionCard, {
      props: {
        title: "Release",
        eyebrow: "Lifecycle",
      },
      slots: {
        actions: "Actions",
        default: "Body",
      },
    });

    expect(wrapper.text()).toContain("Lifecycle");
    expect(wrapper.text()).toContain("Actions");
    expect(wrapper.text()).toContain("Body");
  });
});
