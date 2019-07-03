import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallowToJson} from 'enzyme-to-json';

import MovieCardFullReviews from './MovieCardFullReviews';

Enzyme.configure({adapter: new Adapter()});

describe(`<MovieCardFullReviews/>`, () => {
  it(`MovieCardFullReviews renders correctly`, () => {
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
      },
      reviews: [{
        comment: `Unfortunately we don't have a reliable way to tell the true ratings of a movie.`,
        date: `2019-06-18T20:42:47.046Z`,
        id: 1,
        rating: 2,
        user: {
          id: 10,
          name: `Max`
        }
      }]};
    const tree = shallow(<MovieCardFullReviews film={mockProps.film} reviews={mockProps.reviews} />);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });
});
