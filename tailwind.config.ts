import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: ["class"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      fuchsia: colors.fuchsia,
      orange: colors.orange,
      slate: colors.slate,
      sky: colors.sky,
      blue: {
        50: "#f0f6ff",
        100: "#e1ecff",
        200: "#bdd6ff",
        300: "#99c0ff",
        400: "#629efe",
        500: "#106cfe",
        600: "#015cef",
        700: "#0152d5",
        800: "#0143ad",
        900: "#013384",
        950: "#00235b",
      },
      rose: {
        50: "#fdf2f4",
        100: "#fbe9ec",
        200: "#f6cbd1",
        300: "#f1acb7",
        400: "#e97c8d",
        500: "#dc324b",
        600: "#c8223b",
        700: "#b31f35",
        800: "#94192c",
        900: "#711321",
        950: "#4e0d17",
      },
      green: {
        50: "#E3FCF1",
        100: "#C3F8E1",
        200: "#63EEAF",
        300: "#18D881",
        400: "#14B36B",
        500: "#0F8750",
        600: "#0D7748",
        700: "#0C6A3F",
        800: "#0A5734",
        900: "#074027",
        950: "#052E1C",
      },
    },
    screens: {
      xs: "512px", // => @media (min-width: 425px) { ... }
      sm: "640px", // => @media (min-width: 640px) { ... }
      md: "768px", // => @media (min-width: 768px) { ... }
      lg: "1024px", // => @media (min-width: 1024px) { ... }
      xl: "1280px", // => @media (min-width: 1280px) { ... }
      "2xl": "1536px", // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        sans: ["'Inter Variable'", "Inter", ...defaultTheme.fontFamily.sans],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          md: "3rem",
          lg: "4rem",
          xl: "5rem",
        },
      },
      textUnderlineOffset: {
        3: "3px",
      },
      textDecorationThickness: {
        3: "3px",
      },
      ringWidth: { 3: "3px" },
    },
  },
  plugins: [
    // require("@tailwindcss/forms")({
    // strategy: "base", // only generate global styles
    // strategy: "class", // only generate classes
    // }),
  ],
} satisfies Config;
