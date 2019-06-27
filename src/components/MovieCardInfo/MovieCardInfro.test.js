import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallowToJson} from 'enzyme-to-json';

import MovieCardInfo from './MovieCardInfo';

Enzyme.configure({adapter: new Adapter()});

describe(`<MovieCardInfo/>`, () => {
  it(`MovieCardInfo renders correctly`, () => {
    const tree = shallow(<MovieCardInfo/>);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });
});
