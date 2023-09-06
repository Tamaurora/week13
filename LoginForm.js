import React from 'react';
import './LoginForm.css';

const LoginForm = () => {
  return (
    <div className="login-form">
      <h3>Log In</h3>
      <div>
        <label>Username:</label>
        <input type="text" />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" />
      </div>
    </div>
  );
};

export default LoginForm;
