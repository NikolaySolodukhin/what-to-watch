import React, {Fragment, PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {getFilmById, getLikeThisFilmsById, getReviews} from './../../reducer/films/selectors';
import Header from './../Header/Header.jsx';
import Footer from './../Footer/Footer.jsx';
import MovieCardInfo from './../MovieCardInfo/MovieCardInfo.jsx';
import {MovieCardFull} from './../MovieCardFull/MovieCardFull.jsx';
import CatalogMovieList from './../CatalogMovieList/CatalogMovieList.jsx';
import {Operation as OperationFilms} from "../../reducer/films/films";

class PageFilm extends PureComponent {
  componentDidMount() {
    this.props.getReviews(this.props.film.id);
  }

  render() {
    const {film, likeThisFilms, reviews} = this.props;
    return <Fragment>
      <div className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={film && film.backgroundImage} alt={film && film.name}/>
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <Header withAuth />
          <MovieCardInfo film={film} />
        </div>
        <MovieCardFull film={film} reviews={reviews}/>

      </div>
      <div className="page-content">
        {likeThisFilms.length > 0 && (
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
            <CatalogMovieList filmsList={likeThisFilms}/>
          </section>
        )}
        <Footer/>
      </div>
    </Fragment>;
  }
}

PageFilm.propTypes = {
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
  likeThisFilms: PropTypes.array,
  getReviews: PropTypes.func.isRequired,
  reviews: PropTypes.arrayOf(
      PropTypes.shape({
        comment: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        user: PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired
        }).isRequired,
      }).isRequired
  ).isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  film: getFilmById(state, ownProps.match.params.id),
  likeThisFilms: getLikeThisFilmsById(state, ownProps.match.params.id),
  reviews: getReviews(state)
});

const mapDispatchToProps = (dispatch) => ({
  getReviews: (filmId) => dispatch(OperationFilms.loadReviews(filmId)),
});

export {PageFilm};

export default connect(mapStateToProps, mapDispatchToProps)(PageFilm);
