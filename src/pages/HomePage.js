import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Fitness Tracker App</h1>
      <Link to="/users/register">Register</Link>
      <br />
      <Link to="/users/login">Login</Link>
    </div>
  );
};

export default HomePage;