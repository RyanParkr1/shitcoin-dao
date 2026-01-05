/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#39FF14',
        neutral: '#FF00FF',
        cyan: '#00FFFF',
        pink: '#FF69B4',
        gold: '#FFD700',
      },
      animation: {
        shimmer: 'shimmer 5s linear infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '300% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-30px) rotate(8deg)' },
        },
      },
    },
  },
  plugins: [],
}