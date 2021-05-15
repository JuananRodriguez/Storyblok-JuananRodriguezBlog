import React from "react";
import SbEditable from "storyblok-react";
import { render } from "storyblok-rich-text-react-renderer";
import { Section, H1 } from "../molecules";

const BlogPost = ({ blok }) => {
  return (
    <SbEditable content={blok} key={blok._uid}>
      <Section>
        <H1>{blok.title}</H1>
        <article>{render(blok.long_text)}</article>
      </Section>
    </SbEditable>
  );
};

export default BlogPost;
