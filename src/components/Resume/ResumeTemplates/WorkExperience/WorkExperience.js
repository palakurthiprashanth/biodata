import React from 'react';
import ResumeHeading from '../ResumeHeading/ResumeHeading';

const WorkExperience = () => {
  return (
    <div className="resume-screen-container" key="work-experience">
      <ResumeHeading
        heading={'Ehizeex Technoloy'}
        subHeading={'FULL STACK DEVELOPER INTERN'}
        fromDate={'2021'}
        toDate={'present'}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          Currently working as MERN stack web and mobile developer and also an
          online instructor on udemy.
        </span>
        <br />
        <span className="resume-description-text">
          - Developed an ecommerce website for client with the dashboard for
          managing the products, managing reviews, users, payment etc. .
        </span>
        <br />
        <span className="resume-description-text">
          - Integrated the web app with backend services to create new user
          onboarding application with dynamic form content.
        </span>
        <br />
        <span className="resume-description-text">
          - I stretch my mental capacity to develope UI as per the given
          designs.
        </span>
      </div>
    </div>
  );
};
export default WorkExperience;
