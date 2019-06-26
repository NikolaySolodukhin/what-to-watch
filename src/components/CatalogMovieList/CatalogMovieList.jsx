import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {getActiveFilms} from './../../reducer/catalog/selectors';
import {SmallMovieCard} from './../SmallMovieCard/SmallMovieCard.jsx';

function CatalogMoviesList(props) {
  const {
    filmsList,
    onTitleClick,
    activeFilm,
    setActiveFilm,
    removeActiveFilm,
  } = props;
  return (
    <div className="catalog__movies-list">
      {filmsList.map((film) => {
        return <SmallMovieCard
          key={film.id}
          film={film}
          onTitleClick={onTitleClick}
          isActive={Boolean(activeFilm && activeFilm.id === film.id)}
          onMouseEnterCard={() => setActiveFilm(film)}
          onMouseLeaveCard={() => removeActiveFilm(film)}
        />;
      })}
    </div>
  );
}

CatalogMoviesList.propTypes = {
  filmsList: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeFilm: PropTypes.object || PropTypes.null,
  setActiveFilm: PropTypes.func,
  removeActiveFilm: PropTypes.func,
  onTitleClick: PropTypes.func,
};

const mapStateToProps = (state) => ({
  filmsList: getActiveFilms(state),
});

export {CatalogMoviesList};

export default connect(mapStateToProps)(CatalogMoviesList);
