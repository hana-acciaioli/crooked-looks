import React from 'react';
import { NavLink, Switch } from 'react-router-dom';
import './NavBar.css';
import { useUIContext } from '../../context/UIContext.js';
import { useUserContext } from '../../context/UserContext.js';
import { signOut } from '../../services/auth.js';

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
    <nav>
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
        {user && <button onClick={signOutHandler}>Sign Out</button>}
      </div>

      {navDisplay && (
        <div className="hidden-nav">
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/watch">Watch</NavLink>
          {/* <NavLink to="/listen">Listen</NavLink> */}
          <NavLink to="/shows">Shows</NavLink>
          {/* <NavLink to="/news">News</NavLink> */}
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          {user && <button onClick={signOutHandler}>Sign Out</button>}
        </div>
      )}
    </nav>
  );
}
