/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary': '#0275EE',
        'black': '#000000'
      },
      fontSize: {
        '3.5xl': '40px',
        '4.5xl': '46px'
      },
      lineHeight: {
        '10.5': '45.8px',
        '11': '56px'
      },
      width: {
        '374': '374px'
      },
      height: {
        '305': '305px',
        '275': '275px'
      }
    },
  },
  plugins: [
    // require("daisyui")
  ],
}
