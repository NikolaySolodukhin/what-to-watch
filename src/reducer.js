import {genres} from "./components/mocks/genre";
import {filmsList} from "./components/mocks/films";

const initialState = {
  currentGenreId: 0,
  genres,
  filmsList,
};

export const ActionType = {
  SET_CURRENT_GENRE_ID: `SET_CURRENT_GENRE_ID`,
};

export const ActionCreator = {
  setCurrentGenreId: (genreId) => ({
    type: ActionType.SET_CURRENT_GENRE_ID,
    payload: genreId,
  })
};

export const reducer = (state = initialState, action) => {
  if (action.type === ActionType.SET_CURRENT_GENRE_ID) {
    return {
      ...state,
      currentGenreId: action.payload,
      filmsList: filmsList.filter((film) => action.payload !== 0 ? film.genreId === action.payload : true)
    };
  } else {
    return state;
  }
};
