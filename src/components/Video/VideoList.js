import React from 'react';
import VideoForm from './VideoForm.js';
import './VideoList.css';
import { useUIContext } from '../../context/UIContext.js';
import { useUserContext } from '../../context/UserContext.js';
import { Button } from '@mui/material';
import { deleteVideo } from '../../services/videos.js';

export default function VideoList() {
  const { user } = useUserContext();
  const { videos, setVideos } = useUIContext();

  const handleDelete = async (video) => {
    console.log(video.id);
    try {
      const deletedVideo = await deleteVideo(video);
      setVideos((videos) => videos.filter((prevVideos) => prevVideos.id !== deletedVideo.id));
    } catch (e) {
      console.error(e.message);
    }
  };
  return (
    <div>
      {user && <VideoForm />}
      <div>
        {videos.map((video) => (
          <>
            <div key={video.id} className="video-showcase">
              <iframe src={`${video.video_url}`} alt={video.title} allowFullScreen></iframe>
            </div>
            {user && <Button onClick={() => handleDelete(video)}>Delete</Button>}
          </>
        ))}
      </div>
    </div>
  );
}
