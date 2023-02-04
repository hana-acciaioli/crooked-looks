import React from 'react';
import { NavLink, Switch } from 'react-router-dom';
import './NavBar.css';
import { useUIContext } from '../../context/UIContext.js';

export default function NavBar() {
  const { navDisplay, setNavDisplay } = useUIContext();

  const naveToggleHandler = () => {
    !navDisplay ? setNavDisplay(true) : setNavDisplay(false);
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
        </div>
      )}
    </nav>
  );
}
