/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        burgundy: '#67232A',
        wood: '#79533B',
        tan: '#B28B66',
        ivory: '#F1E4D2',
        espresso: '#352820',
      },
      fontFamily: {
        display: ['"Italiana"', 'serif'],
        editorial: ['"Cormorant Garamond"', 'serif'],
        western: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui'],
      },
      letterSpacing: {
        widest2: '0.35em',
        widest3: '0.5em',
      },
      animation: {
        'slow-pan': 'slowPan 24s ease-in-out infinite alternate',
        'soft-shimmer': 'softShimmer 6s ease-in-out infinite',
      },
      keyframes: {
        slowPan: {
          '0%': { transform: 'scale(1.08) translate3d(0, 0, 0)' },
          '100%': { transform: 'scale(1.12) translate3d(-1.5%, -1%, 0)' },
        },
        softShimmer: {
          '0%, 100%': { opacity: 0.6 },
          '50%': { opacity: 1 },
        },
      },
      boxShadow: {
        'editorial': '0 30px 60px -30px rgba(53, 40, 32, 0.55)',
        'frame': '0 1px 0 rgba(241, 228, 210, 0.08), 0 20px 60px -20px rgba(0, 0, 0, 0.6)',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.21  0 0 0 0 0.16  0 0 0 0 0.12  0 0 0 0.35 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
      },
    },
  },
  plugins: [],
}
