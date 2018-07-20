import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider, injectGlobal } from 'styled-components'
import App from './components'
import registerServiceWorker from './registerServiceWorker'
import theme from './theme'

// GLOBAL STYLES
injectGlobal`
  body {
    font-family: ${theme.fonts.default} !important;
    font-size: ${theme.fontSize.base};
    color: ${theme.colors.text};
    background-color: white;
    margin: 0px;
  }
  .ant-checkbox-group label {
    color: ${theme.colors.text} !important;
  }
  p {
    color: ${theme.colors.text};
  }
  h1, h2, h3, h4, h5, h6 {
    color: ${theme.colors.text};
  }
  a {
    color: ${theme.colors.primary};
  }
  a:hover {
    color: white !important;
  }
  ::selection {
    background: ${theme.colors.primary};
    color: #fff;
  }
  ::-webkit-scrollbar {
    width: 4px;
    background: ${theme.colors.background};
  }
  ::-webkit-scrollbar-track {
    background-color: ${theme.colors.background};
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.primary};
    border-radius: ${theme.misc.borderRadius};
  }
`

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
  , document.getElementById('root'),
)
registerServiceWorker()
