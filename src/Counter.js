import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Counter = ({value=0}) => {

  const [ counter, setCounter ] = useState(0);

  const handleAdd = (e) => {
    setCounter(counter + 1);
  }

  const resetCounter = (e) => {
    setCounter(value);
  }

  const handleSubstract = (e) => {
    setCounter(counter - 1);
  }


  return (
    <>
      <h1>Counter Component</h1>
      <h2>{counter}</h2>
      <button onClick={handleAdd}>+1</button>
      <button onClick={resetCounter}>Reset</button>
      <button onClick={handleSubstract}>-1</button>
    </>
  )
}

Counter.propTypes = {
  value: PropTypes.number
}

export default Counter;
