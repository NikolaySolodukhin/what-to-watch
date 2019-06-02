import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallowToJson} from 'enzyme-to-json';
Enzyme.configure({adapter: new Adapter()});

import {GenresList} from "./GenreList";

describe(`<CatalogGenresList/>`, () => {
  it(`CatalogGenresList renders correctly`, () => {
    const mockProps = {
      currentGenreId: 1,
      genres: [{
        id: 1,
        title: `Comedies`,
      }],
      onGenreLinkClick: jest.fn(),
    };
    const tree = shallow(<GenresList
      currentGenreId={mockProps.currentGenreId}
      genres={mockProps.genres}
      onGenreLinkClick={mockProps.onGenreLinkClick}/>);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });
});