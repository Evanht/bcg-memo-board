const colors = {
  bcgPurple: '#4771F2',
  bcgOrange: '#F89777',
  bcgGreen: '#00DBBA',
  bcgPurpleDark: '#2c56d7',
  bcgRed: '#da4937',
  bcgBlue: '#226CE0',
  blue: 'rgb(46, 187, 253)',
  green: '#558B2F',
  yellow: 'rgb(248, 193, 75)',
  red: 'rgb(255, 132, 107)',
  subtleGrey: '#f4f4f4',
  lightGrey: '#d9d9d9',
  middleGrey: '#afafaf',
  darkGrey: 'rgba(0,0,0,.65)',
  lightBlack: '#36393D',
  middleBlack: '#2c2c2c',
  darkBlack: '#121212',
  white: '#fff',
  offWhite: '#F7F7F7',
}

export default {
  colors: {
    primary: colors.bcgPurple,
    primaryDark: colors.bcgPurpleDark,
    secondary: colors.bcgRed,
    info: colors.blue,
    success: colors.bcgGreen,
    warning: colors.yellow,
    error: colors.bcgRed,
    neutral: colors.subtleGrey,
    border: colors.lightGrey,
    text: colors.darkBlack,
    lightText: colors.middleGrey,
    midText: colors.middleBlack,
    darkText: colors.darkBlack,
    backgroundLight: colors.offWhite,
    background: colors.middleBlack,
    backgroundDark: colors.darkBlack,
    white: colors.white,
  },
  durations: {
    instantly: '0s',
    immediately: '0.05s',
    quickly: '0.1s',
    promptly: '0.2s',
    slowly: '0.4s',
    paused: '3.2s',
  },
  fonts: {
    default: 'Avenir, Nunito, Helvetica, Open Sans, sans-serif',
  },
  fontSize: {
    base: '14px',
  },
  misc: {
    borderRadius: '2px',
    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
  },
  shadow: {
    flat: '0 0 0 0px rgba(0,0,0,.1), 0 2px 3px rgba(0,0,0,.2)',
    raised: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
  },
}