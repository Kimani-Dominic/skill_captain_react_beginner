import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.includes('@')) {
      setEmailError('Invalid email format');
      return;
    }

    // Add form submission logic here
    console.log('Form submitted successfully');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError(''); // Clear email error on input change
          }}
        />
        {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
