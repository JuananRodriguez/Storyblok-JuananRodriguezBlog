import React from "react";
import SbEditable from "storyblok-react";
import { render } from "storyblok-rich-text-react-renderer";
import DynamicComponent from './DynamicComponent'

const defaultBlokResolver = (component, blok) => {
    return <DynamicComponent blok={{ component, ...blok }} />
}

const Story = ({ blok }) => {
    const { _uid, content } = blok

    return (
        <SbEditable content={blok} key={_uid}>
            {render(content, { defaultBlokResolver })}
        </SbEditable>
    );
};

export default Story;
