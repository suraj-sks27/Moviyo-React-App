import React from 'react';

import Wrapper from '../../components/wrapper/Wrapper';
import { useNavigate } from 'react-router-dom';

import './landing.css';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="app__landing">
      <div className="app__landing-img">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="banner img"
        />
      </div>

      <div className="app__landing-opacity_layer"></div>

      <Wrapper>
        <div className="app__landing-content">
          <div className="app__landing-content_title">Unlimited movies, TV shows and more</div>
          <div className="app__landing-content_subtitle">Watch anywhere, anytime.</div>
          <div className="app__landing-content_subtitle_2">Ready to watch? Click on Explore.</div>
          <div className="app__landing-content_btn">
            <button type="button" onClick={() => navigate('/home')}>
              Explore
            </button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Landing;
