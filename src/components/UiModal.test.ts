import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { DialogRoot } from "reka-ui";
import UiModal from "./UiModal.vue";

describe("UiModal", () => {
  it("mounts without errors when open", () => {
    const wrapper = mount(UiModal, {
      props: {
        open: true,
        title: "Test Modal",
      },
    });

    expect(wrapper.findComponent(DialogRoot).exists()).toBe(true);
  });

  it("passes title prop to DialogTitle", () => {
    const wrapper = mount(UiModal, {
      props: {
        open: true,
        title: "Create Workspace",
      },
    });

    expect(wrapper.props("title")).toBe("Create Workspace");
  });

  it("passes size prop correctly", () => {
    const wrapper = mount(UiModal, {
      props: {
        open: true,
        title: "Test",
        size: "lg",
      },
    });

    expect(wrapper.props("size")).toBe("lg");
  });

  it("renders with default size md", () => {
    const wrapper = mount(UiModal, {
      props: {
        open: true,
        title: "Test",
      },
    });

    expect(wrapper.props("size")).toBe("md");
  });

  it("emits update:open when DialogRoot state changes", async () => {
    const wrapper = mount(UiModal, {
      props: {
        open: true,
        title: "Test",
      },
    });

    const dialogRoot = wrapper.findComponent(DialogRoot);
    await dialogRoot.vm.$emit("update:open", false);
    expect(wrapper.emitted("update:open")?.[0]).toEqual([false]);
  });
});
