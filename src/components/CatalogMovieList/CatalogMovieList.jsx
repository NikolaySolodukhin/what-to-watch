import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import SmallMovieCard from './../SmallMovieCard/SmallMovieCard.jsx';

export default class CatalogMoviesList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeFilm: null,
    };
  }

  _onMouseEnterCard(film) {
    this.setState({
      activeFilm: film,
    });
  }

  _onMouseLeaveCard() {
    this.setState({
      activeFilm: null,
    });
  }

  render() {
    const {filmsList, onTitleClick} = this.props;
    return (
      <div className="catalog__movies-list">
        {filmsList.map((film) => {
          return <SmallMovieCard
            key={film.id}
            film={film}
            onTitleClick={onTitleClick}
            onMouseEnterCard={() => this._onMouseEnterCard(film)}
            onMouseLeaveCard={() => this._onMouseLeaveCard()}
          />;
        })}
      </div>
    );
  }
}

CatalogMoviesList.propTypes = {
  filmsList: PropTypes.array.isRequired,
  onTitleClick: PropTypes.func,
};
