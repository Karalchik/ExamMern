import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div name="block-icon"></div>
        <Link to="" className="navbar-brand">BLUE SHELL</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/create_request" className="nav-link">RENT BOAT</Link>
          <div>
          <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/create_boat" className="nav-link">FIND BOAT</Link>
          </li>
          </ul>
          </div>
          </li>
          <li className="navbar-item">
          <Link to="" className="nav-link">ABOUT</Link>
          <div>
          <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="" className="nav-link">CONTACT</Link>
          </li>
          <li className="navbar-item">
            <Link to="" className="nav-link">ABOUT US</Link>
          </li>
          <li className="navbar-item">
            <Link to="" className="nav-link">FAQ</Link>
          </li>
          <li className="navbar-item">
            <Link to="" className="nav-link">INFORMATION</Link>
          </li>
          </ul>
          </div>
          </li>
          <li className="navbar-item">
          <Link to="/logIn_user" className="nav-link">PROFILE</Link>
          </li>
          <li className="navbar-item">
          <div>
          <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="" className="nav-link">CHOOSE LANGUAGE</Link>
          </li>
          <li className="navbar-item">
            <Link to="" className="nav-link">NUMBER</Link>
          </li>
          </ul>
          </div>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}