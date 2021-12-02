import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import paths from "vite-tsconfig-paths";
import mkcert from "vite-plugin-mkcert";

export default defineConfig({
  server: {
    https: true,
    port: 4300,
  },
  plugins: [
    solid(),
    paths(),
    mkcert(),
  ],
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
    rollupOptions: {
      output: {
        manualChunks: {
          "solid-js": ["solid-js"],
          "solid-app-router": ["solid-app-router"],
          "solid-transition-group": ["solid-transition-group"],
        },
      },
    },
  },
});
