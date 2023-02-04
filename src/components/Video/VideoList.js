import React from 'react';
import VideoForm from './VideoForm.js';
import './VideoList.css';
import { useUIContext } from '../../context/UIContext.js';

export default function VideoList() {
  const { videos } = useUIContext();
  return (
    <div>
      <VideoForm />
      <div>
        {videos.map((video) => (
          <div key={video.id} className="video-showcase">
            <iframe src={`${video.video_url}`} alt={video.title} allowFullScreen></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}
