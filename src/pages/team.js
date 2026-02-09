import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import FilmStrip from "../components/teamComponents/filmStrip";
import "../styles/Team.scss";

const LazyLoadedTeamGrid = React.lazy(() =>
  import("../components/teamComponents/teamGrid")
);

class Team extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Team | TREND at UCSD</title>
          <link rel="canonical" href="https://www.trendatucsd.com/team" />
        </Helmet>

        <div className="team-page">
          <FilmStrip />

          <div className="team-content">
            <div className="team-header">
              <h2 className="team-title">TREND Team</h2>
              <p className="team-year">2025 - 2026</p>
            </div>

            <Suspense fallback={<div>Loading...</div>}>
              <LazyLoadedTeamGrid />
            </Suspense>
          </div>
        </div>
      </>
    );
  }
}

export default Team;
