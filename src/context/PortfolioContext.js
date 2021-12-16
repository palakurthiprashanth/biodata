import React, { useState, createContext } from 'react';

export const PortfolioContext = createContext({});

const PortfolioContextProvider = ({ children }) => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState();
  const [carouselOffsetStyle, setCarouselOffsetStyle] = useState({});
  const contextObj = {
    resumeDetails: {
      selectedBulletIndex,
      setSelectedBulletIndex,
      carouselOffsetStyle,
      setCarouselOffsetStyle,
    },
  };
  return (
    <PortfolioContext.Provider value={{ contextObj }}>
      {children}
    </PortfolioContext.Provider>
  );
};
export default PortfolioContextProvider;
