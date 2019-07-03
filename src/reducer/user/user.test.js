import MockAdapter from 'axios-mock-adapter';

import {createAPI} from './../../api';
import {ActionType, ActionCreator, Operation} from './user';

describe(`Business logic is correct  user`, () => {
  it(`Action creators work correctly user`, () => {
    expect(ActionCreator.setUser()).toEqual({
      type: ActionType.SET_USER,
    });
  });
});

describe(`userReducer works correctly `, () => {
  it(`Should make a correct API call to /login`, function () {
    const api = createAPI();
    const dispatch = jest.fn();
    const apiMock = new MockAdapter(api);
    const dataLoader = Operation.fetchUser();

    apiMock
      .onGet(`/login`)
      .reply(200, {fake: true});

    return dataLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_USER,
          payload: {fake: true},
        });
      });
  });
});
