/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      ringColor: {
        'red-600': '#dc2626', // Tailwind's red-600 color
        'gray-200': '#e5e7eb'
      },
    },
  },
  plugins: [],
}
