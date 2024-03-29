/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      colors: {
        primary: '#0a0a0a',
        accent: '#43C6AC',
      },
      backgroundImage: {
        site: "url('../assets/bg-new2.jpg')",
        about: "url('../assets/about.png')",
        services: "url('../assets/services.png')",
        modal: "url('../assets/bg-modal.jpg')",
        explosion: "url('../assets/bg-explosion.png')",
      },
    },
  },
  plugins: [],
};
