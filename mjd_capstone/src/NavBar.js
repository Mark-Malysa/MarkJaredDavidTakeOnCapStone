import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from './Container';
import './NavBar.css'
import ParkingMap from './Map';
import 'materialize-css/dist/css/materialize.min.css';

let logins = new Map();
logins.set("admin", {password:"admin", isAdmin:true});
logins.set("user", {password:"user", isAdmin:false});
 
const Navbar = () => {

  const openMap = (event) => {
    console.log(event);
    ReactDOM.render(
      <ParkingMap/>,
      document.getElementById('root')
    );
  }

  const login = (event) => {
    event.preventDefault(event)
    let attemptedUser = logins.get(event.target.username.value)
    if (attemptedUser.password === event.target.password.value){
      alert("Logged in as " + event.target.username.value)
    }
    else{
      alert("Login failed")
    }
  }

   return(
    <header>
    <nav>
      <div class="nav-wrapper">
        <a href="/" class="brand-logo">Paul Miller INC.</a>
        <a href="/" data-target="mobile-nav" class="sidenav-trigger"></a>
        <ul id="desktop-nav" class="right hide-on-med-and-down">
          <li><button class="navigate">Home</button> </li>
          <li><button class="navigate" onClick={openMap} >Map</button></li>
          <li><button class="navigate">Adminstrative Mode (Only visible after sign in for certain accounts)</button></li>
          <li><Container class="login" triggerText="Login" onSubmit={login}/></li>
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