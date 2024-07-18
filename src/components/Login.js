import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUsername } from '../contexts/UsernameContext';
import './Login.css';

function Login( {onNameEnter} ) {
  const [inputUsername, setInputUsername] = useState('');
  const { addUsername } = useUsername();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputUsername.trim()) {
      addUsername(inputUsername.trim());
      onNameEnter(inputUsername); //sets username in App
      navigate('/lobby');
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Enter your username:</label>
        <input
          type="text"
          id="username"
          value={inputUsername}
          onChange={(e) => setInputUsername(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
