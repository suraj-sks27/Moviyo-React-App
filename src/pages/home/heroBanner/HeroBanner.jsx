import React, { useState, useEffect } from 'react';

import Img from '../../../components/lazyLoding/Img';
import Wrapper from '../../../components/wrapper/Wrapper';
import FetchApi from '../../../hooks/fetchApi';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './heroBanner.css';

const HeroBanner = () => {
  const [background, setBackground] = useState('');
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const { url } = useSelector((state) => state.home);
  const { data, loading } = FetchApi('/movie/upcoming');

  useEffect(() => {
    const bg = url.backdrop + data?.results[Math.floor(Math.random() * 19)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  const handleSearch = (event) => {
    if (event.key === 'Enter' && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="app__heroBanner">
      {!loading && (
        <div className="app__heroBanner-img">
          <Img src={background} />
        </div>
      )}

      <div className="app__heroBanner-opacity"></div>

      <Wrapper>
        <div className="app__heroBanner-content">
          <div className="app__heroBanner-content_searchinput">
            <input
              type="text"
              placeholder="Search for a movie or tv show...."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={handleSearch}
            />
            <button onClick={() => query.length > 0 && navigate(`/search/${query}`)}>Search</button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default HeroBanner;
