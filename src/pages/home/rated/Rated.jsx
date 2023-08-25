import React, { useState } from 'react';

import Carousel from '../../../components/carousel/Carousel';
import Wrapper from '../../../components/wrapper/Wrapper';
import Tab from '../../../components/tab/Tab';

import FetchApi from '../../../hooks/fetchApi';

const Popular = () => {
  const [endpoint, setEndpoint] = useState('movie');
  const { data, loading } = FetchApi(`/${endpoint}/top_rated`);

  // this function is getting called from Tab component and we are passing
  //the selected tab as a parameter to thus function so that here we can
  //update the endpoints
  const OnTabChange = (tab) => {
    setEndpoint(tab === 'Movies' ? 'movie' : 'tv');
  };

  return (
    <div className="carousel_Section">
      <div className="carousel_wrapper">
        <Wrapper>
          <div className="carousel_Title">Top-Rated</div>
          <Tab data={['Movies', 'TV Shows']} OnTabChange={OnTabChange} />
        </Wrapper>
      </div>
      <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
    </div>
  );
};

export default Popular;
