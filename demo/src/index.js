import React from 'react';
import {render} from 'react-dom';

import ReactClippy from '../../src';

import './index.css';

const Demo = () => (
  <div>
    <h1>react-clippy Demo</h1>
    <ReactClippy
      actor={'Clippy'}
    />
  </div>
);

render(<Demo />, document.querySelector('#demo'));
