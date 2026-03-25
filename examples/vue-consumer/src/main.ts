import { createApp, h } from "vue";
import "@aggc/ui/fonts";
import "@aggc/ui/css";
import { ResultPanel, UiButton } from "@aggc/ui";

createApp({
  render() {
    return h("div", { style: "padding: 32px; display: grid; gap: 16px;" }, [
      h(UiButton, null, { default: () => "Consumer build works" }),
      h(ResultPanel, {
        ok: true,
        summary: "External Vite consumer resolved the package correctly",
        messages: ["Entry exports resolved", "CSS loaded", "Components rendered"],
      }),
    ]);
  },
}).mount("#app");
