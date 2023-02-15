import React from 'react';
import './Home.css';
export default function Home() {
  return (
    <div>
      {' '}
      <section className="showcase">
        <iframe
          src="https://streamable.com/e/cu4ygf?autoplay=1&nocontrols=1&mute=1"
          width="100%"
          height="100%"
          allow="autoplay"
        ></iframe>
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
