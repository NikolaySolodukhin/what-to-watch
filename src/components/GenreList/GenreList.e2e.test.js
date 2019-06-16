import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {GenresList} from './GenreList';

Enzyme.configure({adapter: new Adapter()});

describe(`<GenresList/>`, () => {
  it(`GenresList correctly click catalog__genres-link`, () => {
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
    const genresLink = tree.find(`.catalog__genres-link`).at(0);
    genresLink.simulate(`click`, {preventDefault() {}});
    expect(mockProps.onGenreLinkClick).toHaveBeenCalledTimes(1);
  });
});
