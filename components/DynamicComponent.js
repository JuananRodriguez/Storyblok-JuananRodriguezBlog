import Teaser from './Teaser'
import Feature from './Feature'
import FeaturedPosts from './FeaturedPosts'
import PortfolioGrid from './PortfolioGrid'
import Grid from './Grid'
import Placeholder from './Placeholder'
import Section from './Section'
import DynamicTitle from './titles/DynamicTitle'
import Text from './Text'
import Story from './Story'

const Components = {
  'title': DynamicTitle,
  'section': Section,
  'teaser': Teaser,
  'grid': Grid,
  'feature': Feature,
  'featured-posts': FeaturedPosts,
  'portfolio-grid': PortfolioGrid,
  'text': Text,
  'story': Story,
}

const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] !== 'undefined') {
    const Component = Components[blok.component]
    return <Component blok={blok} />
  }
  return <Placeholder componentName={blok.component} />
}

export default DynamicComponent
