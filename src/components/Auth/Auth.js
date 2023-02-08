import React from 'react';
import { useState } from 'react';
import { useUserContext } from '../../context/UserContext.js';
import { useParams, NavLink, Redirect } from 'react-router-dom';
import { authUser } from '../../services/auth';
import './Auth.css';

import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Box from '@mui/material/Box';

export default function Auth() {
  const { type } = useParams();

  const { user, setUser } = useUserContext();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const theme = createTheme();

  if (user) {
    return <Redirect to="/" />;
  }

  function Copyright(props) {
    return (
      <Typography variant="body2" align="center" {...props}>
        {'Copyright © '}
        Crooked Looks {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  const submitAuthHandler = async (e) => {
    e.preventDefault();
    try {
      const newUser = await authUser(email, password, type);
      setUser(newUser);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <>
      <div className="align">
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} className="starting-component">
          <LockOutlinedIcon />
        </Avatar>
        <Typography>Sign in</Typography>
        <nav className="auth-nav-container">
          <NavLink to="/auth/sign-up" className="nav-link">
            Sign Up
          </NavLink>
          <NavLink to="/auth/sign-in" className="nav-link">
            Sign In
          </NavLink>
        </nav>
        <div>
          <form className="form auth" onSubmit={submitAuthHandler}>
            <div className="form__field">
              <input
                required
                type="text"
                className="form__input"
                placeholder="Email"
                // id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <input
                required
                name="password"
                label="Password"
                type="text"
                placeholder="Password"
                // id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form__input"
              ></input>
            </div>
            <Button variant="contained" onClick={submitAuthHandler}>
              Submit
            </Button>
          </form>
        </div>
      </div>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </>
  );
}
