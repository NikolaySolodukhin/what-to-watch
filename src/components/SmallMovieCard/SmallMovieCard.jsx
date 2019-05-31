import React, {Component} from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from "../VideoPlayer/VideoPlayer";

export default class SmallMovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }

  _setIsActive() {
    this._hoverTimeout = setTimeout(() => {
      this.setState({
        isActive: true,
      });
    }, 1000);
  }

  _removeIsActive() {
    clearTimeout(this._hoverTimeout);
    this.setState({
      isActive: false,
    });
  }

  _handleMouseEnterCard() {
    this._setIsActive();
    this.props.onMouseEnterCard();
  }

  _handleMouseLeaveCard() {
    this._removeIsActive();
    this.props.onMouseLeaveCard();
  }

  render() {
    const {film, onTitleClick} = this.props;
    return (
      <article className="small-movie-card catalog__movies-card" onMouseEnter={() => this._handleMouseEnterCard()} onMouseLeave={() => this._handleMouseLeaveCard()}>
        <div className="small-movie-card__image">
          { this.state.isActive && <VideoPlayer film={film} muted/> }
          { !this.state.isActive && <img src={film.image} alt={film.title} width="280" height="175"/> }
        </div>
        <h3 className="small-movie-card__title" onClick={onTitleClick}>
          <a className="small-movie-card__link" href="movie-page.html">{film.title}</a>
        </h3>
      </article>
    );
  }
}

SmallMovieCard.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired}),
  onTitleClick: PropTypes.func,
  onMouseEnterCard: PropTypes.func,
  onMouseLeaveCard: PropTypes.func,
};
