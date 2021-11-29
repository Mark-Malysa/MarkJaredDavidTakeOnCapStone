import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './NavBar.css'

 
const Navbar = () => {
   return(
    <header>
    <nav>
      <div class="nav-wrapper">
        <a href="/" class="brand-logo">HackBCA 20XX</a>
        <a href="/" data-target="mobile-nav" class="sidenav-trigger"></a>
        <ul id="desktop-nav" class="right hide-on-med-and-down">
          <li>Events</li>
          <li>Attendees</li>
          <li>Projects</li>
          <li class="btn">Login / Register</li>
        </ul>
      </div>
    </nav>
    <ul id="mobile-nav" class="sidenav">
      <li>Events</li>
      <li>Attendees</li>
      <li>Projects</li>
      <li class="btn">Login / Register</li>
    </ul>
  </header>
   )
}
 
export default Navbar;