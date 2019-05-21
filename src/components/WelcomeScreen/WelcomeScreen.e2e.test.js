import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {WelcomeScreen} from "./WelcomeScreen";

configure({adapter: new Adapter()});


it(`WelcomeScreen once clicked title fired once`, () => {
  const titleClickHandler = jest.fn();
  const FILMS_LIST = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];
  const app = shallow(<WelcomeScreen
    films={FILMS_LIST}
    onTitleClick={titleClickHandler}
  />);

  const cardTitle = app.find(`.small-movie-card__title`).first();
  cardTitle.simulate(`click`, {preventDefault() {}});
  expect(titleClickHandler).toHaveBeenCalledTimes(1);
});
