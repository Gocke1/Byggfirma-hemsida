/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        site: "#D9A382",      // ≈ NCS S 1510-Y40R (varm ljus beige)
        primary: "#1B4F72",
        accent: "#2ECC71",
        neutralDark: "#0F172A",
        neutralText: "#1F2937",
        neutralBg: "#F8FAFC",
        neutralLine: "#E5E7EB",
        cta: "#2563EB",
      },
      boxShadow: {
        card: "0 8px 28px rgba(2,8,23,0.06)",
      },
      transitionTimingFunction: {
        soft: "cubic-bezier(.2,.8,.2,1)",
      },
    },
  },
  plugins: [],
}
