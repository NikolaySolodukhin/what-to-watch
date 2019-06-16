import React from 'react';
import renderer from 'react-test-renderer';
import {SmallMovieCard} from './SmallMovieCard';

describe(`<SmallMovieCard/>`, () => {
  it(`SmallMovieCard renders correctly`, () => {
    const film = {
      id: 1,
      title: `Fantastic Beasts`,
      image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
      video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
    };
    const onTitleClick = jest.fn();
    const tree = renderer
      .create(<SmallMovieCard film={film} isActive={false} onTitleClick={onTitleClick} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
