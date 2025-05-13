// src/pages/about.js

import React from "react";
import AboutGallery from "../components/aboutGallery";
import "../styles/About.scss";

class About extends React.Component {
  render() {
    return (
      <div className="about-container">
        <AboutGallery />
      </div>
    );
  }
}

export default About;
