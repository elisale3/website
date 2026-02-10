import { scan } from "react-scan";
import React from "react";
import { Helmet } from "react-helmet";
import FeaturedIssue from "../components/homeComponents/featuredIssue";
import WhoWeAre from "../components/homeComponents/whoWeAre";
import HomepageVideo from "../components/homeComponents/homepageVideo.js";
import Blogs from "../components/homeComponents/blogs.js";
//import Upcoming from "../components/homeComponents/upcomingEvents";
import YouTrend from "../components/homeComponents/youTrend.js";
import "../styles/Home.scss";

scan({
  enabled: false,
});

class Home extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Helmet>
          <title>TREND at UCSD</title>
          <link rel="canonical" href="https://www.trendatucsd.com/" />
        </Helmet>

        <div className="home-container">
          {/* Background Elements */}
          <div className="background-main"></div>
          <div className="background-pattern"></div>
          <div className="background-icons">
            <div className="icon icon-1"></div>
            <div className="icon icon-2"></div>
            <div className="icon icon-3"></div>
            <div className="icon icon-4"></div>
          </div>

          {/* Page Sections */}
          <HomepageVideo />
          <FeaturedIssue />
          <Blogs />
          <WhoWeAre />
          {/* <Upcoming /> */}
          <YouTrend />
        </div>
      </>
    );
  }
}

export default Home;
