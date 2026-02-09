// src/pages/about.js


import React from "react";
import { Helmet } from "react-helmet";
import HeaderAbout from "../components/aboutComponents/headerAbout";
import PhotoCarouselAbout from "../components/aboutComponents/photoCarouselAbout";
import WhoWeAreAbout from "../components/aboutComponents/whoWeAreAbout";
import WhatWeDoAbout from "../components/aboutComponents/whatWeDoAbout";
import ArtifactSectionAbout from "../components/aboutComponents/artifactSectionAbout";
import "../styles/About.scss";

class About extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>About | TREND at UCSD</title>
          <link rel="canonical" href="https://www.trendatucsd.com/about" />
        </Helmet>

        <div className="about-page">
          <PhotoCarouselAbout />
          <HeaderAbout />
          <WhoWeAreAbout />
          <WhatWeDoAbout />
          <ArtifactSectionAbout />
        </div>
      </>
    );
  }
}

export default About;
