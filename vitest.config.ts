import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true, // Enables global 'expect', 'test', 'describe', etc.
  },
});
