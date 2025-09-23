// src/pages/about.js

import React from "react";
import HeaderAbout from "../components/aboutComponents/headerAbout";
import PhotoCarouselAbout from "../components/aboutComponents/photoCarouselAbout";
import WhoWeAreAbout from "../components/aboutComponents/whoWeAreAbout";
import WhatWeDoAbout from "../components/aboutComponents/whatWeDoAbout";
import ArtifactSectionAbout from "../components/aboutComponents/artifactSectionAbout";
import "../styles/About.scss";

class About extends React.Component {
  render() {
    return (
      <div className="about-page">
        <PhotoCarouselAbout />
        <HeaderAbout />
        <WhoWeAreAbout />
        <WhatWeDoAbout />
        <ArtifactSectionAbout />
      </div>
    );
  }
}

export default About;
