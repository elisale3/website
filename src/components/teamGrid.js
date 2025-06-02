import React from "react";
import { Container, Row, Col } from "react-grid-system";
import {teamInfo} from "./teamInfo"
import Polaroid from "./polaroid";
import "../styles/TeamGrid.scss";

class TeamGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: -1,
      loadedImages: new Set()
    };
  }

  componentDidMount() {
    const cachedState = localStorage.getItem("teamState");
    if (cachedState) {
      this.setState(JSON.parse(cachedState));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.showModal !== this.state.showModal) {
      localStorage.setItem("teamState", JSON.stringify(this.state));
    }
  }
  
  openModal = value => {
    this.setState({
      showModal: value
    });
  };

  hideModal = value => {
    this.setState({
      showModal: -1
    });
  };

  componentWillUnmount() {
    this.setState({ showModal: -1 });
  }

  renderTeamSection = (position, title) => {
    const teamMembers = teamInfo.filter(member => member.position === position);
    
    return (
      <>
        <Row className="top-margin-section">
          <h4>{title}</h4>
        </Row>
        <Row className="team-row">
          {teamMembers.map((teamMember, idx) => (
            <Col xs={6} sm={6} md={3} l={4} key={teamMember.name}>
              <div onClick={() => this.openModal(idx)}>
                <Polaroid
                  picture={teamMember.picture}
                  name={teamMember.name}
                />
              </div>
            </Col>
          ))}
        </Row>
      </>
    );
  };

  render() {
    return (
      <div className="team-grid-section">
        <Container className="team-grid-container">
          <Row className="top-margin-section">
            <h2>TREND Team</h2>
          </Row>
          <Row className="top-margin-subsection">
            <h3>2024 - 2025</h3>
          </Row>
          <div className="team">
            {this.renderTeamSection('Editor in Chief', 'Editors in Chief')}
            {this.renderTeamSection('Photographer', 'Photography')}
            {this.renderTeamSection('Writer', 'Writing')}
            {this.renderTeamSection('Graphic Designer', 'Graphic Design')}
            {this.renderTeamSection('External', 'External')}
            {this.renderTeamSection('Marketing', 'Marketing')}
            {this.renderTeamSection('Stylist', 'Styling')}
            {this.renderTeamSection('Web Developer', 'Web Development')}
          </div>
        </Container>
      </div>
    );
  }
}

export default TeamGrid;