import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {getGenres} from './../../reducer/data/selectors';
import {getActiveGenre} from './../../reducer/catalog/selectors';
import {ActionCreator} from './../../reducer/catalog/catalog';

function GenresList(props) {
  const {activeGenre, genres, onGenreLinkClick} = props;
  return <Fragment>
    <h2 className="catalog__title visually-hidden">Catalog</h2>
    <ul className="catalog__genres-list">
      <li className={[`catalog__genres-item`, activeGenre === 0 ? `catalog__genres-item--active` : ``].join(` `)}>
        <a href="#" className="catalog__genres-link" onClick={() => onGenreLinkClick(``)}>All genres</a>
      </li>
      {genres.map((genre) =>
        <li className={[`catalog__genres-item`, genre === activeGenre ? `catalog__genres-item--active` : ``].join(` `)} key={`genre_title${genre}`}>
          <a href="#" className="catalog__genres-link" onClick={() => onGenreLinkClick(genre)}>{genre}</a>
        </li>
      )}
    </ul>
  </Fragment>;
}

GenresList.propTypes = {
  activeGenre: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  onGenreLinkClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeGenre: getActiveGenre(state),
  genres: getGenres(state),
});

const mapDispatchToProps = (dispatch) => ({
  onGenreLinkClick: (genre) => dispatch(ActionCreator.setActiveGenre(genre))
});

export {GenresList};

export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
