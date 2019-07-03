import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallowToJson} from 'enzyme-to-json';

import {MovieCardFullDetails} from './MovieCardFullDetails';

Enzyme.configure({adapter: new Adapter()});

describe(`<MovieCardFullDetails/>`, () => {
  it(`MovieCardFullDetails renders correctly`, () => {
    const mockProps = {
      film: {
        id: 1,
        genreId: 1,
        backgroundColor: `white`,
        backgroundImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
        description: `Film`,
        director: `Raccoon`,
        genre: `comedian`,
        isFavorite: false,
        name: `Fantastic Beasts`,
        posterImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
        previewImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
        previewVideoLink: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
        rating: 4,
        released: 2018,
        runTime: 1990,
        scoresCount: 10,
        starring: [],
        videoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
      }};
    const tree = shallow(<MovieCardFullDetails film={mockProps.film} />);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });
});
