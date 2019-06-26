import React from 'react';
import PropTypes from 'prop-types';

import VideoPlayer from '../VideoPlayer/VideoPlayer';

export function SmallMovieCard(props) {
  const {film, onTitleClick, isActive, onMouseEnterCard, onMouseLeaveCard} = props;
  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={() => onMouseEnterCard()} onMouseLeave={() => onMouseLeaveCard()}>
      <div className="small-movie-card__image">
        { isActive && <VideoPlayer src={film.previewVideoLink} poster={film.previewImage} muted/> }
        { !isActive && <img src={film.previewImage} alt={film.name} width="280" height="175"/> }
      </div>
      <h3 className="small-movie-card__title" onClick={onTitleClick}>
        <a className="small-movie-card__link" href="movie-page.html">{film.name}</a>
      </h3>
    </article>
  );
}

SmallMovieCard.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired}),
  isActive: PropTypes.bool.isRequired,
  onTitleClick: PropTypes.func,
  onMouseEnterCard: PropTypes.func,
  onMouseLeaveCard: PropTypes.func,
};
