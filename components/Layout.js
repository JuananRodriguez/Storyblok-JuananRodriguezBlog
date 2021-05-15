import Head from "../components/Head";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import StoryblokService from "../utils/storyblok-service";
import GlobalStyle from "../styled/GlobalStyle.styled";
import styled from "styled-components";

const LayoutStyled = styled.div`
  display: flex;
  flex-direction: column;

  width: width 100%;
  height: 100vh;

  main {
    flex: 1;
  }
`;

const Layout = ({ children, language }) => (
  <>
    <GlobalStyle />
    <Head />
    <LayoutStyled>
      <Navigation language={language} />
      <main>{children}</main>
      <Footer />
    </LayoutStyled>
    {StoryblokService.bridge()}
  </>
);

export default Layout;
