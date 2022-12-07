import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import mkcert from "vite-plugin-mkcert";
import { resolve } from "node:path";

export default defineConfig({
  resolve: {
    alias: [
      {
        find: "@",
        replacement: resolve(__dirname, "src"),
      },
    ],
  },
  server: {
    https: true,
    port: 4300,
  },
  plugins: [solid(), mkcert()],
  build: {
    target: "esnext",
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
