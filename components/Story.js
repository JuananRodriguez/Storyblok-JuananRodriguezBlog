import React from "react";
import SbEditable from "storyblok-react";
import { render, NODE_PARAGRAPH } from "storyblok-rich-text-react-renderer";
import DynamicComponent from './DynamicComponent'
import ParagraphStyled from '../styled/ParagraphStyled.styled'

const defaultBlokResolver = (component, blok) => {
    return <DynamicComponent blok={{ component, ...blok }} />
}

const nodeResolvers = {
    [NODE_PARAGRAPH]: (children) => <ParagraphStyled >{children}</ParagraphStyled>
}

const Story = ({ blok }) => {
    const { _uid, content } = blok

    return (
        <SbEditable content={blok} key={_uid}>
            {render(content, {
                nodeResolvers,
                defaultBlokResolver,
            })}
        </SbEditable>
    );
};

export default Story;
