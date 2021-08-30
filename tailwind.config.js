module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      smoke: '#2c3531',
      scifiGreen: '#116466',
      wetSand: '#d9b08c',
      starlight: '#ffcb9a',
      offWorld: '#d1e8e2' 
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
