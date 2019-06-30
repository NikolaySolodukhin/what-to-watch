import NameSpace from './../name-spaces';

const NAME_SPACE = NameSpace.FAVORITE;

export const getFavorite = (state) => state[NAME_SPACE].favorite;

export const getFavoriteIdList = (state) => state[NAME_SPACE].favorite.map((_favorite) => _favorite.id);
