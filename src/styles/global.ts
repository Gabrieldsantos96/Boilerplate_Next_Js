'use client'

import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`

@font-face {
  font-display: swap;
  font-family: 'Sora';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url('/fonts/sora-v12-latin-300.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
}
/* sora-regular - latin */
@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Sora';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/fonts/sora-v12-latin-regular.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
}
/* sora-500 - latin */
@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Sora';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url('/fonts/sora-v12-latin-500.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
}
/* sora-600 - latin */
@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Sora';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url('/fonts/sora-v12-latin-600.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
}


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  html {
    font-size: 62.5%;
  }

  ${({ theme }) => css`
    * {
      font-family: ${theme.font.family};
      color: ${theme.colors.gray[900]};
    }

    body {
      background: ${theme.colors.background};
      font-size: ${theme.font.sizes.medium};
    }
  `}



  html, body, #__next {
    height: 100%;
  }
`

export default GlobalStyles
