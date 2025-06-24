import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    env: {
      BASE_URL: process.env.BASE_URL,
    },
  },
});
