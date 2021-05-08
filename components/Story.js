import React from "react";
import SbEditable from "storyblok-react";
import RichText from '../molecules/RichText';

const Story = ({ blok }) => {
    const { _uid, content } = blok

    return (
        <SbEditable content={blok} key={_uid}>
            <RichText content={content} />
        </SbEditable>
    );
};

export default Story;
