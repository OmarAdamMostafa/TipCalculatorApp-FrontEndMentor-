/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': '375px',
      'desktop': '1024px',
      'xldesktop': '1660px',
    },
    extend:
    {
      fontFamily: {
        'spacemono': ['Space Mono', 'monospace']
      },
    },
  },
  plugins: [],
}

