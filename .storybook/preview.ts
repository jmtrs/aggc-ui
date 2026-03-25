import type { Preview } from "@storybook/vue3-vite";
import "../src/css/fonts.css";
import "../src/css/index.css";
import "../src/css/storybook.css";

const preview: Preview = {
  parameters: {
    layout: "padded",
    controls: {
      expanded: true,
    },
    backgrounds: {
      disable: true,
    },
    options: {
      storySort: {
        order: ["Primitives", "Forms", "Feedback", "Layout"],
      },
    },
  },
};

export default preview;
