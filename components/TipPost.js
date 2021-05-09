import React from "react";
import SbEditable from "storyblok-react";
import RichText from "../molecules/RichText";
import Styled from "styled-components";

const Section = Styled.section`
    max-width: 1000px;
    margin: auto;
    padding: 1rem;
`;

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
