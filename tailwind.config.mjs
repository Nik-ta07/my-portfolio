/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          light: '#FFFFFF', // Light background
          dark: '#121212', // Dark background
        },
        text: {
          light: '#000000', // Light text
          dark: '#FFFFFF', // Dark text
        },
        primary: {
          light: '#D1C4E9', // Light purple
          DEFAULT: '#673AB7', // Default purple
          dark: '#5E35B1', // Darker purple
        },
      },
    },
  },
  plugins: [],
};