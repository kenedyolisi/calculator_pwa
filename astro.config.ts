import svelte from "@astrojs/svelte";
import PWA from "@vite-pwa/astro";
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [PWA(), svelte(), tailwind()],
});
