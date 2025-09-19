// src/components/aboutComponents/whatWeDoAbout.js

import React from "react";
import "../../styles/WhoWeAre.scss";
import AllStaffPic from "../../static/who-are-we-imgs/AllStaffPic.JPG";
import { LazyLoadImage } from 'react-lazy-load-image-component';

class WhatWeDoAbout extends React.Component {
  render() {
    return (
      <div className="who-we-are-container">
        <div className="content">
          <div className="image-large">
            <LazyLoadImage src={AllStaffPic} alt="What We Do" />
          </div>
          <div className="text-section">
            <h2 className="title">What We Do</h2>
            <p className="description">
              Explore our projects, initiatives, and the impact we're making in our community.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default WhatWeDoAbout;
