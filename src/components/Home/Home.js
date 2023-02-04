import React from 'react';
import './Home.css';
export default function Home() {
  return (
    <div>
      {' '}
      <section className="showcase">
        <background-video
          src="CrookedLooksBurn1080FINAL.webmsd.webm"
          muted
          loop
          autoPlay
        ></background-video>
        <video src="CrookedLooksBurn1080FINAL.webmsd.webm" muted loop autoPlay></video>
        <div className="overlay"></div>
        <div className="text">
          <h2>Crooked Looks </h2>
          {/* <h4>Rock n Roll band straight outta Portland, OR</h4> */}
          <p></p>
          {/* <a href="#">Listen</a> */}
        </div>
        <ul className="social">
          <li>
            <a href="https://m.facebook.com/CrookedLooksBand/">
              <img src="https://i.ibb.co/x7P24fL/facebook.png" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/TheCrookedLooks">
              <img src="https://i.ibb.co/Wnxq2Nq/twitter.png" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/thecrookedlooks/?hl=en">
              <img src="https://i.ibb.co/ySwtH4B/instagram.png" />
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@thecrookedlooks?lang=en">
              <img src="tik-tok.png" className="social-img" />
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
