import React from "react";
import "../styles/IssueModal.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

class IssueModal extends React.Component {
  render() {
    const { issue, onClose } = this.props;
    if (!issue) return null;
    return (
      <div className="issue-modal-overlay" onClick={onClose}>
        <div className="issue-modal-content" onClick={e => e.stopPropagation()}>
          <button className="issue-modal-close" onClick={onClose}>&times;</button>
          <h2 className="issue-modal-title">{issue.title}</h2>
          <LazyLoadImage className="issue-modal-image" src={issue.picture} alt={issue.title} />
          <p className="issue-modal-description">{issue.description}</p>
        </div>
      </div>
    );
  }
}

export default IssueModal;
