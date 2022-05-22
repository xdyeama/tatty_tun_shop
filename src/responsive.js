import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (min-width: 320px) and (max-width: 480px) {
      ${props}
    }
  `;
};

export const tablet = (props) => {
  return css`
    @media only screen and (min-width: 481px) and (max-width: 1280px){
      ${props}
    }
  `
}

export const smallScreen = (props) => {
  return css`
    @media only screen and (min-width: 481px) and (max-width: 1280px){
      ${props}
    }
  `
}

export const largeScreen = (props) => {
  return css`
    @media only screen and (min-width: 1281px){
      ${props}
    }
  `
}