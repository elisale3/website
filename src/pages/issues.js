import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { issuesInfo } from "../components/issuesInfo";
import IssueBlock from "../components/issueBlock";
import IssueDescription from "../components/issueDescription";
import "../styles/Issues.scss";
import FeaturedIssueGallery from "../components/featuredIssueGallery";
import IssueModal from "../components/issueModal";

class Issues extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedIssue: null };
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }
  
  render () {
    return (
      <div className="issues-page">
        <FeaturedIssueGallery/>
        <IssueDescription picture={issuesInfo[0].picture} title={issuesInfo[0].title} link={issuesInfo[0].link} description={issuesInfo[0].description}/>
        <Container className="issues-grid-container" >
          <div className="issues">
          <Row justify="center" >
            {issuesInfo.slice(1).map((issue, idx) => {
              return (
                <React.Fragment key={issue.title}>
                  <Col xs={6} sm={6} md={5} lg={4} key={idx} >
                      <IssueBlock
                        key={idx}
                        picture={issue.picture}
                        title={issue.title}
                        link={issue.link}
                        description={issue.description}
                        onClick={() => this.setState({ selectedIssue: issue })}
                      />
                  </Col>
                </React.Fragment>
              );
            })}
          </Row>
          </div>
        </Container>
        <IssueModal issue={this.state.selectedIssue} onClose={() => this.setState({ selectedIssue: null })} />
      </div>
      
    )
  }
}

export default Issues;