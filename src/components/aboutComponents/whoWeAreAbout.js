// src/components/aboutComponents/whoWeAreAbout.js

import React from "react";
import "../../styles/WhoWeAre.scss";
import AllStaffPic from "../../static/who-are-we-imgs/AllStaffPic.JPG";
import { LazyLoadImage } from 'react-lazy-load-image-component';

class WhoWeAreAbout extends React.Component {
  render() {
    return (
      <div className="who-we-are-container">
        <div className="content">
          <div className="image-large">
            <LazyLoadImage src={AllStaffPic} alt="Who We Are" />
          </div>
          <div className="text-section">
            <h2 className="title">Who We Are</h2>
            <p className="description">
              Discover the story behind our organization and the values that drive us.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default WhoWeAreAbout;
