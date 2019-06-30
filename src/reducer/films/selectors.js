import {createSelector} from 'reselect';

import NameSpace from './../name-spaces';

const NAME_SPACE = NameSpace.FILMS;

export const getGenres = (state) => state[NAME_SPACE].genres;

export const getFilms = (state) => state[NAME_SPACE].films;

export const getActiveGenre = (state) => state[NAME_SPACE].activeGenre;

export const getPromoFilm = (state) => state[NAME_SPACE].promoFilm;

export const getFilmById = (state, id) => state[NAME_SPACE].films.find((film) => +film.id === +id) || {};

export const getLikeThisFilmsById = (state, id) => {
  const genre = getFilmById(state, id).genre;
  const films = state[NAME_SPACE].films.filter((film) => film.genre === genre && +film.id !== +id);
  return films.length ? films : [];
};

export const getActiveFilms = createSelector(getActiveGenre, getFilms, (activeGenre, films) => films.filter((film) => activeGenre !== `` ? film.genre === activeGenre : true));
