import React from "react";
import SbEditable from "storyblok-react";
import { H1, RichText, Section } from "../molecules";

const TipPost = ({ blok }) => {
  const { content, title } = blok;
  return (
    <SbEditable content={blok} key={blok._uid}>
      <Section>
        <H1>{title}</H1>
        <RichText content={content} />
      </Section>
    </SbEditable>
  );
};

export default TipPost;
