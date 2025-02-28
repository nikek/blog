// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://nikek.github.io",
  base: import.meta.env.DEV ? "" : "/blog",
});
