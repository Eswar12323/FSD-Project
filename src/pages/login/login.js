import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { House } from 'phosphor-react';
import './Login.css';

function Login() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const database = [
    {
      username: 'user1',
      password: 'pass1'
    },
    {
      username: 'user2',
      password: 'pass2'
    }
  ];

  const errors = {
    uname: 'Invalid username',
    pass: 'Invalid password'
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { uname, pass } = event.target.elements;

    const userData = database.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: 'pass', message: errors.pass });
      } else {
        setIsSubmitted(true);
        navigate('/shop'); // Route to the specific page (e.g., "/dashboard")
      }
    } else {
      setErrorMessages({ name: 'uname', message: errors.uname });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container2">
          <label>Username</label>
          <input type="text" name="uname" required />
          {renderErrorMessage('uname')}
        </div>
        <div className="input-container1">
          <label>Password</label>
          <input type="password" name="pass" required />
          {renderErrorMessage('pass')}
        </div>
        <div className="button-container">
          <input type="submit" value="Login" />
        </div>
        <div className="register">
          <Link to="/Signup">Register</Link>
        </div>
      </form>
    </div>
  );

  return (
    <div className="login">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? (
          <div>
            <center>
              <div>User is successfully logged in</div>
              <br />
              <Link to="/Home">
                <House size={20} />
              </Link>
            </center>
          </div>
        ) : (
          renderForm
        )}
      </div>
    </div>
  );
}

export default Login;
