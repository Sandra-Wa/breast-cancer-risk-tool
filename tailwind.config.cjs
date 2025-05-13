module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'pink-primary': '#FF6B8B',
        'pink-light': '#FFE5EB',
        'pink-dark': '#D94D6D',
        'purple-accent': '#8A4FFF',
        'teal-accent': '#2DD4BF',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(255, 107, 139, 0.15)',
      },
      animation: {
        'spin-slow': 'spin 2s linear infinite',
      }
    },
  },
  plugins: [],
}