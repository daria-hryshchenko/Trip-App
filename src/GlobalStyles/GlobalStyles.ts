import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
    background: #fff;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
  }

  ul {
    list-style: none;
  }

  img {
    display: block;
  }

  html {
    scroll-behavior: smooth;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar {
    height: 4px;
    width: 7px;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(transparent, #2c259a);
    border-radius: 7px;
  }
`;

export default GlobalStyle;
