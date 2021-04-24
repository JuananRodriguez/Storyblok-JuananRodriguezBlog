import Head from '../components/Head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import StoryblokService from '../utils/storyblok-service'

const Layout = ({ children, language }) => (
  <>
    <Head />
    {/* <Navigation language={language} /> */}
    {children}
    <Footer />
    {StoryblokService.bridge()}
  </>
)

export default Layout
