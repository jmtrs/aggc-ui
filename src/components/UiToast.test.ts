import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { ToastProvider } from "reka-ui";
import UiToast from "./UiToast.vue";

function mountToast(props: Record<string, unknown> = {}) {
  return mount(
    {
      components: { ToastProvider, UiToast },
      template: `<ToastProvider><UiToast v-bind="props" /></ToastProvider>`,
      setup() {
        return { props };
      },
    },
    {
      props: {
        tone: "success",
        message: "Workspace created",
        ...props,
      },
    }
  );
}

describe("UiToast", () => {
  it("renders without errors", () => {
    const wrapper = mountToast();
    expect(wrapper.findComponent(UiToast).exists()).toBe(true);
  });

  it("passes tone prop correctly", () => {
    const wrapper = mountToast({ tone: "error", message: "Failed" });
    expect(wrapper.findComponent(UiToast).props("tone")).toBe("error");
  });

  it("passes message prop correctly", () => {
    const wrapper = mountToast({ message: "Custom message" });
    expect(wrapper.findComponent(UiToast).props("message")).toBe(
      "Custom message"
    );
  });

  it("passes duration prop", () => {
    const wrapper = mountToast({ duration: 8000 });
    expect(wrapper.findComponent(UiToast).props("duration")).toBe(8000);
  });
});
