import { createContext, useContext, useState } from 'react';

const FanContext = createContext();

const FanProvider = ({ children }) => {
  const [navDisplay, setNavDisplay] = useState(false);

  return (
    <FanContext.Provider value={{ navDisplay, setNavDisplay }}>{children}</FanContext.Provider>
  );
};

const useFanContext = () => {
  const context = useContext(FanContext);

  if (!context) {
    throw new Error('FanContext must be wrapped in a FanProvider');
  }
  return context;
};

export { FanProvider, useFanContext };
