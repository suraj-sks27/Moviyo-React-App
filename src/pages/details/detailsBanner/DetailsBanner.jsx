import React, { useState } from 'react';

import FetchApi from '../../../hooks/FetchApi';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';

import { Playbtn } from '../Playbtn';
import Img from '../../../components/lazyLoding/Img';
import Wrapper from '../../../components/wrapper/Wrapper';
import PosterImg from '../../../assets/no-poster.png';
import Genre from '../../../components/genre/Genre';
import Rating from '../../../components/rating/Rating';
import VideoPopup from '../../../components/videoPopup/VideoPopup';

import './detailsBanner.css';

const DetailsBanner = ({ video, crew }) => {
  const [show, setShow] = useState(false);
  const [videoID, setVideoID] = useState(null);

  const { mediaType, id } = useParams();
  const { data, loading } = FetchApi(`/${mediaType}/${id}`);

  const { url } = useSelector((state) => state.home);
  const _genres = data?.genres?.map((genre) => genre.id);
  const _director = crew?.filter((f) => f.job === 'Director');
  const _writers = crew?.filter(
    (f) => f.job === 'Writer' || f.job === 'Screenplay' || f.job === 'Story'
  );

  const toHoursAndMinutes = (totalTime) => {
    const hours = Math.floor(totalTime / 60);
    const minutes = totalTime % 60;

    return `${hours}h ${minutes > 0 ? `${minutes}m` : ''}`;
  };

  return (
    <div className="app__detailsBanner">
      {!loading ? (
        <>
          {!!data && (
            <React.Fragment>
              <div className="app__detailsBanner-backside_img">
                <Img src={url.backdrop + data?.backdrop_path} />
              </div>
              <div className="app__detailsBanner-opacity"></div>

              <Wrapper>
                <div className="app__detailsBanner-container">
                  {/* poster image */}
                  <div className="contianer_left">
                    {data?.poster_path ? (
                      <Img className="posterImg" src={url.poster + data?.poster_path} />
                    ) : (
                      <Img className="posterImg" src={PosterImg} />
                    )}
                  </div>

                  {/* main content */}
                  <div className="container_right">
                    {/* Title */}
                    <div className="title">
                      {`${data?.name || data?.title} (${dayjs(data?.release_date).format('YYYY')})`}
                    </div>
                    {/* Subtitle */}
                    <div className="subtitle">{data?.tagline}</div>
                    {/* Genre */}
                    <Genre data={_genres} />
                    {/* row */}
                    <div className="row">
                      {/* Rating */}
                      <Rating rating={data?.vote_average.toFixed(1)} />
                      {/* Trailer */}
                      <div
                        className="playbtn"
                        onClick={() => {
                          setShow(true);
                          setVideoID(video.key);
                        }}
                      >
                        {/* Play button */}
                        <Playbtn />
                        <span className="text">Watch Trailer</span>
                      </div>
                    </div>
                    {/* Overview */}
                    <div className="overview">
                      <div className="overview_heading">Overview</div>
                      <div className="overview_description">{data?.overview}</div>
                    </div>
                    <div className="info">
                      {/* STATUS */}
                      {data?.status && (
                        <div className="infoItem">
                          <span className="text bold">Status: </span>
                          <span className="text">{data?.status}</span>
                        </div>
                      )}

                      {/* Release Date */}
                      {data?.release_date && (
                        <div className="infoItem">
                          <span className="text bold">Release Date: </span>
                          <span className="text">
                            {dayjs(data.release_date).format('MMM D, YYYY')}
                          </span>
                        </div>
                      )}

                      {/* RUN TIME */}
                      {data.runtime && (
                        <div className="infoItem">
                          <span className="text bold">Runtime: </span>
                          <span className="text">{toHoursAndMinutes(data.runtime)}</span>
                        </div>
                      )}
                    </div>

                    {/* Director */}
                    {_director?.length > 0 && (
                      <div className="info">
                        <span className="text bold">Director: </span>
                        <span className="text">
                          {_director?.map((d, i) => (
                            <span key={i}>
                              {d.name}
                              {_director.length - 1 !== i && ','}
                            </span>
                          ))}
                        </span>
                      </div>
                    )}

                    {/* writers */}
                    {_writers?.length > 0 && (
                      <div className="info">
                        <span className="text bold">Writer: </span>
                        <span className="text">
                          {_writers.map((w, i) => (
                            <span key={i}>
                              {w.name}
                              {_writers.length - 1 !== i && ','}
                            </span>
                          ))}
                        </span>
                      </div>
                    )}

                    {/* creator for TVshow */}
                    {data?.created_by?.length > 0 && (
                      <div className="info">
                        <span className="text bold">Creator: </span>
                        <span className="text">
                          {data?.created_by?.map((d, i) => (
                            <span key={i}>
                              {d.name}
                              {data?.created_by.length - 1 !== i && ','}
                            </span>
                          ))}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* video player */}
                <VideoPopup
                  show={show}
                  setShow={setShow}
                  videoID={videoID}
                  setVideoID={setVideoID}
                />
              </Wrapper>
            </React.Fragment>
          )}
        </>
      ) : (
        <div className="detailsBannerSkeleton">
          <Wrapper>
            <div className="contianer_left skeleton"></div>
            <div className="contianer_right">
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
            </div>
          </Wrapper>
        </div>
      )}
    </div>
  );
};

export default DetailsBanner;
