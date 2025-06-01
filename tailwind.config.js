/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",      // make sure these match your files
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // exactly this key…
        "devops-paragraph": "oklch(0.74 0.02 260.29)"
      }
    }
  },
  plugins: [],
}
