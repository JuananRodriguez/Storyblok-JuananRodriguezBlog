import Teaser from "./Teaser";
import Feature from "./Feature";
import PortfolioGrid from "./PortfolioGrid";
import PostsGrid from "./PostsGrid";
import Grid from "./Grid";
import Placeholder from "./Placeholder";
import HomePresentation from "./HomePresentation";
import Section from "./Section";
import DynamicTitle from "./titles/DynamicTitle";
import Text from "./Text";
import Story from "./Story";
import Timer from "./Timer";

const Components = {
  timer: Timer,
  title: DynamicTitle,
  section: Section,
  teaser: Teaser,
  grid: Grid,
  feature: Feature,
  "home-presentation": HomePresentation,
  "portfolio-grid": PortfolioGrid,
  "posts-grid": PostsGrid,
  text: Text,
  story: Story,
};

const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component];
    return <Component blok={blok} />;
  }
  return <Placeholder componentName={blok.component} />;
};

export default DynamicComponent;
