import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header, Footer } from './components';
import { Details, PageNotFound, Explore, Home, Landing, SearchResult } from './pages';

import { fetchDataFromApi } from './utils/api';
import { getApiConfig, getGenres } from './store/homeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, []);

  const fetchApiConfig = async () => {
    const res = await fetchDataFromApi('/configuration');

    const url = {
      backdrop: res.images.secure_base_url + 'original',
      poster: res.images.secure_base_url + 'original',
      profile: res.images.secure_base_url + 'original',
    };

    dispatch(getApiConfig(url));
  };

  const genresCall = async () => {
    let promises = [];
    let endPoints = ['tv', 'movie'];
    let allGenres = {};

    endPoints.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);

    data.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item));
    });

    dispatch(getGenres(allGenres));
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
