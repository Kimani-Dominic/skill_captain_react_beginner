
import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <h2>About Us</h2>
      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </div>
  );
}

export default About;
