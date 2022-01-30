import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    font-size: 1.6rem;
    background-color: #f8f8f8;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

export default GlobalStyle;
