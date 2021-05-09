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

    p {
      font-size: 1.5rem;
      color: ${theme.colors.text};
      margin-bottom: 1rem;

      @media (max-width: ${theme.breakpoints.m}){
          font-size: 1.4rem;
      }
    }



  `}
`;

export default GlobalStyle;
