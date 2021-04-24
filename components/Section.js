import React from "react";
import SbEditable from "storyblok-react";
import styled from "styled-components";
import DynamicComponent from './DynamicComponent'



const SectionStyled = styled.section`${({ isFullwidth, isFullpage }) => `
    position: relative;
    max-width: ${!isFullwidth ? "1200px" : "100%"};
    margin: auto;
    min-height: ${isFullpage ? "100vh" : "auto"};
`}
`

const Section = ({ blok }) => {
    const { _uid, bloks, fullwidth, fullpage } = blok
    return (
        <SbEditable content={blok} key={_uid}>
            <SectionStyled isFullwidth={fullwidth} isFullpage={fullpage}>
                {
                    bloks.map((nestedBlok) => <DynamicComponent blok={nestedBlok} />)
                }
            </SectionStyled>
        </SbEditable>
    );
};

export default Section;
