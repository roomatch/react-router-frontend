import type { Config } from "tailwindcss";
import plugin from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      keyframes: {
        slideIn: {
          '0%': { transform: "translateX(calc(100% + var(--viewport-padding)))" },
          '100%': { transform: "translateX(0)" },
        },
        hide: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        swipeOut: {
          '0%': { transform: "translateX(var(--radix-toast-swipe-end-x))" },
          '100%': { transform: "translateX(calc(100% + var(--viewport-padding)))" },
        },
      },
      colors: {
        'prussian-blue': 'var(--prussian-blue)',
        'cerulean': 'var(--cerulean)',
        'raisin-black': 'var(--raisin-black)',
        'seasalt': 'var(--seasalt)',
        'electric-indigo': 'var(--electric-indigo)',
        'mirrage': 'var(--mirrage)',
      },
    },
    objectPosition: {
      'center-top': 'center top',
    }
  },
  plugins: [
  ],
} satisfies Config;
