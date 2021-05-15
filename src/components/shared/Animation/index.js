import React from 'react';
import Lottie from 'react-lottie';
import PropTypes from 'prop-types';

export default function Animation(props) {
  const { animationData, loop, ...rest } = props;

  return (
    <Lottie
      options={{
        animationData,
        loop,
      }}
      {...rest}
    />
  );
}

Animation.propTypes = {
  animationData: PropTypes.object.isRequired,
  loop: PropTypes.bool,
  speed: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.string,
};

Animation.defaultProps = {
  loop: false,
  speed: 1,
  width: null,
  height: null,
};
