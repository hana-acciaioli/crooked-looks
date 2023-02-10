import React from 'react';

export default function Social() {
  return (
    <div className="social-container">
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
            <img src="/tik-tok.png" className="social-img" />
          </a>
        </li>
      </ul>
    </div>
  );
}
