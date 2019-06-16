import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallowToJson} from 'enzyme-to-json';
Enzyme.configure({adapter: new Adapter()});

import WelcomeScreen from './WelcomeScreen';

describe(`<WelcomeScreen/>`, () => {
  it(`WelcomeScreen renders correctly`, () => {
    const tree = shallow(<WelcomeScreen onTitleClick={jest.fn()}/>);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });
});
