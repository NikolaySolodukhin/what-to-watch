import {adapterFilm, adapterFilms, adapterGenres} from './../../utils';

const initialState = {
  genres: [],
  films: [],
  reviews: [],
  activeGenre: ``,
  promoFilm: null,
};

export const ActionType = {
  SET_FILMS: `SET_FILMS`,
  SET_GENRE: `SET_GENRE`,
  SET_REVIEWS: `SET_REVIEWS`,
  SET_ACTIVE_GENRE: `SET_ACTIVE_GENRE`,
  SET_PROMO_FILM: `SET_PROMO_FILM`,
};

export const ActionCreator = {

  setFilms: (payload) => ({
    type: ActionType.SET_FILMS,
    payload,
  }),

  setGenre: (payload) => ({
    type: ActionType.SET_GENRE,
    payload,
  }),

  setActiveGenre: (genre) => ({
    type: ActionType.SET_ACTIVE_GENRE,
    payload: genre,
  }),

  setPromoFilm: (film) => ({
    type: ActionType.SET_PROMO_FILM,
    payload: film,
  }),

  setReviews: (reviews)=> ({
    type: ActionType.SET_REVIEWS,
    payload: reviews,
  })
};

export const Operation = {
  loadFilmsAndGenre: () => (dispatch, _getState, api) => api.get(`/films`)
      .then((response) => {
        dispatch(ActionCreator.setFilms(response.data));
        dispatch(ActionCreator.setGenre(response.data));
      }),

  loadPromoFilm: () => (dispatch, _getState, api) => api.get(`/films/promo`)
      .then((response) => dispatch(ActionCreator.setPromoFilm(response.data))).catch(() => {}),

  loadReviews: (filmId) =>(dispatch, _getState, api) => api.get(`/comments/${filmId}`)
    .then((response) => {
      dispatch(ActionCreator.setReviews(response.data));
    })
};

export const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.SET_FILMS:
      return {
        ...state,
        films: adapterFilms(action.payload),
      };

    case ActionType.SET_GENRE:
      return {
        ...state,
        genres: adapterGenres(action.payload),
      };

    case ActionType.SET_ACTIVE_GENRE:
      return {
        ...state,
        activeGenre: action.payload,
      };

    case ActionType.SET_PROMO_FILM:
      return {
        ...state,
        promoFilm: adapterFilm(action.payload),
      };

    case ActionType.SET_REVIEWS:
      return {
        ...state,
        reviews: action.payload
      };

    default:
      return state;
  }
};
