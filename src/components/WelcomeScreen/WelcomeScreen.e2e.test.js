import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {WelcomeScreen} from "./WelcomeScreen";

configure({adapter: new Adapter()});

it(`WelcomeScreen once clicked title fired once`, () => {
  const titleClickHandler = jest.fn();
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

  const app = mount(<WelcomeScreen
    films={FILMS_LIST}
    onTitleClick={titleClickHandler}
  />);

  const cardTitle = app.find(`.small-movie-card__title`).first();
  cardTitle.simulate(`click`, {preventDefault() {}});
  expect(titleClickHandler).toHaveBeenCalledTimes(1);
});
