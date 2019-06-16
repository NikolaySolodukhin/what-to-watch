import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WelcomeScreen from './WelcomeScreen';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './../../reducer';

configure({adapter: new Adapter()});
const store = createStore(reducer);

it(`WelcomeScreen once clicked title fired once`, () => {
  const titleClickHandler = jest.fn();
  const app = mount(<Provider store={store}>
    <WelcomeScreen onTitleClick={titleClickHandler}/>
  </Provider>);
  const cardTitle = app.find(`.small-movie-card__link`).at(0);
  cardTitle.simulate(`click`, {preventDefault() {}});
  expect(titleClickHandler).toHaveBeenCalledTimes(1);
});
