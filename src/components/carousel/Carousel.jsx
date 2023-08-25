import React, { useRef } from 'react';

import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';

import Wrapper from '../wrapper/Wrapper';
import posterFallback from '../../assets/no-poster.png';
import Img from '../../components/lazyLoding/Img';
import Genre from '../genre/Genre';
import Rating from '../rating/Rating';

import './carousel.css';

const Carousel = ({ data, loading, title }) => {
  const element = useRef();
  const { url } = useSelector((state) => state.home);

  //Function to scroll left and right in Desktop
  const navigation = (direction) => {
    const container = element.current;

    const scrollAmount =
      direction === 'left'
        ? container.scrollLeft - (container.offsetWidth + 20)
        : container.scrollLeft + (container.offsetWidth + 20);

    container.scrollTo({
      left: scrollAmount,
      behavior: 'smooth',
    });
  };

  const skeleton = () => {
    return (
      <div className="skeletonBlock">
        <div className="carousel_img skeleton"></div>
        <div className="carousel_content">
          <div className="title skeleton"></div>
          <div className="date skeleton"></div>
        </div>
      </div>
    );
  };

  return (
    <div className="carousel">
      <Wrapper>
        {title && <div className="carousel_Title">{title}</div>}
        <BsFillArrowLeftCircleFill
          className="scrollNav_left arrow"
          onClick={() => {
            navigation('left');
          }}
        />
        <BsFillArrowRightCircleFill
          className="scrollNav_right arrow"
          onClick={() => {
            navigation('right');
          }}
        />

        {!loading ? (
          <div className="carousel_items" ref={element}>
            {data?.map((item) => {
              //image url variable
              const imgUrl = item.poster_path ? url.poster + item.poster_path : posterFallback;

              return (
                <div key={item.id} className="carousel_item">
                  <div className="carousel_img">
                    <Img src={imgUrl} alt="" />
                    <Rating rating={item.vote_average.toFixed(1)} />
                    <Genre data={item.genre_ids.slice(0, 2)} />
                  </div>
                  <div className="carousel_content">
                    <span className="title">{item.title || item.name}</span>
                    <span className="date">{dayjs(item.release_date).format('MMM D, YYYY')}</span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="loadingSkeleton">
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
          </div>
        )}
      </Wrapper>
    </div>
  );
};

export default Carousel;
