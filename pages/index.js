import React from "react";
import Page from "../components/Page";
import Layout from "../components/Layout";
import StoryblokService from "../utils/storyblok-service";
import useStoryblokEditor from "../hooks/useStoryblokEditor";

const EntryPoint = ({ res, language }) => {
  const [story] = useStoryblokEditor(res.data.story);
  return (
    <Layout language={language}>
      <Page content={story.content} />
    </Layout>
  );
};

export async function getServerSideProps({ query }) {
  StoryblokService.setQuery(query);
  let language = query.language || "en";
  let insertLanguage = language !== "en" ? `/${language}` : "";
  let res = await StoryblokService.get(`cdn/stories${insertLanguage}/home`, {
    resolve_relations: "portfolio-grid.items,posts-grid.items,tips-grid.items",
  });

  return {
    props: {
      res,
      language,
    },
  };
}

export default EntryPoint;
