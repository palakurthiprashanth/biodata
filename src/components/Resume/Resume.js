import React from 'react';
import './Resume.css';
import ResumeHeaders from './ResumeHeaders/ResumeHeaders';
import ResumeContent from './ResumeContent/ResumeContent';
import ScreenHeading from '../commons/ScreenHeading/ScreenHeading';

const Resume = () => {
  return (
    <div className="resume-container screen-container">
      <ScreenHeading title={'Resume'} subHeading={'My Formal Bio Details'} />
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
