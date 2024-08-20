import eslintPluginAstro from "eslint-plugin-astro";
import eslintPluginSvelte from "eslint-plugin-svelte";
import svelteConfig from "./svelte.config.js";

export default [
  // add more generic rule sets here, such as:
  js.configs.recommended,
  ...eslintPluginAstro.configs["flat/recommended"],
  ...eslintPluginAstro.configs["flat/jsx-a11y-recommended"],
  ...eslintPluginSvelte.configs["flat/recommended"],
  {
    files: [
      "**/*.svelte",
      "*.svelte",
      "**/*.svelte.ts",
      "*.svelte.ts",
      // Add more files if you need.
      // '**/*.svelte.js', '*.svelte.js',
    ],
    languageOptions: {
      parserOptions: {
        // Specify the `svelte.config.js`.
        svelteConfig,
      },
    },
  },
  {
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error",
      // "svelte/rule-name": "error",
      semi: "error",
      "prefer-const": "error",
    },
  },
];
