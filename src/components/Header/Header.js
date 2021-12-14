import React from 'react';
import Typed from 'react-typed';

const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <canvas></canvas>
        <h1>Front End Development</h1>
        <Typed
          className="typed-text"
          strings={[
            'Front End Developer',
            'Web Developer',
            'HTML, CSS, JS',
            'React, Redux',
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="#" className="btn-main-offer">
          contact me
        </a>
      </div>
    </div>
  );
};

export default Header;
