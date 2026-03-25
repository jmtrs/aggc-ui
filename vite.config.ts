import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@styled": fileURLToPath(new URL("./styled-system", import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: {
        index: fileURLToPath(new URL("./src/index.ts", import.meta.url)),
        components: fileURLToPath(new URL("./src/components.ts", import.meta.url)),
        styles: fileURLToPath(new URL("./src/styles.ts", import.meta.url)),
        tokens: fileURLToPath(new URL("./src/tokens.ts", import.meta.url)),
        "tokens-core": fileURLToPath(new URL("./src/tokens-core.ts", import.meta.url)),
        "tokens-desktop": fileURLToPath(new URL("./src/tokens-desktop.ts", import.meta.url)),
      },
      formats: ["es"],
      fileName: (_, entryName) => `${entryName}.js`,
    },
    rollupOptions: {
      external: ["vue", "lucide-vue-next"],
      output: {
        preserveModules: false,
        manualChunks: undefined,
        chunkFileNames: "chunks/[name]-[hash].js",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith(".css")) {
            return "[name][extname]";
          }

          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },
});
