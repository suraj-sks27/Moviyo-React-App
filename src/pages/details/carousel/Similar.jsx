import React from 'react';

import Carousel from '../../../components/carousel/Carousel';
import FetchApi from '../../../hooks/FetchApi';

const Similar = ({ mediaType, id }) => {
  const { data, loading } = FetchApi(`/${mediaType}/${id}/similar`);

  return <Carousel title="Similar" data={data?.results} loading={loading} endpoint={mediaType} />;
};

export default Similar;
