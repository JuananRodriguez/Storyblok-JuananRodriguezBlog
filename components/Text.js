import React from "react";
import SbEditable from "storyblok-react";
import ParagraphStyled from "./../styled/ParagraphStyled.styled";

const Text = ({ blok }) => {
    const { _uid, content, css } = blok
    return (
        <SbEditable content={blok} key={_uid}>
            <ParagraphStyled cssFromStoryBlok={css}>{content}</ParagraphStyled>
        </SbEditable>
    );
};

export default Text;
