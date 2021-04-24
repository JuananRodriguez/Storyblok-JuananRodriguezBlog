import React from "react";
import SbEditable from "storyblok-react";

const Title = ({ blok }) => {
    const { _uid, content, subtitle } = blok
    return (
        <SbEditable content={blok} key={_uid}>
            <h1>{content}{subtitle}</h1>
        </SbEditable>
    );
};

export default Title;
