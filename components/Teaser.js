import React from "react";
import SbEditable from "storyblok-react";

const Teaser = ({ blok }) => {
  if (blok.image) {
    return (
      <SbEditable content={blok}>
        <div className="bg-white-half">
          <div className="pb-6 pt-16 container mx-auto">
            <h2 className="text-6xl font-bold font-serif text-primary">
              {blok.headline}
            </h2>
            <img
              src={blok.image.filename}
              alt={blok.image.alt}
              // className="w-full"
            />
          </div>
        </div>
      </SbEditable>
    );
  }
  return null;
};

export default Teaser;
