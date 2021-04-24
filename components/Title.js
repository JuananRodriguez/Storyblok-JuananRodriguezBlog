import React from "react";
import SbEditable from "storyblok-react";
import styled, { css } from "styled-components";


const CommonStyles = css`
    font-weight: 900;
    text-transform: uppercase;
    margin: 0;
    padding: 0;
    line-height: 1.1;
    letter-spacing: .8px;
    font-size: 120px;
    display: block;

    @media (max-width: 1200px){
        font-size: 90px;
    }

    @media (max-width: 1040px){
        font-size: 60px;
    }
`

const ContentSpanStyled = styled.span`
    ${CommonStyles}
    -webkit-text-stroke: 2px #434343;
    color: transparent;
`;

const SubtitleSpanStyled = styled.span`
    ${CommonStyles}
    color: #434343;
`;

const Title = ({ blok }) => {
    const { _uid, content, subtitle } = blok
    return (
        <SbEditable content={blok} key={_uid}>
            <h1>
                <ContentSpanStyled>{content}</ContentSpanStyled>
                <SubtitleSpanStyled>{subtitle}</SubtitleSpanStyled>
            </h1>
        </SbEditable>
    );
};

export default Title;
