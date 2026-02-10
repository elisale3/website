import React from "react";
import { Helmet } from "react-helmet";
import { Container, Row, Col } from "react-grid-system";
import { issuesInfo } from "../components/issuesComponents/issuesInfo";
import IssueBlock from "../components/issuesComponents/issueBlock";
import IssueDescription from "../components/issuesComponents/issueDescription";
import "../styles/Issues.scss";
import FeaturedIssueGallery from "../components/issuesComponents/featuredIssueGallery";
import IssueModal from "../components/issuesComponents/issueModal";

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
      <>
        <Helmet>
          <title>Issues | TREND at UCSD</title>
          <link rel="canonical" href="https://www.trendatucsd.com/issues" />
        </Helmet>

        <div className="issues-page">
          <FeaturedIssueGallery/>
          <IssueDescription 
            picture={issuesInfo[0].picture} 
            title={issuesInfo[0].title} 
            link={issuesInfo[0].link} 
            description={issuesInfo[0].description}
            onClick={() => this.setState({ selectedIssue: issuesInfo[0] })}
          />
          <Container className="issues-grid-container">
            <div className="issues">
              <Row justify="center">
                {issuesInfo.slice(1).map((issue, idx) => {
                  return (
                    <React.Fragment key={issue.title}>
                      <Col xs={6} sm={6} md={5} lg={4} key={idx}>
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
          {this.state.selectedIssue && (
            <IssueModal
              issue={this.state.selectedIssue}
              onClose={() => this.setState({ selectedIssue: null })}
            />
          )}
        </div>
      </>
    );
  }
}

export default Issues;