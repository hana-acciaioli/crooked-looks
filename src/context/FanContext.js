import { createContext, useContext } from 'react';

const FanContext = createContext();

const FanProvider = ({ children }) => {
  return <FanContext.Provider>{children}</FanContext.Provider>;
};

const useFanContext = () => {
  const context = useContext(FanContext);

  if (!context) {
    throw new Error('FanContext must be wrapped in a FanProvider');
  }
  return context;
};

export { FanProvider, useFanContext };
