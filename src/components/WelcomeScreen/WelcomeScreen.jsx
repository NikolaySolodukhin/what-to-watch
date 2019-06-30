import React, {Fragment, PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from "prop-types";

import CatalogMoviesList from './../CatalogMovieList/CatalogMovieList.jsx';
import GenresList from './../GenreList/GenreList.jsx';
import Footer from './../../components/Footer/Footer.jsx';
import Header from './../../components/Header/Header.jsx';
import MovieCardInfo from './../../components/MovieCardInfo/MovieCardInfo.jsx';
import withActiveFilm from '../hocs/WithActiveFilm/WithActiveFilm.jsx';
import {getActiveFilms, getActiveGenre} from './../../reducer/catalog/selectors';
import {getGenres} from './../../reducer/data/selectors';
import {ActionCreator as ActionCatalog} from './../../reducer/catalog/catalog';
import {Operation as OperationData} from './../../reducer/data/data';

const CatalogMoviesListWrap = withActiveFilm(CatalogMoviesList);

class WelcomeScreen extends PureComponent {
  componentDidMount() {
    this.props.loadFilmsAndGenre();
  }

  render() {
    const {activeGenre, genres, setActiveGenre, filmsList} = this.props;
    return (
      <Fragment>
        <section className="movie-card">
          <div className="movie-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header withAuth/>
          <MovieCardInfo withPoser/>
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
  genres: PropTypes.array.isRequired,
  activeGenre: PropTypes.string.isRequired,
  setActiveGenre: PropTypes.func.isRequired,
  loadFilmsAndGenre: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  filmsList: getActiveFilms(state),
  activeGenre: getActiveGenre(state),
  genres: getGenres(state),
});

const mapDispatchToProps = (dispatch) => ({
  setActiveGenre: (genre) => dispatch(ActionCatalog.setActiveGenre(genre)),
  loadFilmsAndGenre: (genre) => dispatch(OperationData.loadFilmsAndGenre(genre))
});

export {WelcomeScreen};

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);
