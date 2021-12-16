import React from 'react';
import Education from '../ResumeTemplates/Education/Education';
import WorkExperience from '../ResumeTemplates/WorkExperience/WorkExperience';
import Projects from '../ResumeTemplates/Projects/Projects';
import ProgrammingSkills from '../ResumeTemplates/ProgrammingSkills/ProgrammingSkills';
import Interests from '../ResumeTemplates/Interests/Interests';

const ResumeTemplates = () => {
  const templates = [
    <Education />,
    <WorkExperience />,
    <ProgrammingSkills />,
    <Projects />,
    <Interests />,
  ];
  return <>{templates.map((ResumeDetail) => ResumeDetail)}</>;
};
export default ResumeTemplates;
