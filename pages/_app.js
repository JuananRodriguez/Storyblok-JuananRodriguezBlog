import { ThemeProvider } from 'styled-components'
import '../styles/tailwind.css'

const theme = {
  breakpoints: {
    m: "1040px",
    l: "1200px",
  },
  colors: {
    title: '#3c3f40', 
    text: '#040404',
  },
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
