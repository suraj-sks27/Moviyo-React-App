import React from 'react';

import Carousel from '../../../components/carousel/Carousel';
import FetchApi from '../../../hooks/FetchApi';

const Recommendation = ({ mediaType, id }) => {
  const { data, loading } = FetchApi(`/${mediaType}/${id}/recommendations`);

  return (
    <Carousel title="Recommendations" data={data?.results} loading={loading} endpoint={mediaType} />
  );
};

export default Recommendation;
