export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    fontFamily: {
      'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
    },
    extend: {
      colors: {
        'brand-primary': '#2C5282',
        'brand-secondary': '#4A90E2',
        'coffee-dark': '#2D1E12',
        'coffee-light': '#D2A679'
      },
      boxShadow: {
        'elegant': '0 12px 24px rgba(0, 0, 0, 0.12)',
        'subtle': '0 4px 12px rgba(0, 0, 0, 0.08)'
      }
    }
  },
  plugins: []
}