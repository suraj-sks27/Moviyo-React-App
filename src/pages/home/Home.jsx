import React from 'react';

import HeroBanner from './heroBanner/HeroBanner';
import Popular from './popular/Popular';

import './home.css';

const Home = () => {
  return (
    <div className="app__home">
      <HeroBanner />
      <Popular />
    </div>
  );
};

export default Home;
