// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: 'https://nbaulib.github.io',
  integrations: [
    mdx({
      remarkPlugins: [],
    }),
  ],
});