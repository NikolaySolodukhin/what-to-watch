import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CatalogMoviesList from "./CatalogMovieList";

Enzyme.configure({adapter: new Adapter()});

describe(`<CatalogMoviesList/>`, () => {
  const filmsList = [{
    id: 1,
    title: `Fantastic Beasts`,
    image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
  }];

  it(`CatalogMoviesList correctly click article title`, () => {
    const clickHandler = jest.fn();
    const app = mount(<CatalogMoviesList filmsList={filmsList} onTitleClick={clickHandler}/>);
    const articleTitle = app.find(`.small-movie-card__link`);
    articleTitle.simulate(`click`, {preventDefault() {}});
    expect(clickHandler).toHaveBeenCalledTimes(1);
  });

  it(`CatalogMoviesList correctly switch state.activeFilm`, () => {
    const app = mount(<CatalogMoviesList filmsList={filmsList}/>);
    const playBtn = app.find(`.small-movie-card__play-btn`);
    playBtn.simulate(`click`);
    expect(app.state(`activeFilm`)).toEqual(filmsList[0]);
  });

});
