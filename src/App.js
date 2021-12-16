import React from 'react';
import Particles from 'react-particles-js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import PortfolioContextProvider from './context/PortfolioContext';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Resume from './components/Resume/Resume';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <div>
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 6,
                color: '#f9ab00',
              },
            },
          },
        }}
      />
      <PortfolioContextProvider>
        <Navbar />
        <Header />
        <AboutMe />
        <Resume />
        <Services />

        <Contact />
        <Footer />
      </PortfolioContextProvider>
    </div>
  );
}
