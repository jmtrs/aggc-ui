import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import UiAvatar from "./UiAvatar.vue";

describe("UiAvatar", () => {
  it("has accessible label with full name", () => {
    const wrapper = mount(UiAvatar, {
      props: { name: "Alice Johnson" },
    });

    expect(wrapper.attributes("aria-label")).toBe("Alice Johnson");
    expect(wrapper.attributes("role")).toBe("img");
  });

  it("renders image when src provided", () => {
    const wrapper = mount(UiAvatar, {
      props: {
        name: "Alice",
        src: "https://example.com/avatar.jpg",
      },
    });

    const img = wrapper.find("img");
    expect(img.exists()).toBe(true);
    expect(img.attributes("src")).toBe("https://example.com/avatar.jpg");
  });

  it("does not render image when src is not provided", () => {
    const wrapper = mount(UiAvatar, {
      props: { name: "Alice" },
    });

    expect(wrapper.find("img").exists()).toBe(false);
  });

  it("renders avatar root element", () => {
    const wrapper = mount(UiAvatar, {
      props: { name: "Alice Johnson" },
    });

    expect(wrapper.find("[role='img']").exists()).toBe(true);
  });
});
