import React from 'react';
import './Home.css';
export default function Home() {
  return (
    <div>
      {' '}
      <section className="showcase">
        <video src="CrookedLooksBurn1080FINAL.webmsd.webm" muted loop autoPlay></video>
        <div className="overlay"></div>
        <div className="text">
          {/* <h2>Crooked Looks </h2> */}
          {/* <h4>Rock n Roll band straight outta Portland, OR</h4> */}
          <p></p>
          {/* <a href="#">Listen</a> */}
        </div>
      </section>
    </div>
  );
}
