import React from 'react';
import renderer from 'react-test-renderer';

import App from './App.jsx';

const FILMS_LIST = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

it(`App is rendered correctly`, () => {
  const tree = renderer.create(<App
    films={FILMS_LIST}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
