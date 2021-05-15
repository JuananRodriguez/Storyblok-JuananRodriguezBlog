import { createGlobalStyle, css } from "styled-components";

const HeadlingCommons = css`
  margin-top: 4.5rem;
  margin-bottom: 1rem;
  font-weight: bolder;
`;

const GlobalStyle = createGlobalStyle`${({ theme }) => `

    h1, h2, h3, h4, h5, h6, p {
      font-family: ${theme.fonts.generalFonts};
      color: ${theme.colors.text};
    }

    pre, code{
      font-family: ${theme.fonts.codeFont};
      font-size: 1rem;
    }

    * {
      box-sizing: border-box;
      line-height: 1.5;
    }
    
    h1 {
      ${HeadlingCommons};
      color: ${theme.colors.title};
      font-size: 3rem;
      font-weight: bold;
      @media (max-width: ${theme.breakpoints.m}){
          font-size: 1.8rem;
      }
    }

    h2 {
      ${HeadlingCommons};
      color: ${theme.colors.title};
      font-size: 2rem;
      @media (max-width: ${theme.breakpoints.m}){
          font-size: 1.8rem;
      }
    }

    p {
      font-size: 1.4rem;
      color: ${theme.colors.text};
      margin-bottom: 1rem;

      @media (max-width: ${theme.breakpoints.m}){
          font-size: 1.25rem;;
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
