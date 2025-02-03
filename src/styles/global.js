import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    background-color: ${({theme}) => theme.COLORS.DARK_400};
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
    outline: none;
  }

  button {
    font-family: "Poppins", sans-serif;
  }

  a, button {
    font-size: 1.6rem;
    text-decoration: none;
    cursor: pointer;
    transition: filter 0.2s;
  }

  a:hover, button:hover {
    filter: brightness(0.9);
  }
`