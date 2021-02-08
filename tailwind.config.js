module.exports = {
  theme: {
    fontFamily: {
      'roboto': ['Roboto', 'Helvetica'],
      'roboto-mono': ['Roboto Mono', 'monospace'],
      'roboto-slab': ['Roboto Slab', 'serif']
    },
    fontWeight: {
      light: 300,
      normal: 400,
      bold: 700,
      black: 900
    },
    extend: {
      colors: {
        blue: {
          navy: '#090C43',
          'navy-light': '#1D1F52',
          'navy-lighter': '#2E305F',
          'navy-lightest': '#3F416C',
          periwinkle: '#4667C8',
          'periwinkle-hover': '#3955A7',
          'periwinkle-light': '#A5B9F3',
          'periwinkle-light-hover': '#4667C8',
          electric: '#005EF4',
          'electric-hover': '#0040D6',
          // The following are depricated and renamed into the Transparency section
          'light-navy': '#3F416C',
          'med-navy': '#2E305F',
          'dark-navy': '#1D1F52',
        },
        orange:{
          default: '#FF6900',
          hover: '#DB5A00',
        },
        gray: {
          default: '#737881',
          lightest: '#EBECEF',
          lighter: '#DBDCE1',
          light: '#C5C7CE',
          dark: '#494B51',
          hover: '#494B51',
          // The following are depricated and replaced with above
          med: '#737881',
          'light-alpha': 'rgba(255, 255, 255, 0.22)',
          'med-alpha': 'rgba(255, 255, 255, 0.15)',
        },
        transparency:{
          light: 'rgba(255, 255, 255, 0.22)',
          medium: 'rgba(255, 255, 255, 0.15)',
          dark: 'rgba(255, 255, 255, 0.08)',
        },
        code: '#f5f5f5',
        white: '#FCFCFD'
      },
      spacing: {
        '7': '1.75rem',
        '9': '2.25rem',
        '11': '2.75rem',
        '13': '3.25rem',
        '14': '3.5rem',
        '15': '3.75rem'
      },
      borderRadius: {
        '1rem': '1rem',
      },
    },
  },
  variants: {},
  plugins: [],
}
