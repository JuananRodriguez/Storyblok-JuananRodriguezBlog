import React from "react";
import SbEditable from "storyblok-react";
import { RichText, Section } from "../molecules";

const TipPost = ({ blok }) => {
  const { content, title } = blok;
  return (
    <SbEditable content={blok} key={blok._uid}>
      <Section>
        <h1>{title}</h1>
        <RichText content={content} />
      </Section>
    </SbEditable>
  );
};

export default TipPost;
