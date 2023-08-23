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
  }, []);

  const fetchApiConfig = async () => {
    let response = await fetchDataFromApi('/configuration');

    const url = {
      backdrop: response.images?.secure_base_url + 'original',
      poster: response.images?.secure_base_url + 'original',
      profile: response.images?.secure_base_url + 'original',
    };

    dispatch(getApiConfig(url));
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
