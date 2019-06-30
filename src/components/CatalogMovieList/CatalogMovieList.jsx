import React from 'react';
import PropTypes from 'prop-types';

import SmallMovieCard from './../SmallMovieCard/SmallMovieCard.jsx';
import withActiveFilm from './../hocs/WithActiveFilm/WithActiveFilm.jsx';
const SmallMovieCardWrap = withActiveFilm(SmallMovieCard);

function CatalogMoviesList(props) {
  const {
    filmsList,
  } = props;
  return (
    <div className="catalog__movies-list">
      {filmsList.map((film) => {
        return <SmallMovieCardWrap
          key={film.id}
          film={film}
        />;
      })}
    </div>
  );
}

CatalogMoviesList.propTypes = {
  filmsList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CatalogMoviesList;
