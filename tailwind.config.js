/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dental: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6', // Primary Teal
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
        skybrand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9', // Medical Sky Blue
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        clinicNavy: {
          800: '#1e293b',
          900: '#0f172a',
          950: '#090d16',
        }
      },
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      fontFamily: {
        heading: ['Outfit', 'Inter', 'Menbere', '"Noto Serif Ethiopic"', '"Noto Sans Ethiopic"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Outfit', 'Inter', 'Menbere', '"Noto Serif Ethiopic"', 'system-ui', '-apple-system', 'sans-serif'],
        sans: ['Inter', 'Outfit', 'Menbere', '"Noto Sans Ethiopic"', 'system-ui', '-apple-system', 'sans-serif'],
        body: ['Inter', 'Outfit', 'Menbere', '"Noto Sans Ethiopic"', 'system-ui', '-apple-system', 'sans-serif'],
        amharic: ['Menbere', '"Noto Serif Ethiopic"', '"Noto Sans Ethiopic"', 'Nyala', 'Kefa', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(14, 165, 233, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 12px 35px -4px rgba(14, 165, 233, 0.12), 0 4px 12px -2px rgba(0, 0, 0, 0.05)',
        'glow': '0 0 25px rgba(20, 184, 166, 0.25)',
        'glow-sky': '0 0 25px rgba(14, 165, 233, 0.25)',
      }
    },
  },
  plugins: [],
}
