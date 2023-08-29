import React, { useState } from 'react';

import Carousel from '../../../components/carousel/Carousel';
import Wrapper from '../../../components/wrapper/Wrapper';
import Tab from '../../../components/tab/Tab';

import FetchApi from '../../../hooks/FetchApi';

const Popular = () => {
  const [endpoint, setEndpoint] = useState('day');
  const { data, loading } = FetchApi(`/trending/movie/${endpoint}`);

  // this function is getting called from Tab component and we are passing
  //the selected tab as a parameter to thus function so that here we can
  //update the endpoints
  const OnTabChange = (tab) => {
    setEndpoint(tab === 'Day' ? 'day' : 'week');
  };

  const setTitleName = (endpoint) => {
    return endpoint === 'day' ? 'Day' : 'Week';
  };

  return (
    <div className="carousel_Section">
      <div className="carousel_wrapper">
        <Wrapper>
          <div className="carousel_Title">Trending Movies</div>
          <Tab data={['Day', 'Week']} OnTabChange={OnTabChange} />
        </Wrapper>
      </div>
      <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
    </div>
  );
};

export default Popular;
