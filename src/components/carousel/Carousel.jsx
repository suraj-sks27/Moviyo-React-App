import React from 'react';

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
  const { url } = useSelector((state) => state.home);

  return (
    <div className="carousel">
      <Wrapper>
        {title && <div className="carousel_Title">{title}</div>}
        <BsFillArrowLeftCircleFill className="scrollNav_left arrow" onClick={() => {}} />
        <BsFillArrowRightCircleFill className="scrollNav_right arrow" onClick={() => {}} />

        {!loading ? (
          <div className="carousel_items">
            {data?.map((item) => {
              //image url variable
              const imgUrl = item.poster_path ? url.poster + item.poster_path : posterFallback;

              return (
                <div key={item.id} className="carousel_item">
                  <div className="carousel_img">
                    <Img src={imgUrl} alt="" />
                    <Rating />
                    <Genre data={item.genre_ids.slice(0, 2)} />
                  </div>
                  <div className="carousel_content">
                    <span className="title">{item.title}</span>
                    <span className="date">{dayjs(item.release_date).format('MMM D, YYYY')}</span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="skeleton"></div>
        )}
      </Wrapper>
    </div>
  );
};

export default Carousel;
