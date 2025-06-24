import { defineConfig } from "cypress";
import * as dotenv from "dotenv";

dotenv.config(); // baca file .env

export default defineConfig({
  e2e: {
    env: {
      BASE_URL: process.env.BASE_URL,
    },
  },
});
