import React, {Fragment, PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {ActionCreator} from './../../reducer';

class GenresList extends PureComponent {
  render() {
    const {genres, currentGenreId, onGenreLinkClick} = this.props;
    return <Fragment>
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <ul className="catalog__genres-list">
        <li className={[`catalog__genres-item`, currentGenreId === 0 ? `catalog__genres-item--active` : ``].join(` `)}>
          <a href="#" className="catalog__genres-link" onClick={() => onGenreLinkClick(0)}>All genres</a>
        </li>
        {genres.map((genre) =>
          <li className={[`catalog__genres-item`, genre.id === currentGenreId ? `catalog__genres-item--active` : ``].join(` `)} key={genre.title}>
            <a href="#" className="catalog__genres-link" onClick={() => onGenreLinkClick(genre.id)}>{genre.title}</a>
          </li>
        )}
      </ul>
    </Fragment>;
  }
}

GenresList.propTypes = {
  currentGenreId: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
  onGenreLinkClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentGenreId: state.currentGenreId,
  genres: state.genres,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreLinkClick: (genreId) => dispatch(ActionCreator.setCurrentGenreId(genreId))
});

export {GenresList};

export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
