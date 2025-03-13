// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import preact from "@astrojs/preact";
import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  site: "https://nikek.github.io",
  base: import.meta.env.DEV ? "" : "/blog",
  integrations: [
    preact(),
    expressiveCode({
      themes: ["laserwave"],
    }),
    mdx(),
  ],
  prefetch: {
    prefetchAll: true,
  },
});
