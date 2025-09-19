import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import '../../styles/polaroid.scss';

const Polaroid = ({picture, name, position}) => {

  const[imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    if(typeof picture === "function") {
      picture().then((module) => setImageSrc(module.default));
    } else {
      setImageSrc(picture);
    }
  }, [picture]);

  return(
    <div className="polaroid-container">
      <div className="polaroid-frame">
          <h6 className="polaroid-position">
            {position}
          </h6>
        <div className="image-frame">
          {imageSrc && (
            <LazyLoadImage 
              className="polaroid-image" 
              src={imageSrc} 
              alt={name} 
              effect="blur" 
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