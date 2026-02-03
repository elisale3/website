import React from "react";
import "../../styles/WhoWeAre.scss";
import AllStaffPic from "../../static/who-are-we-imgs/ExecPic.JPG";
import ExecPic from "../../static/who-are-we-imgs/AllStaffPic.JPG";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const WhoWeAre = () => {
  return (
    <div className="who-we-are-container">
      <div className="content">
        <div className="image-large">
          <LazyLoadImage src={AllStaffPic} alt="Large Placeholder" />
        </div>
        <div className="text-section">
          <h2 className="title">Who We Are</h2>
          <p className="description">
            TREND is a student-run fashion and lifestyle magazine at UCSD. As a vibrant collective of student artists, designers, writers, photographers, stylists, and marketing managers, we strive to capture the pulse of campus life and foster an inclusive community of creatives at UCSD. Each academic year, we release two issues—Fall/Winter and Spring/Summer—and organize a fashion show that showcases innovative pieces and compelling narratives, amplifying diverse voices. Explore our issues, meet our team, and discover TREND.
          </p>
        </div>
        <div className="image-small">
          <LazyLoadImage src={ExecPic} alt="Small Placeholder" />
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
