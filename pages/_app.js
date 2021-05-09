import { ThemeProvider } from 'styled-components'
import Theme from '../styled/Theme';
import '../styles/tailwind.css'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
