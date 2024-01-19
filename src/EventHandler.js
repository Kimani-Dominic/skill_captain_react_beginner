
import React from 'react';

function EventHandler() {
  
const handleClick = () => {
    console.log('Clicked!');
  };

  return (
    <button onClick={handleClick}>
      Click me to see the event object in browser console
    </button>
  );
}

export default EventHandler;
