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
      "borderRadius": {
        "41xl": "60px",
        "81xl": "100px",
        "481xl": "500px",
        "21xl": "40px",
        "xl": "20px"
      
    },
    "colors": {
      "gray": {
        "100": "#fefefe",
        "200": "#757575"
      },
      "whitesmoke": {
        "100": "#f2f2f2",
        "200": "#f1f1f1"
      },
      "dimgray": "#565656",
      "gainsboro": "#e4e4e4",
      "black": "#000",
      "white": "#fff",
      "aliceblue": {
        "100": "#f4f9ff",
        "200": "#f1f7ff",
        "300": "#e7f0fc"
      },
      "cornsilk": "#fff5db",
      "mediumblue": "#2639ed",
      "deeppink": "#ff007a",
      "ghostwhite": "#eff1ff",
      "lavenderblush": "#fff2f8",
      "honeydew": "#deffee",
      "oldlace": "#fff7e3",
      "lavender": "#dae9ff",
      "darkslategray": {
        "100": "#284a5e",
        "200": "#27485d"
      },
      "lightgray": "#ccc"
    },
    },
  },
  plugins: [],
}
