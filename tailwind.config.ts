import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Anton', 'Inter', 'sans-serif'],
      },
      colors: {
        border: '#e4e3dd',
        input: '#d8d6d1',
        ring: '#0a0a0a',
        background: '#f3f2ef',
        foreground: '#0a0a0a',
        // Warm gray page, near-black ink, one electric blue.
        canvas: '#f3f2ef',
        ink: '#0a0a0a',
        accent2: '#2b59ff',
        brand: {
          DEFAULT: '#2b59ff',
          ink: '#1b3fcc',
          bg: '#ecf0ff',
        },
        // One blue in five shades, palest for stage 1, full blue for stage 5.
        stage: {
          1: '#dde5ff',
          2: '#b9c9ff',
          3: '#8ca5ff',
          4: '#5c7eff',
          5: '#2b59ff',
        },
        primary: {
          DEFAULT: '#0a0a0a',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#ffffff',
          foreground: '#0a0a0a',
        },
        destructive: {
          DEFAULT: '#e5484d',
          foreground: '#ffffff',
        },
        muted: {
          DEFAULT: '#ecebe6',
          foreground: '#6b6b6b',
        },
        accent: {
          DEFAULT: '#ecebe6',
          foreground: '#0a0a0a',
        },
        popover: {
          DEFAULT: '#ffffff',
          foreground: '#0a0a0a',
        },
        card: {
          DEFAULT: '#ffffff',
          foreground: '#0a0a0a',
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
