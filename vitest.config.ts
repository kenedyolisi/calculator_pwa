/// <reference types="vitest" />
import { getViteConfig } from "astro/config";

export default getViteConfig(
  {
    test: {
      // Vitest configuration options
    },
  },
  {
    // site: "https://example.com/",
    // trailingSlash: "always",
  },
);

