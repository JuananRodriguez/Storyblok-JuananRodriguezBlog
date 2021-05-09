import React from "react";
import SbEditable from "storyblok-react";
import styled from "styled-components";
import DynamicComponent from './DynamicComponent'

const SectionBackgroundStyled = styled.div`
${({theme}) => `
        z-index: -1;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: -40% center;
        
        @media (max-width: ${theme.breakpoints.l}){
            background-position: -100px center;
        }
        
        @media (max-width: ${theme.breakpoints.m}){
            background-position: center;
        }

        &:before{
            content:"";
            width: 40%;
            height: 100%;
            background: white;
            display: inline-block;

            @media (max-width: ${theme.breakpoints.m}){
                display: none;
            }
        }

        & + img {
            display: none;
        }
    `}
`

const SectionBackground = ({ filename, alt }) => {
    return (
        <>
            <SectionBackgroundStyled className="section-background" style={{ backgroundImage: `url(${filename})` }} />
            <img src={filename} alt={alt} />
        </>
    )
}

const SectionWrapperStyled = styled.section`${({ cssFromStoryBlok }) => `
        overflow: hidden;
        position: relative;
        width: 100%;
        padding-left: 1.0rem;
        padding-right: 1.0rem;

        ${cssFromStoryBlok}
        `}
        `

const SectionStyled = styled.div`${({ isFullwidth, isFullpage }) => `
        overflow: hidden;
        position: relative;
        margin: auto;
        max-width: ${!isFullwidth ? "1000px" : "100%"};
        min-height: ${isFullpage ? "100vh" : "auto"};
    `}
`

const Section = ({ blok }) => {
    const { _uid, bloks, fullwidth, fullpage, css, background_image } = blok
    return (
        <SbEditable content={blok} key={_uid}>
            <SectionWrapperStyled cssFromStoryBlok={css}>
                <SectionStyled className="section-content" isFullwidth={fullwidth} isFullpage={fullpage} >
                    {bloks.map((nestedBlok) => <DynamicComponent key={nestedBlok._uid} blok={nestedBlok} />)}
                </SectionStyled>
                {background_image && <SectionBackground {...background_image} />}
            </SectionWrapperStyled>
        </SbEditable>
    );
};

export default Section;
