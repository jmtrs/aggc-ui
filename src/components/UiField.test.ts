import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import UiField from "./UiField.vue";

describe("UiField", () => {
  it("links label and hint metadata to a control", () => {
    const wrapper = mount(UiField, {
      props: {
        label: "Workspace",
        hint: "Pick the active surface.",
        forId: "workspace",
        id: "workspace-hint",
      },
      slots: {
        default: '<input id="workspace" aria-describedby="workspace-hint" />',
      },
    });

    expect(wrapper.get("label").attributes("for")).toBe("workspace");
    expect(wrapper.get("#workspace-hint").text()).toContain("Pick the active surface.");
  });
});
