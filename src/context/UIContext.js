import { createContext, useContext, useState } from 'react';

const UIContext = createContext();

const UIProvider = ({ children }) => {
  const [navDisplay, setNavDisplay] = useState(false);

  return <UIContext.Provider value={{ navDisplay, setNavDisplay }}>{children}</UIContext.Provider>;
};

const useUIContext = () => {
  const context = useContext(UIContext);

  if (!context) {
    throw new Error('FanContext must be wrapped in a FanProvider');
  }
  return context;
};

export { UIProvider, useUIContext };
