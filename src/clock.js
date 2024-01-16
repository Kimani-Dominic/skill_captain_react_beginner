

import React from 'react';
import './clock.css';

function Clock() {
  return (
    <footer>
      <h2>The time is {new Date().toLocaleTimeString()}.</h2>
    </footer>
  );
}

export default Clock;