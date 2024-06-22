import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  define: {
    'process.env.NODE_ENV': '"development"',
  },
  build: {
    outDir: "build",
    assetsDir: "assets",
    emptyOutDir: true,
    polyfillModulePreload: true,
    commonjsOptions: {
      include: [/node_modules/],
    },
    minify: false,
  },
  plugins: [
    react(),
    visualizer({
      filename: "build/stats.html",
      title: `Bundle Stats - Build ${new Date().toLocaleString()}`,
      gzipSize: true,
    }),
  ],
});
