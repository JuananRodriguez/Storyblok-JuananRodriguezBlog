import React from "react";
import SbEditable from "storyblok-react";
import styled from "styled-components";

const PStyled = styled.p`${({ cssFromStoryBlok }) => `${cssFromStoryBlok}`}
`

const Text = ({ blok }) => {
    const { _uid, content, css } = blok
    return (
        <SbEditable content={blok} key={_uid}>
            <PStyled cssFromStoryBlok={css}>{content}</PStyled>
        </SbEditable>
    );
};

export default Text;
