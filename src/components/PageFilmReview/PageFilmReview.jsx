import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {getFilmById} from './../../reducer/films/selectors';
import Header from './../Header/Header.jsx';
import ReviewForm from './../FormReview/FormReview.jsx';

class PageFilmReview extends PureComponent {
  render() {
    const {film} = this.props;
    return (
      <div className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={film && film.backgroundImage} alt={film && film.name}/>
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <Header withAuth/>
          <div className="movie-card__poster movie-card__poster--small">
            <img src={film.posterImage} alt={film.name} width="218" height="327"/>
          </div>
        </div>
        <ReviewForm />
      </div>
    );
  }
}

PageFilmReview.propTypes = {
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
  })
};

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  film: getFilmById(state, ownProps.match.params.id),
});

export {PageFilmReview};

export default connect(mapStateToProps)(PageFilmReview);
