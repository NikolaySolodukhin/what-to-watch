import React from "react";
import renderer from "react-test-renderer";

import {WelcomeScreen} from "./WelcomeScreen";

const FILMS_LIST = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

it(`WelcomeScreen is rendered correctly`, () => {
  const tree = renderer.create(<WelcomeScreen films={FILMS_LIST} />).toJSON();

  expect(tree).toMatchSnapshot();
});
