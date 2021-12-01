import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './NavBar.css'
import 'materialize-css/dist/css/materialize.min.css';

 
const Navbar = () => {
   return(
    <header>
    <nav>
      <div class="nav-wrapper">
        <a href="/" class="brand-logo">Paul Miller INC.</a>
        <a href="/" data-target="mobile-nav" class="sidenav-trigger"></a>
        <ul id="desktop-nav" class="right hide-on-med-and-down">
          <li><button class="navigate">Home</button> </li>
          <li><button class="navigate">Map</button></li>
          <li><button class="navigate">Adminstrative Mode (Only visible after sign in for certain accounts)</button></li>
          <li class="btn">Login</li>
        </ul>
      </div>
    </nav>
    <ul id="mobile-nav" class="sidenav">
      <li>Home</li>
      <li>Map</li>
      <li>Move Car???</li>
      <li>Adminstrative Mode (Only visible after sign in for certain accounts)</li>
      <li class="btn">Login</li>
    </ul>
  </header>
   )
}
 
export default Navbar;