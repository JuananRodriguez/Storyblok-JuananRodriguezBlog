import { createGlobalStyle, css } from "styled-components";

const HeadlingCommons = css`
  ${({ theme }) => `
      margin-top: 4rem;
      margin-bottom: 1rem;
      font-weight: bolder;
      color: ${theme.colors.text};
  `}
`;

const GlobalStyle = createGlobalStyle`${({ theme }) => `
    * {
      box-sizing: border-box;
    }

    h1 {
      ${HeadlingCommons};
      font-size: 3rem;
      font-weight: bold;
      @media (max-width: ${theme.breakpoints.m}){
          font-size: 1.8rem;
      }
    }

    h2 {
      ${HeadlingCommons};
      font-size: 2rem;
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

    a {
      color: ${theme.colors.link};
      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  `}
`;

export default GlobalStyle;
