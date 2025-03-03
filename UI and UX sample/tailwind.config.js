/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
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
        // Subject-specific gradients
        biology: {
          from: "#10B981", // green
          to: "#3B82F6", // blue
        },
        chemistry: {
          from: "#10B981", // green
          to: "#EF4444", // red
        },
        physics: {
          from: "#3B82F6", // blue
          to: "#8B5CF6", // purple
        },
        // Cyberpunk neon colors
        neon: {
          blue: "#00FFFF",
          purple: "#FF00FF",
          green: "#00FF00",
          red: "#FF0066",
          yellow: "#FFFF00",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        glow: {
          "0%, 100%": {
            textShadow: "0 0 10px rgba(0, 255, 255, 0.8), 0 0 20px rgba(0, 255, 255, 0.5)",
          },
          "50%": {
            textShadow: "0 0 15px rgba(255, 0, 255, 0.8), 0 0 30px rgba(255, 0, 255, 0.5)",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-border": {
          "0%, 100%": { borderColor: "rgba(0, 255, 255, 0.7)" },
          "50%": { borderColor: "rgba(255, 0, 255, 0.7)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        glow: "glow 3s infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-border": "pulse-border 4s infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "biology-gradient": "linear-gradient(to right, var(--tw-gradient-stops, #10B981, #3B82F6))",
        "chemistry-gradient": "linear-gradient(to right, var(--tw-gradient-stops, #10B981, #EF4444))",
        "physics-gradient": "linear-gradient(to right, var(--tw-gradient-stops, #3B82F6, #8B5CF6))",
        "cyberpunk-grid":
          "linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "20px 20px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

