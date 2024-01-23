// src/App.js

import React, { useState, useEffect } from 'react';
import './App.css'
import Clock from './clock';
import Greeting from './greetings'
import EventHandler from './EventHandler';
import Login from './Login';
import styles from './button.module.css'
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';


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

const StyledComponent = styled.div`
  background-color: pink;
  padding: 15px;
  border-radius: 10px;
`;


  
  return (
    <div>
      <Router>
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/home" exact element={<Home/>} />
      <Route path="/about" element={<About/>} />
    </Routes>
  </Router>
      <h1>Welcome to day 9 of react learning with Skill-captain</h1>
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

      <button className={styles.button}>Styled with CSS Module</button>

      <StyledComponent>Learned on styled components on day 8 of learning with skill captain</StyledComponent>




     <ul>
      {items.map((item, index) => (
      <li key={index}>{item}</li>
      ))}
     </ul>
    </div>
  );
}

export default App;
