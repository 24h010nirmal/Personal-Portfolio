/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        "surface-alt": "var(--surface-alt)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        accent: "var(--accent)",
        "accent-ink": "var(--accent-ink)",
        "max-black": "#111111",
        "max-charcoal": "#1A1A1A",
        "max-surface": "#222222",
        "max-blue": "#1B48D6",
        "max-yellow": "#FFE600",
        "max-red": "#E13725",
        "max-green": "#0E5E4E",
        "max-bone": "#F4F1EA",
        "max-white": "#FFFFFF",
      },
      fontFamily: {
        sans: ["Archivo", "Switzer", "system-ui", "-apple-system", "sans-serif"],
        display: ["Archivo", "system-ui", "-apple-system", "sans-serif"],
      },
      fontSize: {
        sm: "1rem", // 16px minimum step
        base: "1.0625rem", // 17px standard body step
        lg: "1.25rem", // 20px lead step
        xl: "1.5rem", // 24px
        "2xl": "1.75rem",
        "3xl": "2.25rem",
      },
    },
  },
  plugins: [],
}
