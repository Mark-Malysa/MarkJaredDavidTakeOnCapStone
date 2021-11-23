import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import './styles/index.css';
import 'materialize-css/dist/css/materialize.min.css';
import App from './App.js';


const Navbar = () => {
   return(
    <header>
    <nav>
      <div class="nav-wrapper">
        <a href="/" class="brand-logo">HackBCA 20XX</a>
        <a href="/" data-target="mobile-nav" class="sidenav-trigger"><Menu/></a>
        <ul id="desktop-nav" class="right hide-on-med-and-down">
          <li onClick={events}><Event/>Events</li>
          <li onClick={attendees}><People/>Attendees</li>
          <li onClick={projects}><Build/>Projects</li>
          <li><a href='/' onClick={login} class="btn">Login / Register</a></li>
        </ul>
      </div>
    </nav>
    <ul id="mobile-nav" class="sidenav">
      <li onClick={events}><Event/>Events</li>
      <li onClick={attendees}><People/>Attendees</li>
      <li onClick={projects}><Build/>Projects</li>
      <li><a href='/' onClick={login} class="btn">Login / Register</a></li>
    </ul>
  </header>
   )
}
 
export default Navbar;