import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        btnPrimary: "var(--btnPrimary)",
        foregroundSecondary: "var(--foreground-secondary)",
        errorText: "var(--errorText)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        primary: "var(--eb-garamond)",
        secondary: "var(--font-hk-grotesk)",
      },
      keyframes: {
        "slide-in-right": {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        "slide-out-right": {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(100%)",
          },
        },
        "slide-in-left": {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        "slide-out-left": {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
      },
      animation: {
        "slide-forward-enter": "slide-in-right 0.2s ease-out",
        "slide-forward-exit": "slide-out-left 0.2s ease-out",
        "slide-backward-enter": "slide-in-left 0.2s ease-out",
        "slide-backward-exit": "slide-out-right 0.2s ease-out",
      },
    },
  },
  plugins: [],
} satisfies Config;
