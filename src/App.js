// src/App.js

import React from 'react';
import './App.css'
import Clock from './clock';
import Greeting from './greetings'

function App() {
  return (
    <div>
      <h1>Welcome to day 3 & 4 of react learning with Skill-captain</h1>
      <Clock />
      <Greeting name="Kimani" message="Today I've learnt on creating functional components and passing data through props" />
      
    </div>
  );
}

export default App;
