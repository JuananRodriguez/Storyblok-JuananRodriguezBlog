import React from 'react'
import Page from '../components/Page'
import Layout from '../components/Layout'
import StoryblokService from '../utils/storyblok-service'
import useStoryblokEditor from '../hooks/useStoryblokEditor'

const EntryPoint = (props) => {
  const [story] = useStoryblokEditor(props.res.data.story);
  return (
    <Layout language={props.language}>
      <Page content={story.content} />
    </Layout>
  )
}

EntryPoint.getInitialProps = async ({ query }) => {
  StoryblokService.setQuery(query)
  let language = query.language || "en"
  let insertLanguage = language !== "en" ? `/${language}` : ""
  let res = await StoryblokService.get(`cdn/stories${insertLanguage}/home`,
    {
      "resolve_relations": "portfolio-grid.works"
    })

  return {
    res,
    language
  }
}

export default EntryPoint;