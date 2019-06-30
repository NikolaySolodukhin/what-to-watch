import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallowToJson} from 'enzyme-to-json';
Enzyme.configure({adapter: new Adapter()});

import {WelcomeScreen} from './WelcomeScreen';

describe(`<WelcomeScreen/>`, () => {
  it(`WelcomeScreen renders correctly`, () => {
    const mockProps = {
      filmsList: [{
        id: 1,
        title: `Fantastic Beasts`,
        genreId: 1,
        image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
        video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      }],
      activeGenre: `Comedies`,
      genres: [`Comedies`],
      setActiveGenre: jest.fn(),
    };
    const tree = shallow(<WelcomeScreen filmsList={mockProps.filmsList}
      genres={mockProps.genres}
      activeGenre={mockProps.activeGenre}
      setActiveGenre={mockProps.setActiveGenre} />);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });
});
