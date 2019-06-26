import {createSelector} from 'reselect';

import {getFilms} from './../../reducer/data/selectors';
import NameSpace from './../../reducer/name-spaces';

const NAME_SPACE = NameSpace.CATALOG;

export const getActiveGenre = (state) => state[NAME_SPACE].activeGenre;

export const getActiveFilms = createSelector(
    getActiveGenre,
    getFilms,
    (activeGenre, films) =>
      films.filter(
          (film) => (activeGenre !== `` ? film.genre === activeGenre : true)
      )
);
