import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import SmallMovieCard from './SmallMovieCard';

describe(`<SmallMovieCard/>`, () => {
  it(`SmallMovieCard renders correctly`, () => {
    const film = {
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
    };
    const tree = renderer
      .create(
          <BrowserRouter>
            <SmallMovieCard film={film} isActive={false} />
          </BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
