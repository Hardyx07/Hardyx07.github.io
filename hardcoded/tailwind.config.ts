import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
        heading: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      fontSize: {
        // Fluid typography mappings
        'xs': 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
        'sm': 'clamp(0.875rem, 0.84rem + 0.18vw, 1rem)',
        'base': 'var(--font-base)',
        'lg': 'clamp(1.125rem, 1.08rem + 0.23vw, 1.25rem)',
        'xl': 'clamp(1.25rem, 1.16rem + 0.45vw, 1.5rem)',
        '2xl': 'var(--font-sm)', // H4
        '3xl': 'var(--font-md)', // H3
        '4xl': 'var(--font-lg)', // H2
        '5xl': 'var(--font-xl)', // H1
        '6xl': 'clamp(3.05rem, 2.56rem + 2.44vw, 4.77rem)',
      },
      lineHeight: {
        tight: 'var(--leading-tight)',
        base: 'var(--leading-base)',
        loose: 'var(--leading-loose)',
      },
      zIndex: {
        negative: 'var(--z-negative)',
        base: 'var(--z-base)',
        noise: 'var(--z-noise)',
        ambient: 'var(--z-ambient)',
        content: 'var(--z-content)',
        header: 'var(--z-header)',
        overlay: 'var(--z-overlay)',
        cursor: 'var(--z-cursor)',
      },
      transitionDuration: {
        fast: 'var(--duration-fast)',
        medium: 'var(--duration-medium)',
        slow: 'var(--duration-slow)',
      },
      transitionTimingFunction: {
        'out-quint': 'var(--ease-out-quint)',
        'in-out-smooth': 'var(--ease-in-out-smooth)',
        'elastic': 'var(--ease-elastic)',
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        glass: {
          surface: "hsl(var(--glass-surface))",
          border: "hsl(var(--glass-border))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
