import React from 'react';
const ProgrammingSkills = () => {
  const programmingSkillDetails = [
    { skill: 'Javascript', ratingPercentage: 85 },
    { skill: 'React JS', ratingPercentage: 85 },
    { skill: 'Express JS', ratingPercentage: 85 },
    { skill: 'Node JS', ratingPercentage: 85 },
    { skill: 'MongoDB', ratingPercentage: 85 },
    { skill: 'HTML', ratingPercentage: 85 },
    { skill: 'CSS', ratingPercentage: 85 },
  ];
  return (
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + '%' }}
              className="active-percentage"
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ProgrammingSkills;
