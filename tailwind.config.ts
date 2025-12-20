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
        sans: ["Space Grotesk", "sans-serif"],
        display: ["Orbitron", "sans-serif"],
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
        neon: {
          cyan: "hsl(var(--neon-cyan))",
          purple: "hsl(var(--neon-purple))",
          pink: "hsl(var(--neon-pink))",
          orange: "hsl(var(--neon-orange))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
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
        "float-3d": {
          "0%, 100%": { transform: "translateY(0) rotateX(0deg) rotateY(0deg)" },
          "25%": { transform: "translateY(-20px) rotateX(5deg) rotateY(5deg)" },
          "50%": { transform: "translateY(-10px) rotateX(-5deg) rotateY(-5deg)" },
          "75%": { transform: "translateY(-15px) rotateX(3deg) rotateY(-3deg)" },
        },
        "glow-pulse": {
          "0%, 100%": { 
            boxShadow: "0 0 20px hsl(var(--neon-cyan) / 0.5), 0 0 40px hsl(var(--neon-cyan) / 0.3), 0 0 60px hsl(var(--neon-cyan) / 0.1)" 
          },
          "50%": { 
            boxShadow: "0 0 40px hsl(var(--neon-cyan) / 0.8), 0 0 80px hsl(var(--neon-cyan) / 0.5), 0 0 120px hsl(var(--neon-cyan) / 0.3)" 
          },
        },
        "text-shimmer": {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        "slide-up-3d": {
          "0%": { transform: "translateY(100px) rotateX(-15deg)", opacity: "0" },
          "100%": { transform: "translateY(0) rotateX(0deg)", opacity: "1" },
        },
        "morph": {
          "0%, 100%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
          "50%": { borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%" },
        },
        "glitch": {
          "0%, 100%": { transform: "translate(0)" },
          "20%": { transform: "translate(-3px, 3px)" },
          "40%": { transform: "translate(-3px, -3px)" },
          "60%": { transform: "translate(3px, 3px)" },
          "80%": { transform: "translate(3px, -3px)" },
        },
        "cyber-scan": {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { transform: "translateY(100%)", opacity: "0" },
        },
        "rotate-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        "tilt": {
          "0%, 100%": { transform: "rotateY(-10deg) rotateX(5deg)" },
          "50%": { transform: "rotateY(10deg) rotateX(-5deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float-3d": "float-3d 6s ease-in-out infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "text-shimmer": "text-shimmer 3s linear infinite",
        "slide-up-3d": "slide-up-3d 0.8s ease-out forwards",
        "morph": "morph 8s ease-in-out infinite",
        "glitch": "glitch 0.3s ease-in-out infinite",
        "cyber-scan": "cyber-scan 2s ease-in-out infinite",
        "rotate-slow": "rotate-slow 20s linear infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "tilt": "tilt 10s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
