import React from 'react';
import './Home.css';
export default function Home() {
  return (
    <div className="showcase">
      {' '}
      <video muted loop autoPlay playsInline className="showcase-video">
        <source src="/assets/videos/zoomed-crooked-looks.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
