import React from "react";
import SbEditable from "storyblok-react";

const Text = ({ blok }) => {
  const { _uid, content, css } = blok;
  return (
    <SbEditable content={blok} key={_uid}>
      <p cssFromStoryBlok={css}>{content}</p>
    </SbEditable>
  );
};

export default Text;
