import React from 'react';
import renderer from 'react-test-renderer';

import VideoPlayer from './VideoPlayer';

describe(`<VideoPlayer/>`, () => {
  it(`VideoPlayer renders correctly`, () => {
    const film = {
      id: 1,
      title: `Fantastic Beasts`,
      image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
      video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
    };
    const tree = renderer
      .create(<VideoPlayer film={film} muted controls />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
