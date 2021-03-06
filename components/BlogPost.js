import React from "react";
import SbEditable from "storyblok-react";
import { Section, RichText } from "../molecules";

const BlogPost = ({ blok }) => {
  const { long_text, title } = blok;

  return (
    <SbEditable content={blok} key={blok._uid}>
      <Section>
        <h1>{title}</h1>
        <article>
          <RichText content={long_text} />
        </article>
      </Section>
    </SbEditable>
  );
};

export default BlogPost;
