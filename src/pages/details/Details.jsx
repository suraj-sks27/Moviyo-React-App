import React from 'react';

import { useParams } from 'react-router-dom';
import FetchApi from '../../hooks/FetchApi';

import DetailsBanner from './detailsBanner/DetailsBanner';
import Cast from './cast/Cast';
import Recommendation from './carousel/Recommendation';
import Similar from './carousel/Similar';

import './details.css';

const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = FetchApi(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = FetchApi(`/${mediaType}/${id}/credits`);

  return (
    <div className="app__details">
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading} />
      <Similar mediaType={mediaType} id={id} />
      <Recommendation mediaType={mediaType} id={id} />
    </div>
  );
};

export default Details;
