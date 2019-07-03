import MockAdapter from 'axios-mock-adapter';

import {createAPI} from './../../api';
import {ActionType, ActionCreator, Operation} from './favorite';

describe(`Business logic is correct`, () => {
  it(`Action creators work correctly`, () => {
    expect(ActionCreator.setFavorite()).toEqual({
      type: ActionType.SET_FAVORITE,
    });
  });
});


describe(`Reducer works correctly`, () => {
  it(`Should make a correct API call to /favorite`, function () {
    const api = createAPI();
    const dispatch = jest.fn();
    const apiMock = new MockAdapter(api);
    const dataLoader = Operation.loadFavorite();

    apiMock
      .onGet(`/favorite`)
      .reply(200, [{fake: true}]);

    return dataLoader(dispatch, ()=> {
      return {
        USER: {
          userIsLoggedIn: true
        }
      };
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_FAVORITE,
          payload: [{fake: true}],
        });
      });
  });
});
