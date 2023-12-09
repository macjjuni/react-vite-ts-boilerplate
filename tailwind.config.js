/** @type {import('tailwindcss').Config} */

const layoutSize = {
  width: {
    layout: '1400px',
    header: '100%',
    main: '100%',
    footer: '100%',
  },
  height: {
    layout: '100dvh',
    header: '56px',
    main: '100%',
    footer: '40px',
  },
}

const size = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '20px',
  '2xl': '24px',
  '3xl': '32px',
  '4xl': '40px',
  '5xl': '56px',
}

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        sm: '465px',
        md: '768px',
        lg: '1400px',
      },
      colors: {
        yellow: '#feca57',
        red: '#ED2B2A',
        navy: '#341f97',
        black: '#222f3e',
        primary: '#1d74ff',
        secondary: '#32D962',
        SUCCESS: '#04cf52',
        WARNING: '#FFAB49',
        BLG0: '#ffffff',
        BLG50: '#F8F9FA',
        BLG100: '#F1F3F5',
        BLG200: '#E8EBED',
        BLG300: '#DEE2E6',
        BLG400: '#C9CDD2',
        BLG500: '#9EA4AA',
        BLG600: '#72787F',
        BLG700: '#454C53',
        BLG800: '#26282B',
        BLG900: '#1B1D1F',
        BLG1000: '#000000',
      },
      width: {
        ...layoutSize.width,
      },
      height: {
        ...layoutSize.height,
      },
      minHeight: {
        ...layoutSize.height,
      },
      inset: { ...size },
      margin: { ...size },
      padding: { ...size },
      gap: { ...size },
      borderRadius: { ...size },
      fontSize: {
        xs: '12px',
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '36px',
        '5xl': '42px',
      },
    },
  },
  plugins: [],
}
