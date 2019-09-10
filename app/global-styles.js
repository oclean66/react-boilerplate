import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #134c75;
    min-height: 100%;
    min-width: 100%;
  }
  a {
    text-decoration: none;
    color: inherit;
  }

  p,
  label {
    line-height: 1.5em;
  }
`;

export default GlobalStyle;
