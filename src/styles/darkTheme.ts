export default {
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  },
  colors: {
    background: '#06092b',
    invert: '#F6F5FC',
    primary: {
      lighter: '#3346F0',
      light: '#5061FC',
      main: '#6674F4',
      dark: '#E0E3FF'
    },
    danger: {
      light: '#F63131',
      main: '#FC5050',
      dark: '#F97171'
    },
    warning: {
      light: '#DD571C',
      main: '#FC6A03',
      dark: '#FDA172'
    },
    gray: {
      900: '#E5E5E5',
      200: '#BCBCBC',
      100: '#222222'
    },
    success: {
      main: '#51CA73'
    }
  },
  border: {
    radius: '0.4rem'
  },
  font: {
    family:
      "Sora, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      huge: '5.2rem'
    }
  }
} as const
