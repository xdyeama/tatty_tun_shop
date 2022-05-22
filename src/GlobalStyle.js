import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --clr-tan: rgb(205,175,151);
    --clr-white: #fff;
    --clr-black: #000;
    --clr-gray: #f5fbfb;

    --fs-small: 1rem;
    --fs-medium: 1.25rem;
    --fs-large: 2rem;
    --fs-huge: 3rem;

    --fw-norm: 300;
    --fw-med: 600;
    --fw-bold: 900;

    --maxWidth: 1920px;
    --medWidth: 1280px;
    
  }

  *,
  ::before,
  ::after {
    box-sizing: border-box;
    font-family: 'Urbanist', sans-serif;
    margin: 0;
  }

  html{
    scroll-behavior: smooth;
  }
  body{
    margin: 0;
    padding: 0;
  }

  h1{
    font-size: var(--fs-medium);
    color: var(--clr-black)
  }

  p{
    font-size: var(--fs-small);
    color: var(--clr-black);
  }
`;

