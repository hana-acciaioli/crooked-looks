import React from 'react';
import './VideoForm.css';
import { createVideo } from '../../services/videos.js';
import { useUIContext } from '../../context/UIContext.js';

export default function VideoForm() {
  const { newVideo, setNewVideo, videos, setVideos } = useUIContext();

  const newVideoHandler = async (e) => {
    e.preventDefault();
    try {
      await createVideo(newVideo);
      const newVideoList = [...videos, { newVideo }];
      setVideos(newVideoList);
      setNewVideo('');
    } catch (e) {
      console.error(e.message);
    }
  };
  return (
    <div className="align">
      <form className="form video">
        <div className="form__field">
          <input
            type="text"
            className="form__input"
            placeholder="Video URL"
            value={newVideo}
            onChange={(e) => setNewVideo(e.target.value)}
          ></input>
        </div>
        <div className="form__field">
          <input type="submit" onClick={newVideoHandler}></input>
        </div>
      </form>
    </div>
  );
}
