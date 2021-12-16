import React from 'react';
import './Resume.css';
import ResumeHeaders from './ResumeHeaders/ResumeHeaders';
import ResumeContent from './ResumeContent/ResumeContent';

const Resume = () => {
  return (
    <div className="resume-container screen-container">
      <div className="resume-content">
        Header
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">
                <ResumeHeaders />
              </div>
            </div>
          </div>
          <div className="resume-bullet-details">
            <ResumeContent />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Resume;
