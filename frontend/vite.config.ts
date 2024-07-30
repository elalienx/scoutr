// Node modules
import { configDefaults, defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: "jsdom",
    css: true,
    setupFiles: ["./vitest-setup.ts"],
    includeSource: ["src/**/*.{js,ts}"],
    exclude: [...configDefaults.exclude],
  },
});
