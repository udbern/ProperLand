module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        primary: '#3B3A5D',
        secondary: '#FFBB50',
        content: '#8F8F8F',
        link: '#B16642',
        border: '#B16642',
      },  
      fontFamily: {
        sans3: ['Source Sans 3', 'sans-serif'],
        kufam: ['Kufam', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: ['flowbite/plugin'],
}