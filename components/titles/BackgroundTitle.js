import React from "react";
import SbEditable from "storyblok-react";
import styled from "styled-components";

const TitleStyled = styled.h1`
${({ theme, backgroundContent }) => `
        color: ${theme.colors.title};
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        text-transform: uppercase;
        font-weight: 900;
        font-size: 35px;
        position: relative;
        height: 120px;

        &::after{
            content: "${backgroundContent}";
            position: absolute;
            left: 0;
            bottom: 0;
            color: transparent;
            font-size: 150px;
            font-weight: 900;
            opacity: .4;
            line-height: 130px;
            -webkit-text-stroke: 1px ${theme.colors.title};
            -webkit-user-select: none;
        }
    `}
`
const BackgroundTitle = ({ blok }) => {
    const { _uid, content, subtitle } = blok
    return (
        <SbEditable content={blok} key={_uid}>
            <TitleStyled backgroundContent={content}>{subtitle}</TitleStyled>
        </SbEditable>
    );
};

export default BackgroundTitle;
