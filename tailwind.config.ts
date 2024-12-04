import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    animation: {
      'zoom-out': 'zoom-out 10s linear infinite',
    },
    keyframes: {
      'zoom-out': {
        '0%': {
          transform: 'scale(1.1)',
        },
        '100%': {
          transform: 'scale(1)',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
