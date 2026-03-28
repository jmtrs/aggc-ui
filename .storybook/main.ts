import type { StorybookConfig } from "@storybook/vue3-vite";
import { fileURLToPath, URL } from "node:url";

const config: StorybookConfig = {
  stories: ["../src/stories/**/*.stories.ts"],
  addons: ["@storybook/addon-docs", "@storybook/addon-a11y", "@storybook/addon-mcp"],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  viteFinal: async (config) => {
    config.resolve ??= {};
    config.resolve.alias = {
      ...(config.resolve.alias ?? {}),
      "@": fileURLToPath(new URL("../src", import.meta.url)),
      "@styled": fileURLToPath(new URL("../styled-system", import.meta.url)),
    };

    return config;
  },
};

export default config;
