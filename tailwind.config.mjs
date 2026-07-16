/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0D0C',
        surface: '#121514',
        'text-main': '#F3F0E8',
        'text-secondary': '#A7ADA8',
        accent: '#10B981',
        paper: '#E8E4D9',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['"Space Grotesk"', 'Poppins', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      spacing: {
        '18':  '4.5rem',
        '88':  '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in':     'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up':    'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-right': 'slideRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'bounce-slow': 'bounce 3s infinite',
        'spin-slow':   'spin 12s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)',       opacity: '1' },
        },
        slideRight: {
          '0%':   { transform: 'translateX(-40px)', opacity: '0' },
          '100%': { transform: 'translateX(0)',       opacity: '1' },
        },
      },
      boxShadow: {
        'premium': '0 10px 40px -10px rgba(0, 0, 0, 0.04), 0 1px 1px rgba(0, 0, 0, 0.01)',
        'premium-hover': '0 20px 50px -10px rgba(0, 0, 0, 0.08), 0 1px 1px rgba(0, 0, 0, 0.02)',
        'laser-glow': '0 0 30px rgba(16, 185, 129, 0.15)',
        'inner-lg':   'inset 0 2px 4px 0 rgba(0, 0, 0, 0.02)',
      },
      backdropBlur: {
        xs: '2px',
        md: '12px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
