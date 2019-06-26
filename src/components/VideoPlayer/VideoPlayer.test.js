import React from 'react';
import renderer from 'react-test-renderer';

import VideoPlayer from './VideoPlayer';

describe(`<VideoPlayer/>`, () => {
  it(`VideoPlayer renders correctly`, () => {
    const mock = {
      src: `src:path`,
      poster: `poster:path`,
    };
    const tree = renderer
      .create(<VideoPlayer src={mock.src} poster={mock.poster} muted controls />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
