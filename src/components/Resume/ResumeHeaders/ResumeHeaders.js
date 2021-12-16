import React, { useState, useContext } from 'react';
import { PortfolioContext } from '../../../context/PortfolioContext';

const ResumeHeaders = () => {
  // const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  // const [carouselOffsetStyle, setCarouselOffsetStyle] = useState({});
  const {
    contextObj: { resumeDetails },
  } = useContext(PortfolioContext);

  const resumeBullets = [
    { label: 'Education', logoSrc: 'education.svg' },
    { label: 'Work History', logoSrc: 'work-history.svg' },
    { label: 'Programming Skills', logoSrc: 'programming-skills.svg' },
    { label: 'Projects', logoSrc: 'projects.svg' },
    { label: 'Interests', logoSrc: 'intrests.svg' },
  ];

  const handleCarousel = (index) => {
    let offsetHeight = 360;
    let newCarouselOffset = {
      style: {
        transform: 'translateY(' + index * offsetHeight * -1 + 'px)',
      },
    };
    resumeDetails.setCarouselOffsetStyle(newCarouselOffset);
    resumeDetails.setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousel(index)}
        className={
          index === resumeDetails.selectedBulletIndex
            ? 'animate bullet selected-bullet'
            : 'animate bullet'
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src="https://cdn.jsdelivr.net/gh/palakurthiprashanth/prashanth-portfolio@master/src/assets/Resume/education.svg"
          alt="no internet"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  return <div>{getBullets()}</div>;
};
export default ResumeHeaders;
