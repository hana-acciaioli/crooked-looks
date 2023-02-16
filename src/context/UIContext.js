import { createContext, useContext, useState, useEffect } from 'react';
import { getVideos } from '../services/videos.js';
import { getShows, getUpcomingShows } from '../services/shows.js';

const UIContext = createContext();

const UIProvider = ({ children }) => {
  const [navDisplay, setNavDisplay] = useState(false);
  const [videos, setVideos] = useState([]);
  const [newVideo, setNewVideo] = useState('');
  const [shows, setShows] = useState([]);
  const [upcomingShows, setUpcomingShows] = useState([]);

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

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const data = await getShows();
        setShows(data);
      } catch (e) {
        console.error(e.message);
      }
    };
    fetchShows();
  }, []);

  useEffect(() => {
    const fetchUpcomingShows = async () => {
      try {
        const data = await getUpcomingShows();
        setUpcomingShows(data);
      } catch (e) {
        console.error(e.message);
      }
    };
    fetchUpcomingShows();
  }, []);

  return (
    <UIContext.Provider
      value={{
        shows,
        setShows,
        newVideo,
        setNewVideo,
        videos,
        setVideos,
        navDisplay,
        setNavDisplay,
        upcomingShows,
        setUpcomingShows,
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
