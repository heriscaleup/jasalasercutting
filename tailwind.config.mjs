/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        // High-end minimalist color palette
        'silver-light': '#FAFAFA', // Pure premium white/light grey
        'silver-mid':   '#F0F1F3', // Soft contrast lines/backgrounds
        'silver-dark':  '#D4D6D9', // Muted borders/icons
        'charcoal':     '#0A0B0D', // Rich, pure high-end black
        'graphite':     '#3A3C40', // Refined, highly legible body color
        'laser-green':  '#10B981', // Vibrant emerald/laser-green
        'laser-green-hover': '#059669', // Deep emerald hover state
      },
      fontFamily: {
        // Space Grotesk / Plus Jakarta Sans are the gold standards for Awwwards sites
        sans:    ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['"Space Grotesk"', 'Poppins', 'system-ui', 'sans-serif'],
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
