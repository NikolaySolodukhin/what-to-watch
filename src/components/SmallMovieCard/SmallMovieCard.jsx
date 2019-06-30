import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import VideoPlayer from '../VideoPlayer/VideoPlayer.jsx';

export default class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);
    this._timeOut = null;
    this.mouseEnterHandler = this.mouseEnterHandler.bind(this);
    this.mouseLeaveHandler = this.mouseLeaveHandler.bind(this);
  }

  mouseEnterHandler() {
    this._timeOut = setTimeout(() => {
      this.props.setActiveFilm();
      clearTimeout(this._timeOut);
    }, 1000);
  }

  mouseLeaveHandler() {
    this.props.removeActiveFilm();
    clearTimeout(this._timeOut);
  }

  componentWillUnmount() {
    this.mouseLeaveHandler();
  }

  render() {
    const {film, isActive} = this.props;
    return (
      <article className="small-movie-card catalog__movies-card" onMouseEnter={this.mouseEnterHandler} onMouseLeave={this.mouseLeaveHandler}>
        <div className="small-movie-card__image">
          {isActive && <VideoPlayer src={film.previewVideoLink} poster={film.previewImage} muted/>}
          {!isActive && <img src={film.previewImage} alt={film.name} width="280" height="175"/>}
        </div>
        <h3 className="small-movie-card__title">
          <Link to={`/film/${film.id}`} className="small-movie-card__link">{film.name}</Link>
        </h3>
      </article>
    );
  }
}

SmallMovieCard.propTypes = {
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
  isActive: PropTypes.bool.isRequired,
  setActiveFilm: PropTypes.func,
  removeActiveFilm: PropTypes.func,
};
