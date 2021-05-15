import { ThemeProvider } from "styled-components";
import Theme from "../styled/Theme";
import GlobalStyle from "../styled/GlobalStyle.styled";
import '../styled/customHighlight.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
