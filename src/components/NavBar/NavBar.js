import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import { useFanContext } from '../../context/FanContext.js';

export default function NavBar() {
  const { navDisplay, setNavDisplay } = useFanContext();

  const naveToggleHandler = () => {
    !navDisplay ? setNavDisplay(true) : setNavDisplay(false);
  };
  return (
    <nav>
      <button className="toggle" onClick={naveToggleHandler}>
        ☰
      </button>
      {navDisplay && (
        <div className="hidden-nav">
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/watch">Watch</NavLink>
          <NavLink to="/listen">Listen</NavLink>
          <NavLink to="/shows">Shows</NavLink>
          <NavLink to="/news">News</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      )}
    </nav>
  );
}
