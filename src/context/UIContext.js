import { createContext, useContext, useState } from 'react';

const UIContext = createContext();

const UIProvider = ({ children }) => {
  const [navDisplay, setNavDisplay] = useState(false);
  const [videos, setVideos] = useState([]);
  const [newVideo, setNewVideo] = useState('');

  return (
    <UIContext.Provider
      value={{ newVideo, setNewVideo, videos, setVideos, navDisplay, setNavDisplay }}
    >
      {children}
    </UIContext.Provider>
  );
};

const useUIContext = () => {
  const context = useContext(UIContext);

  if (!context) {
    throw new Error('FanContext must be wrapped in a FanProvider');
  }
  return context;
};

export { UIProvider, useUIContext };
