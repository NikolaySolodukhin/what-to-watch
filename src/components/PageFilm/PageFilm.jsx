import React, {Fragment, PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {getFilmById, getLikeThisFilmsById} from './../../reducer/films/selectors';
import Header from './../Header/Header.jsx';
import Footer from './../Footer/Footer.jsx';
import MovieCardInfo from './../MovieCardInfo/MovieCardInfo.jsx';
import MovieCardFull from './../MovieCardFull/MovieCardFull.jsx';
import CatalogMovieList from './../CatalogMovieList/CatalogMovieList.jsx';

class PageFilm extends PureComponent {
  render() {
    const {film, likeThisFilms} = this.props;
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
        <MovieCardFull film={film} />

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
  film: PropTypes.object.isRequired,
  likeThisFilms: PropTypes.array,
};

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  film: getFilmById(state, ownProps.match.params.id),
  likeThisFilms: getLikeThisFilmsById(state, ownProps.match.params.id)
});

export {PageFilm};

export default connect(mapStateToProps)(PageFilm);
