// To control data loading and error when a data is fetched from the api

import { useState, useEffect } from 'react';
import { fetchDataFromApi } from '../utils/api';

const FetchApi = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setData(null);
    setError(null);

    fetchDataFromApi(url)
      .then((res) => {
        setLoading(false);
        setData(res);
      })
      .catch((err) => {
        setLoading(false);
        setError('Something went wrong! Please try again.');
        console.log(err);
      });
  }, [url]);

  return { data, loading, error };
};

export default FetchApi;
