import { createContext, useContext, useState, useEffect } from 'react';
import { getVideos } from '../services/videos.js';

const UIContext = createContext();

const UIProvider = ({ children }) => {
  const [navDisplay, setNavDisplay] = useState(false);
  const [videos, setVideos] = useState([]);
  const [newVideo, setNewVideo] = useState('');
  const [shows, setShows] = useState([]);
  const [newShow, setNewShow] = useState({
    title: '',
    date: '',
    time: '',
    location: '',
    link: '',
  });

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const data = await getVideos();
        setVideos(data);
      } catch (e) {
        console.error(e.message);
      }
    };
    fetchVideos();
  }, []);

  return (
    <UIContext.Provider
      value={{
        newShow,
        setNewShow,
        shows,
        setShows,
        newVideo,
        setNewVideo,
        videos,
        setVideos,
        navDisplay,
        setNavDisplay,
      }}
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
