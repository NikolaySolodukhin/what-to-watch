import NameSpace from './../../reducer/name-spaces';

const NAME_SPACE = NameSpace.USER;

export const getLoginError = (state) => state[NAME_SPACE].loginError;

export const getUser = (state) => state[NAME_SPACE].user;

export const getUserIsLoggedIn = (state) => state[NAME_SPACE].userIsLoggedIn;
