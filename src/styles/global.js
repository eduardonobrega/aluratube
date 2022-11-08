import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, button, input {
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
  }

  body {
    min-height: 100vh;
    font-family: sans-serif;
    display: flex;
    flex: 1;
  }

  /* NextJS */
  html {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
 
  #__next {
    display: flex;
    flex: 1;
  }
  /* Globals */
  button,
  a {
    text-decoration: none;
    opacity: 1;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
  }
  
`