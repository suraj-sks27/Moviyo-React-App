import React from 'react';

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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <ul className="app__footer-links">
          <li className="link">
            <BiLogoFacebook />
          </li>
          <li className="link">
            <BiLogoTwitter />
          </li>
          <li className="link">
            <BiLogoInstagram />
          </li>
          <li className="link">
            <BiLogoLinkedinSquare />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
