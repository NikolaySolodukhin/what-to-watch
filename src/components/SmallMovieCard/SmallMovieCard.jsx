import React from 'react';
import PropTypes from 'prop-types';

export default function SmallMovieCard(props) {
  const {film, onPlayBtnClick, onTitleClick} = props;
  return (
    <article className="small-movie-card catalog__movies-card">
      <button className="small-movie-card__play-btn" type="button" onClick={onPlayBtnClick}>Play</button>
      <div className="small-movie-card__image">
        <img src={film.image} alt={film.title} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title" onClick={onTitleClick}>
        <a className="small-movie-card__link" href="movie-page.html">{film.title}</a>
      </h3>
    </article>
  );
}

SmallMovieCard.propTypes = {
  film: PropTypes.object.isRequired,
  onTitleClick: PropTypes.func,
  onPlayBtnClick: PropTypes.func,
};
