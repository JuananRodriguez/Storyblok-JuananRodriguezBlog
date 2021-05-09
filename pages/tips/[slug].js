import React from "react";
import Layout from "../../components/Layout";
import TipPost from "../../components/TipPost";
import StoryblokService from "../../utils/storyblok-service";
import useStoryblokEditor from "../../hooks/useStoryblokEditor";

const EntryPoint = ({ res, language }) => {
  const [story] = useStoryblokEditor(res.data.story);
  
  return (
    <Layout language={language}>
      <TipPost blok={story.content} />
    </Layout>
  );
};

EntryPoint.getInitialProps = async ({ asPath, query }) => {
  StoryblokService.setQuery(query);

  let language = query.language || "en";
  let trimDefault = asPath.replace("/en/tips", "/tips");
  let res = await StoryblokService.get(`cdn/stories${trimDefault}`);

  return { res, language };
};

export default EntryPoint;