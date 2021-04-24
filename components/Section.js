import React from "react";
import SbEditable from "storyblok-react";
import DynamicComponent from './DynamicComponent'

const Section = ({ blok }) => {
    const { _uid, bloks } = blok
    return (
        <SbEditable content={blok} key={_uid}>
            <section>
                {
                    bloks.map((nestedBlok) => <DynamicComponent blok={nestedBlok} />)
                }
            </section>
        </SbEditable>
    );
};

export default Section;
