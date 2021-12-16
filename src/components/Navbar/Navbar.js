import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              className="logo"
              src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/554/6504934554_2062006c-ba48-4df8-b467-09acb16f7b8a.png?cb=1639456624"
              alt="logo..."
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} style={{ color: '#fff' }} />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  about me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  how work
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  portfolio
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  contacts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
