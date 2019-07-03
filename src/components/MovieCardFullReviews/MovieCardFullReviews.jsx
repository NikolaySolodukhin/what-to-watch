import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const options = {year: `numeric`, month: `long`, day: `numeric`};

class MovieCardFullReviews extends PureComponent {
  static renderItem(array) {
    return array.map((item) => (
      <div className="review" key={item.comment} >
        <blockquote className="review__quote">
          <p className="review__text">{item.comment}</p>

          <footer className="review__details">
            <cite className="review__author">{item.user.name}</cite>
            <time className="review__date">{MovieCardFullReviews.transformDate(item.date)}</time>
          </footer>
        </blockquote>

        <div className="review__rating">{item.rating}</div>
      </div>));
  }

  static transformDate(date) {
    const dateUTC = new Date(date);
    return new Intl.DateTimeFormat(`en-US`, options).format(dateUTC);
  }

  render() {
    const {reviews} = this.props;
    const evenReviewsList = reviews.filter((element, index) => index % 2 === 0);
    const oddReviewsList = reviews.filter((element, index) => index % 2 !== 0);
    return (
      <div className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">{MovieCardFullReviews.renderItem(evenReviewsList)}</div>
        <div className="movie-card__reviews-col">{MovieCardFullReviews.renderItem(oddReviewsList)}</div>
      </div>
    );
  }
}

MovieCardFullReviews.propTypes = {
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
  reviews: PropTypes.arrayOf(
      PropTypes.shape({
        comment: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        user: PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired
        }).isRequired,
      }).isRequired
  ).isRequired,
};

export default MovieCardFullReviews;
