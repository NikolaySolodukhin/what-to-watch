import React from 'react';
import renderer from 'react-test-renderer';
import CatalogMoviesList from "./CatalogMovieList";
import {filmsList} from "../mocks/films";

describe(`CatalogMoviesList`, () => {
  it(`CatalogMoviesList renders correctly`, () => {
    const tree = renderer
      .create(<CatalogMoviesList filmsList={filmsList} onTitleClick={jest.fn()}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
