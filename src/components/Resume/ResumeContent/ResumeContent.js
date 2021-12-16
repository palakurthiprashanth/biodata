import React, { useContext } from 'react';
import { PortfolioContext } from '../../../context/PortfolioContext';
import ResumeTemplates from '../ResumeTemplates/ResumeTemplates';

const ResumeContent = () => {
  const {
    contextObj: { resumeDetails },
  } = useContext(PortfolioContext);
  return (
    <div
      style={resumeDetails.carouselOffsetStyle.style}
      className="resume-details-carousal"
    >
      <ResumeTemplates />
    </div>
  );
};
export default ResumeContent;
