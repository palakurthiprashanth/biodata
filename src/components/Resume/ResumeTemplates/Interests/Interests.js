import React from 'react';
import ResumeHeading from '../ResumeHeading/ResumeHeading';
const Interests = () => {
  return (
    <div className="resume-screen-container" key="intrests">
      <ResumeHeading
        heading="Teaching"
        subHeading="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
      />
      <ResumeHeading
        heading="Music"
        subHeading="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
      />
      <ResumeHeading
        heading="Competitive Gaming"
        subHeading="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
      />
    </div>
  );
};
export default Interests;
