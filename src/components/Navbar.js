import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-inverse navbar-static-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#main-nav-collapse"
            aria-expanded="false"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand" href="/">
            Joe's Diner
          </a>
        </div>
        <div className="collapse navbar-collapse" id="main-nav-collapse">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#welcome">Welcome</a>
            </li>
            <li>
              <a href="#reservation">Reservations</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
