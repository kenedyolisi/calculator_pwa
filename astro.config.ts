import svelte from "@astrojs/svelte";
import PWA from "@vite-pwa/astro";
import { defineConfig } from "astro/config";

export default defineConfig({
  integrations: [PWA(), svelte()],
});
