import React from 'react';
import ResumeHeading from '../ResumeHeading/ResumeHeading';

const Education = () => {
  return (
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={'University of Legon Accra, Ghana'}
        subHeading={'BACHELOR OF SCIENCE INFORMATION TECHNOLOGY'}
        fromDate={'2014'}
        toDate={'2018'}
      />

      <ResumeHeading
        heading={'National Youth Service Corps'}
        subHeading={'Ministry Of Science And Technogy. Uyo Akwa Ibom State'}
        fromDate={'2019'}
        toDate={'2020'}
      />

      <ResumeHeading
        heading={'High School'}
        subHeading={'Command Secondary School Mbiri'}
        fromDate={'2007'}
        toDate={'2012'}
      />
    </div>
  );
};
export default Education;
