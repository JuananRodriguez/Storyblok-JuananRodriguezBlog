import React from "react";
import Layout from "../../components/Layout";
import StoryblokService from "../../utils/storyblok-service";
import TipsGrid from "../../components/TipsGrid";
import RichText from "../../molecules/RichText";
import { Section } from "../../molecules";
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tips: props.res.data.stories,
      language: props.language,
    };
  }

  static async getInitialProps({ query }) {
    StoryblokService.setQuery(query);

    let language = query.language || "en";
    let insertLanguage = language !== "en" ? `${language}/` : "";
    const res = await StoryblokService.get(`cdn/stories`, {
      starts_with: `${insertLanguage}tips/`,
    });

    return {
      res,
      language,
    };
  }

  componentDidMount() {
    StoryblokService.initEditor(this);
  }

  render() {
    const { tips } = this.state;
    const ignoreStartPage = tips.filter(({ is_startpage }) => !is_startpage);
    const [startPage] = tips.filter(({ is_startpage }) => is_startpage);

    return (
      <Layout language={this.state.language}>
        <Section>
          <RichText content={startPage.content.content} />
          <TipsGrid blok={{ items: ignoreStartPage, _uid: "tips" }} />
        </Section>
      </Layout>
    );
  }
}

// const EntryPoint = ({ res, language }) => {
//   const [story] = useStoryblokEditor(res.data.story);

//   console.log('stories', res.data)

//   return (
//     <Layout language={language}>
//       <TipPost blok={story.content} />
//     </Layout>
//   );
// };

// EntryPoint.getInitialProps = async ({ asPath, query }) => {
//   StoryblokService.setQuery(query);

//   let language = query.language || "en";
//   let trimDefault = asPath.replace("/en/tips", "/tips");
//   let res = await StoryblokService.get(`cdn/stories${trimDefault}`);

//   return { res, language };
// };

// export default EntryPoint;
