import React from "react";
import SbEditable from "storyblok-react";
import styled from "styled-components";

const TitleStyled = styled.h1`
${({ theme, backgroundContent }) => `
        margin-bottom: 1rem;
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
            font-weight: 900;
            -webkit-text-stroke: 1px ${theme.colors.title};
            -webkit-user-select: none;
            font-size: 150px;
            line-height: 130px;
            opacity: .4;
            
            @media (max-width: ${theme.breakpoints.l}){
                font-size: 90px;
                line-height: 80px;
                opacity: .3;
            }
    
            @media (max-width: ${theme.breakpoints.m}){
                font-size: 70px;
                line-height: 60px;
                opacity: .2;
            }
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
