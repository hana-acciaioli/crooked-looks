import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import { useUIContext } from '../../context/UIContext.js';
import { useUserContext } from '../../context/UserContext.js';
import { signOut } from '../../services/auth.js';
import { Button } from '@mui/material';

export default function NavBar() {
  const { navDisplay, setNavDisplay } = useUIContext();
  const { user, setUser } = useUserContext();
  const naveToggleHandler = () => {
    !navDisplay ? setNavDisplay(true) : setNavDisplay(false);
  };
  const signOutHandler = async () => {
    try {
      await signOut();
      setUser(null);
    } catch (e) {
      console.error(e.message);
    }
  };
  return (
    <nav className="header">
      <h3 className="secondary-header">Crooked Looks</h3>
      {!navDisplay ? (
        <button className="toggle" onClick={naveToggleHandler}>
          ☰
        </button>
      ) : (
        <button className="toggle" onClick={naveToggleHandler}>
          <img src="assets/images/x-button.png"></img>
        </button>
      )}
      <div className="full-nav">
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/watch">Watch</NavLink>
        {/* <NavLink to="/listen">Listen</NavLink> */}
        <NavLink to="/shows">Shows</NavLink>
        {/* <NavLink to="/news">News</NavLink> */}
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        {user && <Button onClick={signOutHandler}>Sign Out</Button>}
      </div>

      {navDisplay && (
        <div className={open ? 'show_hidden-nav hidden-nav' : 'hidden-nav'}>
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/watch">Watch</NavLink>
          {/* <NavLink to="/listen">Listen</NavLink> */}
          <NavLink to="/shows">Shows</NavLink>
          {/* <NavLink to="/news">News</NavLink> */}
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          {user && <Button onClick={signOutHandler}>Sign Out</Button>}
        </div>
      )}
    </nav>
  );
}
