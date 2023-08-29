import React from 'react';
import { Link } from 'react-router-dom';

import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
} from 'react-icons/bi';

import './footer.css';

const Footer = () => {
  return (
    <div className="app__footer">
      <div className="container">
        <ul className="app__footer-top">
          <li>Terms Of Use</li>
          <li>Privacy-Policy</li>
          <li>About</li>
          <li>Blog</li>
          <li>FAQ</li>
        </ul>
        <p>
          At Moviyo, we believe in the unparalleled art of storytelling through film. Our platform
          is dedicated to bringing you the best of cinematic experiences, right at your fingertips.
          From classic masterpieces to modern marvels, Moviyo is your constant companion on your
          cinematic journey.
        </p>
        <ul className="app__footer-links">
          <li className="link">
            <Link
              target="_blank"
              style={{ color: '#fff' }}
              to="https://www.instagram.com/suraj_sks"
            >
              <BiLogoInstagram />
            </Link>
          </li>
          <li className="link">
            <Link
              target="_blank"
              style={{ color: '#fff' }}
              to="https://www.linkedin.com/in/suraj-sharma-a18b38199"
            >
              <BiLogoLinkedinSquare />
            </Link>
          </li>
          <li className="link">
            <BiLogoTwitter />
          </li>
          <li className="link">
            <BiLogoFacebook />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
