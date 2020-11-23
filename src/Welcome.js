import React from 'react';
import PropTypes from 'prop-types';

const Welcome = ({title}) => {

  return (
    <>
      <h1>{title}</h1>
    </>
  );
}

Welcome.propTypes = {
  title: PropTypes.string.isRequired
}

export default Welcome;
