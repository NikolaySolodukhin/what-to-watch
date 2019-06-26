import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import WelcomeScreen from './WelcomeScreen';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './../../reducer/reducer';

configure({adapter: new Adapter()});
const store = createStore(reducer);

it(`WelcomeScreen correctly render`, () => {
  const titleClickHandler = jest.fn();
  mount(<Provider store={store}>
    <WelcomeScreen onTitleClick={titleClickHandler}/>
  </Provider>);
});
