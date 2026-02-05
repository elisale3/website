import React from "react";
import "../../styles/IssueModal.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

class IssueModal extends React.Component {
  componentDidMount() {
    // Store the current scroll position
    this.scrollY = window.scrollY;

    // Prevent body scrolling when modal is open
    document.body.style.position = "fixed";
    document.body.style.top = `-${this.scrollY}px`;
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";
  }

  componentWillUnmount() {
    // Re-enable body scrolling when modal is closed
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    document.body.style.overflow = "";

    // Restore scroll position
    window.scrollTo(0, this.scrollY);
  }

  render() {
    const { issue, onClose } = this.props;
    if (!issue) return null;

    return (
      <div className="issue-modal-overlay" onClick={onClose}>
        <div
          className="issue-modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <button className="issue-modal-close" onClick={onClose}>
            &times;
          </button>

          <div className="issue-modal-image-container">
            <LazyLoadImage
              className="issue-modal-image"
              src={issue.picture}
              alt={issue.title}
            />
          </div>

          <div className="issue-modal-content-container">
            {/* Title always visible */}
            <h2 className="issue-modal-title">{issue.title}</h2>

            {/* Only the body scrolls */}
            <div className="issue-modal-body">
              <p className="issue-modal-description">{issue.description}</p>
            </div>

            {/* Button stays visible at the bottom */}
            <button
              className="issue-modal-button"
              onClick={() => window.open(issue.link, "_blank")}
              type="button"
            >
              View Issue
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="11"
                height="11"
                fill="currentColor"
                className="arrow-icon"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z" />
                <path d="M5 5h6V3H3v8h2V5z" />
                <path d="M5 21h16V11h2v12H3V9h2v12z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default IssueModal;
