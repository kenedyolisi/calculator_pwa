import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import PWA from "@vite-pwa/astro";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://kenedyolisi.github.io",
  base: "/calculator_pwa",
  integrations: [PWA(), svelte(), tailwind()],
});
