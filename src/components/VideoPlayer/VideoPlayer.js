import React from 'react';
import PropTypes from 'prop-types';

export default function VideoPlayer(props) {
  const {film, muted, controls} = props;
  return (
    <video src={film.video} poster={film.image} playsInline={true} width="280" height="175" muted={muted} controls={controls} autoPlay={true} />
  );
}

VideoPlayer.propTypes = {
  film: PropTypes.object.isRequired,
  muted: PropTypes.bool,
  controls: PropTypes.bool,
};
