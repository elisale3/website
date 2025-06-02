import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import '../styles/polaroid.scss';

const Polaroid = ({picture, name}) => {
  const[imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    if(typeof picture === "function") {
      picture().then((module) => {
        // Get the filename from the module.default path
        const filename = module.default.split('/').pop();
        // Construct the path to the WebP image in the build directory
        setImageSrc(`/static/media/${filename.replace(/\.(jpg|jpeg|png)$/i, '.webp')}`);
      });
    } else {
      // For direct image paths, use as is
      setImageSrc(picture);
    }
  }, [picture]);

  return(
    <div className="polaroid-container">
      <div className="polaroid-frame">
        <div className="image-frame">
          {imageSrc && (
            <LazyLoadImage 
              className="polaroid-image" 
              src={imageSrc} 
              alt={name} 
              effect="blur"
              threshold={100}
              loading="lazy"
            />
          )}
        </div>
        <div className="polaroid-info">
          <h5>
            {name}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Polaroid;