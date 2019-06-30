import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BrowserRouter} from 'react-router-dom';

import SmallMovieCard from './SmallMovieCard';

Enzyme.configure({adapter: new Adapter()});

describe(`<SmallMovieCard/>`, () => {
  jest.useFakeTimers();

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

  it(`SmallMovieCard correctly eval callback setActiveFilm`, () => {
    const setActiveFilmHandler = jest.fn();
    const smallMovieCard = mount(
        <BrowserRouter>
          <SmallMovieCard film={film} isActive={false} setActiveFilm={setActiveFilmHandler}/>
        </BrowserRouter>);
    const article = smallMovieCard.find(`.small-movie-card.catalog__movies-card`);
    article.simulate(`mouseEnter`, {preventDefault() {}});
    jest.runAllTimers();
    expect(setActiveFilmHandler).toHaveBeenCalledTimes(1);
  });

  it(`SmallMovieCard correctly eval callback removeActiveFilm`, () => {
    const removeActiveFilmHandler = jest.fn();
    const smallMovieCard = mount(
        <BrowserRouter>
          <SmallMovieCard film={film} isActive={false} removeActiveFilm={removeActiveFilmHandler}/>
        </BrowserRouter>);
    const article = smallMovieCard.find(`.small-movie-card.catalog__movies-card`);
    article.simulate(`mouseLeave`, {preventDefault() {}});
    expect(removeActiveFilmHandler).toHaveBeenCalledTimes(1);
  });

});
