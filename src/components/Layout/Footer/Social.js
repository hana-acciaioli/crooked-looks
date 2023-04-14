import React from 'react';
import './Social.css';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaSpotify,
  FaYoutube,
  FaBandcamp,
} from 'react-icons/fa';

export default function Social() {
  return (
    <footer className="social-footer">
      <ul className="socials-list">
        <li className="highlight">
          <a
            data-toggle="tooltip"
            title=""
            name="Facebook"
            data-placement="top"
            href="https://m.facebook.com/CrookedLooksBand/"
          >
            <FaFacebook className="styletest" />
          </a>
        </li>
        <li>
          <a
            data-toggle="tooltip"
            title=""
            name="Twitter"
            data-placement="top"
            href="https://twitter.com/TheCrookedLooks"
          >
            <FaTwitter />
          </a>
        </li>
        <li>
          <a
            data-toggle="tooltip"
            title=""
            name="Instagram"
            data-placement="top"
            href="https://www.instagram.com/thecrookedlooks/?hl=en"
          >
            <FaInstagram />
          </a>
        </li>
        <li>
          <a
            data-toggle="tooltip"
            title=""
            name="Tiktok"
            data-placement="top"
            href="https://www.tiktok.com/@thecrookedlooks?lang=en"
          >
            <FaTiktok />
          </a>
        </li>
        <li>
          <a
            title=""
            name="Spotify"
            data-placement="top"
            href="https://open.spotify.com/artist/0WdHCAdm2XxKMfEz8Zfa6k?go=1&sp_cid=f01ad1ec0a2aaad84cf0f5d2b841d2d2&utm_source=embed_player_p&utm_medium=desktop&nd=1"
          >
            <FaSpotify />
          </a>
        </li>
        <li>
          <a
            title=""
            name="Youtube"
            data-placement="top"
            href="https://www.youtube.com/channel/UCmD6DthoalU4OqPLHKHwxaQ"
          >
            <FaYoutube />
          </a>
        </li>
        <li>
          <a
            title=""
            name="Bandcamp"
            data-placement="top"
            href="https://crookedlooks.bandcamp.com/"
          >
            <FaBandcamp />
          </a>
        </li>
      </ul>
      {/* <div className="text-center copyright">
        <p>© 2023 Crooked Looks </p>
      </div> */}
    </footer>
  );
}
