import React from "react";
import SbEditable from "storyblok-react";
import styled, { css } from "styled-components";

const CommonStyles = css`
${({ theme }) => `
        font-weight: 900;
        text-transform: uppercase;
        margin: 0;
        padding: 0;
        line-height: 1.1;
        letter-spacing: .8px;
        font-size: 120px;
        display: block;

        @media (max-width: ${theme.breakpoints.l}){
            font-size: 90px;
        }

        @media (max-width: ${theme.breakpoints.m}){
            font-size: 60px;
        }
    `}
`

const ContentSpanStyled = styled.span`
    ${CommonStyles}
    ${({ theme }) => `
        -webkit-text-stroke: 2px ${theme.colors.title};
        color: transparent;
    `}
`;

const SubtitleSpanStyled = styled.span`
    ${CommonStyles}
    ${({ theme }) => `
        color: ${theme.colors.title};
    `}
`;

const DoubleTitle = ({ blok }) => {
    const { _uid, content, subtitle } = blok
    return (
        <SbEditable content={blok} key={_uid}>
            <h1>
                <ContentSpanStyled className="double-title-content">{content}</ContentSpanStyled>
                <SubtitleSpanStyled className="double-title-subtitle">{subtitle}</SubtitleSpanStyled>
            </h1>
        </SbEditable>
    );
};

export default DoubleTitle;
