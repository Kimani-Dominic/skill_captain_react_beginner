// src/App.js

import React, { useState, useEffect } from 'react';
import './App.css'
import Clock from './clock';
import Greeting from './greetings'
import EventHandler from './EventHandler';
import Login from './Login';


function App() {
  //state Variables
const [count, setCount] = useState(0);
//day 6
const items = ['Apple', 'Banana', 'Orange', 'Mango'];

useEffect(() => {
  const timer = setInterval(() => {
    setCount(prevCount => prevCount + 1);
  }, 1000);

  return () => clearInterval(timer)
}, []);
//
const [showMessage, setshowMessage] =useState(false);


  
  return (
    <div>
      <h1>Welcome to day 3 & 4 of react learning with Skill-captain</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
  Increment
</button>
<button onClick={() => setshowMessage(showMessage)}>toggle message</button>
 {showMessage(
        <p>Hello, React Event Handling!</p>
      )}






      <Clock />
      <Greeting name="Kimani" message="Today I've learnt on creating functional components and passing data through props" />
      <EventHandler />
      <Login />



     <ul>
      {items.map((item, index) => (
      <li key={index}>{item}</li>
      ))}
     </ul>
    </div>
  );
}

export default App;
