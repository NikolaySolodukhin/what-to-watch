import NameSpace from './../name-spaces';

const NAME_SPACE = NameSpace.DATA;

export const getFavorite = (state) => state[NAME_SPACE].favorite;
