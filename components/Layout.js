import Head from "../components/Head";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import StoryblokService from "../utils/storyblok-service";
import GlobalStyle from "../styled/GlobalStyle.styled";

const Layout = ({ children, language }) => (
  <>
    <GlobalStyle />
    <Head />
    <Navigation language={language} />
    {children}
    <Footer />
    {StoryblokService.bridge()}
  </>
);

export default Layout;
