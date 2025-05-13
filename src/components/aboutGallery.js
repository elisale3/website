import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import featured1 from "../static/featured-issue/featured_2.jpg";
import featured2 from "../static/featured-issue/featured_4.jpg";
import featured3 from "../static/featured-issue/featured_6.jpg";
import featured4 from "../static/featured-issue/featured_8.jpg";
import featured5 from "../static/featured-issue/featured_10.jpg";
import featured6 from "../static/featured-issue/featured_2.jpg";
import featured7 from "../static/featured-issue/featured_4.jpg";
import featured8 from "../static/featured-issue/featured_6.jpg";
import featured9 from "../static/featured-issue/featured_8.jpg";
import featured10 from "../static/featured-issue/featured_10.jpg";

import "../styles/AboutGallery.scss";

class AboutGallery extends React.Component {
  constructor(props) {
    super(props);
    this.carouselRef = React.createRef();
  }

  handlePrev = () => {
    this.carouselRef.current && this.carouselRef.current.slidePrev();
  };

  handleNext = () => {
    this.carouselRef.current && this.carouselRef.current.slideNext();
  };

  render() {
    const responsiveObject = {
      900: { items: 3, itemsFit: 'contain' },
      1200: { items: 4, itemsFit: 'contain' },
      1500: { items: 5 },
    };

    const handleDragStart = (e) => e.preventDefault();

    const images = [
      featured1, featured2, featured3, featured4, featured5,
      featured6, featured7, featured8, featured9, featured10
    ];

    // Add staggered class to every other image
    const aboutGalleryImages = images.map((img, idx) => (
      <div className={`about-img-container${idx % 2 === 1 ? ' staggered' : ''}`} key={img}>
        <img className="about-img" src={img} onDragStart={handleDragStart} alt={img} />
      </div>
    ));

    return (
      <div className="about-gallery-container">
        <button
          className="carousel-btn prev"
          aria-label="Previous"
          onClick={this.handlePrev}
        >
          &#8592;
        </button>
        <AliceCarousel
          ref={this.carouselRef}
          items={aboutGalleryImages}
          disableDotsControls
          disableButtonsControls
          mouseTrackingEnabled
          infinite={true}
          autoPlay={true}
          autoPlayInterval={1500}
          responsive={responsiveObject}
        />
        <button
          className="carousel-btn next"
          aria-label="Next"
          onClick={this.handleNext}
        >
          &#8594;
        </button>
      </div>
    );
  }
}

export default AboutGallery;
