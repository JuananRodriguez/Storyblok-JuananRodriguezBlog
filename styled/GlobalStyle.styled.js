import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`${({ theme }) => `
    h2 {
      font-size: 2rem;
      color: ${theme.colors.text};
      margin-top: 4rem;
      margin-bottom: 1rem;
      font-weight: bolder;

      @media (max-width: ${theme.breakpoints.m}){
          font-size: 1.8rem;
      }
    }
  `}
`;

export default GlobalStyle;
