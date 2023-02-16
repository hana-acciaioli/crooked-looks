import React from 'react';
import './Home.css';
export default function Home() {
  return (
    <div className="showcase">
      {' '}
      {/* <section className="showcase"> */}
      <video muted loop autoPlay playsInline className="showcase-video">
        <source src="/assets/videos/zoomed-crooked-looks.mp4" type="video/mp4" />
      </video>
      {/* <div className="overlay"></div>
        <div className="text">
          {/* <h2>Crooked Looks </h2> */}
      {/* <h4>Rock n Roll band straight outta Portland, OR</h4> */}
      <p></p>
      {/* <a href="#">Listen</a> */}
      {/* </div> */}
      {/* </section> */}
    </div>
  );
}
