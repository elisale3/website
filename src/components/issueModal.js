import React from "react";
import "../styles/IssueModal.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

class IssueModal extends React.Component {
  truncateText = (text, wordLimit) => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
  };

  render() {
    const { issue, onClose } = this.props;
    if (!issue) return null;
    return (
      <div className="issue-modal-overlay" onClick={onClose}>
        <div className="issue-modal-content" onClick={e => e.stopPropagation()}>
        <button className="issue-modal-close" onClick={onClose}>&times;</button>
          <div className="issue-modal-image-container">
            <LazyLoadImage 
              className="issue-modal-image" 
              src={issue.picture} 
              alt={issue.title}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
          <p className="issue-modal-description">{this.truncateText(issue.description, 65)}</p>
          {issue.link && (
            <a 
              href={issue.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="issue-modal-read-more"
            >
              Read More
            </a>
          )}
        </div>
      </div>
    );
  }
}

export default IssueModal;
