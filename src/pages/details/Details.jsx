import React from 'react';

import { useParams } from 'react-router-dom';
import FetchApi from '../../hooks/FetchApi';

import DetailsBanner from './detailsBanner/DetailsBanner';

import './details.css';

const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = FetchApi(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = FetchApi(`/${mediaType}/${id}/credits`);

  return (
    <div className="app__details">
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
    </div>
  );
};

export default Details;
