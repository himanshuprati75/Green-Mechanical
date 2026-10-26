/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#071326',
          900: '#0d1f3c',
          850: '#11294f',
          800: '#163666',
          700: '#1e4887',
          600: '#275db0',
        },
        forest: {
          950: '#022c22',
          900: '#064e3b',
          800: '#065f46',
          700: '#047857',
          600: '#059669',
          500: '#10b981',
          400: '#34d399',
          100: '#d1fae5',
          50: '#ecfdf5',
        },
        sunburst: {
          50: '#fffbeb',
          100: '#fef3c7',
          500: '#f59e0b',
          600: '#ea580c',
          700: '#c2410c',
        },
        emergency: {
          500: '#dc2626',
          600: '#b91c1c',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Georgia', 'Cambria', 'serif'],
      },
      animation: {
        'pulse-subtle': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-subtle': 'bounce 2s infinite',
      }
    },
  },
  plugins: [],
}
