// @ts-check
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://nikek.github.io",
  base: import.meta.env.DEV ? "" : "/blog",
  integrations: [preact()],
});