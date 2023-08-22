import React from 'react';

import Wrapper from '../../components/wrapper/Wrapper';

import './landing.css';

const Landing = () => {
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
          <div className="app__landing-content_subtitle">Watch anywhere. Cancel anytime.</div>
          <div className="app__landing-content_subtitle_2">Ready to watch? Click on Explore.</div>
          <div className="app__landing-content_btn">
            <button type="button">Explore</button>
          </div>
        </div>
        <div style={{ height: '1000rem', width: '100px' }}></div>
      </Wrapper>
    </div>
  );
};

export default Landing;
