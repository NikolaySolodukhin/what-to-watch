import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallowToJson} from 'enzyme-to-json';

import {FormReview} from "./FormReview";

Enzyme.configure({adapter: new Adapter()});

describe(`<FormReview />`, () => {
  it(`FormReview  renders correctly`, () => {
    const tree = shallow(<FormReview />);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });
});
