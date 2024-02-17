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
`;

export default GlobalStyle;
