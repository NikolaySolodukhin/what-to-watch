import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

function MovieCardFull(props) {
  const {film} = props;
  return <Fragment>
    <div className="movie-card__wrap movie-card__translate-top">
      <div className="movie-card__info">
        <div className="movie-card__poster movie-card__poster--big">
          <img src={film.posterImage} alt={film.name} width="218" height="327"/>
        </div>

        <div className="movie-card__desc">
          <nav className="movie-nav movie-card__nav">
            <ul className="movie-nav__list">
              <li className="movie-nav__item movie-nav__item--active">
                <a href="add-review.html" className="btn movie-card__button">Add review</a>
              </li>
              <li className="movie-nav__item">
                <a href="movie-page-details.html" className="movie-nav__link">Details</a>
              </li>
              <li className="movie-nav__item">
                <a href="movie-page-reviews.html" className="movie-nav__link">Reviews</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </Fragment>;
}

MovieCardFull.propTypes = {
  film: PropTypes.object.isRequired,
};

export default MovieCardFull;
