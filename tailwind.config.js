/** @type {import('tailwindcss').Config} */
module.exports = {
  // Tell Tailwind which files to scan for class names
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // your custom OKLCH color
        "devops-paragraph": "oklch(0.74 0.02 260.29)"
      }
    }
  },
  plugins: []
}
