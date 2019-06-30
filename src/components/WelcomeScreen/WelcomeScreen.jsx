import React, {Fragment, PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import CatalogMoviesList from './../CatalogMovieList/CatalogMovieList.jsx';
import GenresList from './../GenreList/GenreList.jsx';
import Footer from './../../components/Footer/Footer.jsx';
import Header from './../../components/Header/Header.jsx';
import MovieCardInfo from './../../components/MovieCardInfo/MovieCardInfo.jsx';
import withActiveFilm from '../hocs/WithActiveFilm/WithActiveFilm.jsx';
import {getGenres} from './../../reducer/films/selectors';
import {getActiveFilms, getActiveGenre, getPromoFilm} from './../../reducer/films/selectors';
import {ActionCreator as ActionCatalog} from './../../reducer/films/films';

const CatalogMoviesListWrap = withActiveFilm(CatalogMoviesList);

class WelcomeScreen extends PureComponent {
  render() {
    const {activeGenre, genres, setActiveGenre, filmsList, promoFilm} = this.props;
    return (
      <Fragment>
        <section className="movie-card">
          <div className="movie-card__bg">
            <img src={promoFilm && promoFilm.backgroundImage} alt={promoFilm && promoFilm.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header withAuth/>
          {promoFilm && <MovieCardInfo film={promoFilm} withPoser/>}
        </section>

        <div className="page-content">
          <section className="catalog">
            <GenresList
              genres={genres}
              activeGenre={activeGenre}
              onGenreLinkClick={setActiveGenre} />
            <CatalogMoviesListWrap filmsList={filmsList} />
          </section>
          <Footer/>
        </div>
      </Fragment>
    );
  }
}

WelcomeScreen.propTypes = {
  filmsList: PropTypes.arrayOf(PropTypes.object).isRequired,
  promoFilm: PropTypes.object,
  genres: PropTypes.array.isRequired,
  activeGenre: PropTypes.string.isRequired,
  setActiveGenre: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  filmsList: getActiveFilms(state),
  activeGenre: getActiveGenre(state),
  genres: getGenres(state),
  promoFilm: getPromoFilm(state),
});

const mapDispatchToProps = (dispatch) => ({
  setActiveGenre: (genre) => dispatch(ActionCatalog.setActiveGenre(genre)),
});

export {WelcomeScreen};

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);
