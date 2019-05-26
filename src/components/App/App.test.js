import React from 'react';
import renderer from 'react-test-renderer';

import App from './App.jsx';

const FILMS_LIST = [{
  id: 1,
  title: `Fantastic Beasts`,
  image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
}, {
  id: 2,
  title: `Bohemian Rhapsody`,
  image: `img/bohemian-rhapsody.jpg`
}, {
  id: 3,
  title: `Macbeth`,
  image: `img/macbeth.jpg`
}, {
  id: 4,
  title: `Aviator`,
  image: `img/aviator.jpg`
}, {
  id: 5,
  title: `We need to talk about Kevin`,
  image: `img/we-need-to-talk-about-kevin.jpg`
}];

it(`App is rendered correctly`, () => {
  const tree = renderer.create(<App
    films={FILMS_LIST}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
