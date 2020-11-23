import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Counter = ({value}) => {

  const [ counter, setCounter ] = useState(0);

  const handleAdd = (e) => {
    setCounter(counter + 1);
  }

  return (
    <>
      <h1>Counter Component</h1>
      <h2>{counter}</h2>
      <button onClick={handleAdd}>+1</button>
    </>
  )
}

Counter.propTypes = {
  value: PropTypes.number
}

export default Counter;
