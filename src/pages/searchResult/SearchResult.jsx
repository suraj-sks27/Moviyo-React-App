import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';

import './searchResult.css';

import { fetchDataFromApi } from '../../utils/api';
import Wrapper from '../../components/wrapper/Wrapper';
import MovieCard from '../../components/movieCard/MovieCard';
import Spinner from '../../components/spinner/Spinner';
import noResults from '../../assets/no-results.png';

const SearchResult = () => {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const { query } = useParams();

  //! API CALL TO GIVEN ENDPOINT
  //when fetching the data we set loading to true ,and then using promises we fetch the data and save it to the state setData ,and then we increment the page num state by 1 to enable infinite scrolling ,and also we set loading to false;
  const fetchInitialData = () => {
    setLoading(true);
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then((res) => {
      setData(res);
      setPageNum((prev) => prev + 1);
      setLoading(false);
    });
  };

  //! to fetch next page data
  const fetchNextPageData = () => {
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then((res) => {
      // agar koi data aya naye page ka to usko purane data ke sath merge kar denge taki pehle ka data loast na ho
      if (data?.results) {
        setData({
          ...data,
          results: [...data?.results, ...res.results],
        });
      } else {
        setData(res);
      }
      setPageNum((prev) => prev + 1);
    });
  };

  //whenever the url query gets changed then use effect hook runs
  useEffect(() => {
    setPageNum(1);
    fetchInitialData();
  }, [query]);

  return (
    <div className="searchResultsPage">
      {loading && <Spinner initial={true} />}
      {!loading && (
        <Wrapper>
          {data?.results?.length > 0 ? (
            <>
              <div className="pageTitle">
                {`Search ${data?.total_results > 1 ? 'results' : 'result'} of '${query}'`}
              </div>
              <InfiniteScroll
                className="content"
                dataLength={data?.results?.length || []}
                next={fetchNextPageData}
                hasMore={pageNum <= data?.total_pages}
                loader={<Spinner />}
              >
                {data?.results.map((item, index) => {
                  if (item.media_type === 'person') return;
                  return <MovieCard key={index} data={item} fromSearch={true} />;
                })}
              </InfiniteScroll>
            </>
          ) : (
            <span className="resultNotFound">Sorry, Results not found!</span>
          )}
        </Wrapper>
      )}
    </div>
  );
};

export default SearchResult;
