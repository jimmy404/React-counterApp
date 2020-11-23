import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';

import './index.css';

const divRoot = document.querySelector('#root');

ReactDOM.render(
  <Counter
    value={10}
  />,
  divRoot
  );
