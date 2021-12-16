import React, { useEffect } from 'react';
import ScreenHeading from '../commons/ScreenHeading/ScreenHeading';
import './AboutMeDetails.css';

const AboutMeDetails = (props) => {
  const SCREEN_CONSTANTS = {
    description:
      'Full stack web and mobile developer with background knowledge of MERN stacks with redux, along with a knack of building applications with utmost efficiency. Strong professional with a BSC willing to be an asset for an organization.',
    heading: 'Here are a Few Highlights:',
    highlights: {
      bullets: [
        'Full Stack web and mobile development',
        'Interactive Front End as per the design',
        'React and React Native',
        'Redux for State Mnanagement',
        'Building REST API',
        'Managing database',
      ],
    },
  };

  const renderHighilight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highilight" key={i}>
        <div className="highilight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div className="about-me-container screen-container" id={props.id || ''}>
      <div className="about-me-parent">
        <ScreenHeading title={'About Me'} subHeading={'Why Choose Me ?'} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highilights">
              <div className="highilight-heading">
                <span>{SCREEN_CONSTANTS.heading}</span>
              </div>
              {renderHighilight()}
            </div>
            <div className="about-me-options">
              <button className="btn primary-btn">
                {''}
                Hire Me {''}
              </button>
              <a href="prashanth.pdf" download="prashanth-resume.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeDetails;
