/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './Components/**/*.{js,ts,jsx,tsx}',
    './Modules/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {

    extend: {
      fontFamily: {
        mont: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        custom: '4px 21px 8px rgba(0, 0, 0, 0.01), 2px 12px 7px rgba(0, 0, 0, 0.05), 1px 5px 5px rgba(0, 0, 0, 0.09), 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)',
        buttons: '0px 7px 3px rgba(0, 0, 0, 0.01), 0px 4px 2px rgba(0, 0, 0, 0.05), 0px 2px 2px rgba(0, 0, 0, 0.09), 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)'
      },
      gridTemplateRows: {
        header: '130px 1fr',
        calendar: '30px 1fr'
      },
      gridTemplateColumns: {
        layout: '64px 1100px 60px'
      },
      maxWidth: {
        main: '1354px'
      },
      colors: {
        'custom-blue': '#3F57FF'
      },
    }
  },
  plugins: [],
}
