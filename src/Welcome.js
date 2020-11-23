import React from 'react';
import PropTypes from 'prop-types';

const Welcome = ({title, subTitle}) => {

  return (
    <>
      <h1>{title}</h1>
      <p>{subTitle}</p>
    </>
  );
}

Welcome.defaultProps = {
  subTitle: 'Practice React'
}

Welcome.propTypes = {
  title: PropTypes.string.isRequired
}

export default Welcome;
