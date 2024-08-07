// Node modules
import { coverageConfigDefaults, defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      exclude: ["**/types/**", ...coverageConfigDefaults.exclude],
    },
  },
});
