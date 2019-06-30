import React from "react";
import PropTypes from "prop-types";
import {Switch, NavLink} from "react-router-dom";

import WithPropsRoute from "./../hocs/WithPropsRoute/WithPropsRoute.jsx";
import {MovieCardFullDetails} from "./../MovieCardFullDetails/MovieCardFullDetails.jsx";
import {MovieCardFullOverview} from "./../MovieCardFullOverview/MovieCardFullOverview.jsx";
import MovieCardFullReviews from "./../MovieCardFullReviews/MovieCardFullReviews.jsx";

function MovieCardFull(props) {
  const {film, reviews} = props;
  return (
    <div className="movie-card__wrap movie-card__translate-top">
      <div className="movie-card__info">
        <div className="movie-card__poster movie-card__poster--big">
          <img
            src={film.posterImage}
            alt={film.name}
            width="218"
            height="327"
          />
        </div>

        <div className="movie-card__desc">
          <nav className="movie-nav movie-card__nav">
            <ul className="movie-nav__list">
              <li className="movie-nav__item">
                <NavLink
                  exact
                  to={`/film/${film.id}`}
                  className="movie-nav__link"
                  activeClassName="movie-nav__link--active"
                >
                  Overview
                </NavLink>
              </li>
              <li className="movie-nav__item">
                <NavLink
                  to={`/film/${film.id}/details`}
                  className="movie-nav__link"
                  activeClassName="movie-nav__link--active"
                >
                  Details
                </NavLink>
              </li>
              <li className="movie-nav__item">
                <NavLink
                  to={`/film/${film.id}/reviews`}
                  className="movie-nav__link"
                  activeClassName="movie-nav__link--active"
                >
                  Reviews
                </NavLink>
              </li>
            </ul>
          </nav>
          <Switch>
            <WithPropsRoute
              exact
              path={`/film/${film.id}`}
              component={MovieCardFullOverview}
              film={film}
            />
            <WithPropsRoute
              exact
              path={`/film/${film.id}/details`}
              component={MovieCardFullDetails}
              film={film}
            />
            <WithPropsRoute
              exact
              path={`/film/${film.id}/reviews`}
              component={MovieCardFullReviews}
              film={film}
              reviews={reviews}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
}

MovieCardFull.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    posterImage: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    released: PropTypes.number.isRequired,
    runTime: PropTypes.number.isRequired,
    scoresCount: PropTypes.number.isRequired,
    starring: PropTypes.array.isRequired,
    videoLink: PropTypes.string.isRequired
  }),
  reviews: PropTypes.arrayOf(
      PropTypes.shape({
        comment: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        user: PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired
        }).isRequired
      }).isRequired
  ).isRequired
};

export {MovieCardFull};
