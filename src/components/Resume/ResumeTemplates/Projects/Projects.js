import React from 'react';
import ResumeHeading from '../ResumeHeading/ResumeHeading';

const Projects = () => {
  const projectDetails = [
    {
      title: 'Personal Portfolio Website',
      duration: { fromDate: '2020', toDate: '2021' },
      description:
        'A Personal Portfolio website to showcase all my details and projects at one place.',
      subHeading: 'Technologies Used: React JS, Bootsrap',
    },
    {
      title: 'Mobile E-shop',
      duration: { fromDate: '2020', toDate: '2021' },
      description:
        'An ecommerce application designed to sell products online wth payment system integration.',
      subHeading: 'Technologies Used: React JS, Bootsrap',
    },
    {
      title: 'Ecommerce Website',
      duration: { fromDate: '2020', toDate: '2021' },
      description:
        'Online ecommerce website for showcasing and selling products onlne with payment system integration, both Paypal and Stripe.',
      subHeading:
        'Technologies Used: Mongo DB, Epress Js, React Js, Node JS, Redux, Bootstrap.',
    },
  ];
  return (
    <div className="resume-screen-container" key="projects">
      {projectDetails.map((projectDetails, index) => (
        <ResumeHeading
          heading={projectDetails.title}
          subHeading={projectDetails.subHeading}
          description={projectDetails.description}
          fromDate={projectDetails.duration.fromDate}
          toDate={projectDetails.duration.toDate}
        />
      ))}
    </div>
  );
};
export default Projects;
