import React from 'react';

import HeroBanner from './heroBanner/HeroBanner';
import Popular from './popular/Popular';
import Trending from './trending/Trending';
import Rated from './rated/Rated';
import Upcoming from './upcoming/Upcoming';

import './home.css';

const Home = () => {
  return (
    <div className="app__home">
      <HeroBanner />
      <Trending />
      <Popular />
      <Rated />
      <Upcoming />
    </div>
  );
};

export default Home;
